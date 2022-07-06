<template>
  <li
    title="致谢 71 kB
更新于 1 个星期以前
创建于 2020-11-21 21:26:05"
    :data-node-id="file.id"
    :data-name="file.name"
    draggable="true"
    data-count="0"
    data-type="navigation-file"
    class="b3-list-item b3-list-item--hide-action"
    data-path="/20201121212605-9td1a62.sy"
    :style="
      state.selected
        ? `color:var(--b3-font-color${state.selectedBlockIndex});background-color:var(--b3-font-background${state.selectedBlockIndex})`
        : null
    "
  >
    <span
      style="padding-left: 16px"
      class="b3-list-item__toggle b3-list-item__toggle--hl b3-tooltips b3-tooltips__n"
      @click="
        ($event) => {
          $event.stopPropagation();
          moveLeft(file.id, index);
        }
      "
      aria-label="移动到左侧"
    >
      <svg class="b3-list-item__arrow">
        <use xlink:href="#iconLeft"></use>
      </svg>
    </span>
    <span
      style="padding-left: 16px"
      class="b3-list-item__toggle b3-list-item__toggle--hl b3-tooltips b3-tooltips__n"
      @click="
        ($event) => {
          $event.stopPropagation();
          moveRight(file.id, index);
        }
      "
      aria-label="移动到右侧"
    >
      <svg class="b3-list-item__arrow">
        <use xlink:href="#iconRight"></use>
      </svg>
    </span>

    <span class="b3-list-item__icon b3-tooltips b3-tooltips__n" aria-label="修改图标"
      ><svg class="custom-icon">
        <use :xlink:href="icon"></use></svg
    ></span>
    <span class="b3-list-item__text b3-tooltips b3-tooltips__n">
      {{ file.name }}
    </span>
    <span
      data-type="open"
      class="b3-list-item__action b3-tooltips b3-tooltips__nw"
      aria-label="在应用打开"
      @click="
        ($event) => {
          $event.stopPropagation();
          打开();
        }
      "
    >
      <svg>
        <use xlink:href="#iconFullscreen"></use>
      </svg>
    </span>
    <span
      class="popover__block counter b3-tooltips b3-tooltips__nw"
      aria-label="下级文档"
      style=""
      >{{ file.subFileCount }}</span
    >
    <span
      data-type="more-file"
      class="b3-list-item__action b3-tooltips b3-tooltips__nw"
      aria-label="更多"
      @click="
        ($event) => {
          $event.stopPropagation();
        }
      "
    >
      <svg>
        <use xlink:href="#iconMore"></use>
      </svg>
    </span>
    <span
      data-type="new"
      class="b3-list-item__action b3-tooltips b3-tooltips__nw"
      v-if="!state.selected"
      @click="
        ($event) => {

          getIndex($event);
          $event.stopPropagation();
          selectBlock(file.id);
                              state.selected = true;

        }
      "
      aria-label="选中"
    >
      <svg>
        <use xlink:href="#iconAdd"></use>
      </svg>
    </span>
    <span
      data-type="new"
      class="b3-list-item__action b3-tooltips b3-tooltips__nw"
      v-if="state.selected"
      style="display: block"
      @click="
        ($event) => {

          getIndex($event);
          $event.stopPropagation();

          UnSelectBlock(file.id, state.selectedBlockIndex);
                                        state.selected = false;

        }
      "
      aria-label="取消"
    >
      <svg>
        <use xlink:href="#iconMin"></use>
      </svg>
    </span>
  </li>
</template>
<script setup>
import {
  moveRight,
  moveLeft,
  selectBlock,
  UnSelectBlock,
  checkSelected,
} from "../../../../util/columnHandeler";
import { reactive, getCurrentInstance, watch } from "vue";
const emit = defineEmits(["open"]);
let { file, index } = defineProps(["file", "index"]);
let state = reactive({
  selected: false,
  selectedBlockIndex: window.selectedBlockIndex.value + 0,
});
getstate();
function getstate() {
  //遍历查找是否选中以及选择组序号
  let selectedstate = checkSelected(file.id) + "";
  console.log("测试1111111", selectedstate);
  if (selectedstate && selectedstate !== "undefined") {
    selectedstate = JSON.parse(selectedstate);
    state.selected = selectedstate.selected;
    state.selectedBlockIndex = selectedstate.selectedBlockIndex;
  } 
}

watch(window.selectedBlock, () => {
  console.log(window.selectedBlock);
  getstate();
});
let icon = file && file.icon ? "\#icon\-" + file.icon : "\#icon-1f4c4";

function getIndex(event) {
  state.selectedBlockIndex = window.selectedBlockIndex.value;
}
function 打开() {
  let link = window.document.createElement("a");
  link.setAttribute("href", `siyuan://blocks/${file.id}`);
  link.click();
  link.remove();
}
</script>
