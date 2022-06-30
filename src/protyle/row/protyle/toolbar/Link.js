import { getEventName } from "../util/compatibility";
import { ToolbarItem } from "./ToolbarItem";
export class Link extends ToolbarItem {
    constructor(protyle, menuItem) {
        super(protyle, menuItem);
        this.element.addEventListener(getEventName(), (event) => {
            protyle.toolbar.setInlineMark(protyle, "link", "add");
            event.stopPropagation();
        });
    }
}
