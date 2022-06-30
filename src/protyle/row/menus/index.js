import { initNavigationMenu, initFileMenu } from "./navigation";
import { hasTopClosestByTag } from "../protyle/util/hasClosest";
import { initTabMenu } from "./tab";
import { getInstanceById } from "../layout/util";
import { initSearchMenu } from "./search";
import { initDockMenu } from "./dock";
import { Menu } from "./Menu";
import { isMobile } from "../util/functions";
export class Menus {
    constructor() {
        this.menu = new Menu();
        if (isMobile()) {
            return;
        }
        window.addEventListener("contextmenu", (event) => {
            let target = event.target;
            while (target && !target.parentElement.isEqualNode(document.querySelector("body"))) {
                event.preventDefault();
                const dataType = target.getAttribute("data-type");
                if (dataType === "tab-header") {
                    this.unselect();
                    initTabMenu(dataType, getInstanceById(target.getAttribute("data-id")).model).popup({
                        x: event.clientX,
                        y: event.clientY
                    });
                    event.stopPropagation();
                    break;
                }
                if (dataType === "navigation-root" && !window.siyuan.config.readonly) {
                    if (target.querySelector(".b3-list-item__text").classList.contains("ft__on-surface")) {
                        return;
                    }
                    this.unselect();
                    // navigation 根上：新建文档/文件夹/取消挂在/打开文件位置
                    initNavigationMenu(target).popup({ x: event.clientX, y: event.clientY });
                    event.stopPropagation();
                    break;
                }
                if (dataType === "navigation-file") {
                    this.unselect();
                    // navigation 文件上：删除/重命名/打开文件位置/导出
                    initFileMenu(this.getDir(target), target.getAttribute("data-path"), target.getAttribute("data-node-id"), target.getAttribute("data-name")).popup({
                        x: event.clientX,
                        y: event.clientY
                    });
                    event.stopPropagation();
                    break;
                }
                if (dataType === "search-item") {
                    initSearchMenu(target.getAttribute("data-node-id")).popup({ x: event.clientX, y: event.clientY });
                    event.stopPropagation();
                    break;
                }
                if (target.classList.contains("dock__item")) {
                    initDockMenu(target).popup({ x: event.clientX, y: event.clientY });
                    event.stopPropagation();
                    break;
                }
                target = target.parentElement;
            }
        }, false);
    }
    getDir(target) {
        const rootElement = hasTopClosestByTag(target, "UL");
        if (rootElement) {
            return rootElement.getAttribute("data-url");
        }
    }
    unselect() {
        if (getSelection().rangeCount > 0) {
            getSelection().getRangeAt(0).collapse(true);
        }
    }
}
