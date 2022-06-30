var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as path from "path";
import { fetchPost, fetchSyncPost } from "./fetch";
import { Dialog } from "../dialog";
import { escapeHtml } from "./escape";
import { isMobile } from "./functions";
import { focusByRange } from "../protyle/util/selection";
import { hasClosestByClassName } from "../protyle/util/hasClosest";
import { unicode2Emoji } from "../emoji";
export const addBaseURL = () => {
    let baseURLElement = document.getElementById("baseURL");
    if (!baseURLElement) {
        baseURLElement = document.createElement("base");
        baseURLElement.id = "baseURL";
    }
    baseURLElement.setAttribute("href", location.origin);
    document.getElementsByTagName("head")[0].appendChild(baseURLElement);
};
export const getDisplayName = (filePath, basename = true, removeSY = false) => {
    let name = filePath;
    if (basename) {
        name = pathPosix().basename(filePath);
    }
    if (removeSY && name.endsWith(".sy")) {
        name = name.substr(0, name.length - 3);
    }
    return name;
};
export const isLocalPath = (link) => {
    if (!link) {
        return false;
    }
    return link.startsWith("assets/") || link.startsWith("file://");
};
export const pathPosix = () => {
    if (path.posix) {
        return path.posix;
    }
    return path;
};
const moveToPath = (notebookId, path, toNotebookId, toFolderPath, dialog) => {
    fetchPost("/api/filetree/moveDoc", {
        fromNotebook: notebookId,
        toNotebook: toNotebookId,
        fromPath: path,
        toPath: toFolderPath,
    });
    dialog.destroy();
};
export const movePathTo = (notebookId, path, focus = true) => __awaiter(void 0, void 0, void 0, function* () {
    const exitDialog = window.siyuan.dialogs.find((item) => {
        if (item.element.querySelector("#foldList")) {
            item.destroy();
            return true;
        }
    });
    if (exitDialog) {
        return;
    }
    const response = yield fetchSyncPost("/api/filetree/getHPathByPath", {
        notebook: notebookId,
        path
    });
    let range;
    if (getSelection().rangeCount > 0) {
        range = getSelection().getRangeAt(0);
    }
    const dialog = new Dialog({
        title: `${window.siyuan.languages.move} <span class="ft__smaller ft__on-surface">${escapeHtml(pathPosix().join(getNotebookName(notebookId), response.data))}</span>`,
        content: `<div class="b3-form__icon b3-form__space">
    <svg class="b3-form__icon-icon"><use xlink:href="#iconSearch"></use></svg>
    <input class="b3-text-field fn__block b3-form__icon-input" value="" placeholder="${window.siyuan.languages.search}">
</div>
<ul id="foldList" class="b3-list b3-list--background" style="height: 50vh;overflow: auto;position: relative"></ul>`,
        width: isMobile() ? "80vw" : "50vw",
        destroyCallback() {
            if (range && focus) {
                focusByRange(range);
            }
        }
    });
    const searchPanelElement = dialog.element.querySelector("#foldList");
    const inputElement = dialog.element.querySelector(".b3-text-field");
    inputElement.focus();
    const inputEvent = (event) => {
        if (event && event.isComposing) {
            return;
        }
        fetchPost("/api/filetree/searchDocs", {
            k: inputElement.value
        }, (data) => {
            let fileHTML = "";
            data.data.forEach((item) => {
                if (item.path === pathPosix().dirname(path) + "/" || item.path === path) {
                    return;
                }
                fileHTML += `<li class="b3-list-item${fileHTML === "" ? " b3-list-item--focus" : ""}" data-path="${item.path}" data-box="${item.box}">
    ${item.boxIcon ? ('<span class="b3-list-item__icon">' + unicode2Emoji(item.boxIcon) + "</span>") : ""}
    <span class="b3-list-item__showall">${escapeHtml(item.hPath)}</span>
</li>`;
            });
            searchPanelElement.innerHTML = fileHTML;
        });
    };
    inputEvent();
    inputElement.addEventListener("compositionend", (event) => {
        inputEvent(event);
    });
    inputElement.addEventListener("input", (event) => {
        inputEvent(event);
    });
    const lineHeight = 28;
    inputElement.addEventListener("keydown", (event) => {
        let currentList = dialog.element.querySelector(".b3-list-item--focus");
        if (!currentList) {
            return;
        }
        if (event.key === "ArrowDown") {
            currentList.classList.remove("b3-list-item--focus");
            if (!currentList.nextElementSibling) {
                searchPanelElement.children[0].classList.add("b3-list-item--focus");
            }
            else {
                currentList.nextElementSibling.classList.add("b3-list-item--focus");
            }
            currentList = searchPanelElement.querySelector(".b3-list-item--focus");
            if (searchPanelElement.scrollTop < currentList.offsetTop - searchPanelElement.clientHeight + lineHeight ||
                searchPanelElement.scrollTop > currentList.offsetTop) {
                searchPanelElement.scrollTop = currentList.offsetTop - searchPanelElement.clientHeight + lineHeight;
            }
            event.preventDefault();
        }
        else if (event.key === "ArrowUp") {
            currentList.classList.remove("b3-list-item--focus");
            if (!currentList.previousElementSibling) {
                const length = searchPanelElement.children.length;
                searchPanelElement.children[length - 1].classList.add("b3-list-item--focus");
            }
            else {
                currentList.previousElementSibling.classList.add("b3-list-item--focus");
            }
            currentList = searchPanelElement.querySelector(".b3-list-item--focus");
            if (searchPanelElement.scrollTop < currentList.offsetTop - searchPanelElement.clientHeight + lineHeight ||
                searchPanelElement.scrollTop > currentList.offsetTop - lineHeight * 2) {
                searchPanelElement.scrollTop = currentList.offsetTop - lineHeight * 2;
            }
            event.preventDefault();
        }
        else if (event.key === "Enter") {
            moveToPath(notebookId, path, currentList.getAttribute("data-box"), currentList.getAttribute("data-path"), dialog);
            event.preventDefault();
        }
    });
    dialog.element.addEventListener("click", (event) => {
        const target = event.target;
        const liElement = hasClosestByClassName(target, "b3-list-item");
        if (liElement) {
            moveToPath(notebookId, path, liElement.getAttribute("data-box"), liElement.getAttribute("data-path"), dialog);
        }
    });
});
export const getNotebookName = (id) => {
    let rootPath = "";
    window.siyuan.notebooks.find((item) => {
        if (item.id === id) {
            rootPath = item.name;
            return true;
        }
    });
    return rootPath;
};
export const setNotebookName = (id, name) => {
    window.siyuan.notebooks.find((item) => {
        if (item.id === id) {
            item.name = name;
            return true;
        }
    });
};
export const getOpenNotebookCount = () => {
    let count = 0;
    window.siyuan.notebooks.forEach(item => {
        if (!item.closed) {
            count++;
        }
    });
    return count;
};
export const setNoteBook = (cb) => {
    fetchPost("/api/notebook/lsNotebooks", {}, (response) => {
        window.siyuan.notebooks = response.data.notebooks;
        if (cb) {
            cb(response.data.notebooks);
        }
    });
};
