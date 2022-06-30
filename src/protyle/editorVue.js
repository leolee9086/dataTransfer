import { genUUID } from "./row/util/genID";
import { Constants } from "./constants";
import { Menus } from "./row/menus";
import { Model } from "./row/layout/Model";
import Protyle from "./row/protyle";
import { disabledProtyle } from "./row/protyle/util/onGet";
import { setPadding } from "./row/protyle/ui/initUI";
import { getAllModels } from "./row/layout/getAll";
import { fetchGet, fetchPost } from "./row/util/fetch";

export default  class editor{
    constructor(element){
        if (!window.siyuan){
            window.siyuan = {
                transactions: [],
                reqIds: {},
                backStack: [],
                layout: {},
                dialogs: [],
                blockPanels: [],
                ctrlIsPressed: false,
                altIsPressed: false,
                ws: new Model({
                    id: genUUID(),
                    type: "main",
                    msgCallback: (data) => {
                        var _a, _b, _c, _d;
                        if (data) {
                            switch (data.cmd) {
                                case "progress":
                                    progressLoading(data);
                                    break;
                                case "downloadProgress":
                                    downloadProgress(data.data);
                                    break;
                                case "txerr":
                                    transactionError(data);
                                    break;
                                case "syncing":
                                    if (data.code === 0) {
                                        document.querySelector("#barSync svg").classList.add("fn__rotate");
                                        document.querySelector("#barSync").classList.add("toolbar__item--active");
                                        (_b = (_a = repos.element) === null || _a === void 0 ? void 0 : _a.querySelector('[data-type="sync"] svg')) === null || _b === void 0 ? void 0 : _b.classList.add("fn__rotate");
                                    }
                                    else {
                                        document.querySelector("#barSync svg").classList.remove("fn__rotate");
                                        document.querySelector("#barSync").classList.remove("toolbar__item--active");
                                        (_d = (_c = repos.element) === null || _c === void 0 ? void 0 : _c.querySelector('[data-type="sync"] svg')) === null || _d === void 0 ? void 0 : _d.classList.remove("fn__rotate");
                                    }
                                    document.querySelector("#barSync").setAttribute("aria-label", data.msg);
                                    break;
                                case "refreshtheme":
                                    if ((window.siyuan.config.appearance.mode === 1 && window.siyuan.config.appearance.themeDark !== "midnight") || (window.siyuan.config.appearance.mode === 0 && window.siyuan.config.appearance.themeLight !== "daylight")) {
                                        document.getElementById("themeStyle").href = data.data.theme;
                                    }
                                    else {
                                        document.getElementById("themeDefaultStyle").href = data.data.theme;
                                    }
                                    break;
                                case "createdailynote":
                                    openFileById({ id: data.data.id, action: [Constants.CB_GET_FOCUS] });
                                    break;
                            }
                        }
                    }
                }),
                menus: new Menus(),
                languages:{
                    "tabLimit": "页签打开最大数量",
                    "tabLimit1": "按照打开时间排序，关闭最早打开的页签",
                    "pasteEscaped": "粘贴转义文本",
                    "resetRepoTip": "重置数据仓库会彻底删除密钥和所有快照，确定进行重置吗？",
                    "resetRepo": "重置数据仓库",
                    "createSnapshot": "创建快照",
                    "dataSnapshot": "数据快照",
                    "copyKey": "复制密钥字符串",
                    "importKey": "导入密钥",
                    "keyPlaceholder": "请在此处粘贴密钥字符串",
                    "key": "密钥",
                    "genKey": "生成密钥",
                    "dataRepoKeyTip1": "数据仓库用于加密保存数据快照，可在数据历史中可创建快照和回滚快照",
                    "dataRepoKeyTip2": "主力设备上初始化密钥以后，其他设备需要导入该密钥。如果设备密钥不一致，则无法云端同步数据快照，所以请务必在所有设备上使用相同的密钥",
                    "dataRepoKey": "数据仓库密钥",
                    "plsChoose": "请先进行选择",
                    "clearMessage": "已读",
                    "freeSub": "免费试用订阅",
                    "sortByUpdateTimeDesc": "更新时间降序",
                    "sortByUpdateTimeAsc": "更新时间升序",
                    "sortByDownloadsDesc": "下载次数降序",
                    "sortByDownloadsAsc": "下载次数升序",
                    "activationCode": "激活码",
                    "activationCodePlaceholder": "请在这里输入订阅激活码",
                    "exportDataTip": "将 <code>工作空间/data/</code> 文件夹下的所有文件以 zip 压缩包方式打包导出",
                    "importDataTip": "将导出的 zip 压缩包导入，按路径覆盖 <code>工作空间/data/</code> 文件夹",
                    "includeChildDoc": "包含子文档",
                    "text": "文本",
                    "lastUsed": "最近使用过的字体",
                    "removedNotebook": "已删除的笔记本",
                    "querySyntax": "查询语法",
                    "rollback": "回滚",
                    "custom": "自定义",
                    "feedback": "反馈",
                    "inbox": "收集箱",
                    "turnToStaticRef": "静态锚文本引用",
                    "turnToDynamicRef": "动态锚文本引用",
                    "turnToStatic": "静态锚文本",
                    "turnToDynamic": "动态锚文本",
                    "sizeLimit": "上限",
                    "trafficStat": "流量统计",
                    "hideHeadingBelowBlocks": "隐藏标题下方的块",
                    "matchDiacritics": "匹配变音符号",
                    "foldTip": "确定修改为编辑模式并记录折叠状态？",
                    "copyHPath": "复制可读路径",
                    "justify": "两侧对齐",
                    "height": "高度",
                    "deactivateUser": "注销账号",
                    "deactivateUserTip": "<ul>\n<li>账号一旦停用就无法恢复，请不要随意尝试</li>\n<li>用户名会被 <code>someone101</code> 填充（后面的数字是用户编号），密码会被随机数重置</li>\n<li>清空用户昵称、自我标签、URL、简介、头像、站点连接、邮寄地址等信息</li>\n<li>所有隐私设置开关将恢复默认的公开状态</li>\n<li>解绑关联的第三方社交账号、手机</li>\n<li><strong>用户名、手机号、绑定的第三方账号以后将不能再次被使用</strong></li>\n<li>用户状态被置为停用，禁止登录</li>\n</ul>",
                    "mergeCell": "合并单元格",
                    "cancelMerged": "拆分单元格",
                    "useDefaultWidth": "使用默认列宽",
                    "crossPageUse": "跨页多选使用提示：在开始位置单击，滚动页面以后在结束位置 ${}",
                    "type": "类型",
                    "searchType": "类型（在以下启用的类型中进行搜索）",
                    "searchAttr": "属性（不仅在内容中进行搜索，同时也会在以下启用的属性中搜索）",
                    "searchBackmention": "反链提及（反链提及搜索关键字从以下方式获得）",
                    "searchVirtualRef": "虚拟引用（虚拟引用搜索关键字从以下方式获得）",
                    "netImg2LocalAsset": "网络图片转换为本地图片",
                    "releaseDate": "发布日期",
                    "pkgSize": "包大小",
                    "optimizeTypography": "优化排版",
                    "dragPosition": "上下拖动图片以调整位置",
                    "exportPDF0": "页面大小",
                    "exportPDF1": "横向页面",
                    "exportPDF2": "页面边距",
                    "exportPDF3": "页面缩放",
                    "exportPDF4": "移除 assets 目录",
                    "upload": "上传",
                    "defaultPasswordTip": "使用自动生成密码后其他设备也都必须使用自动生成密码",
                    "customPassword": "自定义密码",
                    "defaultPassword": "自动生成密码",
                    "reminderTip": "提醒时间不能小于当前时间",
                    "wechatTip": "该内容块将以明文形式发送到云端，到期时通过微信公众号模板消息进行推送",
                    "notEmpty": "提醒时间不能为空",
                    "experimentalFeature": "（⚗️ 该特性正处于试验阶段）",
                    "wechatReminder": "微信提醒",
                    "notifyTime": "提醒时间",
                    "docName": "文档名",
                    "bootSyncFailed": "启动时同步数据失败",
                    "use": "使用",
                    "uninstallTip": "当前正在使用中，需切换后才能进行卸载",
                    "safeQuit": "退出应用",
                    "anchor": "锚文本",
                    "showMore": "显示更多",
                    "refPopover": "使用浮窗打开引用块",
                    "refRight": "在右侧打开引用块",
                    "refBottom": "在下侧打开引用块",
                    "refTab": "在新页签中打开引用块",
                    "showHideBg": "显示/隐藏背景",
                    "directConnection": "直接连接",
                    "networkProxy": "网络代理",
                    "copyAnnotation": "复制标注",
                    "rectAnnotation": "矩形标注",
                    "fileName": "文件名：",
                    "fileSize": "文件大小：",
                    "fileCount": "文件数量：",
                    "title1": "标题：",
                    "author": "作者：",
                    "subject": "主题：",
                    "keywords": "关键词：",
                    "creationDate": "创建日期：",
                    "modificationDate": "修改日期：",
                    "creator": "创建者：",
                    "producer": "生成器：",
                    "version": "版本：",
                    "pageCount": "页数：",
                    "pageSize": "页面大小：",
                    "linearized": "快速 Web 视图：",
                    "firstPage": "转到第一页",
                    "lastPage": "转到最后一页",
                    "rotateCw": "顺时针旋转",
                    "rotateCcw": "逆时针旋转",
                    "cursorText": "文本选择工具",
                    "cursorHand": "手形工具",
                    "scrollVertical": "垂直滚动",
                    "scrollHorizontal": "水平滚动",
                    "scrollWrapped": "平铺滚动",
                    "spreadNone": "单页视图",
                    "spreadOdd": "双页视图",
                    "spreadEven": "书籍视图",
                    "find_match_count_limit": "超过 {{limit}} 项匹配",
                    "find_match_count": "第 {{current}} 项，共匹配 {{total}} 项",
                    "findHighlight": "全部高亮显示",
                    "findEntireWord": "字词匹配",
                    "presentationMode": "切换到演示模式",
                    "focusOutline": "查找当前大纲项目",
                    "previousLabel": "上一页",
                    "nextLabel": "下一页",
                    "pageScaleWidth": "适合页宽",
                    "pageScaleFit": "适合页面",
                    "pageScaleAuto": "自动缩放",
                    "pageScaleActual": "实际大小",
                    "thumbPageTitle": "第 {{page}} 页",
                    "loading": "正在载入…",
                    "toggleSidebarNotification2Title": "切换侧栏（文档所含的大纲/附件/图层）",
                    "toggleSidebarTitle": "切换侧栏",
                    "loadingError": "载入 PDF 时发生错误。",
                    "invalidFileError": "无效或损坏的 PDF 文件。",
                    "missingFileError": "缺少 PDF 文件。",
                    "unexpectedResponseError": "意外的服务器响应。",
                    "printingNotSupported": "警告：此浏览器尚未完整支持打印功能。",
                    "printingNotReady": "警告：此 PDF 未完成载入，无法打印。",
                    "unitInches": "英寸",
                    "unitMillimeters": "毫米",
                    "additionalLayers": "其他图层",
                    "thumbPage": "页面 {{page}} 的缩略图",
                    "thumbsTitle": "显示缩略图",
                    "document_properties_page_size_name_a3": "A3",
                    "document_properties_page_size_name_a4": "A4",
                    "document_properties_page_size_name_letter": "文本",
                    "document_properties_page_size_name_legal": "法律",
                    "document_properties_page_size_orientation_portrait": "纵向",
                    "document_properties_page_size_orientation_landscape": "横向",
                    "find_not_found": "找不到指定词语",
                    "find_reached_top": "到达文档开头，从末尾继续",
                    "find_reached_bottom": "到达文档末尾，从开头继续",
                    "password_label": "输入密码以打开此 PDF 文件。",
                    "password_invalid": "密码无效。请重试。",
                    "stateExcepted": "🚧 状态异常",
                    "rebuildIndex": "重建索引",
                    "rebuildIndexTip": "发现了一个系统运行时错误，请选择需要退出还是重建索引进行修复",
                    "closeNotebook": "已关闭的笔记本",
                    "widget": "挂件",
                    "customEmoji": "添加自定义表情",
                    "customEmojiTip": "打开 <a href=\"javascript:void(0)\" id=\"appearanceOpenEmoji\">Emoji 文件夹</a> 放入图片后并点击刷新按钮",
                    "recentEmoji": "常用表情",
                    "andSubFile": "及其 <b>x</b> 个子文档",
                    "changeIcon": "修改图标",
                    "includeSubFile": "\n包含 x 个子文档",
                    "untitled": "新文档",
                    "goForward": "前进",
                    "goBack": "后退",
                    "lockScreen": "锁屏",
                    "cloudIntro1": "端到端加密数据同步",
                    "cloudIntro2": "加密和解密过程完全在本地设备上进行",
                    "cloudIntro3": "加密算法为业界公认安全的 AES GCM",
                    "cloudIntro4": "用户设置的密码使用程序内置密钥加密后存储在本地",
                    "cloudIntro5": "除非知道密码或者暴力破解，否则不可能被解密",
                    "cloudIntro6": "不限制设备数量和工作空间数量",
                    "cloudIntro7": "不同的本地工作空间分别对应云端不同的数据同步目录",
                    "cloudIntro8": "不同的设备保留自己的数据历史，被同步覆盖或删除的数据不会丢失",
                    "cloudIntro9": "云端图床服务",
                    "cloudIntro10": "一键将本地资源文件上传到云端",
                    "cloudIntro11": "一键将文档复制到公众号、知乎和语雀等平台",
                    "selectAll": "全选",
                    "reposTip": "当前工作空间对应的云端同步目录名称，主力设备上创建后其他设备上进行选择即可",
                    "stickOpen": "保持全部展开",
                    "cloud": "云端",
                    "setEmojiTip": "请在 [设置 - 外观] 中添加自定义表情",
                    "openSyncTip1": "启用云端同步",
                    "openSyncTip2": "从禁用改为启用时建议手动点击同步按钮触发一次同步",
                    "syncMode": "云端同步模式",
                    "syncModeTip": "启用云端同步后可进一步选择同步模式",
                    "syncMode1": "自动同步（数据不再变动后 30 秒进行一次同步）",
                    "syncMode2": "手动同步（仅启动和关闭软件时自动同步一次，其他时候需要手动触发同步）",
                    "cloudSync": "云端同步",
                    "cloudSyncDir": "云端同步目录",
                    "emptyCloudSyncList": "云端同步列表为空",
                    "retry": "重试",
                    "insertVideoURL": "插入视频链接",
                    "insertAudioURL": "插入音频链接",
                    "insertImgURL": "插入图片链接",
                    "insertIframeURL": "插入 IFrame 链接",
                    "context": "上下文",
                    "dockTip": "\n单击 展开/最小化\n右键 调整位置",
                    "shadow": "投影",
                    "hollow": "镂空",
                    "attrValue1": "属性值留空则会自动删除该属性",
                    "specifyPath": "指定路径",
                    "changeE2EEPasswdTip": "当前工作空间使用的是自定义密码，其他其他设备上也必须使用相同的自定义密码才能解密数据。如果你忘记了密码，云端数据将永久丢失，所以请务必牢记该密码",
                    "builtinE2EEPasswdTip": "当前工作空间使用的是自动生成密码，其他设备上也必须使用自动生成密码才能解密数据",
                    "changeE2EEPasswd": "设置端到端加密密码",
                    "setPasswd": "设置密码",
                    "e2eePasswd": "端到端加密密码",
                    "passwdSet": "密码已经设置（如果需要重置密码，请参考帮助文档常见问题）",
                    "e2eePasswdTip": "所有设备上必须设置相同的密码，一旦设置就不支持修改和查看",
                    "addAttr": "添加",
                    "addTag": "添加标签",
                    "width": "宽度",
                    "attrName": "属性名",
                    "attr": "属性",
                    "updatePath": "修改目录",
                    "default": "默认",
                    "titleBg": "题头图",
                    "random": "随机",
                    "downloadRecover1": "将云端备份下载并覆盖本地备份，然后从本地备份进行恢复",
                    "deleteCloudBackup": "彻底删除云端备份",
                    "backupUpload1": "生成加密过的本地备份，然后将该备份上传到云端",
                    "noOpenFile": "没有打开的文档",
                    "backupUpload": "备份并上传",
                    "downloadRecover": "下载并恢复",
                    "cloudBackup": "云端备份",
                    "total": "总计",
                    "cdn": "图床",
                    "backup": "备份",
                    "cloudStorage": "云端存储",
                    "vLayout": "垂直布局",
                    "hLayout": "水平布局",
                    "merge": "合并",
                    "docWordCount": "文档词数",
                    "blockWordCount": "　块词数",
                    "docRuneCount": "文档字数",
                    "blockRuneCount": "　块字数",
                    "wordCount": "词数",
                    "runeCount": "字数",
                    "kbd": "键盘",
                    "errorStyle": "错误样式",
                    "successStyle": "成功样式",
                    "warningStyle": "警告样式",
                    "infoStyle": "信息样式",
                    "chart": "图表",
                    "staff": "五线谱",
                    "sup": "上标",
                    "sub": "下标",
                    "enter": "聚焦",
                    "enterBack": "聚焦到上层",
                    "duplicate": "重复",
                    "turnInto": "转换为",
                    "split": "分屏",
                    "underline": "下划线",
                    "inline-math": "行内数学公式",
                    "moveToUp": "向上移",
                    "moveToDown": "向下移",
                    "moveToLeft": "向左移",
                    "moveToRight": "向右移",
                    "copyProtocol": "复制块超链接",
                    "uploadAssets2CDN": "上传资源文件到云端",
                    "notSupport1": "不支持跨笔记本进行拖拽",
                    "keymapTip": "部分快捷键修改后需点击刷新按钮后才能生效",
                    "keymapTip2": "使用默认快捷键",
                    "searchLimit": "搜索结果显示数",
                    "searchLimit1": "如果数据量较大，该值请勿配置过大，默认为 <code>64</code>",
                    "searchCaseSensitive": "区分大小写",
                    "searchCaseSensitive1": "启用后所有搜索相关功能将区分大小写",
                    "toggleWin": "隐藏/显示窗口",
                    "customSort": "自定义排序",
                    "downloadingUpdate": "正在下载更新包，请稍等...",
                    "collapse": "折叠",
                    "blockEmbed": "嵌入块",
                    "gutterTip": "拖拽 移动位置<br>点击 打开菜单<br>⌘Click 进入<br>⌥Click 折叠/展开<br>⇧Click 修改属性",
                    "gutterTip2": "点击 打开菜单<br>⇧Click 修改属性",
                    "linkDistance": "链接距离",
                    "collideStrength": "斥力强度",
                    "collideRadius": "斥力半径",
                    "centerStrength": "中心引力强度",
                    "lineOpacity": "连线透明度",
                    "lineWidth": "连线粗细",
                    "nodeSize": "节点大小",
                    "arrow": "箭头",
                    "paragraph": "段落",
                    "math": "数学公式块",
                    "listItem": "列表项",
                    "superBlock": "超级块",
                    "expandAll": "全部展开",
                    "collapseAll": "全部折叠",
                    "showDock": "显示停靠栏",
                    "hideDock": "隐藏停靠栏",
                    "notebookName": "请输入笔记本名称",
                    "moveToLeftTop": "移动到左侧上方",
                    "moveToLeftBottom": "移动到左侧下方",
                    "moveToRightTop": "移动到右侧上方",
                    "moveToRightBottom": "移动到右侧下方",
                    "moveToTopLeft": "移动到上侧左方",
                    "moveToTopRight": "移动到上侧右方",
                    "moveToBottomLeft": "移动到下侧左方",
                    "moveToBottomRight": "移动到下侧右方",
                    "accountDisplayTitle": "顶栏显示头衔",
                    "accountDisplayVIP": "顶栏显示 VIP",
                    "rollbackConfirm": "回滚是不可逆的操作，一旦执行回滚后数据就无法回到当前状态，确定使用 <b>${date}</b> 进行回滚吗？",
                    "pdfTip": "PDF 导出不支持深色主题",
                    "pdfConfirm": "是否使用已选择的浅色主题继续导出？",
                    "import": "导入",
                    "doc": "文档",
                    "openBy": "打开",
                    "replace": "替换",
                    "replaceAll": "全部替换",
                    "alias": "别名",
                    "exportTplSucc": "模板导出成功",
                    "exportTplTip": "该数据已经存在，是否需要覆盖？",
                    "globalSearch": "全局搜索",
                    "stickSearch": "固定搜索",
                    "resetLayout1": "重置布局",
                    "zoomIn": "放大",
                    "zoomOut": "缩小",
                    "template": "模板",
                    "move": "移动",
                    "layout": "布局",
                    "expandLevel": "展开层级",
                    "mindmap": "脑图",
                    "dailyNote": "日记",
                    "memo": "备注",
                    "name": "命名",
                    "fold": "折叠/展开",
                    "zoom": "缩放和位置",
                    "invalid": "无效",
                    "conflict": "冲突",
                    "checkToggle": "任务列表勾选切换",
                    "heading1": "一级标题",
                    "heading2": "二级标题",
                    "heading3": "三级标题",
                    "heading4": "四级标题",
                    "heading5": "五级标题",
                    "heading6": "六级标题",
                    "general": "通用",
                    "insertBefore": "光标所在块前插入空块",
                    "insertAfter": "光标所在块后插入空块",
                    "list1": "列表",
                    "insert": "插入元素",
                    "closeTab": "关闭当前页签",
                    "keymap": "快捷键",
                    "clearFontStyle": "清除样式",
                    "fontStyle": "字体效果",
                    "font": "字体",
                    "folder": "文件夹",
                    "day": "天",
                    "pin": "钉住",
                    "unpin": "取消钉住",
                    "createdAt": "创建于",
                    "modifiedAt": "更新于",
                    "download": "下载",
                    "uninstall": "卸载",
                    "all": "全部",
                    "bazaar": "集市",
                    "revolve": "旋转",
                    "useDefault": "使用默认程序打开",
                    "previous": "上一个",
                    "next": "下一个",
                    "lockFile0": "无法存取数据",
                    "lockFile1": "数据文件已被其他程序锁定。（如果使用了第三方同步盘，请检查同步状态）",
                    "lockFile2": "如果后续使用仍然频繁出现该问题，请通过<a href=\"https://ld246.com/article/1649901726096\" target=\"_blank\">社区</a>进行反馈，谢谢！",
                    "kernelFault0": "内核连接中断...",
                    "kernelFault1": "如果 7 秒后该对话框没有自动消失，请关闭窗口后重新启动。",
                    "kernelFault2": "如果重启后仍然出现该问题，请通过<a href=\"https://ld246.com/article/1649901726096\" target=\"_blank\">社区</a>进行反馈，谢谢！",
                    "fontSize": "字号",
                    "fontSizeTip": "字号默认为 16px，该设置仅影响编辑器内字体大小显示",
                    "font1": "该设置仅影响编辑器内字体显示，选择 <code>默认</code> 则使用主题自带字体",
                    "newNameFile": "新建文档名为",
                    "newContentFile": "新建文档内容为",
                    "exporting": "正在导出，请稍等...",
                    "exported": "导出完成：",
                    "refExpired": "不存在符合条件的内容块",
                    "emptyContent": "暂无相关内容",
                    "useBrowserView": "在浏览器中查看",
                    "userLocalPDF": "使用本地 PDF 工具打开",
                    "copyID": "复制 ID",
                    "newBookmark": "新建书签标识",
                    "generateHistory": "历史生成间隔（分钟，设置为 0 则禁用）",
                    "generateHistoryInterval": "编辑或删除时会自动生成历史，可在数据历史中可查看和回滚",
                    "historyRetentionDays": "历史保留天数",
                    "historyRetentionDaysTip": "超过保留天数的历史数据会被自动彻底删除",
                    "clearHistory": "清空所有历史",
                    "confirmClearHistory": "确定要彻底删除工作空间下的所有历史数据吗？",
                    "fileNameASC": "名称字母升序",
                    "fileNameDESC": "名称字母降序",
                    "modifiedASC": "修改时间升序",
                    "modifiedDESC": "修改时间降序",
                    "fileNameNatASC": "名称自然升序",
                    "fileNameNatDESC": "名称自然降序",
                    "refCountASC": "引用数升序",
                    "refCountDESC": "引用数降序",
                    "createdASC": "创建时间升序",
                    "createdDESC": "创建时间降序",
                    "sort": "排序",
                    "enterFullscreen": "进入全屏幕",
                    "exitFullscreen": "退出全屏幕",
                    "clearUnused": "未引用资源",
                    "clearAll": "确认清理所有未引用资源？",
                    "paste": "粘贴",
                    "pasteRef": "粘贴引用块",
                    "pasteEmbed": "粘贴块嵌入",
                    "cut": "剪切",
                    "mentions": "提及",
                    "colorBorder": "线条颜色",
                    "colorFont": "字体颜色",
                    "colorGraph": "关系图颜色",
                    "colorInline": "文档行级元素颜色",
                    "colorPrimary": "背景颜色",
                    "colorScroll": "滚动条颜色",
                    "colorTab": "页签颜色",
                    "colorTip": "提示颜色",
                    "--b3-theme-primary": "主色",
                    "--b3-theme-primary-light": "主色 - 浅",
                    "--b3-theme-primary-lighter": "主色 - 较浅",
                    "--b3-theme-primary-lightest": "主色 - 最浅",
                    "--b3-theme-secondary": "第二色调",
                    "--b3-theme-background": "背景色",
                    "--b3-theme-surface": "第二背景色",
                    "--b3-theme-error": "警告色",
                    "--b3-theme-on-primary": "主色调上的文本",
                    "--b3-theme-on-secondary": "第二色调上的文本",
                    "--b3-theme-on-background": "背景色上的文本",
                    "--b3-theme-on-surface": "第二背景色上的文本",
                    "--b3-theme-on-error": "警告色上的文本",
                    "--b3-border-color": "线条",
                    "--b3-scroll-color": "滚动条",
                    "--b3-list-hover": "鼠标移动到列表上",
                    "--b3-tab-background": "页签背景",
                    "--b3-tooltips-color": "提示背景",
                    "--b3-graph-p-point": "段落的点",
                    "--b3-graph-heading-point": "标题的点",
                    "--b3-graph-math-point": "数学公式块的点",
                    "--b3-graph-code-point": "代码块的点",
                    "--b3-graph-table-point": "表格的点",
                    "--b3-graph-list-point": "列表的点",
                    "--b3-graph-todo-point": "任务列表的点",
                    "--b3-graph-olist-point": "有序列表的点",
                    "--b3-graph-listitem-point": "列表项的点",
                    "--b3-graph-bq-point": "引述的点",
                    "--b3-graph-super-point": "超级块的点",
                    "--b3-graph-doc-point": "文档的点",
                    "--b3-graph-tag-point": "标签的点",
                    "--b3-graph-asset-point": "资源的点",
                    "--b3-graph-line": "线",
                    "--b3-graph-ref-line": "引用块节点之间的线",
                    "--b3-graph-tag-line": "标签和节点之间的线",
                    "--b3-graph-tag-tag-line": "标签和标签之间的线",
                    "--b3-graph-asset-line": "资源和节点之间的线",
                    "--b3-graph-hl-point": "选中的点",
                    "--b3-graph-hl-line": "选中的线",
                    "--b3-protyle-inline-strong-color": "粗体",
                    "--b3-protyle-inline-em-color": "斜体",
                    "--b3-protyle-inline-s-color": "删除线",
                    "--b3-protyle-inline-link-color": "链接",
                    "--b3-protyle-inline-mark-background": "标记背景色",
                    "--b3-protyle-inline-mark-color": "标记",
                    "--b3-protyle-inline-tag-color": "标签",
                    "--b3-protyle-inline-blockref-color": "引用块",
                    "open": "开启",
                    "sync": "同步",
                    "syncNow": "立即同步",
                    "cloudBook": "云端笔记本",
                    "payment": "支付",
                    "refresh": "刷新",
                    "accountManage": "账号管理",
                    "logout": "登出",
                    "refreshUser": "用户信息刷新完毕",
                    "insertBottom": "在页签下侧打开",
                    "insertRight": "在页签右侧打开",
                    "downloadCloud": "从云端下载",
                    "downloadCloudTip": "下载后将使用云端备份覆盖本地备份，是否下载？",
                    "account3Tip": "将使用本地备份覆盖云端备份，是否上传？",
                    "account1": "点击前往支付",
                    "account2": "<div>端到端加密数据同步</div><div>端到端加密数据备份</div><div>资源文件图床</div><div>定时微信提醒</div><div>收集箱</div>",
                    "account3": "试用订阅",
                    "account4": "续订价格终身不变",
                    "account5": "云端图床服务",
                    "account6": "距订阅过期还剩",
                    "account7": "更多高级特性",
                    "account8": "<div>🏫 <a target='_black' href='https://ld246.com/article/1618844886264'>教育优惠申请</a></div>",
                    "account10": "年付订阅",
                    "account11": "早鸟优惠活动结束还剩",
                    "account12": "相伴一生",
                    "clickMeToRenew": "<a href=\"https://ld246.com/subscribe/siyuan\" target=\"_blank\">前往续订</a>",
                    "priceAnnual": "￥148",
                    "year": "年",
                    "dataHistory": "数据历史",
                    "quitApp": "是否退出？",
                    "reset": "重置",
                    "siyuanNote": "思源笔记",
                    "resetLayout": "恢复默认窗口",
                    "tag": "标签",
                    "twoFactorCaptcha": "两步验证验证码",
                    "captcha": "验证码",
                    "register": "注册新账号",
                    "login": "登录",
                    "accountTip": "我已阅读并同意<a target='_blank' href='https://b3log.org/siyuan/privacy.html'>思源笔记隐私政策</a>",
                    "forgetPassword": "忘记密码",
                    "accountName": "用户名/邮箱/手机号",
                    "account": "账号",
                    "globalGraph": "全局关系图",
                    "backlinks": "反向链接",
                    "editor": "编辑器",
                    "appearance6": "重置后窗口布局将恢复初始化状态",
                    "appearance9": "打开主题文件夹",
                    "appearance8": "打开图标文件夹",
                    "appearance7": "随日出日落自动切换",
                    "appearance5": "选择外观呈现模式",
                    "appearance4": "模式",
                    "appearance3": "暗黑模式下代码块语法高亮主题",
                    "appearance2": "明亮模式下代码块语法高亮主题",
                    "appearance1": "代码块主题",
                    "appearance10": "关闭按钮设置",
                    "appearance11": "点击关闭按钮后缩小到托盘中",
                    "appearance14": "文档图标使用系统原生 Emoji",
                    "appearance15": "桌面端默认使用 Twitter Emoji，开启后将使用系统原生的 Emoji",
                    "appearance16": "隐藏底部状态栏",
                    "appearance17": "开启后将隐藏桌面端底部状态栏",
                    "min": "最小化",
                    "restore": "向下还原",
                    "max": "最大化",
                    "md2": "代码块连字",
                    "md3": "开启后，代码块将显示连字",
                    "md4": "自动进行段首缩进，以符合传统中文排版习惯",
                    "md7": "是否显示网络图片角标",
                    "md8": "开启后如果图片是网络文件（非本地资源文件）则会显示角标",
                    "md12": "是否显示书签、命名、别名、备注和引用计数",
                    "md16": "开启后如果存在这些信息则将在块的右上侧进行显示",
                    "md27": "代码块显示行号",
                    "md28": "开启后代码块会显示行号",
                    "md29": "Tab 空格数",
                    "md30": "仅在按下 Tab 时替换为空格，不会将剪切板中的 Tab 替换为空格",
                    "md31": "代码块换行",
                    "md32": "开启后代码块中的内容将自动换行",
                    "md33": "虚拟引用",
                    "md34": "开启后将自动根据已有块引的命名、别名和锚文本来标识出可能存在的引用关系",
                    "md35": "虚拟引用关键字排除列表",
                    "md36": "使用英文状态下的逗号 <code>,</code> 进行分隔，逗号自身可通过 <code>\\,</code> 转义",
                    "md37": "块引动态锚文本最大长度",
                    "md38": "不自定义块引锚文本时自动渲染锚文本的最大长度，默认为 <code>96</code> 个字符",
                    "md39": "PlantUML 伺服地址",
                    "md40": "留空将恢复默认值 <code>https://www.plantuml.com/plantuml/svg/~1</code>",
                    "fileTree2": "在编辑器页签切换时文档树会自动选中当前的文档",
                    "fileTree3": "删除文档时不需要确认",
                    "fileTree4": "不启用时每次删除文档都会弹出确认框",
                    "fileTree5": "块引新建文档存放位置",
                    "fileTree6": "使用 <code>((</code> 时新建文档的存放路径（例如 /folder1/folder2/，不以 / 开头则使用当前文档相对路径）",
                    "fileTree7": "在当前页签中打开",
                    "fileTree8": "新打开的文档页签将会替换没有修改过的页签",
                    "fileTree11": "新建日记",
                    "fileTree12": "新建文档名模板",
                    "fileTree13": "使用该模板片段进行命名，例如 <code>{{now | date \"20060102150405\"}}</code>",
                    "fileTree14": "存放路径（可使用日期格式模板变量，例如 <code>/日记/{{now | date \"2006/01\"}}/{{now | date \"2006-01-02\"}}</code>）",
                    "fileTree15": "模板路径（例如 <code>dailynote.md</code>，需要将该文件放置于工作空间/data/templates/ 下）",
                    "fileTree16": "最大列出数量",
                    "fileTree17": "如果子文档非常多，可通过该项限制以提升性能",
                    "fileTree18": "允许创建深度大于 7 层的子文档",
                    "fileTree19": "一些操作系统存在技术限制导致创建大于 7 层的子文档后可能无法正常手动复制工作空间数据",
                    "export11": "导出时关于引用块内容的处理方式",
                    "export12": "导出时关于嵌入块内容的处理方式",
                    "export13": "锚文本包裹符号",
                    "export14": "请依次在输入框中填写锚文本左侧符号和锚文本右侧符号",
                    "export15": "标签包裹符号",
                    "export16": "请依次在输入框中填写标签左侧符号和标签右侧符号",
                    "export17": "添加文档标题",
                    "export18": "将文档标题以一级标题的形式插入到开头",
                    "export19": "Pandoc 可执行文件路径",
                    "export20": "导出 Word .docx 文件需要使用 <a href=\"https://pandoc.org\" target=\"_blank\">Pandoc</a> 进行格式转换",
                    "blockRef": "引用块",
                    "theme11": "明亮模式下使用主题",
                    "theme12": "暗黑模式下使用主题",
                    "theme13": "自定义当前主题",
                    "theme14": "开启后会使用自定义后的主题，关闭后将使用原有主题",
                    "theme2": "选择外观使用的图标",
                    "language1": "选择外观的显示语言",
                    "summary": "摘要",
                    "bookmark": "书签",
                    "icon": "图标",
                    "appearance": "外观",
                    "export0": "原始文本",
                    "export1": "引述块",
                    "export2": "锚文本块链",
                    "export3": "仅锚文本",
                    "export4": "脚注",
                    "export5": "PDF 标注引用",
                    "export6": "导出时关于 PDF 标注引出处锚文本的处理方式",
                    "export7": "文件名 - 页码 - 锚文本",
                    "export8": "仅锚文本",
                    "graphConfig2": "引用块次数过滤",
                    "selectOpen": "始终定位打开的文档",
                    "selectOpen1": "定位打开的文档",
                    "closeAll": "关闭全部",
                    "closeOthers": "关闭其他",
                    "closeLeft": "关闭左侧页签",
                    "closeRight": "关闭右侧页签",
                    "closeUnmodified": "关闭未修改的页签",
                    "newFileTip": "请先打开一个笔记本",
                    "copyBlockRef": "复制该块为引用块",
                    "copyBlockEmbed": "复制该块为嵌入块",
                    "linkLevel": "层级",
                    "mark": "标记",
                    "splitLR": "向右分屏",
                    "splitMoveR": "向右分屏并移动",
                    "splitTB": "向下分屏",
                    "splitMoveB": "向下分屏并移动",
                    "debug": "开发者工具",
                    "fileTree": "文档树",
                    "graphView": "关系图",
                    "sponsor": "靠爱发电 获取头衔",
                    "relativeRelation": "关联关系",
                    "parentRelation": "父子关系",
                    "openInNewTab": "在新页签中打开",
                    "help": "帮助",
                    "paragraphBeginningSpace": "段落开头空两格",
                    "outline": "大纲",
                    "newFile": "新建文档",
                    "close": "关闭",
                    "delete": "删除",
                    "rename": "重命名",
                    "cancel": "取消",
                    "confirm": "确定",
                    "confirmDelete": "确定删除",
                    "confirmDeleteCloudDir": "确定删除云端同步目录",
                    "back": "返回上一层",
                    "mount": "打开笔记本",
                    "newNotebook": "新建笔记本",
                    "fileNameRule": "不能包含 / 字符",
                    "slogan": "构建你永恒的数字花园",
                    "showInFolder": "打开文件位置",
                    "search": "搜索",
                    "config": "设置",
                    "userName": "用户名",
                    "password": "密码",
                    "language": "语言",
                    "theme": "主题",
                    "about": "关于",
                    "about1": "版权所有 (c) 2020-现在 • 云南链滴科技有限公司 • <a target='_blank' href='https://b3log.org/siyuan/privacy.html'>隐私政策</a> • <a target='_blank' href='https://b3log.org/siyuan/eula.html'>用户协议</a><div class='fn__hr'></div><div class='fn__hr'></div><div class='ft__on-surface'>思源笔记的核心开发者是 <a href=\"https://ld246.com/member/88250\" target=\"_blank\">D</a> 和 <a href=\"https://ld246.com/member/Vanessa\" target=\"_blank\">V</a>，社区开发贡献者可在<a href=\"https://github.com/siyuan-note/bazaar/graphs/contributors\" target=\"_blank\">这里</a>看到</div>",
                    "about2": "在浏览器上使用",
                    "about3": "请使用 Chrome 浏览器并保持和电脑在同一个网络内，端口 <code>6806</code>，可能连通的 IP 地址如下",
                    "about4": "打开浏览器",
                    "about5": "访问授权码",
                    "about6": "配置后作为访问鉴权密码，留空则关闭鉴权",
                    "about7": "工作空间目录",
                    "about8": "切换工作空间后不会将当前工作空间的数据复制到目标工作空间中<br>如果需要复制数据，请手动在文件系统上将当前工作空间 <code>data</code> 文件夹拷贝到目标工作空间下<br>修改后会自动关闭应用，请手动重启",
                    "about9": "自动上传报错信息和诊断数据",
                    "about10": "开启后会通过 <a href=\"https://sentry.io\" target=\"_blank\">Sentry</a> SDK 自动上传报错信息和诊断数据等不涉及个人隐私的数据，以便开发者修复缺陷和提升用户体验。修改后会自动关闭应用，请手动重启",
                    "about11": "网络伺服",
                    "about12": "启用后将允许同一局域网内的其他设备进行访问。修改后会自动关闭应用，请手动重启",
                    "about13": "API token",
                    "about14": "调用 API 时需要通过该 token 进行鉴权",
                    "about17": "设置为 <code>直接连接</code> 时不启用代理。修改后会自动关闭应用，请手动重启",
                    "checkUpdate": "检查更新",
                    "currentVer": "当前版本",
                    "visitAnnouncements": "<a href=\"https://ld246.com/tag/siyuan-announcement\" target=\"_blank\">浏览系统公告</a>",
                    "themeLight": "明亮",
                    "themeDark": "暗黑",
                    "pasteAsPlainText": "粘贴为纯文本",
                    "assets": "资源",
                    "alignCenter": "居中",
                    "alignLeft": "居左",
                    "alignRight": "居右",
                    "alternateText": "替代文本",
                    "bold": "粗体",
                    "both": "编辑 & 预览",
                    "check": "任务列表",
                    "code": "代码块",
                    "code-theme": "代码块主题预览",
                    "column": "列",
                    "content-theme": "内容主题预览",
                    "copied": "已复制",
                    "copy": "复制",
                    "delete-column": "删除列",
                    "delete-row": "删除行",
                    "devtools": "抽象语法树",
                    "down": "下",
                    "downloadTip": "该浏览器不支持下载功能",
                    "edit-mode": "模式切换",
                    "emoji": "表情",
                    "export": "导出",
                    "fileTypeError": "文件类型不允许上传",
                    "fullscreen": "全屏切换",
                    "generate": "生成中",
                    "headings": "标题",
                    "imageURL": "图片地址",
                    "indent": "列表缩进",
                    "info": "关于",
                    "inline-code": "行内代码",
                    "insert-after": "末尾插入行",
                    "insert-before": "起始插入行",
                    "insertColumnLeft": "在左边插入一列",
                    "insertColumnRight": "在右边插入一列",
                    "insertRowAbove": "在上方插入一行",
                    "insertRowBelow": "在下方插入一行",
                    "italic": "斜体",
                    "line": "分隔线",
                    "link": "链接",
                    "list": "无序列表",
                    "more": "更多",
                    "nameEmpty": "文件名不能为空",
                    "ordered-list": "有序列表",
                    "outdent": "列表反向缩进",
                    "over": "超过",
                    "preview": "导出预览",
                    "quote": "引述",
                    "startRecord": "开始录音",
                    "endRecord": "结束录音",
                    "record-tip": "该设备不支持录音功能",
                    "recording": "录音中...",
                    "redo": "重做",
                    "remove": "删除",
                    "row": "行",
                    "splitView": "分屏预览",
                    "strike": "删除线",
                    "table": "表格",
                    "title": "标题",
                    "tooltipText": "提示文本",
                    "undo": "撤销",
                    "up": "上",
                    "update": "更新",
                    "insertAsset": "插入图片或文件",
                    "uploadError": "上传错误",
                    "uploading": "上传中...",
                    "wysiwyg": "所见即所得",
                    "_label": "简体中文",
                    "_time": {
                        "albl": "以前",
                        "blbl": "距现在",
                        "now": "刚刚",
                        "1s": "1 秒%s",
                        "xs": "%d 秒%s",
                        "1m": "1 分钟%s",
                        "xm": "%d 分钟%s",
                        "1h": "1 小时%s",
                        "xh": "%d 小时%s",
                        "1d": "1 天%s",
                        "xd": "%d 天%s",
                        "1w": "1 个星期%s",
                        "xw": "%d 个星期%s",
                        "1M": "1 个月%s",
                        "xM": "%d 个月%s",
                        "1y": "1 年%s",
                        "2y": "2 年%s",
                        "xy": "%d 年%s",
                        "max": "很久%s"
                    },
                    "_kernel": {
                        "0": "查询笔记本失败",
                        "1": "文件名重复",
                        "2": "列出笔记本 [%s] 下路径为 [%s] 的文件列表失败：%s",
                        "3": "读取笔记本 [%s] 下的文件 [%s] 失败：%s",
                        "4": "查看笔记本 [%s] 下 [%s] 的元信息失败：%s",
                        "5": "移动笔记本 [%s] 下的文件 [%s] 失败：%s",
                        "6": "在笔记本 [%s] 下创建新文件夹 [%s] 失败：%s",
                        "7": "在笔记本 [%s] 下删除 [%s] 失败：%s",
                        "8": "检查更新失败",
                        "9": "有新版本可用，请浏览发布公告 %s",
                        "10": "已是最新版",
                        "11": "请先配置 [设置 - 云端 - 端到端加密密码]",
                        "12": "查询资源文件失败 [%s]",
                        "13": "无法创建 . 开头的文件",
                        "14": "导出失败：%s",
                        "15": "未找到 ID 为 [%s] 的内容块，请在文档树面板菜单【重建索引】以后再试",
                        "16": "请输入文档名",
                        "17": "启动时初次同步失败，继续操作可能会发生无法预测的数据覆盖，请先执行一次同步",
                        "18": "获取社区用户账号失败",
                        "19": "用户信息已过期，请重新登录账号",
                        "20": "包含子文档时无法转换为标题",
                        "21": "备份完毕",
                        "22": "正在备份，请稍等...",
                        "23": "备份失败：%s",
                        "24": "获取云端同步信息失败：%s",
                        "25": "属性名仅支持英文字母和阿拉伯数字",
                        "26": "请先在 [设置 - 关于 - 数据仓库密钥] 中初始化数据仓库密钥",
                        "27": "数据完整性校验失败",
                        "28": "端到端加密密码不正确，无法解密数据",
                        "29": "该功能需要<a target='_blank' href='https://ld246.com/subscribe/siyuan'>付费订阅</a>（如果你已经订阅，请在 设置 - 账号中刷新或者重新登录）",
                        "30": "获取云端备份信息失败",
                        "31": "账号鉴权失败，请重新登录账号",
                        "32": "删除云端笔记本失败",
                        "33": "读写文件或访问网络权限不足，请检查工作空间文件夹权限和杀毒软件/防火墙的设置。如果你曾经使用管理员身份运行过思源，请考虑切换到新的工作空间目录，后续请勿使用管理员身份运行（当前的工作空间目录可能已经无法使用普通用户访问）",
                        "34": "只读模式下不支持该操作",
                        "35": "正在重建索引，请稍等...",
                        "36": "请在应用商店中检查版本更新",
                        "37": "云端同步目录的名称请勿包含空格和特殊符号",
                        "38": "提及关键字数量 [%d] 过多，目前最多仅支持搜索 [512] 个关键字",
                        "39": "端到端加密密码不能为空",
                        "40": "解密数据失败",
                        "41": "上传完毕",
                        "42": "设置完成，即将自动关闭应用，请稍后重新启动...",
                        "43": "已超过云端空间最大存储容量 [%s]，无法继续上传数据",
                        "44": "模板解析失败：%s",
                        "45": "正在打开，请稍等...",
                        "46": "因为网络问题导致下载 [%s] 失败，请稍后重试",
                        "47": "卸载失败：%s",
                        "48": "仅列出前 [%d] 个子文档，如需调整请修改 [设置 - 文档树 - 最大列出数量]",
                        "49": "请在笔记本设置中指定日记存放路径",
                        "50": "正在解析引用 [%s]",
                        "51": "正在缓存内容块 [%d]",
                        "52": "每次打开用户指南笔记本数据都会被重置，所以请勿在其中保存任何数据",
                        "53": "已完成索引 [%d] 篇文档，剩余待处理 [%d]",
                        "54": "正在索引引用关系...",
                        "55": "已完成索引 [%d] 篇文档的引用关系",
                        "56": "已完成索引 [%d] 篇文档",
                        "57": "创建临时密钥失败",
                        "58": "重建索引完毕，稍后将自动刷新界面...",
                        "59": "设置同步忽略列表失败",
                        "60": "获取更新包失败：%s",
                        "61": "上传中，请稍等...",
                        "62": "恢复完毕，即将重建索引...",
                        "63": "正在恢复，请稍等...",
                        "64": "共有文件 [%d] 个，需要一些时间进行索引，请稍等...",
                        "65": "导出数据中...",
                        "66": "已创建数据文件 [%s]",
                        "67": "上传于 %s，下载于 %s",
                        "68": "下载中，请稍等...",
                        "69": "下载完毕",
                        "70": "复制笔记本 [%s] 下的文件 [%s] 失败：%s",
                        "71": "插入资源文件失败，请重新打开文档",
                        "72": "内容已经复制到系统剪切板，请到思源中进行粘贴",
                        "73": "正在导入，请稍等...",
                        "74": "内核尚未完全启动 [%d%%]，请稍后再试",
                        "75": "尝试锁定文件 [%s] 失败",
                        "76": "数据文件已被其他程序锁定。（如果使用了第三方同步盘，请检查同步状态）",
                        "77": "不可用的目录路径 [%s]",
                        "78": "新老路径重复",
                        "79": "仅支持导入 Markdown 文档",
                        "80": "同步失败：%s",
                        "81": "数据同步中...",
                        "82": "同步于 %s",
                        "83": "访问授权码不正确",
                        "84": "用于同步的元数据已被损坏，请参考 <a href=\"https://ld246.com/article/1627822637525\" target=\"_blank\">这里</a> 进行解决",
                        "85": "文件被其他程序占用。运行期间请勿使用系统文件管理器打开工作空间文件夹；请勿使用第三方实时同步盘并检查工作空间文件夹是否有写入权限",
                        "86": "请先配置 [设置 - 关于 - 访问授权码]",
                        "87": "无法移动到该位置",
                        "88": "已完成解析 [%d] 个数据文件，剩余待处理 [%d]",
                        "89": "本地数据将覆盖云端同步目录 <em>%s</em> 数据",
                        "90": "云端同步目录 <em>%s</em> 数据将覆盖本地数据",
                        "91": "本地数据和云端同步目录 <em>%s</em> 数据一致",
                        "92": "端到端加密密码设置完毕",
                        "93": "下载失败：%s",
                        "94": "上传失败：%s",
                        "95": "正在退出...",
                        "96": "退出时同步失败，请手动执行一次同步以确保本地数据和云端数据一致",
                        "97": "强制退出",
                        "98": "请勿将工作空间设置在安装路径下，否则卸载或更新程序时会导致数据丢失",
                        "99": "清理数据完成",
                        "100": "正在清理数据...",
                        "101": "设置提醒完毕 [%s]",
                        "102": "正在设置端到端加密密码...",
                        "103": "已下载 [%d] 个数据文件，剩余待下载 [%d]",
                        "104": "已上传 [%d] 个数据文件，剩余待上传 [%d]",
                        "105": "网络传输完毕",
                        "106": "数据下载已经完成，正在进行解密...",
                        "107": "正在移动文档 [%s]",
                        "108": "正在清理已过时的索引...",
                        "109": "移除提醒完毕 [%s]",
                        "110": "正在重命名...",
                        "111": "正在保存文档 [%s]...",
                        "112": "请勿包含 Markdown 语法标记符",
                        "113": "正在完成数据写入...",
                        "114": "标签不能为空",
                        "115": "请先配置 [设置 - 导出 - Pandoc 可执行文件路径]",
                        "116": "正在处理中，请稍等...",
                        "117": "[%s] 不是有效的 Pandoc 可执行文件",
                        "118": "当前设置不允许在 7 层深度的文档下创建子文档",
                        "119": "正在下载网络图片 [%s]",
                        "120": "下载完毕，一共 [%d] 个文件",
                        "121": "该文档中不存在网络图片",
                        "122": "该功能需在思源桌面端进行配置",
                        "123": "添加/选择云端同步目录后才能启用同步功能",
                        "124": "请在 [设置 - 启用云端同步] 中开启云端同步",
                        "125": "自动同步下载失败次数过多，请尝试手动触发同步，如果还有问题请<a href=\"https://ld246.com/article/1649901726096\" target=\"_blank\">反馈</a>",
                        "126": "书签不能为空",
                        "127": "订阅距过期还剩 [%d] 天，过期后云端数据会被彻底删除。续订请访问<a target='_blank' href='https://ld246.com/subscribe/siyuan'>这里</a>，如果不需要续订，请登出账号关闭该提醒",
                        "128": "订阅已经过期，过期后云端数据会被彻底删除。续订请访问<a target='_blank' href='https://ld246.com/subscribe/siyuan'>这里</a>，如果不需要续订，请登出账号关闭该提醒",
                        "129": "已传输文件 %d\n接收字节数 %s\n",
                        "130": "已传输文件 %d\n发送字节数 %s\n",
                        "131": "下载耗时 %.2fs",
                        "132": "上传耗时 %.2fs",
                        "133": "本地数据暂无变更",
                        "134": "为避免刚恢复的数据被同步覆盖，数据同步功能已被自动暂停",
                        "135": "请确保所有设备已经更新到最新版，然后在主力设备上随意更改一个文档后触发同步，最后再到其他设备触发同步",
                        "136": "初始化数据仓库密钥...",
                        "137": "初始化数据仓库密钥失败",
                        "138": "数据仓库密钥设置完毕",
                        "139": "正在生成数据快照，已处理 [%s] 个数据文件，剩余待处理 [%s]...",
                        "140": "创建数据快照失败：%s",
                        "141": "回滚数据快照失败",
                        "142": "快照备注不能为空",
                        "143": "正在创建数据快照...",
                        "144": "正在重置数据仓库...",
                        "145": "数据仓库重置完毕",
                        "146": "重置数据仓库失败：%s",
                        "147": "创建了一个新的数据快照，耗时 %.2fs",
                        "148": "检查数据快照，没有发现任何变化",
                        "149": "已经同步数据快照，耗时 %.2fs"
                    }
                },
                config:{
                    "logLevel": "debug",
                    "appearance": {
                        "mode": 0,
                        "darkThemes": [
                            "CityInDark",
                            "Cliff Dark",
                            "Concise Dark",
                            "Dark+",
                            "Dark-Blue",
                            "mauve",
                            "midnight",
                            "mini-vlook",
                            "notion-dark",
                            "puredark",
                            "Room",
                            "Sci-Fi",
                            "Sci-Fi111",
                            "tonight",
                            "Tsundoku Dark",
                            "zhang-dark"
                        ],
                        "lightThemes": [
                            "BearLight",
                            "blue-dog",
                            "Blue-X",
                            "BluePrint From Tsundoku",
                            "Chrome-A4",
                            "chuizi",
                            "Concise Light",
                            "Dark+",
                            "daylight",
                            "Fruits Pink",
                            "HBuilderX-Light",
                            "Knowledge Brain",
                            "Light-bf",
                            "Light-Blue",
                            "min-verse",
                            "mini-vlook",
                            "naive",
                            "notion-theme",
                            "paperX",
                            "purelight",
                            "Rem Craft",
                            "salt",
                            "toy",
                            "Tsundoku Green",
                            "Tsundoku Light",
                            "Tsundoku Stone",
                            "vert",
                            "white-elephant",
                            "Zhang Light",
                            "Zhang-Light",
                            "深绿色"
                        ],
                        "themeDark": "Dark+",
                        "themeLight": "naive",
                        "themeVer": "1.0.0",
                        "icons": [
                            "ant",
                            "material",
                            "notion-icon"
                        ],
                        "icon": "material",
                        "iconVer": "1.0.6",
                        "nativeEmoji": false,
                        "codeBlockThemeLight": "github",
                        "codeBlockThemeDark": "base16/dracula",
                        "lang": "zh_CN",
                        "customCSS": false,
                        "themeJS": true,
                        "closeButtonBehavior": 1,
                        "hideStatusBar": false
                    },
                    "langs": [
                        {
                            "label": "English",
                            "name": "en_US"
                        },
                        {
                            "label": "Français",
                            "name": "fr_FR"
                        },
                        {
                            "label": "繁體中文",
                            "name": "zh_CHT"
                        },
                        {
                            "label": "简体中文",
                            "name": "zh_CN"
                        }
                    ],
                    "lang": "zh_CN",
                    "fileTree": {
                        "alwaysSelectOpenedFile": true,
                        "openFilesUseCurrentTab": false,
                        "refCreateSavePath": "./",
                        "createDocNameTemplate": "",
                        "maxListCount": 5000,
                        "maxOpenTabCount": 8,
                        "allowCreateDeeper": false,
                        "removeDocWithoutConfirm": false,
                        "sort": 1
                    },
                    "tag": {
                        "sort": 4
                    },
                    "editor": {
                        "fontSize": 21,
                        "fontFamily": "",
                        "codeSyntaxHighlightLineNum": false,
                        "codeTabSpaces": 0,
                        "codeLineWrap": true,
                        "codeLigatures": true,
                        "displayBookmarkIcon": true,
                        "displayNetImgMark": false,
                        "generateHistoryInterval": 10,
                        "historyRetentionDays": 7,
                        "emoji": [
                            "1f3af",
                            "1f609",
                            "26a1",
                            "1fa7a",
                            "1f525",
                            "滑稽 huaji.png",
                            "24c2",
                            "滑稽 huaji.jpg",
                            "1f62e-200d-1f4a8",
                            "1f9ed",
                            "1f605",
                            "1f3a5",
                            "231a",
                            "1f604",
                            "1f5c3",
                            "1f4c1",
                            "1f4da",
                            "1f380",
                            "1f33c",
                            "冬瓜.jpg",
                            "2702",
                            "th.jpg",
                            "1f30a",
                            "1f469-200d-1f9bc",
                            "1f5d1",
                            "1f9e2",
                            "1f4ab",
                            "1f5c2",
                            "1f6a6",
                            "1f3d7",
                            "2699",
                            "2753",
                            "1f4c5",
                            "1f4d1",
                            "1f6d2",
                            "1f345",
                            "1f30f",
                            "1f469-200d-1f52c",
                            "1f680",
                            "1f3ed",
                            "1f310",
                            "1f4d0",
                            "2665",
                            "2764-fe0f-200d-1fa79",
                            "1f603",
                            "26d1",
                            "1f5d2",
                            "1f436",
                            "1f58b",
                            "1f469-200d-1f4bb",
                            "1f61c",
                            "1f601",
                            "1f62d",
                            "26a0",
                            "203c"
                        ],
                        "virtualBlockRef": false,
                        "virtualBlockRefExclude": "这里,图,开始",
                        "blockRefDynamicAnchorTextMaxLen": 64,
                        "plantUMLServePath": "https://www.plantuml.com/plantuml/svg/~1"
                    },
                    "export": {
                        "paragraphBeginningSpace": false,
                        "addTitle": false,
                        "blockRefMode": 2,
                        "blockEmbedMode": 0,
                        "blockRefTextLeft": "",
                        "blockRefTextRight": "",
                        "tagOpenMarker": "#",
                        "tagCloseMarker": "#",
                        "fileAnnotationRefMode": 0,
                        "pandocBin": "C:\\Program Files\\Pandoc\\pandoc.exe"
                    },
                    "graph": {
                        "maxBlocks": 10240,
                        "local": {
                            "dailyNote": false,
                            "type": {
                                "tag": false,
                                "paragraph": false,
                                "heading": true,
                                "math": false,
                                "code": false,
                                "table": false,
                                "list": false,
                                "listItem": false,
                                "blockquote": false,
                                "super": false
                            },
                            "d3": {
                                "nodeSize": 16,
                                "linkWidth": 8,
                                "lineOpacity": 0.98,
                                "centerStrength": 0.015,
                                "collideRadius": 5000,
                                "collideStrength": 1,
                                "linkDistance": 400,
                                "arrow": false
                            }
                        },
                        "global": {
                            "minRefs": 0,
                            "dailyNote": false,
                            "type": {
                                "tag": false,
                                "paragraph": false,
                                "heading": false,
                                "math": false,
                                "code": false,
                                "table": false,
                                "list": false,
                                "listItem": false,
                                "blockquote": false,
                                "super": false
                            },
                            "d3": {
                                "nodeSize": 16,
                                "linkWidth": 8,
                                "lineOpacity": 0.36,
                                "centerStrength": 0.015,
                                "collideRadius": 600,
                                "collideStrength": 0.08,
                                "linkDistance": 400,
                                "arrow": true
                            }
                        }
                    },
                    "uiLayout": {
                        "bottom": [],
                        "hideDock": false,
                        "layout": {
                            "children": [
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "instance": "Wnd"
                                        },
                                        {
                                            "children": [],
                                            "instance": "Wnd",
                                            "resize": "lr"
                                        }
                                    ],
                                    "direction": "lr",
                                    "instance": "Layout",
                                    "size": "0px",
                                    "type": "top"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [
                                                {
                                                    "children": [],
                                                    "instance": "Wnd"
                                                },
                                                {
                                                    "children": [],
                                                    "instance": "Wnd",
                                                    "resize": "tb"
                                                }
                                            ],
                                            "direction": "tb",
                                            "instance": "Layout",
                                            "size": "274px",
                                            "type": "left"
                                        },
                                        {
                                            "children": [
                                                {
                                                    "children": [
                                                        {
                                                            "children": [
                                                                {
                                                                    "children": [
                                                                        {
                                                                            "children": {
                                                                                "action": "",
                                                                                "blockId": "20220111181731-mstmacx",
                                                                                "instance": "Editor",
                                                                                "mode": "wysiwyg"
                                                                            },
                                                                            "docIcon": "",
                                                                            "instance": "Tab",
                                                                            "pin": false,
                                                                            "title": "Blum 公理"
                                                                        },
                                                                        {
                                                                            "children": {
                                                                                "action": "",
                                                                                "blockId": "20200905090211-2vixtlf",
                                                                                "instance": "Editor",
                                                                                "mode": "wysiwyg"
                                                                            },
                                                                            "docIcon": "",
                                                                            "instance": "Tab",
                                                                            "pin": false,
                                                                            "title": "内容块类型"
                                                                        },
                                                                        {
                                                                            "active": true,
                                                                            "children": {
                                                                                "action": "",
                                                                                "blockId": "20200813131152-0wk5akh",
                                                                                "instance": "Editor",
                                                                                "mode": "wysiwyg"
                                                                            },
                                                                            "docIcon": "",
                                                                            "instance": "Tab",
                                                                            "pin": false,
                                                                            "title": "在内容块中遨游"
                                                                        }
                                                                    ],
                                                                    "height": "",
                                                                    "instance": "Wnd",
                                                                    "width": ""
                                                                }
                                                            ],
                                                            "direction": "tb",
                                                            "instance": "Layout",
                                                            "size": "690px",
                                                            "type": "normal"
                                                        },
                                                        {
                                                            "children": [
                                                                {
                                                                    "children": {
                                                                        "action": "",
                                                                        "blockId": "20200813093015-u6bopdt",
                                                                        "instance": "Editor",
                                                                        "mode": "wysiwyg"
                                                                    },
                                                                    "docIcon": "2753",
                                                                    "instance": "Tab",
                                                                    "pin": false,
                                                                    "title": "常见问题"
                                                                },
                                                                {
                                                                    "active": true,
                                                                    "children": {
                                                                        "action": "",
                                                                        "blockId": "20200813163359-v04n73b",
                                                                        "instance": "Editor",
                                                                        "mode": "wysiwyg"
                                                                    },
                                                                    "docIcon": "1f4c4",
                                                                    "instance": "Tab",
                                                                    "pin": false,
                                                                    "title": "隐私政策和用户协议"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "action": "",
                                                                        "blockId": "20210117211155-56n4odu",
                                                                        "instance": "Editor",
                                                                        "mode": "wysiwyg"
                                                                    },
                                                                    "docIcon": "1f50f",
                                                                    "instance": "Tab",
                                                                    "pin": false,
                                                                    "title": "数据安全"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "action": "",
                                                                        "blockId": "20200812220555-lj3enxa",
                                                                        "instance": "Editor",
                                                                        "mode": "wysiwyg"
                                                                    },
                                                                    "docIcon": "1f389",
                                                                    "instance": "Tab",
                                                                    "pin": false,
                                                                    "title": "请从这里开始"
                                                                }
                                                            ],
                                                            "height": "",
                                                            "instance": "Wnd",
                                                            "resize": "lr",
                                                            "width": ""
                                                        }
                                                    ],
                                                    "direction": "lr",
                                                    "instance": "Layout",
                                                    "size": "auto",
                                                    "type": "normal"
                                                }
                                            ],
                                            "direction": "tb",
                                            "instance": "Layout",
                                            "resize": "lr",
                                            "size": "auto",
                                            "type": "center"
                                        },
                                        {
                                            "children": [
                                                {
                                                    "children": [],
                                                    "instance": "Wnd"
                                                },
                                                {
                                                    "children": [],
                                                    "instance": "Wnd",
                                                    "resize": "tb"
                                                }
                                            ],
                                            "direction": "tb",
                                            "instance": "Layout",
                                            "resize": "lr",
                                            "size": "0px",
                                            "type": "right"
                                        }
                                    ],
                                    "direction": "lr",
                                    "instance": "Layout",
                                    "resize": "tb",
                                    "size": "auto",
                                    "type": "normal"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "instance": "Wnd"
                                        },
                                        {
                                            "children": [],
                                            "instance": "Wnd",
                                            "resize": "lr"
                                        }
                                    ],
                                    "direction": "lr",
                                    "instance": "Layout",
                                    "resize": "tb",
                                    "size": "0px",
                                    "type": "bottom"
                                }
                            ],
                            "direction": "tb",
                            "instance": "Layout",
                            "type": "normal"
                        },
                        "left": [
                            [
                                {
                                    "hotkeyLangId": "inbox",
                                    "icon": "iconInbox",
                                    "show": false,
                                    "size": {
                                        "height": null,
                                        "width": null
                                    },
                                    "type": "inbox"
                                },
                                {
                                    "hotkeyLangId": "fileTree",
                                    "icon": "iconFiles",
                                    "show": true,
                                    "size": {
                                        "height": 0,
                                        "width": 274
                                    },
                                    "type": "file"
                                },
                                {
                                    "hotkeyLangId": "outline",
                                    "icon": "iconAlignCenter",
                                    "show": false,
                                    "size": {
                                        "height": 0,
                                        "width": 240
                                    },
                                    "type": "outline"
                                }
                            ],
                            [
                                {
                                    "hotkeyLangId": "bookmark",
                                    "icon": "iconBookmark",
                                    "show": false,
                                    "size": {
                                        "height": 0,
                                        "width": 240
                                    },
                                    "type": "bookmark"
                                },
                                {
                                    "hotkeyLangId": "tag",
                                    "icon": "iconTags",
                                    "show": false,
                                    "size": {
                                        "height": 0,
                                        "width": 240
                                    },
                                    "type": "tag"
                                }
                            ]
                        ],
                        "right": [
                            [
                                {
                                    "hotkeyLangId": "graphView",
                                    "icon": "iconGraph",
                                    "show": false,
                                    "size": {
                                        "height": 0,
                                        "width": 377
                                    },
                                    "type": "graph"
                                },
                                {
                                    "hotkeyLangId": "globalGraph",
                                    "icon": "iconGlobalGraph",
                                    "show": false,
                                    "size": {
                                        "height": 0,
                                        "width": 360
                                    },
                                    "type": "globalGraph"
                                }
                            ],
                            [
                                {
                                    "hotkeyLangId": "backlinks",
                                    "icon": "iconLink",
                                    "show": false,
                                    "size": {
                                        "height": 0,
                                        "width": 360
                                    },
                                    "type": "backlink"
                                }
                            ]
                        ],
                        "top": []
                    },
                    "userData": "d716d5d6812229ac440f08261821941aebfede5cf3e297b12c91e35101e685daf368b01dff5aad0dcab9ef2d77849bdeaa1e5a8c615ec3893bee84b0f196feb4cf53790339526805877e6e47d54c4f69a0b9266bc0b02886771374de65844325728f5ab786e019daf561641904324610ec49a3fcab9737a5d977a464b7fcec0e3b0ed39dff7042c42b25ecc52568e0071c6e3b3022d006f31481a1eebea47a2d465e649e3057451aa3b1cd6ea0b1f477e564359f0bc5fa8bc87c927d7b2a3b0f16dfe61f5a58b68b08fb457470f13c5071bf3c812d5f798bb57c6b2ea26fb653f608ef77d40fc6447a0e38992fe3467f74877250e4f7067451fd62d751c9159b86971ce35564ebc27297532eb73726226e8119a361f50d3e830c3b344cbd152ee2d50249e610a5f6782d9e915333ae824a8790e1998bf273b44c16dc59f3e43b4471e1cf805da1a5356493c146c09dd4a9d337abe2d4f48f68210baa97b1df18686f49dbe20bfc565b5093205d3a1c5e000ba1668a4b5fa7b46aeaaa8ed1c6277805350a75c357f561f6d32e0cc0115c6178d5ca95290b5c604441a3af1f832d190548bd246e01ce3b44c0991cc443e2fb3138fe1900f1b9aa0300a635ddc445421cf0ff1e79a621f143031bfc1cc80eb3ddb9b70e9acb7414e9784675445eb866bad879101ea62261a1e83d880151b1a8c5ccea56138da0176b9558b831b56c603b3462a0c045e0e51cf865a60d380eebbe51cd753e2cefe682a0a8c80229ff520c6a7c3f5d7564b0f927ead5d53ba7b5dbcbd6d5788a1e321b6e06a714385bb3cf3c625ffb26cfa746fb288527471b6d5f4a08e40dadb97a1f69db87e0e0b6e77559306b0a6c641feb015746e7b6ec74bd6104f1dc286c643f0a9ac90c85c7d4ba3c19d7b303a671712d18b42b2eed89b42a053ea6f91acb5a1d4f7c0bd02b91bc888b6e218371de9ea7fe013448cac0bf3e39100f5167e01e01e8c48d90e444d6909eb98c8d40e95de1acc8af5f63efafb15e3238d683b957fc5158c7803910b998ad7a8e21770f581971fb85ddf15559ada8977c3ebc8f95b1052fa41b56a15233279d9b0119120f8590ac4f2be97ef306696a6fa5d3de7b3673c24928db50f0c08aa2f5dc08ed22f054e061c221b40d9052eb68cb703382e496cc0b874770e41d30ace643be56aaae632178ebb805a7ebf358facf8d3db07a16a73c6333d2706f4fe4cfa71e5e870fadd069159e1e99529e2c3e60320e6d29c4f303bcf86aaf177b1393a6d3ed087f2f605e6713fa33cc69666cee957f716266b99b829c82c3b9178cee25c2d2e53edf0f251bd0a3dc2235398bc3a15d417b2958fb1df28b3331f309cda503d7b6dcf9eb4876a33b418e314f92a557efe3fa17c56eed11770e91db89d989a29f13879419722183f1b8d68dcff5ff8ed1f35e31ab35a894cf2cf70b61aaf8f4ebfe7860fca6d5c1e8cdedfad3c16e6a4ecd164c05674b74317c5f0dd9682ad33205ae76c98b3e60356c7f3d85fe50391f496047c5830ae0703c148b79c1559971a762f4fab7fb97bfb1f4bf5767744631c9cdfc30cc98f5a35ffc422a16af80daf70dc72b8960705ff86530b7c3120ce9b4d588cec9fbb60d74829486b079814f3dfd53f757d716203c8d3db1cd4e4be118eda9202db2a2cf750c20a69cc99893fccf5c8ca7b178b36f1cbb6c0afd18195bd0b112a059f643b904faaa0787bdbd2230d1bb32cd24f8901d8fb770f14b607b51f6a727d9e04de29d834240ef123a5ca6dc8e7566f7bce4314acb5ec1101633ba7d6d94a36f3fe867eca8f40d1a7cd35312789e9a554f124fb9873731735335fc2fa98d427e6325d662ec20c44ee372e5664e39e5b3f10833ef542f727287666e98fdd54c55ecc7486f9f53c1a6d57b815c008c85c7f2b987a177021c5b8c37f9086c32a644b08b080e952bbf15fd2d1098dcb7d3d3ce3fdd2113ee951b173bcd2cfa60b66c3a50aadbc81f14774f72e093849d7eac1f03e22f4228e65bc46500f946f9c847617673dd9d3e5ae7c6743c515de3fe43cc33217659b684bd7f012c72932df74143846255d22ab530099744f334fa0a23fd1af467171a926d6fe1b8d9f7f423961ac487556b54b1e28f06cc606b622017e6c836ae7183482a741bb4b1066767c1c7e30bc607a307a285d8eb79ced752947b16d8e1989a2fd8251c162c2f892b1cc3d20a799b2825dade0a73c88006f25eab9aec7af9a24132f3fe47d6539d45d85d62d63b34fb6cd2a5a52bbb280c13ad05a296945212fccbf1ac7b30b1bb56de7ca857326d93be444ee931e23a7b9d8cc47366e60dd671477a74eb0fa66bc68e0ad48277d5db250cd4a4440ca28d624ebec97be54ac90bd8f38c8f8fecb606341cd845f8382f89ed1e46bc30b8f9478345a16a5892ed29aaa608e7b14c77bd05de310004aa2800391a2e70769d55e87b4e54eda24fe84018d899e845c2ec3327008feaa4a99c1e63821e8848e7165d1ccea48f6cade59d53776b2fd21ae7f29d16ec9c79b3e2ab25e11d13c9b5f56243dc45a526baf8023ca1f3d73eefe729c190b11938a8bea0dccd00ccc264bdaea682809d138a74639bc2c9898cadd4135278b33ed85b663fafcffa1d4d2511ca3993c80e58b1a9894bcf8fe92dee44883b4dbf3b2448ffd4b5f2d761a2a006baa091178ff959cc9768852f4039e27048be17a519415283cd45d7dd0bd1060b205b6a96e086ccec62c0640b7d7606a6d1fd70bddb4a979ccea54dc1553d2e591186010fdf81fa3959d0d84bd103214531b35687fbd232f5ee2d6a7a0e44eddee94a8724b25214a0e4c812a8bc707b52bf2a09006f531d1b4fc055dab666e43d2af61dd037bf5b452896aab2334bf9c82107c5fbefedbb30ce2f66d8d8ca4d77479dbcf211ce3767a4357a4af3c2e7d223766a3c9051e0d69bc4ec2651410caab9b21e1f618dc3f5544f3216d27dd25e0e5d735990a6416c4b40362df29e82c48e9d6201a791fc3561e56e0ad75f5a57ea7c",
                    "account": {
                        "displayTitle": true,
                        "displayVIP": true
                    },
                    "readonly": false,
                    "localIPs": [
                        "192.168.0.9",
                        "10.147.20.103",
                        "127.0.0.1"
                    ],
                    "accessAuthCode": "",
                    "e2eePasswd": "791520d03d1cb95f7530125c2b932f6b",
                    "e2eePasswdMode": 1,
                    "system": {
                        "id": "1a839027-5cf7-4201-85f1-b82f979979de",
                        "kernelVersion": "2.0.25",
                        "os": "windows",
                        "container": "std",
                        "isInsider": false,
                        "homeDir": "C:\\Users\\DONGDONGDONG",
                        "workspaceDir": "F:\\siyuan",
                        "appDir": "C:\\Program Files\\SiYuan\\resources",
                        "confDir": "F:\\siyuan\\conf",
                        "dataDir": "F:\\siyuan\\data",
                        "networkServe": true,
                        "networkProxy": {
                            "scheme": "",
                            "host": "",
                            "port": ""
                        },
                        "uploadErrLog": true
                    },
                    "keymap": {
                        "editor": {
                            "general": {
                                "alignCenter": {
                                    "custom": "⌥C",
                                    "default": "⌥C"
                                },
                                "alignLeft": {
                                    "custom": "⌥L",
                                    "default": "⌥L"
                                },
                                "alignRight": {
                                    "custom": "⌥R",
                                    "default": "⌥R"
                                },
                                "attr": {
                                    "custom": "⌥⌘A",
                                    "default": "⌥⌘A"
                                },
                                "backlinks": {
                                    "custom": "⌥B",
                                    "default": "⌥B"
                                },
                                "copyBlockEmbed": {
                                    "custom": "⇧⌘E",
                                    "default": "⇧⌘E"
                                },
                                "copyBlockRef": {
                                    "custom": "⇧⌘C",
                                    "default": "⇧⌘C"
                                },
                                "copyHPath": {
                                    "custom": "⇧⌘P",
                                    "default": "⇧⌘P"
                                },
                                "copyProtocol": {
                                    "custom": "⇧⌘H",
                                    "default": "⇧⌘H"
                                },
                                "fullscreen": {
                                    "custom": "⌥Y",
                                    "default": "⌥Y"
                                },
                                "graphView": {
                                    "custom": "⌥G",
                                    "default": "⌥G"
                                },
                                "insertAfter": {
                                    "custom": "⇧⌘A",
                                    "default": "⇧⌘A"
                                },
                                "insertBefore": {
                                    "custom": "⇧⌘B",
                                    "default": "⇧⌘B"
                                },
                                "moveToDown": {
                                    "custom": "⇧⌘↓",
                                    "default": "⇧⌘↓"
                                },
                                "moveToUp": {
                                    "custom": "⇧⌘↑",
                                    "default": "⇧⌘↑"
                                },
                                "newContentFile": {
                                    "custom": "F4",
                                    "default": "F4"
                                },
                                "newNameFile": {
                                    "custom": "F3",
                                    "default": "F3"
                                },
                                "outline": {
                                    "custom": "⌥O",
                                    "default": "⌥O"
                                },
                                "pasteAsPlainText": {
                                    "custom": "⇧⌘V",
                                    "default": "⇧⌘V"
                                },
                                "preview": {
                                    "custom": "⌥⌘9",
                                    "default": "⌥⌘9"
                                },
                                "redo": {
                                    "custom": "⌘Y",
                                    "default": "⌘Y"
                                },
                                "refBottom": {
                                    "custom": "⇧>",
                                    "default": "⇧>"
                                },
                                "refPopover": {
                                    "custom": "⌥⌘.",
                                    "default": "⌥⌘."
                                },
                                "refRight": {
                                    "custom": "⌥.",
                                    "default": "⌥."
                                },
                                "refTab": {
                                    "custom": "⇧⌘.",
                                    "default": "⇧⌘."
                                },
                                "refresh": {
                                    "custom": "F5",
                                    "default": "F5"
                                },
                                "rename": {
                                    "custom": "F2",
                                    "default": "F2"
                                },
                                "showInFolder": {
                                    "custom": "⌥A",
                                    "default": "⌥A"
                                },
                                "undo": {
                                    "custom": "⌘Z",
                                    "default": "⌘Z"
                                },
                                "wysiwyg": {
                                    "custom": "⌥⌘7",
                                    "default": "⌥⌘7"
                                },
                                "hLayout": {
                                    "default": "",
                                    "custom": ""
                                },
                                "vLayout": {
                                    "default": "",
                                    "custom": ""
                                }
                            },
                            "heading": {
                                "heading1": {
                                    "custom": "⌘1",
                                    "default": "⌥⌘1"
                                },
                                "heading2": {
                                    "custom": "⌘2",
                                    "default": "⌥⌘2"
                                },
                                "heading3": {
                                    "custom": "⌘3",
                                    "default": "⌥⌘3"
                                },
                                "heading4": {
                                    "custom": "⌘4",
                                    "default": "⌥⌘4"
                                },
                                "heading5": {
                                    "custom": "⌘5",
                                    "default": "⌥⌘5"
                                },
                                "heading6": {
                                    "custom": "⌘6",
                                    "default": "⌥⌘6"
                                }
                            },
                            "insert": {
                                "blockRef": {
                                    "custom": "⌥[",
                                    "default": "⌥["
                                },
                                "bold": {
                                    "custom": "⌘B",
                                    "default": "⌘B"
                                },
                                "check": {
                                    "custom": "⌘L",
                                    "default": "⌘L"
                                },
                                "code": {
                                    "custom": "⇧⌘K",
                                    "default": "⇧⌘K"
                                },
                                "font": {
                                    "default": "⌥⌘X",
                                    "custom": "⌥⌘X"
                                },
                                "inline-code": {
                                    "custom": "⌘G",
                                    "default": "⌘G"
                                },
                                "inline-math": {
                                    "custom": "⌘M",
                                    "default": "⌘M"
                                },
                                "italic": {
                                    "custom": "⌘I",
                                    "default": "⌘I"
                                },
                                "kbd": {
                                    "custom": "⌘'",
                                    "default": "⌘'"
                                },
                                "link": {
                                    "custom": "⌘K",
                                    "default": "⌘K"
                                },
                                "mark": {
                                    "custom": "⌘E",
                                    "default": "⌘E"
                                },
                                "strike": {
                                    "custom": "⌘D",
                                    "default": "⌘D"
                                },
                                "sub": {
                                    "custom": "⌘J",
                                    "default": "⌘J"
                                },
                                "sup": {
                                    "custom": "⌘H",
                                    "default": "⌘H"
                                },
                                "table": {
                                    "custom": "⌘O",
                                    "default": "⌘O"
                                },
                                "tag": {
                                    "custom": "⌘T",
                                    "default": "⌘T"
                                },
                                "underline": {
                                    "custom": "⌘U",
                                    "default": "⌘U"
                                },
                                "lastUsed": {
                                    "default": "⌥X",
                                    "custom": "⌥X"
                                }
                            },
                            "list": {
                                "checkToggle": {
                                    "default": "⌘↩",
                                    "custom": "⌘↩"
                                },
                                "indent": {
                                    "custom": "⇥",
                                    "default": "⇥"
                                },
                                "outdent": {
                                    "custom": "⇧⇥",
                                    "default": "⇧⇥"
                                }
                            },
                            "table": {
                                "delete-column": {
                                    "custom": "⇧⌘-",
                                    "default": "⇧⌘-"
                                },
                                "delete-row": {
                                    "custom": "⌘-",
                                    "default": "⌘-"
                                },
                                "insertColumnLeft": {
                                    "custom": "⇧⌘L",
                                    "default": "⇧⌘L"
                                },
                                "insertColumnRight": {
                                    "custom": "⇧⌘R",
                                    "default": "⇧⌘R"
                                },
                                "insertRowAbove": {
                                    "custom": "⇧⌘T",
                                    "default": "⇧⌘T"
                                },
                                "insertRowBelow": {
                                    "custom": "⇧⌘D",
                                    "default": "⇧⌘D"
                                },
                                "moveToDown": {
                                    "custom": "⌥⌘B",
                                    "default": "⌥⌘B"
                                },
                                "moveToLeft": {
                                    "custom": "⌥⌘L",
                                    "default": "⌥⌘L"
                                },
                                "moveToRight": {
                                    "custom": "⌥⌘R",
                                    "default": "⌥⌘R"
                                },
                                "moveToUp": {
                                    "custom": "⌥⌘T",
                                    "default": "⌥⌘T"
                                }
                            }
                        },
                        "general": {
                            "backlinks": {
                                "custom": "⌥7",
                                "default": "⌥7"
                            },
                            "bookmark": {
                                "custom": "⌥3",
                                "default": "⌥3"
                            },
                            "closeTab": {
                                "custom": "⌘W",
                                "default": "⌘W"
                            },
                            "config": {
                                "custom": "⌥P",
                                "default": "⌥P"
                            },
                            "dailyNote": {
                                "custom": "⌥5",
                                "default": "⌥5"
                            },
                            "enter": {
                                "custom": "⌥→",
                                "default": "⌥→"
                            },
                            "enterBack": {
                                "custom": "⌥←",
                                "default": "⌥←"
                            },
                            "fileTree": {
                                "custom": "⌥1",
                                "default": "⌥1"
                            },
                            "globalGraph": {
                                "custom": "⌥9",
                                "default": "⌥9"
                            },
                            "globalSearch": {
                                "custom": "⌘P",
                                "default": "⌘P"
                            },
                            "goBack": {
                                "custom": "⌘[",
                                "default": "⌘["
                            },
                            "goForward": {
                                "custom": "⌘]",
                                "default": "⌘]"
                            },
                            "graphView": {
                                "custom": "⌥8",
                                "default": "⌥8"
                            },
                            "history": {
                                "custom": "⌥H",
                                "default": "⌥H"
                            },
                            "inbox": {
                                "custom": "⌥6",
                                "default": "⌥6"
                            },
                            "lockScreen": {
                                "custom": "⌥N",
                                "default": "⌥N"
                            },
                            "move": {
                                "custom": "⌥⌘M",
                                "default": ""
                            },
                            "newFile": {
                                "custom": "⌘N",
                                "default": "⌘N"
                            },
                            "outline": {
                                "custom": "⌥2",
                                "default": "⌥2"
                            },
                            "replace": {
                                "custom": "⌘R",
                                "default": "⌘R"
                            },
                            "search": {
                                "custom": "⌘F",
                                "default": "⌘F"
                            },
                            "stickSearch": {
                                "custom": "⇧⌘F",
                                "default": "⇧⌘F"
                            },
                            "tag": {
                                "custom": "⌥4",
                                "default": "⌥4"
                            },
                            "toggleWin": {
                                "custom": "⌥M",
                                "default": "⌥M"
                            },
                            "selectOpen1": {
                                "default": "",
                                "custom": ""
                            }
                        }
                    },
                    "backup": {},
                    "sync": {
                        "cloudName": "test",
                        "enabled": true,
                        "mode": 1,
                        "uploaded": 1656528218777,
                        "downloaded": 1649768497724,
                        "synced": 1656528218777,
                        "stat": "同步于 2022-06-30 02:43:38\n\n已传输文件 3\n发送字节数 9.9 MB\n上传耗时 7.65s"
                    },
                    "search": {
                        "document": true,
                        "heading": true,
                        "list": true,
                        "listItem": true,
                        "codeBlock": true,
                        "mathBlock": true,
                        "table": true,
                        "blockquote": true,
                        "superBlock": true,
                        "paragraph": true,
                        "htmlBlock": false,
                        "limit": 700,
                        "caseSensitive": true,
                        "name": true,
                        "alias": true,
                        "memo": true,
                        "custom": true,
                        "backlinkMentionName": true,
                        "backlinkMentionAlias": true,
                        "backlinkMentionAnchor": true,
                        "backlinkMentionDoc": true,
                        "virtualRefName": true,
                        "virtualRefAlias": true,
                        "virtualRefAnchor": true,
                        "virtualRefDoc": true
                    },
                    "stat": {
                        "docCount": 4905
                    },
                    "api": {
                        "token": "dbm04v1pod397j6b"
                    },
                    "repo": {
                        "key": "UT3PD86ub3VFaM+dhn6pb/qFOmlscW3JYdxU80GSxtc="
                    },
                    "newbie": false
                }
            };
            fetchPost("http://localhost:6806/api/system/getConf", {}, response => {
                window.siyuan.config = response.data;
                fetchGet(`/appearance/langs/${window.siyuan.config.appearance.lang}.json?v=${Constants.SIYUAN_VERSION}`, (lauguages) => {
                    window.siyuan.languages = lauguages;
                    bootSync();
                    fetchPost("/api/setting/getCloudUser", {}, userResponse => {
                        window.siyuan.user = userResponse.data;
                        onGetConfig();
                        account.onSetaccount();
                        resizeDrag();
                        setTitle(window.siyuan.languages.siyuanNote);
                        initMessage();
                    });
                });
            });
        }
        this.element=element
        const options ={
            action:'',
            blockId:"",
            mode:0,
            hasContext:true
        }
        this.editor = new Protyle(this.element, {
            action: options.action,
            blockId: options.blockId,
            mode: options.mode,
            hasContext: options.hasContext,
            render: {
                title: true,
                background: true,
                scroll: true,
            },
            typewriterMode: true,
            after: (editor) => {
                editor.protyle.model = this;
                if (window.siyuan.config.readonly) {
                    disabledProtyle(editor.protyle);
                }
                if (window.siyuan.editorIsFullscreen) {
                    editor.protyle.element.classList.add("fullscreen");
                    setPadding(editor.protyle);
                    getAllModels().editor.forEach(item => {
                        if (!editor.protyle.element.isSameNode(item.element) && item.element.classList.contains("fullscreen")) {
                            item.element.classList.remove("fullscreen");
                            setPadding(item.editor.protyle);
                        }
                    });
                }
            },
        }); 
    }
}