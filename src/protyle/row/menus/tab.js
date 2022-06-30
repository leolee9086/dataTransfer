var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MenuItem } from "./Menu";
import { Editor } from "../editor";
import { copyTab } from "../layout/util";
import { copySubMenu } from "./commonMenuItem";
const closeMenu = (model) => {
    const currentTab = model.parent;
    const allTabs = [];
    const unmodifiedTabs = [];
    const leftTabs = [];
    const rightTabs = [];
    let midIndex = -1;
    currentTab.parent.children.forEach((item, index) => {
        var _a, _b;
        const editor = item.model;
        if (((_a = editor.editor) === null || _a === void 0 ? void 0 : _a.protyle) && !((_b = editor.editor) === null || _b === void 0 ? void 0 : _b.protyle.updated)) {
            unmodifiedTabs.push(item);
        }
        if (item.id === currentTab.id) {
            midIndex = index;
        }
        if (midIndex === -1) {
            leftTabs.push(item);
        }
        else if (index > midIndex) {
            rightTabs.push(item);
        }
        allTabs.push(item);
    });
    window.siyuan.menus.menu.append(new MenuItem({
        icon: "iconClose",
        label: window.siyuan.languages.close,
        accelerator: window.siyuan.config.keymap.general.closeTab.custom,
        click: () => {
            currentTab.parent.removeTab(currentTab.id);
        }
    }).element);
    if (allTabs.length > 1) {
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.closeOthers,
            click: () => __awaiter(void 0, void 0, void 0, function* () {
                for (let index = 0; index < allTabs.length; index++) {
                    if (allTabs[index].id !== currentTab.id && !allTabs[index].headElement.classList.contains("item--pin")) {
                        yield allTabs[index].parent.removeTab(allTabs[index].id, true);
                    }
                }
                if (!currentTab.headElement.parentElement.querySelector(".item--focus")) {
                    currentTab.parent.switchTab(currentTab.headElement, true);
                }
            })
        }).element);
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.closeAll,
            click: () => __awaiter(void 0, void 0, void 0, function* () {
                for (let index = 0; index < allTabs.length; index++) {
                    if (!allTabs[index].headElement.classList.contains("item--pin")) {
                        yield allTabs[index].parent.removeTab(allTabs[index].id, true);
                    }
                }
                if (allTabs[0].headElement.parentElement) {
                    allTabs[0].parent.switchTab(allTabs[0].headElement, true);
                }
            })
        }).element);
        if (leftTabs.length > 0) {
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.closeLeft,
                click: () => __awaiter(void 0, void 0, void 0, function* () {
                    for (let index = 0; index < leftTabs.length; index++) {
                        if (!leftTabs[index].headElement.classList.contains("item--pin")) {
                            yield leftTabs[index].parent.removeTab(leftTabs[index].id);
                        }
                    }
                    if (!currentTab.headElement.parentElement.querySelector(".item--focus")) {
                        currentTab.parent.switchTab(currentTab.headElement, true);
                    }
                })
            }).element);
        }
        if (rightTabs.length > 0) {
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.closeRight,
                click: () => __awaiter(void 0, void 0, void 0, function* () {
                    for (let index = 0; index < rightTabs.length; index++) {
                        if (!rightTabs[index].headElement.classList.contains("item--pin")) {
                            yield rightTabs[index].parent.removeTab(rightTabs[index].id);
                        }
                    }
                    if (!currentTab.headElement.parentElement.querySelector(".item--focus")) {
                        currentTab.parent.switchTab(currentTab.headElement, true);
                    }
                })
            }).element);
        }
        if (unmodifiedTabs.length > 0) {
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.closeUnmodified,
                click: () => __awaiter(void 0, void 0, void 0, function* () {
                    for (let index = 0; index < unmodifiedTabs.length; index++) {
                        if (!unmodifiedTabs[index].headElement.classList.contains("item--pin")) {
                            yield unmodifiedTabs[index].parent.removeTab(unmodifiedTabs[index].id);
                        }
                    }
                    if (currentTab.headElement.parentElement && !currentTab.headElement.parentElement.querySelector(".item--focus")) {
                        currentTab.parent.switchTab(currentTab.headElement, true);
                    }
                    else if (allTabs[0].headElement.parentElement) {
                        allTabs[0].parent.switchTab(allTabs[0].headElement, true);
                    }
                })
            }).element);
        }
    }
    window.siyuan.menus.menu.append(new MenuItem({ type: "separator" }).element);
};
const splitSubMenu = (model) => {
    const subMenus = [{
            icon: "iconSplitLR",
            label: window.siyuan.languages.splitLR,
            click: () => {
                const currentTab = model.parent;
                currentTab.parent.split("lr").addTab(copyTab(currentTab));
            }
        }];
    const currentTab = model.parent;
    if (currentTab.parent.children.length > 1) {
        subMenus.push({
            icon: "iconRight",
            label: window.siyuan.languages.splitMoveR,
            click: () => {
                const newWnd = currentTab.parent.split("lr");
                newWnd.headersElement.append(currentTab.headElement);
                newWnd.moveTab(currentTab);
            }
        });
    }
    subMenus.push({
        icon: "iconSplitTB",
        label: window.siyuan.languages.splitTB,
        click: () => {
            const currentTab = model.parent;
            currentTab.parent.split("tb").addTab(copyTab(currentTab));
        }
    });
    if (currentTab.parent.children.length > 1) {
        subMenus.push({
            icon: "iconDown",
            label: window.siyuan.languages.splitMoveB,
            click: () => {
                const newWnd = currentTab.parent.split("tb");
                newWnd.headersElement.append(currentTab.headElement);
                newWnd.moveTab(currentTab);
            }
        });
    }
    return subMenus;
};
export const initTabMenu = (type, model) => {
    window.siyuan.menus.menu.remove();
    closeMenu(model);
    window.siyuan.menus.menu.append(new MenuItem({
        label: window.siyuan.languages.split,
        submenu: splitSubMenu(model)
    }).element);
    if (model instanceof Editor) {
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.copy,
            icon: "iconCopy",
            type: "submenu",
            submenu: copySubMenu(model.editor.protyle.block.rootID, "", false)
        }).element);
    }
    if (model.parent.headElement.classList.contains("item--pin")) {
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.unpin,
            icon: "iconPin",
            click: () => {
                model.parent.unpin();
            }
        }).element);
    }
    else {
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.pin,
            icon: "iconPin",
            click: () => {
                model.parent.pin();
            }
        }).element);
    }
    return window.siyuan.menus.menu;
};
