<template>
  <teleport to="body">
    <template v-if="!isApp.value">
      <B3Dock position="Top">
        <template v-slot:first> </template>
      </B3Dock>
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

        <div class="fn__flex fn__flex-1" ref="layoutCenter">
          <template v-for="(item, i) in layoutArray.layout">
            <template v-if="item">
              <B3layoutColumn @dblclick="appendRight;" :options="item" :index="i">
              </B3layoutColumn>
            </template>
          </template>
          <div class="fn_flex fn__flex-1" style="min-width: 300px">
            <div
              class="layout__empty b3-list"
              style="text-align: center"
              @dblclick="appendRight()"
            >
              <h2>双击此处增加分栏</h2>
              <div class="b3-list-item" id="saveLayout"></div>
              <div class="b3-list-item" id="saveLayout">
                <button @click="saveLayout" style="width: 100%">保存布局</button>
              </div>
              <div class="b3-list-item" id="saveLayout">
                <button @click="(event)=>saveLayout(event,true)" style="width: 100%">导出布局</button>
              </div>
              <div @click="getLayout" class="b3-list-item" id="getLayout">
                <button style="width: 100%">重新加载布局</button>
              </div>
              <div @click="importLayout()" class="b3-list-item" id="getLayout">
                <button style="width: 100%">导入其他布局</button>
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
                ><span><a href="https://afdian.net/@leolee9086">请作者喝杯咖啡</a></span>
              </div>
              <div class="b3-list-item" id="editorEmptySearch">
                <svg class="b3-list-item__graphic">
                  <use xlink:href="#iconGithub"></use></svg
                ><span
                  ><a target="blank" href="https://github.com/leolee9086/dataTransfer"
                    >GitHub</a
                  ></span
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
    </template>
    <template v-if="isApp.value">
      <button>
        <a href="/widgets/dataTransfer" @click="openOut">请在浏览器打开使用</a>
      </button>
    </template>
  </teleport>
</template>
<script setup>
import { ref, reactive, nextTick } from "vue";
import B3layoutColumn from "./siyuanUI/src/components/B3layoutColumn.vue";
import { appendRight, refreshAll } from "./util/columnHandeler";
import { genColumndata } from "./util/dataHandler";
import { debounce } from "./util/event.js";
let layoutCenter = ref(null);

window.layoutCenter = layoutCenter;
const openOut = function () {
  window.parent.open("/widgets/dataTransfer");
};
const layoutArray = reactive({
  dialog: { show: false, type: "setting" },
  layout: [genColumndata()],
  selectedBlock: [[], [], [], [], [], [], [], [], [], [], [], [], []],
  selectedBlockIndex: { value: 0 },
});
const notebooks = reactive({ value: [] });
window.notebooks = notebooks;
const tempBoxShow = reactive({ value: false });
function showTempBox(num) {
  if (num + "" == layoutArray.selectedBlockIndex.value + "") {
    debounce(() => {
      tempBoxShow.value = !tempBoxShow.value;
    }, 100);
  }
  window.selectedBlock = layoutArray.selectedBlock;
  layoutArray.selectedBlockIndex.value = num;
  window.selectedBlockIndex = layoutArray.selectedBlockIndex;
}

const isApp = reactive({ value: true });
if (window == window.top) {
  isApp.value = false;
}
const hasrequire = reactive({ value: true });
if (window.require) {
  hasrequire.value = true;
}

window.layout = layoutArray.layout;
window.selectedBlock = layoutArray.selectedBlock;
window.selectedBlockIndex = layoutArray.selectedBlockIndex;
const saveLayout = function (event,flag) {
  let data = {
    layout: window.layout,
    selectedBlock: window.selectedBlock,
  };
  data = JSON.stringify(data, undefined, 4);
  let formData = new FormData();
  var blob = new Blob([data], { type: "text/json" });
  formData.append("path", "data\\widgets\\dataTransfer\\config.json");
  formData.append("modTime", Date.now());
  formData.append("file", blob);
  window.核心api.putFile(formData, "", (data) => {
    window.alert("保存成功");
  });
  if (flag) {
    let bb = new Blob([data], { type: "application/json" });
    保存(bb, `layout.json`);
  }
};
const 保存 = function (blob, filename) {
  let type = blob.type;
  let force_saveable_type = "application/octet-stream";
  if (type && type != force_saveable_type) {
    // 强制下载，而非在浏览器中打开
    var slice = blob.slice || blob.webkitSlice || blob.mozSlice;
    blob = slice.call(blob, 0, blob.size, force_saveable_type);
  }

  let url = URL.createObjectURL(blob);
  let save_link = document.createElement("a");
  save_link.href = url;
  save_link.download = filename;
  let event = document.createEvent("MouseEvents");
  event.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  save_link.dispatchEvent(event);
  URL.revokeObjectURL(url);
  // console.log(blob)
};

const getLayout = async function () {
  try {
    let data = await fetch("\\widgets\\dataTransfer\\config.json");
    let json;
    if (data) {
      json = await data.json();
      console.log(json);
    }
    if (json) {
      mergeJson(json);
    }
  } catch (e) {
    alert("加载布局出错");
  }
};
const mergeJson = function (json) {
  if (json) {
    layoutArray.layout = json.layout;
    layoutArray.selectedBlock = json.selectedBlock;
    window.layout = layoutArray.layout;
    window.selectedBlock = layoutArray.selectedBlock;
    window.selectedBlockIndex = layoutArray.selectedBlockIndex;
    setTimeout(refreshAll(), 500);
  }
};
const importLayout = function () {
  let fileselector = document.createElement("input");
  fileselector.type = "file";
  fileselector.style.display = "none";
  document.body.append(fileselector);
  fileselector.accept = "json";
  fileselector.onchange = function (e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (data) {
      console.log(reader.result);
      try {
        mergeJson(JSON.parse(reader.result));
      } catch (e) {
        console.log(e);
      }
    };
    reader.readAsText(file);
  };

  fileselector.click();
};
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
