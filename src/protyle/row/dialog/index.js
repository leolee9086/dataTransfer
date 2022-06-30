import { getEventName } from "../protyle/util/compatibility";
import { genUUID } from "../util/genID";
export class Dialog {
    constructor(options) {
        this.disableClose = options.disableClose;
        this.id = genUUID();
        window.siyuan.dialogs.push(this);
        this.destroyCallback = options.destroyCallback;
        this.element = document.createElement("div");
        this.element.innerHTML = `<div class="b3-dialog">
<div class="b3-dialog__scrim"></div>
<div class="b3-dialog__container" style="width:${options.width || "auto"}">
  <svg class="b3-dialog__close fn__a${this.disableClose ? " fn__none" : ""}"><use xlink:href="#iconClose"></use></svg>
  <div class="b3-dialog__header${options.title ? "" : " fn__none"}" onselectstart="return false;">${options.title || ""}</div>
  <div style="height:${options.height || "auto"}">${options.content}</div>
</div></div>`;
        this.element.querySelector(".b3-dialog__scrim").addEventListener(getEventName(), (event) => {
            this.destroy();
            event.stopPropagation();
        });
        if (!this.disableClose) {
            this.element.querySelector(".b3-dialog__close").addEventListener(getEventName(), (event) => {
                this.destroy();
                event.stopPropagation();
            });
        }
        document.body.append(this.element);
        setTimeout(() => {
            this.element.classList.add("b3-dialog--open");
        });
    }
    destroy() {
        if (this.disableClose) {
            return false;
        }
        this.element.remove();
        if (this.destroyCallback) {
            this.destroyCallback();
        }
        window.siyuan.dialogs.find((item, index) => {
            if (item.id === this.id) {
                window.siyuan.dialogs.splice(index, 1);
                return true;
            }
        });
        return true;
    }
    bindInput(inputElement, enterEvent) {
        inputElement.focus();
        inputElement.addEventListener("keydown", (event) => {
            if (event.isComposing) {
                event.preventDefault();
                return;
            }
            if (event.key === "Escape") {
                this.destroy();
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (event.key === "Enter" && enterEvent) {
                enterEvent();
                event.preventDefault();
            }
        });
    }
}
