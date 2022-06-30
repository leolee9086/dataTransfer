import { closePanel } from "./closePanel";
import { openMobileFileById } from "../editor";
import { Constants } from "../../constants";
import { fetchPost } from "../../util/fetch";
import { getIconByType } from "../../editor/getIcon";
import { preventScroll } from "../../protyle/scroll/preventScroll";
const onRecentblocks = (data) => {
    let resultHTML = "";
    data.data.forEach((item) => {
        resultHTML += `<div class="b3-list-item b3-list-item--two" data-url="${item.box}" data-path="${item.path}" data-id="${item.id}">
<div class="b3-list-item__first">
    <svg class="b3-list-item__graphic"><use xlink:href="#${getIconByType(item.type)}"></use></svg>
    <span class="b3-list-item__text">${item.content}</span>
</div>
<div class="b3-list-item__meta">${Lute.EscapeHTMLStr(item.hPath)}</div>
</div>`;
    });
    document.querySelector("#searchPanel").innerHTML = resultHTML;
};
let toolbarSearchTimeout = 0;
const toolbarSearchEvent = () => {
    clearTimeout(toolbarSearchTimeout);
    toolbarSearchTimeout = window.setTimeout(() => {
        const inputElement = document.getElementById("toolbarSearch");
        if (inputElement.value === "") {
            fetchPost("/api/block/getRecentUpdatedBlocks", {}, (response) => {
                onRecentblocks(response);
            });
        }
        else {
            fetchPost("/api/search/fullTextSearchBlock", { query: inputElement.value, }, (response) => {
                onRecentblocks(response);
            });
        }
        const localData = JSON.parse(localStorage.getItem(Constants.LOCAL_SEARCHEDATA) || "{}");
        localData.k = inputElement.value;
        localStorage.setItem(Constants.LOCAL_SEARCHEDATA, JSON.stringify(localData));
    }, Constants.TIMEOUT_SEARCH);
};
const initToolbarSearch = () => {
    const inputElement = document.getElementById("toolbarSearch");
    inputElement.focus();
    const localData = JSON.parse(localStorage.getItem(Constants.LOCAL_SEARCHEDATA) || "{}");
    inputElement.value = localData.k || "";
    inputElement.addEventListener("compositionend", (event) => {
        if (event && event.isComposing) {
            return;
        }
        toolbarSearchEvent();
    });
    inputElement.addEventListener("input", (event) => {
        if (event && event.isComposing) {
            return;
        }
        toolbarSearchEvent();
    });
};
export const popSearch = (modelElement, modelMainElement) => {
    closePanel();
    modelElement.style.top = "0";
    modelElement.querySelector(".toolbar__icon").innerHTML = '<use xlink:href="#iconSearch"></use>';
    modelElement.querySelector(".toolbar__text").innerHTML = '<input id="toolbarSearch" style="background-color: var(--b3-theme-surface);border: 0;" class="b3-text-field fn__block">';
    modelMainElement.innerHTML = '<div id="searchPanel"></div>';
    initToolbarSearch();
    const searchElement = document.getElementById("searchPanel");
    // 不能使用 getEventName() https://ld246.com/article/1638887457149
    searchElement.addEventListener("click", (event) => {
        let target = event.target;
        while (target && !target.isEqualNode(searchElement)) {
            if (target.classList.contains("b3-list-item")) {
                const id = target.getAttribute("data-id");
                if (window.siyuan.mobileEditor.protyle) {
                    preventScroll(window.siyuan.mobileEditor.protyle);
                }
                fetchPost("/api/block/checkBlockFold", { id }, (foldResponse) => {
                    openMobileFileById(id, !foldResponse.data, foldResponse.data ? [Constants.CB_GET_ALL, Constants.CB_GET_HL] : [Constants.CB_GET_HL]);
                });
                closePanel();
                event.preventDefault();
                event.stopPropagation();
                break;
            }
            target = target.parentElement;
        }
    }, false);
    toolbarSearchEvent();
};
