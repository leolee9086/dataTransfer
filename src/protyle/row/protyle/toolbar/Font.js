import { getEventName, updateHotkeyTip } from "../util/compatibility";
import { ToolbarItem } from "./ToolbarItem";
import { hasClosestBlock, hasClosestByMatchTag } from "../util/hasClosest";
import { updateTransaction } from "../wysiwyg/transaction";
import { setPosition } from "../../util/setPosition";
import { getSelectionPosition, focusByRange } from "../util/selection";
import { Constants } from "../../constants";
export class Font extends ToolbarItem {
    constructor(protyle, menuItem) {
        super(protyle, menuItem);
        this.element.addEventListener(getEventName(), () => {
            protyle.toolbar.element.classList.add("fn__none");
            protyle.toolbar.subElement.innerHTML = "";
            protyle.toolbar.subElement.style.width = "";
            protyle.toolbar.subElement.style.padding = "";
            protyle.toolbar.subElement.append(fontMenu(protyle));
            protyle.toolbar.subElement.classList.remove("fn__none");
            const position = getSelectionPosition(protyle.wysiwyg.element, protyle.toolbar.range);
            setPosition(protyle.toolbar.subElement, position.left, position.top + 18, 26);
        });
    }
}
export const fontMenu = (protyle) => {
    let colorHTML = "";
    ["var(--b3-font-color1)", "var(--b3-font-color2)", "var(--b3-font-color3)", "var(--b3-font-color4)",
        "var(--b3-font-color5)", "var(--b3-font-color6)", "var(--b3-font-color7)", "var(--b3-font-color8)",
        "var(--b3-font-color9)", "var(--b3-font-color10)", "var(--b3-font-color11)", "var(--b3-font-color12)",
        "var(--b3-font-color13)"].forEach((item) => {
        colorHTML += `<button class="b3-color__square" data-type="color" style="background-color:${item}"></button>`;
    });
    let bgHTML = "";
    ["var(--b3-font-background1)", "var(--b3-font-background2)", "var(--b3-font-background3)", "var(--b3-font-background4)",
        "var(--b3-font-background5)", "var(--b3-font-background6)", "var(--b3-font-background7)", "var(--b3-font-background8)",
        "var(--b3-font-background9)", "var(--b3-font-background10)", "var(--b3-font-background11)", "var(--b3-font-background12)",
        "var(--b3-font-background13)"].forEach((item) => {
        bgHTML += `<button class="b3-color__square" data-type="backgroundColor" style="background-color:${item}"></button>`;
    });
    const element = document.createElement("div");
    element.classList.add("protyle-font");
    let lastColorHTML = "";
    const lastFonts = JSON.parse(localStorage.getItem(Constants.LOCAL_FONTSTYLES) || "[]");
    if (lastFonts.length > 0) {
        lastColorHTML = `<div style="margin-bottom: 2px" class="fn__flex">
    ${window.siyuan.languages.lastUsed}<span class="fn__space"></span>
    <small class="ft__on-surface fn__flex-center">${updateHotkeyTip(window.siyuan.config.keymap.editor.insert.lastUsed.custom)}</small>
</div><div class="fn__flex" style="align-items: center">`;
        lastFonts.forEach((item) => {
            const lastFontStatus = item.split(Constants.ZWSP);
            switch (lastFontStatus[0]) {
                case "remove":
                    lastColorHTML += `<button style="margin-right: 4px" data-type="remove" class="b3-button--outline b3-button b3-button--small">${window.siyuan.languages.clearFontStyle}</button>`;
                    break;
                case "color":
                    lastColorHTML += `<button class="b3-color__square" data-type="color" style="background-color:${lastFontStatus[1]}"></button>`;
                    break;
                case "backgroundColor":
                    lastColorHTML += `<button class="b3-color__square" data-type="backgroundColor" style="background-color:${lastFontStatus[1]}"></button>`;
                    break;
                case "style2":
                    lastColorHTML += `<button data-type="style2" class="protyle-font__style" style="-webkit-text-stroke: 0.2px var(--b3-theme-on-background);-webkit-text-fill-color : transparent;">${window.siyuan.languages.hollow}</button>`;
                    break;
                case "style4":
                    lastColorHTML += `<button data-type="style4" class="protyle-font__style" style="text-shadow: 1px 1px var(--b3-border-color), 2px 2px var(--b3-border-color), 3px 3px var(--b3-border-color), 4px 4px var(--b3-border-color)">${window.siyuan.languages.shadow}</button>`;
                    break;
            }
        });
        lastColorHTML += "</div>";
    }
    element.innerHTML = `${lastColorHTML}<div style="margin: 4px 0 2px">${window.siyuan.languages.colorFont}</div>
<div class="fn__flex">
    ${colorHTML}
</div>
<div style="margin: 4px 0 2px">${window.siyuan.languages["--b3-theme-background"]}</div>
<div class="fn__flex">
    ${bgHTML}
</div>
<div style="margin: 4px 0 2px">${window.siyuan.languages.fontStyle}</div>
<div class="fn__flex">
    <button data-type="style2" class="protyle-font__style" style="-webkit-text-stroke: 0.2px var(--b3-theme-on-background);-webkit-text-fill-color : transparent;">${window.siyuan.languages.hollow}</button>
    <button data-type="style4" class="protyle-font__style" style="text-shadow: 1px 1px var(--b3-border-color), 2px 2px var(--b3-border-color), 3px 3px var(--b3-border-color), 4px 4px var(--b3-border-color)">${window.siyuan.languages.shadow}</button>
    <span class="fn__space fn__flex-1"></span>
    <button data-type="remove" class="b3-button--outline b3-button b3-button--small">
        ${window.siyuan.languages.clearFontStyle}
    </button>
</div>`;
    element.addEventListener(getEventName(), function (event) {
        let target = event.target;
        while (target && !target.isEqualNode(element)) {
            if (target.tagName === "BUTTON") {
                fontEvent(protyle, target.getAttribute("data-type"), target.style.backgroundColor);
                break;
            }
            target = target.parentElement;
        }
    });
    return element;
};
export const fontEvent = (protyle, type, color) => {
    let localFontStyles = JSON.parse(localStorage.getItem(Constants.LOCAL_FONTSTYLES) || "[]");
    if (type) {
        localFontStyles.splice(0, 0, `${type}${Constants.ZWSP}${color}`);
        localFontStyles = [...new Set(localFontStyles)];
        if (localFontStyles.length > 8) {
            localFontStyles.splice(7, 1);
        }
        localStorage.setItem(Constants.LOCAL_FONTSTYLES, JSON.stringify(localFontStyles));
    }
    else {
        if (localFontStyles.length === 0) {
            type = "color";
            color = "var(--b3-font-color1)";
        }
        else {
            const fontStyles = localFontStyles[0].split(Constants.ZWSP);
            type = fontStyles[0];
            color = fontStyles[1];
        }
    }
    protyle.toolbar.setInlineMark(protyle, "bold", "add", true);
    const range = protyle.toolbar.range;
    const fontElement = hasClosestByMatchTag(range.startContainer, "STRONG");
    if (!fontElement) {
        return;
    }
    const nodeElement = hasClosestBlock(fontElement);
    if (!nodeElement) {
        return;
    }
    fontElement.insertAdjacentHTML("beforeend", "<wbr>");
    const html = nodeElement.outerHTML;
    if (type === "remove") {
        fontElement.style.color = "";
        fontElement.style.webkitTextFillColor = "";
        fontElement.style.webkitTextStroke = "";
        fontElement.style.textShadow = "";
        fontElement.style.backgroundColor = "";
        const textNode = document.createTextNode(fontElement.textContent);
        fontElement.parentElement.replaceChild(textNode, fontElement);
        updateTransaction(protyle, nodeElement.getAttribute("data-node-id"), nodeElement.outerHTML, html);
        const wbrElement = nodeElement.querySelector("wbr");
        if (wbrElement) {
            wbrElement.remove();
        }
        range.setStart(textNode, 0);
        range.setEnd(textNode, textNode.textContent.length);
        focusByRange(range);
        return;
    }
    switch (type) {
        case "color":
            fontElement.style.color = color;
            break;
        case "backgroundColor":
            fontElement.style.backgroundColor = color;
            break;
        case "style2":
            fontElement.style.webkitTextStroke = "0.2px var(--b3-theme-on-background)";
            fontElement.style.webkitTextFillColor = "transparent";
            break;
        case "style4":
            fontElement.style.textShadow = "1px 1px var(--b3-border-color), 2px 2px var(--b3-border-color), 3px 3px var(--b3-border-color), 4px 4px var(--b3-border-color)";
            break;
    }
    fontElement.setAttribute("style", fontElement.getAttribute("style").replace(" background-clip", " -webkit-background-clip"));
    updateTransaction(protyle, nodeElement.getAttribute("data-node-id"), nodeElement.outerHTML, html);
    const wbrElement = nodeElement.querySelector("wbr");
    if (wbrElement) {
        wbrElement.remove();
    }
};
