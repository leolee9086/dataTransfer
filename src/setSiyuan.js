export default function setSiyuan(){
   return {
            transactions: [],
            reqIds: {},
            backStack: [],
            layout: {},
            dialogs: [],
            blockPanels: [],
            ctrlIsPressed: false,
            altIsPressed: false,
            ws:{},
            menus:{},
            languages:{
            },
            config:{
                "logLevel": "debug",
                "appearance": {
                    "mode": 0,
                    "darkThemes": [
                        "midnight"
                    ],
                    "lightThemes": [
                        "blue-dog",
                        "Chrome-A4",
                        "daylight",
                        "naive",
                        "Zhang-Light"
                    ],
                    "themeDark": "midnight",
                    "themeLight": "naive",
                    "themeVer": "1.0.0",
                    "icons": [
                        "ant",
                        "material"
                    ],
                    "icon": "material",
                    "iconVer": "1.0.6",
                    "nativeEmoji": false,
                    "codeBlockThemeLight": "github",
                    "codeBlockThemeDark": "base16/dracula",
                    "lang": "zh_CN",
                    "customCSS": false,
                    "themeJS": true,
                    "closeButtonBehavior": 0
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
                    "refCreateSavePath": "",
                    "createDocNameTemplate": "",
                    "maxListCount": 512,
                    "allowCreateDeeper": false,
                    "sort": 1
                },
                "tag": {
                    "sort": 4
                },
                "editor": {
                    "fontSize": 16,
                    "fontFamily": "",
                    "codeSyntaxHighlightLineNum": true,
                    "codeTabSpaces": 0,
                    "codeLineWrap": false,
                    "codeLigatures": false,
                    "displayBookmarkIcon": true,
                    "displayNetImgMark": false,
                    "generateHistoryInterval": 10,
                    "historyRetentionDays": 30,
                    "emoji": [
                        "1f4bf",
                        "1f1fe-1f1ea",
                        "1f601",
                        "1f600",
                        "2708",
                        "2754",
                        "1f369",
                        "270d",
                        "1f3e1",
                        "1f9c1",
                        "1f3e0",
                        "1f365",
                        "1f687"
                    ],
                    "virtualBlockRef": false,
                    "virtualBlockRefExclude": "",
                    "blockRefDynamicAnchorTextMaxLen": 500,
                    "plantUMLServePath": "https://www.plantuml.com/plantuml/svg/~1"
                },
                "export": {
                    "paragraphBeginningSpace": true,
                    "addTitle": true,
                    "blockRefMode": 2,
                    "blockEmbedMode": 1,
                    "blockRefTextLeft": "",
                    "blockRefTextRight": "",
                    "tagOpenMarker": "#",
                    "tagCloseMarker": "#",
                    "fileAnnotationRefMode": 0,
                    "pandocBin": ""
                },
                "graph": {
                    "maxBlocks": 10240,
                    "local": {
                        "dailyNote": true,
                        "type": {
                            "tag": true,
                            "paragraph": true,
                            "heading": true,
                            "math": true,
                            "code": true,
                            "table": true,
                            "list": true,
                            "listItem": true,
                            "blockquote": true,
                            "super": true
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
                                        "size": "331px",
                                        "type": "left"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220531202314-5xb928f",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "亭堂-菲尼其-效果图"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220531195021-8il94y0",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "中南校友婚房方案-效果图"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220527140359-ddgckf2",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "设计表现案例"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220531203059-8zsqds3",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "香樟兰亭-效果图"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220503234447-qktpq0z",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "有关椽承设计"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220510024453-rnb1p0s",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "常见设计业务问题"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220510025505-6jbdohj",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "万洲装饰"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220510030428-aypphte",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "万洲集团简介"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220519020510-x42bcu9",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "202106201316建筑师与美容院经理的家"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220519015258-s39xsph",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "椽承设计家装咨询方案设计收费和服务标准"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220526124729-74kozdb",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "其他文章"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220510191122-gnxim1b",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "1f9c1",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "naive主题"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220621183012-ash17jy",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "功能开发计划"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220614001448-qomdapq",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "发布设置"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612210812-66b6pao",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "api说明"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-3e17i7j",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "核心api"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-68690a7",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "集市相关"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-z7q8dcd",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "lute相关方法"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-qzwytfp",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "导出相关"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-67fyiee",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "备份相关"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-lisv493",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "笔记格式化相关方法"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-wiv8hgf",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "附件相关"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-49hfemu",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "设置相关"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-vrj4hkn",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "属性相关"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220510191200-8dx48bx",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "naive alpha 0.0.4 更新内容"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220612211047-w2dmpqb",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "搜索相关"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220517233922-d07w3fb",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "工具和知识管理"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220503174906-3s0duqk",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "1f600",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "欢迎"
                                                    },
                                                    {
                                                        "active": true,
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220520064141-us3ei16",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "cc-repetition挂件"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220621165656-u8opptt",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "cc-importer挂件"
                                                    },
                                                    {
                                                        "children": {
                                                            "action": "",
                                                            "blockId": "20220512022740-am17y2p",
                                                            "instance": "Editor",
                                                            "mode": "wysiwyg"
                                                        },
                                                        "docIcon": "",
                                                        "instance": "Tab",
                                                        "pin": false,
                                                        "title": "cc-image-tag-new挂件"
                                                    }
                                                ],
                                                "height": "",
                                                "instance": "Wnd",
                                                "width": "409px"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "children": [
                                                            {
                                                                "active": true,
                                                                "children": {
                                                                    "action": "",
                                                                    "blockId": "20220504175346-02aim4f",
                                                                    "instance": "Editor",
                                                                    "mode": "wysiwyg"
                                                                },
                                                                "docIcon": "",
                                                                "instance": "Tab",
                                                                "pin": false,
                                                                "title": "家装室内设计成果和服务详细列表和方案咨询服务细节说明"
                                                            }
                                                        ],
                                                        "height": "416px",
                                                        "instance": "Wnd",
                                                        "width": ""
                                                    },
                                                    {
                                                        "children": [
                                                            {
                                                                "active": true,
                                                                "children": {
                                                                    "action": "",
                                                                    "blockId": "20220510023456-3oxsqsa",
                                                                    "instance": "Editor",
                                                                    "mode": "wysiwyg"
                                                                },
                                                                "docIcon": "",
                                                                "instance": "Tab",
                                                                "pin": false,
                                                                "title": "细化方案设计案例"
                                                            }
                                                        ],
                                                        "height": "",
                                                        "instance": "Wnd",
                                                        "resize": "tb",
                                                        "width": ""
                                                    }
                                                ],
                                                "direction": "tb",
                                                "instance": "Layout",
                                                "resize": "lr",
                                                "size": "auto",
                                                "type": "normal"
                                            }
                                        ],
                                        "direction": "lr",
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
                                "hotkeyLangId": "fileTree",
                                "icon": "iconFiles",
                                "show": true,
                                "size": {
                                    "height": 565,
                                    "width": 331
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
                            },
                            {
                                "hotkeyLangId": "inbox",
                                "icon": "iconInbox",
                                "show": false,
                                "size": {
                                    "height": 0,
                                    "width": 240
                                },
                                "type": "inbox"
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
                                "show": true,
                                "size": {
                                    "height": 0,
                                    "width": 331
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
                                    "width": 360
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
                "userData": "d716d5d6812229ac440f08261821941aebfede5cf3e297b12c91e35101e685daf368b01dff5aad0dcab9ef2d77849bdeaa1e5a8c615ec3893bee84b0f196feb4cf53790339526805877e6e47d54c4f69a0b9266bc0b02886771374de65844325728f5ab786e019daf561641904324610ec49a3fcab9737a5d977a464b7fcec0e3b0ed39dff7042c42b25ecc52568e0071c6e3b3022d006f31481a1eebea47a2d465e649e3057451aa3b1cd6ea0b1f477e564359f0bc5fa8bc87c927d7b2a3b0f16dfe61f5a58b68b08fb457470f13c5071bf3c812d5f798bb57c6b2ea26fb653f608ef77d40fc6447a0e38992fe3467f74877250e4f7067451fd62d751c9159b86971ce35564ebc27297532eb73726226e8119a361f50d3e830c3b344cbd152ee2d50249e610a5f6782d9e915333ae824a8790e1998bf273b44c16dc59f3e43b4471e1cf805da1a5356493c146c09dd4a9d337abe2d4f48f68210baa97b1df18686f49dbe20bfc565b5093205d3a1c5e000ba1668a4b5fa7b46aeaaa8ed1c6277805350a75c357f561f6d32e0cc0115c6178d5ca95290b5c604441a3af1f832d190548bd246e01ce3b44c0991cc443e2fb3138fe1900f1b9aa0300a635ddc445421cf0ff1e79a621f143031bfc1cc80eb3ddb9b70e9acb7414e9784675445eb866bad879101ea62261a1e83d880151b1a8c5ccea56138da0176b9558b831b56c603b3462a0c045e0e51cf865a60d380eebbe51cd753e2cefe682a0a8c80229ff520c6a7c3f5d7564b0f927ead5d53ba7b5dbcbd6d5788a1e321b6e06a714385bb3cf3c625ffb26cfa746fb288527471b6d5f4a08e40dadb97a1f69db87e0e0b6e77559306b0a6c641feb015746e7b6ec74bd6104f1dc286c643f0a9ac90c85c7d4ba3c19d7b303a671712d18b42b2eed89b42a053ea6f91acb5a1d4f7c0bd02b91bc888b6e218371de9ea7fe013448cac0bf3e39100f5167e01e01e8c48d90e444d6909eb98c8d40e95de1acc8af5f63efafb15e3238d683b957fc5158c7803910b998ad7a8e21770f581971fb85ddf15559ada8977c3ebc8f95b1052fa41b56a15233279d9b0119120f8590ac4f2be97ef306696a6fa5d3de7b3673c24928db50f0c08aa2f5dc08ed22f054e061c221b40d9052eb68cb703382e496cc0b874770e41d30ace643be56aaae632178ebb805a7ebf358facf8d3db07a16a73c6333d2706f4fe4cfa71e5e870fadd069159e1e99529e2c3e60320e6d29c4f303bcf86aaf177b1393a6d3ed087f2f605e6713fa33cc69666cee957f716266b99b829c82c3b9178cee25c2d2e53edf0f251bd0a3dc2235398bc3a15d417b2958fb1df28b3331f309cda503d7b6dcf9eb4876a33b418e314f92a557efe3fa17c56eed11770e91db89d989a29f13879419722183f1b8d68dcff5ff8ed1f35e31ab35a894cf2cf70b61aaf8f4ebfe7860fca6d5c1e8cdedfad3c16e6a4ecd164c05674b74317c5f0dd9682ad33205ae76c98b3e60356c7f3d85fe50391f496047c5830ae0703c148b79c1559971a762f4fab7fb97bfb1f4bf5767744631c9cdfc30cc98f5a35ffc422a16af80daf70dc72b8960705ff86530b7c3120ce9b4d588cec9fbb69aeda671664b88f4e626aed39b5a9afc3e355910b5d488baa485a1b3f081c4315d1e182574209b6104962df8401c60cd6fa3f03daaa7e7350c8a54633e207431a5b96540fe8623cd43a6ff7938449a9f39cda620684702a48fcdb228d5deeb3f694312bef5403a86d8319de8841507342c637d6e01c689a52a1748f7800a2309be6263f54faf229c3cc7368205f785e3c02c0ea108e5a3e981fdcc76645635225d2e6e9b9b5148a0cb131f5b9da8af28041ae1813d0d41138ed5de14d15e1d1039f1719e55efe838b78e2c305dea06f175f4ab28f9c53e103bf915de0c7ca5bee869301f51cf5e74b5876422a4b4db205086b0d08da2f9d60d7102eaa4b981977ce3be160d33ca96dd882a8b824d95a6d42893c8bd3b5985b2d4a8065bcbd4f92a9fc495e8e50597bd9b631c69f6640570b91979250eac3f67f35e898da6cd88bcb537823d2cfd845536796e558d47880867639240460d181f51c8e649617600ecd24c96404c5cbd7af68f761bf85d0b48104820f5cb27e77acbd19b1663564aeed4c99d3a5f8fb2a5ff3758347cf1c3098421bd32a2bfe09513a222a52d50720a5ece5cb3def732c41e9e48e84491bd2e9c14019ebbb0999c421407f675227910429043a8088f807657a5aaf6ab73cbe03c5dd99b16230741f134b2a351a952bec004556a46c1f6aecef6ff3f6d018964ea308deed00af856b663a5136e91ea7b7ba9b8e0ba7d2315fe9e86c8caa159b4a04aed8905799aa013f09fc2a21baea4b972cfcdad06ecbc969ab95cf01bd40f8fed5a8defb35d30e76f9f00d92dfa6ad1840cc9265ce9f735c12f595180c8de3f8203ab0b955a992e752414f79e4c33475d3350dc7cb48cfe47a6c79b15206f2eaa29a9f2ce74f58e31d121710b0c2d52c968e297c7a34047b4f90abe790feff2b06f26aefa3778cf47c3cfcfb174cd90e7cf0502537e0497598c1ffcc32775ff7156a3a9c6d14fb84999df69081f6dd5beb0a82649a78f4294310847fa4b0094ad7d5a2e4f1daa52617a66d23a7444d47eaf77025b87eadd4656d4c701c4c85c5329f4a3784671e3e85ece0333af1b7e706ec7535ef8403b963576582f41396a88fd94adae4e67de586336efa4eff7d04842753e85108bc94c0777f52a3df869b44b8c4d3d98c7ba937a5d02fab403381082bc6cdc749feebeb0c97580b79794f6fceec20898e71a5fccce0153b9e8005d96f945d662d380bcf69345a5f020d2aac8da42303c77d1493d8dd0bed69e517c9484f81b2abc4aa4262c8ff3c2f0905b189364fc5655ef75c220c3e8885cbb77796cc33e30295abdcc1955ee4d2b365a7f43d1dfbcb551c7e7617322624b47af2d2dd48fb2feecda61299eab5a9b1825b67042e2206372304580c3e635",
                "account": {
                    "displayTitle": true,
                    "displayVIP": true
                },
                "readonly": false,
                "localIPs": [],
                "accessAuthCode": "10313041102hdn",
                "e2eePasswd": "791520d03d1cb95f7530125c2b932f6b",
                "e2eePasswdMode": 1,
                "system": {
                    "id": "c140611c-71f6-4388-b6e5-1d206e7c8938",
                    "kernelVersion": "2.0.19",
                    "os": "windows",
                    "container": "std",
                    "isInsider": false,
                    "homeDir": "C:\\Users\\Administrator",
                    "workspaceDir": "C:\\Users\\Administrator\\Documents\\SiYuan",
                    "appDir": "C:\\Program Files\\SiYuan\\resources",
                    "confDir": "C:\\Users\\Administrator\\Documents\\SiYuan\\conf",
                    "dataDir": "C:\\Users\\Administrator\\Documents\\SiYuan\\data",
                    "networkServe": true,
                    "networkProxy": {
                        "scheme": "",
                        "host": "42.193.15.241",
                        "port": "6806"
                    },
                    "uploadErrLog": false
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
                                "custom": "⌘Enter",
                                "default": "⌘Enter"
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
                            "custom": "",
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
                    "cloudName": "网站",
                    "enabled": true,
                    "mode": 1,
                    "uploaded": 1656486280751,
                    "downloaded": 0,
                    "synced": 1656548542158,
                    "stat": "同步于 2022-06-30 08:22:22\n\n本地数据暂无变更"
                },
                "search": {
                    "document": true,
                    "heading": true,
                    "list": false,
                    "listItem": false,
                    "codeBlock": true,
                    "mathBlock": true,
                    "table": true,
                    "blockquote": false,
                    "superBlock": false,
                    "paragraph": true,
                    "htmlBlock": true,
                    "limit": 64,
                    "caseSensitive": false,
                    "name": true,
                    "alias": true,
                    "memo": true,
                    "custom": false,
                    "backlinkMentionName": true,
                    "backlinkMentionAlias": false,
                    "backlinkMentionAnchor": true,
                    "backlinkMentionDoc": true,
                    "virtualRefName": true,
                    "virtualRefAlias": false,
                    "virtualRefAnchor": true,
                    "virtualRefDoc": true
                },
                "stat": {
                    "docCount": 239
                },
                "api": {
                    "token": "h5dswop6w40fznu9"
                },
                "newbie": false
            },
            emojis:[
                {
                    "id": "custom",
                    "items": [],
                    "title": "Custom",
                    "title_zh_cn": "自定义"
                },
                {
                    "id": "people",
                    "items": [
                        {
                            "description": "Grinning face",
                            "description_zh_cn": "咧嘴笑的脸",
                            "keywords": "face,grin,happy,脸,咧嘴笑,开心",
                            "unicode": "1f600"
                        },
                        {
                            "description": "Smiling face with open mouth",
                            "description_zh_cn": "张开嘴的笑脸",
                            "keywords": "face,mouth,open,smile,happy,脸,嘴,打开,微笑,快乐",
                            "unicode": "1f603"
                        },
                        {
                            "description": "Smiling face with open mouth and smiling eyes",
                            "description_zh_cn": "张开嘴巴和微笑的眼睛的笑脸",
                            "keywords": "eye,face,mouth,open,smile,happy,眼睛,脸,嘴,打开,微笑,快乐",
                            "unicode": "1f604"
                        },
                        {
                            "description": "Grinning face with smiling eyes",
                            "description_zh_cn": "笑眯眯的眼睛笑着的脸",
                            "keywords": "eye,face,grin,smile,眼睛,脸,笑容,微笑",
                            "unicode": "1f601"
                        },
                        {
                            "description": "Smiling face with open mouth and tightly-closed eyes",
                            "description_zh_cn": "张开嘴闭着眼睛的笑脸",
                            "keywords": "face,laugh,mouth,open,satisfied,smile,脸,笑,嘴,打开,满意,微笑",
                            "unicode": "1f606"
                        },
                        {
                            "description": "Smiling face with open mouth and cold sweat",
                            "description_zh_cn": "张开嘴，冷汗的笑脸",
                            "keywords": "cold,face,open,smile,sweat,冷,脸,开,微笑,汗",
                            "unicode": "1f605"
                        },
                        {
                            "description": "Face with tears of joy",
                            "description_zh_cn": "脸上带着喜悦的泪水",
                            "keywords": "face,joy,laugh,tear,脸、喜悦、笑、泪",
                            "unicode": "1f602"
                        },
                        {
                            "description": "Rolling on the floor laughing",
                            "description_zh_cn": "笑在地上打滚",
                            "keywords": "face,floor,laugh,lol,rofl,rolling,脸,地板,笑,哈哈,rofl,rolling",
                            "unicode": "1f923"
                        },
                        {
                            "description": "Smiling face with halo",
                            "description_zh_cn": "带光环的笑脸",
                            "keywords": "angel,face,fairy tale,fantasy,halo,innocent,smile,天使,脸,童话,幻想,光环,无辜,微笑",
                            "unicode": "1f607"
                        },
                        {
                            "description": "Winking face",
                            "description_zh_cn": "眨眼的脸",
                            "keywords": "face,wink,脸,眨眼",
                            "unicode": "1f609"
                        },
                        {
                            "description": "Smiling face with smiling eyes",
                            "description_zh_cn": "微笑的脸带着微笑的眼睛",
                            "keywords": "blush,eye,face,smile,脸红,眼睛,脸,微笑",
                            "unicode": "1f60a"
                        },
                        {
                            "description": "Slightly smiling face",
                            "description_zh_cn": "微微笑的脸",
                            "keywords": "face,smile,happy,脸,微笑,快乐",
                            "unicode": "1f642"
                        },
                        {
                            "description": "Upside-down face",
                            "description_zh_cn": "倒立的脸",
                            "keywords": "face,upside-down,脸,倒立",
                            "unicode": "1f643"
                        },
                        {
                            "description": "Smiling face",
                            "description_zh_cn": "微笑的面孔",
                            "keywords": "face,outlined,relaxed,smile,脸,概述,放松,微笑",
                            "unicode": "263a"
                        },
                        {
                            "description": "Face savouring food",
                            "description_zh_cn": "面对美食",
                            "keywords": "delicious,face,savouring,smile,um,yum,美味,脸,品尝,微笑,嗯,百胜",
                            "unicode": "1f60b"
                        },
                        {
                            "description": "Relieved face",
                            "description_zh_cn": "松了口气的脸",
                            "keywords": "face,relieved,脸,松了口气",
                            "unicode": "1f60c"
                        },
                        {
                            "description": "Smiling face with heart-shaped eyes",
                            "description_zh_cn": "心形眼睛的笑脸",
                            "keywords": "eye,face,heart,love,smile,眼,脸,心,爱,微笑",
                            "unicode": "1f60d"
                        },
                        {
                            "description": "Smiling face with 3 hearts",
                            "description_zh_cn": "3 颗心的笑脸",
                            "keywords": "face,adore,crush,love,面对,崇拜,暗恋,爱",
                            "unicode": "1f970"
                        },
                        {
                            "description": "Face throwing a kiss",
                            "description_zh_cn": "扔一个吻的脸",
                            "keywords": "face,heart,kiss,脸,心,吻",
                            "unicode": "1f618"
                        },
                        {
                            "description": "Kissing face",
                            "description_zh_cn": "亲吻脸",
                            "keywords": "face,kiss,脸,吻",
                            "unicode": "1f617"
                        },
                        {
                            "description": "Kissing face with smiling eyes",
                            "description_zh_cn": "带着微笑的眼睛亲吻脸",
                            "keywords": "eye,face,kiss,smile,眼睛,脸,吻,微笑",
                            "unicode": "1f619"
                        },
                        {
                            "description": "Kissing face with closed eyes",
                            "description_zh_cn": "闭着眼睛亲吻脸",
                            "keywords": "closed,eye,face,kiss,闭上,眼睛,脸,吻",
                            "unicode": "1f61a"
                        },
                        {
                            "description": "Smiling face with tear",
                            "description_zh_cn": "泪流满面的笑脸",
                            "keywords": "cry,happy,grateful,proud,relieved,smile,哭、快乐、感激、骄傲、释然、微笑",
                            "unicode": "1f972"
                        },
                        {
                            "description": "Zany face",
                            "description_zh_cn": "滑稽的脸",
                            "keywords": "eyes,grinning,crazy,excited,wild,眼睛,咧嘴笑,疯狂,兴奋,狂野",
                            "unicode": "1f92a"
                        },
                        {
                            "description": "Winking face with tongue",
                            "description_zh_cn": "用舌头眨眼",
                            "keywords": "eye,face,joke,tongue,wink,眼睛,脸,笑话,舌头,眨眼",
                            "unicode": "1f61c"
                        },
                        {
                            "description": "Squinting face with tongue",
                            "description_zh_cn": "用舌头眯着眼睛",
                            "keywords": "eye,face,horrible,taste,tongue,眼睛,脸,可怕,味道,舌头",
                            "unicode": "1f61d"
                        },
                        {
                            "description": "Face with tongue",
                            "description_zh_cn": "用舌头面对",
                            "keywords": "face,tongue,脸,舌头",
                            "unicode": "1f61b"
                        },
                        {
                            "description": "Money-mouth face",
                            "description_zh_cn": "钱嘴脸",
                            "keywords": "face,money,mouth,脸、钱、嘴",
                            "unicode": "1f911"
                        },
                        {
                            "description": "Smiling face with sunglasses",
                            "description_zh_cn": "戴墨镜的笑脸",
                            "keywords": "bright,cool,eye,eyewear,face,glasses,smile,sun,sunglasses,weather,明亮,酷,眼,眼镜,脸,眼镜,微笑,太阳,太阳镜,天气",
                            "unicode": "1f60e"
                        },
                        {
                            "description": "Nerd face",
                            "description_zh_cn": "书呆子脸",
                            "keywords": "face,geek,nerd,脸,极客,书呆子",
                            "unicode": "1f913"
                        },
                        {
                            "description": "Disguised face",
                            "description_zh_cn": "伪装的脸",
                            "keywords": "disguise,glasses,incognito,nose,伪装,眼镜,隐身,鼻子",
                            "unicode": "1f978"
                        },
                        {
                            "description": "Face with monocle",
                            "description_zh_cn": "面对单片眼镜",
                            "keywords": "stuffy,wealthy,rich,闷,富,富",
                            "unicode": "1f9d0"
                        },
                        {
                            "description": "Cowboy hat face",
                            "description_zh_cn": "牛仔帽脸",
                            "keywords": "cowboy,cowgirl,face,hat,牛仔,女牛仔,脸,帽子",
                            "unicode": "1f920"
                        },
                        {
                            "description": "Partying face",
                            "description_zh_cn": "派对脸",
                            "keywords": "face,celebration,hat,horn,party,脸,庆祝活动,帽子,喇叭,派对",
                            "unicode": "1f973"
                        },
                        {
                            "description": "Hugging face",
                            "description_zh_cn": "拥抱脸",
                            "keywords": "face,hug,hugging,脸,拥抱,拥抱",
                            "unicode": "1f917"
                        },
                        {
                            "description": "Clown face",
                            "description_zh_cn": "小丑脸",
                            "keywords": "clown,face,小丑,脸",
                            "unicode": "1f921"
                        },
                        {
                            "description": "Smirking face",
                            "description_zh_cn": "笑脸",
                            "keywords": "face,smirk,脸,假笑",
                            "unicode": "1f60f"
                        },
                        {
                            "description": "Face without mouth",
                            "description_zh_cn": "没有嘴的脸",
                            "keywords": "face,mouth,quiet,silent,脸,嘴,安静,沉默",
                            "unicode": "1f636"
                        },
                        {
                            "description": "Neutral face",
                            "description_zh_cn": "中性脸",
                            "keywords": "deadpan,face,neutral,面无表情,脸色,中性",
                            "unicode": "1f610"
                        },
                        {
                            "description": "Expressionless face",
                            "description_zh_cn": "面无表情",
                            "keywords": "expressionless,face,inexpressive,unexpressive,面无表情,面无表情,面无表情",
                            "unicode": "1f611"
                        },
                        {
                            "description": "Unamused face",
                            "description_zh_cn": "面无表情",
                            "keywords": "face,unamused,unhappy,脸,不悦,不开心",
                            "unicode": "1f612"
                        },
                        {
                            "description": "Face with rolling eyes",
                            "description_zh_cn": "翻白眼的脸",
                            "keywords": "eyes,face,rolling,眼睛,脸,滚动",
                            "unicode": "1f644"
                        },
                        {
                            "description": "Face with raised eyebrow",
                            "description_zh_cn": "眉毛上扬的脸",
                            "keywords": "distrust,skeptic,disapproval,disbelief,mild surprise,scepticism,不信任、怀疑、不赞成、怀疑、轻微的惊讶、怀疑",
                            "unicode": "1f928"
                        },
                        {
                            "description": "Thinking face",
                            "description_zh_cn": "思考的脸",
                            "keywords": "face,thinking,面对,思考",
                            "unicode": "1f914"
                        },
                        {
                            "description": "Shushing face",
                            "description_zh_cn": "嘘嘘的脸",
                            "keywords": "shh,quiet,hush,嘘,安静,安静",
                            "unicode": "1f92b"
                        },
                        {
                            "description": "Face with hand over mouth",
                            "description_zh_cn": "用手捂住嘴脸",
                            "keywords": "eyes,smiling,covering,mouth,hand,眼睛,微笑,覆盖物,嘴巴,手",
                            "unicode": "1f92d"
                        },
                        {
                            "description": "Lying face",
                            "description_zh_cn": "躺着的脸",
                            "keywords": "face,lie,pinocchio,脸,谎言,匹诺曹",
                            "unicode": "1f925"
                        },
                        {
                            "description": "Flushed face",
                            "description_zh_cn": "通红的脸",
                            "keywords": "dazed,face,flushed,茫然,脸,潮红",
                            "unicode": "1f633"
                        },
                        {
                            "description": "Disappointed face",
                            "description_zh_cn": "失望的脸",
                            "keywords": "disappointed,face,失望,脸",
                            "unicode": "1f61e"
                        },
                        {
                            "description": "Worried face",
                            "description_zh_cn": "担心的脸",
                            "keywords": "face,worried,脸,担心",
                            "unicode": "1f61f"
                        },
                        {
                            "description": "Angry face",
                            "description_zh_cn": "愤怒的脸",
                            "keywords": "angry,face,mad,生气,脸,生气",
                            "unicode": "1f620"
                        },
                        {
                            "description": "Pouting face",
                            "description_zh_cn": "撅着脸",
                            "keywords": "angry,face,mad,pouting,rage,red,生气,脸,生气,撅嘴,愤怒,红色",
                            "unicode": "1f621"
                        },
                        {
                            "description": "Face with symbols over mouth",
                            "description_zh_cn": "嘴上有符号的脸",
                            "keywords": "cursing,swearing,cussing,骂人,骂人,骂人",
                            "unicode": "1f92c"
                        },
                        {
                            "description": "Pensive face",
                            "description_zh_cn": "沉思的脸",
                            "keywords": "dejected,face,pensive,沮丧,脸,沉思",
                            "unicode": "1f614"
                        },
                        {
                            "description": "Confused face",
                            "description_zh_cn": "迷茫的脸",
                            "keywords": "confused,face,困惑,脸",
                            "unicode": "1f615"
                        },
                        {
                            "description": "Slightly frowning face",
                            "description_zh_cn": "微微皱眉的脸",
                            "keywords": "face,frown,sad,unhappy,脸,皱眉,悲伤,不开心",
                            "unicode": "1f641"
                        },
                        {
                            "description": "Frowning face",
                            "description_zh_cn": "皱眉的脸",
                            "keywords": "face,frown,sad,unhappy,脸,皱眉,悲伤,不开心",
                            "unicode": "2639"
                        },
                        {
                            "description": "Grimacing face",
                            "description_zh_cn": "做鬼脸",
                            "keywords": "face,grimace,脸,鬼脸",
                            "unicode": "1f62c"
                        },
                        {
                            "description": "Pleading face",
                            "description_zh_cn": "恳求的脸",
                            "keywords": "face,begging,mercy,puppy eyes,脸,乞求,怜悯,小狗的眼睛",
                            "unicode": "1f97a"
                        },
                        {
                            "description": "Persevering face",
                            "description_zh_cn": "执着的脸",
                            "keywords": "face,persevere,面对,坚持",
                            "unicode": "1f623"
                        },
                        {
                            "description": "Confounded face",
                            "description_zh_cn": "困惑的脸",
                            "keywords": "confounded,face,困惑,脸",
                            "unicode": "1f616"
                        },
                        {
                            "description": "Tired face",
                            "description_zh_cn": "疲惫的脸",
                            "keywords": "face,tired,脸,累了",
                            "unicode": "1f62b"
                        },
                        {
                            "description": "Weary face",
                            "description_zh_cn": "疲惫的脸",
                            "keywords": "face,tired,weary,脸,疲倦,疲倦",
                            "unicode": "1f629"
                        },
                        {
                            "description": "Yawning face",
                            "description_zh_cn": "打哈欠的脸",
                            "keywords": "bored,tired,yawn,无聊,疲倦,打哈欠",
                            "unicode": "1f971"
                        },
                        {
                            "description": "Face with look of triumph",
                            "description_zh_cn": "一脸得意的表情",
                            "keywords": "face,triumph,won,面对,胜利,赢了",
                            "unicode": "1f624"
                        },
                        {
                            "description": "Face exhaling",
                            "description_zh_cn": "面部呼气",
                            "keywords": "face,exhale,gasp,groan,relief,whisper,whistle,面对,呼气,喘气,呻吟,救济,耳语,口哨",
                            "unicode": "1f62e-200d-1f4a8"
                        },
                        {
                            "description": "Face with open mouth",
                            "description_zh_cn": "张开嘴的脸",
                            "keywords": "face,mouth,open,sympathy,脸,嘴,张开,同情",
                            "unicode": "1f62e"
                        },
                        {
                            "description": "Face screaming in fear",
                            "description_zh_cn": "吓得脸大叫",
                            "keywords": "face,fear,fearful,munch,scared,scream,面对,恐惧,害怕,咀嚼,害怕,尖叫",
                            "unicode": "1f631"
                        },
                        {
                            "description": "Fearful face",
                            "description_zh_cn": "可怕的脸",
                            "keywords": "face,fear,fearful,scared,面对,恐惧,害怕,害怕",
                            "unicode": "1f628"
                        },
                        {
                            "description": "Face with open mouth and cold sweat",
                            "description_zh_cn": "一张张嘴、冒冷汗的脸",
                            "keywords": "blue,cold,face,mouth,open,rushed,sweat,蓝色,冷,脸,嘴,打开,冲,汗",
                            "unicode": "1f630"
                        },
                        {
                            "description": "Hushed face",
                            "description_zh_cn": "缄默的脸",
                            "keywords": "face,hushed,stunned,surprised,脸,安静,震惊,惊讶",
                            "unicode": "1f62f"
                        },
                        {
                            "description": "Frowning face with open mouth",
                            "description_zh_cn": "张开嘴皱着眉头",
                            "keywords": "face,frown,mouth,open,脸,皱眉,嘴巴,张开",
                            "unicode": "1f626"
                        },
                        {
                            "description": "Anguished face",
                            "description_zh_cn": "痛苦的脸",
                            "keywords": "anguished,face,痛苦,脸",
                            "unicode": "1f627"
                        },
                        {
                            "description": "Crying face",
                            "description_zh_cn": "哭脸",
                            "keywords": "cry,face,sad,tear,哭,脸,悲伤,眼泪",
                            "unicode": "1f622"
                        },
                        {
                            "description": "Disappointed but relieved face",
                            "description_zh_cn": "失望但松了口气的脸",
                            "keywords": "disappointed,face,relieved,whew,失望,脸,松了口气,哇",
                            "unicode": "1f625"
                        },
                        {
                            "description": "Sleepy face",
                            "description_zh_cn": "困倦的脸",
                            "keywords": "face,sleep,脸,睡觉",
                            "unicode": "1f62a"
                        },
                        {
                            "description": "Drooling face",
                            "description_zh_cn": "流口水的脸",
                            "keywords": "drooling,face,流口水,脸",
                            "unicode": "1f924"
                        },
                        {
                            "description": "Face with cold sweat",
                            "description_zh_cn": "一脸冷汗",
                            "keywords": "cold,face,sweat,冷,脸,汗",
                            "unicode": "1f613"
                        },
                        {
                            "description": "Loudly crying face",
                            "description_zh_cn": "大声哭泣的脸",
                            "keywords": "cry,face,sad,sob,tear,哭,脸,悲伤,抽泣,眼泪",
                            "unicode": "1f62d"
                        },
                        {
                            "description": "Star-struck",
                            "description_zh_cn": "星光熠熠",
                            "keywords": "eyes,face,grinning,star,starry eyed,眼睛,脸,咧嘴笑,明星,满天星斗",
                            "unicode": "1f929"
                        },
                        {
                            "description": "Dizzy face",
                            "description_zh_cn": "头晕脸",
                            "keywords": "dizzy,face,头晕,脸",
                            "unicode": "1f635"
                        },
                        {
                            "description": "Face with spiral eyes",
                            "description_zh_cn": "长着螺旋眼的脸",
                            "keywords": "dizzy,face,eyes,hypnotized,spiral,trouble,whoa,头晕,脸,眼睛,催眠,螺旋,麻烦,哇",
                            "unicode": "1f635-200d-1f4ab"
                        },
                        {
                            "description": "Woozy face",
                            "description_zh_cn": "昏昏沉沉的脸",
                            "keywords": "face,dizzy,intoxicated,tipsy,uneven eyes,wavy mouth,脸,头晕,陶醉,酒醉,眼睛凹凸不平,嘴巴波浪状",
                            "unicode": "1f974"
                        },
                        {
                            "description": "Astonished face",
                            "description_zh_cn": "惊讶的脸",
                            "keywords": "astonished,face,shocked,totally,惊讶,脸,震惊,完全",
                            "unicode": "1f632"
                        },
                        {
                            "description": "Exploding head",
                            "description_zh_cn": "爆炸头",
                            "keywords": "face,shocked,explosion,mad,mind blowing,脸,震惊,爆炸,疯狂,令人兴奋",
                            "unicode": "1f92f"
                        },
                        {
                            "description": "Zipper-mouth face",
                            "description_zh_cn": "拉链嘴脸",
                            "keywords": "face,mouth,zipper,脸、嘴、拉链",
                            "unicode": "1f910"
                        },
                        {
                            "description": "Face with medical mask",
                            "description_zh_cn": "戴着医用口罩的脸",
                            "keywords": "cold,doctor,face,mask,medicine,sick,感冒,医生,脸,面具,药,生病",
                            "unicode": "1f637"
                        },
                        {
                            "description": "Face with head-bandage",
                            "description_zh_cn": "头戴绷带的脸",
                            "keywords": "bandage,face,hurt,injury,绷带,脸,受伤,受伤",
                            "unicode": "1f915"
                        },
                        {
                            "description": "Face with thermometer",
                            "description_zh_cn": "面对温度计",
                            "keywords": "face,ill,sick,thermometer,脸,生病,生病,温度计",
                            "unicode": "1f912"
                        },
                        {
                            "description": "Face vomiting",
                            "description_zh_cn": "面部呕吐",
                            "keywords": "sick,vomit,ill,puke,生病,呕吐,生病,呕吐",
                            "unicode": "1f92e"
                        },
                        {
                            "description": "Nauseated face",
                            "description_zh_cn": "恶心的脸",
                            "keywords": "face,nauseated,vomit,脸,恶心,呕吐",
                            "unicode": "1f922"
                        },
                        {
                            "description": "Sneezing face",
                            "description_zh_cn": "打喷嚏的脸",
                            "keywords": "face,gesundheit,sneeze,脸,gesundheit,打喷嚏",
                            "unicode": "1f927"
                        },
                        {
                            "description": "Hot face",
                            "description_zh_cn": "热脸",
                            "keywords": "face,feverish,heat stroke,hot,red-faced,sweating,脸,发烧,中暑,热,脸红,出汗",
                            "unicode": "1f975"
                        },
                        {
                            "description": "Cold face",
                            "description_zh_cn": "冷脸",
                            "keywords": "face,blue-faced,cold,freezing,frostbite,icicles,脸,蓝脸,冷,冰冻,冻伤,冰柱",
                            "unicode": "1f976"
                        },
                        {
                            "description": "Face in clouds",
                            "description_zh_cn": "云中的脸",
                            "keywords": "face,absentminded,impractical,unrealistic,dream,fog,head in clouds,脸,心不在焉,不切实际,不切实际,梦想,雾,头在云中",
                            "unicode": "1f636-200d-1f32b-fe0f"
                        },
                        {
                            "description": "Sleeping face",
                            "description_zh_cn": "睡脸",
                            "keywords": "face,sleep,zzz,脸,睡觉,zzz",
                            "unicode": "1f634"
                        },
                        {
                            "description": "Sleeping symbol",
                            "description_zh_cn": "睡眠符号",
                            "keywords": "comic,sleep,zzz,漫画,睡眠,zzz",
                            "unicode": "1f4a4"
                        },
                        {
                            "description": "Smiling face with horns",
                            "description_zh_cn": "带角的笑脸",
                            "keywords": "face,fairy tale,fantasy,horns,smile,脸,童话故事,幻想,角,微笑",
                            "unicode": "1f608"
                        },
                        {
                            "description": "Imp",
                            "description_zh_cn": "小鬼",
                            "keywords": "demon,devil,face,fairy tale,fantasy,imp,恶魔,恶魔,脸,童话,幻想,小鬼",
                            "unicode": "1f47f"
                        },
                        {
                            "description": "Japanese ogre",
                            "description_zh_cn": "日本食人魔",
                            "keywords": "creature,face,fairy tale,fantasy,japanese,monster,ogre,生物,脸,童话故事,幻想,日语,怪物,食人魔",
                            "unicode": "1f479"
                        },
                        {
                            "description": "Japanese goblin",
                            "description_zh_cn": "日本妖精",
                            "keywords": "creature,face,fairy tale,fantasy,goblin,japanese,monster,生物,脸,童话故事,幻想,妖精,日语,怪物",
                            "unicode": "1f47a"
                        },
                        {
                            "description": "Pile of poo",
                            "description_zh_cn": "一堆便便",
                            "keywords": "comic,dung,face,monster,poo,poop,漫画,粪,脸,怪物,便便,便便",
                            "unicode": "1f4a9"
                        },
                        {
                            "description": "Ghost",
                            "description_zh_cn": "鬼",
                            "keywords": "creature,face,fairy tale,fantasy,ghost,monster,halloween,生物,脸,童话故事,幻想,鬼,怪物,万圣节",
                            "unicode": "1f47b"
                        },
                        {
                            "description": "Skull",
                            "description_zh_cn": "颅骨",
                            "keywords": "body,death,face,fairy tale,monster,skull,halloween,身体,死亡,脸,童话故事,怪物,头骨,万圣节",
                            "unicode": "1f480"
                        },
                        {
                            "description": "Skull and crossbones",
                            "description_zh_cn": "骷髅和交叉骨",
                            "keywords": "body,crossbones,death,face,monster,skull,halloween,身体,交叉骨,死亡,脸,怪物,头骨,万圣节",
                            "unicode": "2620"
                        },
                        {
                            "description": "Extraterrestrial alien",
                            "description_zh_cn": "外星外星人",
                            "keywords": "alien,creature,extraterrestrial,face,fairy tale,fantasy,monster,space,ufo,外星人,生物,外星人,脸,童话故事,幻想,怪物,空间,不明飞行物",
                            "unicode": "1f47d"
                        },
                        {
                            "description": "Robot face",
                            "description_zh_cn": "机器人脸",
                            "keywords": "face,monster,robot,脸,怪物,机器人",
                            "unicode": "1f916"
                        },
                        {
                            "description": "Jack-o-lantern",
                            "description_zh_cn": "南瓜灯",
                            "keywords": "activity,celebration,entertainment,halloween,jack,lantern,pumpkin,活动,庆祝活动,娱乐,万圣节,杰克,灯笼,南瓜",
                            "unicode": "1f383"
                        },
                        {
                            "description": "Smiling cat face with open mouth",
                            "description_zh_cn": "张开嘴的笑猫脸",
                            "keywords": "cat,face,mouth,open,smile,猫,脸,嘴,打开,微笑",
                            "unicode": "1f63a"
                        },
                        {
                            "description": "Grinning cat face with smiling eyes",
                            "description_zh_cn": "笑眯眯的猫脸，笑眯眯的眼睛",
                            "keywords": "cat,eye,face,grin,smile,猫,眼睛,脸,咧嘴笑,微笑",
                            "unicode": "1f638"
                        },
                        {
                            "description": "Cat face with tears of joy",
                            "description_zh_cn": "猫脸上洋溢着喜悦的泪水",
                            "keywords": "cat,face,joy,tear,猫,脸,喜悦,眼泪",
                            "unicode": "1f639"
                        },
                        {
                            "description": "Smiling cat face with heart-shaped eyes",
                            "description_zh_cn": "笑脸猫脸，心形眼睛",
                            "keywords": "cat,eye,face,heart,love,smile,猫,眼,脸,心,爱,微笑",
                            "unicode": "1f63b"
                        },
                        {
                            "description": "Cat face with wry smile",
                            "description_zh_cn": "猫脸苦笑",
                            "keywords": "cat,face,ironic,smile,wry,猫,脸,讽刺,微笑,苦涩",
                            "unicode": "1f63c"
                        },
                        {
                            "description": "Kissing cat face with closed eyes",
                            "description_zh_cn": "闭着眼睛亲吻猫脸",
                            "keywords": "cat,eye,face,kiss,猫,眼睛,脸,吻",
                            "unicode": "1f63d"
                        },
                        {
                            "description": "Weary cat face",
                            "description_zh_cn": "疲惫的猫脸",
                            "keywords": "cat,face,oh,surprised,weary,猫,脸,哦,惊讶,厌倦",
                            "unicode": "1f640"
                        },
                        {
                            "description": "Crying cat face",
                            "description_zh_cn": "哭泣的猫脸",
                            "keywords": "cat,cry,face,sad,tear,猫,哭,脸,悲伤,眼泪",
                            "unicode": "1f63f"
                        },
                        {
                            "description": "Pouting cat face",
                            "description_zh_cn": "噘嘴的猫脸",
                            "keywords": "cat,face,pouting,猫,脸,撅嘴",
                            "unicode": "1f63e"
                        },
                        {
                            "description": "Open hands",
                            "description_zh_cn": "张开双手",
                            "keywords": "body,hand,open,身体,手,打开",
                            "unicode": "1f450"
                        },
                        {
                            "description": "Palms up together",
                            "description_zh_cn": "双手合十",
                            "keywords": "body,prayer,cupped hands,身体,祈祷,双手合十",
                            "unicode": "1f932"
                        },
                        {
                            "description": "Raising hands",
                            "description_zh_cn": "举手",
                            "keywords": "body,celebration,gesture,hand,hooray,raised,身体,庆祝活动,手势,手,万岁,提出",
                            "unicode": "1f64c"
                        },
                        {
                            "description": "Clapping hands sign",
                            "description_zh_cn": "拍手标志",
                            "keywords": "clapping hands,body,clap,hand,拍手,身体,拍手,手",
                            "unicode": "1f44f"
                        },
                        {
                            "description": "Folded hands",
                            "description_zh_cn": "双手合十",
                            "keywords": "ask,body,bow,folded,gesture,hand,please,pray,thanks,问,正文,弓,折叠,手势,手,请,祈祷,谢谢",
                            "unicode": "1f64f"
                        },
                        {
                            "description": "Handshake",
                            "description_zh_cn": "握手",
                            "keywords": "agreement,hand,handshake,meeting,shake,协议,手,握手,会议,握手",
                            "unicode": "1f91d"
                        },
                        {
                            "description": "Thumbs up",
                            "description_zh_cn": "竖起大拇指",
                            "keywords": "body,up,hand,thumb,thumbs up,+1,身体,向上,手,拇指,竖起大拇指,+1",
                            "unicode": "1f44d"
                        },
                        {
                            "description": "Thumbs down",
                            "description_zh_cn": "不看好",
                            "keywords": "body,down,hand,thumb,thumbs down,-1,身体,向下,手,拇指,拇指向下,-1",
                            "unicode": "1f44e"
                        },
                        {
                            "description": "Fisted hand",
                            "description_zh_cn": "拳头",
                            "keywords": "body,clenched,fist,hand,punch,oncoming,身体,握紧,拳头,手,拳,迎面而来",
                            "unicode": "1f44a"
                        },
                        {
                            "description": "Raised fist",
                            "description_zh_cn": "举起拳头",
                            "keywords": "body,clenched,fist,hand,punch,身体,握紧,拳头,手,拳",
                            "unicode": "270a"
                        },
                        {
                            "description": "Left-facing fist",
                            "description_zh_cn": "左拳",
                            "keywords": "body,fist,leftwards,身体,拳头,向左",
                            "unicode": "1f91b"
                        },
                        {
                            "description": "Right-facing fist",
                            "description_zh_cn": "右拳",
                            "keywords": "body,fist,rightwards,身体,拳头,向右",
                            "unicode": "1f91c"
                        },
                        {
                            "description": "Crossed fingers",
                            "description_zh_cn": "交叉手指",
                            "keywords": "body,cross,finger,hand,luck,身体,交叉,手指,手,运气",
                            "unicode": "1f91e"
                        },
                        {
                            "description": "Victory hand",
                            "description_zh_cn": "胜利之手",
                            "keywords": "body,hand,v,victory,身体,手,v,胜利",
                            "unicode": "270c"
                        },
                        {
                            "description": "Sign of the horns",
                            "description_zh_cn": "角的标志",
                            "keywords": "body,finger,hand,horns,rock-on,身体,手指,手,角,摇滚",
                            "unicode": "1f918"
                        },
                        {
                            "description": "Love-you gesture",
                            "description_zh_cn": "爱你的手势",
                            "keywords": "body,ily,i love you,hand,身体,我,我爱你,手",
                            "unicode": "1f91f"
                        },
                        {
                            "description": "Ok hand",
                            "description_zh_cn": "好的",
                            "keywords": "body,hand,ok,身体,手,好",
                            "unicode": "1f44c"
                        },
                        {
                            "description": "Pinched fingers",
                            "description_zh_cn": "手指被夹",
                            "keywords": "fingers,hand gesture,interrogation,pinched,sarcastic,手指,手势,审讯,捏,讽刺",
                            "unicode": "1f90c"
                        },
                        {
                            "description": "Pinching hand",
                            "description_zh_cn": "捏手",
                            "keywords": "body,hand,small,little,tiny,身体,手,小,小,微小",
                            "unicode": "1f90f"
                        },
                        {
                            "description": "Left pointing backhand index",
                            "description_zh_cn": "左指反手指数",
                            "keywords": "backhand,body,finger,hand,index,point,反手,身体,手指,手,索引,点",
                            "unicode": "1f448"
                        },
                        {
                            "description": "Right pointing backhand index",
                            "description_zh_cn": "右指反手指数",
                            "keywords": "backhand,body,finger,hand,index,point,反手,身体,手指,手,索引,点",
                            "unicode": "1f449"
                        },
                        {
                            "description": "Up pointing backhand index",
                            "description_zh_cn": "上指反手指数",
                            "keywords": "backhand,body,finger,hand,index,point,up,反手,身体,手指,手,索引,点,向上",
                            "unicode": "1f446"
                        },
                        {
                            "description": "Down pointing backhand index",
                            "description_zh_cn": "下指反手指数",
                            "keywords": "backhand,body,down,finger,hand,index,point,反手,身体,向下,手指,手,索引,点",
                            "unicode": "1f447"
                        },
                        {
                            "description": "Up pointing index",
                            "description_zh_cn": "向上指数",
                            "keywords": "body,finger,hand,index,point,up,身体,手指,手,索引,点,向上",
                            "unicode": "261d"
                        },
                        {
                            "description": "Raised hand",
                            "description_zh_cn": "举手",
                            "keywords": "body,hand,身体,手",
                            "unicode": "270b"
                        },
                        {
                            "description": "Raised back of hand",
                            "description_zh_cn": "手背抬高",
                            "keywords": "body,backhand,raised,身体,反手,抬起",
                            "unicode": "1f91a"
                        },
                        {
                            "description": "Raised hand with fingers splayed",
                            "description_zh_cn": "举起手，手指张开",
                            "keywords": "body,finger,hand,splayed,身体、手指、手、张开",
                            "unicode": "1f590"
                        },
                        {
                            "description": "Raised hand with part between middle and ring fingers",
                            "description_zh_cn": "中指和无名指之间的部分举起",
                            "keywords": "body,finger,hand,spock,vulcan,身体,手指,手,spock,vulcan",
                            "unicode": "1f596"
                        },
                        {
                            "description": "Waving hand",
                            "description_zh_cn": "挥手",
                            "keywords": "body,hand,wave,waving,hi,hello,身体,手,波,挥舞着,嗨,你好",
                            "unicode": "1f44b"
                        },
                        {
                            "description": "Call me hand",
                            "description_zh_cn": "叫我手",
                            "keywords": "body,call,hand,身体,电话,手",
                            "unicode": "1f919"
                        },
                        {
                            "description": "Flexed biceps",
                            "description_zh_cn": "弯曲的二头肌",
                            "keywords": "biceps,body,comic,flex,muscle,二头肌,身体,漫画,弹性,肌肉",
                            "unicode": "1f4aa"
                        },
                        {
                            "description": "Mechanical arm",
                            "description_zh_cn": "机械臂",
                            "keywords": "accessibility,prosthetic,body,可及性、假肢、身体",
                            "unicode": "1f9be"
                        },
                        {
                            "description": "Reversed hand with middle finger extended",
                            "description_zh_cn": "反手伸出中指",
                            "keywords": "body,finger,hand,middle finger,身体、手指、手、中指",
                            "unicode": "1f595"
                        },
                        {
                            "description": "Writing hand",
                            "description_zh_cn": "写手",
                            "keywords": "body,hand,write,身体,手,写",
                            "unicode": "270d"
                        },
                        {
                            "description": "Selfie",
                            "description_zh_cn": "自拍",
                            "keywords": "camera,phone,selfie,arm,相机、手机、自拍、手臂",
                            "unicode": "1f933"
                        },
                        {
                            "description": "Nail polish",
                            "description_zh_cn": "指甲油",
                            "keywords": "body,care,cosmetics,manicure,nail,polish,身体,护理,化妆品,修指甲,指甲,抛光",
                            "unicode": "1f485"
                        },
                        {
                            "description": "Leg",
                            "description_zh_cn": "腿",
                            "keywords": "body,kick,limb,身体、踢腿、四肢",
                            "unicode": "1f9b5"
                        },
                        {
                            "description": "Mechanical leg",
                            "description_zh_cn": "机械腿",
                            "keywords": "accessibility,prosthetic,body,可及性、假肢、身体",
                            "unicode": "1f9bf"
                        },
                        {
                            "description": "Foot",
                            "description_zh_cn": "脚",
                            "keywords": "body,kick,stomp,身体,踢,跺脚",
                            "unicode": "1f9b6"
                        },
                        {
                            "description": "Mouth",
                            "description_zh_cn": "嘴",
                            "keywords": "body,lips,mouth,身体,嘴唇,嘴巴",
                            "unicode": "1f444"
                        },
                        {
                            "description": "Tooth",
                            "description_zh_cn": "齿",
                            "keywords": "body,teeth,dentist,身体,牙齿,牙医",
                            "unicode": "1f9b7"
                        },
                        {
                            "description": "Tongue",
                            "description_zh_cn": "舌头",
                            "keywords": "body,tongue,身体,舌头",
                            "unicode": "1f445"
                        },
                        {
                            "description": "Ear",
                            "description_zh_cn": "耳朵",
                            "keywords": "body,nose,身体,鼻子",
                            "unicode": "1f442"
                        },
                        {
                            "description": "Ear with hearing aid",
                            "description_zh_cn": "带助听器的耳朵",
                            "keywords": "accessibility,hearing,body,ear,可访问性,听力,身体,耳朵",
                            "unicode": "1f9bb"
                        },
                        {
                            "description": "Nose",
                            "description_zh_cn": "鼻子",
                            "keywords": "body,nose,身体,鼻子",
                            "unicode": "1f443"
                        },
                        {
                            "description": "Eye",
                            "description_zh_cn": "眼睛",
                            "keywords": "body,eye,身体,眼睛",
                            "unicode": "1f441"
                        },
                        {
                            "description": "Eyes",
                            "description_zh_cn": "眼睛",
                            "keywords": "body,eye,face,身体,眼睛,脸",
                            "unicode": "1f440"
                        },
                        {
                            "description": "Brain",
                            "description_zh_cn": "脑",
                            "keywords": "body,organ,intelligent,smart,身体,器官,智能,智能",
                            "unicode": "1f9e0"
                        },
                        {
                            "description": "Anatomical heart",
                            "description_zh_cn": "解剖心脏",
                            "keywords": "anatomical,cardiology,heart,organ,pulse,解剖学,心脏病学,心脏,器官,脉搏",
                            "unicode": "1fac0"
                        },
                        {
                            "description": "Lungs",
                            "description_zh_cn": "肺",
                            "keywords": "breath,exhalation,inhalation,lungs,organ,respiration,呼吸,呼气,吸入,肺,器官,呼吸",
                            "unicode": "1fac1"
                        },
                        {
                            "description": "Bone",
                            "description_zh_cn": "骨",
                            "keywords": "body,skeleton,身体,骨架",
                            "unicode": "1f9b4"
                        },
                        {
                            "description": "Bust in silhouette",
                            "description_zh_cn": "半身像剪影",
                            "keywords": "bust,silhouette,胸围,剪影",
                            "unicode": "1f464"
                        },
                        {
                            "description": "Busts in silhouette",
                            "description_zh_cn": "半身像剪影",
                            "keywords": "bust,silhouette,胸围,剪影",
                            "unicode": "1f465"
                        },
                        {
                            "description": "Speaking head in silhouette",
                            "description_zh_cn": "在剪影中说话的头",
                            "keywords": "face,head,silhouette,speak,speaking,脸,头,剪影,说话,说话",
                            "unicode": "1f5e3"
                        },
                        {
                            "description": "People hugging",
                            "description_zh_cn": "人们拥抱",
                            "keywords": "goodbye,hello,hug,thanks,再见,你好,拥抱,谢谢",
                            "unicode": "1fac2"
                        },
                        {
                            "description": "Baby",
                            "description_zh_cn": "婴儿",
                            "keywords": "baby,婴儿",
                            "unicode": "1f476"
                        },
                        {
                            "description": "Girl",
                            "description_zh_cn": "女孩",
                            "keywords": "girl,maiden,virgin,virgo,zodiac,child,女孩,处女,处女,处女座,十二生肖,儿童",
                            "unicode": "1f467"
                        },
                        {
                            "description": "Child",
                            "description_zh_cn": "孩子",
                            "keywords": "person,child,boy,girl,人、孩子、男孩、女孩",
                            "unicode": "1f9d2"
                        },
                        {
                            "description": "Boy",
                            "description_zh_cn": "男孩",
                            "keywords": "boy,child,男孩,孩子",
                            "unicode": "1f466"
                        },
                        {
                            "description": "Woman",
                            "description_zh_cn": "女士",
                            "keywords": "woman,female,women,女人,女人,女人",
                            "unicode": "1f469"
                        },
                        {
                            "description": "Adult",
                            "description_zh_cn": "成人",
                            "keywords": "person,adult,man,woman,male,female,men,women,人,成人,男子,女子,男性,女性,男子,妇女",
                            "unicode": "1f9d1"
                        },
                        {
                            "description": "Man",
                            "description_zh_cn": "男人",
                            "keywords": "man,mustache,male,men,男人,小胡子,男,男人",
                            "unicode": "1f468"
                        },
                        {
                            "description": "Woman,curly haired",
                            "description_zh_cn": "女人，卷发",
                            "keywords": "curly,hair,woman,female,women,卷发,头发,女子,女性,妇女",
                            "unicode": "1f469-200d-1f9b1"
                        },
                        {
                            "description": "Person,curly haired",
                            "description_zh_cn": "人，卷发",
                            "keywords": "curly,hair,卷发",
                            "unicode": "1f9d1-200d-1f9b1"
                        },
                        {
                            "description": "Man,curly haired",
                            "description_zh_cn": "男人，卷发",
                            "keywords": "curly,hair,man,male,men,卷发,头发,男人,男,男",
                            "unicode": "1f468-200d-1f9b1"
                        },
                        {
                            "description": "Woman,red haired",
                            "description_zh_cn": "女人，红头发",
                            "keywords": "red,hair,woman,female,women,红色,头发,女人,女性,妇女",
                            "unicode": "1f469-200d-1f9b0"
                        },
                        {
                            "description": "Person,red haired",
                            "description_zh_cn": "人，红头发",
                            "keywords": "red,hair,红发",
                            "unicode": "1f9d1-200d-1f9b0"
                        },
                        {
                            "description": "Man,red haired",
                            "description_zh_cn": "男人，红头发",
                            "keywords": "red,hair,man,male,men,红色,头发,男人,男,男",
                            "unicode": "1f468-200d-1f9b0"
                        },
                        {
                            "description": "Woman,blond haired",
                            "description_zh_cn": "女人，金发",
                            "keywords": "blond,blonde,hair,woman,female,women,金发女郎,金发女郎,头发,女子,女性,妇女",
                            "unicode": "1f471-200d-2640-fe0f"
                        },
                        {
                            "description": "Person,blond haired",
                            "description_zh_cn": "人，金发",
                            "keywords": "blond,blonde,hair,金发,金发,头发",
                            "unicode": "1f471"
                        },
                        {
                            "description": "Man,blond haired",
                            "description_zh_cn": "男人，金发",
                            "keywords": "blond,blonde,hair,man,male,men,金发女郎,金发女郎,头发,男子,男,男子",
                            "unicode": "1f471-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman,white haired",
                            "description_zh_cn": "女人，白发",
                            "keywords": "white,hair,woman,female,women,白,头发,女人,女性,妇女",
                            "unicode": "1f469-200d-1f9b3"
                        },
                        {
                            "description": "Person,white haired",
                            "description_zh_cn": "人，白发",
                            "keywords": "white,hair,白色的头发",
                            "unicode": "1f9d1-200d-1f9b3"
                        },
                        {
                            "description": "Man,white haired",
                            "description_zh_cn": "男人，白头发",
                            "keywords": "white,hair,man,male,men,白,头发,男人,男,男",
                            "unicode": "1f468-200d-1f9b3"
                        },
                        {
                            "description": "Woman,bald",
                            "description_zh_cn": "女人，秃头",
                            "keywords": "bald,woman,female,women,秃头,女人,女性,妇女",
                            "unicode": "1f469-200d-1f9b2"
                        },
                        {
                            "description": "Person,bald",
                            "description_zh_cn": "人，秃头",
                            "keywords": "bald,秃",
                            "unicode": "1f9d1-200d-1f9b2"
                        },
                        {
                            "description": "Man,bald",
                            "description_zh_cn": "男人，秃头",
                            "keywords": "bald,man,male,men,秃头,男人,男性,男人",
                            "unicode": "1f468-200d-1f9b2"
                        },
                        {
                            "description": "Bearded woman",
                            "description_zh_cn": "大胡子女人",
                            "keywords": "beard,bewhiskered,woman,female,women,胡子,白须,女子,女性,妇女",
                            "unicode": "1f9d4-200d-2640-fe0f"
                        },
                        {
                            "description": "Bearded person",
                            "description_zh_cn": "有胡子的人",
                            "keywords": "beard,bewhiskered,胡须,满脸胡须",
                            "unicode": "1f9d4"
                        },
                        {
                            "description": "Bearded man",
                            "description_zh_cn": "大胡子男人",
                            "keywords": "beard,bewhiskered,man,male,men,胡子,白须,男子,男性,男子",
                            "unicode": "1f9d4-200d-2642-fe0f"
                        },
                        {
                            "description": "Older woman",
                            "description_zh_cn": "老妇人",
                            "keywords": "old,woman,female,women,老,女人,女性,妇女",
                            "unicode": "1f475"
                        },
                        {
                            "description": "Older adult",
                            "description_zh_cn": "年长者",
                            "keywords": "person,old,man,woman,male,female,men,women,人,旧,男子,女子,男,女,男,女",
                            "unicode": "1f9d3"
                        },
                        {
                            "description": "Older man",
                            "description_zh_cn": "老人",
                            "keywords": "old,man,male,men,老,男人,男性,男人",
                            "unicode": "1f474"
                        },
                        {
                            "description": "Person with skullcap",
                            "description_zh_cn": "戴无盖帽的人",
                            "keywords": "gua pi mao,hat,瓜皮帽,帽子",
                            "unicode": "1f472"
                        },
                        {
                            "description": "Woman wearing turban",
                            "description_zh_cn": "戴头巾的女人",
                            "keywords": "turban,woman,female,women,头巾,女人,女性,妇女",
                            "unicode": "1f473-200d-2640-fe0f"
                        },
                        {
                            "description": "Person wearing turban",
                            "description_zh_cn": "戴头巾的人",
                            "keywords": "turban,头巾",
                            "unicode": "1f473"
                        },
                        {
                            "description": "Man wearing turban",
                            "description_zh_cn": "戴头巾的男人",
                            "keywords": "turban,man,male,men,头巾,男人,男性,男人",
                            "unicode": "1f473-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman with headscarf",
                            "description_zh_cn": "戴头巾的女人",
                            "keywords": "headscarf,hijab,mantilla,tichel,bandana,head kerchief,woman,female,women,头巾,头巾,头巾,tichel,头巾,头巾,女人,女性,妇女",
                            "unicode": "1f9d5"
                        },
                        {
                            "description": "Woman police officer",
                            "description_zh_cn": "女警官",
                            "keywords": "cop,officer,police,woman,female,women,警察,官员,警察,女子,女性,妇女",
                            "unicode": "1f46e-200d-2640-fe0f"
                        },
                        {
                            "description": "Police officer",
                            "description_zh_cn": "警官",
                            "keywords": "cop,officer,police,警察,官员,警察",
                            "unicode": "1f46e"
                        },
                        {
                            "description": "Man police officer",
                            "description_zh_cn": "男警察",
                            "keywords": "cop,officer,police,man,male,men,警察,官员,警察,男子,男性,男子",
                            "unicode": "1f46e-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman firefighter",
                            "description_zh_cn": "女消防员",
                            "keywords": "fire,firefighter,woman,female,women,火,消防员,女子,女性,妇女",
                            "unicode": "1f469-200d-1f692"
                        },
                        {
                            "description": "Firefighter",
                            "description_zh_cn": "消防队员",
                            "keywords": "fire,firefighter,火,消防员",
                            "unicode": "1f9d1-200d-1f692"
                        },
                        {
                            "description": "Man firefighter",
                            "description_zh_cn": "男子消防员",
                            "keywords": "fire,firefighter,man,male,men,火,消防员,男子,男性,男子",
                            "unicode": "1f468-200d-1f692"
                        },
                        {
                            "description": "Woman construction worker",
                            "description_zh_cn": "女建筑工人",
                            "keywords": "construction,worker,woman,female,women,建设,工人,女子,女性,妇女",
                            "unicode": "1f477-200d-2640-fe0f"
                        },
                        {
                            "description": "Construction worker",
                            "description_zh_cn": "建筑工人",
                            "keywords": "construction,worker,建筑工人",
                            "unicode": "1f477"
                        },
                        {
                            "description": "Man construction worker",
                            "description_zh_cn": "男建筑工人",
                            "keywords": "construction,worker,man,male,men,建设,工人,男子,男,男",
                            "unicode": "1f477-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman factory worker",
                            "description_zh_cn": "女工厂工人",
                            "keywords": "factory,industrial,welder,woman,female,women,工厂,工业,焊工,女人,女性,妇女",
                            "unicode": "1f469-200d-1f3ed"
                        },
                        {
                            "description": "Factory worker",
                            "description_zh_cn": "工厂员工",
                            "keywords": "factory,industrial,welder,工厂、工业、焊工",
                            "unicode": "1f9d1-200d-1f3ed"
                        },
                        {
                            "description": "Man factory worker",
                            "description_zh_cn": "男工厂工人",
                            "keywords": "factory,industrial,welder,man,male,men,工厂,工业,焊工,男子,男性,男性",
                            "unicode": "1f468-200d-1f3ed"
                        },
                        {
                            "description": "Woman mechanic",
                            "description_zh_cn": "女技工",
                            "keywords": "tradesperson,plumber,electrician,repair person,woman,female,women,商人、水管工、电工、维修人员、女人、女性、女性",
                            "unicode": "1f469-200d-1f527"
                        },
                        {
                            "description": "Mechanic",
                            "description_zh_cn": "机械",
                            "keywords": "tradesperson,plumber,electrician,repair person,商人、水管工、电工、修理工",
                            "unicode": "1f9d1-200d-1f527"
                        },
                        {
                            "description": "Man mechanic",
                            "description_zh_cn": "男技工",
                            "keywords": "tradesperson,plumber,electrician,repair person,man,male,men,商人、水管工、电工、维修人员、男子、男性、男性",
                            "unicode": "1f468-200d-1f527"
                        },
                        {
                            "description": "Woman farmer",
                            "description_zh_cn": "女农民",
                            "keywords": "farm worker,rancher,gardener,farming,woman,female,women,农场工人,牧场主,园丁,农业,女人,女性,妇女",
                            "unicode": "1f469-200d-1f33e"
                        },
                        {
                            "description": "Farmer",
                            "description_zh_cn": "农民",
                            "keywords": "farm worker,rancher,gardener,farming,农场工人、牧场主、园丁、农业",
                            "unicode": "1f9d1-200d-1f33e"
                        },
                        {
                            "description": "Man farmer",
                            "description_zh_cn": "男农民",
                            "keywords": "farm worker,rancher,gardener,farming,man,male,men,农场工人,牧场主,园丁,农业,男子,男性,男性",
                            "unicode": "1f468-200d-1f33e"
                        },
                        {
                            "description": "Woman cook",
                            "description_zh_cn": "女厨师",
                            "keywords": "food,service,chef,cook,cooking,woman,female,women,食品,服务,厨师,厨师,烹饪,女子,女性,妇女",
                            "unicode": "1f469-200d-1f373"
                        },
                        {
                            "description": "Cook",
                            "description_zh_cn": "厨师",
                            "keywords": "food,service,chef,cook,cooking,食物、服务、厨师、厨师、烹饪",
                            "unicode": "1f9d1-200d-1f373"
                        },
                        {
                            "description": "Man cook",
                            "description_zh_cn": "男厨师",
                            "keywords": "food,service,chef,cook,cooking,man,male,men,食品,服务,厨师,厨师,烹饪,男子,男性,男子",
                            "unicode": "1f468-200d-1f373"
                        },
                        {
                            "description": "Woman singer",
                            "description_zh_cn": "女歌手",
                            "keywords": "music,musician,rocker,rockstar,entertainer,woman,female,women,音乐,音乐家,摇杆,摇滚明星,艺人,女子,女性,妇女",
                            "unicode": "1f469-200d-1f3a4"
                        },
                        {
                            "description": "Singer",
                            "description_zh_cn": "歌手",
                            "keywords": "music,musician,rocker,rockstar,entertainer,音乐,音乐家,摇滚歌手,摇滚明星,艺人",
                            "unicode": "1f9d1-200d-1f3a4"
                        },
                        {
                            "description": "Man singer",
                            "description_zh_cn": "男歌手",
                            "keywords": "music,musician,rocker,rockstar,entertainer,man,male,men,音乐,音乐家,摇杆,摇滚明星,艺人,男子,男,男",
                            "unicode": "1f468-200d-1f3a4"
                        },
                        {
                            "description": "Woman artist",
                            "description_zh_cn": "女艺术家",
                            "keywords": "art,artist,paint,painter,woman,female,women,艺术,艺术家,油漆,画家,女子,女性,妇女",
                            "unicode": "1f469-200d-1f3a8"
                        },
                        {
                            "description": "Artist",
                            "description_zh_cn": "艺术家",
                            "keywords": "art,artist,paint,painter,艺术,艺术家,油漆,画家",
                            "unicode": "1f9d1-200d-1f3a8"
                        },
                        {
                            "description": "Man artist",
                            "description_zh_cn": "男艺人",
                            "keywords": "art,artist,paint,painter,man,male,men,艺术,艺术家,油漆,画家,男子,男,男子",
                            "unicode": "1f468-200d-1f3a8"
                        },
                        {
                            "description": "Woman teacher",
                            "description_zh_cn": "女老师",
                            "keywords": "education,teacher,professor,educator,instructor,woman,female,women,教育,老师,教授,教育家,讲师,女人,女性,妇女",
                            "unicode": "1f469-200d-1f3eb"
                        },
                        {
                            "description": "Teacher",
                            "description_zh_cn": "老师",
                            "keywords": "education,teacher,professor,educator,instructor,教育,老师,教授,教育家,讲师",
                            "unicode": "1f9d1-200d-1f3eb"
                        },
                        {
                            "description": "Man teacher",
                            "description_zh_cn": "男老师",
                            "keywords": "education,teacher,professor,educator,instructor,man,male,men,教育,老师,教授,教育家,讲师,男子,男,男",
                            "unicode": "1f468-200d-1f3eb"
                        },
                        {
                            "description": "Woman student",
                            "description_zh_cn": "女学生",
                            "keywords": "pupil,graduate,education,school,woman,female,women,学生,研究生,教育,学校,女子,女性,妇女",
                            "unicode": "1f469-200d-1f393"
                        },
                        {
                            "description": "Student",
                            "description_zh_cn": "学生",
                            "keywords": "pupil,graduate,education,school,学生,研究生,教育,学校",
                            "unicode": "1f9d1-200d-1f393"
                        },
                        {
                            "description": "Man student",
                            "description_zh_cn": "男学生",
                            "keywords": "pupil,graduate,education,school,man,male,men,学生,研究生,教育,学校,男子,男,男子",
                            "unicode": "1f468-200d-1f393"
                        },
                        {
                            "description": "Woman office worker",
                            "description_zh_cn": "女上班族",
                            "keywords": "office,accountant,banker,manager,adviser,clerk,analyst,woman,female,women,办公室,会计师,银行家,经理,顾问,文员,分析师,女人,女性,妇女",
                            "unicode": "1f469-200d-1f4bc"
                        },
                        {
                            "description": "Office worker",
                            "description_zh_cn": "上班族",
                            "keywords": "office,accountant,banker,manager,adviser,clerk,analyst,办公室、会计师、银行家、经理、顾问、文员、分析师",
                            "unicode": "1f9d1-200d-1f4bc"
                        },
                        {
                            "description": "Man office worker",
                            "description_zh_cn": "男人上班族",
                            "keywords": "office,accountant,banker,manager,adviser,clerk,analyst,man,male,men,办公室,会计师,银行家,经理,顾问,文员,分析师,男子,男性,男性",
                            "unicode": "1f468-200d-1f4bc"
                        },
                        {
                            "description": "Woman technologist",
                            "description_zh_cn": "女技术员",
                            "keywords": "technology,software,engineer,coder,laptop,woman,female,women,技术,软件,工程师,编码器,笔记本电脑,女子,女性,妇女",
                            "unicode": "1f469-200d-1f4bb"
                        },
                        {
                            "description": "Technologist",
                            "description_zh_cn": "技术专家",
                            "keywords": "technology,software,engineer,coder,laptop,技术、软件、工程师、编码器、笔记本电脑",
                            "unicode": "1f9d1-200d-1f4bb"
                        },
                        {
                            "description": "Man technologist",
                            "description_zh_cn": "男技师",
                            "keywords": "technology,software,engineer,coder,laptop,man,male,men,技术,软件,工程师,编码器,笔记本电脑,男子,男性,男性",
                            "unicode": "1f468-200d-1f4bb"
                        },
                        {
                            "description": "Woman scientist",
                            "description_zh_cn": "女科学家",
                            "keywords": "scientist,chemist,engineer,mathematician,physicist,biologist,lab technician,woman,female,women,科学家、化学家、工程师、数学家、物理学家、生物学家、实验室技术员、女性、女性",
                            "unicode": "1f469-200d-1f52c"
                        },
                        {
                            "description": "Scientist",
                            "description_zh_cn": "科学家",
                            "keywords": "scientist,chemist,engineer,mathematician,physicist,biologist,lab technician,科学家、化学家、工程师、数学家、物理学家、生物学家、实验室技术员",
                            "unicode": "1f9d1-200d-1f52c"
                        },
                        {
                            "description": "Man scientist",
                            "description_zh_cn": "男科学家",
                            "keywords": "scientist,chemist,engineer,mathematician,physicist,biologist,lab technician,man,male,men,科学家,化学家,工程师,数学家,物理学家,生物学家,实验室技术员,男子,男,男子",
                            "unicode": "1f468-200d-1f52c"
                        },
                        {
                            "description": "Woman astronaut",
                            "description_zh_cn": "女宇航员",
                            "keywords": "space,stars,moon,planets,woman,female,women,空间,星星,月亮,行星,女子,女性,妇女",
                            "unicode": "1f469-200d-1f680"
                        },
                        {
                            "description": "Astronaut",
                            "description_zh_cn": "宇航员",
                            "keywords": "space,stars,moon,planets,太空,星星,月亮,行星",
                            "unicode": "1f9d1-200d-1f680"
                        },
                        {
                            "description": "Man astronaut",
                            "description_zh_cn": "男宇航员",
                            "keywords": "space,stars,moon,planets,man,male,men,空间,星星,月亮,行星,男子,男性,男性",
                            "unicode": "1f468-200d-1f680"
                        },
                        {
                            "description": "Woman health worker",
                            "description_zh_cn": "女卫生员",
                            "keywords": "doctor,physician,MD,nurse,dentist,healthcare professional,therapist,woman,female,women,医生、医师、医学博士、护士、牙医、医疗保健专业人员、治疗师、女性、女性",
                            "unicode": "1f469-200d-2695-fe0f"
                        },
                        {
                            "description": "Health worker",
                            "description_zh_cn": "保健员",
                            "keywords": "doctor,physician,MD,nurse,dentist,healthcare professional,therapist,医生、医师、医学博士、护士、牙医、医疗保健专业人员、治疗师",
                            "unicode": "1f9d1-200d-2695-fe0f"
                        },
                        {
                            "description": "Man health worker",
                            "description_zh_cn": "男卫生工作者",
                            "keywords": "doctor,physician,MD,nurse,dentist,healthcare professional,therapist,man,male,men,医生、医师、医学博士、护士、牙医、医疗保健专业人员、治疗师、男人、男性、男性",
                            "unicode": "1f468-200d-2695-fe0f"
                        },
                        {
                            "description": "Woman judge",
                            "description_zh_cn": "女法官",
                            "keywords": "judge,court,law,woman,female,women,法官,法院,法律,女子,女性,妇女",
                            "unicode": "1f469-200d-2696-fe0f"
                        },
                        {
                            "description": "Judge",
                            "description_zh_cn": "法官",
                            "keywords": "judge,court,law,法官,法院,法律",
                            "unicode": "1f9d1-200d-2696-fe0f"
                        },
                        {
                            "description": "Man judge",
                            "description_zh_cn": "男法官",
                            "keywords": "judge,court,law,man,male,men,法官,法院,法律,男子,男性,男性",
                            "unicode": "1f468-200d-2696-fe0f"
                        },
                        {
                            "description": "Woman pilot",
                            "description_zh_cn": "女飞行员",
                            "keywords": "pilot,airplane,aviator,aviation,woman,female,women,飞行员,飞机,飞行员,航空,女子,女性,妇女",
                            "unicode": "1f469-200d-2708-fe0f"
                        },
                        {
                            "description": "Pilot",
                            "description_zh_cn": "飞行员",
                            "keywords": "pilot,airplane,aviator,aviation,飞行员,飞机,飞行员,航空",
                            "unicode": "1f9d1-200d-2708-fe0f"
                        },
                        {
                            "description": "Man pilot",
                            "description_zh_cn": "男飞行员",
                            "keywords": "pilot,airplane,aviator,aviation,man,male,men,飞行员,飞机,飞行员,航空,男子,男性,男子",
                            "unicode": "1f468-200d-2708-fe0f"
                        },
                        {
                            "description": "Woman guard",
                            "description_zh_cn": "女警卫",
                            "keywords": "guard,guardsman,woman,female,women,警卫,卫兵,女人,女性,妇女",
                            "unicode": "1f482-200d-2640-fe0f"
                        },
                        {
                            "description": "Guard",
                            "description_zh_cn": "警卫",
                            "keywords": "guard,guardsman,守卫,守卫",
                            "unicode": "1f482"
                        },
                        {
                            "description": "Man guard",
                            "description_zh_cn": "男卫",
                            "keywords": "guard,guardsman,man,male,men,警卫,卫兵,男子,男,男子",
                            "unicode": "1f482-200d-2642-fe0f"
                        },
                        {
                            "description": "Ninja",
                            "description_zh_cn": "忍者",
                            "keywords": "fighter,hidden,ninja,stealth,战斗机,隐藏,忍者,隐身",
                            "unicode": "1f977"
                        },
                        {
                            "description": "Woman detective",
                            "description_zh_cn": "女侦探",
                            "keywords": "detective,sleuth,spy,woman,female,women,侦探,侦探,间谍,女人,女性,妇女",
                            "unicode": "1f575-fe0f-200d-2640-fe0f"
                        },
                        {
                            "description": "Detective",
                            "description_zh_cn": "侦探",
                            "keywords": "detective,sleuth,spy,侦探、侦探、间谍",
                            "unicode": "1f575"
                        },
                        {
                            "description": "Man detective",
                            "description_zh_cn": "男侦探",
                            "keywords": "detective,sleuth,spy,man,male,men,侦探,侦探,间谍,男子,男,男子",
                            "unicode": "1f575-fe0f-200d-2642-fe0f"
                        },
                        {
                            "description": "Mrs. Claus",
                            "description_zh_cn": "克劳斯夫人",
                            "keywords": "activity,celebration,christmas,mother,mrs. claus,santa,claus,woman,female,women,活动,庆祝活动,圣诞节,母亲,夫人。克劳斯,圣诞老人,克劳斯,女子,女性,妇女",
                            "unicode": "1f936"
                        },
                        {
                            "description": "Mrs. Claus",
                            "description_zh_cn": "克劳斯夫人",
                            "keywords": "activity,celebration,christmas,mother,mrs. claus,santa,claus,woman,female,women,活动,庆祝活动,圣诞节,母亲,夫人。克劳斯,圣诞老人,克劳斯,女子,女性,妇女",
                            "unicode": "1f469-200d-1f384"
                        },
                        {
                            "description": "Mx Claus",
                            "description_zh_cn": "Mx 克劳斯",
                            "keywords": "activity,celebration,christmas,santa,claus,活动,庆祝活动,圣诞节,圣诞老人,克劳斯",
                            "unicode": "1f9d1-200d-1f384"
                        },
                        {
                            "description": "Santa Claus",
                            "description_zh_cn": "圣诞老人",
                            "keywords": "activity,celebration,christmas,father,santa,claus,man,male,men,活动,庆祝活动,圣诞节,父亲,圣诞老人,克劳斯,男子,男,男子",
                            "unicode": "1f385"
                        },
                        {
                            "description": "Santa Claus",
                            "description_zh_cn": "圣诞老人",
                            "keywords": "activity,celebration,christmas,father,santa,claus,man,male,men,活动,庆祝活动,圣诞节,父亲,圣诞老人,克劳斯,男子,男,男子",
                            "unicode": "1f468-200d-1f384"
                        },
                        {
                            "description": "Baby angel",
                            "description_zh_cn": "宝贝天使",
                            "keywords": "angel,baby,face,fairy tale,fantasy,天使,婴儿,脸,童话,幻想",
                            "unicode": "1f47c"
                        },
                        {
                            "description": "Princess",
                            "description_zh_cn": "公主",
                            "keywords": "fairy tale,fantasy,princess,woman,female,women,童话故事,幻想,公主,女人,女性,妇女",
                            "unicode": "1f478"
                        },
                        {
                            "description": "Prince",
                            "description_zh_cn": "王子",
                            "keywords": "fairy tale,fantasy,prince,man,male,men,童话故事,幻想,王子,男人,男,男人",
                            "unicode": "1f934"
                        },
                        {
                            "description": "Woman with veil",
                            "description_zh_cn": "戴面纱的女人",
                            "keywords": "bride,veil,wedding,woman,female,women,新娘,面纱,婚礼,女子,女性,妇女",
                            "unicode": "1f470"
                        },
                        {
                            "description": "Person with veil",
                            "description_zh_cn": "戴面纱的人",
                            "keywords": "bride,veil,wedding,新娘,面纱,婚礼",
                            "unicode": "1f470-200d-2640-fe0f"
                        },
                        {
                            "description": "Man with veil",
                            "description_zh_cn": "戴面纱的男人",
                            "keywords": "bride,veil,wedding,man,male,men,新娘,面纱,婚礼,男子,男,男子",
                            "unicode": "1f470-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman in tuxedo",
                            "description_zh_cn": "穿着燕尾服的女人",
                            "keywords": "tuxedo,wedding,woman,female,women,燕尾服,婚礼,女人,女性,妇女",
                            "unicode": "1f935-200d-2640-fe0f"
                        },
                        {
                            "description": "Person in tuxedo",
                            "description_zh_cn": "穿着燕尾服的人",
                            "keywords": "groom,tuxedo,wedding,新郎,燕尾服,婚礼",
                            "unicode": "1f935"
                        },
                        {
                            "description": "Man in tuxedo",
                            "description_zh_cn": "穿燕尾服的男人",
                            "keywords": "groom,tuxedo,wedding,man,male,men,新郎,燕尾服,婚礼,男人,男,男",
                            "unicode": "1f935-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman in business suit levitating",
                            "description_zh_cn": "悬浮的西装的女人",
                            "keywords": "business,suit,woman,female,women,业务,西装,女子,女性,妇女",
                            "unicode": "1f574-fe0f-200d-2640-fe0f"
                        },
                        {
                            "description": "Person in business suit levitating",
                            "description_zh_cn": "悬浮的西装的人",
                            "keywords": "business,suit,商务套装",
                            "unicode": "1f574"
                        },
                        {
                            "description": "Man in business suit levitating",
                            "description_zh_cn": "悬浮的西装的人",
                            "keywords": "business,suit,man,male,men,业务,西装,男子,男性,男子",
                            "unicode": "1f574-fe0f-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman superhero",
                            "description_zh_cn": "女超级英雄",
                            "keywords": "fantasy,good,heroine,superpowers,woman,female,women,幻想,好,女主角,超能力,女人,女性,妇女",
                            "unicode": "1f9b8-200d-2640-fe0f"
                        },
                        {
                            "description": "Superhero",
                            "description_zh_cn": "超级英雄",
                            "keywords": "fantasy,good,hero,heroine,superpowers,幻想,好,英雄,女主角,超能力",
                            "unicode": "1f9b8"
                        },
                        {
                            "description": "Man superhero",
                            "description_zh_cn": "男人超级英雄",
                            "keywords": "fantasy,good,hero,superpowers,man,male,men,幻想,好,英雄,超能力,男人,男,男",
                            "unicode": "1f9b8-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman supervillain",
                            "description_zh_cn": "女超级反派",
                            "keywords": "fantasy,bad,criminal,evil,superpowers,villain,woman,female,women,幻想,坏,犯罪,邪恶,超能力,恶棍,女人,女性,妇女",
                            "unicode": "1f9b9-200d-2640-fe0f"
                        },
                        {
                            "description": "Supervillain",
                            "description_zh_cn": "超级反派",
                            "keywords": "fantasy,bad,criminal,evil,superpowers,villain,幻想,坏,犯罪,邪恶,超级大国,恶棍",
                            "unicode": "1f9b9"
                        },
                        {
                            "description": "Man supervillain",
                            "description_zh_cn": "男人超级反派",
                            "keywords": "fantasy,bad,criminal,evil,superpowers,villain,man,male,men,幻想,坏,犯罪,邪恶,超能力,小人,男子,男性,男性",
                            "unicode": "1f9b9-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman mage",
                            "description_zh_cn": "女法师",
                            "keywords": "fantasy,sorceress,witch,woman,female,women,幻想,女巫,女巫,女子,女性,妇女",
                            "unicode": "1f9d9-200d-2640-fe0f"
                        },
                        {
                            "description": "Mage",
                            "description_zh_cn": "法师",
                            "keywords": "fantasy,sorcerer,wizard,幻想,巫师,巫师",
                            "unicode": "1f9d9"
                        },
                        {
                            "description": "Man mage",
                            "description_zh_cn": "男法师",
                            "keywords": "fantasy,sorcerer,wizard,man,male,men,幻想,巫师,巫师,男子,男,男子",
                            "unicode": "1f9d9-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman elf",
                            "description_zh_cn": "女精灵",
                            "keywords": "fantasy,elf,pointed ears,woman,female,women,幻想,精灵,尖耳朵,女人,女性,妇女",
                            "unicode": "1f9dd-200d-2640-fe0f"
                        },
                        {
                            "description": "Elf",
                            "description_zh_cn": "精灵",
                            "keywords": "fantasy,elf,pointed ears,幻想,精灵,尖耳朵",
                            "unicode": "1f9dd"
                        },
                        {
                            "description": "Man elf",
                            "description_zh_cn": "人小精灵",
                            "keywords": "fantasy,elf,pointed ears,man,male,men,幻想,精灵,尖耳朵,男人,男,男",
                            "unicode": "1f9dd-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman fairy",
                            "description_zh_cn": "女仙女",
                            "keywords": "fantasy,titania,wings,woman,female,women,幻想,二氧化钛,翅膀,女子,女性,妇女",
                            "unicode": "1f9da-200d-2640-fe0f"
                        },
                        {
                            "description": "Fairy",
                            "description_zh_cn": "仙女",
                            "keywords": "fantasy,titania,wings,幻想,二氧化钛,翅膀",
                            "unicode": "1f9da"
                        },
                        {
                            "description": "Man fairy",
                            "description_zh_cn": "男精灵",
                            "keywords": "fantasy,oberon,puck,man,male,men,幻想,精灵,男子,男性,男子",
                            "unicode": "1f9da-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman genie",
                            "description_zh_cn": "女精灵",
                            "keywords": "fantasy,djinn,woman,female,women,幻想,精灵,女人,女性,妇女",
                            "unicode": "1f9de-200d-2640-fe0f"
                        },
                        {
                            "description": "Genie",
                            "description_zh_cn": "精灵",
                            "keywords": "fantasy,djinn,幻想,精灵",
                            "unicode": "1f9de"
                        },
                        {
                            "description": "Man genie",
                            "description_zh_cn": "男人精灵",
                            "keywords": "fantasy,djinn,man,male,men,幻想,精灵,男人,男,男",
                            "unicode": "1f9de-200d-2642-fe0f"
                        },
                        {
                            "description": "Mermaid",
                            "description_zh_cn": "美人鱼",
                            "keywords": "fantasy,merwoman,woman,female,women,幻想,美人鱼,女子,女性,妇女",
                            "unicode": "1f9dc-200d-2640-fe0f"
                        },
                        {
                            "description": "Merperson",
                            "description_zh_cn": "人鱼",
                            "keywords": "fantasy,mermaid,幻想,美人鱼",
                            "unicode": "1f9dc"
                        },
                        {
                            "description": "Merman",
                            "description_zh_cn": "人鱼",
                            "keywords": "fantasy,mermaid,man,male,men,幻想,美人鱼,男人,男,男",
                            "unicode": "1f9dc-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman vampire",
                            "description_zh_cn": "女吸血鬼",
                            "keywords": "fantasy,unded,woman,female,women,幻想,unded,女人,女性,妇女",
                            "unicode": "1f9db-200d-2640-fe0f"
                        },
                        {
                            "description": "Vampire",
                            "description_zh_cn": "吸血鬼",
                            "keywords": "fantasy,dracula,undead,幻想,德古拉,亡灵",
                            "unicode": "1f9db"
                        },
                        {
                            "description": "Man vampire",
                            "description_zh_cn": "吸血鬼",
                            "keywords": "fantasy,dracula,undead,man,male,men,幻想,德古拉,亡灵,男人,男,男",
                            "unicode": "1f9db-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman zombie",
                            "description_zh_cn": "女人僵尸",
                            "keywords": "fantasy,undead,woman,female,women,幻想,不死族,女人,女性,妇女",
                            "unicode": "1f9df-200d-2640-fe0f"
                        },
                        {
                            "description": "Zombie",
                            "description_zh_cn": "僵尸",
                            "keywords": "fantasy,undead,幻想,亡灵",
                            "unicode": "1f9df"
                        },
                        {
                            "description": "Man zombie",
                            "description_zh_cn": "人僵尸",
                            "keywords": "fantasy,undead,man,male,men,幻想,亡灵,男人,男,男",
                            "unicode": "1f9df-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman bowing deeply",
                            "description_zh_cn": "女人深深鞠躬",
                            "keywords": "apology,bow,gesture,sorry,woman,female,women,道歉,弓,手势,对不起,女人,女性,妇女",
                            "unicode": "1f647-200d-2640-fe0f"
                        },
                        {
                            "description": "Person bowing deeply",
                            "description_zh_cn": "深深鞠躬的人",
                            "keywords": "apology,bow,gesture,sorry,道歉,鞠躬,手势,对不起",
                            "unicode": "1f647"
                        },
                        {
                            "description": "Man bowing deeply",
                            "description_zh_cn": "男人深深鞠躬",
                            "keywords": "apology,bow,gesture,sorry,man,male,men,道歉,弓,手势,对不起,男人,男,男人",
                            "unicode": "1f647-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman tipping hand",
                            "description_zh_cn": "小费手的女人",
                            "keywords": "hand,help,information,sassy,woman,female,women,手,帮助,信息,时髦,女人,女性,妇女",
                            "unicode": "1f481-200d-2640-fe0f"
                        },
                        {
                            "description": "Person tipping hand",
                            "description_zh_cn": "小费手的人",
                            "keywords": "hand,help,information,sassy,woman,female,women,手,帮助,信息,时髦,女人,女性,妇女",
                            "unicode": "1f481"
                        },
                        {
                            "description": "Man tipping hand",
                            "description_zh_cn": "小费手的人",
                            "keywords": "hand,help,information,sassy,man,male,men,手,帮助,信息,时髦,男人,男性,男人",
                            "unicode": "1f481-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman gesturing not ok",
                            "description_zh_cn": "女人打手势不好",
                            "keywords": "forbidden,gesture,hand,no,not,prohibited,woman,female,women,禁止,手势,手,不,不,禁止,女人,女性,妇女",
                            "unicode": "1f645-200d-2640-fe0f"
                        },
                        {
                            "description": "Person gesturing not ok",
                            "description_zh_cn": "打手势不好的人",
                            "keywords": "forbidden,gesture,hand,no,not,prohibited,禁止,手势,手,不,不,禁止",
                            "unicode": "1f645"
                        },
                        {
                            "description": "Man gesturing not ok",
                            "description_zh_cn": "男人打手势不好",
                            "keywords": "forbidden,gesture,hand,no,not,prohibited,man,male,men,禁止,手势,手,不,不,禁止,男子,男性,男性",
                            "unicode": "1f645-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman gesturing ok",
                            "description_zh_cn": "打手势好的女人",
                            "keywords": "gesture,hand,ok,woman,female,women,手势,手,好的,女人,女性,妇女",
                            "unicode": "1f646-200d-2640-fe0f"
                        },
                        {
                            "description": "Person gesturing ok",
                            "description_zh_cn": "打手势好的人",
                            "keywords": "gesture,hand,ok,手势,手,好的",
                            "unicode": "1f646"
                        },
                        {
                            "description": "Man gesturing ok",
                            "description_zh_cn": "打手势好的人",
                            "keywords": "gesture,hand,ok,man,male,men,手势,手,确定,男子,男性,男子",
                            "unicode": "1f646-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman shrugging",
                            "description_zh_cn": "女人耸肩",
                            "keywords": "doubt,ignorance,indifference,shrug,woman,female,women,怀疑,无知,冷漠,耸肩,女人,女性,妇女",
                            "unicode": "1f937-200d-2640-fe0f"
                        },
                        {
                            "description": "Person shrugging",
                            "description_zh_cn": "耸肩的人",
                            "keywords": "doubt,ignorance,indifference,shrug,怀疑、无知、冷漠、耸肩",
                            "unicode": "1f937"
                        },
                        {
                            "description": "Man shrugging",
                            "description_zh_cn": "男人耸肩",
                            "keywords": "doubt,ignorance,indifference,shrug,man,male,men,怀疑,无知,冷漠,耸肩,男人,男,男",
                            "unicode": "1f937-200d-2642-fe0f"
                        },
                        {
                            "description": "Happy woman raising one hand",
                            "description_zh_cn": "举一只手的愉快的妇女",
                            "keywords": "gesture,hand,happy,raised,woman,female,women,手势,手,快乐,提出,女人,女性,妇女",
                            "unicode": "1f64b-200d-2640-fe0f"
                        },
                        {
                            "description": "Happy person raising one hand",
                            "description_zh_cn": "举一只手的愉快的人",
                            "keywords": "gesture,hand,happy,raised,手势,手,快乐,提出",
                            "unicode": "1f64b"
                        },
                        {
                            "description": "Happy man raising one hand",
                            "description_zh_cn": "举一只手的愉快的人",
                            "keywords": "gesture,hand,happy,raised,man,male,men,手势,手,快乐,提出,男子,男性,男子",
                            "unicode": "1f64b-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman facepalming",
                            "description_zh_cn": "女人捂脸",
                            "keywords": "disbelief,exasperation,face,palm,woman,female,women,难以置信,恼怒,脸,手掌,女人,女性,妇女",
                            "unicode": "1f926-200d-2640-fe0f"
                        },
                        {
                            "description": "Person facepalming",
                            "description_zh_cn": "人脸捂脸",
                            "keywords": "disbelief,exasperation,face,palm,难以置信,恼怒,脸,手掌",
                            "unicode": "1f926"
                        },
                        {
                            "description": "Man facepalming",
                            "description_zh_cn": "男人捂脸",
                            "keywords": "disbelief,exasperation,face,palm,man,male,men,难以置信,恼怒,脸,手掌,男人,男性,男人",
                            "unicode": "1f926-200d-2642-fe0f"
                        },
                        {
                            "description": "Deaf woman",
                            "description_zh_cn": "聋哑女人",
                            "keywords": "accessibility,deaf,woman,female,women,可访问性,聋人,妇女,女性,妇女",
                            "unicode": "1f9cf-200d-2640-fe0f"
                        },
                        {
                            "description": "Deaf person",
                            "description_zh_cn": "聋人",
                            "keywords": "accessibility,deaf,无障碍,聋",
                            "unicode": "1f9cf"
                        },
                        {
                            "description": "Deaf man",
                            "description_zh_cn": "聋子",
                            "keywords": "accessibility,deaf,man,male,men,可访问性,聋人,男子,男性,男性",
                            "unicode": "1f9cf-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman pouting",
                            "description_zh_cn": "女人撅嘴",
                            "keywords": "gesture,pouting,woman,female,women,手势,撅嘴,女人,女性,妇女",
                            "unicode": "1f64e-200d-2640-fe0f"
                        },
                        {
                            "description": "Person pouting face",
                            "description_zh_cn": "撅着脸的人",
                            "keywords": "gesture,pouting,手势,撅嘴",
                            "unicode": "1f64e"
                        },
                        {
                            "description": "Man pouting",
                            "description_zh_cn": "男人撅嘴",
                            "keywords": "gesture,pouting,man,male,men,手势,撅嘴,男人,男性,男人",
                            "unicode": "1f64e-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman frowning",
                            "description_zh_cn": "女人皱眉",
                            "keywords": "frown,gesture,sad,woman,female,women,皱眉,手势,悲伤,女人,女性,妇女",
                            "unicode": "1f64d-200d-2640-fe0f"
                        },
                        {
                            "description": "Person frowning",
                            "description_zh_cn": "皱眉的人",
                            "keywords": "frown,gesture,sad,皱眉,手势,悲伤",
                            "unicode": "1f64d"
                        },
                        {
                            "description": "Man frowning",
                            "description_zh_cn": "男人皱眉",
                            "keywords": "frown,gesture,sad,man,male,men,皱眉,手势,悲伤,男人,男性,男人",
                            "unicode": "1f64d-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman getting haircut",
                            "description_zh_cn": "剪头发的女人",
                            "keywords": "barber,beauty,haircut,parlor,woman,female,women,理发师,美容,理发,客厅,女人,女性,妇女",
                            "unicode": "1f487-200d-2640-fe0f"
                        },
                        {
                            "description": "Person getting haircut",
                            "description_zh_cn": "理发的人",
                            "keywords": "barber,beauty,haircut,parlor,理发师,美容,理发,客厅",
                            "unicode": "1f487"
                        },
                        {
                            "description": "Man getting haircut",
                            "description_zh_cn": "理发的男人",
                            "keywords": "barber,beauty,haircut,parlor,man,male,men,理发师,美容,理发,客厅,男人,男,男",
                            "unicode": "1f487-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman getting face massage",
                            "description_zh_cn": "做面部按摩的女人",
                            "keywords": "massage,salon,woman,female,women,按摩,沙龙,女子,女性,妇女",
                            "unicode": "1f486-200d-2640-fe0f"
                        },
                        {
                            "description": "Person getting face massage",
                            "description_zh_cn": "得到面部按摩的人",
                            "keywords": "massage,salon,按摩、沙龙",
                            "unicode": "1f486"
                        },
                        {
                            "description": "Man getting face massage",
                            "description_zh_cn": "得到面部按摩的人",
                            "keywords": "massage,salon,man,male,men,按摩,沙龙,男人,男,男",
                            "unicode": "1f486-200d-2642-fe0f"
                        },
                        {
                            "description": "Pregnant woman",
                            "description_zh_cn": "怀孕的女人",
                            "keywords": "pregnant,baby,woman,female,women,怀孕,婴儿,女人,女性,妇女",
                            "unicode": "1f930"
                        },
                        {
                            "description": "Breastfeeding",
                            "description_zh_cn": "哺乳",
                            "keywords": "breast,baby,infant,mother,child,nursing,milk,woman,female,women,乳房,婴儿,婴儿,母亲,儿童,护理,牛奶,女子,女性,妇女",
                            "unicode": "1f931"
                        },
                        {
                            "description": "Woman feeding baby",
                            "description_zh_cn": "女人喂婴儿",
                            "keywords": "baby,infant,child,nursing,milk,bottle,woman,female,women,婴儿,婴儿,儿童,护理,牛奶,瓶,女子,女性,妇女",
                            "unicode": "1f469-200d-1f37c"
                        },
                        {
                            "description": "Person feeding baby",
                            "description_zh_cn": "人喂养婴儿",
                            "keywords": "baby,infant,child,nursing,milk,bottle,婴儿,婴儿,儿童,护理,牛奶,瓶",
                            "unicode": "1f9d1-200d-1f37c"
                        },
                        {
                            "description": "Man feeding baby",
                            "description_zh_cn": "男人喂婴儿",
                            "keywords": "baby,infant,child,nursing,milk,bottle,man,male,men,婴儿,婴儿,儿童,护理,牛奶,瓶,男子,男,男子",
                            "unicode": "1f468-200d-1f37c"
                        },
                        {
                            "description": "Woman kneeling",
                            "description_zh_cn": "跪着的女人",
                            "keywords": "kneel,kneeling,woman,female,women,跪,跪,女人,女性,妇女",
                            "unicode": "1f9ce-200d-2640-fe0f"
                        },
                        {
                            "description": "Person kneeling",
                            "description_zh_cn": "跪着的人",
                            "keywords": "kneel,kneeling,跪,跪",
                            "unicode": "1f9ce"
                        },
                        {
                            "description": "Man kneeling",
                            "description_zh_cn": "跪着的男人",
                            "keywords": "kneel,kneeling,man,male,men,跪,跪,男人,男,男人",
                            "unicode": "1f9ce-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman standing",
                            "description_zh_cn": "站着的女人",
                            "keywords": "stand,standing,woman,female,women,站立,站立,女人,女性,妇女",
                            "unicode": "1f9cd-200d-2640-fe0f"
                        },
                        {
                            "description": "Person standing",
                            "description_zh_cn": "站立的人",
                            "keywords": "stand,standing,站立,站立",
                            "unicode": "1f9cd"
                        },
                        {
                            "description": "Man standing",
                            "description_zh_cn": "站立的人",
                            "keywords": "stand,standing,man,male,men,站立,站立,男子,男性,男性",
                            "unicode": "1f9cd-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman walking",
                            "description_zh_cn": "走路的女人",
                            "keywords": "hike,pedestrian,walk,walking,woman,female,women,远足,行人,步行,步行,女子,女性,妇女",
                            "unicode": "1f6b6-200d-2640-fe0f"
                        },
                        {
                            "description": "Person walking",
                            "description_zh_cn": "行走的人",
                            "keywords": "hike,pedestrian,walk,walking,远足,行人,步行,步行",
                            "unicode": "1f6b6"
                        },
                        {
                            "description": "Man walking",
                            "description_zh_cn": "行走的人",
                            "keywords": "hike,pedestrian,walk,walking,man,male,men,远足,行人,步行,步行,男子,男性,男子",
                            "unicode": "1f6b6-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman with probing cane",
                            "description_zh_cn": "拿着探查手杖的女人",
                            "keywords": "accessibility,blind,woman,female,women,可访问性,盲人,女性,女性,女性",
                            "unicode": "1f469-200d-1f9af"
                        },
                        {
                            "description": "Person with probing cane",
                            "description_zh_cn": "拿着探查手杖的人",
                            "keywords": "accessibility,blind,无障碍,盲",
                            "unicode": "1f9d1-200d-1f9af"
                        },
                        {
                            "description": "Man with probing cane",
                            "description_zh_cn": "拿着探查手杖的男人",
                            "keywords": "accessibility,blind,man,male,men,可访问性,盲人,男子,男性,男性",
                            "unicode": "1f468-200d-1f9af"
                        },
                        {
                            "description": "Woman running",
                            "description_zh_cn": "跑步的女人",
                            "keywords": "marathon,runner,running,woman,female,women,马拉松,赛跑者,运行,女子,女性,妇女",
                            "unicode": "1f3c3-200d-2640-fe0f"
                        },
                        {
                            "description": "Person running",
                            "description_zh_cn": "跑步的人",
                            "keywords": "marathon,runner,running,马拉松,赛跑者,跑步",
                            "unicode": "1f3c3"
                        },
                        {
                            "description": "Man running",
                            "description_zh_cn": "跑步的人",
                            "keywords": "marathon,runner,running,man,male,men,马拉松,赛跑者,运行,男子,男,男子",
                            "unicode": "1f3c3-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman in motorized wheelchair",
                            "description_zh_cn": "坐在电动轮椅上的女人",
                            "keywords": "accessibility,wheelchair,woman,female,women,无障碍,轮椅,女人,女性,妇女",
                            "unicode": "1f469-200d-1f9bc"
                        },
                        {
                            "description": "Person in motorized wheelchair",
                            "description_zh_cn": "坐在电动轮椅上的人",
                            "keywords": "accessibility,wheelchair,无障碍,轮椅",
                            "unicode": "1f9d1-200d-1f9bc"
                        },
                        {
                            "description": "Man in motorized wheelchair",
                            "description_zh_cn": "坐在电动轮椅上的男人",
                            "keywords": "accessibility,wheelchair,man,male,men,无障碍,轮椅,男子,男性,男性",
                            "unicode": "1f468-200d-1f9bc"
                        },
                        {
                            "description": "Woman in manual wheelchair",
                            "description_zh_cn": "手动轮椅上的女人",
                            "keywords": "accessibility,wheelchair,woman,female,women,无障碍,轮椅,女人,女性,妇女",
                            "unicode": "1f469-200d-1f9bd"
                        },
                        {
                            "description": "Person in manual wheelchair",
                            "description_zh_cn": "手动轮椅上的人",
                            "keywords": "accessibility,wheelchair,无障碍,轮椅",
                            "unicode": "1f9d1-200d-1f9bd"
                        },
                        {
                            "description": "Man in manual wheelchair",
                            "description_zh_cn": "手动轮椅上的男人",
                            "keywords": "accessibility,wheelchair,man,male,men,无障碍,轮椅,男子,男性,男性",
                            "unicode": "1f468-200d-1f9bd"
                        },
                        {
                            "description": "Woman dancing",
                            "description_zh_cn": "跳舞的女人",
                            "keywords": "dance,dancing,dancer,woman,female,women,跳舞,跳舞,舞者,女子,女性,妇女",
                            "unicode": "1f483"
                        },
                        {
                            "description": "Man dancing",
                            "description_zh_cn": "男人跳舞",
                            "keywords": "dance,dancing,dancer,man,male,men,跳舞,跳舞,舞者,男子,男,男子",
                            "unicode": "1f57a"
                        },
                        {
                            "description": "Women with bunny ears",
                            "description_zh_cn": "兔耳朵的女人",
                            "keywords": "bunny,dancer,woman,female,women,兔子,舞者,女人,女性,妇女",
                            "unicode": "1f46f-200d-2640-fe0f"
                        },
                        {
                            "description": "People with bunny ears",
                            "description_zh_cn": "兔耳朵的人",
                            "keywords": "bunny,dancer,兔子,舞者",
                            "unicode": "1f46f"
                        },
                        {
                            "description": "Men with bunny ears",
                            "description_zh_cn": "有兔耳朵的男人",
                            "keywords": "bunny,dancer,man,male,men,兔子,舞者,男子,男,男子",
                            "unicode": "1f46f-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman and man holding hands",
                            "description_zh_cn": "女人和男人手牵手",
                            "keywords": "couple,hand,hold,man,woman,male,female,men,women,夫妇,手,举行,男子,女子,男,女,男子,妇女",
                            "unicode": "1f46b"
                        },
                        {
                            "description": "Women holding hands",
                            "description_zh_cn": "手牵手的妇女",
                            "keywords": "couple,hand,hold,woman,female,women,pride,lgbt,lesbian,夫妇,手,举行,女人,女性,妇女,骄傲,lgbt,女同性恋",
                            "unicode": "1f46d"
                        },
                        {
                            "description": "Men holding hands",
                            "description_zh_cn": "手牵手的男人",
                            "keywords": "couple,hand,hold,man,male,men,pride,lgbt,gay,夫妇,手,举行,男子,男性,男子,骄傲,lgbt,同性恋",
                            "unicode": "1f46c"
                        },
                        {
                            "description": "People holding hands",
                            "description_zh_cn": "手牵手的人",
                            "keywords": "couple,hand,hold,情侣,手,抱",
                            "unicode": "1f9d1-200d-1f91d-200d-1f9d1"
                        },
                        {
                            "description": "Couple with heart (woman,man)",
                            "description_zh_cn": "有心的情侣（女人，男人）",
                            "keywords": "couple,heart,love,romance,man,woman,male,female,men,women,情侣,心,爱情,浪漫,男人,女人,男,女,男,女",
                            "unicode": "1f469-200d-2764-fe0f-200d-1f468"
                        },
                        {
                            "description": "Couple with heart (woman,woman)",
                            "description_zh_cn": "情侣心（女人，女人）",
                            "keywords": "couple,heart,love,romance,woman,female,women,pride,lgbt,lesbian,夫妇,心,爱情,浪漫,女人,女性,妇女,骄傲,lgbt,女同性恋",
                            "unicode": "1f469-200d-2764-fe0f-200d-1f469"
                        },
                        {
                            "description": "Couple with heart",
                            "description_zh_cn": "夫妻心",
                            "keywords": "couple,heart,love,romance,man,woman,male,female,men,women,情侣,心,爱情,浪漫,男人,女人,男,女,男,女",
                            "unicode": "1f491"
                        },
                        {
                            "description": "Couple with heart (man,man)",
                            "description_zh_cn": "情侣心（男人，男人）",
                            "keywords": "couple,heart,love,romance,man,male,men,pride,lgbt,gay,夫妇,心,爱情,浪漫,男子,男性,男子,骄傲,同性恋,同性恋",
                            "unicode": "1f468-200d-2764-fe0f-200d-1f468"
                        },
                        {
                            "description": "Kiss (woman,man)",
                            "description_zh_cn": "吻（女人，男人）",
                            "keywords": "couple,kiss,heart,love,romance,man,woman,male,female,men,women,情侣,吻,心,爱情,浪漫,男人,女人,男,女,男人,女人",
                            "unicode": "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468"
                        },
                        {
                            "description": "Kiss (woman,woman)",
                            "description_zh_cn": "吻（女人，女人）",
                            "keywords": "couple,kiss,heart,love,romance,woman,female,women,pride,lgbt,lesbian,夫妇,吻,心,爱情,浪漫,女人,女性,妇女,骄傲,lgbt,女同性恋",
                            "unicode": "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469"
                        },
                        {
                            "description": "Kiss",
                            "description_zh_cn": "吻",
                            "keywords": "couple,kiss,heart,love,romance,man,woman,male,female,men,women,情侣,吻,心,爱情,浪漫,男人,女人,男,女,男人,女人",
                            "unicode": "1f48f"
                        },
                        {
                            "description": "Kiss (man,man)",
                            "description_zh_cn": "吻（男人，男人）",
                            "keywords": "couple,kiss,heart,love,romance,man,male,men,pride,lgbt,gay,情侣,吻,心,爱情,浪漫,男人,男,男,骄傲,lgbt,gay",
                            "unicode": "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468"
                        },
                        {
                            "description": "Family",
                            "description_zh_cn": "家庭",
                            "keywords": "family,father,mother,man,woman,male,female,men,women,boy,child,家庭,父亲,母亲,男子,女子,男,女,男子,妇女,男孩,儿童",
                            "unicode": "1f46a"
                        },
                        {
                            "description": "Family (man,woman,girl)",
                            "description_zh_cn": "家庭（男人，女人，女孩）",
                            "keywords": "family,father,mother,,man,woman,male,female,men,women,girl,child,家庭,父亲,母亲,男人,女人,男,女,男人,女人,女孩,儿童",
                            "unicode": "1f468-200d-1f469-200d-1f467"
                        },
                        {
                            "description": "Family (man,woman,girl,boy)",
                            "description_zh_cn": "家庭（男人，女人，女孩，男孩）",
                            "keywords": "family,father,mother,man,woman,male,female,men,women,boy,girl,child,家庭,父亲,母亲,男子,女子,男,女,男子,妇女,男孩,女孩,儿童",
                            "unicode": "1f468-200d-1f469-200d-1f467-200d-1f466"
                        },
                        {
                            "description": "Family (man,woman,boy,boy)",
                            "description_zh_cn": "家庭（男人，女人，男孩，男孩）",
                            "keywords": "family,father,mother,man,woman,male,female,men,women,boy,child,家庭,父亲,母亲,男子,女子,男,女,男子,妇女,男孩,儿童",
                            "unicode": "1f468-200d-1f469-200d-1f466-200d-1f466"
                        },
                        {
                            "description": "Family (man,woman,girl,girl)",
                            "description_zh_cn": "家庭（男人，女人，女孩，女孩）",
                            "keywords": "family,father,mother,man,woman,male,female,men,women,girl,child,家庭,父亲,母亲,男子,女子,男,女,男子,妇女,女孩,儿童",
                            "unicode": "1f468-200d-1f469-200d-1f467-200d-1f467"
                        },
                        {
                            "description": "Family (woman,woman,boy)",
                            "description_zh_cn": "家庭（女人，女人，男孩）",
                            "keywords": "family,mother,woman,female,women,boy,child,pride,lgbt,lesbian,家庭,母亲,女人,女性,妇女,男孩,儿童,骄傲,lgbt,女同性恋",
                            "unicode": "1f469-200d-1f469-200d-1f466"
                        },
                        {
                            "description": "Family (woman,woman,girl)",
                            "description_zh_cn": "家庭（女人，女人，女孩）",
                            "keywords": "family,mother,woman,female,women,girl,child,pride,lgbt,lesbian,家庭,母亲,女子,女性,妇女,女孩,儿童,骄傲,lgbt,女同性恋",
                            "unicode": "1f469-200d-1f469-200d-1f467"
                        },
                        {
                            "description": "Family (woman,woman,girl,boy)",
                            "description_zh_cn": "家庭（女人，女人，女孩，男孩）",
                            "keywords": "family,mother,woman,female,women,boy,girl,child,pride,lgbt,lesbian,家庭,母亲,女子,女性,妇女,男孩,女孩,儿童,骄傲,lgbt,女同性恋",
                            "unicode": "1f469-200d-1f469-200d-1f467-200d-1f466"
                        },
                        {
                            "description": "Family (woman,woman,boy,boy)",
                            "description_zh_cn": "家庭（女人，女人，男孩，男孩）",
                            "keywords": "family,mother,woman,female,women,boy,child,pride,lgbt,lesbian,家庭,母亲,女人,女性,妇女,男孩,儿童,骄傲,lgbt,女同性恋",
                            "unicode": "1f469-200d-1f469-200d-1f466-200d-1f466"
                        },
                        {
                            "description": "Family (woman,woman,girl,girl)",
                            "description_zh_cn": "家庭（女人，女人，女孩，女孩）",
                            "keywords": "family,mother,woman,female,women,girl,child,pride,lgbt,lesbian,家庭,母亲,女子,女性,妇女,女孩,儿童,骄傲,lgbt,女同性恋",
                            "unicode": "1f469-200d-1f469-200d-1f467-200d-1f467"
                        },
                        {
                            "description": "Family (man,man,boy)",
                            "description_zh_cn": "家庭（男人，男人，男孩）",
                            "keywords": "family,father,man,male,men,boy,child,pride,lgbt,gay,家庭,父亲,男子,男性,男子,男孩,儿童,骄傲,同性恋,同性恋",
                            "unicode": "1f468-200d-1f468-200d-1f466"
                        },
                        {
                            "description": "Family (man,man,girl)",
                            "description_zh_cn": "家庭（男人，男人，女孩）",
                            "keywords": "family,father,man,male,men,girl,child,pride,lgbt,gay,家庭,父亲,男子,男性,男子,女孩,儿童,骄傲,lgbt,同性恋",
                            "unicode": "1f468-200d-1f468-200d-1f467"
                        },
                        {
                            "description": "Family (man,man,girl,boy)",
                            "description_zh_cn": "家庭（男人，男人，女孩，男孩）",
                            "keywords": "family,father,man,male,men,boy,girl,child,pride,lgbt,gay,家庭,父亲,男子,男性,男子,男孩,女孩,儿童,骄傲,同性恋,同性恋",
                            "unicode": "1f468-200d-1f468-200d-1f467-200d-1f466"
                        },
                        {
                            "description": "Family (man,man,boy,boy)",
                            "description_zh_cn": "家庭（男人，男人，男孩，男孩）",
                            "keywords": "family,father,man,male,men,boy,child,pride,lgbt,gay,家庭,父亲,男子,男性,男子,男孩,儿童,骄傲,同性恋,同性恋",
                            "unicode": "1f468-200d-1f468-200d-1f466-200d-1f466"
                        },
                        {
                            "description": "Family (man,man,girl,girl)",
                            "description_zh_cn": "家庭（男人，男人，女孩，女孩）",
                            "keywords": "family,father,man,male,men,girl,child,pride,lgbt,gay,家庭,父亲,男子,男性,男子,女孩,儿童,骄傲,lgbt,同性恋",
                            "unicode": "1f468-200d-1f468-200d-1f467-200d-1f467"
                        },
                        {
                            "description": "Family (woman,boy)",
                            "description_zh_cn": "家庭（女人，男孩）",
                            "keywords": "family,mother,woman,female,women,boy,child,家庭,母亲,女子,女性,妇女,男孩,儿童",
                            "unicode": "1f469-200d-1f466"
                        },
                        {
                            "description": "Family (woman,girl)",
                            "description_zh_cn": "家庭（女人，女孩）",
                            "keywords": "family,mother,woman,female,women,girl,child,家庭,母亲,女子,女性,妇女,女孩,儿童",
                            "unicode": "1f469-200d-1f467"
                        },
                        {
                            "description": "Family (woman,girl,boy)",
                            "description_zh_cn": "家庭（女人，女孩，男孩）",
                            "keywords": "family,mother,woman,female,male,girl,boy,child,家庭,母亲,女人,女性,男性,女孩,男孩,儿童",
                            "unicode": "1f469-200d-1f467-200d-1f466"
                        },
                        {
                            "description": "Family (woman,boy,boy)",
                            "description_zh_cn": "家庭（女人，男孩，男孩）",
                            "keywords": "family,mother,woman,female,women,boy,child,家庭,母亲,女子,女性,妇女,男孩,儿童",
                            "unicode": "1f469-200d-1f466-200d-1f466"
                        },
                        {
                            "description": "Family (woman,girl,girl)",
                            "description_zh_cn": "家庭（女人，女孩，女孩）",
                            "keywords": "family,mother,woman,female,women,girl,child,家庭,母亲,女子,女性,妇女,女孩,儿童",
                            "unicode": "1f469-200d-1f467-200d-1f467"
                        },
                        {
                            "description": "Family (man,boy)",
                            "description_zh_cn": "家庭（男人，男孩）",
                            "keywords": "family,father,man,male,men,boy,child,家庭,父亲,男子,男性,男子,男孩,儿童",
                            "unicode": "1f468-200d-1f466"
                        },
                        {
                            "description": "Family (man,girl)",
                            "description_zh_cn": "家庭（男、女）",
                            "keywords": "family,father,man,male,female,girl,child,家庭,父亲,男子,男性,女性,女孩,儿童",
                            "unicode": "1f468-200d-1f467"
                        },
                        {
                            "description": "Family (man,girl,boy)",
                            "description_zh_cn": "家庭（男人，女孩，男孩）",
                            "keywords": "family,father,man,male,men,boy,girl,child,家庭,父亲,男子,男性,男子,男孩,女孩,儿童",
                            "unicode": "1f468-200d-1f467-200d-1f466"
                        },
                        {
                            "description": "Family (man,boy,boy)",
                            "description_zh_cn": "家庭（男人，男孩，男孩）",
                            "keywords": "family,father,man,male,men,boy,child,家庭,父亲,男子,男性,男子,男孩,儿童",
                            "unicode": "1f468-200d-1f466-200d-1f466"
                        },
                        {
                            "description": "Family (man,girl,girl)",
                            "description_zh_cn": "家庭（男人，女孩，女孩）",
                            "keywords": "family,father,man,male,female,girl,child,家庭,父亲,男子,男性,女性,女孩,儿童",
                            "unicode": "1f468-200d-1f467-200d-1f467"
                        },
                        {
                            "description": "Woman’s clothes",
                            "description_zh_cn": "女人的衣服",
                            "keywords": "clothing,woman,衣服,女人",
                            "unicode": "1f45a"
                        },
                        {
                            "description": "T-shirt",
                            "description_zh_cn": "T恤",
                            "keywords": "clothing,shirt,tshirt,服装,衬衫,T恤",
                            "unicode": "1f455"
                        },
                        {
                            "description": "Lab coat",
                            "description_zh_cn": "实验工作服",
                            "keywords": "clothing,doctor,experiment,scientist,服装,医生,实验,科学家",
                            "unicode": "1f97c"
                        },
                        {
                            "description": "Safety vest",
                            "description_zh_cn": "安全背心",
                            "keywords": "emergency,safety,vest,紧急情况,安全,背心",
                            "unicode": "1f9ba"
                        },
                        {
                            "description": "Coat",
                            "description_zh_cn": "外套",
                            "keywords": "clothing,coat,jacket,服装,外套,夹克",
                            "unicode": "1f9e5"
                        },
                        {
                            "description": "Jeans",
                            "description_zh_cn": "牛仔裤",
                            "keywords": "clothing,jeans,pants,trousers,服装、牛仔裤、裤子、裤子",
                            "unicode": "1f456"
                        },
                        {
                            "description": "Necktie",
                            "description_zh_cn": "领带",
                            "keywords": "clothing,necktie,衣服,领带",
                            "unicode": "1f454"
                        },
                        {
                            "description": "Dress",
                            "description_zh_cn": "裙子",
                            "keywords": "clothing,dress,服装、服饰",
                            "unicode": "1f457"
                        },
                        {
                            "description": "Kimono",
                            "description_zh_cn": "和服",
                            "keywords": "clothing,kimono,服装、和服",
                            "unicode": "1f458"
                        },
                        {
                            "description": "Sari",
                            "description_zh_cn": "纱丽",
                            "keywords": "clothing,dress,sari,服装,连衣裙,纱丽",
                            "unicode": "1f97b"
                        },
                        {
                            "description": "One-piece",
                            "description_zh_cn": "一块",
                            "keywords": "clothing,bathing suit,swimsuit,swim,服装,泳衣,泳衣,游泳",
                            "unicode": "1fa71"
                        },
                        {
                            "description": "Bikini",
                            "description_zh_cn": "比基尼",
                            "keywords": "bikini,clothing,swim,比基尼,衣服,游泳",
                            "unicode": "1f459"
                        },
                        {
                            "description": "Briefs",
                            "description_zh_cn": "内裤",
                            "keywords": "clothing,bathing suit,swimsuit,swim,briefs,underwear,服装,泳衣,泳衣,游泳,内裤,内衣",
                            "unicode": "1fa72"
                        },
                        {
                            "description": "Shorts",
                            "description_zh_cn": "短裤",
                            "keywords": "clothing,bathing suit,swimsuit,swim,shorts,underwear,服装、泳衣、泳衣、游泳、短裤、内衣",
                            "unicode": "1fa73"
                        },
                        {
                            "description": "Lipstick",
                            "description_zh_cn": "口红",
                            "keywords": "cosmetics,lipstick,makeup,化妆品、口红、彩妆",
                            "unicode": "1f484"
                        },
                        {
                            "description": "Kiss mark",
                            "description_zh_cn": "吻痕",
                            "keywords": "heart,kiss,lips,mark,romance,心,吻,嘴唇,马克,浪漫",
                            "unicode": "1f48b"
                        },
                        {
                            "description": "Footprints",
                            "description_zh_cn": "脚印",
                            "keywords": "body,clothing,footprint,print,身体、服装、足迹、打印",
                            "unicode": "1f463"
                        },
                        {
                            "description": "Socks",
                            "description_zh_cn": "袜子",
                            "keywords": "clothing,socks,pair of,衣服,袜子,一双",
                            "unicode": "1f9e6"
                        },
                        {
                            "description": "Thong sandal",
                            "description_zh_cn": "夹趾凉鞋",
                            "keywords": "beach,sandals,thongs,zōri,沙滩,凉鞋,丁字裤,zōri",
                            "unicode": "1fa74"
                        },
                        {
                            "description": "High-heeled shoe",
                            "description_zh_cn": "高跟鞋",
                            "keywords": "clothing,heel,shoe,woman,服装,鞋跟,鞋,女人",
                            "unicode": "1f460"
                        },
                        {
                            "description": "Woman’s sandal",
                            "description_zh_cn": "女士凉鞋",
                            "keywords": "clothing,sandal,shoe,woman,服装,凉鞋,鞋,女人",
                            "unicode": "1f461"
                        },
                        {
                            "description": "Woman’s boots",
                            "description_zh_cn": "女靴",
                            "keywords": "boot,clothing,shoe,woman,引导,服装,鞋,女人",
                            "unicode": "1f462"
                        },
                        {
                            "description": "Woman’s flat shoe",
                            "description_zh_cn": "女士平底鞋",
                            "keywords": "clothing,ballet flat,slip-on,slipper,服装,芭蕾平底鞋,套穿,拖鞋",
                            "unicode": "1f97f"
                        },
                        {
                            "description": "Man’s shoe",
                            "description_zh_cn": "男鞋",
                            "keywords": "clothing,man,shoe,衣服,男人,鞋",
                            "unicode": "1f45e"
                        },
                        {
                            "description": "Athletic shoe",
                            "description_zh_cn": "运动鞋",
                            "keywords": "athletic,clothing,shoe,sneaker,运动,服装,鞋,运动鞋",
                            "unicode": "1f45f"
                        },
                        {
                            "description": "Ballet shoes",
                            "description_zh_cn": "芭蕾舞鞋",
                            "keywords": "clothing,shoes,ballet,dance,服装、鞋子、芭蕾、舞蹈",
                            "unicode": "1fa70"
                        },
                        {
                            "description": "Hiking boot",
                            "description_zh_cn": "登山靴",
                            "keywords": "clothing,backpacking,boot,camping,hiking,服装、背包、靴子、露营、远足",
                            "unicode": "1f97e"
                        },
                        {
                            "description": "Billed cap",
                            "description_zh_cn": "计费上限",
                            "keywords": "clothing,baseball,cap,hat,服装、棒球、帽子、帽子",
                            "unicode": "1f9e2"
                        },
                        {
                            "description": "Woman’s hat",
                            "description_zh_cn": "女人的帽子",
                            "keywords": "clothing,hat,woman,衣服,帽子,女人",
                            "unicode": "1f452"
                        },
                        {
                            "description": "Top hat",
                            "description_zh_cn": "礼帽",
                            "keywords": "activity,clothing,entertainment,hat,top,tophat,活动,服装,娱乐,帽子,顶部,礼帽",
                            "unicode": "1f3a9"
                        },
                        {
                            "description": "Graduation cap",
                            "description_zh_cn": "毕业帽",
                            "keywords": "activity,cap,celebration,clothing,graduation,hat,活动,帽,庆祝活动,服装,毕业,帽子",
                            "unicode": "1f393"
                        },
                        {
                            "description": "Crown",
                            "description_zh_cn": "王冠",
                            "keywords": "clothing,crown,king,queen,服装,皇冠,国王,王后",
                            "unicode": "1f451"
                        },
                        {
                            "description": "Helmet with white cross",
                            "description_zh_cn": "带白色十字架的头盔",
                            "keywords": "aid,cross,face,hat,helmet,援助,交叉,脸,帽子,头盔",
                            "unicode": "26d1"
                        },
                        {
                            "description": "Military helmet",
                            "description_zh_cn": "军用头盔",
                            "keywords": "army,helmet,military,soldier,warrior,军队,头盔,军事,士兵,战士",
                            "unicode": "1fa96"
                        },
                        {
                            "description": "School satchel",
                            "description_zh_cn": "书包",
                            "keywords": "activity,bag,satchel,school,活动,包,书包,学校",
                            "unicode": "1f392"
                        },
                        {
                            "description": "Pouch",
                            "description_zh_cn": "小袋",
                            "keywords": "bag,clothing,pouch,包,衣服,小袋",
                            "unicode": "1f45d"
                        },
                        {
                            "description": "Purse",
                            "description_zh_cn": "钱包",
                            "keywords": "clothing,coin,purse,衣服,硬币,钱包",
                            "unicode": "1f45b"
                        },
                        {
                            "description": "Handbag",
                            "description_zh_cn": "手提包",
                            "keywords": "bag,clothing,handbag,包,服装,手提包",
                            "unicode": "1f45c"
                        },
                        {
                            "description": "Briefcase",
                            "description_zh_cn": "公文包",
                            "keywords": "briefcase,公文包",
                            "unicode": "1f4bc"
                        },
                        {
                            "description": "Eyeglasses",
                            "description_zh_cn": "眼镜",
                            "keywords": "clothing,eye,eyeglasses,eyewear,glasses,服装,眼睛,眼镜,眼镜,眼镜",
                            "unicode": "1f453"
                        },
                        {
                            "description": "Dark sunglasses",
                            "description_zh_cn": "深色太阳镜",
                            "keywords": "dark,eye,eyewear,glasses,sunglasses,黑暗,眼睛,眼镜,眼镜,太阳镜",
                            "unicode": "1f576"
                        },
                        {
                            "description": "Goggles",
                            "description_zh_cn": "风镜",
                            "keywords": "clothing,eye protection,swimming,welding,服装、护眼、游泳、焊接",
                            "unicode": "1f97d"
                        },
                        {
                            "description": "Scarf",
                            "description_zh_cn": "围巾",
                            "keywords": "clothing,scarf,neck,衣服,围巾,脖子",
                            "unicode": "1f9e3"
                        },
                        {
                            "description": "Gloves",
                            "description_zh_cn": "手套",
                            "keywords": "clothing,gloves,hands,衣服,手套,手",
                            "unicode": "1f9e4"
                        },
                        {
                            "description": "Ring",
                            "description_zh_cn": "戒指",
                            "keywords": "diamond,ring,romance,钻石,戒指,浪漫",
                            "unicode": "1f48d"
                        },
                        {
                            "description": "Closed umbrella",
                            "description_zh_cn": "遮阳伞",
                            "keywords": "clothing,rain,umbrella,weather,衣服,雨,伞,天气",
                            "unicode": "1f302"
                        },
                        {
                            "description": "Umbrella",
                            "description_zh_cn": "雨伞",
                            "keywords": "clothing,rain,umbrella,weather,衣服,雨,伞,天气",
                            "unicode": "2602"
                        },
                        {
                            "description": "(light skin tone)",
                            "description_zh_cn": "（浅肤色）",
                            "keywords": "emoji modifier,fitzpatrick,skin,tone,表情符号修饰符,菲茨帕特里克,皮肤,色调",
                            "unicode": "1f3fb"
                        },
                        {
                            "description": "(medium light skin tone)",
                            "description_zh_cn": "（中浅肤色）",
                            "keywords": "emoji modifier,fitzpatrick,skin,tone,表情符号修饰符,菲茨帕特里克,皮肤,色调",
                            "unicode": "1f3fc"
                        },
                        {
                            "description": "(medium skin tone)",
                            "description_zh_cn": "（中等肤色）",
                            "keywords": "emoji modifier,fitzpatrick,skin,tone,表情符号修饰符,菲茨帕特里克,皮肤,色调",
                            "unicode": "1f3fd"
                        },
                        {
                            "description": "(medium dark skin tone)",
                            "description_zh_cn": "（中深肤色）",
                            "keywords": "emoji modifier,fitzpatrick,skin,tone,表情符号修饰符,菲茨帕特里克,皮肤,色调",
                            "unicode": "1f3fe"
                        },
                        {
                            "description": "(dark skin tone)",
                            "description_zh_cn": "（深色肤色）",
                            "keywords": "emoji modifier,fitzpatrick,skin,tone,表情符号修饰符,菲茨帕特里克,皮肤,色调",
                            "unicode": "1f3ff"
                        },
                        {
                            "description": "Red hair",
                            "description_zh_cn": "红发",
                            "keywords": ",",
                            "unicode": "1f9b0"
                        },
                        {
                            "description": "Curly hair",
                            "description_zh_cn": "卷发",
                            "keywords": ",",
                            "unicode": "1f9b1"
                        },
                        {
                            "description": "Bald",
                            "description_zh_cn": "秃",
                            "keywords": ",",
                            "unicode": "1f9b2"
                        },
                        {
                            "description": "White hair",
                            "description_zh_cn": "白色的头发",
                            "keywords": ",",
                            "unicode": "1f9b3"
                        },
                        {
                            "description": "Family (man,woman,boy)",
                            "description_zh_cn": "家庭（男人，女人，男孩）",
                            "keywords": "family,father,mother,man,woman,male,female,men,women,boy,child,家庭,父亲,母亲,男子,女子,男,女,男子,妇女,男孩,儿童",
                            "unicode": "1f468-200d-1f469-200d-1f466"
                        }
                    ],
                    "title": "Smileys & people",
                    "title_zh_cn": "表情和人物"
                },
                {
                    "id": "nature",
                    "items": [
                        {
                            "description": "Dog face",
                            "description_zh_cn": "狗脸",
                            "keywords": "dog,face,pet,狗,脸,宠物",
                            "unicode": "1f436"
                        },
                        {
                            "description": "Cat face",
                            "description_zh_cn": "猫脸",
                            "keywords": "cat,face,pet,猫,脸,宠物",
                            "unicode": "1f431"
                        },
                        {
                            "description": "Mouse face",
                            "description_zh_cn": "鼠标脸",
                            "keywords": "face,mouse,脸,鼠标",
                            "unicode": "1f42d"
                        },
                        {
                            "description": "Hamster face",
                            "description_zh_cn": "仓鼠脸",
                            "keywords": "face,hamster,pet,脸,仓鼠,宠物",
                            "unicode": "1f439"
                        },
                        {
                            "description": "Rabbit face",
                            "description_zh_cn": "兔脸",
                            "keywords": "bunny,face,pet,rabbit,兔子,脸,宠物,兔子",
                            "unicode": "1f430"
                        },
                        {
                            "description": "Bear face",
                            "description_zh_cn": "熊脸",
                            "keywords": "bear,face,熊,脸",
                            "unicode": "1f43b"
                        },
                        {
                            "description": "Teddy bear",
                            "description_zh_cn": "泰迪熊",
                            "keywords": "plaything,plush,stuffed,toy,玩具、毛绒、填充物、玩具",
                            "unicode": "1f9f8"
                        },
                        {
                            "description": "Panda face",
                            "description_zh_cn": "熊猫脸",
                            "keywords": "face,panda,脸,熊猫",
                            "unicode": "1f43c"
                        },
                        {
                            "description": "Polar bear",
                            "description_zh_cn": "北极熊",
                            "keywords": "face,arctic,bear,white,脸,北极,熊,白",
                            "unicode": "1f43b-200d-2744-fe0f"
                        },
                        {
                            "description": "Koala",
                            "description_zh_cn": "考拉",
                            "keywords": "bear,koala,熊,考拉",
                            "unicode": "1f428"
                        },
                        {
                            "description": "Tiger face",
                            "description_zh_cn": "虎脸",
                            "keywords": "face,tiger,脸,老虎",
                            "unicode": "1f42f"
                        },
                        {
                            "description": "Lion face",
                            "description_zh_cn": "狮子脸",
                            "keywords": "face,leo,lion,zodiac,脸,狮子座,狮子,十二生肖",
                            "unicode": "1f981"
                        },
                        {
                            "description": "Cow face",
                            "description_zh_cn": "牛脸",
                            "keywords": "cow,face,牛,脸",
                            "unicode": "1f42e"
                        },
                        {
                            "description": "Pig face",
                            "description_zh_cn": "猪脸",
                            "keywords": "face,pig,脸,猪",
                            "unicode": "1f437"
                        },
                        {
                            "description": "Pig nose",
                            "description_zh_cn": "猪鼻子",
                            "keywords": "face,nose,pig,脸,鼻子,猪",
                            "unicode": "1f43d"
                        },
                        {
                            "description": "Frog face",
                            "description_zh_cn": "青蛙脸",
                            "keywords": "face,frog,脸,青蛙",
                            "unicode": "1f438"
                        },
                        {
                            "description": "Monkey face",
                            "description_zh_cn": "猴脸",
                            "keywords": "face,monkey,脸,猴子",
                            "unicode": "1f435"
                        },
                        {
                            "description": "See-no-evil monkey",
                            "description_zh_cn": "无恶不作的猴子",
                            "keywords": "evil,face,forbidden,gesture,monkey,no,not,prohibited,see,邪恶,脸,禁止,手势,猴子,不,不,禁止,见",
                            "unicode": "1f648"
                        },
                        {
                            "description": "Hear-no-evil monkey",
                            "description_zh_cn": "听到没有邪恶的猴子",
                            "keywords": "evil,face,forbidden,gesture,hear,monkey,no,not,prohibited,邪恶,脸,禁止,手势,听到,猴子,不,不,禁止",
                            "unicode": "1f649"
                        },
                        {
                            "description": "Speak-no-evil monkey",
                            "description_zh_cn": "不说话的猴子",
                            "keywords": "evil,face,forbidden,gesture,monkey,no,not,prohibited,speak,邪恶,脸,禁止,手势,猴子,不,不,禁止,说话",
                            "unicode": "1f64a"
                        },
                        {
                            "description": "Monkey",
                            "description_zh_cn": "猴",
                            "keywords": "monkey,猴",
                            "unicode": "1f412"
                        },
                        {
                            "description": "Gorilla",
                            "description_zh_cn": "大猩猩",
                            "keywords": "gorilla,大猩猩",
                            "unicode": "1f98d"
                        },
                        {
                            "description": "Orangutan",
                            "description_zh_cn": "猩猩",
                            "keywords": "orangutan,ape,猩猩,猿",
                            "unicode": "1f9a7"
                        },
                        {
                            "description": "Chicken",
                            "description_zh_cn": "鸡",
                            "keywords": "chicken,鸡",
                            "unicode": "1f414"
                        },
                        {
                            "description": "Penguin",
                            "description_zh_cn": "企鹅",
                            "keywords": "penguin,企鹅",
                            "unicode": "1f427"
                        },
                        {
                            "description": "Bird",
                            "description_zh_cn": "鸟",
                            "keywords": "bird,鸟",
                            "unicode": "1f426"
                        },
                        {
                            "description": "Baby chick",
                            "description_zh_cn": "宝贝小鸡",
                            "keywords": "baby,chick,宝贝,小妞",
                            "unicode": "1f424"
                        },
                        {
                            "description": "Hatching chick",
                            "description_zh_cn": "孵化小鸡",
                            "keywords": "baby,chick,hatching,宝贝,小鸡,孵化",
                            "unicode": "1f423"
                        },
                        {
                            "description": "Front-facing baby chick",
                            "description_zh_cn": "正面的小鸡",
                            "keywords": "baby,chick,宝贝,小妞",
                            "unicode": "1f425"
                        },
                        {
                            "description": "Wolf face",
                            "description_zh_cn": "狼脸",
                            "keywords": "face,wolf,脸,狼",
                            "unicode": "1f43a"
                        },
                        {
                            "description": "Fox face",
                            "description_zh_cn": "狐狸脸",
                            "keywords": "face,fox,脸,狐狸",
                            "unicode": "1f98a"
                        },
                        {
                            "description": "Raccoon",
                            "description_zh_cn": "狸",
                            "keywords": "face,raccoon,curious,sly,脸,浣熊,好奇,狡猾",
                            "unicode": "1f99d"
                        },
                        {
                            "description": "Boar",
                            "description_zh_cn": "公猪",
                            "keywords": "boar,pig,公猪,猪",
                            "unicode": "1f417"
                        },
                        {
                            "description": "Horse face",
                            "description_zh_cn": "马脸",
                            "keywords": "face,horse,脸,马",
                            "unicode": "1f434"
                        },
                        {
                            "description": "Zebra",
                            "description_zh_cn": "斑马",
                            "keywords": "zebra,face,斑马,脸",
                            "unicode": "1f993"
                        },
                        {
                            "description": "Giraffe",
                            "description_zh_cn": "长颈鹿",
                            "keywords": "giraffe,face,长颈鹿,脸",
                            "unicode": "1f992"
                        },
                        {
                            "description": "Deer",
                            "description_zh_cn": "鹿",
                            "keywords": "deer,鹿",
                            "unicode": "1f98c"
                        },
                        {
                            "description": "Kangaroo",
                            "description_zh_cn": "袋鼠",
                            "keywords": "australia,joey,jump,marsupial,澳大利亚,乔伊,跳跃,有袋动物",
                            "unicode": "1f998"
                        },
                        {
                            "description": "Sloth",
                            "description_zh_cn": "树懒",
                            "keywords": "sloth,lazy,slow,懒惰,懒惰,缓慢",
                            "unicode": "1f9a5"
                        },
                        {
                            "description": "Otter",
                            "description_zh_cn": "獭",
                            "keywords": "otter,fishing,playful,水獭,钓鱼,俏皮",
                            "unicode": "1f9a6"
                        },
                        {
                            "description": "Beaver",
                            "description_zh_cn": "海狸",
                            "keywords": "beaver,dam,海狸,水坝",
                            "unicode": "1f9ab"
                        },
                        {
                            "description": "Unicorn face",
                            "description_zh_cn": "独角兽脸",
                            "keywords": "face,unicorn,脸,独角兽",
                            "unicode": "1f984"
                        },
                        {
                            "description": "Honeybee",
                            "description_zh_cn": "蜜蜂",
                            "keywords": "bee,honeybee,insect,蜜蜂,蜜蜂,昆虫",
                            "unicode": "1f41d"
                        },
                        {
                            "description": "Bug",
                            "description_zh_cn": "漏洞",
                            "keywords": "bug,insect,虫子,昆虫",
                            "unicode": "1f41b"
                        },
                        {
                            "description": "Butterfly",
                            "description_zh_cn": "蝴蝶",
                            "keywords": "butterfly,insect,pretty,蝴蝶,昆虫,漂亮",
                            "unicode": "1f98b"
                        },
                        {
                            "description": "Snail",
                            "description_zh_cn": "蜗牛",
                            "keywords": "snail,蜗牛",
                            "unicode": "1f40c"
                        },
                        {
                            "description": "Beetle",
                            "description_zh_cn": "甲虫",
                            "keywords": "beetle,bug,insect,甲虫,臭虫,昆虫",
                            "unicode": "1fab2"
                        },
                        {
                            "description": "Lady beetle",
                            "description_zh_cn": "瓢虫",
                            "keywords": "beetle,insect,lady beetle,ladybird,ladybug,甲虫,昆虫,瓢虫,瓢虫,瓢虫",
                            "unicode": "1f41e"
                        },
                        {
                            "description": "Ant",
                            "description_zh_cn": "蚂蚁",
                            "keywords": "ant,insect,蚂蚁,昆虫",
                            "unicode": "1f41c"
                        },
                        {
                            "description": "Cricket",
                            "description_zh_cn": "蟋蟀",
                            "keywords": "cricket,orthoptera,insect,板球,直翅目,昆虫",
                            "unicode": "1f997"
                        },
                        {
                            "description": "Cockroach",
                            "description_zh_cn": "蟑螂",
                            "keywords": "cockroach,insect,pest,roach,蟑螂,昆虫,害虫,蟑螂",
                            "unicode": "1fab3"
                        },
                        {
                            "description": "Spider",
                            "description_zh_cn": "蜘蛛",
                            "keywords": "insect,spider,昆虫,蜘蛛",
                            "unicode": "1f577"
                        },
                        {
                            "description": "Spider web",
                            "description_zh_cn": "蜘蛛网",
                            "keywords": "spider,web,蜘蛛网",
                            "unicode": "1f578"
                        },
                        {
                            "description": "Scorpion",
                            "description_zh_cn": "蝎",
                            "keywords": "scorpio,scorpion,scorpius,zodiac,天蝎座,蝎子,天蝎座,黄道十二宫",
                            "unicode": "1f982"
                        },
                        {
                            "description": "Mosquito",
                            "description_zh_cn": "蚊子",
                            "keywords": "disease,fever,insect,malaria,virus,疾病、发烧、昆虫、疟疾、病毒",
                            "unicode": "1f99f"
                        },
                        {
                            "description": "Fly",
                            "description_zh_cn": "飞",
                            "keywords": "pest,insect,fly,maggot,害虫、昆虫、苍蝇、蛆",
                            "unicode": "1fab0"
                        },
                        {
                            "description": "Worm",
                            "description_zh_cn": "虫",
                            "keywords": "annelid,earthworm,parasite,worm,环节动物,蚯蚓,寄生虫,蠕虫",
                            "unicode": "1fab1"
                        },
                        {
                            "description": "Microbe",
                            "description_zh_cn": "微生物",
                            "keywords": "amoeba,bacteria,virus,变形虫、细菌、病毒",
                            "unicode": "1f9a0"
                        },
                        {
                            "description": "Turtle",
                            "description_zh_cn": "龟",
                            "keywords": "turtle,龟",
                            "unicode": "1f422"
                        },
                        {
                            "description": "Snake",
                            "description_zh_cn": "蛇",
                            "keywords": "bearer,ophiuchus,serpent,snake,zodiac,python,承载者,蛇夫座,蛇,蛇,十二生肖",
                            "unicode": "1f40d"
                        },
                        {
                            "description": "Lizard",
                            "description_zh_cn": "蜥蜴",
                            "keywords": "lizard,reptile,蜥蜴,爬行动物",
                            "unicode": "1f98e"
                        },
                        {
                            "description": "Octopus",
                            "description_zh_cn": "章鱼",
                            "keywords": "octopus,章鱼",
                            "unicode": "1f419"
                        },
                        {
                            "description": "Squid",
                            "description_zh_cn": "乌贼",
                            "keywords": "molusc,squid,软体动物、鱿鱼",
                            "unicode": "1f991"
                        },
                        {
                            "description": "Lobster",
                            "description_zh_cn": "龙虾",
                            "keywords": "bisque,claws,seafood,浓汤,爪子,海鲜",
                            "unicode": "1f99e"
                        },
                        {
                            "description": "Crab",
                            "description_zh_cn": "螃蟹",
                            "keywords": "cancer,crab,zodiac,癌症,蟹,生肖",
                            "unicode": "1f980"
                        },
                        {
                            "description": "Shrimp",
                            "description_zh_cn": "虾",
                            "keywords": "shellfish,shrimp,small,贝类,虾,小",
                            "unicode": "1f990"
                        },
                        {
                            "description": "Oyster",
                            "description_zh_cn": "牡蛎",
                            "keywords": "oyster,pearl,diving,牡蛎,珍珠,潜水",
                            "unicode": "1f9aa"
                        },
                        {
                            "description": "Tropical fish",
                            "description_zh_cn": "热带鱼",
                            "keywords": "fish,tropical,鱼,热带",
                            "unicode": "1f420"
                        },
                        {
                            "description": "Fish",
                            "description_zh_cn": "鱼",
                            "keywords": "fish,pisces,zodiac,鱼,双鱼,生肖",
                            "unicode": "1f41f"
                        },
                        {
                            "description": "Blowfish",
                            "description_zh_cn": "河豚",
                            "keywords": "blowfish,fish,河豚,鱼",
                            "unicode": "1f421"
                        },
                        {
                            "description": "Dolphin",
                            "description_zh_cn": "海豚",
                            "keywords": "dolphin,flipper,海豚,鳍状肢",
                            "unicode": "1f42c"
                        },
                        {
                            "description": "Shark",
                            "description_zh_cn": "鲨鱼",
                            "keywords": "fish,shark,鱼,鲨鱼",
                            "unicode": "1f988"
                        },
                        {
                            "description": "Seal",
                            "description_zh_cn": "海豹",
                            "keywords": "seal,sea lion,海豹,海狮",
                            "unicode": "1f9ad"
                        },
                        {
                            "description": "Spouting whale",
                            "description_zh_cn": "喷水鲸",
                            "keywords": "face,spouting,whale,脸,喷水,鲸鱼",
                            "unicode": "1f433"
                        },
                        {
                            "description": "Whale",
                            "description_zh_cn": "鲸",
                            "keywords": "whale,鲸",
                            "unicode": "1f40b"
                        },
                        {
                            "description": "Crocodile",
                            "description_zh_cn": "鳄鱼",
                            "keywords": "crocodile,鳄鱼",
                            "unicode": "1f40a"
                        },
                        {
                            "description": "Leopard",
                            "description_zh_cn": "豹",
                            "keywords": "leopard,豹",
                            "unicode": "1f406"
                        },
                        {
                            "description": "Tiger",
                            "description_zh_cn": "老虎",
                            "keywords": "tiger,老虎",
                            "unicode": "1f405"
                        },
                        {
                            "description": "Water buffalo",
                            "description_zh_cn": "水牛",
                            "keywords": "buffalo,water,水牛,水",
                            "unicode": "1f403"
                        },
                        {
                            "description": "Ox",
                            "description_zh_cn": "牛",
                            "keywords": "bull,ox,taurus,zodiac,公牛、牛、金牛、生肖",
                            "unicode": "1f402"
                        },
                        {
                            "description": "Cow",
                            "description_zh_cn": "奶牛",
                            "keywords": "cow,奶牛",
                            "unicode": "1f404"
                        },
                        {
                            "description": "Bison",
                            "description_zh_cn": "野牛",
                            "keywords": "bison,buffalo,herd,wisent,野牛,水牛,牛群,明智",
                            "unicode": "1f9ac"
                        },
                        {
                            "description": "Dromedary camel",
                            "description_zh_cn": "单峰骆驼",
                            "keywords": "camel,dromedary,hump,骆驼,单峰驼,驼峰",
                            "unicode": "1f42a"
                        },
                        {
                            "description": "Bactrian camel",
                            "description_zh_cn": "双峰驼",
                            "keywords": "two-hump camel,bactrian,camel,hump,双驼峰骆驼,双峰驼,骆驼,驼峰",
                            "unicode": "1f42b"
                        },
                        {
                            "description": "Llama",
                            "description_zh_cn": "骆驼",
                            "keywords": "alpaca,guanaco,vicuña,wool,羊驼毛、原驼、骆马毛、羊毛",
                            "unicode": "1f999"
                        },
                        {
                            "description": "Elephant",
                            "description_zh_cn": "大象",
                            "keywords": "elephant,大象",
                            "unicode": "1f418"
                        },
                        {
                            "description": "Rhinoceros",
                            "description_zh_cn": "犀牛",
                            "keywords": "rhinoceros,犀牛",
                            "unicode": "1f98f"
                        },
                        {
                            "description": "Hippopotamus",
                            "description_zh_cn": "河马",
                            "keywords": "hippo,河马",
                            "unicode": "1f99b"
                        },
                        {
                            "description": "Mammoth",
                            "description_zh_cn": "长毛象",
                            "keywords": "extinct,large,mammoth,tusk,woolly,灭绝,大,猛犸象,象牙,毛茸茸的",
                            "unicode": "1f9a3"
                        },
                        {
                            "description": "Goat",
                            "description_zh_cn": "山羊",
                            "keywords": "capricorn,goat,zodiac,摩羯座,山羊,生肖",
                            "unicode": "1f410"
                        },
                        {
                            "description": "Ram",
                            "description_zh_cn": "内存",
                            "keywords": "aries,ram,sheep,zodiac,白羊座、公羊、羊、黄道十二宫",
                            "unicode": "1f40f"
                        },
                        {
                            "description": "Sheep",
                            "description_zh_cn": "羊",
                            "keywords": "ewe,sheep,母羊,绵羊",
                            "unicode": "1f411"
                        },
                        {
                            "description": "Horse",
                            "description_zh_cn": "马",
                            "keywords": "horse,racehorse,racing,马,赛马,赛马",
                            "unicode": "1f40e"
                        },
                        {
                            "description": "Pig",
                            "description_zh_cn": "猪",
                            "keywords": "pig,sow,猪,母猪",
                            "unicode": "1f416"
                        },
                        {
                            "description": "Bat",
                            "description_zh_cn": "蝙蝠",
                            "keywords": "bat,vampire,蝙蝠,吸血鬼",
                            "unicode": "1f987"
                        },
                        {
                            "description": "Rooster",
                            "description_zh_cn": "公鸡",
                            "keywords": "rooster,公鸡",
                            "unicode": "1f413"
                        },
                        {
                            "description": "Turkey (bird)",
                            "description_zh_cn": "火鸡（鸟）",
                            "keywords": "turkey,bird,火鸡,鸟",
                            "unicode": "1f983"
                        },
                        {
                            "description": "Dove of peace",
                            "description_zh_cn": "和平鸽",
                            "keywords": "bird,dove,fly,peace,鸟,鸽子,飞,和平",
                            "unicode": "1f54a"
                        },
                        {
                            "description": "Eagle",
                            "description_zh_cn": "鹰",
                            "keywords": "bird,eagle,鸟,鹰",
                            "unicode": "1f985"
                        },
                        {
                            "description": "Duck",
                            "description_zh_cn": "鸭子",
                            "keywords": "bird,duck,鸟,鸭",
                            "unicode": "1f986"
                        },
                        {
                            "description": "Swan",
                            "description_zh_cn": "天鹅",
                            "keywords": "bird,cygnet,ugly duckling,鸟,小天鹅,丑小鸭",
                            "unicode": "1f9a2"
                        },
                        {
                            "description": "Owl",
                            "description_zh_cn": "猫头鹰",
                            "keywords": "bird,owl,wise,鸟,猫头鹰,明智",
                            "unicode": "1f989"
                        },
                        {
                            "description": "Flamingo",
                            "description_zh_cn": "火烈鸟",
                            "keywords": "flamingo,tropical,flamboyant,火烈鸟,热带,华丽",
                            "unicode": "1f9a9"
                        },
                        {
                            "description": "Peacock",
                            "description_zh_cn": "孔雀",
                            "keywords": "bird,ostentatious,peahen,proud,鸟,炫耀,孔雀,骄傲",
                            "unicode": "1f99a"
                        },
                        {
                            "description": "Parrot",
                            "description_zh_cn": "鹦鹉",
                            "keywords": "bird,pirate,鸟,海盗",
                            "unicode": "1f99c"
                        },
                        {
                            "description": "Dodo",
                            "description_zh_cn": "渡渡鸟",
                            "keywords": "bird,extinct,obsolete,鸟,灭绝,过时",
                            "unicode": "1f9a4"
                        },
                        {
                            "description": "Feather",
                            "description_zh_cn": "羽毛",
                            "keywords": "bird,feather,light,plumage,鸟,羽毛,光,羽毛",
                            "unicode": "1fab6"
                        },
                        {
                            "description": "Dog",
                            "description_zh_cn": "狗",
                            "keywords": "dog,pet,狗,宠物",
                            "unicode": "1f415"
                        },
                        {
                            "description": "Guide dog",
                            "description_zh_cn": "导盲犬",
                            "keywords": "accessibility,blind,dog,guide,无障碍、盲人、狗、指南",
                            "unicode": "1f9ae"
                        },
                        {
                            "description": "Service dog",
                            "description_zh_cn": "服务犬",
                            "keywords": "accessibility,assistance,dog,service,可访问性、援助、狗、服务",
                            "unicode": "1f415-200d-1f9ba"
                        },
                        {
                            "description": "Poodle",
                            "description_zh_cn": "贵宾犬",
                            "keywords": "dog,poodle,狗,贵宾犬",
                            "unicode": "1f429"
                        },
                        {
                            "description": "Cat",
                            "description_zh_cn": "猫",
                            "keywords": "cat,pet,猫,宠物",
                            "unicode": "1f408"
                        },
                        {
                            "description": "Black cat",
                            "description_zh_cn": "黑猫",
                            "keywords": "black,cat,pet,unlucky,halloween,黑色,猫,宠物,倒霉,万圣节",
                            "unicode": "1f408-200d-2b1b"
                        },
                        {
                            "description": "Rabbit",
                            "description_zh_cn": "兔子",
                            "keywords": "bunny,pet,rabbit,兔子,宠物,兔子",
                            "unicode": "1f407"
                        },
                        {
                            "description": "Rat",
                            "description_zh_cn": "鼠",
                            "keywords": "rat,鼠",
                            "unicode": "1f400"
                        },
                        {
                            "description": "Mouse",
                            "description_zh_cn": "鼠",
                            "keywords": "mouse,鼠",
                            "unicode": "1f401"
                        },
                        {
                            "description": "Chipmunk",
                            "description_zh_cn": "花栗鼠",
                            "keywords": "chipmunk,花栗鼠",
                            "unicode": "1f43f"
                        },
                        {
                            "description": "Skunk",
                            "description_zh_cn": "臭鼬",
                            "keywords": "skunk,stink,smelly,臭鼬,臭,臭",
                            "unicode": "1f9a8"
                        },
                        {
                            "description": "Badger",
                            "description_zh_cn": "獾",
                            "keywords": "honey badger,pester,蜜獾,纠缠",
                            "unicode": "1f9a1"
                        },
                        {
                            "description": "Hedgehog",
                            "description_zh_cn": "刺猬",
                            "keywords": "hedgehog,face,刺猬,脸",
                            "unicode": "1f994"
                        },
                        {
                            "description": "Paw prints",
                            "description_zh_cn": "掌印",
                            "keywords": "feet,paw,print,脚,爪子,打印",
                            "unicode": "1f43e"
                        },
                        {
                            "description": "Dragon",
                            "description_zh_cn": "龙",
                            "keywords": "dragon,fairy tale,龙,童话",
                            "unicode": "1f409"
                        },
                        {
                            "description": "Dragon face",
                            "description_zh_cn": "龙脸",
                            "keywords": "dragon,face,fairy tale,龙,脸,童话",
                            "unicode": "1f432"
                        },
                        {
                            "description": "Sauropod",
                            "description_zh_cn": "蜥脚类动物",
                            "keywords": "brachiosaurus,brontosaurus,diplodocus,dinosaur,腕龙,雷龙,梁龙,恐龙",
                            "unicode": "1f995"
                        },
                        {
                            "description": "T-Rex",
                            "description_zh_cn": "霸王龙",
                            "keywords": "tyrannosaurus rex,trex,dinosaur,霸王龙,特雷克斯,恐龙",
                            "unicode": "1f996"
                        },
                        {
                            "description": "Cactus",
                            "description_zh_cn": "仙人掌",
                            "keywords": "cactus,plant,仙人掌,植物",
                            "unicode": "1f335"
                        },
                        {
                            "description": "Christmas tree",
                            "description_zh_cn": "圣诞树",
                            "keywords": "activity,celebration,christmas,entertainment,tree,活动,庆祝活动,圣诞节,娱乐,树",
                            "unicode": "1f384"
                        },
                        {
                            "description": "Evergreen tree",
                            "description_zh_cn": "常青树",
                            "keywords": "evergreen,plant,tree,常绿,植物,树",
                            "unicode": "1f332"
                        },
                        {
                            "description": "Deciduous tree",
                            "description_zh_cn": "落叶乔木",
                            "keywords": "deciduous,plant,shedding,tree,落叶,植物,脱落,树",
                            "unicode": "1f333"
                        },
                        {
                            "description": "Palm tree",
                            "description_zh_cn": "棕榈树",
                            "keywords": "palm,plant,tree,棕榈,植物,树",
                            "unicode": "1f334"
                        },
                        {
                            "description": "Potted plant",
                            "description_zh_cn": "盆栽植物",
                            "keywords": "plant,house plant,boring,useless,植物,室内植物,无聊,无用",
                            "unicode": "1fab4"
                        },
                        {
                            "description": "Seedling",
                            "description_zh_cn": "幼苗",
                            "keywords": "plant,seedling,young,植物,幼苗,年轻",
                            "unicode": "1f331"
                        },
                        {
                            "description": "Herb",
                            "description_zh_cn": "草本植物",
                            "keywords": "herb,leaf,plant,草本,叶,植物",
                            "unicode": "1f33f"
                        },
                        {
                            "description": "Shamrock",
                            "description_zh_cn": "三叶草",
                            "keywords": "plant,shamrock,植物,三叶草",
                            "unicode": "2618"
                        },
                        {
                            "description": "Four leaf clover",
                            "description_zh_cn": "四叶草",
                            "keywords": "4,clover,four,leaf,plant,4,三叶草,四,叶,植物",
                            "unicode": "1f340"
                        },
                        {
                            "description": "Pine decoration",
                            "description_zh_cn": "松木装饰",
                            "keywords": "activity,bamboo,celebration,japanese,pine,plant,活动,竹,庆祝活动,日语,松树,植物",
                            "unicode": "1f38d"
                        },
                        {
                            "description": "Tanabata tree",
                            "description_zh_cn": "七夕树",
                            "keywords": "activity,banner,celebration,entertainment,japanese,tree,活动,横幅,庆祝活动,娱乐,日语,树",
                            "unicode": "1f38b"
                        },
                        {
                            "description": "Leaf fluttering in wind",
                            "description_zh_cn": "树叶在风中飘扬",
                            "keywords": "blow,flutter,leaf,plant,wind,吹,扑,叶,植物,风",
                            "unicode": "1f343"
                        },
                        {
                            "description": "Fallen leaf",
                            "description_zh_cn": "落叶",
                            "keywords": "falling,leaf,plant,落,叶,植物",
                            "unicode": "1f342"
                        },
                        {
                            "description": "Maple leaf",
                            "description_zh_cn": "枫叶",
                            "keywords": "falling,leaf,maple,plant,落叶,枫树,植物",
                            "unicode": "1f341"
                        },
                        {
                            "description": "Ear of rice",
                            "description_zh_cn": "稻穗",
                            "keywords": "sheaf of rice,ear,plant,rice,一捆大米,耳朵,植物,大米",
                            "unicode": "1f33e"
                        },
                        {
                            "description": "Hibiscus",
                            "description_zh_cn": "芙蓉",
                            "keywords": "flower,hibiscus,plant,花,芙蓉,植物",
                            "unicode": "1f33a"
                        },
                        {
                            "description": "Sunflower",
                            "description_zh_cn": "向日葵",
                            "keywords": "flower,plant,sun,sunflower,花,植物,太阳,向日葵",
                            "unicode": "1f33b"
                        },
                        {
                            "description": "Rose",
                            "description_zh_cn": "玫瑰",
                            "keywords": "flower,plant,rose,花,植物,玫瑰",
                            "unicode": "1f339"
                        },
                        {
                            "description": "Wilted flower",
                            "description_zh_cn": "枯萎的花",
                            "keywords": "flower,wilted,花,枯萎",
                            "unicode": "1f940"
                        },
                        {
                            "description": "Tulip",
                            "description_zh_cn": "郁金香",
                            "keywords": "flower,plant,tulip,花,植物,郁金香",
                            "unicode": "1f337"
                        },
                        {
                            "description": "Blossom",
                            "description_zh_cn": "开花",
                            "keywords": "blossom,flower,plant,开花,花,植物",
                            "unicode": "1f33c"
                        },
                        {
                            "description": "Cherry blossom",
                            "description_zh_cn": "樱花",
                            "keywords": "blossom,cherry,flower,plant,开花,樱桃,花卉,植物",
                            "unicode": "1f338"
                        },
                        {
                            "description": "Bouquet",
                            "description_zh_cn": "花束",
                            "keywords": "bouquet,flower,plant,romance,花束,花卉,植物,浪漫",
                            "unicode": "1f490"
                        },
                        {
                            "description": "Mushroom",
                            "description_zh_cn": "蘑菇",
                            "keywords": "mushroom,plant,蘑菇,植物",
                            "unicode": "1f344"
                        },
                        {
                            "description": "Chestnut",
                            "description_zh_cn": "板栗",
                            "keywords": "chestnut,plant,栗子,植物",
                            "unicode": "1f330"
                        },
                        {
                            "description": "Spiral shell",
                            "description_zh_cn": "螺",
                            "keywords": "shell,spiral,外壳,螺旋",
                            "unicode": "1f41a"
                        },
                        {
                            "description": "Earth globe americas",
                            "description_zh_cn": "地球地球美洲",
                            "keywords": "americas,earth,globe,world,美洲,地球,全球,世界",
                            "unicode": "1f30e"
                        },
                        {
                            "description": "Earth globe europe-africa",
                            "description_zh_cn": "地球地球欧洲非洲",
                            "keywords": "africa,earth,europe,globe,world,非洲,地球,欧洲,全球,世界",
                            "unicode": "1f30d"
                        },
                        {
                            "description": "Earth globe asia-australia",
                            "description_zh_cn": "地球地球亚洲澳大利亚",
                            "keywords": "asia,australia,earth,globe,world,亚洲,澳大利亚,地球,全球,世界",
                            "unicode": "1f30f"
                        },
                        {
                            "description": "Full moon symbol",
                            "description_zh_cn": "满月符号",
                            "keywords": "full,moon,space,weather,满月、太空、天气",
                            "unicode": "1f315"
                        },
                        {
                            "description": "Waning gibbous moon symbol",
                            "description_zh_cn": "亏凸月符号",
                            "keywords": "gibbous,moon,space,waning,weather,凸面,月亮,空间,减弱,天气",
                            "unicode": "1f316"
                        },
                        {
                            "description": "Last quarter moon symbol",
                            "description_zh_cn": "上弦月符号",
                            "keywords": "moon,quarter,space,weather,月亮,四分之一,空间,天气",
                            "unicode": "1f317"
                        },
                        {
                            "description": "Waning crescent moon symbol",
                            "description_zh_cn": "残月符号",
                            "keywords": "crescent,moon,space,waning,weather,新月,月亮,空间,减弱,天气",
                            "unicode": "1f318"
                        },
                        {
                            "description": "New moon symbol",
                            "description_zh_cn": "新月符号",
                            "keywords": "dark,moon,space,weather,黑暗,月亮,太空,天气",
                            "unicode": "1f311"
                        },
                        {
                            "description": "Waxing crescent moon symbol",
                            "description_zh_cn": "打蜡新月符号",
                            "keywords": "crescent,moon,space,waxing,weather,新月,月亮,空间,打蜡,天气",
                            "unicode": "1f312"
                        },
                        {
                            "description": "First quarter moon symbol",
                            "description_zh_cn": "上弦月符号",
                            "keywords": "moon,quarter,space,weather,月亮,四分之一,空间,天气",
                            "unicode": "1f313"
                        },
                        {
                            "description": "Waxing gibbous moon symbol",
                            "description_zh_cn": "打蜡凸月符号",
                            "keywords": "gibbous,moon,space,waxing,weather,凸面,月亮,空间,打蜡,天气",
                            "unicode": "1f314"
                        },
                        {
                            "description": "Crescent moon",
                            "description_zh_cn": "新月",
                            "keywords": "crescent,moon,space,weather,新月,月亮,空间,天气",
                            "unicode": "1f319"
                        },
                        {
                            "description": "New moon with face",
                            "description_zh_cn": "有脸的新月",
                            "keywords": "face,moon,space,weather,脸,月亮,空间,天气",
                            "unicode": "1f31a"
                        },
                        {
                            "description": "Full moon with face",
                            "description_zh_cn": "满月脸",
                            "keywords": "bright,face,full,moon,space,weather,明亮,脸,满,月亮,空间,天气",
                            "unicode": "1f31d"
                        },
                        {
                            "description": "First quarter moon with face",
                            "description_zh_cn": "有脸的上弦月",
                            "keywords": "face,moon,quarter,space,weather,脸,月亮,季度,空间,天气",
                            "unicode": "1f31b"
                        },
                        {
                            "description": "Last quarter moon with face",
                            "description_zh_cn": "有脸的上弦月",
                            "keywords": "face,moon,quarter,space,weather,脸,月亮,季度,空间,天气",
                            "unicode": "1f31c"
                        },
                        {
                            "description": "Medium star",
                            "description_zh_cn": "中星",
                            "keywords": "star,星星",
                            "unicode": "2b50"
                        },
                        {
                            "description": "Glowing star",
                            "description_zh_cn": "发光的星星",
                            "keywords": "glittery,glow,shining,sparkle,star,闪闪发光,发光,闪耀,闪耀,明星",
                            "unicode": "1f31f"
                        },
                        {
                            "description": "Dizzy symbol",
                            "description_zh_cn": "头晕符号",
                            "keywords": "comic,dizzy,star,漫画,头晕,明星",
                            "unicode": "1f4ab"
                        },
                        {
                            "description": "Sparkles",
                            "description_zh_cn": "火花",
                            "keywords": "entertainment,sparkle,star,娱乐,闪耀,明星",
                            "unicode": "2728"
                        },
                        {
                            "description": "Comet",
                            "description_zh_cn": "彗星",
                            "keywords": "comet,space,彗星,空间",
                            "unicode": "2604"
                        },
                        {
                            "description": "Ringed planet",
                            "description_zh_cn": "环状行星",
                            "keywords": "space,planets,saturn,空间,行星,土星",
                            "unicode": "1fa90"
                        },
                        {
                            "description": "Sun with face",
                            "description_zh_cn": "有脸的太阳",
                            "keywords": "bright,face,space,sun,weather,明亮,脸,空间,太阳,天气",
                            "unicode": "1f31e"
                        },
                        {
                            "description": "Sun with rays",
                            "description_zh_cn": "有光芒的太阳",
                            "keywords": "bright,rays,space,sun,sunny,weather,明亮,光线,空间,太阳,晴朗,天气",
                            "unicode": "2600"
                        },
                        {
                            "description": "Sun with small cloud",
                            "description_zh_cn": "太阳与小云",
                            "keywords": "cloud,sun,weather,云,太阳,天气",
                            "unicode": "1f324"
                        },
                        {
                            "description": "Sun behind cloud",
                            "description_zh_cn": "云后的太阳",
                            "keywords": "cloud,sun,weather,云,太阳,天气",
                            "unicode": "26c5"
                        },
                        {
                            "description": "Sun behind large cloud",
                            "description_zh_cn": "大云后面的太阳",
                            "keywords": "cloud,sun,weather,云,太阳,天气",
                            "unicode": "1f325"
                        },
                        {
                            "description": "Sun behind cloud with rain",
                            "description_zh_cn": "雨云背后的太阳",
                            "keywords": "cloud,rain,sun,weather,云、雨、太阳、天气",
                            "unicode": "1f326"
                        },
                        {
                            "description": "Cloud",
                            "description_zh_cn": "云",
                            "keywords": "cloud,weather,云,天气",
                            "unicode": "2601"
                        },
                        {
                            "description": "Cloud with rain",
                            "description_zh_cn": "有雨的云",
                            "keywords": "cloud,rain,weather,云,雨,天气",
                            "unicode": "1f327"
                        },
                        {
                            "description": "Thunder cloud and rain",
                            "description_zh_cn": "雷云和雨",
                            "keywords": "cloud,rain,thunder,weather,云、雨、雷、天气",
                            "unicode": "26c8"
                        },
                        {
                            "description": "Cloud with lightning",
                            "description_zh_cn": "有闪电的云",
                            "keywords": "cloud,lightning,weather,云,闪电,天气",
                            "unicode": "1f329"
                        },
                        {
                            "description": "High voltage sign",
                            "description_zh_cn": "高压标志",
                            "keywords": "danger,electric,electricity,lightning,voltage,zap,危险,电力,电力,闪电,电压,电击",
                            "unicode": "26a1"
                        },
                        {
                            "description": "Fire",
                            "description_zh_cn": "火",
                            "keywords": "fire,flame,tool,火,火焰,工具",
                            "unicode": "1f525"
                        },
                        {
                            "description": "Collision symbol",
                            "description_zh_cn": "碰撞符号",
                            "keywords": "boom,collision,comic,繁荣,碰撞,漫画",
                            "unicode": "1f4a5"
                        },
                        {
                            "description": "Snowflake",
                            "description_zh_cn": "雪花",
                            "keywords": "cold,snow,snowflake,weather,寒冷,雪,雪花,天气",
                            "unicode": "2744"
                        },
                        {
                            "description": "Cloud with snow",
                            "description_zh_cn": "有雪的云",
                            "keywords": "cloud,cold,snow,weather,云、冷、雪、天气",
                            "unicode": "1f328"
                        },
                        {
                            "description": "Snowman",
                            "description_zh_cn": "雪人",
                            "keywords": "cold,snow,snowman,weather,寒冷,雪,雪人,天气",
                            "unicode": "2603"
                        },
                        {
                            "description": "Snowman without snow",
                            "description_zh_cn": "没有雪的雪人",
                            "keywords": "cold,snow,snowman,weather,寒冷,雪,雪人,天气",
                            "unicode": "26c4"
                        },
                        {
                            "description": "Wind blowing face",
                            "description_zh_cn": "风吹脸",
                            "keywords": "blow,cloud,face,weather,wind,吹,云,脸,天气,风",
                            "unicode": "1f32c"
                        },
                        {
                            "description": "Dash symbol",
                            "description_zh_cn": "破折号",
                            "keywords": "comic,dash,running,漫画,破折号,跑步",
                            "unicode": "1f4a8"
                        },
                        {
                            "description": "Cloud with tornado",
                            "description_zh_cn": "有龙卷风的云",
                            "keywords": "cloud,tornado,weather,whirlwind,云,龙卷风,天气,旋风",
                            "unicode": "1f32a"
                        },
                        {
                            "description": "Fog",
                            "description_zh_cn": "多雾路段",
                            "keywords": "cloud,fog,weather,云,雾,天气",
                            "unicode": "1f32b"
                        },
                        {
                            "description": "Rainbow",
                            "description_zh_cn": "彩虹",
                            "keywords": "rain,rainbow,weather,pride,lgbt,雨,彩虹,天气,骄傲,lgbt",
                            "unicode": "1f308"
                        },
                        {
                            "description": "Umbrella with rain drops",
                            "description_zh_cn": "带雨滴的伞",
                            "keywords": "clothing,drop,rain,umbrella,weather,衣服,下降,雨,伞,天气",
                            "unicode": "2614"
                        },
                        {
                            "description": "Droplet",
                            "description_zh_cn": "水滴",
                            "keywords": "cold,comic,drop,sweat,weather,寒冷,漫画,掉落,汗水,天气",
                            "unicode": "1f4a7"
                        },
                        {
                            "description": "Splashing sweat symbol",
                            "description_zh_cn": "溅出的汗水符号",
                            "keywords": "comic,splashing,sweat,漫画,溅,汗",
                            "unicode": "1f4a6"
                        },
                        {
                            "description": "Water wave",
                            "description_zh_cn": "水波",
                            "keywords": "ocean,water,wave,weather,海洋,水,波,天气",
                            "unicode": "1f30a"
                        }
                    ],
                    "title": "Animals & nature",
                    "title_zh_cn": "动物和自然"
                },
                {
                    "id": "food",
                    "items": [
                        {
                            "description": "Green apple",
                            "description_zh_cn": "青苹果",
                            "keywords": "apple,fruit,green,plant,苹果,水果,绿色,植物",
                            "unicode": "1f34f"
                        },
                        {
                            "description": "Red apple",
                            "description_zh_cn": "红苹果",
                            "keywords": "apple,fruit,plant,red,苹果,水果,植物,红色",
                            "unicode": "1f34e"
                        },
                        {
                            "description": "Pear",
                            "description_zh_cn": "梨",
                            "keywords": "fruit,pear,plant,水果,梨,植物",
                            "unicode": "1f350"
                        },
                        {
                            "description": "Tangerine",
                            "description_zh_cn": "柑橘",
                            "keywords": "fruit,orange,plant,tangerine,水果,橙子,植物,橘子",
                            "unicode": "1f34a"
                        },
                        {
                            "description": "Lemon",
                            "description_zh_cn": "柠檬",
                            "keywords": "citrus,fruit,lemon,plant,柑橘、水果、柠檬、植物",
                            "unicode": "1f34b"
                        },
                        {
                            "description": "Banana",
                            "description_zh_cn": "香蕉",
                            "keywords": "banana,fruit,plant,香蕉,水果,植物",
                            "unicode": "1f34c"
                        },
                        {
                            "description": "Watermelon",
                            "description_zh_cn": "西瓜",
                            "keywords": "fruit,plant,watermelon,水果,植物,西瓜",
                            "unicode": "1f349"
                        },
                        {
                            "description": "Grapes",
                            "description_zh_cn": "葡萄",
                            "keywords": "fruit,grape,plant,水果,葡萄,植物",
                            "unicode": "1f347"
                        },
                        {
                            "description": "Strawberry",
                            "description_zh_cn": "草莓",
                            "keywords": "berry,fruit,plant,strawberry,浆果,水果,植物,草莓",
                            "unicode": "1f353"
                        },
                        {
                            "description": "Melon",
                            "description_zh_cn": "瓜",
                            "keywords": "fruit,melon,plant,水果,瓜,植物",
                            "unicode": "1f348"
                        },
                        {
                            "description": "Cherries",
                            "description_zh_cn": "樱桃",
                            "keywords": "cherry,fruit,plant,樱桃,水果,植物",
                            "unicode": "1f352"
                        },
                        {
                            "description": "Blueberries",
                            "description_zh_cn": "蓝莓",
                            "keywords": "blueberry,berry,bilberry,blue,fruit,蓝莓,浆果,越橘,蓝色,水果",
                            "unicode": "1fad0"
                        },
                        {
                            "description": "Peach",
                            "description_zh_cn": "桃",
                            "keywords": "fruit,peach,plant,水果,桃子,植物",
                            "unicode": "1f351"
                        },
                        {
                            "description": "Mango",
                            "description_zh_cn": "芒果",
                            "keywords": "tropical,fruit,热带水果",
                            "unicode": "1f96d"
                        },
                        {
                            "description": "Pineapple",
                            "description_zh_cn": "菠萝",
                            "keywords": "fruit,pineapple,plant,水果,菠萝,植物",
                            "unicode": "1f34d"
                        },
                        {
                            "description": "Coconut",
                            "description_zh_cn": "椰子",
                            "keywords": "coconut,fruit,椰子,水果",
                            "unicode": "1f965"
                        },
                        {
                            "description": "Kiwi fruit",
                            "description_zh_cn": "奇异果",
                            "keywords": "fruit,kiwi,水果,猕猴桃",
                            "unicode": "1f95d"
                        },
                        {
                            "description": "Tomato",
                            "description_zh_cn": "番茄",
                            "keywords": "plant,tomato,vegetable,植物,番茄,蔬菜",
                            "unicode": "1f345"
                        },
                        {
                            "description": "Avocado",
                            "description_zh_cn": "鳄梨",
                            "keywords": "avocado,fruit,鳄梨,水果",
                            "unicode": "1f951"
                        },
                        {
                            "description": "Olive",
                            "description_zh_cn": "橄榄",
                            "keywords": "olives,fruit,橄榄、水果",
                            "unicode": "1fad2"
                        },
                        {
                            "description": "Eggplant",
                            "description_zh_cn": "茄子",
                            "keywords": "aubergine,eggplant,plant,vegetable,茄子、茄子、植物、蔬菜",
                            "unicode": "1f346"
                        },
                        {
                            "description": "Hot pepper",
                            "description_zh_cn": "辣椒",
                            "keywords": "hot,pepper,plant,热,胡椒,植物",
                            "unicode": "1f336"
                        },
                        {
                            "description": "Bell pepper",
                            "description_zh_cn": "灯笼椒",
                            "keywords": "capsicum,pepper,plant,vegetable,辣椒、胡椒、植物、蔬菜",
                            "unicode": "1fad1"
                        },
                        {
                            "description": "Cucumber",
                            "description_zh_cn": "黄瓜",
                            "keywords": "cucumber,pickle,vegetable,黄瓜、泡菜、蔬菜",
                            "unicode": "1f952"
                        },
                        {
                            "description": "Leafy green",
                            "description_zh_cn": "绿叶",
                            "keywords": "bok choy,cabbage,kale,lettuce,白菜、卷心菜、羽衣甘蓝、生菜",
                            "unicode": "1f96c"
                        },
                        {
                            "description": "Broccoli",
                            "description_zh_cn": "西兰花",
                            "keywords": "broccoli,vegetable,西兰花,蔬菜",
                            "unicode": "1f966"
                        },
                        {
                            "description": "Garlic",
                            "description_zh_cn": "蒜",
                            "keywords": "vegetable,plant,flavoring,garlic,蔬菜、植物、调味、大蒜",
                            "unicode": "1f9c4"
                        },
                        {
                            "description": "Onion",
                            "description_zh_cn": "洋葱",
                            "keywords": "vegetable,plant,flavoring,onion,蔬菜、植物、调味料、洋葱",
                            "unicode": "1f9c5"
                        },
                        {
                            "description": "Ear of maize",
                            "description_zh_cn": "玉米穗",
                            "keywords": "corn,ear,maize,maze,plant,玉米,耳朵,玉米,迷宫,植物",
                            "unicode": "1f33d"
                        },
                        {
                            "description": "Carrot",
                            "description_zh_cn": "萝卜",
                            "keywords": "carrot,vegetable,胡萝卜、蔬菜",
                            "unicode": "1f955"
                        },
                        {
                            "description": "Green salad",
                            "description_zh_cn": "绿色的沙拉",
                            "keywords": "green,salad,绿色的沙拉",
                            "unicode": "1f957"
                        },
                        {
                            "description": "Potato",
                            "description_zh_cn": "土豆",
                            "keywords": "potato,vegetable,土豆、蔬菜",
                            "unicode": "1f954"
                        },
                        {
                            "description": "Roasted sweet potato",
                            "description_zh_cn": "烤红薯",
                            "keywords": "potato,roasted,sweet,土豆,烤,甜",
                            "unicode": "1f360"
                        },
                        {
                            "description": "Peanuts",
                            "description_zh_cn": "花生",
                            "keywords": "nut,peanut,vegetable,坚果,花生,蔬菜",
                            "unicode": "1f95c"
                        },
                        {
                            "description": "Honey pot",
                            "description_zh_cn": "蜜罐",
                            "keywords": "honey,honeypot,pot,sweet,蜂蜜,蜜罐,锅,甜",
                            "unicode": "1f36f"
                        },
                        {
                            "description": "Bread",
                            "description_zh_cn": "面包",
                            "keywords": "bread,loaf,面包",
                            "unicode": "1f35e"
                        },
                        {
                            "description": "Croissant",
                            "description_zh_cn": "羊角面包",
                            "keywords": "bread,crescent roll,croissant,french,面包,新月卷,羊角面包,法国",
                            "unicode": "1f950"
                        },
                        {
                            "description": "Baguette bread",
                            "description_zh_cn": "法棍面包",
                            "keywords": "baguette,bread,french,法式长棍面包,面包,法国",
                            "unicode": "1f956"
                        },
                        {
                            "description": "Flatbread",
                            "description_zh_cn": "大饼",
                            "keywords": "arepa,lavash,naan,pita,arepa,lavash,naan,pita",
                            "unicode": "1fad3"
                        },
                        {
                            "description": "Pretzel",
                            "description_zh_cn": "椒盐脆饼",
                            "keywords": "pretzel,soft pretzel,pretzel twist,bread,椒盐卷饼,软椒盐卷饼,椒盐卷饼扭曲,面包",
                            "unicode": "1f968"
                        },
                        {
                            "description": "Bagel",
                            "description_zh_cn": "百吉饼",
                            "keywords": "bread,cream cheese,schmear,面包,奶油奶酪,施密尔",
                            "unicode": "1f96f"
                        },
                        {
                            "description": "Pancakes",
                            "description_zh_cn": "薄煎饼",
                            "keywords": "crêpe,hotcake,pancake,可丽饼,热蛋糕,煎饼",
                            "unicode": "1f95e"
                        },
                        {
                            "description": "Waffle",
                            "description_zh_cn": "胡扯",
                            "keywords": "waffle,indecisive,华夫饼,优柔寡断",
                            "unicode": "1f9c7"
                        },
                        {
                            "description": "Cheese wedge",
                            "description_zh_cn": "奶酪楔",
                            "keywords": "cheese,起司",
                            "unicode": "1f9c0"
                        },
                        {
                            "description": "Poultry leg",
                            "description_zh_cn": "家禽腿",
                            "keywords": "bone,chicken,leg,poultry,骨、鸡、腿、家禽",
                            "unicode": "1f357"
                        },
                        {
                            "description": "Meat on bone",
                            "description_zh_cn": "骨头上的肉",
                            "keywords": "bone,meat,骨头,肉",
                            "unicode": "1f356"
                        },
                        {
                            "description": "Cut of meat",
                            "description_zh_cn": "切肉",
                            "keywords": "meat,chop,lambchop,porkchop,steak,肉,剁,羊排,猪排,牛排",
                            "unicode": "1f969"
                        },
                        {
                            "description": "Fried shrimp",
                            "description_zh_cn": "炒虾仁",
                            "keywords": "fried,prawn,shrimp,tempura,炸、虾、虾、天妇罗",
                            "unicode": "1f364"
                        },
                        {
                            "description": "Egg",
                            "description_zh_cn": "蛋",
                            "keywords": "egg,蛋",
                            "unicode": "1f95a"
                        },
                        {
                            "description": "Cooking",
                            "description_zh_cn": "烹饪",
                            "keywords": "cooking,egg,frying,pan,烹饪、鸡蛋、煎炸、平底锅",
                            "unicode": "1f373"
                        },
                        {
                            "description": "Bacon",
                            "description_zh_cn": "培根",
                            "keywords": "bacon,meat,培根、肉",
                            "unicode": "1f953"
                        },
                        {
                            "description": "Hamburger",
                            "description_zh_cn": "汉堡包",
                            "keywords": "burger,hamburger,汉堡,汉堡",
                            "unicode": "1f354"
                        },
                        {
                            "description": "French fries",
                            "description_zh_cn": "炸薯条",
                            "keywords": "french,fries,炸薯条",
                            "unicode": "1f35f"
                        },
                        {
                            "description": "Hot dog",
                            "description_zh_cn": "热狗",
                            "keywords": "frankfurter,hot dog,hotdog,sausage,wiener,redhot,法兰克福,热狗,热狗,香肠,维纳,红热",
                            "unicode": "1f32d"
                        },
                        {
                            "description": "Slice of pizza",
                            "description_zh_cn": "一片披萨",
                            "keywords": "cheese,pizza,slice,奶酪,比萨,切片",
                            "unicode": "1f355"
                        },
                        {
                            "description": "Spaghetti",
                            "description_zh_cn": "意大利细面条",
                            "keywords": "pasta,spaghetti,意大利面,意大利面",
                            "unicode": "1f35d"
                        },
                        {
                            "description": "Sandwich",
                            "description_zh_cn": "三明治",
                            "keywords": "bread,vegetables,cheese,meat,deli,面包、蔬菜、奶酪、肉类、熟食",
                            "unicode": "1f96a"
                        },
                        {
                            "description": "Taco",
                            "description_zh_cn": "炸玉米饼",
                            "keywords": "mexican,taco,墨西哥,炸玉米饼",
                            "unicode": "1f32e"
                        },
                        {
                            "description": "Burrito",
                            "description_zh_cn": "卷饼",
                            "keywords": "burrito,mexican,墨西哥卷饼",
                            "unicode": "1f32f"
                        },
                        {
                            "description": "Tamale",
                            "description_zh_cn": "玉米粉蒸肉",
                            "keywords": "tamale,mexican,wrapped,玉米粉蒸肉,墨西哥,包裹",
                            "unicode": "1fad4"
                        },
                        {
                            "description": "Stuffed flatbread",
                            "description_zh_cn": "酿大饼",
                            "keywords": "falafel,flatbread,gyro,kebab,stuffed,沙拉三明治、大饼、陀螺、烤肉串、酿",
                            "unicode": "1f959"
                        },
                        {
                            "description": "Falafel",
                            "description_zh_cn": "沙拉三明治",
                            "keywords": "falfel,chickpea,鹰嘴豆,鹰嘴豆",
                            "unicode": "1f9c6"
                        },
                        {
                            "description": "Steaming bowl",
                            "description_zh_cn": "蒸碗",
                            "keywords": "bowl,noodle,ramen,steaming,soup,碗,面条,拉面,蒸,汤",
                            "unicode": "1f35c"
                        },
                        {
                            "description": "Shallow pan of food",
                            "description_zh_cn": "浅锅食物",
                            "keywords": "casserole,paella,pan,shallow,砂锅菜,西班牙海鲜饭,平底锅,浅",
                            "unicode": "1f958"
                        },
                        {
                            "description": "Pot of food",
                            "description_zh_cn": "一锅食物",
                            "keywords": "pot,stew,锅,炖",
                            "unicode": "1f372"
                        },
                        {
                            "description": "Fondue",
                            "description_zh_cn": "火锅",
                            "keywords": "cheese,chocolate,fondue,melted,pot,swiss,奶酪,巧克力,火锅,融化,锅,瑞士",
                            "unicode": "1fad5"
                        },
                        {
                            "description": "Canned food",
                            "description_zh_cn": "罐头食品",
                            "keywords": "can,food,preserve,可以,食品,保存",
                            "unicode": "1f96b"
                        },
                        {
                            "description": "Salt",
                            "description_zh_cn": "盐",
                            "keywords": "condiment,shaker,调味品,调酒器",
                            "unicode": "1f9c2"
                        },
                        {
                            "description": "Butter",
                            "description_zh_cn": "牛油",
                            "keywords": "butter,dairy,黄油,乳制品",
                            "unicode": "1f9c8"
                        },
                        {
                            "description": "Fish cake with swirl design",
                            "description_zh_cn": "带漩涡设计的鱼糕",
                            "keywords": "cake,fish,pastry,swirl,蛋糕、鱼、糕点、漩涡",
                            "unicode": "1f365"
                        },
                        {
                            "description": "Sushi",
                            "description_zh_cn": "寿司",
                            "keywords": "sushi,寿司",
                            "unicode": "1f363"
                        },
                        {
                            "description": "Bento box",
                            "description_zh_cn": "便当盒",
                            "keywords": "bento,box,便当,盒子",
                            "unicode": "1f371"
                        },
                        {
                            "description": "Curry and rice",
                            "description_zh_cn": "咖喱饭",
                            "keywords": "curry,rice,咖喱饭",
                            "unicode": "1f35b"
                        },
                        {
                            "description": "Rice ball",
                            "description_zh_cn": "饭团",
                            "keywords": "ball,japanese,rice,球,日本,米饭",
                            "unicode": "1f359"
                        },
                        {
                            "description": "Cooked rice",
                            "description_zh_cn": "熟米饭",
                            "keywords": "cooked,rice,熟米饭",
                            "unicode": "1f35a"
                        },
                        {
                            "description": "Rice cracker",
                            "description_zh_cn": "米饼",
                            "keywords": "cracker,rice,饼干,米饭",
                            "unicode": "1f358"
                        },
                        {
                            "description": "Dumpling",
                            "description_zh_cn": "饺子",
                            "keywords": "dumpling,empanada,gyōza,gyoza,jiaozi,pierogi,potsticker,饺子、肉馅卷饼、饺子、饺子、饺子、皮耶罗吉、锅贴",
                            "unicode": "1f95f"
                        },
                        {
                            "description": "Oden",
                            "description_zh_cn": "关东煮",
                            "keywords": "kebab,oden,seafood,skewer,stick,烤肉串,关东煮,海鲜,串,棒",
                            "unicode": "1f362"
                        },
                        {
                            "description": "Dango",
                            "description_zh_cn": "团子",
                            "keywords": "dango,dessert,japanese,skewer,stick,sweet,团子,甜点,日语,串,棒,甜",
                            "unicode": "1f361"
                        },
                        {
                            "description": "Shaved ice",
                            "description_zh_cn": "刨冰",
                            "keywords": "dessert,ice,shaved,sweet,甜点,冰,剃光,甜",
                            "unicode": "1f367"
                        },
                        {
                            "description": "Ice cream",
                            "description_zh_cn": "冰淇淋",
                            "keywords": "cream,dessert,ice,sweet,奶油、甜点、冰、甜",
                            "unicode": "1f368"
                        },
                        {
                            "description": "Soft ice cream",
                            "description_zh_cn": "软冰淇淋",
                            "keywords": "cream,dessert,ice,icecream,soft,sweet,奶油,甜点,冰,冰淇淋,软,甜",
                            "unicode": "1f366"
                        },
                        {
                            "description": "Shortcake",
                            "description_zh_cn": "脆饼",
                            "keywords": "cake,dessert,pastry,shortcake,slice,sweet,蛋糕,甜点,糕点,脆饼,切片,甜",
                            "unicode": "1f370"
                        },
                        {
                            "description": "Birthday cake",
                            "description_zh_cn": "生日蛋糕",
                            "keywords": "birthday,cake,celebration,dessert,pastry,sweet,生日,蛋糕,庆祝活动,甜点,糕点,甜",
                            "unicode": "1f382"
                        },
                        {
                            "description": "Cupcake",
                            "description_zh_cn": "纸杯蛋糕",
                            "keywords": "bakery,sweet,dessert,pastry,面包店、甜食、甜点、糕点",
                            "unicode": "1f9c1"
                        },
                        {
                            "description": "Pie",
                            "description_zh_cn": "馅饼",
                            "keywords": "pie,dessert,sweet,馅饼,甜点,甜",
                            "unicode": "1f967"
                        },
                        {
                            "description": "Custard",
                            "description_zh_cn": "卡仕达酱",
                            "keywords": "custard,dessert,pudding,sweet,蛋羹、甜点、布丁、甜食",
                            "unicode": "1f36e"
                        },
                        {
                            "description": "Lollipop",
                            "description_zh_cn": "棒糖",
                            "keywords": "candy,dessert,lollipop,sweet,糖果,甜点,棒棒糖,甜",
                            "unicode": "1f36d"
                        },
                        {
                            "description": "Candy",
                            "description_zh_cn": "糖果",
                            "keywords": "candy,dessert,sweet,糖果,甜点,甜",
                            "unicode": "1f36c"
                        },
                        {
                            "description": "Chocolate bar",
                            "description_zh_cn": "巧克力吧",
                            "keywords": "bar,chocolate,dessert,sweet,酒吧、巧克力、甜点、甜食",
                            "unicode": "1f36b"
                        },
                        {
                            "description": "Popcorn",
                            "description_zh_cn": "爆米花",
                            "keywords": "popcorn,爆米花",
                            "unicode": "1f37f"
                        },
                        {
                            "description": "Doughnut",
                            "description_zh_cn": "油炸圈饼",
                            "keywords": "dessert,donut,doughnut,sweet,甜点,甜甜圈,甜甜圈,甜",
                            "unicode": "1f369"
                        },
                        {
                            "description": "Cookie",
                            "description_zh_cn": "曲奇饼",
                            "keywords": "cookie,dessert,sweet,饼干,甜点,甜",
                            "unicode": "1f36a"
                        },
                        {
                            "description": "Fortune cookie",
                            "description_zh_cn": "幸运饼干",
                            "keywords": "fortune,cookie,幸运饼干",
                            "unicode": "1f960"
                        },
                        {
                            "description": "Moon cake",
                            "description_zh_cn": "月饼",
                            "keywords": "autumn,festival,yuèbǐng,秋天,节日,yuèbǐng",
                            "unicode": "1f96e"
                        },
                        {
                            "description": "Hot beverage",
                            "description_zh_cn": "热饮",
                            "keywords": "beverage,coffee,drink,hot,steaming,tea,饮料,咖啡,饮料,热,蒸,茶",
                            "unicode": "2615"
                        },
                        {
                            "description": "Teacup without handle",
                            "description_zh_cn": "无柄茶杯",
                            "keywords": "beverage,cup,drink,tea,teacup,饮料,杯,饮料,茶,茶杯",
                            "unicode": "1f375"
                        },
                        {
                            "description": "Teapot",
                            "description_zh_cn": "茶壶",
                            "keywords": "drink,pot,tea,teapot,kettle,喝,锅,茶,茶壶,水壶",
                            "unicode": "1fad6"
                        },
                        {
                            "description": "Bowl with spoon",
                            "description_zh_cn": "带勺子的碗",
                            "keywords": "breakfast,cereal,congee,oatmeal,porridge,tableware,早餐、麦片、粥、麦片、粥、餐具",
                            "unicode": "1f963"
                        },
                        {
                            "description": "Baby bottle",
                            "description_zh_cn": "婴儿奶瓶",
                            "keywords": "baby,bottle,drink,milk,婴儿,瓶子,饮料,牛奶",
                            "unicode": "1f37c"
                        },
                        {
                            "description": "Cup with straw",
                            "description_zh_cn": "带吸管的杯子",
                            "keywords": "juice,soda,malt,soft drink,water,tableware,果汁、苏打水、麦芽、软饮料、水、餐具",
                            "unicode": "1f964"
                        },
                        {
                            "description": "Bubble tea",
                            "description_zh_cn": "珍珠奶茶",
                            "keywords": "bubble,milk,pearl,tea,boba,tapioca,momi,泡沫,牛奶,珍珠,茶,boba,木薯粉,momi",
                            "unicode": "1f9cb"
                        },
                        {
                            "description": "Beverage box",
                            "description_zh_cn": "饮料盒",
                            "keywords": "juice,beverage,box,drink,straw,果汁、饮料、盒子、饮料、吸管",
                            "unicode": "1f9c3"
                        },
                        {
                            "description": "Mate",
                            "description_zh_cn": "伴侣",
                            "keywords": "drink,mate,bombilla,yerba,喝,伴侣,bombilla,yerba",
                            "unicode": "1f9c9"
                        },
                        {
                            "description": "Glass of milk",
                            "description_zh_cn": "一杯牛奶",
                            "keywords": "drink,glass,milk,饮料,玻璃,牛奶",
                            "unicode": "1f95b"
                        },
                        {
                            "description": "Beer mug",
                            "description_zh_cn": "啤酒杯",
                            "keywords": "bar,beer,drink,mug,酒吧,啤酒,饮料,杯子",
                            "unicode": "1f37a"
                        },
                        {
                            "description": "Clinking beer mugs",
                            "description_zh_cn": "叮当响的啤酒杯",
                            "keywords": "bar,beer,clink,drink,mug,酒吧,啤酒,碰杯,饮料,杯子",
                            "unicode": "1f37b"
                        },
                        {
                            "description": "Wine glass",
                            "description_zh_cn": "红酒杯",
                            "keywords": "bar,beverage,drink,glass,wine,酒吧,饮料,饮料,玻璃,酒",
                            "unicode": "1f377"
                        },
                        {
                            "description": "Clinking glasses",
                            "description_zh_cn": "碰杯",
                            "keywords": "celebrate,clink,drink,glass,庆祝,碰杯,饮料,玻璃",
                            "unicode": "1f942"
                        },
                        {
                            "description": "Tumbler glass",
                            "description_zh_cn": "不倒翁玻璃",
                            "keywords": "glass,liquor,shot,tumbler,whisky,whiskey,bourbon,玻璃,酒,射击,不倒翁,威士忌,威士忌,波旁威士忌",
                            "unicode": "1f943"
                        },
                        {
                            "description": "Cocktail glass",
                            "description_zh_cn": "鸡尾酒杯",
                            "keywords": "bar,cocktail,drink,glass,酒吧,鸡尾酒,饮料,玻璃",
                            "unicode": "1f378"
                        },
                        {
                            "description": "Tropical drink",
                            "description_zh_cn": "热带饮料",
                            "keywords": "bar,drink,tropical,酒吧,饮料,热带",
                            "unicode": "1f379"
                        },
                        {
                            "description": "Bottle with popping cork",
                            "description_zh_cn": "瓶塞爆裂",
                            "keywords": "bar,bottle,champagne,cork,drink,popping,party,酒吧,瓶,香槟,软木,饮料,爆裂,派对",
                            "unicode": "1f37e"
                        },
                        {
                            "description": "Sake bottle and cup",
                            "description_zh_cn": "清酒瓶和杯子",
                            "keywords": "bar,beverage,bottle,cup,drink,sake,酒吧、饮料、瓶子、杯子、饮料、清酒",
                            "unicode": "1f376"
                        },
                        {
                            "description": "Ice cube",
                            "description_zh_cn": "冰块",
                            "keywords": "ice,cube,cold,iceberg,冰,立方体,冷,冰山",
                            "unicode": "1f9ca"
                        },
                        {
                            "description": "Spoon",
                            "description_zh_cn": "勺子",
                            "keywords": "spoon,tableware,勺子、餐具",
                            "unicode": "1f944"
                        },
                        {
                            "description": "Fork and knife",
                            "description_zh_cn": "叉子和刀",
                            "keywords": "cooking,fork,knife,tableware,烹饪、叉、刀、餐具",
                            "unicode": "1f374"
                        },
                        {
                            "description": "Fork and knife with plate",
                            "description_zh_cn": "带盘子的刀叉",
                            "keywords": "cooking,fork,knife,plate,tableware,烹饪、叉、刀、盘、餐具",
                            "unicode": "1f37d"
                        },
                        {
                            "description": "Chopsticks",
                            "description_zh_cn": "筷子",
                            "keywords": "hashi,jeotgarak,kuaizi,哈希,jeotgarak,快子",
                            "unicode": "1f962"
                        },
                        {
                            "description": "Takeout box",
                            "description_zh_cn": "外卖盒",
                            "keywords": "take out,container,oyster pail,取出,容器,牡蛎桶",
                            "unicode": "1f961"
                        }
                    ],
                    "title": "Food & drink",
                    "title_zh_cn": "食物和饮料"
                },
                {
                    "id": "activity",
                    "items": [
                        {
                            "description": "Soccer ball",
                            "description_zh_cn": "足球",
                            "keywords": "ball,soccer,球,足球",
                            "unicode": "26bd"
                        },
                        {
                            "description": "Basketball",
                            "description_zh_cn": "篮球",
                            "keywords": "ball,basketball,hoop,球,篮球,箍",
                            "unicode": "1f3c0"
                        },
                        {
                            "description": "American football",
                            "description_zh_cn": "美式足球",
                            "keywords": "american,ball,football,美国,球,足球",
                            "unicode": "1f3c8"
                        },
                        {
                            "description": "Baseball",
                            "description_zh_cn": "棒球",
                            "keywords": "ball,baseball,球,棒球",
                            "unicode": "26be"
                        },
                        {
                            "description": "Softball",
                            "description_zh_cn": "垒球",
                            "keywords": "ball,game,sport,球,游戏,运动",
                            "unicode": "1f94e"
                        },
                        {
                            "description": "Tennis ball",
                            "description_zh_cn": "网球",
                            "keywords": "ball,racquet,tennis,球,球拍,网球",
                            "unicode": "1f3be"
                        },
                        {
                            "description": "Volleyball",
                            "description_zh_cn": "排球",
                            "keywords": "ball,game,volleyball,球,游戏,排球",
                            "unicode": "1f3d0"
                        },
                        {
                            "description": "Rugby football",
                            "description_zh_cn": "橄榄球",
                            "keywords": "ball,football,rugby,球,足球,橄榄球",
                            "unicode": "1f3c9"
                        },
                        {
                            "description": "Billiards",
                            "description_zh_cn": "台球",
                            "keywords": "8,8 ball,ball,billiard,eight,game,8,8球,球,台球,八,游戏",
                            "unicode": "1f3b1"
                        },
                        {
                            "description": "Flying disc",
                            "description_zh_cn": "飞碟",
                            "keywords": "disc,ultimate,golf,game,sport,frisbee,光盘,终极,高尔夫,游戏,体育,飞盘",
                            "unicode": "1f94f"
                        },
                        {
                            "description": "Boomerang",
                            "description_zh_cn": "回旋镖",
                            "keywords": "australia,boomerang,rebound,repercussion,澳大利亚,回旋镖,反弹,反响",
                            "unicode": "1fa83"
                        },
                        {
                            "description": "Table tennis paddle and ball",
                            "description_zh_cn": "乒乓球拍和球",
                            "keywords": "ball,bat,game,paddle,table tennis,球,蝙蝠,游戏,桨,乒乓球",
                            "unicode": "1f3d3"
                        },
                        {
                            "description": "Badminton racquet and shuttlecock",
                            "description_zh_cn": "羽毛球拍和毽子",
                            "keywords": "badminton,birdie,game,racquet,shuttlecock,羽毛球,小鸟,游戏,球拍,毽球",
                            "unicode": "1f3f8"
                        },
                        {
                            "description": "Goal net",
                            "description_zh_cn": "球门网",
                            "keywords": "goal,net,目标,净额",
                            "unicode": "1f945"
                        },
                        {
                            "description": "Ice hockey stick and puck",
                            "description_zh_cn": "冰球棍和冰球",
                            "keywords": "game,hockey,ice,puck,stick,游戏,曲棍球,冰,冰球,棒",
                            "unicode": "1f3d2"
                        },
                        {
                            "description": "Field hockey stick and ball",
                            "description_zh_cn": "曲棍球棒和球",
                            "keywords": "ball,field,game,hockey,stick,球,字段,游戏,曲棍球,棒",
                            "unicode": "1f3d1"
                        },
                        {
                            "description": "Cricket bat and ball",
                            "description_zh_cn": "板球棒和球",
                            "keywords": "ball,field,cricket,game,球,场,板球,游戏",
                            "unicode": "1f3cf"
                        },
                        {
                            "description": "Lacrosse",
                            "description_zh_cn": "长曲棍球",
                            "keywords": "ball,stick,game,sport,球,棍子,游戏,运动",
                            "unicode": "1f94d"
                        },
                        {
                            "description": "Curling stone",
                            "description_zh_cn": "冰壶石",
                            "keywords": "curling,stone,冰壶,石头",
                            "unicode": "1f94c"
                        },
                        {
                            "description": "Flag in hole",
                            "description_zh_cn": "洞中的旗帜",
                            "keywords": "flag,golf,hole,旗帜,高尔夫,洞",
                            "unicode": "26f3"
                        },
                        {
                            "description": "Bow and arrow",
                            "description_zh_cn": "弓和箭",
                            "keywords": "archer,arrow,bow,sagittarius,tool,zodiac,弓箭手,箭头,弓,射手座,工具,生肖",
                            "unicode": "1f3f9"
                        },
                        {
                            "description": "Fishing pole and fish",
                            "description_zh_cn": "钓鱼竿和鱼",
                            "keywords": "entertainment,fish,pole,娱乐,鱼,杆",
                            "unicode": "1f3a3"
                        },
                        {
                            "description": "Diving mask",
                            "description_zh_cn": "潜水面具",
                            "keywords": "diving,scuba,snorkeling,潜水、潜水、浮潜",
                            "unicode": "1f93f"
                        },
                        {
                            "description": "Boxing glove",
                            "description_zh_cn": "拳击手套",
                            "keywords": "boxing,glove,拳击,手套",
                            "unicode": "1f94a"
                        },
                        {
                            "description": "Martial arts uniform",
                            "description_zh_cn": "武术服",
                            "keywords": "judo,karate,martial arts,taekwondo,uniform,柔道,空手道,武术,跆拳道,制服",
                            "unicode": "1f94b"
                        },
                        {
                            "description": "Ice skate",
                            "description_zh_cn": "滑冰",
                            "keywords": "ice,skate,滑冰",
                            "unicode": "26f8"
                        },
                        {
                            "description": "Ski and ski boot",
                            "description_zh_cn": "滑雪和滑雪靴",
                            "keywords": "skis,ski,snow,滑雪板,滑雪板,雪",
                            "unicode": "1f3bf"
                        },
                        {
                            "description": "Sled",
                            "description_zh_cn": "雪橇",
                            "keywords": "sledge,sleigh,luge,toboggan,雪橇、雪橇、雪橇、雪橇",
                            "unicode": "1f6f7"
                        },
                        {
                            "description": "Skier",
                            "description_zh_cn": "滑雪者",
                            "keywords": "ski,snow,滑雪,雪",
                            "unicode": "26f7"
                        },
                        {
                            "description": "Snowboarder",
                            "description_zh_cn": "滑雪板",
                            "keywords": "ski,snow,snowboard,滑雪,雪,滑雪板",
                            "unicode": "1f3c2"
                        },
                        {
                            "description": "Woman lifting weights",
                            "description_zh_cn": "举重的女人",
                            "keywords": "lifter,weight,woman,female,women,举重,重量,女子,女性,妇女",
                            "unicode": "1f3cb-fe0f-200d-2640-fe0f"
                        },
                        {
                            "description": "Person lifting weights",
                            "description_zh_cn": "举重的人",
                            "keywords": "lifter,weight,举重,重量",
                            "unicode": "1f3cb"
                        },
                        {
                            "description": "Man lifting weights",
                            "description_zh_cn": "男子举重",
                            "keywords": "lifter,weight,man,male,men,举重运动员,重量,男子,男性,男子",
                            "unicode": "1f3cb-fe0f-200d-2642-fe0f"
                        },
                        {
                            "description": "Person fencing",
                            "description_zh_cn": "个人击剑",
                            "keywords": "fencer,fencing,sword,击剑,击剑,剑",
                            "unicode": "1f93a"
                        },
                        {
                            "description": "Women wrestling",
                            "description_zh_cn": "女子摔跤",
                            "keywords": "wrestle,wrestler,woman,female,women,摔跤,摔跤手,女子,女性,妇女",
                            "unicode": "1f93c-200d-2640-fe0f"
                        },
                        {
                            "description": "People wrestling",
                            "description_zh_cn": "人们摔跤",
                            "keywords": "wrestle,wrestler,摔跤,摔跤手",
                            "unicode": "1f93c"
                        },
                        {
                            "description": "Men wrestling",
                            "description_zh_cn": "男子摔跤",
                            "keywords": "wrestle,wrestler,man,male,men,摔跤,摔跤手,男子,男性,男子",
                            "unicode": "1f93c-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman cartwheeling",
                            "description_zh_cn": "女人侧手翻",
                            "keywords": "cartwheel,gymnastics,woman,female,women,侧手翻,体操,女子,女性,妇女",
                            "unicode": "1f938-200d-2640-fe0f"
                        },
                        {
                            "description": "Person cartwheeling",
                            "description_zh_cn": "人侧手翻",
                            "keywords": "cartwheel,gymnastics,侧手翻,体操",
                            "unicode": "1f938"
                        },
                        {
                            "description": "Man cartwheeling",
                            "description_zh_cn": "男子侧手翻",
                            "keywords": "cartwheel,gymnastics,man,male,men,侧手翻,体操,男子,男,男子",
                            "unicode": "1f938-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman bouncing ball",
                            "description_zh_cn": "弹跳球的女人",
                            "keywords": "ball,woman,female,women,球,女人,女性,妇女",
                            "unicode": "26f9-fe0f-200d-2640-fe0f"
                        },
                        {
                            "description": "Person bouncing ball",
                            "description_zh_cn": "弹跳球的人",
                            "keywords": "ball,球",
                            "unicode": "26f9"
                        },
                        {
                            "description": "Man bouncing ball",
                            "description_zh_cn": "弹跳球的人",
                            "keywords": "ball,man,male,men,球,男子,男性,男子",
                            "unicode": "26f9-fe0f-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman playing handball",
                            "description_zh_cn": "打手球的女人",
                            "keywords": "ball,handball,woman,female,women,球,手球,女子,女性,妇女",
                            "unicode": "1f93e-200d-2640-fe0f"
                        },
                        {
                            "description": "Person playing handball",
                            "description_zh_cn": "打手球的人",
                            "keywords": "ball,handball,球、手球",
                            "unicode": "1f93e"
                        },
                        {
                            "description": "Man playing handball",
                            "description_zh_cn": "打手球的男人",
                            "keywords": "ball,handball,man,male,men,球,手球,男子,男性,男子",
                            "unicode": "1f93e-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman climbing",
                            "description_zh_cn": "女人攀登",
                            "keywords": "climbing,rock,woman,female,women,攀岩,岩石,女子,女性,妇女",
                            "unicode": "1f9d7-200d-2640-fe0f"
                        },
                        {
                            "description": "Person climbing",
                            "description_zh_cn": "人攀登",
                            "keywords": "climbing,rock,攀岩、攀岩",
                            "unicode": "1f9d7"
                        },
                        {
                            "description": "Man climbing",
                            "description_zh_cn": "男子攀登",
                            "keywords": "climbing,rock,man,male,men,攀岩,岩,男子,男,男",
                            "unicode": "1f9d7-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman golfing",
                            "description_zh_cn": "打高尔夫球的女人",
                            "keywords": "ball,golf,golfer,golfing,woman,female,women,球,高尔夫,高尔夫球手,高尔夫,女子,女性,妇女",
                            "unicode": "1f3cc-fe0f-200d-2640-fe0f"
                        },
                        {
                            "description": "Person golfing",
                            "description_zh_cn": "打高尔夫球的人",
                            "keywords": "ball,golf,golfer,golfing,球,高尔夫,高尔夫球手,高尔夫",
                            "unicode": "1f3cc"
                        },
                        {
                            "description": "Man golfing",
                            "description_zh_cn": "打高尔夫球的男人",
                            "keywords": "ball,golf,golfer,golfing,man,male,men,球,高尔夫,高尔夫球手,高尔夫,男子,男性,男子",
                            "unicode": "1f3cc-fe0f-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman in lotus position",
                            "description_zh_cn": "莲花坐的女人",
                            "keywords": "meditation,yoga,serenity,woman,female,women,冥想,瑜伽,宁静,女人,女性,妇女",
                            "unicode": "1f9d8-200d-2640-fe0f"
                        },
                        {
                            "description": "Person in lotus position",
                            "description_zh_cn": "莲花坐的人",
                            "keywords": "meditation,yoga,serenity,冥想,瑜伽,宁静",
                            "unicode": "1f9d8"
                        },
                        {
                            "description": "Man in lotus position",
                            "description_zh_cn": "莲花坐的人",
                            "keywords": "meditation,yoga,serenity,man,male,men,冥想,瑜伽,宁静,男子,男性,男子",
                            "unicode": "1f9d8-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman in steamy room",
                            "description_zh_cn": "热气腾腾的房间里的女人",
                            "keywords": "sauna,steam room,hamam,steambath,woman,female,women,桑拿,蒸汽房,土耳其浴室,蒸汽浴,女人,女性,妇女",
                            "unicode": "1f9d6-200d-2640-fe0f"
                        },
                        {
                            "description": "Person in steamy room",
                            "description_zh_cn": "热气腾腾的房间里的人",
                            "keywords": "sauna,steam room,hamam,steambath,桑拿、蒸汽房、土耳其浴室、蒸汽浴",
                            "unicode": "1f9d6"
                        },
                        {
                            "description": "Man in steamy room",
                            "description_zh_cn": "闷热的房间里的男人",
                            "keywords": "sauna,steam room,hamam,steambath,man,male,men,桑拿,蒸汽房,土耳其浴室,蒸汽浴,男人,男性,男性",
                            "unicode": "1f9d6-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman surfing",
                            "description_zh_cn": "冲浪的女人",
                            "keywords": "surfer,surfing,woman,female,women,冲浪者,冲浪,女子,女性,妇女",
                            "unicode": "1f3c4-200d-2640-fe0f"
                        },
                        {
                            "description": "Person surfing",
                            "description_zh_cn": "冲浪的人",
                            "keywords": "surfer,surfing,冲浪者,冲浪",
                            "unicode": "1f3c4"
                        },
                        {
                            "description": "Man surfing",
                            "description_zh_cn": "男子冲浪",
                            "keywords": "surfer,surfing,man,male,men,冲浪者,冲浪,男子,男性,男子",
                            "unicode": "1f3c4-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman swimming",
                            "description_zh_cn": "女子游泳",
                            "keywords": "swim,swimmer,woman,female,women,游泳,游泳者,女子,女性,妇女",
                            "unicode": "1f3ca-200d-2640-fe0f"
                        },
                        {
                            "description": "Person swimming",
                            "description_zh_cn": "游泳的人",
                            "keywords": "swim,swimmer,游泳,游泳者",
                            "unicode": "1f3ca"
                        },
                        {
                            "description": "Man swimming",
                            "description_zh_cn": "男子游泳",
                            "keywords": "swim,swimmer,man,male,men,游泳,游泳者,男子,男,男子",
                            "unicode": "1f3ca-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman playing water polo",
                            "description_zh_cn": "打水球的女人",
                            "keywords": "polo,water,woman,female,women,马球,水,女子,女性,妇女",
                            "unicode": "1f93d-200d-2640-fe0f"
                        },
                        {
                            "description": "Person playing water polo",
                            "description_zh_cn": "打水球的人",
                            "keywords": "polo,water,马球,水",
                            "unicode": "1f93d"
                        },
                        {
                            "description": "Man playing water polo",
                            "description_zh_cn": "打水球的男人",
                            "keywords": "polo,water,man,male,men,马球,水,男子,男,男",
                            "unicode": "1f93d-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman rowing boat",
                            "description_zh_cn": "女子划艇",
                            "keywords": "boat,rowboat,vehicle,rowing,woman,female,women,船,划艇,车辆,划船,女子,女性,妇女",
                            "unicode": "1f6a3-200d-2640-fe0f"
                        },
                        {
                            "description": "Person rowing boat",
                            "description_zh_cn": "人划艇",
                            "keywords": "boat,rowboat,vehicle,rowing,船,划艇,车辆,划船",
                            "unicode": "1f6a3"
                        },
                        {
                            "description": "Man rowing boat",
                            "description_zh_cn": "男子划艇",
                            "keywords": "boat,rowboat,vehicle,rowing,man,male,men,船,划艇,车辆,划船,男子,男性,男子",
                            "unicode": "1f6a3-200d-2642-fe0f"
                        },
                        {
                            "description": "Horse racing",
                            "description_zh_cn": "赛马",
                            "keywords": "horse,jockey,racehorse,racing,马、赛马、赛马、赛马",
                            "unicode": "1f3c7"
                        },
                        {
                            "description": "Woman biking",
                            "description_zh_cn": "骑自行车的女人",
                            "keywords": "bicycle,bicyclist,bike,cyclist,woman,female,women,自行车,骑自行车的人,自行车,骑自行车的人,女子,女性,妇女",
                            "unicode": "1f6b4-200d-2640-fe0f"
                        },
                        {
                            "description": "Person biking",
                            "description_zh_cn": "骑自行车的人",
                            "keywords": "bicycle,bicyclist,bike,cyclist,自行车,骑自行车的人,自行车,骑自行车的人",
                            "unicode": "1f6b4"
                        },
                        {
                            "description": "Man biking",
                            "description_zh_cn": "骑自行车的人",
                            "keywords": "bicycle,bicyclist,bike,cyclist,man,male,men,自行车,骑自行车的人,自行车,骑自行车的人,男子,男性,男子",
                            "unicode": "1f6b4-200d-2642-fe0f"
                        },
                        {
                            "description": "Woman mountain biking",
                            "description_zh_cn": "女子山地自行车",
                            "keywords": "mountain biker,bicycle,bicyclist,bike,cyclist,mountain,woman,female,women,山地车手,自行车,骑自行车的人,自行车,骑自行车的人,山,女子,女性,妇女",
                            "unicode": "1f6b5-200d-2640-fe0f"
                        },
                        {
                            "description": "Person mountain biking",
                            "description_zh_cn": "人山地自行车",
                            "keywords": "mountain biker,bicycle,bicyclist,bike,cyclist,mountain,山地车手,自行车,骑自行车的人,自行车,骑自行车的人,山",
                            "unicode": "1f6b5"
                        },
                        {
                            "description": "Man mountain biking",
                            "description_zh_cn": "男子山地自行车",
                            "keywords": "mountain biker,bicycle,bicyclist,bike,cyclist,mountain,man,male,men,山地车手,自行车,骑自行车的人,自行车,骑自行车的人,山,男子,男,男子",
                            "unicode": "1f6b5-200d-2642-fe0f"
                        },
                        {
                            "description": "Running shirt with sash",
                            "description_zh_cn": "带腰带的跑步衬衫",
                            "keywords": "running,sash,shirt,跑步,腰带,衬衫",
                            "unicode": "1f3bd"
                        },
                        {
                            "description": "Military medal",
                            "description_zh_cn": "军事勋章",
                            "keywords": "celebration,medal,military,庆典,奖牌,军事",
                            "unicode": "1f396"
                        },
                        {
                            "description": "Sports medal",
                            "description_zh_cn": "运动奖牌",
                            "keywords": "medal,勋章",
                            "unicode": "1f3c5"
                        },
                        {
                            "description": "First place medal",
                            "description_zh_cn": "一等奖牌",
                            "keywords": "first,gold,medal,1,1st,第一,金牌,奖牌,1,1st",
                            "unicode": "1f947"
                        },
                        {
                            "description": "Second place medal",
                            "description_zh_cn": "第二名奖牌",
                            "keywords": "medal,second,silver,2,2nd,奖牌,第二,银,2,2nd",
                            "unicode": "1f948"
                        },
                        {
                            "description": "Third place medal",
                            "description_zh_cn": "第三名奖牌",
                            "keywords": "bronze,medal,third,3,3rd,铜牌,奖牌,第三,3,3rd",
                            "unicode": "1f949"
                        },
                        {
                            "description": "Trophy",
                            "description_zh_cn": "杯",
                            "keywords": "prize,trophy,奖品、奖杯",
                            "unicode": "1f3c6"
                        },
                        {
                            "description": "Rosette",
                            "description_zh_cn": "玫瑰花",
                            "keywords": "plant,rosette,植物,玫瑰花",
                            "unicode": "1f3f5"
                        },
                        {
                            "description": "Reminder ribbon",
                            "description_zh_cn": "提醒功能区",
                            "keywords": "celebration,reminder,ribbon,庆祝活动,提醒,丝带",
                            "unicode": "1f397"
                        },
                        {
                            "description": "Ticket",
                            "description_zh_cn": "票",
                            "keywords": "activity,admission,entertainment,ticket,活动、入场、娱乐、门票",
                            "unicode": "1f3ab"
                        },
                        {
                            "description": "Admission tickets",
                            "description_zh_cn": "门票",
                            "keywords": "admission,entertainment,ticket,入场,娱乐,门票",
                            "unicode": "1f39f"
                        },
                        {
                            "description": "Circus tent",
                            "description_zh_cn": "马戏团帐篷",
                            "keywords": "activity,circus,entertainment,tent,活动,马戏团,娱乐,帐篷",
                            "unicode": "1f3aa"
                        },
                        {
                            "description": "Woman juggling",
                            "description_zh_cn": "女人杂耍",
                            "keywords": "balance,juggle,woman,female,women,平衡,杂耍,女人,女性,妇女",
                            "unicode": "1f939-200d-2640-fe0f"
                        },
                        {
                            "description": "Person juggling",
                            "description_zh_cn": "杂耍的人",
                            "keywords": "balance,juggle,平衡,杂耍",
                            "unicode": "1f939"
                        },
                        {
                            "description": "Man juggling",
                            "description_zh_cn": "男子杂耍",
                            "keywords": "balance,juggle,man,male,men,平衡,杂耍,男人,男,男",
                            "unicode": "1f939-200d-2642-fe0f"
                        },
                        {
                            "description": "Performing arts",
                            "description_zh_cn": "表演艺术",
                            "keywords": "activity,art,entertainment,mask,performing,theater,theatre,活动,艺术,娱乐,面具,表演,剧院,剧院",
                            "unicode": "1f3ad"
                        },
                        {
                            "description": "Artist palette",
                            "description_zh_cn": "艺术家调色板",
                            "keywords": "activity,art,entertainment,museum,painting,palette,活动,艺术,娱乐,博物馆,绘画,调色板",
                            "unicode": "1f3a8"
                        },
                        {
                            "description": "Clapper board",
                            "description_zh_cn": "拍板",
                            "keywords": "activity,clapper,entertainment,movie,活动,快板,娱乐,电影",
                            "unicode": "1f3ac"
                        },
                        {
                            "description": "Microphone",
                            "description_zh_cn": "麦克风",
                            "keywords": "activity,entertainment,karaoke,mic,microphone,活动,娱乐,卡拉OK,麦克风,麦克风",
                            "unicode": "1f3a4"
                        },
                        {
                            "description": "Headphone",
                            "description_zh_cn": "耳机",
                            "keywords": "activity,earbud,entertainment,headphone,活动,耳塞,娱乐,耳机",
                            "unicode": "1f3a7"
                        },
                        {
                            "description": "Musical score",
                            "description_zh_cn": "乐谱",
                            "keywords": "activity,entertainment,music,score,活动、娱乐、音乐、乐谱",
                            "unicode": "1f3bc"
                        },
                        {
                            "description": "Musical keyboard",
                            "description_zh_cn": "音乐键盘",
                            "keywords": "activity,entertainment,instrument,keyboard,music,piano,活动,娱乐,仪器,键盘,音乐,钢琴",
                            "unicode": "1f3b9"
                        },
                        {
                            "description": "Accordion",
                            "description_zh_cn": "手风琴",
                            "keywords": "accordian,accordion,concertina,squeeze box,手风琴,手风琴,六角琴,挤压盒",
                            "unicode": "1fa97"
                        },
                        {
                            "description": "Drum",
                            "description_zh_cn": "鼓",
                            "keywords": "drum,drumsticks,music,鼓,鼓槌,音乐",
                            "unicode": "1f941"
                        },
                        {
                            "description": "Long drum",
                            "description_zh_cn": "长鼓",
                            "keywords": "beat,conga,drum,rhythm,djembe,节拍,康加舞,鼓,节奏,非洲鼓",
                            "unicode": "1fa98"
                        },
                        {
                            "description": "Saxophone",
                            "description_zh_cn": "萨克斯",
                            "keywords": "activity,entertainment,instrument,music,sax,saxophone,活动,娱乐,仪器,音乐,萨克斯,萨克斯",
                            "unicode": "1f3b7"
                        },
                        {
                            "description": "Trumpet",
                            "description_zh_cn": "喇叭",
                            "keywords": "activity,entertainment,instrument,music,trumpet,活动,娱乐,乐器,音乐,小号",
                            "unicode": "1f3ba"
                        },
                        {
                            "description": "Guitar",
                            "description_zh_cn": "吉他",
                            "keywords": "activity,entertainment,guitar,instrument,music,活动,娱乐,吉他,乐器,音乐",
                            "unicode": "1f3b8"
                        },
                        {
                            "description": "Banjo",
                            "description_zh_cn": "班卓琴",
                            "keywords": "activity,entertainment,instrument,music,banjo,活动,娱乐,仪器,音乐,班卓琴",
                            "unicode": "1fa95"
                        },
                        {
                            "description": "Violin",
                            "description_zh_cn": "小提琴",
                            "keywords": "activity,entertainment,instrument,music,violin,活动,娱乐,乐器,音乐,小提琴",
                            "unicode": "1f3bb"
                        },
                        {
                            "description": "Game die",
                            "description_zh_cn": "游戏死",
                            "keywords": "dice,die,entertainment,game,骰子,骰子,娱乐,游戏",
                            "unicode": "1f3b2"
                        },
                        {
                            "description": "Puzzle piece",
                            "description_zh_cn": "一块拼图",
                            "keywords": "clue,interlocking,piece,puzzle,jigsaw,线索,联锁,件,拼图,拼图",
                            "unicode": "1f9e9"
                        },
                        {
                            "description": "Chess pawn",
                            "description_zh_cn": "棋子",
                            "keywords": "chess,piece,game,expendable,国际象棋,棋子,游戏,消耗品",
                            "unicode": "265f"
                        },
                        {
                            "description": "Direct hit",
                            "description_zh_cn": "直接命中",
                            "keywords": "activity,bull,bullseye,dart,entertainment,eye,game,hit,target,活动,公牛,靶心,飞镖,娱乐,眼,游戏,命中,目标",
                            "unicode": "1f3af"
                        },
                        {
                            "description": "Bowling",
                            "description_zh_cn": "保龄球",
                            "keywords": "ball,bowling,game,球,保龄球,游戏",
                            "unicode": "1f3b3"
                        },
                        {
                            "description": "Yo-yo",
                            "description_zh_cn": "悠悠球",
                            "keywords": "toy,fluctuate,玩具,波动",
                            "unicode": "1fa80"
                        },
                        {
                            "description": "Kite",
                            "description_zh_cn": "风筝",
                            "keywords": "toy,fly,soar,玩具,飞翔,翱翔",
                            "unicode": "1fa81"
                        },
                        {
                            "description": "Video game",
                            "description_zh_cn": "电子游戏",
                            "keywords": "controller,entertainment,game,video game,控制器,娱乐,游戏,视频游戏",
                            "unicode": "1f3ae"
                        },
                        {
                            "description": "Alien monster",
                            "description_zh_cn": "外星怪物",
                            "keywords": "alien,creature,extraterrestrial,face,fairy tale,fantasy,monster,space,ufo,外星人,生物,外星人,脸,童话故事,幻想,怪物,空间,不明飞行物",
                            "unicode": "1f47e"
                        },
                        {
                            "description": "Slot machine",
                            "description_zh_cn": "老虎机",
                            "keywords": "activity,game,slot,活动,游戏,插槽",
                            "unicode": "1f3b0"
                        }
                    ],
                    "title": "Activity",
                    "title_zh_cn": "活动"
                },
                {
                    "id": "travel",
                    "items": [
                        {
                            "description": "Automobile",
                            "description_zh_cn": "汽车",
                            "keywords": "automobile,car,vehicle,汽车,汽车,车辆",
                            "unicode": "1f697"
                        },
                        {
                            "description": "Recreational vehicle",
                            "description_zh_cn": "休闲车",
                            "keywords": "recreational,rv,vehicle,休闲、房车、车辆",
                            "unicode": "1f699"
                        },
                        {
                            "description": "Taxi",
                            "description_zh_cn": "出租车",
                            "keywords": "taxi,vehicle,出租车、汽车",
                            "unicode": "1f695"
                        },
                        {
                            "description": "Auto rickshaw",
                            "description_zh_cn": "自动人力车",
                            "keywords": "rickshaw,tuk tuk,人力车、嘟嘟车",
                            "unicode": "1f6fa"
                        },
                        {
                            "description": "Bus",
                            "description_zh_cn": "公共汽车",
                            "keywords": "bus,vehicle,公共汽车,汽车",
                            "unicode": "1f68c"
                        },
                        {
                            "description": "Trolleybus",
                            "description_zh_cn": "电车",
                            "keywords": "bus,tram,trolley,trolleybus,vehicle,公共汽车,电车,手推车,无轨电车,车辆",
                            "unicode": "1f68e"
                        },
                        {
                            "description": "Racing car",
                            "description_zh_cn": "赛车",
                            "keywords": "car,racing,赛车",
                            "unicode": "1f3ce"
                        },
                        {
                            "description": "Police car",
                            "description_zh_cn": "警车",
                            "keywords": "car,patrol,police,vehicle,汽车、巡逻、警察、车辆",
                            "unicode": "1f693"
                        },
                        {
                            "description": "Ambulance",
                            "description_zh_cn": "救护车",
                            "keywords": "ambulance,vehicle,救护车,车辆",
                            "unicode": "1f691"
                        },
                        {
                            "description": "Fire engine",
                            "description_zh_cn": "消防车",
                            "keywords": "engine,fire,truck,vehicle,发动机、消防、卡车、车辆",
                            "unicode": "1f692"
                        },
                        {
                            "description": "Minibus",
                            "description_zh_cn": "小巴",
                            "keywords": "bus,minibus,vehicle,巴士,小巴,车辆",
                            "unicode": "1f690"
                        },
                        {
                            "description": "Pickup truck",
                            "description_zh_cn": "皮卡车",
                            "keywords": "pick-up,pickup,truck,vehicle,皮卡,皮卡,卡车,车辆",
                            "unicode": "1f6fb"
                        },
                        {
                            "description": "Delivery truck",
                            "description_zh_cn": "送货车",
                            "keywords": "delivery,truck,vehicle,送货,卡车,车辆",
                            "unicode": "1f69a"
                        },
                        {
                            "description": "Articulated lorry",
                            "description_zh_cn": "铰接式货车",
                            "keywords": "lorry,semi,truck,vehicle,货车、半挂车、卡车、车辆",
                            "unicode": "1f69b"
                        },
                        {
                            "description": "Tractor",
                            "description_zh_cn": "拖拉机",
                            "keywords": "tractor,vehicle,拖拉机,汽车",
                            "unicode": "1f69c"
                        },
                        {
                            "description": "Racing motorcycle",
                            "description_zh_cn": "赛车摩托车",
                            "keywords": "motorcycle,racing,摩托车、赛车",
                            "unicode": "1f3cd"
                        },
                        {
                            "description": "Motor scooter",
                            "description_zh_cn": "小型摩托车",
                            "keywords": "motor,scooter,小型摩托车",
                            "unicode": "1f6f5"
                        },
                        {
                            "description": "Bicycle",
                            "description_zh_cn": "自行车",
                            "keywords": "bicycle,bike,vehicle,自行车,自行车,车辆",
                            "unicode": "1f6b2"
                        },
                        {
                            "description": "Motorized wheelchair",
                            "description_zh_cn": "电动轮椅",
                            "keywords": "accessibility,wheelchair,无障碍,轮椅",
                            "unicode": "1f9bc"
                        },
                        {
                            "description": "Manual wheelchair",
                            "description_zh_cn": "手动轮椅",
                            "keywords": "accessibility,wheelchair,无障碍,轮椅",
                            "unicode": "1f9bd"
                        },
                        {
                            "description": "Kick scooter",
                            "description_zh_cn": "踢踏板车",
                            "keywords": "kick,scooter,踢,踏板车",
                            "unicode": "1f6f4"
                        },
                        {
                            "description": "Skateboard",
                            "description_zh_cn": "滑板",
                            "keywords": "skate,board,滑板",
                            "unicode": "1f6f9"
                        },
                        {
                            "description": "Roller skate",
                            "description_zh_cn": "轮滑鞋",
                            "keywords": "roller,skate,滚轴、滑冰",
                            "unicode": "1f6fc"
                        },
                        {
                            "description": "Police cars revolving light",
                            "description_zh_cn": "警车旋转灯",
                            "keywords": "beacon,car,light,police,revolving,vehicle,siren,alert,信标,汽车,光,警察,旋转,车辆,警报器,警报",
                            "unicode": "1f6a8"
                        },
                        {
                            "description": "Oncoming police car",
                            "description_zh_cn": "迎面而来的警车",
                            "keywords": "car,oncoming,police,vehicle,汽车,迎面而来,警察,车辆",
                            "unicode": "1f694"
                        },
                        {
                            "description": "Oncoming bus",
                            "description_zh_cn": "迎面而来的巴士",
                            "keywords": "bus,oncoming,vehicle,公共汽车,迎面而来,车辆",
                            "unicode": "1f68d"
                        },
                        {
                            "description": "Oncoming automobile",
                            "description_zh_cn": "迎面而来的汽车",
                            "keywords": "automobile,car,oncoming,vehicle,汽车,汽车,迎面而来,车辆",
                            "unicode": "1f698"
                        },
                        {
                            "description": "Oncoming taxi",
                            "description_zh_cn": "迎面而来的出租车",
                            "keywords": "oncoming,taxi,vehicle,迎面而来,出租车,车辆",
                            "unicode": "1f696"
                        },
                        {
                            "description": "Aerial tramway",
                            "description_zh_cn": "空中缆车",
                            "keywords": "aerial,cable,car,gondola,ropeway,tramway,vehicle,空中,电缆,汽车,缆车,索道,有轨电车,车辆",
                            "unicode": "1f6a1"
                        },
                        {
                            "description": "Mountain cableway",
                            "description_zh_cn": "山间索道",
                            "keywords": "cable,gondola,mountain,vehicle,电缆,缆车,山,车辆",
                            "unicode": "1f6a0"
                        },
                        {
                            "description": "Suspension railway",
                            "description_zh_cn": "悬索铁路",
                            "keywords": "railway,suspension,vehicle,铁路、悬挂、车辆",
                            "unicode": "1f69f"
                        },
                        {
                            "description": "Railway car",
                            "description_zh_cn": "有轨电车",
                            "keywords": "car,electric,railway,train,tram,trolleybus,vehicle,汽车、电动、铁路、火车、电车、无轨电车、车辆",
                            "unicode": "1f683"
                        },
                        {
                            "description": "Tram car",
                            "description_zh_cn": "有轨电车",
                            "keywords": "car,tram,trolleybus,vehicle,汽车、电车、无轨电车、车辆",
                            "unicode": "1f68b"
                        },
                        {
                            "description": "Monorail",
                            "description_zh_cn": "单轨电车",
                            "keywords": "monorail,vehicle,单轨,车辆",
                            "unicode": "1f69d"
                        },
                        {
                            "description": "High-speed train",
                            "description_zh_cn": "高速火车",
                            "keywords": "railway,shinkansen,speed,train,vehicle,铁路,新干线,速度,火车,车辆",
                            "unicode": "1f684"
                        },
                        {
                            "description": "High-speed train with bullet nose",
                            "description_zh_cn": "带弹头的高速列车",
                            "keywords": "bullet,railway,shinkansen,speed,train,vehicle,项目符号,铁路,新干线,速度,火车,车辆",
                            "unicode": "1f685"
                        },
                        {
                            "description": "Light rail",
                            "description_zh_cn": "轻轨",
                            "keywords": "railway,vehicle,铁路、车辆",
                            "unicode": "1f688"
                        },
                        {
                            "description": "Mountain railway",
                            "description_zh_cn": "山地铁路",
                            "keywords": "car,mountain,railway,vehicle,汽车,山,铁路,车辆",
                            "unicode": "1f69e"
                        },
                        {
                            "description": "Steam locomotive",
                            "description_zh_cn": "蒸汽机车",
                            "keywords": "engine,locomotive,railway,steam,train,vehicle,发动机、机车、铁路、蒸汽、火车、车辆",
                            "unicode": "1f682"
                        },
                        {
                            "description": "Train",
                            "description_zh_cn": "火车",
                            "keywords": "railway,train,vehicle,铁路、火车、车辆",
                            "unicode": "1f686"
                        },
                        {
                            "description": "Metro",
                            "description_zh_cn": "地铁",
                            "keywords": "metro,subway,vehicle,地铁、地铁、车辆",
                            "unicode": "1f687"
                        },
                        {
                            "description": "Tram",
                            "description_zh_cn": "电车",
                            "keywords": "tram,trolleybus,vehicle,电车,无轨电车,车辆",
                            "unicode": "1f68a"
                        },
                        {
                            "description": "Station",
                            "description_zh_cn": "车站",
                            "keywords": "railway,station,train,vehicle,铁路、车站、火车、车辆",
                            "unicode": "1f689"
                        },
                        {
                            "description": "Helicopter",
                            "description_zh_cn": "直升机",
                            "keywords": "helicopter,vehicle,直升机,车辆",
                            "unicode": "1f681"
                        },
                        {
                            "description": "Small airplane",
                            "description_zh_cn": "小飞机",
                            "keywords": "airplane,vehicle,飞机、汽车",
                            "unicode": "1f6e9"
                        },
                        {
                            "description": "Airplane",
                            "description_zh_cn": "飞机",
                            "keywords": "airplane,vehicle,飞机、汽车",
                            "unicode": "2708"
                        },
                        {
                            "description": "Airplane departure",
                            "description_zh_cn": "飞机起飞",
                            "keywords": "airplane,check-in,departure,departures,vehicle,飞机、值机、出发、出发、车辆",
                            "unicode": "1f6eb"
                        },
                        {
                            "description": "Airplane arriving",
                            "description_zh_cn": "飞机抵达",
                            "keywords": "airplane,arrivals,arriving,landing,vehicle,飞机,到达,到达,着陆,车辆",
                            "unicode": "1f6ec"
                        },
                        {
                            "description": "Parachute",
                            "description_zh_cn": "降落伞",
                            "keywords": "parachute,parasail,skydive,hang glide,降落伞,滑翔伞,跳伞,悬挂式滑翔",
                            "unicode": "1fa82"
                        },
                        {
                            "description": "Seat",
                            "description_zh_cn": "座位",
                            "keywords": "chair,seat,椅子,座位",
                            "unicode": "1f4ba"
                        },
                        {
                            "description": "Satellite",
                            "description_zh_cn": "卫星",
                            "keywords": "satellite,space,vehicle,卫星,空间,车辆",
                            "unicode": "1f6f0"
                        },
                        {
                            "description": "Rocket",
                            "description_zh_cn": "火箭",
                            "keywords": "rocket,space,vehicle,火箭,空间,车辆",
                            "unicode": "1f680"
                        },
                        {
                            "description": "Flying saucer",
                            "description_zh_cn": "飞碟",
                            "keywords": "ufo,alien,extraterrestrial,space,fantasy,ufo,外星人,外星人,空间,幻想",
                            "unicode": "1f6f8"
                        },
                        {
                            "description": "Canoe",
                            "description_zh_cn": "独木舟",
                            "keywords": "boat,canoe,船,独木舟",
                            "unicode": "1f6f6"
                        },
                        {
                            "description": "Sailboat",
                            "description_zh_cn": "帆船",
                            "keywords": "boat,resort,sailboat,sea,vehicle,yacht,船,度假村,帆船,海,车辆,游艇",
                            "unicode": "26f5"
                        },
                        {
                            "description": "Motor boat",
                            "description_zh_cn": "摩托艇",
                            "keywords": "boat,motorboat,vehicle,船,摩托艇,车辆",
                            "unicode": "1f6e5"
                        },
                        {
                            "description": "Speedboat",
                            "description_zh_cn": "快艇",
                            "keywords": "boat,speedboat,vehicle,船,快艇,车辆",
                            "unicode": "1f6a4"
                        },
                        {
                            "description": "Ferry",
                            "description_zh_cn": "渡船",
                            "keywords": "boat,ferry,船、渡轮",
                            "unicode": "26f4"
                        },
                        {
                            "description": "Passenger ship",
                            "description_zh_cn": "客船",
                            "keywords": "passenger,ship,vehicle,乘客、船舶、车辆",
                            "unicode": "1f6f3"
                        },
                        {
                            "description": "Ship",
                            "description_zh_cn": "船",
                            "keywords": "ship,vehicle,船、车",
                            "unicode": "1f6a2"
                        },
                        {
                            "description": "Anchor",
                            "description_zh_cn": "锚",
                            "keywords": "anchor,ship,tool,锚、船、工具",
                            "unicode": "2693"
                        },
                        {
                            "description": "Fuel pump",
                            "description_zh_cn": "燃油泵",
                            "keywords": "fuel,fuelpump,gas,pump,station,燃料,燃料泵,天然气,泵,站",
                            "unicode": "26fd"
                        },
                        {
                            "description": "Construction sign",
                            "description_zh_cn": "施工标志",
                            "keywords": "barrier,construction,障碍,建设",
                            "unicode": "1f6a7"
                        },
                        {
                            "description": "Bus stop",
                            "description_zh_cn": "巴士站",
                            "keywords": "bus,busstop,stop,巴士,巴士站,站",
                            "unicode": "1f68f"
                        },
                        {
                            "description": "Vertical traffic light",
                            "description_zh_cn": "垂直交通灯",
                            "keywords": "light,signal,traffic,灯光、信号、交通",
                            "unicode": "1f6a6"
                        },
                        {
                            "description": "Horizontal traffic light",
                            "description_zh_cn": "水平交通灯",
                            "keywords": "light,signal,traffic,灯光、信号、交通",
                            "unicode": "1f6a5"
                        },
                        {
                            "description": "Stop sign",
                            "description_zh_cn": "停止标志",
                            "keywords": "octagonal,stop,八角形,停止",
                            "unicode": "1f6d1"
                        },
                        {
                            "description": "Ferris wheel",
                            "description_zh_cn": "摩天轮",
                            "keywords": "activity,amusement park,entertainment,ferris,wheel,活动,游乐园,娱乐,摩天轮,轮子",
                            "unicode": "1f3a1"
                        },
                        {
                            "description": "Roller coaster",
                            "description_zh_cn": "过山车",
                            "keywords": "activity,amusement park,coaster,entertainment,roller,活动,游乐园,过山车,娱乐,滚轮",
                            "unicode": "1f3a2"
                        },
                        {
                            "description": "Carousel horse",
                            "description_zh_cn": "旋转木马",
                            "keywords": "activity,carousel,entertainment,horse,活动,旋转木马,娱乐,马",
                            "unicode": "1f3a0"
                        },
                        {
                            "description": "Building construction",
                            "description_zh_cn": "建筑施工",
                            "keywords": "building,construction,建筑,施工",
                            "unicode": "1f3d7"
                        },
                        {
                            "description": "Foggy",
                            "description_zh_cn": "有雾的",
                            "keywords": "fog,weather,雾,天气",
                            "unicode": "1f301"
                        },
                        {
                            "description": "Tokyo tower",
                            "description_zh_cn": "东京塔",
                            "keywords": "tokyo,tower,东京,塔",
                            "unicode": "1f5fc"
                        },
                        {
                            "description": "Factory",
                            "description_zh_cn": "工厂",
                            "keywords": "building,factory,建筑,工厂",
                            "unicode": "1f3ed"
                        },
                        {
                            "description": "Fountain",
                            "description_zh_cn": "喷泉",
                            "keywords": "fountain,喷泉",
                            "unicode": "26f2"
                        },
                        {
                            "description": "Moon viewing ceremony",
                            "description_zh_cn": "赏月仪式",
                            "keywords": "activity,celebration,ceremony,entertainment,moon,活动,庆典,仪式,娱乐,月亮",
                            "unicode": "1f391"
                        },
                        {
                            "description": "Mountain",
                            "description_zh_cn": "山",
                            "keywords": "mountain,山",
                            "unicode": "26f0"
                        },
                        {
                            "description": "Snow capped mountain",
                            "description_zh_cn": "雪山",
                            "keywords": "cold,mountain,snow,寒冷,山,雪",
                            "unicode": "1f3d4"
                        },
                        {
                            "description": "Mount fuji",
                            "description_zh_cn": "富士山",
                            "keywords": "fuji,mountain,富士山",
                            "unicode": "1f5fb"
                        },
                        {
                            "description": "Volcano",
                            "description_zh_cn": "火山",
                            "keywords": "eruption,mountain,volcano,weather,喷发,山,火山,天气",
                            "unicode": "1f30b"
                        },
                        {
                            "description": "Silhouette of japan",
                            "description_zh_cn": "日本的剪影",
                            "keywords": "japan,map,日本,地图",
                            "unicode": "1f5fe"
                        },
                        {
                            "description": "Camping",
                            "description_zh_cn": "野营",
                            "keywords": "camping,野营",
                            "unicode": "1f3d5"
                        },
                        {
                            "description": "Tent",
                            "description_zh_cn": "帐篷",
                            "keywords": "camping,tent,野营帐篷",
                            "unicode": "26fa"
                        },
                        {
                            "description": "National park",
                            "description_zh_cn": "国家公园",
                            "keywords": "national park,park,国家公园,公园",
                            "unicode": "1f3de"
                        },
                        {
                            "description": "Motorway",
                            "description_zh_cn": "高速公路",
                            "keywords": "highway,motorway,road,高速公路,高速公路,道路",
                            "unicode": "1f6e3"
                        },
                        {
                            "description": "Railway track",
                            "description_zh_cn": "铁路轨道",
                            "keywords": "railway,train,铁路,火车",
                            "unicode": "1f6e4"
                        },
                        {
                            "description": "Sunrise",
                            "description_zh_cn": "日出",
                            "keywords": "morning,sun,sunrise,weather,早上,太阳,日出,天气",
                            "unicode": "1f305"
                        },
                        {
                            "description": "Sunrise over mountains",
                            "description_zh_cn": "山上的日出",
                            "keywords": "morning,mountain,sun,sunrise,weather,早上,山,太阳,日出,天气",
                            "unicode": "1f304"
                        },
                        {
                            "description": "Desert",
                            "description_zh_cn": "沙漠",
                            "keywords": "desert,沙漠",
                            "unicode": "1f3dc"
                        },
                        {
                            "description": "Beach with umbrella",
                            "description_zh_cn": "带伞的海滩",
                            "keywords": "beach,umbrella,沙滩伞",
                            "unicode": "1f3d6"
                        },
                        {
                            "description": "Desert island",
                            "description_zh_cn": "沙漠荒岛",
                            "keywords": "desert,island,沙漠荒岛",
                            "unicode": "1f3dd"
                        },
                        {
                            "description": "Sunset over buildings",
                            "description_zh_cn": "建筑物上的日落",
                            "keywords": "building,dusk,sun,sunset,weather,建筑,黄昏,太阳,日落,天气",
                            "unicode": "1f307"
                        },
                        {
                            "description": "Cityscape at dusk",
                            "description_zh_cn": "黄昏的城市景观",
                            "keywords": "building,city,dusk,evening,landscape,sun,sunset,weather,建筑,城市,黄昏,晚上,景观,太阳,日落,天气",
                            "unicode": "1f306"
                        },
                        {
                            "description": "Cityscape",
                            "description_zh_cn": "城市景观",
                            "keywords": "building,city,建筑,城市",
                            "unicode": "1f3d9"
                        },
                        {
                            "description": "Night with stars",
                            "description_zh_cn": "与星星的夜晚",
                            "keywords": "night,star,weather,夜晚,星星,天气",
                            "unicode": "1f303"
                        },
                        {
                            "description": "Bridge at night",
                            "description_zh_cn": "夜晚的桥",
                            "keywords": "bridge,night,weather,桥,夜,天气",
                            "unicode": "1f309"
                        },
                        {
                            "description": "Milky Way",
                            "description_zh_cn": "银河系",
                            "keywords": "milky way,space,weather,银河系,太空,天气",
                            "unicode": "1f30c"
                        },
                        {
                            "description": "Shooting star",
                            "description_zh_cn": "流星",
                            "keywords": "activity,falling,shooting,space,star,活动,坠落,射击,空间,明星",
                            "unicode": "1f320"
                        },
                        {
                            "description": "Firework sparkler",
                            "description_zh_cn": "烟花爆竹",
                            "keywords": "activity,celebration,entertainment,fireworks,sparkle,活动,庆祝活动,娱乐,烟花,火花",
                            "unicode": "1f387"
                        },
                        {
                            "description": "Fireworks",
                            "description_zh_cn": "烟花",
                            "keywords": "activity,celebration,entertainment,fireworks,活动,庆典,娱乐,烟花",
                            "unicode": "1f386"
                        },
                        {
                            "description": "Hut",
                            "description_zh_cn": "小屋",
                            "keywords": "house,hut,roundhouse,yurt,房子,小屋,圆屋,蒙古包",
                            "unicode": "1f6d6"
                        },
                        {
                            "description": "House buildings",
                            "description_zh_cn": "房屋建筑",
                            "keywords": "building,house,建筑,房子",
                            "unicode": "1f3d8"
                        },
                        {
                            "description": "European castle",
                            "description_zh_cn": "欧洲城堡",
                            "keywords": "building,castle,european,建设,城堡,欧洲",
                            "unicode": "1f3f0"
                        },
                        {
                            "description": "Japanese castle",
                            "description_zh_cn": "日本城堡",
                            "keywords": "building,castle,japanese,建设,城堡,日语",
                            "unicode": "1f3ef"
                        },
                        {
                            "description": "Stadium",
                            "description_zh_cn": "体育场",
                            "keywords": "stadium,体育场",
                            "unicode": "1f3df"
                        },
                        {
                            "description": "Statue of liberty",
                            "description_zh_cn": "自由女神像",
                            "keywords": "liberty,statue,自由,雕像",
                            "unicode": "1f5fd"
                        },
                        {
                            "description": "House building",
                            "description_zh_cn": "房屋建筑",
                            "keywords": "building,home,house,建筑,家,房子",
                            "unicode": "1f3e0"
                        },
                        {
                            "description": "House with garden",
                            "description_zh_cn": "带花园的房子",
                            "keywords": "building,garden,home,house,建筑,花园,家,房子",
                            "unicode": "1f3e1"
                        },
                        {
                            "description": "Derelict house building",
                            "description_zh_cn": "废弃的房屋建筑",
                            "keywords": "building,derelict,house,建筑,废弃,房子",
                            "unicode": "1f3da"
                        },
                        {
                            "description": "Office building",
                            "description_zh_cn": "办公楼",
                            "keywords": "building,建造",
                            "unicode": "1f3e2"
                        },
                        {
                            "description": "Department store",
                            "description_zh_cn": "百货商店",
                            "keywords": "building,department,store,建筑,部门,商店",
                            "unicode": "1f3ec"
                        },
                        {
                            "description": "Japanese post office",
                            "description_zh_cn": "日本邮局",
                            "keywords": "building,japanese,post,建筑,日语,邮政",
                            "unicode": "1f3e3"
                        },
                        {
                            "description": "European post office",
                            "description_zh_cn": "欧洲邮局",
                            "keywords": "building,european,post,建设,欧洲,邮政",
                            "unicode": "1f3e4"
                        },
                        {
                            "description": "Hospital",
                            "description_zh_cn": "医院",
                            "keywords": "building,doctor,hospital,medicine,建筑,医生,医院,医药",
                            "unicode": "1f3e5"
                        },
                        {
                            "description": "Bank",
                            "description_zh_cn": "银行",
                            "keywords": "bank,building,银行,建筑",
                            "unicode": "1f3e6"
                        },
                        {
                            "description": "Hotel",
                            "description_zh_cn": "酒店",
                            "keywords": "building,hotel,建筑,酒店",
                            "unicode": "1f3e8"
                        },
                        {
                            "description": "Convenience store",
                            "description_zh_cn": "便利店",
                            "keywords": "building,convenience,store,建筑,便利,商店",
                            "unicode": "1f3ea"
                        },
                        {
                            "description": "School",
                            "description_zh_cn": "学校",
                            "keywords": "building,school,建筑,学校",
                            "unicode": "1f3eb"
                        },
                        {
                            "description": "Love hotel",
                            "description_zh_cn": "情趣酒店",
                            "keywords": "building,hotel,love,建筑,酒店,爱情",
                            "unicode": "1f3e9"
                        },
                        {
                            "description": "Wedding",
                            "description_zh_cn": "婚礼",
                            "keywords": "activity,chapel,romance,wedding,活动,教堂,浪漫,婚礼",
                            "unicode": "1f492"
                        },
                        {
                            "description": "Classical building",
                            "description_zh_cn": "古典建筑",
                            "keywords": "building,classical,建筑,古典",
                            "unicode": "1f3db"
                        },
                        {
                            "description": "Church",
                            "description_zh_cn": "教会",
                            "keywords": "building,christian,church,cross,religion,建设,基督教,教堂,跨,宗教",
                            "unicode": "26ea"
                        },
                        {
                            "description": "Mosque",
                            "description_zh_cn": "清真寺",
                            "keywords": "islam,mosque,muslim,religion,伊斯兰教,清真寺,穆斯林,宗教",
                            "unicode": "1f54c"
                        },
                        {
                            "description": "Hindu temple",
                            "description_zh_cn": "印度教寺庙",
                            "keywords": "hindu,temple,religion,印度教,寺庙,宗教",
                            "unicode": "1f6d5"
                        },
                        {
                            "description": "Synagogue",
                            "description_zh_cn": "犹太教堂",
                            "keywords": "jew,jewish,religion,synagogue,temple,犹太人,犹太人,宗教,犹太教堂,寺庙",
                            "unicode": "1f54d"
                        },
                        {
                            "description": "Kaaba",
                            "description_zh_cn": "天房",
                            "keywords": "islam,kaaba,muslim,religion,伊斯兰教、天房、穆斯林、宗教",
                            "unicode": "1f54b"
                        },
                        {
                            "description": "Shinto shrine",
                            "description_zh_cn": "神社",
                            "keywords": "religion,shinto,shrine,宗教,神道,神社",
                            "unicode": "26e9"
                        },
                        {
                            "description": "Shibuya",
                            "description_zh_cn": "涩谷",
                            "keywords": "109,shibuya,109,涩谷",
                            "unicode": "e50a"
                        }
                    ],
                    "title": "Travel & places",
                    "title_zh_cn": "旅行和地点"
                },
                {
                    "id": "objects",
                    "items": [
                        {
                            "description": "Wristwatch",
                            "description_zh_cn": "手表",
                            "keywords": "clock,watch,时钟,手表",
                            "unicode": "231a"
                        },
                        {
                            "description": "Mobile phone",
                            "description_zh_cn": "手机",
                            "keywords": "cell,communication,mobile,phone,telephone,单元格,通信,移动,电话,电话",
                            "unicode": "1f4f1"
                        },
                        {
                            "description": "Mobile phone with rightwards arrow at left",
                            "description_zh_cn": "左边有向右箭头的手机",
                            "keywords": "arrow,call,cell,communication,mobile,phone,receive,telephone,箭头,呼叫,单元格,通信,移动,电话,接收,电话",
                            "unicode": "1f4f2"
                        },
                        {
                            "description": "Personal computer",
                            "description_zh_cn": "个人电脑",
                            "keywords": "laptop computer,computer,pc,personal,笔记本电脑,计算机,个人电脑,个人",
                            "unicode": "1f4bb"
                        },
                        {
                            "description": "Keyboard",
                            "description_zh_cn": "键盘",
                            "keywords": "computer,keyboard,计算机键盘",
                            "unicode": "2328"
                        },
                        {
                            "description": "Desktop computer",
                            "description_zh_cn": "台式电脑",
                            "keywords": "computer,desktop,电脑,台式机",
                            "unicode": "1f5a5"
                        },
                        {
                            "description": "Printer",
                            "description_zh_cn": "打印机",
                            "keywords": "computer,printer,电脑打印机",
                            "unicode": "1f5a8"
                        },
                        {
                            "description": "Three button mouse",
                            "description_zh_cn": "三键鼠标",
                            "keywords": "3,button,computer,mouse,three,3、按键、电脑、鼠标、三",
                            "unicode": "1f5b1"
                        },
                        {
                            "description": "Trackball",
                            "description_zh_cn": "轨迹球",
                            "keywords": "computer,trackball,电脑,轨迹球",
                            "unicode": "1f5b2"
                        },
                        {
                            "description": "Joystick",
                            "description_zh_cn": "操纵杆",
                            "keywords": "entertainment,game,joystick,video game,娱乐,游戏,操纵杆,视频游戏",
                            "unicode": "1f579"
                        },
                        {
                            "description": "Compression",
                            "description_zh_cn": "压缩",
                            "keywords": "compression,tool,vice,压缩、工具、副",
                            "unicode": "1f5dc"
                        },
                        {
                            "description": "Minidisc",
                            "description_zh_cn": "迷你光盘",
                            "keywords": "computer,disk,entertainment,minidisk,optical,计算机,磁盘,娱乐,迷你磁盘,光学",
                            "unicode": "1f4bd"
                        },
                        {
                            "description": "Floppy disk",
                            "description_zh_cn": "软盘",
                            "keywords": "computer,disk,floppy,计算机、磁盘、软盘",
                            "unicode": "1f4be"
                        },
                        {
                            "description": "Optical disc",
                            "description_zh_cn": "光盘",
                            "keywords": "blu-ray,cd,computer,disk,dvd,optical,蓝光、CD、计算机、磁盘、DVD、光学",
                            "unicode": "1f4bf"
                        },
                        {
                            "description": "DVD",
                            "description_zh_cn": "DVD",
                            "keywords": "blu-ray,cd,computer,disk,dvd,entertainment,optical,蓝光,CD,计算机,磁盘,DVD,娱乐,光学",
                            "unicode": "1f4c0"
                        },
                        {
                            "description": "Videocassette",
                            "description_zh_cn": "录像带",
                            "keywords": "entertainment,tape,vhs,video,videocassette,娱乐,磁带,vhs,视频,录像带",
                            "unicode": "1f4fc"
                        },
                        {
                            "description": "Camera",
                            "description_zh_cn": "相机",
                            "keywords": "camera,entertainment,video,相机、娱乐、视频",
                            "unicode": "1f4f7"
                        },
                        {
                            "description": "Camera with flash",
                            "description_zh_cn": "带闪光灯的相机",
                            "keywords": "camera,flash,video,相机,闪光灯,视频",
                            "unicode": "1f4f8"
                        },
                        {
                            "description": "Video camera",
                            "description_zh_cn": "摄像机",
                            "keywords": "camera,entertainment,video,相机、娱乐、视频",
                            "unicode": "1f4f9"
                        },
                        {
                            "description": "Movie camera",
                            "description_zh_cn": "电影摄影机",
                            "keywords": "activity,camera,cinema,entertainment,movie,活动,相机,电影院,娱乐,电影",
                            "unicode": "1f3a5"
                        },
                        {
                            "description": "Film projector",
                            "description_zh_cn": "电影放映机",
                            "keywords": "cinema,entertainment,film,movie,projector,video,电影院,娱乐,电影,电影,投影仪,视频",
                            "unicode": "1f4fd"
                        },
                        {
                            "description": "Film frames",
                            "description_zh_cn": "胶卷架",
                            "keywords": "cinema,entertainment,film,frames,movie,电影院,娱乐,电影,帧,电影",
                            "unicode": "1f39e"
                        },
                        {
                            "description": "Telephone receiver",
                            "description_zh_cn": "电话听筒",
                            "keywords": "communication,phone,receiver,telephone,通讯,电话,接收器,电话",
                            "unicode": "1f4de"
                        },
                        {
                            "description": "Telephone",
                            "description_zh_cn": "电话",
                            "keywords": "phone,telephone,电话,电话",
                            "unicode": "260e"
                        },
                        {
                            "description": "Pager",
                            "description_zh_cn": "寻呼机",
                            "keywords": "communication,pager,通讯,寻呼机",
                            "unicode": "1f4df"
                        },
                        {
                            "description": "Fax machine",
                            "description_zh_cn": "传真机",
                            "keywords": "communication,fax,通讯、传真",
                            "unicode": "1f4e0"
                        },
                        {
                            "description": "Television",
                            "description_zh_cn": "电视",
                            "keywords": "entertainment,television,tv,video,娱乐、电视、电视、视频",
                            "unicode": "1f4fa"
                        },
                        {
                            "description": "Radio",
                            "description_zh_cn": "收音机",
                            "keywords": "entertainment,radio,video,娱乐、广播、视频",
                            "unicode": "1f4fb"
                        },
                        {
                            "description": "Studio microphone",
                            "description_zh_cn": "录音室麦克风",
                            "keywords": "mic,microphone,music,studio,麦克风,麦克风,音乐,工作室",
                            "unicode": "1f399"
                        },
                        {
                            "description": "Level slider",
                            "description_zh_cn": "水平滑块",
                            "keywords": "level,music,slider,水平,音乐,滑块",
                            "unicode": "1f39a"
                        },
                        {
                            "description": "Control knobs",
                            "description_zh_cn": "控制旋钮",
                            "keywords": "control,knobs,music,控制、旋钮、音乐",
                            "unicode": "1f39b"
                        },
                        {
                            "description": "Stopwatch",
                            "description_zh_cn": "跑表",
                            "keywords": "clock,stopwatch,时钟,秒表",
                            "unicode": "23f1"
                        },
                        {
                            "description": "Timer clock",
                            "description_zh_cn": "定时器时钟",
                            "keywords": "clock,timer,时钟,定时器",
                            "unicode": "23f2"
                        },
                        {
                            "description": "Alarm clock",
                            "description_zh_cn": "闹钟",
                            "keywords": "alarm,clock,闹钟,时钟",
                            "unicode": "23f0"
                        },
                        {
                            "description": "Mantelpiece clock",
                            "description_zh_cn": "壁炉钟",
                            "keywords": "clock,钟",
                            "unicode": "1f570"
                        },
                        {
                            "description": "Hourglass with flowing sand",
                            "description_zh_cn": "流沙的沙漏",
                            "keywords": "hourglass,sand,timer,沙漏,沙子,计时器",
                            "unicode": "23f3"
                        },
                        {
                            "description": "Hourglass",
                            "description_zh_cn": "滴漏",
                            "keywords": "hourglass,sand,timer,沙漏,沙子,计时器",
                            "unicode": "231b"
                        },
                        {
                            "description": "Abacus",
                            "description_zh_cn": "算盘",
                            "keywords": "calculation,count,counting frame,math,计算,计数,计数框架,数学",
                            "unicode": "1f9ee"
                        },
                        {
                            "description": "Satellite antenna",
                            "description_zh_cn": "卫星天线",
                            "keywords": "antenna,communication,dish,satellite,天线,通讯,碟,卫星",
                            "unicode": "1f4e1"
                        },
                        {
                            "description": "Battery",
                            "description_zh_cn": "电池",
                            "keywords": "battery,电池",
                            "unicode": "1f50b"
                        },
                        {
                            "description": "Electric plug",
                            "description_zh_cn": "电插头",
                            "keywords": "electric,electricity,plug,电,电,插头",
                            "unicode": "1f50c"
                        },
                        {
                            "description": "Electric light bulb",
                            "description_zh_cn": "电灯泡",
                            "keywords": "bulb,comic,electric,idea,light,灯泡,漫画,电动,想法,光",
                            "unicode": "1f4a1"
                        },
                        {
                            "description": "Electric torch",
                            "description_zh_cn": "手电筒",
                            "keywords": "electric,flashlight,light,tool,torch,电动,手电筒,光,工具,手电筒",
                            "unicode": "1f526"
                        },
                        {
                            "description": "Candle",
                            "description_zh_cn": "蜡烛",
                            "keywords": "candle,light,蜡烛,光",
                            "unicode": "1f56f"
                        },
                        {
                            "description": "Fire extinguisher",
                            "description_zh_cn": "灭火器",
                            "keywords": "extinguish,fire,quench,灭火、灭火、灭火",
                            "unicode": "1f9ef"
                        },
                        {
                            "description": "Wastebasket",
                            "description_zh_cn": "废纸篓",
                            "keywords": "wastebasket,trash,can,litter,bin,废纸篓、垃圾桶、罐头、垃圾、垃圾桶",
                            "unicode": "1f5d1"
                        },
                        {
                            "description": "Oil drum",
                            "description_zh_cn": "油桶",
                            "keywords": "drum,oil,鼓,油",
                            "unicode": "1f6e2"
                        },
                        {
                            "description": "Shopping cart",
                            "description_zh_cn": "购物车",
                            "keywords": "cart,shopping,trolley,购物车、购物车、手推车",
                            "unicode": "1f6d2"
                        },
                        {
                            "description": "Money with wings",
                            "description_zh_cn": "带翅膀的钱",
                            "keywords": "bank,banknote,bill,dollar,fly,money,note,wings,银行,钞票,条例草案,美元,飞,钱,注意,翅膀",
                            "unicode": "1f4b8"
                        },
                        {
                            "description": "Banknote with dollar sign",
                            "description_zh_cn": "带美元符号的钞票",
                            "keywords": "bank,banknote,bill,currency,dollar,money,note,银行,钞票,条例草案,货币,美元,钱,注",
                            "unicode": "1f4b5"
                        },
                        {
                            "description": "Banknote with yen sign",
                            "description_zh_cn": "带有日元符号的钞票",
                            "keywords": "bank,banknote,bill,currency,money,note,yen,银行,钞票,条例草案,货币,钱,注意,日元",
                            "unicode": "1f4b4"
                        },
                        {
                            "description": "Banknote with euro sign",
                            "description_zh_cn": "带有欧元符号的钞票",
                            "keywords": "bank,banknote,bill,currency,euro,money,note,银行,钞票,条例草案,货币,欧元,钱,注",
                            "unicode": "1f4b6"
                        },
                        {
                            "description": "Banknote with pound sign",
                            "description_zh_cn": "带有英镑符号的钞票",
                            "keywords": "bank,banknote,bill,currency,money,note,pound,银行,钞票,条例草案,货币,钱,注意,英镑",
                            "unicode": "1f4b7"
                        },
                        {
                            "description": "Money bag",
                            "description_zh_cn": "钱袋子",
                            "keywords": "bag,dollar,money,moneybag,袋子,美元,钱,钱袋",
                            "unicode": "1f4b0"
                        },
                        {
                            "description": "Coin",
                            "description_zh_cn": "硬币",
                            "keywords": "coin,gold,metal,money,silver,treasure,硬币,黄金,金属,钱,银,宝藏",
                            "unicode": "1fa99"
                        },
                        {
                            "description": "Credit card",
                            "description_zh_cn": "信用卡",
                            "keywords": "bank,card,credit,money,银行,卡,信用,钱",
                            "unicode": "1f4b3"
                        },
                        {
                            "description": "Receipt",
                            "description_zh_cn": "收据",
                            "keywords": "accounting,bookkeeping,evidence,proof,会计、簿记、证据、证明",
                            "unicode": "1f9fe"
                        },
                        {
                            "description": "Gem stone",
                            "description_zh_cn": "宝石",
                            "keywords": "diamond,gem,jewel,romance,钻石,宝石,珠宝,浪漫",
                            "unicode": "1f48e"
                        },
                        {
                            "description": "Scales",
                            "description_zh_cn": "秤",
                            "keywords": "balance,justice,libra,scales,tool,weight,zodiac,平衡,正义,天秤座,秤,工具,重量,生肖",
                            "unicode": "2696"
                        },
                        {
                            "description": "Probing cane",
                            "description_zh_cn": "探手杖",
                            "keywords": "accessibility,blind,无障碍,盲",
                            "unicode": "1f9af"
                        },
                        {
                            "description": "Toolbox",
                            "description_zh_cn": "工具箱",
                            "keywords": "chest,mechanic,tool,胸部,机械师,工具",
                            "unicode": "1f9f0"
                        },
                        {
                            "description": "Wrench",
                            "description_zh_cn": "扳手",
                            "keywords": "tool,wrench,工具、扳手",
                            "unicode": "1f527"
                        },
                        {
                            "description": "Screwdriver",
                            "description_zh_cn": "螺丝刀",
                            "keywords": "screw,screwdriver,tool,螺丝,螺丝刀,工具",
                            "unicode": "1fa9b"
                        },
                        {
                            "description": "Hammer",
                            "description_zh_cn": "锤子",
                            "keywords": "hammer,tool,锤子,工具",
                            "unicode": "1f528"
                        },
                        {
                            "description": "Hammer and pick",
                            "description_zh_cn": "锤子和挑选",
                            "keywords": "hammer,pick,tool,锤子,镐,工具",
                            "unicode": "2692"
                        },
                        {
                            "description": "Hammer and wrench",
                            "description_zh_cn": "锤子和扳手",
                            "keywords": "hammer,tool,wrench,锤子、工具、扳手",
                            "unicode": "1f6e0"
                        },
                        {
                            "description": "Pick",
                            "description_zh_cn": "挑选",
                            "keywords": "mining,pick,tool,采矿,挑选,工具",
                            "unicode": "26cf"
                        },
                        {
                            "description": "Axe",
                            "description_zh_cn": "斧头",
                            "keywords": "axe,chop,hatchet,split,wood,tool,斧头,斩,斧头,拆分,木材,工具",
                            "unicode": "1fa93"
                        },
                        {
                            "description": "Carpentry saw",
                            "description_zh_cn": "木工锯",
                            "keywords": "carpenter,lumber,saw,tool,木匠,木材,锯,工具",
                            "unicode": "1fa9a"
                        },
                        {
                            "description": "Nut and bolt",
                            "description_zh_cn": "螺母和螺栓",
                            "keywords": "bolt,nut,tool,螺栓、螺母、工具",
                            "unicode": "1f529"
                        },
                        {
                            "description": "Gear",
                            "description_zh_cn": "齿轮",
                            "keywords": "gear,tool,齿轮、工具",
                            "unicode": "2699"
                        },
                        {
                            "description": "Chains",
                            "description_zh_cn": "链条",
                            "keywords": "chain,链",
                            "unicode": "26d3"
                        },
                        {
                            "description": "Hook",
                            "description_zh_cn": "钩",
                            "keywords": "catch,crook,curve,ensnare,fishing,tool,捕捉,骗子,曲线,诱捕,钓鱼,工具",
                            "unicode": "1fa9d"
                        },
                        {
                            "description": "Ladder",
                            "description_zh_cn": "梯子",
                            "keywords": "climb,ladder,rung,step,tool,攀爬,梯子,梯级,步骤,工具",
                            "unicode": "1fa9c"
                        },
                        {
                            "description": "Bricks",
                            "description_zh_cn": "砖块",
                            "keywords": "clay,construction,mortar,wall,粘土,建筑,砂浆,墙",
                            "unicode": "1f9f1"
                        },
                        {
                            "description": "Rock",
                            "description_zh_cn": "岩石",
                            "keywords": "boulder,construction,heavy,rock,solid,stone,巨石,建设,重,岩石,固体,石头",
                            "unicode": "1faa8"
                        },
                        {
                            "description": "Wood",
                            "description_zh_cn": "木头",
                            "keywords": "construction,log,lumber,timber,wood,建筑,日志,木材,木材,木材",
                            "unicode": "1fab5"
                        },
                        {
                            "description": "Water pistol",
                            "description_zh_cn": "水枪",
                            "keywords": "water,pistol,squirt,gun,水、手枪、喷、枪",
                            "unicode": "1f52b"
                        },
                        {
                            "description": "Firecracker",
                            "description_zh_cn": "鞭炮",
                            "keywords": "dynamite,explosive,fireworks,炸药,爆炸物,烟花",
                            "unicode": "1f9e8"
                        },
                        {
                            "description": "Bomb",
                            "description_zh_cn": "炸弹",
                            "keywords": "bomb,炸弹",
                            "unicode": "1f4a3"
                        },
                        {
                            "description": "Hocho",
                            "description_zh_cn": "宝长",
                            "keywords": "kitchen knife,cooking,hocho,knife,菜刀,烹饪,hocho,刀",
                            "unicode": "1f52a"
                        },
                        {
                            "description": "Dagger knife",
                            "description_zh_cn": "匕首刀",
                            "keywords": "dagger,knife,匕首,刀",
                            "unicode": "1f5e1"
                        },
                        {
                            "description": "Crossed swords",
                            "description_zh_cn": "交叉的剑",
                            "keywords": "crossed,swords,交叉,剑",
                            "unicode": "2694"
                        },
                        {
                            "description": "Shield",
                            "description_zh_cn": "盾",
                            "keywords": "shield,盾",
                            "unicode": "1f6e1"
                        },
                        {
                            "description": "Smoking symbol",
                            "description_zh_cn": "吸烟符号",
                            "keywords": "activity,smoking,活动、吸烟",
                            "unicode": "1f6ac"
                        },
                        {
                            "description": "Coffin",
                            "description_zh_cn": "棺材",
                            "keywords": "coffin,death,棺材,死亡",
                            "unicode": "26b0"
                        },
                        {
                            "description": "Headstone",
                            "description_zh_cn": "墓石",
                            "keywords": "cemetery,death,grave,graveyard,tombstone,halloween,公墓,死亡,坟墓,墓地,墓碑,万圣节",
                            "unicode": "1faa6"
                        },
                        {
                            "description": "Funeral urn",
                            "description_zh_cn": "骨灰盒",
                            "keywords": "death,funeral,urn,死亡,葬礼,骨灰盒",
                            "unicode": "26b1"
                        },
                        {
                            "description": "Amphora",
                            "description_zh_cn": "双耳瓶",
                            "keywords": "amphora,aquarius,cooking,drink,jug,tool,zodiac,双耳瓶,水瓶座,烹饪,饮料,水壶,工具,生肖",
                            "unicode": "1f3fa"
                        },
                        {
                            "description": "Crystal ball",
                            "description_zh_cn": "水晶球",
                            "keywords": "ball,crystal,fairy tale,fantasy,fortune,tool,球,水晶,童话,幻想,财富,工具",
                            "unicode": "1f52e"
                        },
                        {
                            "description": "Magic wand",
                            "description_zh_cn": "魔法棒",
                            "keywords": "magic,wand,witch,wizard,魔法,魔杖,女巫,巫师",
                            "unicode": "1fa84"
                        },
                        {
                            "description": "Prayer beads",
                            "description_zh_cn": "念珠",
                            "keywords": "beads,clothing,necklace,prayer,religion,珠子,衣服,项链,祈祷,宗教",
                            "unicode": "1f4ff"
                        },
                        {
                            "description": "Nazar amulet",
                            "description_zh_cn": "纳扎尔护身符",
                            "keywords": "bead,charm,evil-eye,nazar,talisman,珠子,魅力,邪恶之眼,纳扎尔,护身符",
                            "unicode": "1f9ff"
                        },
                        {
                            "description": "Barber pole",
                            "description_zh_cn": "理发店招牌",
                            "keywords": "barber,haircut,pole,理发师,理发,杆",
                            "unicode": "1f488"
                        },
                        {
                            "description": "Magnet",
                            "description_zh_cn": "磁铁",
                            "keywords": "attraction,horseshoe,magnetic,吸引力,马蹄铁,磁性",
                            "unicode": "1f9f2"
                        },
                        {
                            "description": "Alembic",
                            "description_zh_cn": "阿朗比克",
                            "keywords": "alembic,chemistry,tool,蒸馏器,化学,工具",
                            "unicode": "2697"
                        },
                        {
                            "description": "Test tube",
                            "description_zh_cn": "试管",
                            "keywords": "chemist,chemistry,experiment,lab,science,化学家,化学,实验,实验室,科学",
                            "unicode": "1f9ea"
                        },
                        {
                            "description": "Petri dish",
                            "description_zh_cn": "培养皿",
                            "keywords": "bacteria,biologist,biology,culture,lab,细菌,生物学家,生物学,文化,实验室",
                            "unicode": "1f9eb"
                        },
                        {
                            "description": "DNA",
                            "description_zh_cn": "脱氧核糖核酸",
                            "keywords": "biologist,evolution,gene,genetics,life,生物学家,进化,基因,遗传学,生命",
                            "unicode": "1f9ec"
                        },
                        {
                            "description": "Telescope",
                            "description_zh_cn": "望远镜",
                            "keywords": "telescope,tool,望远镜、工具",
                            "unicode": "1f52d"
                        },
                        {
                            "description": "Microscope",
                            "description_zh_cn": "显微镜",
                            "keywords": "microscope,tool,显微镜、工具",
                            "unicode": "1f52c"
                        },
                        {
                            "description": "Hole",
                            "description_zh_cn": "洞",
                            "keywords": "hole,洞",
                            "unicode": "1f573"
                        },
                        {
                            "description": "Pill",
                            "description_zh_cn": "丸",
                            "keywords": "doctor,medicine,pill,sick,医生、药、药、病",
                            "unicode": "1f48a"
                        },
                        {
                            "description": "Syringe",
                            "description_zh_cn": "注射器",
                            "keywords": "doctor,medicine,needle,shot,sick,syringe,tool,vaccine,医生,医学,针,射击,生病,注射器,工具,疫苗",
                            "unicode": "1f489"
                        },
                        {
                            "description": "Drop of blood",
                            "description_zh_cn": "一滴血",
                            "keywords": "doctor,medicine,blood,menstruation,医生、药物、血液、月经",
                            "unicode": "1fa78"
                        },
                        {
                            "description": "Adhesive bandage",
                            "description_zh_cn": "粘性绷带",
                            "keywords": "doctor,medicine,band aid,bandage,plaster,医生,医学,创可贴,绷带,石膏",
                            "unicode": "1fa79"
                        },
                        {
                            "description": "Stethoscope",
                            "description_zh_cn": "听诊器",
                            "keywords": "doctor,medicine,heart,医生,医学,心脏",
                            "unicode": "1fa7a"
                        },
                        {
                            "description": "Thermometer",
                            "description_zh_cn": "温度计",
                            "keywords": "thermometer,weather,temperature,温度计,天气,温度",
                            "unicode": "1f321"
                        },
                        {
                            "description": "Label",
                            "description_zh_cn": "标签",
                            "keywords": "label,标签",
                            "unicode": "1f3f7"
                        },
                        {
                            "description": "Bookmark",
                            "description_zh_cn": "书签",
                            "keywords": "bookmark,mark,书签,标记",
                            "unicode": "1f516"
                        },
                        {
                            "description": "Toilet",
                            "description_zh_cn": "洗手间",
                            "keywords": "toilet,洗手间",
                            "unicode": "1f6bd"
                        },
                        {
                            "description": "Plunger",
                            "description_zh_cn": "柱塞",
                            "keywords": "force cup,plumber,plunger,suction,toilet,力杯,水管工,柱塞,吸力,马桶",
                            "unicode": "1faa0"
                        },
                        {
                            "description": "Shower",
                            "description_zh_cn": "淋浴",
                            "keywords": "shower,water,淋浴,水",
                            "unicode": "1f6bf"
                        },
                        {
                            "description": "Bathtub",
                            "description_zh_cn": "浴缸",
                            "keywords": "bath,bathtub,浴缸,浴缸",
                            "unicode": "1f6c1"
                        },
                        {
                            "description": "Bath",
                            "description_zh_cn": "浴",
                            "keywords": "bath,bathtub,浴缸,浴缸",
                            "unicode": "1f6c0"
                        },
                        {
                            "description": "Toothbrush",
                            "description_zh_cn": "牙刷",
                            "keywords": "bathroom,brush,clean,dental,hygiene,teeth,toothbrush,浴室,刷子,清洁,牙科,卫生,牙齿,牙刷",
                            "unicode": "1faa5"
                        },
                        {
                            "description": "Razor",
                            "description_zh_cn": "剃刀",
                            "keywords": "razor,sharp,shave,剃刀,锋利,剃须",
                            "unicode": "1fa92"
                        },
                        {
                            "description": "Lotion bottle",
                            "description_zh_cn": "乳液瓶",
                            "keywords": "lotion,moisturizer,shampoo,sunscreen,乳液、保湿霜、洗发水、防晒霜",
                            "unicode": "1f9f4"
                        },
                        {
                            "description": "Roll of paper",
                            "description_zh_cn": "一卷纸",
                            "keywords": "paper towels,toilet paper,纸巾、卫生纸",
                            "unicode": "1f9fb"
                        },
                        {
                            "description": "Soap",
                            "description_zh_cn": "肥皂",
                            "keywords": "bar,bathing,cleaning,lather,soapdish,酒吧、沐浴、清洁、泡沫、肥皂",
                            "unicode": "1f9fc"
                        },
                        {
                            "description": "Sponge",
                            "description_zh_cn": "海绵",
                            "keywords": "absorbing,cleaning,porous,吸收、清洁、多孔",
                            "unicode": "1f9fd"
                        },
                        {
                            "description": "Broom",
                            "description_zh_cn": "扫帚",
                            "keywords": "cleaning,sweeping,witch,打扫、扫地、女巫",
                            "unicode": "1f9f9"
                        },
                        {
                            "description": "Basket",
                            "description_zh_cn": "篮子",
                            "keywords": "farming,laundry,picnic,农业、洗衣、野餐",
                            "unicode": "1f9fa"
                        },
                        {
                            "description": "Bucket",
                            "description_zh_cn": "桶",
                            "keywords": "bucket,cask,pail,vat,桶、木桶、桶、桶",
                            "unicode": "1faa3"
                        },
                        {
                            "description": "Key",
                            "description_zh_cn": "钥匙",
                            "keywords": "key,lock,password,钥匙,锁,密码",
                            "unicode": "1f511"
                        },
                        {
                            "description": "Old key",
                            "description_zh_cn": "旧钥匙",
                            "keywords": "clue,key,lock,old,线索,钥匙,锁,旧",
                            "unicode": "1f5dd"
                        },
                        {
                            "description": "Mouse trap",
                            "description_zh_cn": "捕鼠器",
                            "keywords": "bait,mouse,mousetrap,rodent,snare,trap,诱饵,鼠标,捕鼠器,啮齿动物,圈套,陷阱",
                            "unicode": "1faa4"
                        },
                        {
                            "description": "Couch and lamp",
                            "description_zh_cn": "沙发和灯",
                            "keywords": "couch,hotel,lamp,沙发,酒店,灯",
                            "unicode": "1f6cb"
                        },
                        {
                            "description": "Chair",
                            "description_zh_cn": "椅子",
                            "keywords": "chair,seat,sit,椅子,座位,坐",
                            "unicode": "1fa91"
                        },
                        {
                            "description": "Sleeping accommodation",
                            "description_zh_cn": "卧铺",
                            "keywords": "person in bed,hotel,sleep,bed,人在床上,酒店,睡眠,床上",
                            "unicode": "1f6cc"
                        },
                        {
                            "description": "Bed",
                            "description_zh_cn": "床",
                            "keywords": "bed,hotel,sleep,床,酒店,睡觉",
                            "unicode": "1f6cf"
                        },
                        {
                            "description": "Door",
                            "description_zh_cn": "门",
                            "keywords": "door,门",
                            "unicode": "1f6aa"
                        },
                        {
                            "description": "Mirror",
                            "description_zh_cn": "镜子",
                            "keywords": "mirror,reflection,reflector,speculum,镜子,反射,反射器,窥器",
                            "unicode": "1fa9e"
                        },
                        {
                            "description": "Window",
                            "description_zh_cn": "窗户",
                            "keywords": "frame,fresh air,glass,opening,transparent,view,window,框架,新鲜空气,玻璃,开幕,透明,视图,窗口",
                            "unicode": "1fa9f"
                        },
                        {
                            "description": "Luggage",
                            "description_zh_cn": "行李",
                            "keywords": "packing,travel,suitcase,包装,旅行,手提箱",
                            "unicode": "1f9f3"
                        },
                        {
                            "description": "Bellhop bell",
                            "description_zh_cn": "门铃",
                            "keywords": "bell,bellhop,hotel,钟,bellhop,酒店",
                            "unicode": "1f6ce"
                        },
                        {
                            "description": "Frame with picture",
                            "description_zh_cn": "带图片的框架",
                            "keywords": "art,frame,museum,painting,picture,艺术,帧,博物馆,绘画,图片",
                            "unicode": "1f5bc"
                        },
                        {
                            "description": "Compass",
                            "description_zh_cn": "罗盘",
                            "keywords": "magnetic,navigation,orienteering,磁力、导航、定向",
                            "unicode": "1f9ed"
                        },
                        {
                            "description": "World map",
                            "description_zh_cn": "世界地图",
                            "keywords": "map,world,地图,世界",
                            "unicode": "1f5fa"
                        },
                        {
                            "description": "Umbrella on ground",
                            "description_zh_cn": "地上的雨伞",
                            "keywords": "rain,sun,umbrella,weather,雨,太阳,伞,天气",
                            "unicode": "26f1"
                        },
                        {
                            "description": "Moyai",
                            "description_zh_cn": "摩艾",
                            "keywords": "moai,face,moyai,statue,摩艾,脸,摩艾,雕像",
                            "unicode": "1f5ff"
                        },
                        {
                            "description": "Shopping bags",
                            "description_zh_cn": "购物袋",
                            "keywords": "bag,hotel,shopping,包,酒店,购物",
                            "unicode": "1f6cd"
                        },
                        {
                            "description": "Balloon",
                            "description_zh_cn": "气球",
                            "keywords": "activity,balloon,celebration,entertainment,活动,气球,庆祝活动,娱乐",
                            "unicode": "1f388"
                        },
                        {
                            "description": "Carp streamer",
                            "description_zh_cn": "鲤鱼旗",
                            "keywords": "activity,carp,celebration,entertainment,flag,streamer,活动,鲤鱼,庆祝活动,娱乐,标志,飘带",
                            "unicode": "1f38f"
                        },
                        {
                            "description": "Ribbon",
                            "description_zh_cn": "丝带",
                            "keywords": "celebration,ribbon,庆祝活动,丝带",
                            "unicode": "1f380"
                        },
                        {
                            "description": "Red envelope",
                            "description_zh_cn": "红信封",
                            "keywords": "gift,good luck,hóngbāo,lai see,money,礼物,好运,红包,丽晶,钱",
                            "unicode": "1f9e7"
                        },
                        {
                            "description": "Wrapped present",
                            "description_zh_cn": "包装礼物",
                            "keywords": "box,celebration,entertainment,gift,present,wrapped,框,庆祝活动,娱乐,礼物,礼物,包装",
                            "unicode": "1f381"
                        },
                        {
                            "description": "Confetti ball",
                            "description_zh_cn": "五彩纸屑球",
                            "keywords": "activity,ball,celebration,confetti,entertainment,活动,球,庆祝活动,五彩纸屑,娱乐",
                            "unicode": "1f38a"
                        },
                        {
                            "description": "Party popper",
                            "description_zh_cn": "礼花",
                            "keywords": "activity,celebration,entertainment,party,popper,tada,活动,庆祝活动,娱乐,派对,波普尔,多田",
                            "unicode": "1f389"
                        },
                        {
                            "description": "Piñata",
                            "description_zh_cn": "皮纳塔",
                            "keywords": "celebration,party,piñata,pinata,庆典,派对,皮纳塔,皮纳塔",
                            "unicode": "1fa85"
                        },
                        {
                            "description": "Nesting dolls",
                            "description_zh_cn": "套娃",
                            "keywords": "doll,nesting,nesting dolls,russia,娃娃,嵌套,嵌套娃娃,俄罗斯",
                            "unicode": "1fa86"
                        },
                        {
                            "description": "Japanese dolls",
                            "description_zh_cn": "日本娃娃",
                            "keywords": "activity,celebration,doll,entertainment,festival,japanese,活动,庆祝活动,娃娃,娱乐,节日,日语",
                            "unicode": "1f38e"
                        },
                        {
                            "description": "Wind chime",
                            "description_zh_cn": "风铃",
                            "keywords": "activity,bell,celebration,chime,entertainment,wind,活动,贝尔,庆祝活动,钟声,娱乐,风",
                            "unicode": "1f390"
                        },
                        {
                            "description": "Izakaya lantern",
                            "description_zh_cn": "居酒屋灯笼",
                            "keywords": "red paper lantern,bar,japanese,lantern,light,red,红纸灯笼,酒吧,日语,灯笼,光,红色",
                            "unicode": "1f3ee"
                        },
                        {
                            "description": "Diya lamp",
                            "description_zh_cn": "迪亚灯",
                            "keywords": "diya,lamp,oil,diya,灯,油",
                            "unicode": "1fa94"
                        },
                        {
                            "description": "Envelope",
                            "description_zh_cn": "信封",
                            "keywords": "e-mail,email,envelope,电子邮件,电子邮件,信封",
                            "unicode": "2709"
                        },
                        {
                            "description": "Envelope with downwards arrow above",
                            "description_zh_cn": "上面带有向下箭头的信封",
                            "keywords": "arrow,communication,down,e-mail,email,envelope,letter,mail,outgoing,sent,箭头,通信,向下,电子邮件,电子邮件,信封,信件,邮件,传出,已发送",
                            "unicode": "1f4e9"
                        },
                        {
                            "description": "Incoming envelope",
                            "description_zh_cn": "传入信封",
                            "keywords": "communication,e-mail,email,envelope,incoming,letter,mail,receive,通信,电子邮件,电子邮件,信封,传入,信件,邮件,接收",
                            "unicode": "1f4e8"
                        },
                        {
                            "description": "E-mail symbol",
                            "description_zh_cn": "电子邮件符号",
                            "keywords": "communication,e-mail,email,letter,mail,通信,电子邮件,电子邮件,信件,邮件",
                            "unicode": "1f4e7"
                        },
                        {
                            "description": "Love letter",
                            "description_zh_cn": "爱情信",
                            "keywords": "heart,letter,love,mail,romance,心,信,爱,邮件,浪漫",
                            "unicode": "1f48c"
                        },
                        {
                            "description": "Postbox",
                            "description_zh_cn": "邮箱",
                            "keywords": "communication,mail,mailbox,postbox,通信,邮件,邮箱,邮箱",
                            "unicode": "1f4ee"
                        },
                        {
                            "description": "Closed mailbox with lowered flag",
                            "description_zh_cn": "关闭的邮箱与降低的标志",
                            "keywords": "closed,communication,flag,lowered,mail,mailbox,postbox,关闭,通信,标志,降低,邮件,邮箱,邮箱",
                            "unicode": "1f4ea"
                        },
                        {
                            "description": "Closed mailbox with raised flag",
                            "description_zh_cn": "带有升旗的封闭邮箱",
                            "keywords": "closed,communication,flag,mail,mailbox,postbox,关闭,通信,标志,邮件,邮箱,邮箱",
                            "unicode": "1f4eb"
                        },
                        {
                            "description": "Open mailbox with raised flag",
                            "description_zh_cn": "打开带有升旗的邮箱",
                            "keywords": "communication,flag,mail,mailbox,open,postbox,通信,标志,邮件,邮箱,打开,邮箱",
                            "unicode": "1f4ec"
                        },
                        {
                            "description": "Open mailbox with lowered flag",
                            "description_zh_cn": "打开带有降旗的邮箱",
                            "keywords": "communication,flag,lowered,mail,mailbox,open,postbox,通信,标志,降低,邮件,邮箱,打开,邮箱",
                            "unicode": "1f4ed"
                        },
                        {
                            "description": "Package",
                            "description_zh_cn": "包裹",
                            "keywords": "box,communication,package,parcel,盒子,通讯,包,包裹",
                            "unicode": "1f4e6"
                        },
                        {
                            "description": "Postal horn",
                            "description_zh_cn": "邮政喇叭",
                            "keywords": "communication,entertainment,horn,post,postal,通讯,娱乐,喇叭,邮政,邮政",
                            "unicode": "1f4ef"
                        },
                        {
                            "description": "Inbox tray",
                            "description_zh_cn": "收件箱托盘",
                            "keywords": "box,communication,inbox,letter,mail,receive,tray,框,通信,收件箱,信件,邮件,接收,托盘",
                            "unicode": "1f4e5"
                        },
                        {
                            "description": "Outbox tray",
                            "description_zh_cn": "发件箱托盘",
                            "keywords": "box,communication,letter,mail,outbox,sent,tray,框,通信,信件,邮件,发件箱,已发送,托盘",
                            "unicode": "1f4e4"
                        },
                        {
                            "description": "Scroll",
                            "description_zh_cn": "滚动",
                            "keywords": "paper,scroll,纸,卷轴",
                            "unicode": "1f4dc"
                        },
                        {
                            "description": "Page with curl",
                            "description_zh_cn": "带有卷曲的页面",
                            "keywords": "curl,document,page,卷曲,文档,页面",
                            "unicode": "1f4c3"
                        },
                        {
                            "description": "Bookmark tabs",
                            "description_zh_cn": "书签标签",
                            "keywords": "bookmark,mark,marker,tabs,书签、标记、标记、标签",
                            "unicode": "1f4d1"
                        },
                        {
                            "description": "Bar chart",
                            "description_zh_cn": "条形图",
                            "keywords": "bar,chart,graph,条形图、图表、图形",
                            "unicode": "1f4ca"
                        },
                        {
                            "description": "Chart with upwards trend",
                            "description_zh_cn": "上升趋势图",
                            "keywords": "chart increasing,chart,graph,growth,trend,upward,图表增加,图表,图形,增长,趋势,向上",
                            "unicode": "1f4c8"
                        },
                        {
                            "description": "Chart with downwards trend",
                            "description_zh_cn": "下降趋势图",
                            "keywords": "chart decreasing,chart,down,graph,trend,图表下降,图表,下降,图表,趋势",
                            "unicode": "1f4c9"
                        },
                        {
                            "description": "Page facing up",
                            "description_zh_cn": "页面朝上",
                            "keywords": "document,page,文档,页面",
                            "unicode": "1f4c4"
                        },
                        {
                            "description": "Calendar",
                            "description_zh_cn": "日历",
                            "keywords": "calendar,date,日历,日期",
                            "unicode": "1f4c5"
                        },
                        {
                            "description": "Tear-off calendar",
                            "description_zh_cn": "可撕日历",
                            "keywords": "calendar,日历",
                            "unicode": "1f4c6"
                        },
                        {
                            "description": "Spiral calendar pad",
                            "description_zh_cn": "螺旋日历垫",
                            "keywords": "spiral calendar,calendar,pad,spiral,螺旋日历,日历,垫,螺旋",
                            "unicode": "1f5d3"
                        },
                        {
                            "description": "Card index",
                            "description_zh_cn": "卡片索引",
                            "keywords": "card,index,rolodex,卡片、索引、rolodex",
                            "unicode": "1f4c7"
                        },
                        {
                            "description": "Card file box",
                            "description_zh_cn": "卡片档案盒",
                            "keywords": "box,card,file,盒子、卡片、文件",
                            "unicode": "1f5c3"
                        },
                        {
                            "description": "Ballot box with ballot",
                            "description_zh_cn": "带选票的投票箱",
                            "keywords": "ballot,box,vote,voting,选票,框,投票,投票",
                            "unicode": "1f5f3"
                        },
                        {
                            "description": "File cabinet",
                            "description_zh_cn": "文件柜",
                            "keywords": "cabinet,file,柜子,文件",
                            "unicode": "1f5c4"
                        },
                        {
                            "description": "Clipboard",
                            "description_zh_cn": "剪贴板",
                            "keywords": "clipboard,剪贴板",
                            "unicode": "1f4cb"
                        },
                        {
                            "description": "Spiral note pad",
                            "description_zh_cn": "螺旋记事本",
                            "keywords": "spiral notepad,note,pad,spiral,螺旋记事本,注意,垫,螺旋",
                            "unicode": "1f5d2"
                        },
                        {
                            "description": "File folder",
                            "description_zh_cn": "文件夹",
                            "keywords": "file,folder,文件夹",
                            "unicode": "1f4c1"
                        },
                        {
                            "description": "Open file folder",
                            "description_zh_cn": "打开文件夹",
                            "keywords": "file,folder,open,文件,文件夹,打开",
                            "unicode": "1f4c2"
                        },
                        {
                            "description": "Card index dividers",
                            "description_zh_cn": "卡片索引分隔符",
                            "keywords": "card,dividers,index,卡,分频器,索引",
                            "unicode": "1f5c2"
                        },
                        {
                            "description": "Rolled-up newspaper",
                            "description_zh_cn": "卷起来的报纸",
                            "keywords": "news,newspaper,paper,rolled,新闻,报纸,纸,卷",
                            "unicode": "1f5de"
                        },
                        {
                            "description": "Newspaper",
                            "description_zh_cn": "报纸",
                            "keywords": "communication,news,newspaper,paper,通讯,新闻,报纸,纸",
                            "unicode": "1f4f0"
                        },
                        {
                            "description": "Placard",
                            "description_zh_cn": "标语牌",
                            "keywords": "demonstration,picket,protest,sign,示威,纠察队,抗议,标志",
                            "unicode": "1faa7"
                        },
                        {
                            "description": "Notebook",
                            "description_zh_cn": "笔记本",
                            "keywords": "notebook,笔记本",
                            "unicode": "1f4d3"
                        },
                        {
                            "description": "Closed book",
                            "description_zh_cn": "封闭的书",
                            "keywords": "book,closed,书,关闭",
                            "unicode": "1f4d5"
                        },
                        {
                            "description": "Green book",
                            "description_zh_cn": "绿皮书",
                            "keywords": "book,green,书,绿色",
                            "unicode": "1f4d7"
                        },
                        {
                            "description": "Blue book",
                            "description_zh_cn": "蓝皮书",
                            "keywords": "blue,book,蓝色,书",
                            "unicode": "1f4d8"
                        },
                        {
                            "description": "Orange book",
                            "description_zh_cn": "橙皮书",
                            "keywords": "book,orange,书,橙色",
                            "unicode": "1f4d9"
                        },
                        {
                            "description": "Notebook with decorative cover",
                            "description_zh_cn": "带装饰盖的笔记本",
                            "keywords": "book,cover,decorated,notebook,书,封面,装饰,笔记本",
                            "unicode": "1f4d4"
                        },
                        {
                            "description": "Ledger",
                            "description_zh_cn": "分类帐",
                            "keywords": "ledger,notebook,账本,笔记本",
                            "unicode": "1f4d2"
                        },
                        {
                            "description": "Books",
                            "description_zh_cn": "图书",
                            "keywords": "book,books,书,书",
                            "unicode": "1f4da"
                        },
                        {
                            "description": "Open book",
                            "description_zh_cn": "打开书",
                            "keywords": "book,open,书,打开",
                            "unicode": "1f4d6"
                        },
                        {
                            "description": "Link symbol",
                            "description_zh_cn": "链接符号",
                            "keywords": "link,关联",
                            "unicode": "1f517"
                        },
                        {
                            "description": "Paperclip",
                            "description_zh_cn": "回形针",
                            "keywords": "paperclip,回形针",
                            "unicode": "1f4ce"
                        },
                        {
                            "description": "Linked paperclips",
                            "description_zh_cn": "链接回形针",
                            "keywords": "communication,link,paperclip,通信,链接,回形针",
                            "unicode": "1f587"
                        },
                        {
                            "description": "Scissors",
                            "description_zh_cn": "剪刀",
                            "keywords": "scissors,tool,剪刀,工具",
                            "unicode": "2702"
                        },
                        {
                            "description": "Triangular ruler",
                            "description_zh_cn": "三角尺",
                            "keywords": "ruler,set,triangle,标尺,集合,三角形",
                            "unicode": "1f4d0"
                        },
                        {
                            "description": "Straight ruler",
                            "description_zh_cn": "直尺",
                            "keywords": "ruler,straight edge,尺子,直边",
                            "unicode": "1f4cf"
                        },
                        {
                            "description": "Pushpin",
                            "description_zh_cn": "图钉",
                            "keywords": "pin,pushpin,图钉,图钉",
                            "unicode": "1f4cc"
                        },
                        {
                            "description": "Round pushpin",
                            "description_zh_cn": "圆形图钉",
                            "keywords": "pin,pushpin,图钉,图钉",
                            "unicode": "1f4cd"
                        },
                        {
                            "description": "Safety pin",
                            "description_zh_cn": "安全别针",
                            "keywords": "diaper,punk rock,尿布,朋克摇滚",
                            "unicode": "1f9f7"
                        },
                        {
                            "description": "Sewing needle",
                            "description_zh_cn": "缝纫针",
                            "keywords": "embroidery,needle,sewing,stitches,sutures,tailoring,刺绣、针、缝纫、缝线、缝线、剪裁",
                            "unicode": "1faa1"
                        },
                        {
                            "description": "Thread",
                            "description_zh_cn": "线",
                            "keywords": "needle,sewing,spool,string,crafts,针、缝纫、线轴、字符串、工艺品",
                            "unicode": "1f9f5"
                        },
                        {
                            "description": "Yarn",
                            "description_zh_cn": "纱",
                            "keywords": "ball,crochet,knit,crafts,球、钩针、针织、工艺品",
                            "unicode": "1f9f6"
                        },
                        {
                            "description": "Knot",
                            "description_zh_cn": "结",
                            "keywords": "knot,rope,tangled,tie,twine,twist,结,绳子,缠结,领带,麻线,扭曲",
                            "unicode": "1faa2"
                        },
                        {
                            "description": "Closed lock with key",
                            "description_zh_cn": "带钥匙的闭锁",
                            "keywords": "closed,key,lock,secure,关闭,钥匙,锁,安全",
                            "unicode": "1f510"
                        },
                        {
                            "description": "Lock",
                            "description_zh_cn": "锁",
                            "keywords": "closed,lock,关闭,锁定",
                            "unicode": "1f512"
                        },
                        {
                            "description": "Open lock",
                            "description_zh_cn": "开锁",
                            "keywords": "lock,open,unlock,锁定,打开,解锁",
                            "unicode": "1f513"
                        },
                        {
                            "description": "Lock with ink pen",
                            "description_zh_cn": "用墨水笔锁",
                            "keywords": "ink,lock,nib,pen,privacy,墨水、锁、笔尖、钢笔、隐私",
                            "unicode": "1f50f"
                        },
                        {
                            "description": "Lower left ballpoint pen",
                            "description_zh_cn": "左下角圆珠笔",
                            "keywords": "ballpoint,communication,pen,圆珠笔,通讯,笔",
                            "unicode": "1f58a"
                        },
                        {
                            "description": "Lower left fountain pen",
                            "description_zh_cn": "左下角钢笔",
                            "keywords": "communication,fountain,pen,通讯,喷泉,笔",
                            "unicode": "1f58b"
                        },
                        {
                            "description": "Nib",
                            "description_zh_cn": "笔尖",
                            "keywords": "nib,pen,笔尖,笔",
                            "unicode": "2712"
                        },
                        {
                            "description": "Memo",
                            "description_zh_cn": "备忘录",
                            "keywords": "communication,memo,pencil,通讯,备忘录,铅笔",
                            "unicode": "1f4dd"
                        },
                        {
                            "description": "Pencil",
                            "description_zh_cn": "铅笔",
                            "keywords": "pencil,铅笔",
                            "unicode": "270f"
                        },
                        {
                            "description": "Lower left crayon",
                            "description_zh_cn": "左下角蜡笔",
                            "keywords": "communication,crayon,交流,蜡笔",
                            "unicode": "1f58d"
                        },
                        {
                            "description": "Lower left paintbrush",
                            "description_zh_cn": "左下画笔",
                            "keywords": "communication,paintbrush,painting,通信,画笔,绘画",
                            "unicode": "1f58c"
                        },
                        {
                            "description": "Left-pointing magnifying glass",
                            "description_zh_cn": "左指放大镜",
                            "keywords": "glass,magnifying,search,tool,玻璃,放大,搜索,工具",
                            "unicode": "1f50d"
                        },
                        {
                            "description": "Right-pointing magnifying glass",
                            "description_zh_cn": "右指向放大镜",
                            "keywords": "glass,magnifying,search,tool,玻璃,放大,搜索,工具",
                            "unicode": "1f50e"
                        }
                    ],
                    "title": "Objects",
                    "title_zh_cn": "物件"
                },
                {
                    "id": "symbols",
                    "items": [
                        {
                            "description": "Red heart",
                            "description_zh_cn": "红心",
                            "keywords": "heart,心",
                            "unicode": "2764"
                        },
                        {
                            "description": "Orange heart",
                            "description_zh_cn": "橙心",
                            "keywords": "heart,orange,心,橙色",
                            "unicode": "1f9e1"
                        },
                        {
                            "description": "Yellow heart",
                            "description_zh_cn": "黄心",
                            "keywords": "heart,yellow,心,黄色",
                            "unicode": "1f49b"
                        },
                        {
                            "description": "Green heart",
                            "description_zh_cn": "绿心",
                            "keywords": "heart,green,心,绿色",
                            "unicode": "1f49a"
                        },
                        {
                            "description": "Blue heart",
                            "description_zh_cn": "蓝心",
                            "keywords": "heart,blue,心,蓝",
                            "unicode": "1f499"
                        },
                        {
                            "description": "Purple heart",
                            "description_zh_cn": "紫心",
                            "keywords": "heart,purple,心,紫色",
                            "unicode": "1f49c"
                        },
                        {
                            "description": "Brown heart",
                            "description_zh_cn": "棕色的心",
                            "keywords": "heart,brown,心,棕色",
                            "unicode": "1f90e"
                        },
                        {
                            "description": "Black heart",
                            "description_zh_cn": "黑心",
                            "keywords": "heart,black,evil,wicked,心,黑色,邪恶,邪恶",
                            "unicode": "1f5a4"
                        },
                        {
                            "description": "White heart",
                            "description_zh_cn": "白心",
                            "keywords": "heart,white,心,白",
                            "unicode": "1f90d"
                        },
                        {
                            "description": "Broken heart",
                            "description_zh_cn": "破碎的心",
                            "keywords": "heart,break,broken,心,破碎,破碎",
                            "unicode": "1f494"
                        },
                        {
                            "description": "Heart exclamation",
                            "description_zh_cn": "心感叹",
                            "keywords": "heart,exclamation,mark,punctuation,心、感叹号、标记、标点符号",
                            "unicode": "2763"
                        },
                        {
                            "description": "Two hearts",
                            "description_zh_cn": "两颗心",
                            "keywords": "heart,love,心,爱",
                            "unicode": "1f495"
                        },
                        {
                            "description": "Revolving hearts",
                            "description_zh_cn": "旋转的心",
                            "keywords": "heart,revolving,心,旋转",
                            "unicode": "1f49e"
                        },
                        {
                            "description": "Beating heart",
                            "description_zh_cn": "跳动的心",
                            "keywords": "heart,beating,heartbeat,pulsating,心脏,跳动,心跳,搏动",
                            "unicode": "1f493"
                        },
                        {
                            "description": "Growing heart",
                            "description_zh_cn": "成长的心",
                            "keywords": "heart,excited,growing,heartpulse,nervous,心脏,兴奋,成长,心跳,紧张",
                            "unicode": "1f497"
                        },
                        {
                            "description": "Sparkling heart",
                            "description_zh_cn": "闪闪发光的心",
                            "keywords": "heart,excited,sparkle,心,兴奋,闪闪发光",
                            "unicode": "1f496"
                        },
                        {
                            "description": "Heart with arrow",
                            "description_zh_cn": "带箭头的心",
                            "keywords": "heart,arrow,cupid,romance,心,箭头,丘比特,浪漫",
                            "unicode": "1f498"
                        },
                        {
                            "description": "Heart with ribbon",
                            "description_zh_cn": "带丝带的心",
                            "keywords": "heart,ribbon,valentine,心,丝带,情人节",
                            "unicode": "1f49d"
                        },
                        {
                            "description": "Heart on fire",
                            "description_zh_cn": "心脏着火",
                            "keywords": "heart,fire,burn,love,lust,sacred heart,心,火,烧伤,爱,欲望,圣心",
                            "unicode": "2764-fe0f-200d-1f525"
                        },
                        {
                            "description": "Mending heart",
                            "description_zh_cn": "补心",
                            "keywords": "heart,healthier,improving,mending,recovering,recuperating,well,心脏,更健康,改善,修补,恢复,恢复,好",
                            "unicode": "2764-fe0f-200d-1fa79"
                        },
                        {
                            "description": "Heart decoration",
                            "description_zh_cn": "心形装饰",
                            "keywords": "heart,心",
                            "unicode": "1f49f"
                        },
                        {
                            "description": "Peace symbol",
                            "description_zh_cn": "和平象征",
                            "keywords": "peace,和平",
                            "unicode": "262e"
                        },
                        {
                            "description": "Latin cross",
                            "description_zh_cn": "拉丁十字",
                            "keywords": "christian,cross,religion,基督教,十字架,宗教",
                            "unicode": "271d"
                        },
                        {
                            "description": "Star and crescent",
                            "description_zh_cn": "星星和新月",
                            "keywords": "islam,muslim,religion,伊斯兰教、穆斯林、宗教",
                            "unicode": "262a"
                        },
                        {
                            "description": "Om symbol",
                            "description_zh_cn": "嗡符号",
                            "keywords": "hindu,om,religion,印度教,OM,宗教",
                            "unicode": "1f549"
                        },
                        {
                            "description": "Wheel of dharma",
                            "description_zh_cn": "法轮",
                            "keywords": "buddhist,dharma,religion,wheel,佛教、佛法、宗教、轮子",
                            "unicode": "2638"
                        },
                        {
                            "description": "Star of david",
                            "description_zh_cn": "大卫之星",
                            "keywords": "david,jew,jewish,religion,star,大卫,犹太人,犹太人,宗教,明星",
                            "unicode": "2721"
                        },
                        {
                            "description": "Six pointed star with middle dot",
                            "description_zh_cn": "带中间点的六尖星",
                            "keywords": "fortune,star,财富,明星",
                            "unicode": "1f52f"
                        },
                        {
                            "description": "Menorah with nine branches",
                            "description_zh_cn": "九枝烛台",
                            "keywords": "candelabrum,candlestick,menorah,religion,烛台,烛台,烛台,宗教",
                            "unicode": "1f54e"
                        },
                        {
                            "description": "Yin yang",
                            "description_zh_cn": "阴阳",
                            "keywords": "religion,tao,taoist,yang,yin,宗教、道、道、阳、阴",
                            "unicode": "262f"
                        },
                        {
                            "description": "Orthodox cross",
                            "description_zh_cn": "东正教十字架",
                            "keywords": "christian,cross,religion,基督教,十字架,宗教",
                            "unicode": "2626"
                        },
                        {
                            "description": "Place of worship",
                            "description_zh_cn": "宗教场所",
                            "keywords": "religion,worship,宗教、崇拜",
                            "unicode": "1f6d0"
                        },
                        {
                            "description": "Ophiuchus",
                            "description_zh_cn": "蛇夫座",
                            "keywords": "bearer,ophiuchus,serpent,snake,zodiac,承载者,蛇夫座,蛇,蛇,十二生肖",
                            "unicode": "26ce"
                        },
                        {
                            "description": "Aries",
                            "description_zh_cn": "白羊座",
                            "keywords": "aries,ram,zodiac,白羊座、公羊、生肖",
                            "unicode": "2648"
                        },
                        {
                            "description": "Taurus",
                            "description_zh_cn": "金牛座",
                            "keywords": "bull,ox,taurus,zodiac,公牛、牛、金牛、生肖",
                            "unicode": "2649"
                        },
                        {
                            "description": "Gemini",
                            "description_zh_cn": "双子座",
                            "keywords": "gemini,twins,zodiac,双子座,双胞胎,生肖",
                            "unicode": "264a"
                        },
                        {
                            "description": "Cancer",
                            "description_zh_cn": "癌症",
                            "keywords": "cancer,crab,zodiac,癌症,蟹,生肖",
                            "unicode": "264b"
                        },
                        {
                            "description": "Leo",
                            "description_zh_cn": "狮子座",
                            "keywords": "leo,lion,zodiac,狮子座,狮子座,生肖",
                            "unicode": "264c"
                        },
                        {
                            "description": "Virgo",
                            "description_zh_cn": "处女座",
                            "keywords": "maiden,virgin,virgo,zodiac,处女,处女,处女座,黄道十二宫",
                            "unicode": "264d"
                        },
                        {
                            "description": "Libra",
                            "description_zh_cn": "天秤座",
                            "keywords": "balance,justice,libra,scales,zodiac,平衡,正义,天秤座,秤,黄道十二宫",
                            "unicode": "264e"
                        },
                        {
                            "description": "Scorpius",
                            "description_zh_cn": "天蝎座",
                            "keywords": "scorpio,scorpion,scorpius,zodiac,天蝎座,蝎子,天蝎座,黄道十二宫",
                            "unicode": "264f"
                        },
                        {
                            "description": "Sagittarius",
                            "description_zh_cn": "射手座",
                            "keywords": "archer,sagittarius,zodiac,射手,射手座,十二生肖",
                            "unicode": "2650"
                        },
                        {
                            "description": "Capricorn",
                            "description_zh_cn": "摩羯座",
                            "keywords": "capricorn,goat,zodiac,摩羯座,山羊,生肖",
                            "unicode": "2651"
                        },
                        {
                            "description": "Aquarius",
                            "description_zh_cn": "水瓶座",
                            "keywords": "aquarius,bearer,water,zodiac,水瓶座,承载者,水,生肖",
                            "unicode": "2652"
                        },
                        {
                            "description": "Pisces",
                            "description_zh_cn": "双鱼座",
                            "keywords": "fish,pisces,zodiac,鱼,双鱼,生肖",
                            "unicode": "2653"
                        },
                        {
                            "description": "Squared id",
                            "description_zh_cn": "平方id",
                            "keywords": "id,identity,身份证,身份",
                            "unicode": "1f194"
                        },
                        {
                            "description": "Atom symbol",
                            "description_zh_cn": "原子符号",
                            "keywords": "atheist,atom,无神论者,原子",
                            "unicode": "269b"
                        },
                        {
                            "description": "Staff of aesculapius",
                            "description_zh_cn": "埃斯库拉皮乌斯的工作人员",
                            "keywords": "health,care,doctor,medicine,rod,snake,健康,护理,医生,医药,棒,蛇",
                            "unicode": "2695"
                        },
                        {
                            "description": "Radioactive sign",
                            "description_zh_cn": "放射性标志",
                            "keywords": "radioactive,放射性",
                            "unicode": "2622"
                        },
                        {
                            "description": "Biohazard sign",
                            "description_zh_cn": "生物危害标志",
                            "keywords": "biohazard,生物危害",
                            "unicode": "2623"
                        },
                        {
                            "description": "Mobile phone off",
                            "description_zh_cn": "手机关机",
                            "keywords": "cell,communication,mobile,off,phone,telephone,单元格,通信,移动,关闭,电话,电话",
                            "unicode": "1f4f4"
                        },
                        {
                            "description": "Vibration mode",
                            "description_zh_cn": "振动模式",
                            "keywords": "cell,communication,mobile,mode,phone,telephone,vibration,单元格,通信,移动,模式,电话,电话,振动",
                            "unicode": "1f4f3"
                        },
                        {
                            "description": "Squared cjk unified ideograph-6709",
                            "description_zh_cn": "平方 cjk 统一表意文字-6709",
                            "keywords": "squared exist ideograph,japanese,平方存在表意文字,日语",
                            "unicode": "1f236"
                        },
                        {
                            "description": "Squared cjk unified ideograph-7121",
                            "description_zh_cn": "平方 cjk 统一表意文字-7121",
                            "keywords": "squared negation ideograph,japanese,平方否定表意文字,日语",
                            "unicode": "1f21a"
                        },
                        {
                            "description": "Squared cjk unified ideograph-7533",
                            "description_zh_cn": "平方 cjk 统一表意文字-7533",
                            "keywords": "squared apply ideograph,chinese,平方应用表意文字,中文",
                            "unicode": "1f238"
                        },
                        {
                            "description": "Squared cjk unified ideograph-55b6",
                            "description_zh_cn": "平方 cjk 统一表意文字-55b6",
                            "keywords": "squared operating ideograph,chinese,平方操作表意文字,中文",
                            "unicode": "1f23a"
                        },
                        {
                            "description": "Squared cjk unified ideograph-6708",
                            "description_zh_cn": "平方 cjk 统一表意文字-6708",
                            "keywords": "squared moon ideograph,japanese,方月象形文字,日语",
                            "unicode": "1f237"
                        },
                        {
                            "description": "Eight pointed star",
                            "description_zh_cn": "八尖星",
                            "keywords": "star,星星",
                            "unicode": "2734"
                        },
                        {
                            "description": "Squared vs",
                            "description_zh_cn": "平方与",
                            "keywords": "versus,vs,对,对",
                            "unicode": "1f19a"
                        },
                        {
                            "description": "Circled ideograph accept",
                            "description_zh_cn": "带圆圈的表意文字接受",
                            "keywords": "circled accept ideograph,chinese,圆圈接受表意文字,中文",
                            "unicode": "1f251"
                        },
                        {
                            "description": "White flower",
                            "description_zh_cn": "白色的花",
                            "keywords": "flower,花",
                            "unicode": "1f4ae"
                        },
                        {
                            "description": "Circled ideograph advantage",
                            "description_zh_cn": "带圆圈的表意文字优势",
                            "keywords": "circled advantage ideograph,japanese,带圆圈的优势表意文字,日语",
                            "unicode": "1f250"
                        },
                        {
                            "description": "Circled ideograph secret",
                            "description_zh_cn": "带圆圈的表意文字秘密",
                            "keywords": "circled secret ideograph,chinese,ideograph,secret,带圆圈的秘密表意文字,中文,表意文字,秘密",
                            "unicode": "3299"
                        },
                        {
                            "description": "Circled ideograph congratulation",
                            "description_zh_cn": "带圆圈的表意文字祝贺",
                            "keywords": "circled congratulate ideograph,chinese,圆圈祝贺表意文字,中文",
                            "unicode": "3297"
                        },
                        {
                            "description": "Squared cjk unified ideograph-5408",
                            "description_zh_cn": "平方 cjk 统一表意文字-5408",
                            "keywords": "squared together ideograph,chinese,拼在一起的象形文字,中文",
                            "unicode": "1f234"
                        },
                        {
                            "description": "Squared cjk unified ideograph-6e80",
                            "description_zh_cn": "平方 cjk 统一表意文字-6e80",
                            "keywords": "squared fullness ideograph,chinese,平方丰满表意文字,中文",
                            "unicode": "1f235"
                        },
                        {
                            "description": "Squared cjk unified ideograph-5272",
                            "description_zh_cn": "平方 cjk 统一表意文字-5272",
                            "keywords": "squared divide ideograph,japanese,平方除表意文字,日语",
                            "unicode": "1f239"
                        },
                        {
                            "description": "Squared cjk unified ideograph-7981",
                            "description_zh_cn": "平方 cjk 统一表意文字-7981",
                            "keywords": "squared prohibit ideograph,japanese,平方禁止表意文字,日语",
                            "unicode": "1f232"
                        },
                        {
                            "description": "Negative squared latin capital letter a",
                            "description_zh_cn": "负平方拉丁大写字母 a",
                            "keywords": "a,blood,一、血液",
                            "unicode": "1f170"
                        },
                        {
                            "description": "Negative squared latin capital letter b",
                            "description_zh_cn": "负平方拉丁大写字母 b",
                            "keywords": "b,blood,b、血液",
                            "unicode": "1f171"
                        },
                        {
                            "description": "Negative squared ab",
                            "description_zh_cn": "负平方ab",
                            "keywords": "ab,blood,ab,血",
                            "unicode": "1f18e"
                        },
                        {
                            "description": "Squared cl",
                            "description_zh_cn": "平方cl",
                            "keywords": "cl,CL",
                            "unicode": "1f191"
                        },
                        {
                            "description": "Negative squared latin capital letter o",
                            "description_zh_cn": "负平方拉丁大写字母 o",
                            "keywords": "blood,o,血,o",
                            "unicode": "1f17e"
                        },
                        {
                            "description": "Squared sos",
                            "description_zh_cn": "平方sos",
                            "keywords": "help,sos,求助,求救",
                            "unicode": "1f198"
                        },
                        {
                            "description": "No entry",
                            "description_zh_cn": "禁止入内",
                            "keywords": "entry,forbidden,no,not,prohibited,traffic,进入,禁止,不,不,禁止,交通",
                            "unicode": "26d4"
                        },
                        {
                            "description": "Name badge",
                            "description_zh_cn": "名卡",
                            "keywords": "badge,name,徽章,名字",
                            "unicode": "1f4db"
                        },
                        {
                            "description": "No entry sign",
                            "description_zh_cn": "禁止进入标志",
                            "keywords": "entry,forbidden,no,not,prohibited,进入,禁止,不,不,禁止",
                            "unicode": "1f6ab"
                        },
                        {
                            "description": "Cross mark",
                            "description_zh_cn": "十字标记",
                            "keywords": "cancel,mark,multiplication,multiply,x,取消、标记、乘法、乘法、x",
                            "unicode": "274c"
                        },
                        {
                            "description": "Heavy large circle",
                            "description_zh_cn": "沉重的大圈",
                            "keywords": "circle,o,圆,o",
                            "unicode": "2b55"
                        },
                        {
                            "description": "Anger symbol",
                            "description_zh_cn": "愤怒的象征",
                            "keywords": "angry,comic,mad,愤怒,喜剧,疯狂",
                            "unicode": "1f4a2"
                        },
                        {
                            "description": "Hot springs",
                            "description_zh_cn": "温泉",
                            "keywords": "hot,hotsprings,springs,steaming,热,温泉,温泉,蒸",
                            "unicode": "2668"
                        },
                        {
                            "description": "No pedestrians",
                            "description_zh_cn": "行人禁止通行",
                            "keywords": "forbidden,no,not,pedestrian,prohibited,禁止,不,不,行人,禁止",
                            "unicode": "1f6b7"
                        },
                        {
                            "description": "Do not litter symbol",
                            "description_zh_cn": "不要乱扔垃圾标志",
                            "keywords": "no littering,forbidden,litter,no,not,prohibited,不乱扔垃圾,禁止,乱扔垃圾,不,不,禁止",
                            "unicode": "1f6af"
                        },
                        {
                            "description": "No bicycles",
                            "description_zh_cn": "自行车禁行",
                            "keywords": "bicycle,bike,forbidden,no,not,prohibited,vehicle,自行车,自行车,禁止,不,不,禁止,车辆",
                            "unicode": "1f6b3"
                        },
                        {
                            "description": "Non-potable water symbol",
                            "description_zh_cn": "非饮用水符号",
                            "keywords": "non-potable water,drink,forbidden,no,not,potable,prohibited,water,非饮用水,饮用,禁止,不,不,饮用,禁止,水",
                            "unicode": "1f6b1"
                        },
                        {
                            "description": "No one under eighteen symbol",
                            "description_zh_cn": "没有十八岁以下的符号",
                            "keywords": "18,age restriction,eighteen,forbidden,no,not,prohibited,underage,18,年龄限制,十八,禁止,不,不,禁止,未成年",
                            "unicode": "1f51e"
                        },
                        {
                            "description": "No mobile phones",
                            "description_zh_cn": "没有手机",
                            "keywords": "cell,communication,forbidden,mobile,no,not,phone,prohibited,telephone,单元格,通信,禁止,移动,不,不,电话,禁止,电话",
                            "unicode": "1f4f5"
                        },
                        {
                            "description": "No smoking symbol",
                            "description_zh_cn": "禁止吸烟标志",
                            "keywords": "no smoking,forbidden,no,not,prohibited,smoking,不吸烟,禁止,不,不,禁止,吸烟",
                            "unicode": "1f6ad"
                        },
                        {
                            "description": "Red exclamation mark symbol",
                            "description_zh_cn": "红色感叹号符号",
                            "keywords": "exclamation,mark,punctuation,感叹号,标记,标点符号",
                            "unicode": "2757"
                        },
                        {
                            "description": "White exclamation mark ornament",
                            "description_zh_cn": "白色感叹号装饰",
                            "keywords": "exclamation,mark,outlined,punctuation,感叹号,标记,概述,标点符号",
                            "unicode": "2755"
                        },
                        {
                            "description": "Red question mark ornament",
                            "description_zh_cn": "红色问号装饰品",
                            "keywords": "mark,punctuation,question,标记,标点,问题",
                            "unicode": "2753"
                        },
                        {
                            "description": "White question mark ornament",
                            "description_zh_cn": "白色问号装饰",
                            "keywords": "mark,outlined,punctuation,question,标记,概述,标点符号,问题",
                            "unicode": "2754"
                        },
                        {
                            "description": "Double exclamation mark",
                            "description_zh_cn": "双感叹号",
                            "keywords": "bangbang,exclamation,mark,punctuation,bangbang,感叹号,标记,标点符号",
                            "unicode": "203c"
                        },
                        {
                            "description": "Exclamation question mark",
                            "description_zh_cn": "感叹号",
                            "keywords": "exclamation,interrobang,mark,punctuation,question,感叹号,interrobang,标记,标点符号,问题",
                            "unicode": "2049"
                        },
                        {
                            "description": "Hundred points symbol",
                            "description_zh_cn": "百点符号",
                            "keywords": "100,full,hundred,score,100、满、百、分",
                            "unicode": "1f4af"
                        },
                        {
                            "description": "Low brightness symbol",
                            "description_zh_cn": "低亮度符号",
                            "keywords": "brightness,dim,low,亮度,昏暗,低",
                            "unicode": "1f505"
                        },
                        {
                            "description": "High brightness symbol",
                            "description_zh_cn": "高亮度符号",
                            "keywords": "bright,brightness,明亮,亮度",
                            "unicode": "1f506"
                        },
                        {
                            "description": "Trident emblem",
                            "description_zh_cn": "三叉戟会徽",
                            "keywords": "anchor,emblem,ship,tool,trident,锚,会徽,船舶,工具,三叉戟",
                            "unicode": "1f531"
                        },
                        {
                            "description": "Fleur-de-lis",
                            "description_zh_cn": "百合花",
                            "keywords": "fleur-de-lis,百合",
                            "unicode": "269c"
                        },
                        {
                            "description": "Part alternation mark",
                            "description_zh_cn": "零件交替标记",
                            "keywords": "mark,part,标记,部分",
                            "unicode": "303d"
                        },
                        {
                            "description": "Warning sign",
                            "description_zh_cn": "警告牌",
                            "keywords": "warning,警告",
                            "unicode": "26a0"
                        },
                        {
                            "description": "Children crossing",
                            "description_zh_cn": "儿童过马路",
                            "keywords": "child,crossing,pedestrian,traffic,儿童、十字路口、行人、交通",
                            "unicode": "1f6b8"
                        },
                        {
                            "description": "Japanese symbol for beginner",
                            "description_zh_cn": "初学者的日语符号",
                            "keywords": "beginner,chevron,green,japanese,leaf,tool,yellow,初学者,雪佛龙,绿色,日语,叶,工具,黄色",
                            "unicode": "1f530"
                        },
                        {
                            "description": "Universal recycling symbol",
                            "description_zh_cn": "通用回收符号",
                            "keywords": "recycle,回收",
                            "unicode": "267b"
                        },
                        {
                            "description": "Squared cjk unified ideograph-6307",
                            "description_zh_cn": "平方 cjk 统一表意文字-6307",
                            "keywords": "squared finger ideograph,japanese,方指象形文字,日语",
                            "unicode": "1f22f"
                        },
                        {
                            "description": "Chart with upwards trend and yen sign",
                            "description_zh_cn": "带有上升趋势和日元符号的图表",
                            "keywords": "chart increasing with yen,bank,chart,currency,graph,growth,market,money,rise,trend,upward,yen,图表随着日元、银行、图表、货币、图形、增长、市场、资金、上升、趋势、向上、日元而增加",
                            "unicode": "1f4b9"
                        },
                        {
                            "description": "Sparkle",
                            "description_zh_cn": "火花",
                            "keywords": "sparkle,火花",
                            "unicode": "2747"
                        },
                        {
                            "description": "Eight spoked asterisk",
                            "description_zh_cn": "八辐星号",
                            "keywords": "asterisk,星号",
                            "unicode": "2733"
                        },
                        {
                            "description": "Negative squared cross mark",
                            "description_zh_cn": "负方十字标记",
                            "keywords": "mark,square,标记,正方形",
                            "unicode": "274e"
                        },
                        {
                            "description": "White heavy check mark",
                            "description_zh_cn": "白色重复选标记",
                            "keywords": "check,mark,复选标记",
                            "unicode": "2705"
                        },
                        {
                            "description": "Diamond shape with a dot inside",
                            "description_zh_cn": "菱形，里面有一个圆点",
                            "keywords": "comic,diamond,geometric,inside,漫画,钻石,几何,里面",
                            "unicode": "1f4a0"
                        },
                        {
                            "description": "Cyclone",
                            "description_zh_cn": "气旋",
                            "keywords": "cyclone,dizzy,twister,typhoon,weather,旋风,头晕,龙卷风,台风,天气",
                            "unicode": "1f300"
                        },
                        {
                            "description": "Double curly loop",
                            "description_zh_cn": "双卷曲循环",
                            "keywords": "curl,double,loop,卷曲,双,循环",
                            "unicode": "27bf"
                        },
                        {
                            "description": "Globe with meridians",
                            "description_zh_cn": "地球与经络",
                            "keywords": "earth,globe,meridians,world,地球,全球,经络,世界",
                            "unicode": "1f310"
                        },
                        {
                            "description": "Infinity",
                            "description_zh_cn": "无穷",
                            "keywords": "forever,unbounded,universal,永远,无限,普遍",
                            "unicode": "267e"
                        },
                        {
                            "description": "Circled latin capital letter m",
                            "description_zh_cn": "带圆圈的拉丁大写字母 m",
                            "keywords": "circle,m,圆,米",
                            "unicode": "24c2"
                        },
                        {
                            "description": "Automated teller machine",
                            "description_zh_cn": "自动取款机",
                            "keywords": "atm sign,atm,automated,bank,teller,atm 标志,atm,自动化,银行,出纳员",
                            "unicode": "1f3e7"
                        },
                        {
                            "description": "Water closet",
                            "description_zh_cn": "盥洗室",
                            "keywords": "closet,lavatory,restroom,water,wc,壁橱、盥洗室、卫生间、水、厕所",
                            "unicode": "1f6be"
                        },
                        {
                            "description": "Wheelchair symbol",
                            "description_zh_cn": "轮椅符号",
                            "keywords": "access,wheelchair,访问,轮椅",
                            "unicode": "267f"
                        },
                        {
                            "description": "Negative squared latin capital letter p",
                            "description_zh_cn": "负平方拉丁文大写字母 p",
                            "keywords": "parking,停车处",
                            "unicode": "1f17f"
                        },
                        {
                            "description": "Squared cjk unified ideograph-7a7a",
                            "description_zh_cn": "平方 cjk 统一表意文字-7a7a",
                            "keywords": "squared empty ideograph,chinese,平方空表意文字,中文",
                            "unicode": "1f233"
                        },
                        {
                            "description": "Squared katakana sa",
                            "description_zh_cn": "平方片假名",
                            "keywords": "japanese,日本人",
                            "unicode": "1f202"
                        },
                        {
                            "description": "Passport control",
                            "description_zh_cn": "护照控制",
                            "keywords": "control,passport,控制,护照",
                            "unicode": "1f6c2"
                        },
                        {
                            "description": "Customs",
                            "description_zh_cn": "海关",
                            "keywords": "customs,海关",
                            "unicode": "1f6c3"
                        },
                        {
                            "description": "Baggage claim",
                            "description_zh_cn": "行李领取",
                            "keywords": "baggage,claim,行李,索赔",
                            "unicode": "1f6c4"
                        },
                        {
                            "description": "Left luggage",
                            "description_zh_cn": "行李寄存",
                            "keywords": "baggage,left luggage,locker,luggage,行李,左行李,储物柜,行李",
                            "unicode": "1f6c5"
                        },
                        {
                            "description": "Potable water symbol",
                            "description_zh_cn": "饮用水符号",
                            "keywords": "drink,potable,water,饮料,饮用水,水",
                            "unicode": "1f6b0"
                        },
                        {
                            "description": "Elevator",
                            "description_zh_cn": "电梯",
                            "keywords": "accessibility,elevator,hoist,lift,可达性,电梯,提升机,升降机",
                            "unicode": "1f6d7"
                        },
                        {
                            "description": "Men’s symbol",
                            "description_zh_cn": "男人的象征",
                            "keywords": "men’s room,lavatory,man,restroom,wc,men,male,男厕所,厕所,男人,洗手间,厕所,男人,男",
                            "unicode": "1f6b9"
                        },
                        {
                            "description": "Male sign",
                            "description_zh_cn": "男性标志",
                            "keywords": "male,man,men,男,男,男",
                            "unicode": "2642"
                        },
                        {
                            "description": "Women’s symbol",
                            "description_zh_cn": "女性的象征",
                            "keywords": "women’s room,lavatory,restroom,wc,woman,women,female,女厕所,洗手间,洗手间,厕所,女人,女人,女性",
                            "unicode": "1f6ba"
                        },
                        {
                            "description": "Female sign",
                            "description_zh_cn": "女性标志",
                            "keywords": "female,woman,women,女性,女人,妇女",
                            "unicode": "2640"
                        },
                        {
                            "description": "Transgender sign",
                            "description_zh_cn": "变性标志",
                            "keywords": "transgender,pride,lgbt,变性人,骄傲,lgbt",
                            "unicode": "26a7"
                        },
                        {
                            "description": "Baby symbol",
                            "description_zh_cn": "婴儿符号",
                            "keywords": "baby,changing,宝贝,改变",
                            "unicode": "1f6bc"
                        },
                        {
                            "description": "Restroom",
                            "description_zh_cn": "卫生间",
                            "keywords": "lavatory,restroom,wc,盥洗室、卫生间、卫生间",
                            "unicode": "1f6bb"
                        },
                        {
                            "description": "Put litter in its place symbol",
                            "description_zh_cn": "把垃圾放在它的位置符号",
                            "keywords": "litter in bin sign,litter,litterbox,垃圾桶标志,垃圾,垃圾箱",
                            "unicode": "1f6ae"
                        },
                        {
                            "description": "Cinema",
                            "description_zh_cn": "电影",
                            "keywords": "activity,camera,cinema,entertainment,film,movie,活动,相机,电影院,娱乐,电影,电影",
                            "unicode": "1f3a6"
                        },
                        {
                            "description": "Antenna with bars",
                            "description_zh_cn": "带条天线",
                            "keywords": "antenna,bar,cell,communication,mobile,phone,signal,telephone,天线,栏,单元格,通信,移动,电话,信号,电话",
                            "unicode": "1f4f6"
                        },
                        {
                            "description": "Squared katakana koko",
                            "description_zh_cn": "平方片假名koko",
                            "keywords": "japanese,日本人",
                            "unicode": "1f201"
                        },
                        {
                            "description": "Squared ng",
                            "description_zh_cn": "平方",
                            "keywords": "ng,ng",
                            "unicode": "1f196"
                        },
                        {
                            "description": "Squared ok",
                            "description_zh_cn": "平方好",
                            "keywords": "ok,行",
                            "unicode": "1f197"
                        },
                        {
                            "description": "Squared up with exclamation mark",
                            "description_zh_cn": "用感叹号平方",
                            "keywords": "mark,up,标记,向上",
                            "unicode": "1f199"
                        },
                        {
                            "description": "Squared cool",
                            "description_zh_cn": "平方酷",
                            "keywords": "cool,凉爽的",
                            "unicode": "1f192"
                        },
                        {
                            "description": "Squared new",
                            "description_zh_cn": "平方新",
                            "keywords": "new,新的",
                            "unicode": "1f195"
                        },
                        {
                            "description": "Squared free",
                            "description_zh_cn": "免费平方",
                            "keywords": "free,自由",
                            "unicode": "1f193"
                        },
                        {
                            "description": "Keycap digit zero",
                            "description_zh_cn": "键帽数字零",
                            "keywords": "0,keycap,zero,0,键帽,零",
                            "unicode": "30-20e3"
                        },
                        {
                            "description": "Keycap digit one",
                            "description_zh_cn": "键帽数字一",
                            "keywords": "1,keycap,one,1,键帽,一个",
                            "unicode": "31-20e3"
                        },
                        {
                            "description": "Keycap digit two",
                            "description_zh_cn": "键帽数字二",
                            "keywords": "2,keycap,two,2,键帽,两个",
                            "unicode": "32-20e3"
                        },
                        {
                            "description": "Keycap digit three",
                            "description_zh_cn": "键帽数字三",
                            "keywords": "3,keycap,three,3、键帽、三个",
                            "unicode": "33-20e3"
                        },
                        {
                            "description": "Keycap digit four",
                            "description_zh_cn": "键帽数字四",
                            "keywords": "4,four,keycap,4、四、键帽",
                            "unicode": "34-20e3"
                        },
                        {
                            "description": "Keycap digit five",
                            "description_zh_cn": "键帽数字五",
                            "keywords": "5,five,keycap,5、五、键帽",
                            "unicode": "35-20e3"
                        },
                        {
                            "description": "Keycap digit six",
                            "description_zh_cn": "键帽数字六",
                            "keywords": "6,keycap,six,6、键帽、六个",
                            "unicode": "36-20e3"
                        },
                        {
                            "description": "Keycap digit seven",
                            "description_zh_cn": "键帽数字七",
                            "keywords": "7,keycap,seven,7、键帽、七",
                            "unicode": "37-20e3"
                        },
                        {
                            "description": "Keycap digit eight",
                            "description_zh_cn": "键帽数字八",
                            "keywords": "8,eight,keycap,8、八、键帽",
                            "unicode": "38-20e3"
                        },
                        {
                            "description": "Keycap digit nine",
                            "description_zh_cn": "键帽数字九",
                            "keywords": "9,keycap,nine,9、键帽、九",
                            "unicode": "39-20e3"
                        },
                        {
                            "description": "Keycap ten",
                            "description_zh_cn": "键帽十",
                            "keywords": "10,keycap,ten,10、键帽、十",
                            "unicode": "1f51f"
                        },
                        {
                            "description": "Input symbol for numbers",
                            "description_zh_cn": "数字的输入符号",
                            "keywords": "1234,input,numbers,1234,输入,数字",
                            "unicode": "1f522"
                        },
                        {
                            "description": "Right-pointing triangle",
                            "description_zh_cn": "右指三角形",
                            "keywords": "play button,arrow,play,right,triangle,播放按钮,箭头,播放,右,三角形",
                            "unicode": "25b6"
                        },
                        {
                            "description": "Double vertical bar",
                            "description_zh_cn": "双竖条",
                            "keywords": "pause button,bar,double,pause,vertical,暂停按钮,栏,双,暂停,垂直",
                            "unicode": "23f8"
                        },
                        {
                            "description": "Right-pointing triangle with double vertical bar",
                            "description_zh_cn": "带有双竖线的右指三角形",
                            "keywords": "play or pause button,arrow,pause,play,right,triangle,播放或暂停按钮,箭头,暂停,播放,向右,三角形",
                            "unicode": "23ef"
                        },
                        {
                            "description": "Square for stop",
                            "description_zh_cn": "停止广场",
                            "keywords": "stop button,square,stop,停止按钮,正方形,停止",
                            "unicode": "23f9"
                        },
                        {
                            "description": "Circle for record",
                            "description_zh_cn": "圈起来记录",
                            "keywords": "record button,circle,record,记录按钮,圆圈,记录",
                            "unicode": "23fa"
                        },
                        {
                            "description": "Eject symbol",
                            "description_zh_cn": "弹出符号",
                            "keywords": "eject button,弹出按钮",
                            "unicode": "23cf"
                        },
                        {
                            "description": "Right-pointing double triangle with vertical bar",
                            "description_zh_cn": "带竖线的右指双三角形",
                            "keywords": "next track button,arrow,next scene,next track,triangle,下一曲目按钮、箭头、下一场景、下一曲目、三角形",
                            "unicode": "23ed"
                        },
                        {
                            "description": "Left-pointing double triangle with vertical bar",
                            "description_zh_cn": "带竖线的左指双三角形",
                            "keywords": "last track button,arrow,previous scene,previous track,triangle,上一曲目按钮、箭头、上一场景、上一曲目、三角形",
                            "unicode": "23ee"
                        },
                        {
                            "description": "Right-pointing double triangle",
                            "description_zh_cn": "右指双三角形",
                            "keywords": "fast-forword button,arrow,double,fast,forward,快进按钮,箭头,双,快,前进",
                            "unicode": "23e9"
                        },
                        {
                            "description": "Left-pointing double triangle",
                            "description_zh_cn": "左指双三角形",
                            "keywords": "fast reverse button,arrow,double,rewind,快退按钮,箭头,双,倒带",
                            "unicode": "23ea"
                        },
                        {
                            "description": "Twisted rightwards arrows",
                            "description_zh_cn": "向右扭曲的箭头",
                            "keywords": "shuffle tracks button,arrow,crossed,随机播放曲目按钮,箭头,交叉",
                            "unicode": "1f500"
                        },
                        {
                            "description": "Clockwise rightwards and leftwards open circle arrows",
                            "description_zh_cn": "顺时针向右和向左打开圆圈箭头",
                            "keywords": "repeat button,arrow,clockwise,repeat,重复按钮,箭头,顺时针,重复",
                            "unicode": "1f501"
                        },
                        {
                            "description": "Clockwise rightwards and leftwards open circle arrows with circled one overlay",
                            "description_zh_cn": "顺时针向右和向左打开圆形箭头，带圆圈的一层叠加",
                            "keywords": "repeat button,arrow,clockwise,once,重复按钮,箭头,顺时针,一次",
                            "unicode": "1f502"
                        },
                        {
                            "description": "Left-pointing triangle",
                            "description_zh_cn": "左指三角形",
                            "keywords": "reverse button,arrow,left,reverse,triangle,反向按钮,箭头,左,反向,三角形",
                            "unicode": "25c0"
                        },
                        {
                            "description": "Up-pointing triangle",
                            "description_zh_cn": "上指三角形",
                            "keywords": "up button,arrow,button,red,向上按钮,箭头,按钮,红色",
                            "unicode": "1f53c"
                        },
                        {
                            "description": "Down-pointing triangle",
                            "description_zh_cn": "下指三角形",
                            "keywords": "down button,arrow,button,down,red,向下按钮,箭头,按钮,向下,红色",
                            "unicode": "1f53d"
                        },
                        {
                            "description": "Up-pointing double triangle",
                            "description_zh_cn": "上指双三角形",
                            "keywords": "fast up button,arrow,double,快速向上按钮,箭头,双",
                            "unicode": "23eb"
                        },
                        {
                            "description": "Down-pointing double triangle",
                            "description_zh_cn": "下指双三角形",
                            "keywords": "fast down button,arrow,double,down,快速向下按钮,箭头,双,向下",
                            "unicode": "23ec"
                        },
                        {
                            "description": "Rightwards arrow",
                            "description_zh_cn": "向右箭头",
                            "keywords": "right arrow,arrow,cardinal,direction,east,向右箭头,箭头,基数,方向,东",
                            "unicode": "27a1"
                        },
                        {
                            "description": "Leftwards arrow",
                            "description_zh_cn": "向左箭头",
                            "keywords": "left arrow,arrow,cardinal,direction,west,左箭头,箭头,基数,方向,西",
                            "unicode": "2b05"
                        },
                        {
                            "description": "Upwards arrow",
                            "description_zh_cn": "向上箭头",
                            "keywords": "up arrow,arrow,cardinal,direction,north,向上箭头,箭头,基数,方向,北",
                            "unicode": "2b06"
                        },
                        {
                            "description": "Downwards arrow",
                            "description_zh_cn": "向下箭头",
                            "keywords": "down arrow,arrow,cardinal,direction,down,south,向下箭头,箭头,基数,方向,向下,南",
                            "unicode": "2b07"
                        },
                        {
                            "description": "North east arrow",
                            "description_zh_cn": "东北箭头",
                            "keywords": "up-right arrow,arrow,direction,intercardinal,northeast,向上箭头,箭头,方向,intercardinal,东北",
                            "unicode": "2197"
                        },
                        {
                            "description": "South east arrow",
                            "description_zh_cn": "东南箭头",
                            "keywords": "down-right arrow,arrow,direction,intercardinal,southeast,右下箭头,箭头,方向,intercardinal,东南",
                            "unicode": "2198"
                        },
                        {
                            "description": "South west arrow",
                            "description_zh_cn": "西南箭头",
                            "keywords": "down-left arrow,arrow,direction,intercardinal,southwest,左下箭头,箭头,方向,intercardinal,西南",
                            "unicode": "2199"
                        },
                        {
                            "description": "North west arrow",
                            "description_zh_cn": "西北箭头",
                            "keywords": "up-left arrow,arrow,direction,intercardinal,northwest,左上箭头,箭头,方向,intercardinal,西北",
                            "unicode": "2196"
                        },
                        {
                            "description": "Up down arrow",
                            "description_zh_cn": "向上向下箭头",
                            "keywords": "up-down arrow,arrow,direction,intercardinal,northwest,上下箭头,箭头,方向,intercardinal,西北",
                            "unicode": "2195"
                        },
                        {
                            "description": "Left right arrow",
                            "description_zh_cn": "左右箭头",
                            "keywords": "left-right arrow,arrow,左右箭头,箭头",
                            "unicode": "2194"
                        },
                        {
                            "description": "Anticlockwise downwards and upwards open circle arrows",
                            "description_zh_cn": "逆时针向下和向上打开圆圈箭头",
                            "keywords": "anticlockwise,arrow,counterclockwise,withershins,逆时针,箭头,逆时针,凋零",
                            "unicode": "1f504"
                        },
                        {
                            "description": "Rightwards arrow with hook",
                            "description_zh_cn": "带钩的向右箭头",
                            "keywords": "arrow curving right,arrow,箭头向右弯曲箭头",
                            "unicode": "21aa"
                        },
                        {
                            "description": "Leftwards arrow with hook",
                            "description_zh_cn": "带钩的向左箭头",
                            "keywords": "arrow curving left,arrow,箭头向左弯曲箭头",
                            "unicode": "21a9"
                        },
                        {
                            "description": "Clockwise downwards and upwards open circle arrows",
                            "description_zh_cn": "顺时针向下和向上打开圆圈箭头",
                            "keywords": "clockwise vertical arrows,arrow,clockwise,reload,顺时针垂直箭头,箭头,顺时针,重新加载",
                            "unicode": "1f503"
                        },
                        {
                            "description": "Arrow pointing rightwards then curving upwards",
                            "description_zh_cn": "箭头向右然后向上弯曲",
                            "keywords": "right arrow curving up,arrow,向右箭头向上弯曲箭头",
                            "unicode": "2934"
                        },
                        {
                            "description": "Arrow pointing rightwards then curving downwards",
                            "description_zh_cn": "箭头向右然后向下弯曲",
                            "keywords": "right arrow curving down,arrow,down,向右箭头向下弯曲,箭头,向下",
                            "unicode": "2935"
                        },
                        {
                            "description": "Keycap number sign",
                            "description_zh_cn": "键帽数字符号",
                            "keywords": "hash,keycap,pound,哈希,键帽,磅",
                            "unicode": "23-20e3"
                        },
                        {
                            "description": "Keycap asterisk",
                            "description_zh_cn": "键帽星号",
                            "keywords": "asterisk,keycap,star,星号、键帽、星星",
                            "unicode": "2a-20e3"
                        },
                        {
                            "description": "Information source",
                            "description_zh_cn": "信息来源",
                            "keywords": "i,information,一、信息",
                            "unicode": "2139"
                        },
                        {
                            "description": "Input symbol for latin letters",
                            "description_zh_cn": "拉丁字母的输入符号",
                            "keywords": "abc,alphabet,input,latin,letters,abc,字母表,输入,拉丁文,字母",
                            "unicode": "1f524"
                        },
                        {
                            "description": "Input symbol for latin small letters",
                            "description_zh_cn": "拉丁文小写字母的输入符号",
                            "keywords": "abcd,input,latin,letters,lowercase,abcd,输入,拉丁文,字母,小写",
                            "unicode": "1f521"
                        },
                        {
                            "description": "Input symbol for latin capital letters",
                            "description_zh_cn": "拉丁大写字母的输入符号",
                            "keywords": "input,latin,letters,uppercase,输入,拉丁文,字母,大写",
                            "unicode": "1f520"
                        },
                        {
                            "description": "Input symbol for symbols",
                            "description_zh_cn": "符号的输入符号",
                            "keywords": "input,输入",
                            "unicode": "1f523"
                        },
                        {
                            "description": "Musical note",
                            "description_zh_cn": "音符",
                            "keywords": "activity,entertainment,music,note,活动、娱乐、音乐、笔记",
                            "unicode": "1f3b5"
                        },
                        {
                            "description": "Multiple musical notes",
                            "description_zh_cn": "多个音符",
                            "keywords": "activity,entertainment,music,note,notes,活动,娱乐,音乐,笔记,笔记",
                            "unicode": "1f3b6"
                        },
                        {
                            "description": "Wavy dash",
                            "description_zh_cn": "波浪线",
                            "keywords": "dash,punctuation,wavy,破折号、标点符号、波浪线",
                            "unicode": "3030"
                        },
                        {
                            "description": "Curly loop",
                            "description_zh_cn": "卷曲循环",
                            "keywords": "curl,loop,卷曲,循环",
                            "unicode": "27b0"
                        },
                        {
                            "description": "Heavy check mark",
                            "description_zh_cn": "重复选标记",
                            "keywords": "check,mark,复选标记",
                            "unicode": "2714"
                        },
                        {
                            "description": "Heavy plus sign",
                            "description_zh_cn": "重加号",
                            "keywords": "math,plus,数学,加上",
                            "unicode": "2795"
                        },
                        {
                            "description": "Heavy minus sign",
                            "description_zh_cn": "重减号",
                            "keywords": "math,minus,数学,减去",
                            "unicode": "2796"
                        },
                        {
                            "description": "Heavy division sign",
                            "description_zh_cn": "重划分标志",
                            "keywords": "division,math,除法,数学",
                            "unicode": "2797"
                        },
                        {
                            "description": "Heavy multiplication x",
                            "description_zh_cn": "重乘 x",
                            "keywords": "cancel,multiplication,multiply,x,取消、乘法、乘法、x",
                            "unicode": "2716"
                        },
                        {
                            "description": "Heavy dollar sign",
                            "description_zh_cn": "沉重的美元符号",
                            "keywords": "currency,dollar,money,货币,美元,钱",
                            "unicode": "1f4b2"
                        },
                        {
                            "description": "Currency exchange",
                            "description_zh_cn": "货币兑换",
                            "keywords": "bank,currency,exchange,money,银行,货币,交易所,钱",
                            "unicode": "1f4b1"
                        },
                        {
                            "description": "Copyright sign",
                            "description_zh_cn": "版权标志",
                            "keywords": "copyright,版权",
                            "unicode": "a9"
                        },
                        {
                            "description": "Registered sign",
                            "description_zh_cn": "注册标志",
                            "keywords": "registered,挂号的",
                            "unicode": "ae"
                        },
                        {
                            "description": "Trade mark sign",
                            "description_zh_cn": "商标标志",
                            "keywords": "mark,tm,trademark,商标,tm,商标",
                            "unicode": "2122"
                        },
                        {
                            "description": "End with leftwards arrow above",
                            "description_zh_cn": "以上方的向左箭头结束",
                            "keywords": "arrow,end,箭头,结束",
                            "unicode": "1f51a"
                        },
                        {
                            "description": "Back with leftwards arrow above",
                            "description_zh_cn": "返回，上方有向左箭头",
                            "keywords": "arrow,back,箭头,返回",
                            "unicode": "1f519"
                        },
                        {
                            "description": "On with exclamation mark with left right arrow above",
                            "description_zh_cn": "上面带有左右箭头的感叹号",
                            "keywords": "arrow,mark,on,箭头,标记,在",
                            "unicode": "1f51b"
                        },
                        {
                            "description": "Top with upwards arrow above",
                            "description_zh_cn": "顶部带有向上箭头",
                            "keywords": "arrow,top,up,箭头,顶部,向上",
                            "unicode": "1f51d"
                        },
                        {
                            "description": "Soon with rightwards arrow above",
                            "description_zh_cn": "很快，上面有向右箭头",
                            "keywords": "arrow,soon,箭头,很快",
                            "unicode": "1f51c"
                        },
                        {
                            "description": "Ballot box with check",
                            "description_zh_cn": "带支票的投票箱",
                            "keywords": "ballot,box,check,选票,框,检查",
                            "unicode": "2611"
                        },
                        {
                            "description": "Radio button",
                            "description_zh_cn": "单选按钮",
                            "keywords": "button,geometric,radio,按钮,几何,收音机",
                            "unicode": "1f518"
                        },
                        {
                            "description": "Red circle",
                            "description_zh_cn": "红圈",
                            "keywords": "circle,geometric,red,圆形,几何,红色",
                            "unicode": "1f534"
                        },
                        {
                            "description": "Orange circle",
                            "description_zh_cn": "橙色圆圈",
                            "keywords": "circle,geometric,orange,圆,几何,橙色",
                            "unicode": "1f7e0"
                        },
                        {
                            "description": "Yellow circle",
                            "description_zh_cn": "黄色圆圈",
                            "keywords": "circle,geometric,yellow,圆,几何,黄色",
                            "unicode": "1f7e1"
                        },
                        {
                            "description": "Green circle",
                            "description_zh_cn": "绿色圆圈",
                            "keywords": "circle,geometric,green,圆,几何,绿色",
                            "unicode": "1f7e2"
                        },
                        {
                            "description": "Blue circle",
                            "description_zh_cn": "蓝色圆圈",
                            "keywords": "blue,circle,geometric,蓝色,圆形,几何",
                            "unicode": "1f535"
                        },
                        {
                            "description": "Purple circle",
                            "description_zh_cn": "紫色圆圈",
                            "keywords": "circle,geometric,purple,圆形,几何,紫色",
                            "unicode": "1f7e3"
                        },
                        {
                            "description": "Brown circle",
                            "description_zh_cn": "棕色圆圈",
                            "keywords": "circle,geometric,brown,圆形,几何,棕色",
                            "unicode": "1f7e4"
                        },
                        {
                            "description": "Black circle",
                            "description_zh_cn": "黑圈",
                            "keywords": "circle,geometric,圆,几何",
                            "unicode": "26ab"
                        },
                        {
                            "description": "White circle",
                            "description_zh_cn": "白圈",
                            "keywords": "circle,geometric,圆,几何",
                            "unicode": "26aa"
                        },
                        {
                            "description": "Red square",
                            "description_zh_cn": "红方格",
                            "keywords": "square,geometric,red,方形,几何,红色",
                            "unicode": "1f7e5"
                        },
                        {
                            "description": "Orange square",
                            "description_zh_cn": "橙色方块",
                            "keywords": "square,geometric,orange,方形,几何,橙色",
                            "unicode": "1f7e7"
                        },
                        {
                            "description": "Yellow square",
                            "description_zh_cn": "黄色方块",
                            "keywords": "square,geometric,yellow,方形,几何,黄色",
                            "unicode": "1f7e8"
                        },
                        {
                            "description": "Green square",
                            "description_zh_cn": "绿色广场",
                            "keywords": "square,geometric,green,方形,几何,绿色",
                            "unicode": "1f7e9"
                        },
                        {
                            "description": "Blue square",
                            "description_zh_cn": "蓝色方块",
                            "keywords": "square,geometric,blue,方形,几何,蓝色",
                            "unicode": "1f7e6"
                        },
                        {
                            "description": "Purple square",
                            "description_zh_cn": "紫色方块",
                            "keywords": "square,geometric,purple,方形,几何,紫色",
                            "unicode": "1f7ea"
                        },
                        {
                            "description": "Brown square",
                            "description_zh_cn": "棕色方块",
                            "keywords": "square,geometric,brown,方形,几何,棕色",
                            "unicode": "1f7eb"
                        },
                        {
                            "description": "Black large square",
                            "description_zh_cn": "黑色大方",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "2b1b"
                        },
                        {
                            "description": "White large square",
                            "description_zh_cn": "白色大方",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "2b1c"
                        },
                        {
                            "description": "Black medium square",
                            "description_zh_cn": "黑色中号方形",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "25fc"
                        },
                        {
                            "description": "White medium square",
                            "description_zh_cn": "白色中号方形",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "25fb"
                        },
                        {
                            "description": "Black medium small square",
                            "description_zh_cn": "黑色中号小方块",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "25fe"
                        },
                        {
                            "description": "White medium small square",
                            "description_zh_cn": "白色中号小方块",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "25fd"
                        },
                        {
                            "description": "Black small square",
                            "description_zh_cn": "黑色小方块",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "25aa"
                        },
                        {
                            "description": "White small square",
                            "description_zh_cn": "白色小方块",
                            "keywords": "geometric,square,几何,正方形",
                            "unicode": "25ab"
                        },
                        {
                            "description": "Small orange diamond",
                            "description_zh_cn": "小橙钻",
                            "keywords": "diamond,geometric,orange,钻石,几何,橙色",
                            "unicode": "1f538"
                        },
                        {
                            "description": "Small blue diamond",
                            "description_zh_cn": "小蓝钻",
                            "keywords": "blue,diamond,geometric,蓝色,钻石,几何",
                            "unicode": "1f539"
                        },
                        {
                            "description": "Large orange diamond",
                            "description_zh_cn": "大橙色钻石",
                            "keywords": "diamond,geometric,orange,钻石,几何,橙色",
                            "unicode": "1f536"
                        },
                        {
                            "description": "Large blue diamond",
                            "description_zh_cn": "大蓝钻",
                            "keywords": "blue,diamond,geometric,蓝色,钻石,几何",
                            "unicode": "1f537"
                        },
                        {
                            "description": "Up-pointing red triangle",
                            "description_zh_cn": "向上指的红色三角形",
                            "keywords": "up,geometric,red,向上,几何,红色",
                            "unicode": "1f53a"
                        },
                        {
                            "description": "Down-pointing red triangle",
                            "description_zh_cn": "向下的红色三角形",
                            "keywords": "down,geometric,red,向下,几何,红色",
                            "unicode": "1f53b"
                        },
                        {
                            "description": "Black square button",
                            "description_zh_cn": "黑色方形按钮",
                            "keywords": "button,geometric,square,按钮,几何,正方形",
                            "unicode": "1f532"
                        },
                        {
                            "description": "White square button",
                            "description_zh_cn": "白色方形按钮",
                            "keywords": "button,geometric,outlined,square,按钮,几何,概述,方形",
                            "unicode": "1f533"
                        },
                        {
                            "description": "Speaker",
                            "description_zh_cn": "扬声器",
                            "keywords": "speaker,volume,扬声器,音量",
                            "unicode": "1f508"
                        },
                        {
                            "description": "Speaker with one sound wave",
                            "description_zh_cn": "具有一种声波的扬声器",
                            "keywords": "speaker on,low,speaker,volume,wave,扬声器打开,低,扬声器,音量,波",
                            "unicode": "1f509"
                        },
                        {
                            "description": "Speaker with three sound waves",
                            "description_zh_cn": "三声波扬声器",
                            "keywords": "speaker loud,3,entertainment,high,loud,speaker,three,volume,扬声器响亮,3,娱乐,高,响亮,扬声器,三,音量",
                            "unicode": "1f50a"
                        },
                        {
                            "description": "Speaker with cancellation stroke",
                            "description_zh_cn": "取消行程的扬声器",
                            "keywords": "speaker off,mute,quiet,silent,speaker,volume,扬声器关闭、静音、安静、静音、扬声器、音量",
                            "unicode": "1f507"
                        },
                        {
                            "description": "Cheering megaphone",
                            "description_zh_cn": "欢呼的扩音器",
                            "keywords": "cheering,communication,megaphone,bullhorn,欢呼、交流、扩音器、扩音器",
                            "unicode": "1f4e3"
                        },
                        {
                            "description": "Public address loudspeaker",
                            "description_zh_cn": "公共广播扬声器",
                            "keywords": "communication,loud,loudspeaker,public address,megaphone,bullhorn,通信,大声,扬声器,公共广播,扩音器,扩音器",
                            "unicode": "1f4e2"
                        },
                        {
                            "description": "Bell",
                            "description_zh_cn": "钟",
                            "keywords": "bell,钟",
                            "unicode": "1f514"
                        },
                        {
                            "description": "Bell with cancellation stroke",
                            "description_zh_cn": "带取消行程的铃铛",
                            "keywords": "bell with slash,bell,forbidden,mute,no,not,prohibited,quiet,silent,带斜线的铃铛,铃铛,禁止,静音,不,不,禁止,安静,无声",
                            "unicode": "1f515"
                        },
                        {
                            "description": "Playing card joker",
                            "description_zh_cn": "纸牌小丑",
                            "keywords": "card,entertainment,game,joker,playing,卡,娱乐,游戏,小丑,玩",
                            "unicode": "1f0cf"
                        },
                        {
                            "description": "Mahjong tile red dragon",
                            "description_zh_cn": "麻将牌红龙",
                            "keywords": "game,mahjong,red,游戏,麻将,红色",
                            "unicode": "1f004"
                        },
                        {
                            "description": "Spade suit",
                            "description_zh_cn": "铲套装",
                            "keywords": "card,game,spade,suit,卡,游戏,黑桃,西装",
                            "unicode": "2660"
                        },
                        {
                            "description": "Club suit",
                            "description_zh_cn": "俱乐部套装",
                            "keywords": "card,club,clubs,game,suit,卡,俱乐部,俱乐部,游戏,西装",
                            "unicode": "2663"
                        },
                        {
                            "description": "Heart suit",
                            "description_zh_cn": "心套装",
                            "keywords": "card,game,heart,hearts,suit,卡,游戏,心,心,西装",
                            "unicode": "2665"
                        },
                        {
                            "description": "Diamond suit",
                            "description_zh_cn": "钻石套装",
                            "keywords": "card,diamond,diamonds,game,suit,卡,钻石,钻石,游戏,西装",
                            "unicode": "2666"
                        },
                        {
                            "description": "Flower playing cards",
                            "description_zh_cn": "花牌",
                            "keywords": "activity,card,entertainment,flower,game,japanese,playing,活动,卡,娱乐,花卉,游戏,日语,玩",
                            "unicode": "1f3b4"
                        },
                        {
                            "description": "Eye in speech bubble",
                            "description_zh_cn": "讲话泡泡中的眼睛",
                            "keywords": "bubble,eye,speech,witness,泡沫,眼睛,演讲,证人",
                            "unicode": "1f441-200d-1f5e8"
                        },
                        {
                            "description": "Left speech bubble",
                            "description_zh_cn": "左气泡",
                            "keywords": "dialog,speech,对话,演讲",
                            "unicode": "1f5e8"
                        },
                        {
                            "description": "Thought balloon",
                            "description_zh_cn": "思想气球",
                            "keywords": "balloon,bubble,comic,thought,气球,泡泡,漫画,思想",
                            "unicode": "1f4ad"
                        },
                        {
                            "description": "Right anger bubble",
                            "description_zh_cn": "正确的愤怒泡沫",
                            "keywords": "angry,balloon,bubble,mad,生气,气球,泡泡,疯狂",
                            "unicode": "1f5ef"
                        },
                        {
                            "description": "Speech balloon",
                            "description_zh_cn": "演讲气球",
                            "keywords": "balloon,bubble,comic,dialog,speech,气球,泡沫,漫画,对话,演讲",
                            "unicode": "1f4ac"
                        },
                        {
                            "description": "Clock face one oclock",
                            "description_zh_cn": "钟面一点",
                            "keywords": "00,1,1:00,clock,o’clock,one,00,1,1:00,clock,oclock,one",
                            "unicode": "1f550"
                        },
                        {
                            "description": "Clock face two oclock",
                            "description_zh_cn": "钟面两点",
                            "keywords": "00,2,2:00,clock,o’clock,two,00,2,2:00,clock,oclock,2",
                            "unicode": "1f551"
                        },
                        {
                            "description": "Clock face three oclock",
                            "description_zh_cn": "钟面三点",
                            "keywords": "00,3,3:00,clock,o’clock,three,00,3,3:00,clock,oclock,三",
                            "unicode": "1f552"
                        },
                        {
                            "description": "Clock face four oclock",
                            "description_zh_cn": "四点钟面",
                            "keywords": "00,4,4:00,clock,four,o’clock,00,4,4:00,clock,4,oclock",
                            "unicode": "1f553"
                        },
                        {
                            "description": "Clock face five oclock",
                            "description_zh_cn": "五点钟面",
                            "keywords": "00,5,5:00,clock,five,o’clock,00,5,5:00,clock,5,oclock",
                            "unicode": "1f554"
                        },
                        {
                            "description": "Clock face six oclock",
                            "description_zh_cn": "六点钟面",
                            "keywords": "00,6,6:00,clock,o’clock,six,00,6,6:00,clock,oclock,6",
                            "unicode": "1f555"
                        },
                        {
                            "description": "Clock face seven oclock",
                            "description_zh_cn": "钟面七点",
                            "keywords": "00,7,7:00,clock,o’clock,seven,00,7,7:00,clock,oclock,7",
                            "unicode": "1f556"
                        },
                        {
                            "description": "Clock face eight oclock",
                            "description_zh_cn": "八点钟面",
                            "keywords": "00,8,8:00,clock,eight,o’clock,00,8,8:00,clock,8,oclock",
                            "unicode": "1f557"
                        },
                        {
                            "description": "Clock face nine oclock",
                            "description_zh_cn": "钟面九点",
                            "keywords": "00,9,9:00,clock,nine,o’clock,00,9,9:00,clock,9,oclock",
                            "unicode": "1f558"
                        },
                        {
                            "description": "Clock face ten oclock",
                            "description_zh_cn": "钟面十点",
                            "keywords": "00,10,10:00,clock,o’clock,ten,00,10,10:00,clock,oclock,10",
                            "unicode": "1f559"
                        },
                        {
                            "description": "Clock face eleven oclock",
                            "description_zh_cn": "钟面十一点",
                            "keywords": "00,11,11:00,clock,eleven,o’clock,00,11,11:00,clock,11,oclock",
                            "unicode": "1f55a"
                        },
                        {
                            "description": "Clock face twelve oclock",
                            "description_zh_cn": "钟面十二点",
                            "keywords": "00,12,12:00,clock,o’clock,twelve,00,12,12:00,clock,oclock,12",
                            "unicode": "1f55b"
                        },
                        {
                            "description": "Clock face one-thirty",
                            "description_zh_cn": "钟面一三十",
                            "keywords": "1,1:30,30,clock,one,thirty,1,1:30,30,时钟,一,三十",
                            "unicode": "1f55c"
                        },
                        {
                            "description": "Clock face two-thirty",
                            "description_zh_cn": "钟面二点三十分",
                            "keywords": "2,2:30,30,clock,thirty,two,2,2:30,30,时钟,三十,二",
                            "unicode": "1f55d"
                        },
                        {
                            "description": "Clock face three-thirty",
                            "description_zh_cn": "钟面三点三十分",
                            "keywords": "3,3:30,30,clock,thirty,three,3,3:30,30,时钟,三十,三",
                            "unicode": "1f55e"
                        },
                        {
                            "description": "Clock face four-thirty",
                            "description_zh_cn": "钟面四点三十分",
                            "keywords": "30,4,4:30,clock,four,thirty,30,4,4:30,时钟,四,三十",
                            "unicode": "1f55f"
                        },
                        {
                            "description": "Clock face five-thirty",
                            "description_zh_cn": "钟面五点三十分",
                            "keywords": "30,5,5:30,clock,five,thirty,30,5,5:30,时钟,五,三十",
                            "unicode": "1f560"
                        },
                        {
                            "description": "Clock face six-thirty",
                            "description_zh_cn": "钟面六点三十分",
                            "keywords": "30,6,6:30,clock,six,thirty,30,6,6:30,时钟,六,三十",
                            "unicode": "1f561"
                        },
                        {
                            "description": "Clock face seven-thirty",
                            "description_zh_cn": "钟面七点三十分",
                            "keywords": "30,7,7:30,clock,seven,thirty,30,7,7:30,时钟,七,三十",
                            "unicode": "1f562"
                        },
                        {
                            "description": "Clock face eight-thirty",
                            "description_zh_cn": "钟面八点三十分",
                            "keywords": "30,8,8:30,clock,eight,thirty,30,8,8:30,时钟,八,三十",
                            "unicode": "1f563"
                        },
                        {
                            "description": "Clock face nine-thirty",
                            "description_zh_cn": "钟面九点三十分",
                            "keywords": "30,9,9:30,clock,nine,thirty,30,9,9:30,时钟,九,三十",
                            "unicode": "1f564"
                        },
                        {
                            "description": "Clock face ten-thirty",
                            "description_zh_cn": "钟面十点三十分",
                            "keywords": "10,10:30,30,clock,ten,thirty,10,10:30,30,时钟,十,三十",
                            "unicode": "1f565"
                        },
                        {
                            "description": "Clock face eleven-thirty",
                            "description_zh_cn": "钟面十一点三十分",
                            "keywords": "11,11:30,30,clock,eleven,thirty,11,11:30,30,时钟,十一,三十",
                            "unicode": "1f566"
                        },
                        {
                            "description": "Clock face twelve-thirty",
                            "description_zh_cn": "钟面十二点三十分",
                            "keywords": "12,12:30,30,clock,thirty,twelve,12,12:30,30,时钟,三十,十二",
                            "unicode": "1f567"
                        },
                        {
                            "description": "Regional indicator symbol letter a",
                            "description_zh_cn": "区域指标符号字母 a",
                            "keywords": ",",
                            "unicode": "1f1e6"
                        },
                        {
                            "description": "Regional indicator symbol letter b",
                            "description_zh_cn": "区域指标符号字母 b",
                            "keywords": ",",
                            "unicode": "1f1e7"
                        },
                        {
                            "description": "Regional indicator symbol letter c",
                            "description_zh_cn": "区域指标符号字母 c",
                            "keywords": ",",
                            "unicode": "1f1e8"
                        },
                        {
                            "description": "Regional indicator symbol letter d",
                            "description_zh_cn": "区域指标符号字母 d",
                            "keywords": ",",
                            "unicode": "1f1e9"
                        },
                        {
                            "description": "Regional indicator symbol letter e",
                            "description_zh_cn": "区域指标符号字母 e",
                            "keywords": ",",
                            "unicode": "1f1ea"
                        },
                        {
                            "description": "Regional indicator symbol letter f",
                            "description_zh_cn": "区域指标符号字母 f",
                            "keywords": ",",
                            "unicode": "1f1eb"
                        },
                        {
                            "description": "Regional indicator symbol letter g",
                            "description_zh_cn": "区域指标符号字母 g",
                            "keywords": ",",
                            "unicode": "1f1ec"
                        },
                        {
                            "description": "Regional indicator symbol letter h",
                            "description_zh_cn": "区域指标符号字母 h",
                            "keywords": ",",
                            "unicode": "1f1ed"
                        },
                        {
                            "description": "Regional indicator symbol letter i",
                            "description_zh_cn": "区域指标符号字母 i",
                            "keywords": ",",
                            "unicode": "1f1ee"
                        },
                        {
                            "description": "Regional indicator symbol letter j",
                            "description_zh_cn": "区域指标符号字母 j",
                            "keywords": ",",
                            "unicode": "1f1ef"
                        },
                        {
                            "description": "Regional indicator symbol letter k",
                            "description_zh_cn": "区域指标符号字母 k",
                            "keywords": ",",
                            "unicode": "1f1f0"
                        },
                        {
                            "description": "Regional indicator symbol letter l",
                            "description_zh_cn": "区域指标符号字母 l",
                            "keywords": ",",
                            "unicode": "1f1f1"
                        },
                        {
                            "description": "Regional indicator symbol letter m",
                            "description_zh_cn": "区域指标符号字母 m",
                            "keywords": ",",
                            "unicode": "1f1f2"
                        },
                        {
                            "description": "Regional indicator symbol letter n",
                            "description_zh_cn": "区域指标符号字母 n",
                            "keywords": ",",
                            "unicode": "1f1f3"
                        },
                        {
                            "description": "Regional indicator symbol letter o",
                            "description_zh_cn": "区域指标符号字母 o",
                            "keywords": ",",
                            "unicode": "1f1f4"
                        },
                        {
                            "description": "Regional indicator symbol letter p",
                            "description_zh_cn": "区域指标符号字母 p",
                            "keywords": ",",
                            "unicode": "1f1f5"
                        },
                        {
                            "description": "Regional indicator symbol letter q",
                            "description_zh_cn": "区域指标符号字母 q",
                            "keywords": ",",
                            "unicode": "1f1f6"
                        },
                        {
                            "description": "Regional indicator symbol letter r",
                            "description_zh_cn": "区域指标符号字母 r",
                            "keywords": ",",
                            "unicode": "1f1f7"
                        },
                        {
                            "description": "Regional indicator symbol letter s",
                            "description_zh_cn": "区域指标符号字母 s",
                            "keywords": ",",
                            "unicode": "1f1f8"
                        },
                        {
                            "description": "Regional indicator symbol letter t",
                            "description_zh_cn": "区域指标符号字母 t",
                            "keywords": ",",
                            "unicode": "1f1f9"
                        },
                        {
                            "description": "Regional indicator symbol letter u",
                            "description_zh_cn": "区域指标符号字母 u",
                            "keywords": ",",
                            "unicode": "1f1fa"
                        },
                        {
                            "description": "Regional indicator symbol letter v",
                            "description_zh_cn": "区域指标符号字母 v",
                            "keywords": ",",
                            "unicode": "1f1fb"
                        },
                        {
                            "description": "Regional indicator symbol letter w",
                            "description_zh_cn": "区域指标符号字母 w",
                            "keywords": ",",
                            "unicode": "1f1fc"
                        },
                        {
                            "description": "Regional indicator symbol letter x",
                            "description_zh_cn": "区域指标符号字母 x",
                            "keywords": ",",
                            "unicode": "1f1fd"
                        },
                        {
                            "description": "Regional indicator symbol letter y",
                            "description_zh_cn": "区域指标符号字母 y",
                            "keywords": ",",
                            "unicode": "1f1fe"
                        },
                        {
                            "description": "Regional indicator symbol letter z",
                            "description_zh_cn": "区域指标符号字母 z",
                            "keywords": ",",
                            "unicode": "1f1ff"
                        }
                    ],
                    "title": "Symbols",
                    "title_zh_cn": "符号"
                },
                {
                    "id": "flags",
                    "items": [
                        {
                            "description": "Waving white flag",
                            "description_zh_cn": "挥舞白旗",
                            "keywords": "flag,waving,旗帜,挥舞着",
                            "unicode": "1f3f3"
                        },
                        {
                            "description": "Waving black flag",
                            "description_zh_cn": "挥舞着黑旗",
                            "keywords": "flag,waving,旗帜,挥舞着",
                            "unicode": "1f3f4"
                        },
                        {
                            "description": "Chequered flag",
                            "description_zh_cn": "方格旗",
                            "keywords": "checkered,chequered,flag,racing,方格,方格,旗帜,赛车",
                            "unicode": "1f3c1"
                        },
                        {
                            "description": "Triangular flag on post",
                            "description_zh_cn": "柱子上的三角旗",
                            "keywords": "flag,post,旗帜,岗位",
                            "unicode": "1f6a9"
                        },
                        {
                            "description": "Crossed flags",
                            "description_zh_cn": "交叉的旗帜",
                            "keywords": "activity,celebration,cross,crossed,flag,japanese,活动,庆祝活动,交叉,越过,标志,日语",
                            "unicode": "1f38c"
                        },
                        {
                            "description": "Pirate flag",
                            "description_zh_cn": "海盗旗",
                            "keywords": "flag,pirate,旗帜,海盗",
                            "unicode": "1f3f4-200d-2620-fe0f"
                        },
                        {
                            "description": "Rainbow flag",
                            "description_zh_cn": "彩虹旗",
                            "keywords": "flag,rainbow,pride,lgbt,旗帜,彩虹,骄傲,lgbt",
                            "unicode": "1f3f3-fe0f-200d-1f308"
                        },
                        {
                            "description": "Transgender flag",
                            "description_zh_cn": "跨性别旗帜",
                            "keywords": "flag,transgender,pride,lgbt,旗帜,变性人,骄傲,lgbt",
                            "unicode": "1f3f3-fe0f-200d-26a7-fe0f"
                        },
                        {
                            "description": "Flag of Ascension Island",
                            "description_zh_cn": "阿森松岛的旗帜",
                            "keywords": "ascension,flag,island,升天,旗帜,岛",
                            "unicode": "1f1e6-1f1e8"
                        },
                        {
                            "description": "Flag of Andorra",
                            "description_zh_cn": "安道尔",
                            "keywords": "andorra,flag,安道尔,国旗",
                            "unicode": "1f1e6-1f1e9"
                        },
                        {
                            "description": "Flag of United Arab Emirates",
                            "description_zh_cn": "阿拉伯联合酋长国",
                            "keywords": "emirates,flag,uae,united,酋长国、国旗、阿联酋、联合",
                            "unicode": "1f1e6-1f1ea"
                        },
                        {
                            "description": "Flag of Afghanistan",
                            "description_zh_cn": "阿富汗",
                            "keywords": "afghanistan,flag,阿富汗,国旗",
                            "unicode": "1f1e6-1f1eb"
                        },
                        {
                            "description": "Flag of Antigua & Barbuda",
                            "description_zh_cn": "安提瓜和巴布达",
                            "keywords": "antigua,barbuda,flag,安提瓜,巴布达,国旗",
                            "unicode": "1f1e6-1f1ec"
                        },
                        {
                            "description": "Flag of Anguilla",
                            "description_zh_cn": "安圭拉",
                            "keywords": "anguilla,flag,安圭拉,国旗",
                            "unicode": "1f1e6-1f1ee"
                        },
                        {
                            "description": "Flag of Albania",
                            "description_zh_cn": "阿尔巴尼亚",
                            "keywords": "albania,flag,阿尔巴尼亚,国旗",
                            "unicode": "1f1e6-1f1f1"
                        },
                        {
                            "description": "Flag of Armenia",
                            "description_zh_cn": "亚美尼亚",
                            "keywords": "armenia,flag,亚美尼亚,国旗",
                            "unicode": "1f1e6-1f1f2"
                        },
                        {
                            "description": "Flag of Angola",
                            "description_zh_cn": "安哥拉",
                            "keywords": "angola,flag,安哥拉,国旗",
                            "unicode": "1f1e6-1f1f4"
                        },
                        {
                            "description": "Flag of Antarctica",
                            "description_zh_cn": "南极洲的旗帜",
                            "keywords": "antarctica,flag,南极洲,旗",
                            "unicode": "1f1e6-1f1f6"
                        },
                        {
                            "description": "Flag of Argentina",
                            "description_zh_cn": "阿根廷",
                            "keywords": "argentina,flag,阿根廷,国旗",
                            "unicode": "1f1e6-1f1f7"
                        },
                        {
                            "description": "Flag of American Samoa",
                            "description_zh_cn": "美属萨摩亚",
                            "keywords": "american,flag,samoa,美国,国旗,萨摩亚",
                            "unicode": "1f1e6-1f1f8"
                        },
                        {
                            "description": "Flag of Austria",
                            "description_zh_cn": "奥地利",
                            "keywords": "austria,flag,奥地利,国旗",
                            "unicode": "1f1e6-1f1f9"
                        },
                        {
                            "description": "Flag of Australia",
                            "description_zh_cn": "澳大利亚",
                            "keywords": "australia,flag,heard,mcdonald,澳大利亚,国旗,听说,麦当劳",
                            "unicode": "1f1e6-1f1fa"
                        },
                        {
                            "description": "Flag of Aruba",
                            "description_zh_cn": "阿鲁巴",
                            "keywords": "aruba,flag,阿鲁巴,国旗",
                            "unicode": "1f1e6-1f1fc"
                        },
                        {
                            "description": "Flag of Åland Islands",
                            "description_zh_cn": "奥兰群岛的旗帜",
                            "keywords": "åland,flag,奥兰,旗帜",
                            "unicode": "1f1e6-1f1fd"
                        },
                        {
                            "description": "Flag of Azerbaijan",
                            "description_zh_cn": "阿塞拜疆",
                            "keywords": "azerbaijan,flag,阿塞拜疆,国旗",
                            "unicode": "1f1e6-1f1ff"
                        },
                        {
                            "description": "Flag of Bosnia & Herzegovina",
                            "description_zh_cn": "波斯尼亚和黑塞哥维那",
                            "keywords": "bosnia,flag,herzegovina,波斯尼亚,国旗,黑塞哥维那",
                            "unicode": "1f1e7-1f1e6"
                        },
                        {
                            "description": "Flag of Barbados",
                            "description_zh_cn": "巴巴多斯",
                            "keywords": "barbados,flag,巴巴多斯,国旗",
                            "unicode": "1f1e7-1f1e7"
                        },
                        {
                            "description": "Flag of Bangladesh",
                            "description_zh_cn": "孟加拉国",
                            "keywords": "bangladesh,flag,孟加拉国,国旗",
                            "unicode": "1f1e7-1f1e9"
                        },
                        {
                            "description": "Flag of Belgium",
                            "description_zh_cn": "比利时",
                            "keywords": "belgium,flag,比利时,国旗",
                            "unicode": "1f1e7-1f1ea"
                        },
                        {
                            "description": "Flag of Burkina Faso",
                            "description_zh_cn": "布基纳法索",
                            "keywords": "burkina faso,flag,布基纳法索,国旗",
                            "unicode": "1f1e7-1f1eb"
                        },
                        {
                            "description": "Flag of Bulgaria",
                            "description_zh_cn": "保加利亚",
                            "keywords": "bulgaria,flag,保加利亚,国旗",
                            "unicode": "1f1e7-1f1ec"
                        },
                        {
                            "description": "Flag of Bahrain",
                            "description_zh_cn": "巴林",
                            "keywords": "bahrain,flag,巴林,国旗",
                            "unicode": "1f1e7-1f1ed"
                        },
                        {
                            "description": "Flag of Burundi",
                            "description_zh_cn": "布隆迪",
                            "keywords": "burundi,flag,布隆迪,国旗",
                            "unicode": "1f1e7-1f1ee"
                        },
                        {
                            "description": "Flag of Benin",
                            "description_zh_cn": "贝宁",
                            "keywords": "benin,flag,贝宁,国旗",
                            "unicode": "1f1e7-1f1ef"
                        },
                        {
                            "description": "Flag of St. Barthélemy",
                            "description_zh_cn": "圣巴泰勒米",
                            "keywords": "barthelemy,barthélemy,flag,saint,巴泰勒米,巴泰勒米,国旗,圣",
                            "unicode": "1f1e7-1f1f1"
                        },
                        {
                            "description": "Flag of Bermuda",
                            "description_zh_cn": "百慕大",
                            "keywords": "bermuda,flag,百慕大,国旗",
                            "unicode": "1f1e7-1f1f2"
                        },
                        {
                            "description": "Flag of Brunei",
                            "description_zh_cn": "文莱",
                            "keywords": "brunei,darussalam,flag,文莱,达鲁萨兰国,国旗",
                            "unicode": "1f1e7-1f1f3"
                        },
                        {
                            "description": "Flag of Bolivia",
                            "description_zh_cn": "玻利维亚",
                            "keywords": "bolivia,flag,玻利维亚,国旗",
                            "unicode": "1f1e7-1f1f4"
                        },
                        {
                            "description": "Flag of Caribbean Netherlands",
                            "description_zh_cn": "加勒比荷兰",
                            "keywords": "bonaire,caribbean,eustatius,flag,netherlands,saba,sint,博内尔岛,加勒比海,eustatius,标志,荷兰,萨巴岛,圣",
                            "unicode": "1f1e7-1f1f6"
                        },
                        {
                            "description": "Flag of Brazil",
                            "description_zh_cn": "巴西",
                            "keywords": "brazil,flag,巴西,国旗",
                            "unicode": "1f1e7-1f1f7"
                        },
                        {
                            "description": "Flag of Bahamas",
                            "description_zh_cn": "巴哈马",
                            "keywords": "bahamas,flag,巴哈马,国旗",
                            "unicode": "1f1e7-1f1f8"
                        },
                        {
                            "description": "Flag of Bhutan",
                            "description_zh_cn": "不丹",
                            "keywords": "bhutan,flag,不丹,国旗",
                            "unicode": "1f1e7-1f1f9"
                        },
                        {
                            "description": "Flag of Botswana",
                            "description_zh_cn": "博茨瓦纳",
                            "keywords": "botswana,flag,博茨瓦纳,国旗",
                            "unicode": "1f1e7-1f1fc"
                        },
                        {
                            "description": "Flag of Belarus",
                            "description_zh_cn": "白俄罗斯",
                            "keywords": "belarus,flag,白俄罗斯,国旗",
                            "unicode": "1f1e7-1f1fe"
                        },
                        {
                            "description": "Flag of Belize",
                            "description_zh_cn": "伯利兹",
                            "keywords": "belize,flag,伯利兹,国旗",
                            "unicode": "1f1e7-1f1ff"
                        },
                        {
                            "description": "Flag of Canada",
                            "description_zh_cn": "加拿大",
                            "keywords": "canada,flag,加拿大,国旗",
                            "unicode": "1f1e8-1f1e6"
                        },
                        {
                            "description": "Flag of Cocos Islands",
                            "description_zh_cn": "科科斯群岛的旗帜",
                            "keywords": "cocos,flag,island,keeling,可可,国旗,岛,龙骨",
                            "unicode": "1f1e8-1f1e8"
                        },
                        {
                            "description": "Flag of Congo - Kinshasa",
                            "description_zh_cn": "刚果国旗 - 金沙萨",
                            "keywords": "congo,congo-kinshasa,democratic republic of congo,drc,flag,kinshasa,republic,刚果,刚果金沙萨,刚果民主共和国,刚果民主共和国,国旗,金沙萨,共和国",
                            "unicode": "1f1e8-1f1e9"
                        },
                        {
                            "description": "Flag of Central African Republic",
                            "description_zh_cn": "中非共和国",
                            "keywords": "central african republic,flag,republic,中非共和国,国旗,共和国",
                            "unicode": "1f1e8-1f1eb"
                        },
                        {
                            "description": "Flag of Congo - Brazzaville",
                            "description_zh_cn": "刚果国旗 - 布拉柴维尔",
                            "keywords": "brazzaville,congo,congo republic,congo-brazzaville,flag,republic,republic of the congo,布拉柴维尔,刚果,刚果共和国,刚果-布拉柴维尔,国旗,共和国,刚果共和国",
                            "unicode": "1f1e8-1f1ec"
                        },
                        {
                            "description": "Flag of Switzerland",
                            "description_zh_cn": "瑞士",
                            "keywords": "flag,switzerland,国旗,瑞士",
                            "unicode": "1f1e8-1f1ed"
                        },
                        {
                            "description": "Flag of Côte d’Ivoire",
                            "description_zh_cn": "科特迪瓦",
                            "keywords": "cote ivoire,côte ivoire,flag,ivory coast,科特迪瓦,科特迪瓦,国旗,象牙海岸",
                            "unicode": "1f1e8-1f1ee"
                        },
                        {
                            "description": "Flag of Cook Islands",
                            "description_zh_cn": "库克群岛",
                            "keywords": "cook,flag,island,厨师,国旗,岛",
                            "unicode": "1f1e8-1f1f0"
                        },
                        {
                            "description": "Flag of Chile",
                            "description_zh_cn": "智利",
                            "keywords": "chile,flag,智利,国旗",
                            "unicode": "1f1e8-1f1f1"
                        },
                        {
                            "description": "Flag of Cameroon",
                            "description_zh_cn": "喀麦隆",
                            "keywords": "cameroon,flag,喀麦隆,国旗",
                            "unicode": "1f1e8-1f1f2"
                        },
                        {
                            "description": "Flag of China",
                            "description_zh_cn": "中国",
                            "keywords": "china,flag,中国,国旗",
                            "unicode": "1f1e8-1f1f3"
                        },
                        {
                            "description": "Flag of Colombia",
                            "description_zh_cn": "哥伦比亚",
                            "keywords": "colombia,flag,哥伦比亚,国旗",
                            "unicode": "1f1e8-1f1f4"
                        },
                        {
                            "description": "Flag of Costa Rica",
                            "description_zh_cn": "哥斯达黎加",
                            "keywords": "costa rica,flag,哥斯达黎加,国旗",
                            "unicode": "1f1e8-1f1f7"
                        },
                        {
                            "description": "Flag of Cuba",
                            "description_zh_cn": "古巴",
                            "keywords": "cuba,flag,古巴,国旗",
                            "unicode": "1f1e8-1f1fa"
                        },
                        {
                            "description": "Flag of Cape Verde",
                            "description_zh_cn": "佛得角",
                            "keywords": "cabo,cape,flag,verde,卡波,海角,国旗,佛得角",
                            "unicode": "1f1e8-1f1fb"
                        },
                        {
                            "description": "Flag of Curaçao",
                            "description_zh_cn": "库拉索岛旗帜",
                            "keywords": "antilles,curacao,curaçao,flag,安的列斯群岛,库拉索,库拉索,国旗",
                            "unicode": "1f1e8-1f1fc"
                        },
                        {
                            "description": "Flag of Christmas Island",
                            "description_zh_cn": "圣诞岛的旗帜",
                            "keywords": "christmas,flag,island,圣诞节,旗帜,岛",
                            "unicode": "1f1e8-1f1fd"
                        },
                        {
                            "description": "Flag of Cyprus",
                            "description_zh_cn": "塞浦路斯",
                            "keywords": "cyprus,flag,塞浦路斯,国旗",
                            "unicode": "1f1e8-1f1fe"
                        },
                        {
                            "description": "Flag of Czech Republic",
                            "description_zh_cn": "捷克共和国",
                            "keywords": "czech republic,flag,捷克共和国,国旗",
                            "unicode": "1f1e8-1f1ff"
                        },
                        {
                            "description": "Flag of Germany",
                            "description_zh_cn": "德国",
                            "keywords": "flag,germany,国旗,德国",
                            "unicode": "1f1e9-1f1ea"
                        },
                        {
                            "description": "Flag of Djibouti",
                            "description_zh_cn": "吉布提",
                            "keywords": "djibouti,flag,吉布提,国旗",
                            "unicode": "1f1e9-1f1ef"
                        },
                        {
                            "description": "Flag of Denmark",
                            "description_zh_cn": "丹麦",
                            "keywords": "denmark,flag,丹麦,国旗",
                            "unicode": "1f1e9-1f1f0"
                        },
                        {
                            "description": "Flag of Dominica",
                            "description_zh_cn": "多米尼加",
                            "keywords": "dominica,flag,多米尼加,国旗",
                            "unicode": "1f1e9-1f1f2"
                        },
                        {
                            "description": "Flag of Dominican Republic",
                            "description_zh_cn": "多米尼加共和国",
                            "keywords": "dominican republic,flag,多米尼加共和国,国旗",
                            "unicode": "1f1e9-1f1f4"
                        },
                        {
                            "description": "Flag of Algeria",
                            "description_zh_cn": "阿尔及利亚",
                            "keywords": "algeria,flag,阿尔及利亚,国旗",
                            "unicode": "1f1e9-1f1ff"
                        },
                        {
                            "description": "Flag of Ecuador",
                            "description_zh_cn": "厄瓜多尔",
                            "keywords": "ecuador,flag,厄瓜多尔,国旗",
                            "unicode": "1f1ea-1f1e8"
                        },
                        {
                            "description": "Flag of England",
                            "description_zh_cn": "英国",
                            "keywords": "england,flag,英格兰,国旗",
                            "unicode": "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f"
                        },
                        {
                            "description": "Flag of Estonia",
                            "description_zh_cn": "爱沙尼亚",
                            "keywords": "estonia,flag,爱沙尼亚,国旗",
                            "unicode": "1f1ea-1f1ea"
                        },
                        {
                            "description": "Flag of Egypt",
                            "description_zh_cn": "埃及",
                            "keywords": "egypt,flag,埃及,国旗",
                            "unicode": "1f1ea-1f1ec"
                        },
                        {
                            "description": "Flag of Western Sahara",
                            "description_zh_cn": "西撒哈拉旗帜",
                            "keywords": "flag,sahara,west,western sahara,国旗,撒哈拉,西,西撒哈拉",
                            "unicode": "1f1ea-1f1ed"
                        },
                        {
                            "description": "Flag of Eritrea",
                            "description_zh_cn": "厄立特里亚",
                            "keywords": "eritrea,flag,厄立特里亚,国旗",
                            "unicode": "1f1ea-1f1f7"
                        },
                        {
                            "description": "Flag of Spain",
                            "description_zh_cn": "西班牙",
                            "keywords": "flag,spain,ceuta,melilla,国旗,西班牙,休达,梅利利亚",
                            "unicode": "1f1ea-1f1f8"
                        },
                        {
                            "description": "Flag of Ethiopia",
                            "description_zh_cn": "埃塞俄比亚",
                            "keywords": "ethiopia,flag,埃塞俄比亚,国旗",
                            "unicode": "1f1ea-1f1f9"
                        },
                        {
                            "description": "Flag of European Union",
                            "description_zh_cn": "欧盟旗帜",
                            "keywords": "european union,flag,欧盟,旗帜",
                            "unicode": "1f1ea-1f1fa"
                        },
                        {
                            "description": "Flag of Finland",
                            "description_zh_cn": "芬兰",
                            "keywords": "finland,flag,芬兰,国旗",
                            "unicode": "1f1eb-1f1ee"
                        },
                        {
                            "description": "Flag of Fiji",
                            "description_zh_cn": "斐济",
                            "keywords": "fiji,flag,斐济,国旗",
                            "unicode": "1f1eb-1f1ef"
                        },
                        {
                            "description": "Flag of Falkland Islands",
                            "description_zh_cn": "福克兰群岛",
                            "keywords": "falkland,falklands,flag,island,islas,malvinas,福克兰群岛,福克兰群岛,标志,岛,岛,马尔维纳斯",
                            "unicode": "1f1eb-1f1f0"
                        },
                        {
                            "description": "Flag of Micronesia",
                            "description_zh_cn": "密克罗尼西亚",
                            "keywords": "flag,micronesia,国旗,密克罗尼西亚",
                            "unicode": "1f1eb-1f1f2"
                        },
                        {
                            "description": "Flag of Faroe Islands",
                            "description_zh_cn": "法罗群岛的旗帜",
                            "keywords": "faroe,flag,island,法罗,国旗,岛",
                            "unicode": "1f1eb-1f1f4"
                        },
                        {
                            "description": "Flag of France",
                            "description_zh_cn": "法国",
                            "keywords": "flag,france,clipperton island,st. martin,saint martin,国旗,法国,克利珀顿岛,圣。马丁,圣马丁",
                            "unicode": "1f1eb-1f1f7"
                        },
                        {
                            "description": "Flag of Gabon",
                            "description_zh_cn": "加蓬",
                            "keywords": "flag,gabon,国旗,加蓬",
                            "unicode": "1f1ec-1f1e6"
                        },
                        {
                            "description": "Flag of United Kingdom",
                            "description_zh_cn": "英国",
                            "keywords": "britain,british,cornwall,england,flag,great britain,ireland,northern ireland,scotland,uk,union jack,united,united kingdom,wales,英国,英国,康沃尔郡,英格兰,国旗,大不列颠,爱尔兰,北爱尔兰,苏格兰,英国,联盟杰克,联合王国,威尔士",
                            "unicode": "1f1ec-1f1e7"
                        },
                        {
                            "description": "Flag of Grenada",
                            "description_zh_cn": "格林纳达",
                            "keywords": "flag,grenada,国旗,格林纳达",
                            "unicode": "1f1ec-1f1e9"
                        },
                        {
                            "description": "Flag of Georgia",
                            "description_zh_cn": "格鲁吉亚",
                            "keywords": "flag,georgia,国旗,格鲁吉亚",
                            "unicode": "1f1ec-1f1ea"
                        },
                        {
                            "description": "Flag of French Guiana",
                            "description_zh_cn": "法属圭亚那",
                            "keywords": "flag,french,guiana,国旗,法国,圭亚那",
                            "unicode": "1f1ec-1f1eb"
                        },
                        {
                            "description": "Flag of Guernsey",
                            "description_zh_cn": "根西岛旗帜",
                            "keywords": "flag,guernsey,国旗,根西岛",
                            "unicode": "1f1ec-1f1ec"
                        },
                        {
                            "description": "Flag of Ghana",
                            "description_zh_cn": "加纳",
                            "keywords": "flag,ghana,国旗,加纳",
                            "unicode": "1f1ec-1f1ed"
                        },
                        {
                            "description": "Flag of Gibraltar",
                            "description_zh_cn": "直布罗陀",
                            "keywords": "flag,gibraltar,国旗,直布罗陀",
                            "unicode": "1f1ec-1f1ee"
                        },
                        {
                            "description": "Flag of Greenland",
                            "description_zh_cn": "格陵兰",
                            "keywords": "flag,greenland,旗,格陵兰",
                            "unicode": "1f1ec-1f1f1"
                        },
                        {
                            "description": "Flag of Gambia",
                            "description_zh_cn": "冈比亚",
                            "keywords": "flag,gambia,国旗,冈比亚",
                            "unicode": "1f1ec-1f1f2"
                        },
                        {
                            "description": "Flag of Guinea",
                            "description_zh_cn": "几内亚",
                            "keywords": "flag,guinea,国旗,几内亚",
                            "unicode": "1f1ec-1f1f3"
                        },
                        {
                            "description": "Flag of Guadeloupe",
                            "description_zh_cn": "瓜德罗普岛",
                            "keywords": "flag,guadeloupe,国旗,瓜德罗普岛",
                            "unicode": "1f1ec-1f1f5"
                        },
                        {
                            "description": "Flag of Equatorial Guinea",
                            "description_zh_cn": "赤道几内亚",
                            "keywords": "equatorial guinea,flag,guinea,赤道几内亚,国旗,几内亚",
                            "unicode": "1f1ec-1f1f6"
                        },
                        {
                            "description": "Flag of Greece",
                            "description_zh_cn": "希腊",
                            "keywords": "flag,greece,国旗,希腊",
                            "unicode": "1f1ec-1f1f7"
                        },
                        {
                            "description": "Flag of South Georgia & South Sandwich Islands",
                            "description_zh_cn": "南乔治亚岛和南桑威奇群岛的旗帜",
                            "keywords": "flag,georgia,island,south,south georgia,south sandwich,国旗,格鲁吉亚,岛,南,南乔治亚州,南三明治",
                            "unicode": "1f1ec-1f1f8"
                        },
                        {
                            "description": "Flag of Guatemala",
                            "description_zh_cn": "危地马拉",
                            "keywords": "flag,guatemala,国旗,危地马拉",
                            "unicode": "1f1ec-1f1f9"
                        },
                        {
                            "description": "Flag of Guam",
                            "description_zh_cn": "关岛",
                            "keywords": "flag,guam,国旗,关岛",
                            "unicode": "1f1ec-1f1fa"
                        },
                        {
                            "description": "Flag of Guinea-Bissau",
                            "description_zh_cn": "几内亚比绍",
                            "keywords": "bissau,flag,guinea,比绍,国旗,几内亚",
                            "unicode": "1f1ec-1f1fc"
                        },
                        {
                            "description": "Flag of Guyana",
                            "description_zh_cn": "圭亚那",
                            "keywords": "flag,guyana,国旗,圭亚那",
                            "unicode": "1f1ec-1f1fe"
                        },
                        {
                            "description": "Flag of Hong Kong",
                            "description_zh_cn": "中国香港",
                            "keywords": "china,flag,hong kong,中国,国旗,香港",
                            "unicode": "1f1ed-1f1f0"
                        },
                        {
                            "description": "Flag of Honduras",
                            "description_zh_cn": "洪都拉斯",
                            "keywords": "flag,honduras,国旗,洪都拉斯",
                            "unicode": "1f1ed-1f1f3"
                        },
                        {
                            "description": "Flag of Croatia",
                            "description_zh_cn": "克罗地亚",
                            "keywords": "croatia,flag,克罗地亚,国旗",
                            "unicode": "1f1ed-1f1f7"
                        },
                        {
                            "description": "Flag of Haiti",
                            "description_zh_cn": "海地",
                            "keywords": "flag,haiti,国旗,海地",
                            "unicode": "1f1ed-1f1f9"
                        },
                        {
                            "description": "Flag of Hungary",
                            "description_zh_cn": "匈牙利",
                            "keywords": "flag,hungary,国旗,匈牙利",
                            "unicode": "1f1ed-1f1fa"
                        },
                        {
                            "description": "Flag of Canary Islands",
                            "description_zh_cn": "加那利群岛的旗帜",
                            "keywords": "canary,flag,island,金丝雀,国旗,岛",
                            "unicode": "1f1ee-1f1e8"
                        },
                        {
                            "description": "Flag of Indonesia",
                            "description_zh_cn": "印度尼西亚",
                            "keywords": "flag,indonesia,国旗,印度尼西亚",
                            "unicode": "1f1ee-1f1e9"
                        },
                        {
                            "description": "Flag of Ireland",
                            "description_zh_cn": "爱尔兰",
                            "keywords": "flag,ireland,国旗,爱尔兰",
                            "unicode": "1f1ee-1f1ea"
                        },
                        {
                            "description": "Flag of Israel",
                            "description_zh_cn": "以色列",
                            "keywords": "flag,israel,国旗,以色列",
                            "unicode": "1f1ee-1f1f1"
                        },
                        {
                            "description": "Flag of Isle of Man",
                            "description_zh_cn": "马恩岛的旗帜",
                            "keywords": "flag,isle of man,国旗,马恩岛",
                            "unicode": "1f1ee-1f1f2"
                        },
                        {
                            "description": "Flag of India",
                            "description_zh_cn": "印度",
                            "keywords": "flag,india,国旗,印度",
                            "unicode": "1f1ee-1f1f3"
                        },
                        {
                            "description": "Flag of British Indian Ocean Territory",
                            "description_zh_cn": "英属印度洋领地旗帜",
                            "keywords": "british,chagos,flag,indian ocean,island,diego garcia,英国,查戈斯,国旗,印度洋,岛,迭戈加西亚",
                            "unicode": "1f1ee-1f1f4"
                        },
                        {
                            "description": "Flag of Iraq",
                            "description_zh_cn": "伊拉克",
                            "keywords": "flag,iraq,国旗,伊拉克",
                            "unicode": "1f1ee-1f1f6"
                        },
                        {
                            "description": "Flag of Iran",
                            "description_zh_cn": "伊朗",
                            "keywords": "flag,iran,国旗,伊朗",
                            "unicode": "1f1ee-1f1f7"
                        },
                        {
                            "description": "Flag of Iceland",
                            "description_zh_cn": "冰岛",
                            "keywords": "flag,iceland,国旗,冰岛",
                            "unicode": "1f1ee-1f1f8"
                        },
                        {
                            "description": "Flag of Italy",
                            "description_zh_cn": "意大利",
                            "keywords": "flag,italy,国旗,意大利",
                            "unicode": "1f1ee-1f1f9"
                        },
                        {
                            "description": "Flag of Jersey",
                            "description_zh_cn": "泽西岛旗帜",
                            "keywords": "flag,jersey,旗帜,球衣",
                            "unicode": "1f1ef-1f1ea"
                        },
                        {
                            "description": "Flag of Jamaica",
                            "description_zh_cn": "牙买加",
                            "keywords": "flag,jamaica,国旗,牙买加",
                            "unicode": "1f1ef-1f1f2"
                        },
                        {
                            "description": "Flag of Jordan",
                            "description_zh_cn": "约旦",
                            "keywords": "flag,jordan,国旗,约旦",
                            "unicode": "1f1ef-1f1f4"
                        },
                        {
                            "description": "Flag of Japan",
                            "description_zh_cn": "日本",
                            "keywords": "flag,japan,国旗,日本",
                            "unicode": "1f1ef-1f1f5"
                        },
                        {
                            "description": "Flag of Kenya",
                            "description_zh_cn": "肯尼亚",
                            "keywords": "flag,kenya,国旗,肯尼亚",
                            "unicode": "1f1f0-1f1ea"
                        },
                        {
                            "description": "Flag of Kyrgyzstan",
                            "description_zh_cn": "吉尔吉斯斯坦",
                            "keywords": "flag,kyrgyzstan,国旗,吉尔吉斯斯坦",
                            "unicode": "1f1f0-1f1ec"
                        },
                        {
                            "description": "Flag of Cambodia",
                            "description_zh_cn": "柬埔寨",
                            "keywords": "cambodia,flag,柬埔寨,国旗",
                            "unicode": "1f1f0-1f1ed"
                        },
                        {
                            "description": "Flag of Kiribati",
                            "description_zh_cn": "基里巴斯",
                            "keywords": "flag,kiribati,国旗,基里巴斯",
                            "unicode": "1f1f0-1f1ee"
                        },
                        {
                            "description": "Flag of Comoros",
                            "description_zh_cn": "科摩罗",
                            "keywords": "comoros,flag,科摩罗,国旗",
                            "unicode": "1f1f0-1f1f2"
                        },
                        {
                            "description": "Flag of St. Kitts & Nevis",
                            "description_zh_cn": "圣基茨和尼维斯",
                            "keywords": "flag,kitts,nevis,saint,国旗,基茨,尼维斯,圣",
                            "unicode": "1f1f0-1f1f3"
                        },
                        {
                            "description": "Flag of North Korea",
                            "description_zh_cn": "朝鲜",
                            "keywords": "flag,korea,north,north korea,国旗,韩国,北朝鲜,朝鲜",
                            "unicode": "1f1f0-1f1f5"
                        },
                        {
                            "description": "Flag of South Korea",
                            "description_zh_cn": "韩国",
                            "keywords": "flag,korea,south,south korea,国旗,韩国,南韩,韩国",
                            "unicode": "1f1f0-1f1f7"
                        },
                        {
                            "description": "Flag of Kuwait",
                            "description_zh_cn": "科威特",
                            "keywords": "flag,kuwait,国旗,科威特",
                            "unicode": "1f1f0-1f1fc"
                        },
                        {
                            "description": "Flag of Cayman Islands",
                            "description_zh_cn": "开曼群岛",
                            "keywords": "cayman,flag,island,开曼,国旗,岛",
                            "unicode": "1f1f0-1f1fe"
                        },
                        {
                            "description": "Flag of Kazakhstan",
                            "description_zh_cn": "哈萨克斯坦",
                            "keywords": "flag,kazakhstan,国旗,哈萨克斯坦",
                            "unicode": "1f1f0-1f1ff"
                        },
                        {
                            "description": "Flag of Laos",
                            "description_zh_cn": "老挝",
                            "keywords": "flag,laos,国旗,老挝",
                            "unicode": "1f1f1-1f1e6"
                        },
                        {
                            "description": "Flag of Lebanon",
                            "description_zh_cn": "黎巴嫩",
                            "keywords": "flag,lebanon,国旗,黎巴嫩",
                            "unicode": "1f1f1-1f1e7"
                        },
                        {
                            "description": "Flag of St. Lucia",
                            "description_zh_cn": "圣卢西亚",
                            "keywords": "flag,lucia,saint,旗,露西亚,圣",
                            "unicode": "1f1f1-1f1e8"
                        },
                        {
                            "description": "Flag of Liechtenstein",
                            "description_zh_cn": "列支敦士登",
                            "keywords": "flag,liechtenstein,国旗,列支敦士登",
                            "unicode": "1f1f1-1f1ee"
                        },
                        {
                            "description": "Flag of Sri Lanka",
                            "description_zh_cn": "斯里兰卡",
                            "keywords": "flag,sri lanka,国旗,斯里兰卡",
                            "unicode": "1f1f1-1f1f0"
                        },
                        {
                            "description": "Flag of Liberia",
                            "description_zh_cn": "利比里亚",
                            "keywords": "flag,liberia,国旗,利比里亚",
                            "unicode": "1f1f1-1f1f7"
                        },
                        {
                            "description": "Flag of Lesotho",
                            "description_zh_cn": "莱索托",
                            "keywords": "flag,lesotho,国旗,莱索托",
                            "unicode": "1f1f1-1f1f8"
                        },
                        {
                            "description": "Flag of Lithuania",
                            "description_zh_cn": "立陶宛",
                            "keywords": "flag,lithuania,国旗,立陶宛",
                            "unicode": "1f1f1-1f1f9"
                        },
                        {
                            "description": "Flag of Luxembourg",
                            "description_zh_cn": "卢森堡",
                            "keywords": "flag,luxembourg,国旗,卢森堡",
                            "unicode": "1f1f1-1f1fa"
                        },
                        {
                            "description": "Flag of Latvia",
                            "description_zh_cn": "拉脱维亚",
                            "keywords": "flag,latvia,国旗,拉脱维亚",
                            "unicode": "1f1f1-1f1fb"
                        },
                        {
                            "description": "Flag of Libya",
                            "description_zh_cn": "利比亚",
                            "keywords": "flag,libya,国旗,利比亚",
                            "unicode": "1f1f1-1f1fe"
                        },
                        {
                            "description": "Flag of Morocco",
                            "description_zh_cn": "摩洛哥",
                            "keywords": "flag,morocco,国旗,摩洛哥",
                            "unicode": "1f1f2-1f1e6"
                        },
                        {
                            "description": "Flag of Monaco",
                            "description_zh_cn": "摩纳哥",
                            "keywords": "flag,monaco,国旗,摩纳哥",
                            "unicode": "1f1f2-1f1e8"
                        },
                        {
                            "description": "Flag of Moldova",
                            "description_zh_cn": "摩尔多瓦",
                            "keywords": "flag,moldova,国旗,摩尔多瓦",
                            "unicode": "1f1f2-1f1e9"
                        },
                        {
                            "description": "Flag of Montenegro",
                            "description_zh_cn": "黑山",
                            "keywords": "flag,montenegro,国旗,黑山",
                            "unicode": "1f1f2-1f1ea"
                        },
                        {
                            "description": "Flag of Madagascar",
                            "description_zh_cn": "马达加斯加",
                            "keywords": "flag,madagascar,国旗,马达加斯加",
                            "unicode": "1f1f2-1f1ec"
                        },
                        {
                            "description": "Flag of Marshall Islands",
                            "description_zh_cn": "马绍尔群岛",
                            "keywords": "flag,island,marshall,旗,岛,马歇尔",
                            "unicode": "1f1f2-1f1ed"
                        },
                        {
                            "description": "Flag of Macedonia",
                            "description_zh_cn": "马其顿",
                            "keywords": "flag,macedonia,国旗,马其顿",
                            "unicode": "1f1f2-1f1f0"
                        },
                        {
                            "description": "Flag of Mali",
                            "description_zh_cn": "马里",
                            "keywords": "flag,mali,国旗,马里",
                            "unicode": "1f1f2-1f1f1"
                        },
                        {
                            "description": "Flag of Myanmar",
                            "description_zh_cn": "缅甸",
                            "keywords": "burma,flag,myanmar,缅甸,国旗,缅甸",
                            "unicode": "1f1f2-1f1f2"
                        },
                        {
                            "description": "Flag of Mongolia",
                            "description_zh_cn": "蒙古国",
                            "keywords": "flag,mongolia,国旗,蒙古",
                            "unicode": "1f1f2-1f1f3"
                        },
                        {
                            "description": "Flag of Macau",
                            "description_zh_cn": "中国澳门",
                            "keywords": "china,flag,macao,macau,中国,国旗,澳门",
                            "unicode": "1f1f2-1f1f4"
                        },
                        {
                            "description": "Flag of Northern Mariana Islands",
                            "description_zh_cn": "北马里亚纳群岛的旗帜",
                            "keywords": "flag,island,mariana,north,northern mariana,标志,岛,马里亚纳,北,北马里亚纳",
                            "unicode": "1f1f2-1f1f5"
                        },
                        {
                            "description": "Flag of Martinique",
                            "description_zh_cn": "马提尼克",
                            "keywords": "flag,martinique,国旗,马提尼克",
                            "unicode": "1f1f2-1f1f6"
                        },
                        {
                            "description": "Flag of Mauritania",
                            "description_zh_cn": "毛里塔尼亚",
                            "keywords": "flag,mauritania,国旗,毛里塔尼亚",
                            "unicode": "1f1f2-1f1f7"
                        },
                        {
                            "description": "Flag of Montserrat",
                            "description_zh_cn": "蒙特塞拉特的旗帜",
                            "keywords": "flag,montserrat,国旗,蒙特塞拉特",
                            "unicode": "1f1f2-1f1f8"
                        },
                        {
                            "description": "Flag of Malta",
                            "description_zh_cn": "马耳他",
                            "keywords": "flag,malta,国旗,马耳他",
                            "unicode": "1f1f2-1f1f9"
                        },
                        {
                            "description": "Flag of Mauritius",
                            "description_zh_cn": "毛里求斯",
                            "keywords": "flag,mauritius,国旗,毛里求斯",
                            "unicode": "1f1f2-1f1fa"
                        },
                        {
                            "description": "Flag of Maldives",
                            "description_zh_cn": "马尔代夫",
                            "keywords": "flag,maldives,国旗,马尔代夫",
                            "unicode": "1f1f2-1f1fb"
                        },
                        {
                            "description": "Flag of Malawi",
                            "description_zh_cn": "马拉维",
                            "keywords": "flag,malawi,国旗,马拉维",
                            "unicode": "1f1f2-1f1fc"
                        },
                        {
                            "description": "Flag of Mexico",
                            "description_zh_cn": "墨西哥",
                            "keywords": "flag,mexico,国旗,墨西哥",
                            "unicode": "1f1f2-1f1fd"
                        },
                        {
                            "description": "Flag of Malaysia",
                            "description_zh_cn": "马来西亚",
                            "keywords": "flag,malaysia,国旗,马来西亚",
                            "unicode": "1f1f2-1f1fe"
                        },
                        {
                            "description": "Flag of Mozambique",
                            "description_zh_cn": "莫桑比克",
                            "keywords": "flag,mozambique,国旗,莫桑比克",
                            "unicode": "1f1f2-1f1ff"
                        },
                        {
                            "description": "Flag of Namibia",
                            "description_zh_cn": "纳米比亚",
                            "keywords": "flag,namibia,国旗,纳米比亚",
                            "unicode": "1f1f3-1f1e6"
                        },
                        {
                            "description": "Flag of New Caledonia",
                            "description_zh_cn": "新喀里多尼亚",
                            "keywords": "flag,new,new caledonia,国旗,新,新喀里多尼亚",
                            "unicode": "1f1f3-1f1e8"
                        },
                        {
                            "description": "Flag of Niger",
                            "description_zh_cn": "尼日尔",
                            "keywords": "flag,niger,国旗,尼日尔",
                            "unicode": "1f1f3-1f1ea"
                        },
                        {
                            "description": "Flag of Norfolk Island",
                            "description_zh_cn": "诺福克岛的旗帜",
                            "keywords": "flag,island,norfolk,国旗,岛,诺福克",
                            "unicode": "1f1f3-1f1eb"
                        },
                        {
                            "description": "Flag of Nigeria",
                            "description_zh_cn": "尼日利亚",
                            "keywords": "flag,nigeria,国旗,尼日利亚",
                            "unicode": "1f1f3-1f1ec"
                        },
                        {
                            "description": "Flag of Nicaragua",
                            "description_zh_cn": "尼加拉瓜",
                            "keywords": "flag,nicaragua,国旗,尼加拉瓜",
                            "unicode": "1f1f3-1f1ee"
                        },
                        {
                            "description": "Flag of Netherlands",
                            "description_zh_cn": "荷兰",
                            "keywords": "flag,netherlands,国旗,荷兰",
                            "unicode": "1f1f3-1f1f1"
                        },
                        {
                            "description": "Flag of Norway",
                            "description_zh_cn": "挪威",
                            "keywords": "flag,norway,bouvet,svalbard,jan mayen,国旗,挪威,布韦,斯瓦尔巴群岛,扬马延",
                            "unicode": "1f1f3-1f1f4"
                        },
                        {
                            "description": "Flag of Nepal",
                            "description_zh_cn": "尼泊尔",
                            "keywords": "flag,nepal,国旗,尼泊尔",
                            "unicode": "1f1f3-1f1f5"
                        },
                        {
                            "description": "Flag of Nauru",
                            "description_zh_cn": "瑙鲁",
                            "keywords": "flag,nauru,国旗,瑙鲁",
                            "unicode": "1f1f3-1f1f7"
                        },
                        {
                            "description": "Flag of Niue",
                            "description_zh_cn": "纽埃",
                            "keywords": "flag,niue,国旗,纽埃",
                            "unicode": "1f1f3-1f1fa"
                        },
                        {
                            "description": "Flag of New Zealand",
                            "description_zh_cn": "新西兰",
                            "keywords": "flag,new,new zealand,国旗,新,新西兰",
                            "unicode": "1f1f3-1f1ff"
                        },
                        {
                            "description": "Flag of Oman",
                            "description_zh_cn": "阿曼",
                            "keywords": "flag,oman,国旗,阿曼",
                            "unicode": "1f1f4-1f1f2"
                        },
                        {
                            "description": "Flag of Panama",
                            "description_zh_cn": "巴拿马",
                            "keywords": "flag,panama,国旗,巴拿马",
                            "unicode": "1f1f5-1f1e6"
                        },
                        {
                            "description": "Flag of Peru",
                            "description_zh_cn": "秘鲁",
                            "keywords": "flag,peru,国旗,秘鲁",
                            "unicode": "1f1f5-1f1ea"
                        },
                        {
                            "description": "Flag of French Polynesia",
                            "description_zh_cn": "法属波利尼西亚",
                            "keywords": "flag,french,polynesia,国旗,法国,波利尼西亚",
                            "unicode": "1f1f5-1f1eb"
                        },
                        {
                            "description": "Flag of Papua New Guinea",
                            "description_zh_cn": "巴布亚新几内亚",
                            "keywords": "flag,guinea,new,papua new guinea,国旗,几内亚,新,巴布亚新几内亚",
                            "unicode": "1f1f5-1f1ec"
                        },
                        {
                            "description": "Flag of Philippines",
                            "description_zh_cn": "菲律宾",
                            "keywords": "flag,philippines,国旗,菲律宾",
                            "unicode": "1f1f5-1f1ed"
                        },
                        {
                            "description": "Flag of Pakistan",
                            "description_zh_cn": "巴基斯坦",
                            "keywords": "flag,pakistan,国旗,巴基斯坦",
                            "unicode": "1f1f5-1f1f0"
                        },
                        {
                            "description": "Flag of Poland",
                            "description_zh_cn": "波兰",
                            "keywords": "flag,poland,国旗,波兰",
                            "unicode": "1f1f5-1f1f1"
                        },
                        {
                            "description": "Flag of St. Pierre & Miquelon",
                            "description_zh_cn": "圣皮埃尔和密克隆的旗帜",
                            "keywords": "flag,miquelon,pierre,saint,国旗,密克隆,皮埃尔,圣",
                            "unicode": "1f1f5-1f1f2"
                        },
                        {
                            "description": "Flag of Pitcairn Islands",
                            "description_zh_cn": "皮特凯恩群岛的旗帜",
                            "keywords": "flag,island,pitcairn,旗帜,岛,皮特凯恩",
                            "unicode": "1f1f5-1f1f3"
                        },
                        {
                            "description": "Flag of Puerto Rico",
                            "description_zh_cn": "波多黎各",
                            "keywords": "flag,puerto rico,国旗,波多黎各",
                            "unicode": "1f1f5-1f1f7"
                        },
                        {
                            "description": "Flag of Palestinian Territories",
                            "description_zh_cn": "巴勒斯坦领土旗帜",
                            "keywords": "flag,palestine,国旗,巴勒斯坦",
                            "unicode": "1f1f5-1f1f8"
                        },
                        {
                            "description": "Flag of Portugal",
                            "description_zh_cn": "葡萄牙",
                            "keywords": "flag,portugal,国旗,葡萄牙",
                            "unicode": "1f1f5-1f1f9"
                        },
                        {
                            "description": "Flag of Palau",
                            "description_zh_cn": "帕劳",
                            "keywords": "flag,palau,旗,帕劳",
                            "unicode": "1f1f5-1f1fc"
                        },
                        {
                            "description": "Flag of Paraguay",
                            "description_zh_cn": "巴拉圭",
                            "keywords": "flag,paraguay,国旗,巴拉圭",
                            "unicode": "1f1f5-1f1fe"
                        },
                        {
                            "description": "Flag of Qatar",
                            "description_zh_cn": "卡塔尔",
                            "keywords": "flag,qatar,国旗,卡塔尔",
                            "unicode": "1f1f6-1f1e6"
                        },
                        {
                            "description": "Flag of Réunion",
                            "description_zh_cn": "留尼汪旗帜",
                            "keywords": "flag,reunion,réunion,旗帜,团圆,团圆",
                            "unicode": "1f1f7-1f1ea"
                        },
                        {
                            "description": "Flag of Romania",
                            "description_zh_cn": "罗马尼亚",
                            "keywords": "flag,romania,国旗,罗马尼亚",
                            "unicode": "1f1f7-1f1f4"
                        },
                        {
                            "description": "Flag of Serbia",
                            "description_zh_cn": "塞尔维亚",
                            "keywords": "flag,serbia,国旗,塞尔维亚",
                            "unicode": "1f1f7-1f1f8"
                        },
                        {
                            "description": "Flag of Russia",
                            "description_zh_cn": "俄罗斯",
                            "keywords": "flag,russia,国旗,俄罗斯",
                            "unicode": "1f1f7-1f1fa"
                        },
                        {
                            "description": "Flag of Rwanda",
                            "description_zh_cn": "卢旺达",
                            "keywords": "flag,rwanda,国旗,卢旺达",
                            "unicode": "1f1f7-1f1fc"
                        },
                        {
                            "description": "Flag of Saudi Arabia",
                            "description_zh_cn": "沙特阿拉伯",
                            "keywords": "flag,saudi arabia,国旗,沙特阿拉伯",
                            "unicode": "1f1f8-1f1e6"
                        },
                        {
                            "description": "Flag of Scotland",
                            "description_zh_cn": "苏格兰",
                            "keywords": "scotland,flag,苏格兰,国旗",
                            "unicode": "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f"
                        },
                        {
                            "description": "Flag of Solomon Islands",
                            "description_zh_cn": "所罗门群岛的旗帜",
                            "keywords": "flag,island,solomon,旗,岛,所罗门",
                            "unicode": "1f1f8-1f1e7"
                        },
                        {
                            "description": "Flag of Seychelles",
                            "description_zh_cn": "塞舌尔",
                            "keywords": "flag,seychelles,国旗,塞舌尔",
                            "unicode": "1f1f8-1f1e8"
                        },
                        {
                            "description": "Flag of Sudan",
                            "description_zh_cn": "苏丹",
                            "keywords": "flag,sudan,国旗,苏丹",
                            "unicode": "1f1f8-1f1e9"
                        },
                        {
                            "description": "Flag of Sweden",
                            "description_zh_cn": "瑞典",
                            "keywords": "flag,sweden,国旗,瑞典",
                            "unicode": "1f1f8-1f1ea"
                        },
                        {
                            "description": "Flag of Singapore",
                            "description_zh_cn": "新加坡",
                            "keywords": "flag,singapore,国旗,新加坡",
                            "unicode": "1f1f8-1f1ec"
                        },
                        {
                            "description": "Flag of St. Helena",
                            "description_zh_cn": "圣赫勒拿旗",
                            "keywords": "flag,helena,saint,旗帜,海伦娜,圣",
                            "unicode": "1f1f8-1f1ed"
                        },
                        {
                            "description": "Flag of Slovenia",
                            "description_zh_cn": "斯洛文尼亚",
                            "keywords": "flag,slovenia,国旗,斯洛文尼亚",
                            "unicode": "1f1f8-1f1ee"
                        },
                        {
                            "description": "Flag of Slovakia",
                            "description_zh_cn": "斯洛伐克",
                            "keywords": "flag,slovakia,国旗,斯洛伐克",
                            "unicode": "1f1f8-1f1f0"
                        },
                        {
                            "description": "Flag of Sierra Leone",
                            "description_zh_cn": "塞拉利昂",
                            "keywords": "flag,sierra leone,国旗,塞拉利昂",
                            "unicode": "1f1f8-1f1f1"
                        },
                        {
                            "description": "Flag of San Marino",
                            "description_zh_cn": "圣马力诺",
                            "keywords": "flag,san marino,国旗,圣马力诺",
                            "unicode": "1f1f8-1f1f2"
                        },
                        {
                            "description": "Flag of Senegal",
                            "description_zh_cn": "塞内加尔",
                            "keywords": "flag,senegal,国旗,塞内加尔",
                            "unicode": "1f1f8-1f1f3"
                        },
                        {
                            "description": "Flag of Somalia",
                            "description_zh_cn": "索马里",
                            "keywords": "flag,somalia,国旗,索马里",
                            "unicode": "1f1f8-1f1f4"
                        },
                        {
                            "description": "Flag of Suriname",
                            "description_zh_cn": "苏里南",
                            "keywords": "flag,suriname,国旗,苏里南",
                            "unicode": "1f1f8-1f1f7"
                        },
                        {
                            "description": "Flag of South Sudan",
                            "description_zh_cn": "南苏丹",
                            "keywords": "flag,south,south sudan,sudan,国旗,南,南苏丹,苏丹",
                            "unicode": "1f1f8-1f1f8"
                        },
                        {
                            "description": "Flag of São Tomé & Príncipe",
                            "description_zh_cn": "圣多美和普林西比",
                            "keywords": "flag,principe,príncipe,sao tome,são tomé,国旗,普林西比,普林西比,圣多美,圣多美",
                            "unicode": "1f1f8-1f1f9"
                        },
                        {
                            "description": "Flag of El Salvador",
                            "description_zh_cn": "萨尔瓦多",
                            "keywords": "el salvador,flag,萨尔瓦多,国旗",
                            "unicode": "1f1f8-1f1fb"
                        },
                        {
                            "description": "Flag of Sint Maarten",
                            "description_zh_cn": "圣马丁旗",
                            "keywords": "flag,maarten,sint,旗,马丁,圣",
                            "unicode": "1f1f8-1f1fd"
                        },
                        {
                            "description": "Flag of Syria",
                            "description_zh_cn": "叙利亚",
                            "keywords": "flag,syria,国旗,叙利亚",
                            "unicode": "1f1f8-1f1fe"
                        },
                        {
                            "description": "Flag of Swaziland",
                            "description_zh_cn": "斯威士兰",
                            "keywords": "flag,swaziland,国旗,斯威士兰",
                            "unicode": "1f1f8-1f1ff"
                        },
                        {
                            "description": "Flag of Tristan da Cunha",
                            "description_zh_cn": "特里斯坦达库尼亚",
                            "keywords": "flag,tristan da cunha,旗子,特里斯坦达库尼亚",
                            "unicode": "1f1f9-1f1e6"
                        },
                        {
                            "description": "Flag of Turks & Caicos Islands",
                            "description_zh_cn": "特克斯和凯科斯群岛的旗帜",
                            "keywords": "caicos,flag,island,turks,凯科斯,国旗,岛,特克斯",
                            "unicode": "1f1f9-1f1e8"
                        },
                        {
                            "description": "Flag of Chad",
                            "description_zh_cn": "乍得",
                            "keywords": "chad,flag,乍得,国旗",
                            "unicode": "1f1f9-1f1e9"
                        },
                        {
                            "description": "Flag of French Southern Territories",
                            "description_zh_cn": "法属南部领土的旗帜",
                            "keywords": "antarctic,flag,french,南极,国旗,法语",
                            "unicode": "1f1f9-1f1eb"
                        },
                        {
                            "description": "Flag of Togo",
                            "description_zh_cn": "多哥",
                            "keywords": "flag,togo,国旗,多哥",
                            "unicode": "1f1f9-1f1ec"
                        },
                        {
                            "description": "Flag of Thailand",
                            "description_zh_cn": "泰国",
                            "keywords": "flag,thailand,国旗,泰国",
                            "unicode": "1f1f9-1f1ed"
                        },
                        {
                            "description": "Flag of Tajikistan",
                            "description_zh_cn": "塔吉克斯坦",
                            "keywords": "flag,tajikistan,国旗,塔吉克斯坦",
                            "unicode": "1f1f9-1f1ef"
                        },
                        {
                            "description": "Flag of Tokelau",
                            "description_zh_cn": "托克劳",
                            "keywords": "flag,tokelau,国旗,托克劳",
                            "unicode": "1f1f9-1f1f0"
                        },
                        {
                            "description": "Flag of Timor-Leste",
                            "description_zh_cn": "东帝汶",
                            "keywords": "east,east timor,flag,timor-leste,东,东帝汶,国旗,东帝汶",
                            "unicode": "1f1f9-1f1f1"
                        },
                        {
                            "description": "Flag of Turkmenistan",
                            "description_zh_cn": "土库曼斯坦",
                            "keywords": "flag,turkmenistan,国旗,土库曼斯坦",
                            "unicode": "1f1f9-1f1f2"
                        },
                        {
                            "description": "Flag of Tunisia",
                            "description_zh_cn": "突尼斯",
                            "keywords": "flag,tunisia,国旗,突尼斯",
                            "unicode": "1f1f9-1f1f3"
                        },
                        {
                            "description": "Flag of Tonga",
                            "description_zh_cn": "汤加",
                            "keywords": "flag,tonga,国旗,汤加",
                            "unicode": "1f1f9-1f1f4"
                        },
                        {
                            "description": "Flag of Turkey",
                            "description_zh_cn": "土耳其",
                            "keywords": "flag,turkey,国旗,土耳其",
                            "unicode": "1f1f9-1f1f7"
                        },
                        {
                            "description": "Flag of Trinidad & Tobago",
                            "description_zh_cn": "特立尼达和多巴哥",
                            "keywords": "flag,tobago,trinidad,国旗,多巴哥,特立尼达",
                            "unicode": "1f1f9-1f1f9"
                        },
                        {
                            "description": "Flag of Tuvalu",
                            "description_zh_cn": "图瓦卢",
                            "keywords": "flag,tuvalu,国旗,图瓦卢",
                            "unicode": "1f1f9-1f1fb"
                        },
                        {
                            "description": "Flag of Taiwan",
                            "description_zh_cn": "中国台湾",
                            "keywords": "china,flag,taiwan,中国,国旗,台湾",
                            "unicode": "1f1f9-1f1fc"
                        },
                        {
                            "description": "Flag of Tanzania",
                            "description_zh_cn": "坦桑尼亚",
                            "keywords": "flag,tanzania,国旗,坦桑尼亚",
                            "unicode": "1f1f9-1f1ff"
                        },
                        {
                            "description": "Flag of Ukraine",
                            "description_zh_cn": "乌克兰",
                            "keywords": "flag,ukraine,国旗,乌克兰",
                            "unicode": "1f1fa-1f1e6"
                        },
                        {
                            "description": "Flag of Uganda",
                            "description_zh_cn": "乌干达",
                            "keywords": "flag,uganda,国旗,乌干达",
                            "unicode": "1f1fa-1f1ec"
                        },
                        {
                            "description": "Flag of United Nations",
                            "description_zh_cn": "联合国旗帜",
                            "keywords": "flag,un,united,nations,国旗,联合国,联合国,国家",
                            "unicode": "1f1fa-1f1f3"
                        },
                        {
                            "description": "Flag of United States",
                            "description_zh_cn": "美国",
                            "keywords": "america,flag,united,states,us,usa,outlying islands,美国,国旗,美国,各州,美国,离岛",
                            "unicode": "1f1fa-1f1f8"
                        },
                        {
                            "description": "Flag of Uruguay",
                            "description_zh_cn": "乌拉圭",
                            "keywords": "flag,uruguay,国旗,乌拉圭",
                            "unicode": "1f1fa-1f1fe"
                        },
                        {
                            "description": "Flag of Uzbekistan",
                            "description_zh_cn": "乌兹别克斯坦",
                            "keywords": "flag,uzbekistan,国旗,乌兹别克斯坦",
                            "unicode": "1f1fa-1f1ff"
                        },
                        {
                            "description": "Flag of Vatican City",
                            "description_zh_cn": "梵蒂冈城旗",
                            "keywords": "flag,vatican,国旗,梵蒂冈",
                            "unicode": "1f1fb-1f1e6"
                        },
                        {
                            "description": "Flag of St. Vincent & Grenadines",
                            "description_zh_cn": "圣文森特和格林纳丁斯",
                            "keywords": "flag,grenadines,saint,vincent,标志,格林纳丁斯,圣,文森特",
                            "unicode": "1f1fb-1f1e8"
                        },
                        {
                            "description": "Flag of Venezuela",
                            "description_zh_cn": "委内瑞拉",
                            "keywords": "flag,venezuela,国旗,委内瑞拉",
                            "unicode": "1f1fb-1f1ea"
                        },
                        {
                            "description": "Flag of British Virgin Islands",
                            "description_zh_cn": "英属维尔京群岛的旗帜",
                            "keywords": "british,flag,island,virgin,英国,国旗,岛,处女",
                            "unicode": "1f1fb-1f1ec"
                        },
                        {
                            "description": "Flag of U.S. Virgin Islands",
                            "description_zh_cn": "美属维尔京群岛",
                            "keywords": "america,flag,island,united states,us,usa,virgin,美国,国旗,岛屿,美国,美国,处女",
                            "unicode": "1f1fb-1f1ee"
                        },
                        {
                            "description": "Flag of Vietnam",
                            "description_zh_cn": "越南",
                            "keywords": "flag,viet nam,vietnam,国旗,越南,越南",
                            "unicode": "1f1fb-1f1f3"
                        },
                        {
                            "description": "Flag of Vanuatu",
                            "description_zh_cn": "瓦努阿图",
                            "keywords": "flag,vanuatu,国旗,瓦努阿图",
                            "unicode": "1f1fb-1f1fa"
                        },
                        {
                            "description": "Flag of Wales",
                            "description_zh_cn": "威尔士",
                            "keywords": "wales,flag,威尔士,旗帜",
                            "unicode": "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f"
                        },
                        {
                            "description": "Flag of Wallis & Futuna",
                            "description_zh_cn": "瓦利斯和富图纳群岛的旗帜",
                            "keywords": "flag,futuna,wallis,国旗,富图纳群岛,瓦利斯",
                            "unicode": "1f1fc-1f1eb"
                        },
                        {
                            "description": "Flag of Samoa",
                            "description_zh_cn": "萨摩亚",
                            "keywords": "flag,samoa,国旗,萨摩亚",
                            "unicode": "1f1fc-1f1f8"
                        },
                        {
                            "description": "Flag of Kosovo",
                            "description_zh_cn": "科索沃",
                            "keywords": "flag,kosovo,国旗,科索沃",
                            "unicode": "1f1fd-1f1f0"
                        },
                        {
                            "description": "Flag of Yemen",
                            "description_zh_cn": "也门",
                            "keywords": "flag,yemen,国旗,也门",
                            "unicode": "1f1fe-1f1ea"
                        },
                        {
                            "description": "Flag of Mayotte",
                            "description_zh_cn": "马约特岛的旗帜",
                            "keywords": "flag,mayotte,国旗,马约特岛",
                            "unicode": "1f1fe-1f1f9"
                        },
                        {
                            "description": "Flag of South Africa",
                            "description_zh_cn": "南非",
                            "keywords": "flag,south,south africa,国旗,南,南非",
                            "unicode": "1f1ff-1f1e6"
                        },
                        {
                            "description": "Flag of Zambia",
                            "description_zh_cn": "赞比亚",
                            "keywords": "flag,zambia,国旗,赞比亚",
                            "unicode": "1f1ff-1f1f2"
                        },
                        {
                            "description": "Flag of Zimbabwe",
                            "description_zh_cn": "津巴布韦",
                            "keywords": "flag,zimbabwe,国旗,津巴布韦",
                            "unicode": "1f1ff-1f1fc"
                        },
                        {
                            "description": "Flag of Bouvet Island",
                            "description_zh_cn": "布韦岛旗帜",
                            "keywords": "flag,bouvet,island,旗帜,布韦,岛",
                            "unicode": "1f1e7-1f1fb"
                        },
                        {
                            "description": "Flag of Clipperton Island",
                            "description_zh_cn": "克利珀顿岛旗帜",
                            "keywords": "flag,clipperton,island,旗,克利珀顿,岛",
                            "unicode": "1f1e8-1f1f5"
                        },
                        {
                            "description": "Flag of Diego Garcia",
                            "description_zh_cn": "迪戈加西亚",
                            "keywords": "flag,diego garcia,国旗,迭戈加西亚",
                            "unicode": "1f1e9-1f1ec"
                        },
                        {
                            "description": "Flag of Ceuta & Melilla",
                            "description_zh_cn": "休达和梅利利亚的旗帜",
                            "keywords": "flag,ceuta,melilla,国旗,休达,梅利利亚",
                            "unicode": "1f1ea-1f1e6"
                        },
                        {
                            "description": "Flag of Heard & McDonald Islands",
                            "description_zh_cn": "赫德和麦克唐纳群岛的旗帜",
                            "keywords": "flag,heard,island,mcdonald,标志,听到,岛,麦当劳",
                            "unicode": "1f1ed-1f1f2"
                        },
                        {
                            "description": "Flag of St. Martin",
                            "description_zh_cn": "圣马丁旗",
                            "keywords": "flag,french,martin,saint,国旗,法语,马丁,圣",
                            "unicode": "1f1f2-1f1eb"
                        },
                        {
                            "description": "Flag of Svalbard & Jan Mayen",
                            "description_zh_cn": "斯瓦尔巴群岛和扬马延岛的旗帜",
                            "keywords": "flag,jan mayen,svalbard,国旗,扬马延岛,斯瓦尔巴群岛",
                            "unicode": "1f1f8-1f1ef"
                        },
                        {
                            "description": "Flag of U.S. Outlying Islands",
                            "description_zh_cn": "美国离岛",
                            "keywords": "flag,america,island,minor outlying,united,united states,us,usa,国旗,美国,岛屿,次要边远地区,美国,美国,美国",
                            "unicode": "1f1fa-1f1f2"
                        }
                    ],
                    "title": "Flags",
                    "title_zh_cn": "旗帜"
                }
            ]
        };

    
}