var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Constants } from "../constants";
/// #if !BROWSER
import { ipcRenderer } from "electron";
/// #endif
import { processMessage } from "./processMessage";
import { kernelError } from "../dialog/processSystem";
export const fetchPost = (url, data, cb, headers) => {
    const init = {
        method: "POST",
    };
    if (data) {
        if (["/api/search/searchRefBlock", "/api/graph/getGraph", "/api/graph/getLocalGraph"].includes(url)) {
            window.siyuan.reqIds[url] = new Date().getTime();
            data.reqId = window.siyuan.reqIds[url];
        }
        if (data instanceof FormData) {
            init.body = data;
        }
        else {
            init.body = JSON.stringify(data);
        }
    }
    if (headers) {
        init.headers = headers;
    }
    fetch(url, init).then((response) => {
        return response.json();
    }).then((response) => {
        if (["/api/search/searchRefBlock", "/api/graph/getGraph", "/api/graph/getLocalGraph"].includes(url)) {
            if (response.data.reqId && window.siyuan.reqIds[url] && window.siyuan.reqIds[url] > response.data.reqId) {
                return;
            }
        }
        if (processMessage(response) && cb) {
            cb(response);
        }
    }).catch((e) => {
        console.warn("fetch post error", e);
        if (url === "/api/transactions" && e.message === "Failed to fetch") {
            kernelError();
            return;
        }
        /// #if !BROWSER
        if (url === "/api/system/exit" || url === "/api/system/setWorkspaceDir" || (url === "/api/system/setUILayout" && data.exit // 内核中断，点关闭处理
        )) {
            ipcRenderer.send(Constants.SIYUAN_CONFIG_CLOSETRAY);
            ipcRenderer.send(Constants.SIYUAN_QUIT);
        }
        /// #endif
    });
};
export const fetchSyncPost = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
    const init = {
        method: "POST",
    };
    if (data) {
        init.body = JSON.stringify(data);
    }
    const res = yield fetch(url, init);
    const res2 = yield res.json();
    processMessage(res2);
    return res2;
});
export const fetchGet = (url, cb) => {
    fetch(url).then((response) => {
        return response.json();
    }).then((response) => {
        cb(response);
    });
};
