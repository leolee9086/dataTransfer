import { hasClosestBlock, hasClosestByAttribute, hasClosestByClassName, hasClosestByMatchTag } from "./hasClosest";
import * as dayjs from "dayjs";
import { removeEmbed } from "../wysiwyg/removeEmbed";
import { transaction, updateTransaction } from "../wysiwyg/transaction";
import { getContenteditableElement } from "../wysiwyg/getBlock";
import { focusBlock, getEditorRange, focusByWbr } from "./selection";
import { mathRender } from "../markdown/mathRender";
import { Constants } from "../../constants";
export const insertHTML = (html, protyle, isBlock = false) => {
    var _a;
    if (html === "") {
        return;
    }
    const range = getEditorRange(protyle.wysiwyg.element);
    // table 选中处理 https://ld246.com/article/1624269001599
    const tableElement = hasClosestByAttribute(range.startContainer, "data-type", "NodeTable");
    if (range.toString() !== "" && tableElement && range.commonAncestorContainer.nodeType !== 3) {
        const parentTag = range.commonAncestorContainer.tagName;
        if (parentTag !== "TH" && parentTag !== "TD") {
            let cellElement = hasClosestByMatchTag(range.startContainer, "TD") || hasClosestByMatchTag(range.startContainer, "TH");
            if (!cellElement) {
                cellElement = tableElement.querySelector("th") || tableElement.querySelector("td");
                range.setStartBefore(cellElement.firstChild);
            }
            if (cellElement.lastChild) {
                range.setEndAfter(cellElement.lastChild);
            }
            else {
                range.collapse(true);
            }
        }
    }
    if (tableElement) {
        html = protyle.lute.BlockDOM2InlineBlockDOM(html);
    }
    let blockElement = hasClosestBlock(range.startContainer);
    if (!blockElement) {
        // 使用鼠标点击选则模版提示列表后 range 丢失
        if (protyle.toolbar.range) {
            blockElement = hasClosestBlock(protyle.toolbar.range.startContainer);
        }
        else {
            blockElement = protyle.wysiwyg.element.firstElementChild;
        }
    }
    if (!blockElement) {
        return;
    }
    let id = blockElement.getAttribute("data-node-id");
    if (range.toString() === "") {
        // 连续粘贴 PDF 标注不生效 https://github.com/siyuan-note/siyuan/issues/3018
        const fileAnnoElement = hasClosestByAttribute(range.startContainer, "data-type", "file-annotation-ref");
        if (fileAnnoElement) {
            range.setEndAfter(fileAnnoElement);
            range.collapse(false);
        }
    }
    range.insertNode(document.createElement("wbr"));
    let oldHTML = blockElement.outerHTML;
    if (range.toString() !== "") {
        const inlineMathElement = hasClosestByAttribute(range.commonAncestorContainer, "data-type", "inline-math");
        if (inlineMathElement) {
            // 表格内选中数学公式 https://ld246.com/article/1631708573504
            inlineMathElement.remove();
        }
        else if (range.startContainer.nodeType === 3 && range.startContainer.parentElement.getAttribute("data-type") === "block-ref") {
            // ref 选中处理 https://ld246.com/article/1629214377537
            range.startContainer.parentElement.remove();
        }
        else {
            range.deleteContents();
        }
        range.insertNode(document.createElement("wbr"));
    }
    const tempElement = document.createElement("template");
    tempElement.innerHTML = html;
    const editableElement = getContenteditableElement(blockElement);
    let render = false;
    // 使用 lute 方法会添加 p 元素，只有一个 p 元素或者只有一个字符串或者为 <u>b</u> 时的时候只拷贝内部
    if (!isBlock) {
        if (tempElement.content.firstChild.nodeType === 3 ||
            (tempElement.content.firstChild.nodeType !== 3 &&
                ((tempElement.content.firstElementChild.classList.contains("p") && tempElement.content.childElementCount === 1) ||
                    tempElement.content.firstElementChild.tagName !== "DIV"))) {
            if (tempElement.content.firstChild.nodeType !== 3 && tempElement.content.firstElementChild.classList.contains("p")) {
                tempElement.innerHTML = tempElement.content.firstElementChild.firstElementChild.innerHTML.trim();
            }
            range.insertNode(tempElement.content.cloneNode(true));
            range.collapse(false);
            blockElement.setAttribute("updated", dayjs().format("YYYYMMDDHHmmss"));
            if (editableElement && (editableElement.textContent.startsWith("```") || editableElement.textContent.startsWith("~~~") || editableElement.textContent.startsWith("···") ||
                editableElement.textContent.indexOf("\n```") > -1 || editableElement.textContent.indexOf("\n~~~") > -1 || editableElement.textContent.indexOf("\n···") > -1)) {
                if (editableElement.innerHTML.indexOf("\n") === -1 && editableElement.textContent.replace(/·|~/g, "`").replace(/^`{3,}/g, "").indexOf("`") > -1) {
                    // ```test` 不处理
                }
                else {
                    let replaceInnerHTML = editableElement.innerHTML.replace(/^(~|·|`){3,}/g, "```").replace(/\n(~|·|`){3,}/g, "\n```").trim();
                    if (!replaceInnerHTML.endsWith("\n```")) {
                        replaceInnerHTML += "\n```";
                    }
                    const languageIndex = replaceInnerHTML.indexOf("```") + 3;
                    replaceInnerHTML = replaceInnerHTML.substring(0, languageIndex) + (window.localStorage["local-codelang"] || "") + replaceInnerHTML.substring(languageIndex);
                    editableElement.innerHTML = replaceInnerHTML;
                }
            }
            const spinHTML = protyle.lute.SpinBlockDOM(removeEmbed(blockElement));
            const scrollLeft = blockElement.firstElementChild.scrollLeft;
            blockElement.outerHTML = spinHTML;
            render = true;
            // spin 后变成多个块需后续处理 https://github.com/siyuan-note/insider/issues/451
            tempElement.innerHTML = spinHTML;
            Array.from(protyle.wysiwyg.element.querySelectorAll(`[data-node-id="${id}"]`)).find((item) => {
                if (!hasClosestByAttribute(item, "data-type", "NodeBlockQueryEmbed")) {
                    blockElement = item;
                    return true;
                }
            });
            if (tempElement.content.childElementCount === 1) {
                if (blockElement.classList.contains("table") && scrollLeft > 0) {
                    blockElement.firstElementChild.scrollLeft = scrollLeft;
                }
                mathRender(blockElement);
                updateTransaction(protyle, id, blockElement.outerHTML, oldHTML);
                focusByWbr(protyle.wysiwyg.element, range);
                return;
            }
        }
    }
    const undoOperation = [];
    const doOperation = [];
    const cursorLiElement = hasClosestByClassName(blockElement, "li");
    // 列表项不能单独进行粘贴 https://ld246.com/article/1628681120576/comment/1628681209731#comments
    if (((_a = tempElement.content.children[0]) === null || _a === void 0 ? void 0 : _a.getAttribute("data-type")) === "NodeListItem") {
        if (cursorLiElement) {
            blockElement = cursorLiElement;
            id = blockElement.getAttribute("data-node-id");
            oldHTML = blockElement.outerHTML;
        }
        else {
            const liItemElement = tempElement.content.children[0];
            const subType = liItemElement.getAttribute("data-subtype");
            tempElement.innerHTML = `<div${subType === "o" ? " data-marker=\"1.\"" : ""} data-subtype="${subType}" data-node-id="${Lute.NewNodeID()}" data-type="NodeList" class="list">${html}<div class="protyle-attr" contenteditable="false">${Constants.ZWSP}</div></div>`;
        }
    }
    Array.from(tempElement.content.children).reverse().forEach(item => {
        const addId = item.getAttribute("data-node-id");
        if (addId === id) {
            doOperation.push({
                action: "update",
                data: item.outerHTML,
                id: addId,
            });
            undoOperation.push({
                action: "update",
                id: addId,
                data: oldHTML,
            });
        }
        else {
            doOperation.push({
                action: "insert",
                data: item.outerHTML,
                id: addId,
                previousID: id
            });
            undoOperation.push({
                action: "delete",
                id: addId,
            });
        }
        if (!render) {
            blockElement.after(item);
        }
    });
    if (editableElement && editableElement.textContent === "") {
        doOperation.push({
            action: "delete",
            id
        });
        undoOperation.push({
            action: "insert",
            data: oldHTML,
            id,
            previousID: blockElement.previousElementSibling ? blockElement.previousElementSibling.getAttribute("data-node-id") : "",
            parentID: blockElement.parentElement.getAttribute("data-node-id") || protyle.block.parentID
        });
        const nextElement = blockElement.nextElementSibling;
        blockElement.remove();
        focusBlock(nextElement, undefined, false);
    }
    else {
        focusByWbr(protyle.wysiwyg.element, range);
    }
    transaction(protyle, doOperation, undoOperation);
};
