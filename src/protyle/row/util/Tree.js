import { getIconByType } from "../editor/getIcon";
import { hasClosestByTag } from "../protyle/util/hasClosest";
import { isMobile } from "./functions";
import { mathRender } from "../protyle/markdown/mathRender";
import { unicode2Emoji } from "../emoji";
import { Constants } from "../constants";
export class Tree {
    constructor(options) {
        this.click = options.click;
        this.ctrlClick = options.ctrlClick;
        this.altClick = options.altClick;
        this.shiftClick = options.shiftClick;
        this.rightClick = options.rightClick;
        this.element = options.element;
        this.blockExtHTML = options.blockExtHTML;
        this.updateData(options.data);
        this.bindEvent();
    }
    updateData(data) {
        this.data = data;
        if (!this.data || this.data.length === 0) {
            this.element.innerHTML = `<ul class="b3-list b3-list--background"><li class="b3-list--empty">${window.siyuan.languages.emptyContent}</li></ul>`;
        }
        else {
            this.element.innerHTML = this.genHTML(this.data);
            mathRender(this.element);
        }
    }
    genHTML(data) {
        let html = `<ul${data[0].depth === 0 ? " class='b3-list b3-list--background'" : ""}>`;
        data.forEach((item) => {
            let iconHTML = '<svg class="b3-list-item__graphic"><use xlink:href="#iconFolder"></use></svg>';
            if (item.type === "bookmark") {
                iconHTML = '<svg class="b3-list-item__graphic"><use xlink:href="#iconBookmark"></use></svg>';
            }
            else if (item.type === "tag") {
                iconHTML = '<svg class="b3-list-item__graphic"><use xlink:href="#iconTags"></use></svg>';
            }
            else if (item.type === "backlink") {
                iconHTML = `<svg class="b3-list-item__graphic popover__block" data-id="${item.id}"><use xlink:href="#${getIconByType(item.nodeType, item.subType)}"></use></svg>`;
            }
            else if (item.type === "outline") {
                iconHTML = `<svg class="b3-list-item__graphic popover__block" data-id="${item.id}"><use xlink:href="#${getIconByType(item.nodeType, item.subType)}"></use></svg>`;
            }
            let countHTML = "";
            if (item.count) {
                countHTML = `<span class="counter">${item.count}</span>`;
            }
            html += `<li class="b3-list-item" 
${(item.nodeType !== "NodeDocument" && item.type === "backlink") ? 'draggable="true"' : ""}
${item.id ? 'data-node-id="' + item.id + '"' : ""} 
data-treetype="${item.type}" 
data-type="${item.nodeType}" 
data-subtype="${item.subType}" 
${item.label ? "data-label='" + item.label + "'" : ""}>
    <span style="padding-left: ${item.depth * 16}px" class="b3-list-item__toggle">
        <svg data-id="${encodeURIComponent(item.name + item.depth)}" class="b3-list-item__arrow ${((item.children && item.children.length > 0) || (item.blocks && item.blocks.length > 0)) ? "b3-list-item__arrow--open" : "fn__hidden"}"><use xlink:href="#iconRight"></use></svg>
    </span>
    ${iconHTML}
    <span class="b3-list-item__text"${item.type === "outline" ? ' title="' + Lute.EscapeHTMLStr(Lute.BlockDOM2Content(item.name)) + '"' : ""}>${item.name}</span>
    ${countHTML}
</li>`;
            if (item.children && item.children.length > 0) {
                html += this.genHTML(item.children) + "</ul>";
            }
            if (item.blocks && item.blocks.length > 0) {
                html += this.genBlockHTML(item.blocks, true, item.type) + "</ul>";
            }
        });
        return html;
    }
    genBlockHTML(data, show = false, type) {
        let html = `<ul class="${!show ? "fn__none" : ""}">`;
        data.forEach((item) => {
            let countHTML = "";
            if (item.count) {
                countHTML = `<span class="counter">${item.count}</span>`;
            }
            let iconHTML;
            if (item.type === "NodeDocument") {
                iconHTML = `<span data-defids='["${item.defID}"]' class="b3-list-item__graphic popover__block" data-id="${item.id}">${unicode2Emoji(item.ial.icon || Constants.SIYUAN_IMAGE_FILE)}</span>`;
            }
            else {
                iconHTML = `<svg data-defids='["${item.defID}"]' class="b3-list-item__graphic popover__block" data-id="${item.id}"><use xlink:href="#${getIconByType(item.type, item.subType)}"></use></svg>`;
            }
            html += `<li ${type === "backlink" ? 'draggable="true"' : ""} 
class="b3-list-item ${isMobile() ? "" : "b3-list-item--hide-action"}"  
data-node-id="${item.id}" 
data-ref-text="${encodeURIComponent(item.refText)}" 
data-def-id="${item.defID}" 
data-type="${item.type}" 
data-subtype="${item.subType}" 
data-treetype="${type}"
data-def-path="${item.defPath}">
    <span style="padding-left: ${item.depth * 16}px" class="b3-list-item__toggle">
        <svg data-id="${item.id}" class="b3-list-item__arrow${item.children ? "" : " fn__hidden"}"><use xlink:href="#iconRight"></use></svg>
    </span>
    ${iconHTML}
    <span class="b3-list-item__text" ${type === "outline" ? ' title="' + Lute.EscapeHTMLStr(Lute.BlockDOM2Content(item.content)) + '"' : ""}>${item.content}</span>
    ${countHTML}
    ${this.blockExtHTML || ""}
</li>`;
            if (item.children && item.children.length > 0) {
                html += this.genBlockHTML(item.children, false, type) + "</ul>";
            }
        });
        return html;
    }
    toggleBlocks(liElement) {
        if (!liElement.nextElementSibling) {
            return;
        }
        const svgElement = liElement.firstElementChild.firstElementChild;
        if (svgElement.classList.contains("b3-list-item__arrow--open")) {
            svgElement.classList.remove("b3-list-item__arrow--open");
            liElement.nextElementSibling.classList.add("fn__none");
            if (liElement.nextElementSibling.nextElementSibling && liElement.nextElementSibling.nextElementSibling.tagName === "UL") {
                liElement.nextElementSibling.nextElementSibling.classList.add("fn__none");
            }
        }
        else {
            svgElement.classList.add("b3-list-item__arrow--open");
            liElement.nextElementSibling.classList.remove("fn__none");
            if (liElement.nextElementSibling.nextElementSibling && liElement.nextElementSibling.nextElementSibling.tagName === "UL") {
                liElement.nextElementSibling.nextElementSibling.classList.remove("fn__none");
            }
        }
    }
    setCurrent(target) {
        if (target.classList.contains("b3-list--empty")) {
            return;
        }
        this.element.querySelectorAll("li").forEach((liItem) => {
            liItem.classList.remove("b3-list-item--focus");
        });
        target.classList.add("b3-list-item--focus");
    }
    bindEvent() {
        this.element.addEventListener("contextmenu", (event) => {
            let target = event.target;
            while (target && !target.isEqualNode(this.element)) {
                if (target.tagName === "LI" && this.rightClick) {
                    this.rightClick(target, event);
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                }
                target = target.parentElement;
            }
        });
        this.element.addEventListener("click", (event) => {
            let target = event.target;
            while (target && !target.isEqualNode(this.element)) {
                if (target.classList.contains("b3-list-item__toggle") && !target.firstElementChild.classList.contains("fn__hidden")) {
                    this.toggleBlocks(target.parentElement);
                    this.setCurrent(target.parentElement);
                    event.preventDefault();
                    break;
                }
                if (target.tagName === "LI") {
                    this.setCurrent(target);
                    if (target.getAttribute("data-node-id") || target.getAttribute("data-treetype") === "tag") {
                        if (this.ctrlClick && window.siyuan.ctrlIsPressed) {
                            this.ctrlClick(target);
                        }
                        else if (this.altClick && window.siyuan.altIsPressed) {
                            this.altClick(target);
                        }
                        else if (this.shiftClick && window.siyuan.shiftIsPressed) {
                            this.shiftClick(target);
                        }
                        else if (this.click) {
                            this.click(target, event);
                        }
                        event.stopPropagation();
                    }
                    else {
                        this.toggleBlocks(target);
                    }
                    event.preventDefault();
                    break;
                }
                target = target.parentElement;
            }
        });
        this.element.addEventListener("dragstart", (event) => {
            const liElement = hasClosestByTag(event.target, "LI");
            if (liElement) {
                event.dataTransfer.setData("text/html", liElement.outerHTML);
                // event.dataTransfer.setData(Constants.SIYUAN_DROP_FILE, liElement.parentElement);
                event.dataTransfer.dropEffect = "move";
                liElement.style.opacity = "0.1";
                window.siyuan.dragElement = liElement;
            }
        });
        this.element.addEventListener("dragend", (event) => {
            const liElement = hasClosestByTag(event.target, "LI");
            if (liElement) {
                liElement.style.opacity = "1";
            }
            window.siyuan.dragElement = undefined;
        });
    }
    expandAll() {
        this.element.querySelectorAll("ul").forEach(item => {
            if (!item.classList.contains("b3-list")) {
                item.classList.remove("fn__none");
            }
        });
        this.element.querySelectorAll(".b3-list-item__arrow").forEach(item => {
            item.classList.add("b3-list-item__arrow--open");
        });
    }
    collapseAll() {
        this.element.querySelectorAll("ul").forEach(item => {
            if (!item.classList.contains("b3-list")) {
                item.classList.add("fn__none");
            }
        });
        this.element.querySelectorAll(".b3-list-item__arrow").forEach(item => {
            item.classList.remove("b3-list-item__arrow--open");
        });
    }
    getExpandIds() {
        const ids = [];
        this.element.querySelectorAll(".b3-list-item__arrow--open").forEach(item => {
            ids.push(item.getAttribute("data-id"));
        });
        return ids;
    }
    setExpandIds(ids) {
        this.element.querySelectorAll(".b3-list-item__arrow").forEach(item => {
            if (ids.includes(item.getAttribute("data-id"))) {
                item.classList.add("b3-list-item__arrow--open");
                if (item.parentElement.parentElement.nextElementSibling) {
                    item.parentElement.parentElement.nextElementSibling.classList.remove("fn__none");
                }
            }
            else {
                item.classList.remove("b3-list-item__arrow--open");
                if (item.parentElement.parentElement.nextElementSibling && item.parentElement.parentElement.nextElementSibling.tagName === "UL") {
                    item.parentElement.parentElement.nextElementSibling.classList.add("fn__none");
                }
            }
        });
    }
}
