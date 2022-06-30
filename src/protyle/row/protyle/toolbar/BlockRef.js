import { getEventName } from "../util/compatibility";
import { ToolbarItem } from "./ToolbarItem";
export class BlockRef extends ToolbarItem {
    constructor(protyle, menuItem) {
        super(protyle, menuItem);
        this.element.addEventListener(getEventName(), (event) => {
            protyle.toolbar.setInlineMark(protyle, "blockRef", "add");
            event.stopPropagation();
        });
    }
}
