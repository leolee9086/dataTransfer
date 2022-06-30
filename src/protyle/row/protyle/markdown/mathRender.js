import { addScript } from "../util/addScript";
import { addStyle } from "../util/addStyle";
import { Constants } from "../../constants";
import { hasNextSibling, hasPreviousSibling } from "../wysiwyg/getBlock";
import { hasClosestBlock } from "../util/hasClosest";
export const mathRender = (element, cdn = Constants.PROTYLE_CDN, maxWidth = false) => {
    let mathElements = [];
    if (element.getAttribute("data-subtype") === "math") {
        // 编辑器内代码块编辑渲染
        mathElements = [element];
    }
    else {
        mathElements = Array.from(element.querySelectorAll('[data-subtype="math"]'));
    }
    if (mathElements.length === 0) {
        return;
    }
    addStyle(`${cdn}/js/katex/katex.min.css?v=0.15.3`, "protyleKatexStyle");
    addScript(`${cdn}/js/katex/katex.min.js?v=0.15.3`, "protyleKatexScript").then(() => {
        addScript(`${cdn}/js/katex/mhchem.min.js?v=0.15.3`, "protyleKatexMhchemScript").then(() => {
            mathElements.forEach((mathElement) => {
                var _a;
                if (mathElement.getAttribute("data-render") === "true") {
                    return;
                }
                const math = Lute.UnEscapeHTMLStr(mathElement.getAttribute("data-content"));
                mathElement.setAttribute("data-render", "true");
                let renderElement = mathElement;
                if (mathElement.tagName === "DIV") {
                    renderElement = mathElement.firstElementChild;
                }
                try {
                    renderElement.innerHTML = katex.renderToString(math, {
                        displayMode: mathElement.tagName === "DIV",
                        output: "html",
                    });
                    renderElement.classList.remove("ft__error");
                    const blockElement = hasClosestBlock(mathElement);
                    if (mathElement.tagName === "DIV") {
                        renderElement.firstElementChild.setAttribute("contenteditable", "false");
                        if (renderElement.childElementCount < 2) {
                            renderElement.insertAdjacentHTML("beforeend", `<span style="position: absolute">${Constants.ZWSP}</span>`);
                        }
                        // https://github.com/siyuan-note/siyuan/issues/3541
                        const baseElements = renderElement.querySelectorAll(".base");
                        if (baseElements.length > 0) {
                            baseElements[baseElements.length - 1].insertAdjacentHTML("afterend", "<span class='fn__flex-1'></span>");
                        }
                        // https://github.com/siyuan-note/siyuan/issues/4334
                        const newlineElement = renderElement.querySelector(".katex-html > .newline");
                        if (newlineElement) {
                            newlineElement.parentElement.style.display = "block";
                        }
                    }
                    else {
                        if (blockElement && mathElement.getBoundingClientRect().width > blockElement.clientWidth) {
                            mathElement.setAttribute("style", "max-width:100%;overflow-x:auto;overflow-y:hidden;display:inline-block");
                        }
                        else {
                            mathElement.removeAttribute("style");
                        }
                        const nextSibling = hasNextSibling(mathElement);
                        if (!nextSibling) {
                            // 表格编辑问题 https://ld246.com/article/1629191424824
                            if (mathElement.parentElement.tagName !== "TH" && mathElement.parentElement.tagName !== "TD") {
                                // 光标无法移动到末尾 https://github.com/siyuan-note/siyuan/issues/2112
                                mathElement.insertAdjacentText("afterend", "\n");
                            }
                            else {
                                // 光标在数学公式 _a 后，视觉上却在下个单元格中 https://ld246.com/article/1651595975481
                                mathElement.insertAdjacentText("beforeend", Constants.ZWSP);
                            }
                        }
                        else if (nextSibling && nextSibling.textContent !== "\n") {
                            // 数学公式后一个字符删除多 br https://ld246.com/article/1647157880974
                            // 数学公式后有 \n 不能再添加 &#xFEFF; https://ld246.com/article/1647329437541
                            mathElement.insertAdjacentHTML("beforeend", "&#xFEFF;");
                        }
                        // 光标无法移动到段首 https://ld246.com/article/1623551823742
                        if ((_a = mathElement.previousSibling) === null || _a === void 0 ? void 0 : _a.textContent.endsWith("\n")) {
                            mathElement.insertAdjacentText("beforebegin", Constants.ZWSP);
                        }
                        else if (!hasPreviousSibling(mathElement) && ["TH", "TD"].includes(mathElement.parentElement.tagName)) {
                            // 单元格中只有数学公式时，光标无法移动到数学公式前
                            mathElement.insertAdjacentText("afterbegin", Constants.ZWSP);
                        }
                    }
                    // export pdf
                    if (maxWidth) {
                        setTimeout(() => {
                            if (mathElement.tagName === "DIV") {
                                const katexElement = mathElement.querySelector(".katex-display");
                                if (katexElement.clientWidth < katexElement.scrollWidth) {
                                    katexElement.firstElementChild.setAttribute("style", `font-size:${katexElement.clientWidth * 100 / katexElement.scrollWidth}%`);
                                }
                            }
                            else {
                                if (blockElement && mathElement.offsetWidth > blockElement.clientWidth) {
                                    mathElement.firstElementChild.setAttribute("style", `font-size:${blockElement.clientWidth * 100 / mathElement.offsetWidth}%`);
                                }
                            }
                        });
                    }
                }
                catch (e) {
                    renderElement.innerHTML = e.message;
                    renderElement.classList.add("ft__error");
                }
            });
        });
    });
};
