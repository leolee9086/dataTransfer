import { getAllModels } from "../layout/getAll";
import { getWndByLayout, resizeTabs } from "../layout/util";
import { Tab } from "../layout/Tab";
import { Search } from "./index";
export const openGlobalSearch = (text, replace) => {
    text = text.trim();
    let wnd;
    const searchModel = getAllModels().search.find((item, index) => {
        if (index === 0) {
            wnd = item.parent.parent;
        }
        wnd.switchTab(item.parent.headElement);
        item.updateSearch(text, replace);
        return true;
    });
    if (searchModel) {
        return;
    }
    if (!wnd) {
        wnd = getWndByLayout(window.siyuan.layout.centerLayout);
    }
    const tab = new Tab({
        icon: "iconSearch",
        title: text,
        callback(tab) {
            const asset = new Search({
                tab,
                text
            });
            tab.addModel(asset);
            resizeTabs();
        }
    });
    wnd.split("lr").addTab(tab);
};
