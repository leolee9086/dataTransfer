export const removeFoldHeading = (nodeElement) => {
    var _a;
    const nodeH = parseInt(nodeElement.getAttribute("data-subtype").substr(1));
    let nextElement = nodeElement.nextElementSibling;
    while (nextElement) {
        if (nextElement.classList.contains("sb")) {
            let nextFirstElement = nextElement.firstElementChild;
            while (nextFirstElement && nextFirstElement.classList.contains("sb")) {
                nextFirstElement = nextFirstElement.firstElementChild;
            }
            if ((nextFirstElement.getAttribute("data-type") === "NodeHeading" &&
                parseInt(nextFirstElement.getAttribute("data-subtype").substr(1)) > nodeH) ||
                nextFirstElement.getAttribute("data-type") !== "NodeHeading") {
                const tempElement = nextElement;
                nextElement = nextElement.nextElementSibling;
                tempElement.remove();
            }
            else {
                break;
            }
        }
        else {
            const currentH = parseInt((_a = nextElement.getAttribute("data-subtype")) === null || _a === void 0 ? void 0 : _a.substr(1));
            if (!nextElement.classList.contains("protyle-attr") && // 超级块末尾为属性
                (isNaN(currentH) || currentH > nodeH)) {
                const tempElement = nextElement;
                nextElement = nextElement.nextElementSibling;
                tempElement.remove();
            }
            else {
                break;
            }
        }
    }
};
