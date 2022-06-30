import { addScript } from "../util/addScript";
import { Constants } from "../../constants";
import { hasClosestByClassName } from "../util/hasClosest";
export const flowchartRender = (element, cdn = Constants.PROTYLE_CDN) => {
    let flowchartElements = [];
    if (element.getAttribute("data-subtype") === "flowchart") {
        // 编辑器内代码块编辑渲染
        flowchartElements = [element];
    }
    else {
        flowchartElements = Array.from(element.querySelectorAll('[data-subtype="flowchart"]'));
    }
    if (flowchartElements.length === 0) {
        return;
    }
    addScript(`${cdn}/js/flowchart.js/flowchart.min.js?v=0.0.0`, "protyleFlowchartScript").then(() => {
        if (flowchartElements[0].firstElementChild.clientWidth === 0) {
            const tabElement = hasClosestByClassName(flowchartElements[0], "protyle", true);
            if (!tabElement) {
                return;
            }
            const observer = new MutationObserver(() => {
                initFlowchart(flowchartElements);
                observer.disconnect();
            });
            observer.observe(tabElement, { attributeFilter: ["class"] });
        }
        else {
            initFlowchart(flowchartElements);
        }
    });
};
const initFlowchart = (flowchartElements) => {
    flowchartElements.forEach((item) => {
        if (!item.firstElementChild.classList.contains("protyle-icons")) {
            item.insertAdjacentHTML("afterbegin", '<div class="protyle-icons"><span class="protyle-icon protyle-icon--first protyle-action__edit"><svg><use xlink:href="#iconEdit"></use></svg></span><span class="protyle-icon protyle-action__menu protyle-icon--last"><svg><use xlink:href="#iconMore"></use></svg></span></div>');
        }
        const renderElement = item.firstElementChild.nextElementSibling;
        const flowchartObj = flowchart.parse(Lute.UnEscapeHTMLStr(item.getAttribute("data-content")));
        renderElement.innerHTML = "";
        flowchartObj.drawSVG(renderElement);
        renderElement.setAttribute("contenteditable", "false");
        if (!item.textContent.endsWith(Constants.ZWSP)) {
            item.insertAdjacentHTML("beforeend", `<span style="position: absolute">${Constants.ZWSP}</span>`);
        }
    });
};
