import { hasClosestBlock, hasClosestByAttribute } from "../util/hasClosest";
export const getPreviousHeading = (element) => {
    let previous = getPreviousBlock(element);
    while (previous) {
        if (previous.getAttribute("data-type") === "NodeHeading") {
            break;
        }
        else {
            previous = getPreviousBlock(previous);
        }
    }
    return previous;
};
export const getPreviousBlock = (element) => {
    let parentElement = element;
    while (parentElement) {
        if (parentElement.previousElementSibling && parentElement.previousElementSibling.getAttribute("data-node-id")) {
            return parentElement.previousElementSibling;
        }
        const pElement = hasClosestBlock(parentElement.parentElement);
        if (pElement) {
            parentElement = pElement;
        }
        else {
            return false;
        }
    }
};
export const getLastBlock = (element) => {
    let lastElement;
    Array.from(element.querySelectorAll("[data-node-id]")).reverse().find(item => {
        if (!hasClosestByAttribute(item.parentElement, "data-type", "NodeBlockQueryEmbed")) {
            lastElement = item;
            return true;
        }
    });
    return lastElement || element;
};
export const getFirstBlock = (element) => {
    let firstElement;
    Array.from(element.querySelectorAll("[data-node-id]")).find(item => {
        if (!hasClosestByAttribute(item.parentElement, "data-type", "NodeBlockQueryEmbed") && !item.classList.contains("li")) {
            firstElement = item;
            return true;
        }
    });
    return firstElement || element;
};
export const getNextBlock = (element) => {
    let parentElement = element;
    while (parentElement) {
        if (parentElement.nextElementSibling && !parentElement.nextElementSibling.classList.contains("protyle-attr")) {
            return parentElement.nextElementSibling;
        }
        const pElement = hasClosestBlock(parentElement.parentElement);
        if (pElement) {
            parentElement = pElement;
        }
        else {
            return false;
        }
    }
    return false;
};
export const getNoContainerElement = (element) => {
    let childElement = element;
    while (childElement) {
        if (childElement.classList.contains("list") || childElement.classList.contains("li") || childElement.classList.contains("bq") || childElement.classList.contains("sb")) {
            childElement = childElement.querySelector("[data-node-id]");
        }
        else {
            return childElement;
        }
    }
    return false;
};
export const getContenteditableElement = (element) => {
    if (!element || element.getAttribute("contenteditable") === "true") {
        return element;
    }
    return element.querySelector('[contenteditable="true"]');
};
export const isNotEditBlock = (element) => {
    return ["NodeBlockQueryEmbed", "NodeThematicBreak", "NodeMathBlock", "NodeHTMLBlock", "NodeIFrame", "NodeWidget", "NodeVideo", "NodeAudio"].includes(element.getAttribute("data-type")) ||
        (element.getAttribute("data-type") === "NodeCodeBlock" && element.classList.contains("render-node"));
};
export const getTopEmptyElement = (element) => {
    var _a;
    let topElement = element;
    while (topElement.parentElement && !topElement.parentElement.classList.contains("protyle-wysiwyg")) {
        if (!topElement.parentElement.getAttribute("data-node-id")) {
            topElement = topElement.parentElement;
        }
        else if (topElement.parentElement.textContent !== "" || ((_a = topElement.previousElementSibling) === null || _a === void 0 ? void 0 : _a.getAttribute("data-node-id"))) {
            break;
        }
        else {
            topElement = topElement.parentElement;
        }
    }
    return topElement;
};
export const getTopAloneElement = (topSourceElement) => {
    if ("NodeBlockquote" === topSourceElement.parentElement.getAttribute("data-type") && topSourceElement.parentElement.childElementCount === 2) {
        while (!topSourceElement.parentElement.classList.contains("protyle-wysiwyg")) {
            if (topSourceElement.parentElement.getAttribute("data-type") === "NodeBlockquote" && topSourceElement.parentElement.childElementCount === 2) {
                topSourceElement = topSourceElement.parentElement;
            }
            else {
                break;
            }
        }
    }
    else if ("NodeSuperBlock" === topSourceElement.parentElement.getAttribute("data-type") && topSourceElement.parentElement.childElementCount === 2) {
        while (!topSourceElement.parentElement.classList.contains("protyle-wysiwyg")) {
            if (topSourceElement.parentElement.getAttribute("data-type") === "NodeSuperBlock" && topSourceElement.parentElement.childElementCount === 2) {
                topSourceElement = topSourceElement.parentElement;
            }
            else {
                topSourceElement = getTopAloneElement(topSourceElement);
                break;
            }
        }
    }
    else if ("NodeListItem" === topSourceElement.parentElement.getAttribute("data-type") && topSourceElement.parentElement.childElementCount === 3) {
        while (!topSourceElement.parentElement.classList.contains("protyle-wysiwyg")) {
            if (topSourceElement.parentElement.getAttribute("data-type") === "NodeListItem" && topSourceElement.parentElement.childElementCount === 3) {
                topSourceElement = topSourceElement.parentElement;
            }
            else if (topSourceElement.parentElement.getAttribute("data-type") === "NodeList" && topSourceElement.parentElement.childElementCount === 2) {
                topSourceElement = topSourceElement.parentElement;
            }
            else {
                topSourceElement = getTopAloneElement(topSourceElement);
                break;
            }
        }
    }
    else if ("NodeList" === topSourceElement.parentElement.getAttribute("data-type") && topSourceElement.parentElement.childElementCount === 2) {
        while (!topSourceElement.parentElement.classList.contains("protyle-wysiwyg")) {
            if ("NodeList" === topSourceElement.parentElement.getAttribute("data-type") && topSourceElement.parentElement.childElementCount === 2) {
                topSourceElement = topSourceElement.parentElement;
            }
            else if (topSourceElement.parentElement.getAttribute("data-type") === "NodeListItem" && topSourceElement.parentElement.childElementCount === 3) {
                topSourceElement = topSourceElement.parentElement;
            }
            else {
                topSourceElement = getTopAloneElement(topSourceElement);
                break;
            }
        }
    }
    return topSourceElement;
};
export const hasNextSibling = (element) => {
    let nextSibling = element.nextSibling;
    while (nextSibling) {
        if (nextSibling.textContent === "") {
            nextSibling = nextSibling.nextSibling;
        }
        else {
            return nextSibling;
        }
    }
    return false;
};
export const hasPreviousSibling = (element) => {
    let previousSibling = element.previousSibling;
    while (previousSibling) {
        if (previousSibling.textContent === "" && previousSibling.nodeType === 3) {
            previousSibling = previousSibling.previousSibling;
        }
        else {
            return previousSibling;
        }
    }
    return false;
};
