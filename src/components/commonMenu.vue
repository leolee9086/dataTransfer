<template>
    <div id="commonMenu" class="b3-menu " style="top: 290px; left: 13px;" v-if="menuOption.show == true">
        <button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                <use xlink:href="#iconRefresh"></use>
            </svg><span class="b3-menu__label">转换为</span><svg class="b3-menu__icon b3-menu__icon--arrow">
                <use xlink:href="#iconRight"></use>
            </svg>
            <div class="b3-menu__submenu"><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#iconList"></use>
                    </svg><span class="b3-menu__label">无序列表</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconOrderedList"></use>
                    </svg><span class="b3-menu__label">有序列表</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconCheck"></use>
                    </svg><span class="b3-menu__label">任务列表</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconQuote"></use>
                    </svg><span class="b3-menu__label">引述</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconH1"></use>
                    </svg><span class="b3-menu__label">一级标题</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconH2"></use>
                    </svg><span class="b3-menu__label">二级标题</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconH3"></use>
                    </svg><span class="b3-menu__label">三级标题</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconH4"></use>
                    </svg><span class="b3-menu__label">四级标题</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconH5"></use>
                    </svg><span class="b3-menu__label">五级标题</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconH6"></use>
                    </svg><span class="b3-menu__label">六级标题</span></button></div>
        </button>
        <button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                <use xlink:href="#iconCopy"></use>
            </svg><span class="b3-menu__label">复制</span><svg class="b3-menu__icon b3-menu__icon--arrow">
                <use xlink:href="#iconRight"></use>
            </svg>
            <div class="b3-menu__submenu"><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#iconGraph"></use>
                    </svg><span class="b3-menu__label">复制该块为引用块</span><span
                        class="b3-menu__accelerator">Ctrl+Shift+C</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconSQL"></use>
                    </svg><span class="b3-menu__label">复制该块为嵌入块</span><span
                        class="b3-menu__accelerator">Ctrl+Shift+E</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconSiYuan"></use>
                    </svg><span class="b3-menu__label">复制块超链接</span><span
                        class="b3-menu__accelerator">Ctrl+Shift+H</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">复制可读路径</span><span
                        class="b3-menu__accelerator">Ctrl+Shift+P</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">复制 ID</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">复制</span><span
                        class="b3-menu__accelerator">Ctrl+C</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">重复</span></button></div>
        </button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                <use xlink:href="#iconCut"></use>
            </svg><span class="b3-menu__label">剪切</span><span class="b3-menu__accelerator">Ctrl+X</span></button><button
            class="b3-menu__item"><svg class="b3-menu__icon" style="">
                <use xlink:href="#iconMove"></use>
            </svg><span class="b3-menu__label">移动</span><span
                class="b3-menu__accelerator">Ctrl+Alt+M</span></button><button class="b3-menu__item"><svg
                class="b3-menu__icon" style="">
                <use xlink:href="#iconTrashcan"></use>
            </svg><span class="b3-menu__label">删除</span><span
                class="b3-menu__accelerator">Backspace</span></button><button
            class="b3-menu__separator"></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">聚焦</span><span
                class="b3-menu__accelerator">Alt+→/Ctrl+Click</span></button><button class="b3-menu__item"><svg
                class="b3-menu__icon" style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">聚焦到上层</span><span
                class="b3-menu__accelerator">Alt+←</span></button><button class="b3-menu__item"><svg
                class="b3-menu__icon" style="">
                <use xlink:href="#iconBefore"></use>
            </svg><span class="b3-menu__label">起始插入行</span><span
                class="b3-menu__accelerator">Ctrl+Shift+B</span></button><button class="b3-menu__item"><svg
                class="b3-menu__icon" style="">
                <use xlink:href="#iconAfter"></use>
            </svg><span class="b3-menu__label">末尾插入行</span><span
                class="b3-menu__accelerator">Ctrl+Shift+A</span></button><button
            class="b3-menu__separator"></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">折叠/展开</span><span
                class="b3-menu__accelerator">Ctrl+↑/Alt+Click</span></button><button class="b3-menu__item"><svg
                class="b3-menu__icon" style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">属性</span><span
                class="b3-menu__accelerator">Ctrl+Alt+A/Shift+Click</span></button><button class="b3-menu__item"><svg
                class="b3-menu__icon" style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">外观</span><svg class="b3-menu__icon b3-menu__icon--arrow">
                <use xlink:href="#iconRight"></use>
            </svg>
            <div class="b3-menu__submenu b3-menu__submenu--row"><button class="b3-menu__item"><svg class="b3-menu__icon"
                        style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="错误样式">
                            <span
                                style="color: var(--b3-card-error-color);background-color: var(--b3-card-error-background);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="警告样式">
                            <span
                                style="color: var(--b3-card-warning-color);background-color: var(--b3-card-warning-background);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="信息样式">
                            <span
                                style="color: var(--b3-card-info-color);background-color: var(--b3-card-info-background);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="成功样式">
                            <span
                                style="color: var(--b3-card-success-color);background-color: var(--b3-card-success-background);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__separator"></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="镂空">
                            <span
                                style="-webkit-text-stroke: 0.2px var(--b3-theme-on-background);-webkit-text-fill-color : transparent;"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="投影">
                            <span
                                style="text-shadow: 1px 1px var(--b3-border-color), 2px 2px var(--b3-border-color), 3px 3px var(--b3-border-color), 4px 4px var(--b3-border-color)"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__separator"></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 1">
                            <span style="color:var(--b3-font-color1);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 2">
                            <span style="color:var(--b3-font-color2);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 3">
                            <span style="color:var(--b3-font-color3);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 4">
                            <span style="color:var(--b3-font-color4);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 5">
                            <span style="color:var(--b3-font-color5);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 6">
                            <span style="color:var(--b3-font-color6);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 7">
                            <span style="color:var(--b3-font-color7);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 8">
                            <span style="color:var(--b3-font-color8);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 9">
                            <span style="color:var(--b3-font-color9);" class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 10">
                            <span style="color:var(--b3-font-color10);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 11">
                            <span style="color:var(--b3-font-color11);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 12">
                            <span style="color:var(--b3-font-color12);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="字体颜色 13">
                            <span style="color:var(--b3-font-color13);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__separator"></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 1">
                            <span style="background-color:var(--b3-font-background1);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 2">
                            <span style="background-color:var(--b3-font-background2);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 3">
                            <span style="background-color:var(--b3-font-background3);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 4">
                            <span style="background-color:var(--b3-font-background4);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 5">
                            <span style="background-color:var(--b3-font-background5);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 6">
                            <span style="background-color:var(--b3-font-background6);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 7">
                            <span style="background-color:var(--b3-font-background7);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 8">
                            <span style="background-color:var(--b3-font-background8);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 9">
                            <span style="background-color:var(--b3-font-background9);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 10">
                            <span style="background-color:var(--b3-font-background10);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 11">
                            <span style="background-color:var(--b3-font-background11);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 12">
                            <span style="background-color:var(--b3-font-background12);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="背景颜色 13">
                            <span style="background-color:var(--b3-font-background13);"
                                class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button><button class="b3-menu__separator"></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div class="fn__flex" data-type="a" aria-label="清除样式">
                            <span class="b3-color__square fn__flex-center">A</span>
                        </div>
                    </span></button></div>
        </button><button class="b3-menu__item b3-menu__item--current b3-menu__item--show"><svg class="b3-menu__icon"
                style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">布局</span><svg class="b3-menu__icon b3-menu__icon--arrow">
                <use xlink:href="#iconRight"></use>
            </svg>
            <div class="b3-menu__submenu"><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#iconAlignLeft"></use>
                    </svg><span class="b3-menu__label">居左</span><span
                        class="b3-menu__accelerator">Alt+L</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconAlignCenter"></use>
                    </svg><span class="b3-menu__label">居中</span><span
                        class="b3-menu__accelerator">Alt+C</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconAlignRight"></use>
                    </svg><span class="b3-menu__label">居右</span><span
                        class="b3-menu__accelerator">Alt+R</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconMenu"></use>
                    </svg><span class="b3-menu__label">两侧对齐</span></button></div>
        </button><button class="b3-menu__item"><svg class="b3-menu__icon" style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">宽度</span><svg class="b3-menu__icon b3-menu__icon--arrow">
                <use xlink:href="#iconRight"></use>
            </svg>
            <div class="b3-menu__submenu" style="top: auto;bottom:-5px;max-height:249.60000000000002px"><button
                    class="b3-menu__item"><svg class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">25%</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">33%</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">50%</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">67%</span></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">75%</span></button><button
                    class="b3-menu__separator"></button><button class="b3-menu__item b3-menu__item--custom"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#"></use>
                    </svg><span class="b3-menu__label">
                        <div aria-label="100%" class="b3-tooltips b3-tooltips__n fn__size200">
                            <input style="box-sizing: border-box" value="100" class="b3-slider fn__block" max="100"
                                min="1" step="1" type="range">
                        </div>
                    </span></button><button class="b3-menu__separator"></button><button class="b3-menu__item"><svg
                        class="b3-menu__icon" style="">
                        <use xlink:href="#iconTrashcan"></use>
                    </svg><span class="b3-menu__label">清除样式</span></button></div>
        </button><button class="b3-menu__separator"></button><button class="b3-menu__item"><svg class="b3-menu__icon"
                style="">
                <use xlink:href="#iconMp"></use>
            </svg><span class="b3-menu__label">微信提醒</span></button><button class="b3-menu__separator"></button><button
            class="b3-menu__item b3-menu__item--readonly"><svg class="b3-menu__icon" style="">
                <use xlink:href="#"></use>
            </svg><span class="b3-menu__label">
                <div style="margin-left: -18px;white-space: nowrap;">更新于 2021-09-24 16:32:03<br>创建于 2021-09-24
                    16:32:03</div>
            </span>
        </button>
    </div>
</template>
<script setup>
import commonMenuItem from "./commonMenuItem.vue"
import { reactive, ref } from "vue"

let menuOption = reactive(
    {
        show: false,
        type: 'none',
        data: ""

    })
function menuDefine(Mdata) {
    console.log(Mdata, menuOption)
    if (Mdata) {
        menuOption.show = true
    }
    window.addEventListener('mousedown', () => { menuOption.show = false }, { once: true })
}
window.eventBus.on("menuShow", (data) => menuDefine(data))
</script>
