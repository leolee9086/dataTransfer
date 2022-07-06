<template>
  <teleport to="body">
    <B3Dock position="Top"></B3Dock>
    <div class="fn__flex fn__flex-1">
      <B3Dock
        :vertical="true"
        position="Left"
        style="background-color: var(--b3-theme-background-light)"
      >
        <template v-slot:first>
          <template v-for="(num, i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]">
            <div :style="`background-color:var(--b3-font-background${num})`">
              <span
                data-height="null"
                data-width="null"
                data-type="inbox"
                data-index="0"
                data-hotkeylangid="inbox"
                class="dock__item b3-tooltips b3-tooltips__e"
                :aria-label="`收集箱${num} 
${num <= 9 ? 'Alt +' + num : 'shift + Alt' + (num - 9)}
单击 展开/最小化
右键 调整位置`"
                @click="showTempBox(num)"
              >
                <svg><use xlink:href="#icon-1f5c3"></use></svg>
              </span>
            </div>
          </template>
        </template>
      </B3Dock>
      <div
        class="fn__flex fn__flex-column"
        id="tempBox"
        :style="`width:${
          tempBoxShow.value ? 0.1 : 400
        }px;background-color:var(--b3-font-background${
          layoutArray.selectedBlockIndex.value
        });transition: var(--b3-width-transition); `"
      >
        <div class="fn__flex fn__flex-1">
          <div class="fn__flex fn__flex-1 fn__flex-column">
            <div class="layout layout_toolbar">
              <span>临时收集箱{{ layoutArray.selectedBlockIndex.value }}</span>
            </div>
            <template
              v-for="(id, i) in layoutArray.selectedBlock[
                layoutArray.selectedBlockIndex.value
              ]"
            >
              <tempBoxItem v-if="id" :id="id" :key="id + 'selectedBlock' + i">
              </tempBoxItem>
            </template>
          </div>
        </div>
      </div>

      <div class="fn__flex fn__flex-1">
        <template v-for="(item, i) in layoutArray.layout">
          <template v-if="item">
            <B3layoutColumn @dblclick="向右扩展;" :options="item" :index="i">
            </B3layoutColumn>
          </template>
        </template>
        <div class="fn_flex fn__flex-1" style="min-width: 300px">
          <div class="layout__empty b3-list" style="text-align: center">
            <h2>双击增加分栏</h2>
            <div class="b3-list-item" id="editorEmptySearch">
              <svg class="b3-list-item__graphic">
                <use xlink:href="#iconSearch"></use></svg
              ><span>搜索</span><span class="b3-list-item__meta">Ctrl+P</span>
            </div>
            <div class="b3-list-item" id="editorEmptySearch">
              <svg class="b3-list-item__graphic">
                <use xlink:href="#iconHelp"></use></svg
              ><span
                ><a href="https://www.chuanchengsheji.com/">关于dataTransfer</a></span
              >
            </div>
              <div class="b3-list-item" id="editorEmptySearch">
              <svg class="b3-list-item__graphic">
                <use xlink:href="#iconHelp"></use></svg
              ><span
                ><a href="https://afdian.net/@leolee9086">赞助我们</a></span
              >
            </div>
          </div>
        </div>
      </div>
      <B3Dock
        :vertical="true"
        position="Right
        "
      ></B3Dock>
    </div>
    <B3Dock position="Bottom"></B3Dock>
  </teleport>
</template>
<script setup>
import { ref, reactive, nextTick } from "vue";
import B3ProtylePreviewer from "./siyuanUI/src/components/B3ProtylePreviewer.vue";
import B3layoutColumn from "./siyuanUI/src/components/B3layoutColumn.vue";
import B3TabBar from "./siyuanUI/src/components/B3TabBar.vue";
import { appendRight } from "./util/columnHandeler";
import { debounce } from "./util/event.js";

const layoutArray = reactive({
  layout: [{ id: "20210428212840-859h45j", type: "filter" }],
  selectedBlock: [[], [], [], [], [], [], [], [], [], [], [], [], []],
  selectedBlockIndex: { value: 0 },
});
const tempBoxShow = reactive({ value: false });
function showTempBox(num) {
  console.log(num, layoutArray.selectedBlockIndex.value);
  if (num + "" == layoutArray.selectedBlockIndex.value + "") {
    debounce(() => {
      tempBoxShow.value = !tempBoxShow.value;
    }, 100);
  }
  window.selectedBlock = layoutArray.selectedBlock;
  layoutArray.selectedBlockIndex.value = num;
  window.selectedBlockIndex = layoutArray.selectedBlockIndex;
}

window.layout = layoutArray.layout;
window.selectedBlock = layoutArray.selectedBlock;
window.selectedBlockIndex = layoutArray.selectedBlockIndex;
function 向右扩展() {
  appendRight();
}
window.eventBus.on("expend", (data) => {
  console.log(data);
  layoutArray.value.push(data);
});
window.eventBus.on("move", (data) => {
  let idx = data.index;
});
window.addEventListener("keydown", (event) => {
  if (event.ctrlKey) {
    window.ctrlKey = true;
  }
  if (event.shiftKey) {
    window.shiftKey = true;
  }
  if (event.altKey) {
    window.altKey = true;
  }

  if (!event.repeat) {
    for (let num of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      if (num <= 4 && event.code == "Digit" + num && window.altKey && window.shiftKey) {
        showTempBox(num + 9);
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      if (event.key == num + "" && window.altKey) {
        event.preventDefault();
        event.stopPropagation();
        showTempBox(num);
        event.stopPropagation();
        event.preventDefault();
      }
      if (num && (event.code == "Digit" + num || event.key == num)) {
        window.Digit = { num: num };
        event.stopPropagation();
        event.preventDefault();
        1;
      }
    }
  }
});
window.addEventListener("keyup", (event) => {
  window.ctrlKey = false;
  window.shiftKey = false;
  window.altKey = false;
  window.Digit = { num: undefined };
});
window.addEventListener("paste", ($event) => {
  $event.stopPropagation();
  let clipboardData = $event.clipboardData;

  if (!(clipboardData && clipboardData.items)) {
    return;
  }
  for (var i = 0, len = clipboardData.items.length; i < len; i++) {
    var item = clipboardData.items[i];
    if (item.kind === "string" && item.type == "text/plain") {
      item.getAsString((str) => {
        let stmt = `select * from blocks where id = '${str}'`;
        window.核心api.sql({ stmt: stmt }, "", (data) => {
          if (data && data[0]) {
            appendRight({ id: data[0]["root_id"], type: "filter" });
          }
        });
      });
    }
  }
});
</script>
<style>
.dock--vertical {
  min-width: 30px;
}
</style>
