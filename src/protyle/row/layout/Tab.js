import { genUUID } from "../util/genID";
import { Editor } from "../editor";
import { hasClosestByTag } from "../protyle/util/hasClosest";
import { Constants } from "../constants";
import { escapeHtml } from "../util/escape";
import { unicode2Emoji } from "../emoji";
import { fetchPost } from "../util/fetch";
import { showTooltip } from "../dialog/tooltip";
export class Tab {
    constructor(options) {
        this.id = genUUID();
        this.callback = options.callback;
        if (options.title || options.icon) {
            this.title = options.title;
            this.icon = options.icon;
            this.docIcon = options.docIcon;
            this.headElement = document.createElement("li");
            this.headElement.setAttribute("data-type", "tab-header");
            this.headElement.setAttribute("draggable", "true");
            this.headElement.setAttribute("data-id", this.id);
            this.headElement.setAttribute("data-position", "center"); // showTooltip 位置标识
            this.headElement.classList.add("item", "item--focus");
            let iconHTML = "";
            if (options.icon) {
                iconHTML = `<svg class="item__graphic"><use xlink:href="#${options.icon}"></use></svg>`;
            }
            else if (options.docIcon) {
                iconHTML = `<span class="item__icon">${unicode2Emoji(options.docIcon)}</span>`;
            }
            this.headElement.innerHTML = `${iconHTML}<span class="item__text">${escapeHtml(options.title)}</span>
<span class="item__close"><svg><use xlink:href='#iconClose'></use></svg></span>`;
            this.headElement.addEventListener("mouseenter", (event) => {
                var _a, _b, _c;
                event.stopPropagation();
                event.preventDefault();
                if (this.model instanceof Editor && ((_c = (_b = (_a = this.model.editor) === null || _a === void 0 ? void 0 : _a.protyle) === null || _b === void 0 ? void 0 : _b.block) === null || _c === void 0 ? void 0 : _c.rootID)) {
                    fetchPost("/api/filetree/getFullHPathByID", {
                        id: this.model.editor.protyle.block.rootID
                    }, (response) => {
                        if (!this.headElement.getAttribute("aria-label")) {
                            showTooltip(escapeHtml(response.data), this.headElement);
                        }
                        this.headElement.setAttribute("aria-label", escapeHtml(response.data));
                    });
                }
            });
            this.headElement.addEventListener("dragstart", (event) => {
                window.getSelection().removeAllRanges();
                const tabElement = hasClosestByTag(event.target, "LI");
                if (tabElement) {
                    event.dataTransfer.setData("text/html", tabElement.outerHTML);
                    event.dataTransfer.setData(Constants.SIYUAN_DROP_TAB, this.id);
                    event.dataTransfer.dropEffect = "move";
                    tabElement.style.opacity = "0.1";
                    window.siyuan.dragElement = this.headElement;
                }
            });
            this.headElement.addEventListener("dragend", (event) => {
                const tabElement = hasClosestByTag(event.target, "LI");
                if (tabElement) {
                    tabElement.style.opacity = "1";
                    document.querySelectorAll(".layout-tab-bar li[data-clone='true']").forEach((item) => {
                        item.remove();
                    });
                }
                window.siyuan.dragElement = undefined;
                if (event.dataTransfer.dropEffect === "none") {
                    // 按 esc 取消的时候应该还原在 dragover 时交换的 tab
                    this.parent.children.forEach((item, index) => {
                        const currentElement = this.headElement.parentElement.children[index];
                        if (!item.headElement.isSameNode(currentElement)) {
                            if (index === 0) {
                                this.headElement.parentElement.firstElementChild.before(item.headElement);
                            }
                            else {
                                this.headElement.parentElement.children[index - 1].after(item.headElement);
                            }
                        }
                    });
                }
            });
        }
        this.panelElement = document.createElement("div");
        this.panelElement.classList.add("fn__flex-1");
        this.panelElement.innerHTML = options.panel || "";
        this.panelElement.setAttribute("data-id", this.id);
    }
    updateTitle(title) {
        this.title = title;
        this.headElement.querySelector(".item__text").innerHTML = escapeHtml(title);
    }
    addModel(model) {
        this.model = model;
        model.parent = this;
    }
    pin() {
        if (!this.headElement.previousElementSibling || (this.headElement.previousElementSibling && this.headElement.previousElementSibling.classList.contains("item--pin"))) {
            // 如果是第一个，或者前一个是 pinned，则不处理
        }
        else {
            let tempTab;
            let pinIndex = 0;
            let lastHeadElement;
            this.parent.children.find((item, index) => {
                if (item.headElement.classList.contains("item--pin")) {
                    pinIndex = index + 1;
                    lastHeadElement = item.headElement;
                }
                if (item.id === this.id) {
                    tempTab = this.parent.children.splice(index, 1)[0];
                    return true;
                }
            });
            if (lastHeadElement) {
                lastHeadElement.after(tempTab.headElement);
            }
            else {
                this.parent.children[0].headElement.before(tempTab.headElement);
            }
            this.parent.children.splice(pinIndex, 0, tempTab);
        }
        this.headElement.classList.add("item--pin");
        if (this.docIcon || this.icon) {
            this.headElement.querySelector(".item__text").classList.add("fn__none");
        }
    }
    setDocIcon(icon) {
        this.docIcon = icon;
        if (this.docIcon) {
            const iconElement = this.headElement.querySelector(".item__icon");
            if (iconElement) {
                iconElement.innerHTML = unicode2Emoji(icon);
            }
            else {
                this.headElement.querySelector(".item__text").insertAdjacentHTML("beforebegin", `<span class="item__icon">${unicode2Emoji(icon)}</span>`);
            }
            if (this.headElement.classList.contains("item--pin")) {
                this.headElement.querySelector(".item__text").classList.add("fn__none");
            }
        }
        else {
            this.headElement.querySelector(".item__icon").remove();
            this.headElement.querySelector(".item__text").classList.remove("fn__none");
        }
    }
    unpin() {
        if (!this.headElement.nextElementSibling || (this.headElement.nextElementSibling && !this.headElement.nextElementSibling.classList.contains("item--pin"))) {
            // 如果是最后一个，或者后一个是 unpinned，则不处理
        }
        else {
            let tempTab;
            let pinIndex = 0;
            let lastHeadElement;
            for (let index = 0; index < this.parent.children.length; index++) {
                if (this.parent.children[index].id === this.id) {
                    tempTab = this.parent.children.splice(index, 1)[0];
                    index--;
                }
                if (index > -1 && this.parent.children[index].headElement.classList.contains("item--pin")) {
                    pinIndex = index + 1;
                    lastHeadElement = this.parent.children[index].headElement;
                }
            }
            lastHeadElement.after(tempTab.headElement);
            this.parent.children.splice(pinIndex, 0, tempTab);
        }
        this.headElement.classList.remove("item--pin");
        if (this.docIcon || this.icon) {
            this.headElement.querySelector(".item__text").classList.remove("fn__none");
        }
    }
}
