import { openMobileFileById } from "../editor";
let clientX;
let clientY;
let xDiff;
let yDiff;
const forwardStack = [];
let previousIsBack = false;
export const handleTouchEnd = () => {
    var _a, _b;
    if (!clientX || !clientY)
        return;
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > window.innerWidth / 2) {
        if (xDiff > 0) {
            if (forwardStack.length === 0) {
                (_a = window.JSAndroid) === null || _a === void 0 ? void 0 : _a.returnDesktop();
                return;
            }
            if (previousIsBack) {
                window.siyuan.backStack.push(forwardStack.pop());
            }
            const item = forwardStack.pop();
            item.scrollTop = window.siyuan.mobileEditor.protyle.contentElement.scrollTop;
            window.siyuan.backStack.push(item);
            openMobileFileById(item.id, item.hasContext, item.callback, false);
            setTimeout(() => {
                var _a;
                window.siyuan.mobileEditor.protyle.contentElement.scrollTo({
                    top: ((_a = window.siyuan.backStack[window.siyuan.backStack.length - 2]) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0,
                    behavior: "smooth"
                });
            }, 200);
            previousIsBack = false;
        }
        else {
            // 后退
            if (window.siyuan.backStack.length === 0 || (window.siyuan.backStack.length === 1 && forwardStack.length === 0)) {
                (_b = window.JSAndroid) === null || _b === void 0 ? void 0 : _b.returnDesktop();
                return;
            }
            if (!previousIsBack) {
                forwardStack.push(window.siyuan.backStack.pop());
            }
            const item = window.siyuan.backStack.pop();
            item.scrollTop = window.siyuan.mobileEditor.protyle.contentElement.scrollTop;
            forwardStack.push(item);
            openMobileFileById(item.id, item.hasContext, item.callback, false);
            setTimeout(() => {
                var _a;
                window.siyuan.mobileEditor.protyle.contentElement.scrollTo({
                    top: ((_a = forwardStack[forwardStack.length - 2]) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0,
                    behavior: "smooth"
                });
            }, 200);
            previousIsBack = true;
        }
    }
    clientX = null;
    clientY = null;
};
export const handleTouchStart = (event) => {
    xDiff = 0;
    yDiff = 0;
    clientX = event.touches[0].clientX;
    if ((clientX < 48 || clientX > window.innerWidth - 24) && document.querySelector(".scrim").classList.contains("fn__none")) {
        clientY = event.touches[0].clientY;
    }
    else {
        clientX = null;
        clientY = null;
        event.stopImmediatePropagation();
    }
};
export const handleTouchMove = (event) => {
    if (!clientX || !clientY)
        return;
    xDiff = Math.floor(clientX - event.touches[0].clientX);
    yDiff = Math.floor(clientY - event.touches[0].clientY);
    // TODO 动画效果
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff < 0) {
            // "left->right"
        }
        else {
            // "right->left"
        }
    }
};
