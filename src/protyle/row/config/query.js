import { fetchPost } from "../util/fetch";
export const query = {
    element: undefined,
    genHTML: () => {
        return `<div class="b3-label">
 ${window.siyuan.languages.searchType}
    <div class="fn__flex config-query">
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.math}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="mathBlock" type="checkbox"${window.siyuan.config.search.mathBlock ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.table}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="table" type="checkbox"${window.siyuan.config.search.table ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.quote}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="blockquote" type="checkbox"${window.siyuan.config.search.blockquote ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.superBlock}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="superBlock" type="checkbox"${window.siyuan.config.search.superBlock ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.paragraph}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="paragraph" type="checkbox"${window.siyuan.config.search.paragraph ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.doc}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="document" type="checkbox"${window.siyuan.config.search.document ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.headings}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="heading" type="checkbox"${window.siyuan.config.search.heading ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.list1}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="list" type="checkbox"${window.siyuan.config.search.list ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.listItem}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="listItem" type="checkbox"${window.siyuan.config.search.listItem ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.code}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="codeBlock" type="checkbox"${window.siyuan.config.search.codeBlock ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                HTML
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="htmlBlock" type="checkbox"${window.siyuan.config.search.htmlBlock ? " checked" : ""}/>
        </label>
    </div>
</div>
<div class="b3-label">
 ${window.siyuan.languages.searchAttr}
    <div class="config-query">
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.name}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="name" type="checkbox"${window.siyuan.config.search.name ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.alias}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="alias" type="checkbox"${window.siyuan.config.search.alias ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.memo}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="memo" type="checkbox"${window.siyuan.config.search.memo ? " checked" : ""}/>
        </label>
                <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.custom}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="custom" type="checkbox"${window.siyuan.config.search.custom ? " checked" : ""}/>
        </label>
    </div>
</div>
<div class="b3-label">
 ${window.siyuan.languages.searchBackmention}
    <div class="config-query">
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.name}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="backlinkMentionName" type="checkbox"${window.siyuan.config.search.backlinkMentionName ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.alias}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="backlinkMentionAlias" type="checkbox"${window.siyuan.config.search.backlinkMentionAlias ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.anchor}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="backlinkMentionAnchor" type="checkbox"${window.siyuan.config.search.backlinkMentionAnchor ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.docName}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="backlinkMentionDoc" type="checkbox"${window.siyuan.config.search.backlinkMentionDoc ? " checked" : ""}/>
        </label>
    </div>
</div>
<div class="b3-label">
 ${window.siyuan.languages.searchVirtualRef}
    <div class="config-query">
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.name}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="virtualRefName" type="checkbox"${window.siyuan.config.search.virtualRefName ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.alias}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="virtualRefAlias" type="checkbox"${window.siyuan.config.search.virtualRefAlias ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.anchor}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="virtualRefAnchor" type="checkbox"${window.siyuan.config.search.virtualRefAnchor ? " checked" : ""}/>
        </label>
        <label class="fn__flex">
            <div class="fn__flex-1 b3-label__text">
                ${window.siyuan.languages.docName}
            </div>
            <span class="fn__space"></span>
            <input class="b3-switch fn__flex-center" id="virtualRefDoc" type="checkbox"${window.siyuan.config.search.virtualRefDoc ? " checked" : ""}/>
        </label>
    </div>
</div>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.searchLimit}
         <div class="b3-label__text b3-typography">${window.siyuan.languages.searchLimit1}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="limit" type="number" min="1" max="10240" value="${window.siyuan.config.search.limit}">
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.searchCaseSensitive}
         <div class="b3-label__text">${window.siyuan.languages.searchCaseSensitive1}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="caseSensitive" type="checkbox"${window.siyuan.config.search.caseSensitive ? " checked" : ""}/>
</label>`;
    },
    bindEvent: () => {
        query.element.querySelectorAll("input").forEach((item) => {
            item.addEventListener("change", () => {
                fetchPost("/api/setting/setSearch", {
                    document: query.element.querySelector("#document").checked,
                    heading: query.element.querySelector("#heading").checked,
                    list: query.element.querySelector("#list").checked,
                    listItem: query.element.querySelector("#listItem").checked,
                    codeBlock: query.element.querySelector("#codeBlock").checked,
                    htmlBlock: query.element.querySelector("#htmlBlock").checked,
                    mathBlock: query.element.querySelector("#mathBlock").checked,
                    table: query.element.querySelector("#table").checked,
                    blockquote: query.element.querySelector("#blockquote").checked,
                    superBlock: query.element.querySelector("#superBlock").checked,
                    paragraph: query.element.querySelector("#paragraph").checked,
                    name: query.element.querySelector("#name").checked,
                    alias: query.element.querySelector("#alias").checked,
                    memo: query.element.querySelector("#memo").checked,
                    custom: query.element.querySelector("#custom").checked,
                    limit: parseInt(query.element.querySelector("#limit").value),
                    caseSensitive: query.element.querySelector("#caseSensitive").checked,
                    backlinkMentionName: query.element.querySelector("#backlinkMentionName").checked,
                    backlinkMentionAlias: query.element.querySelector("#backlinkMentionAlias").checked,
                    backlinkMentionAnchor: query.element.querySelector("#backlinkMentionAnchor").checked,
                    backlinkMentionDoc: query.element.querySelector("#backlinkMentionDoc").checked,
                    virtualRefName: query.element.querySelector("#virtualRefName").checked,
                    virtualRefAlias: query.element.querySelector("#virtualRefAlias").checked,
                    virtualRefAnchor: query.element.querySelector("#virtualRefAnchor").checked,
                    virtualRefDoc: query.element.querySelector("#virtualRefDoc").checked,
                }, response => {
                    window.siyuan.config.search = response.data;
                });
            });
        });
    },
};
