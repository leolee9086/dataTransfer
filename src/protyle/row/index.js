import { Constants } from "./constants";
import { Menus } from "./menus";
import { Model } from "./layout/Model";
import { onGetConfig } from "./util/onGetConfig";
import "./assets/scss/base.scss";
import { initBlockPopover } from "./block/popover";
import { account } from "./config/account";
import { addScript, addScriptSync } from "./protyle/util/addScript";
import { genUUID } from "./util/genID";
import { fetchGet, fetchPost } from "./util/fetch";
import { addBaseURL, setNoteBook } from "./util/pathName";
import { repos } from "./config/repos";
import { openFileById } from "./editor/util";
import { bootSync, downloadProgress, progressLoading, progressStatus, setTitle, transactionError } from "./dialog/processSystem";
import { promiseTransactions } from "./protyle/wysiwyg/transaction";
import { initMessage } from "./dialog/message";
import { resizeDrag } from "./layout/util";
class App {
    constructor() {
        addScriptSync(`${Constants.PROTYLE_CDN}/js/lute/lute.min.js?v=${Constants.SIYUAN_VERSION}`, "protyleLuteScript");
        addScript(`${Constants.PROTYLE_CDN}/js/protyle-html.js?v=${Constants.SIYUAN_VERSION}`, "protyleWcHtmlScript");
        addBaseURL();
        window.siyuan = {
            transactions: [],
            reqIds: {},
            backStack: [],
            layout: {},
            dialogs: [],
            blockPanels: [],
            ctrlIsPressed: false,
            altIsPressed: false,
            ws: new Model({
                id: genUUID(),
                type: "main",
                msgCallback: (data) => {
                    var _a, _b, _c, _d;
                    if (data) {
                        switch (data.cmd) {
                            case "progress":
                                progressLoading(data);
                                break;
                            case "statusbar":
                                progressStatus(data);
                                break;
                            case "downloadProgress":
                                downloadProgress(data.data);
                                break;
                            case "txerr":
                                transactionError(data);
                                break;
                            case "syncing":
                                if (data.code === 0) {
                                    document.querySelector("#barSync svg").classList.add("fn__rotate");
                                    document.querySelector("#barSync").classList.add("toolbar__item--active");
                                    (_b = (_a = repos.element) === null || _a === void 0 ? void 0 : _a.querySelector('[data-type="sync"] svg')) === null || _b === void 0 ? void 0 : _b.classList.add("fn__rotate");
                                }
                                else {
                                    document.querySelector("#barSync svg").classList.remove("fn__rotate");
                                    document.querySelector("#barSync").classList.remove("toolbar__item--active");
                                    (_d = (_c = repos.element) === null || _c === void 0 ? void 0 : _c.querySelector('[data-type="sync"] svg')) === null || _d === void 0 ? void 0 : _d.classList.remove("fn__rotate");
                                }
                                document.querySelector("#barSync").setAttribute("aria-label", data.msg);
                                break;
                            case "refreshtheme":
                                if ((window.siyuan.config.appearance.mode === 1 && window.siyuan.config.appearance.themeDark !== "midnight") || (window.siyuan.config.appearance.mode === 0 && window.siyuan.config.appearance.themeLight !== "daylight")) {
                                    document.getElementById("themeStyle").href = data.data.theme;
                                }
                                else {
                                    document.getElementById("themeDefaultStyle").href = data.data.theme;
                                }
                                break;
                            case "createdailynote":
                                openFileById({ id: data.data.id, action: [Constants.CB_GET_FOCUS] });
                                break;
                        }
                    }
                }
            }),
            menus: new Menus()
        };
        fetchPost("/api/system/getConf", {}, response => {
            window.siyuan.config = response.data;
            fetchGet(`/appearance/langs/${window.siyuan.config.appearance.lang}.json?v=${Constants.SIYUAN_VERSION}`, (lauguages) => {
                window.siyuan.languages = lauguages;
                bootSync();
                fetchPost("/api/setting/getCloudUser", {}, userResponse => {
                    window.siyuan.user = userResponse.data;
                    onGetConfig();
                    account.onSetaccount();
                    resizeDrag();
                    setTitle(window.siyuan.languages.siyuanNote);
                    initMessage();
                });
            });
        });
        setNoteBook();
        initBlockPopover();
        promiseTransactions();
    }
}
new App();
