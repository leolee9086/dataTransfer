import { setPadding } from "../ui/initUI";
import { hideElements } from "../ui/hideElements";
export const setEditMode = (protyle, type) => {
    var _a, _b;
    if (type === "preview") {
        if (!protyle.preview.element.classList.contains("fn__none")) {
            return;
        }
        protyle.preview.element.classList.remove("fn__none");
        protyle.contentElement.classList.add("fn__none");
        (_a = protyle.scroll) === null || _a === void 0 ? void 0 : _a.element.classList.add("fn__none");
        protyle.breadcrumb.element.classList.add("fn__none");
        protyle.breadcrumb.element.nextElementSibling.classList.add("fn__flex-1");
        protyle.preview.render(protyle);
    }
    else if (type === "wysiwyg") {
        setPadding(protyle);
        if (!protyle.contentElement.classList.contains("fn__none")) {
            return;
        }
        protyle.preview.element.classList.add("fn__none");
        protyle.contentElement.classList.remove("fn__none");
        if (protyle.options.render.scroll) {
            (_b = protyle.scroll) === null || _b === void 0 ? void 0 : _b.element.classList.remove("fn__none");
        }
        protyle.breadcrumb.element.classList.remove("fn__none");
        protyle.breadcrumb.element.nextElementSibling.classList.remove("fn__flex-1");
    }
    hideElements(["gutter", "toolbar", "select", "hint", "util"], protyle);
};
