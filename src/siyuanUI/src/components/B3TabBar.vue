<template>
  <div
    class="fn__flex fn_flex-column layout-tab-bar dock dock--vertical"
    :style="
      state.selected && state.selectedBlockIndex
        ? `
        color:var(--b3-font-background${state.selectedBlockIndex}) !important;
        background-color:var(--b3-font-background${state.selectedBlockIndex});
        border:solid var(--b3-font-color${state.selectedBlockIndex || 2}) 1px;
        box-sizing:border-box
        `
        : null
    "
    @dblclick="switchSize(index)"
  >
    <div>
      <div>
        <div
          class="dock__item b3-tooltips b3-tooltips__e"
          aria-label="预览"
          @click="remove(index)"
        >
          <svg>
            <use xlink:href="#iconClose"></use>
          </svg>
        </div>
        <div
          class="dock__item b3-tooltips b3-tooltips__e"
          aria-label="向左移动"
          @click="switchToLeft(index)"
        >
          <svg>
            <use xlink:href="#icon-1f501"></use>
          </svg>
        </div>

        <div
          class="dock__item b3-tooltips b3-tooltips__e"
          aria-label="预览"
          @click="
            maxMize(index);
            switchToPreviewer(index);
          "
          v-if="options.type !== 'Previewer'"
        >
          <svg>
            <use xlink:href="#iconFile"></use>
          </svg>
        </div>
        <div
          @click="
            maxMize(index);

            switchToFiletree(index);
          "
          class="dock__item b3-tooltips b3-tooltips__sw"
          v-if="options.type == 'Previewer'"
        >
          <svg>
            <use xlink:href="#iconFiles"></use>
          </svg>
        </div>
        <div
          @click="moveRight(options.id, index)"
          class="dock__item b3-tooltips b3-tooltips__sw"
        >
          <svg>
            <use xlink:href="#iconRight"></use>
          </svg>
        </div>
        <div
          @click="moveLeft(options.id, index)"
          class="dock__item b3-tooltips b3-tooltips__sw"
        >
          <svg>
            <use xlink:href="#iconLeft"></use>
          </svg>
        </div>
        <!--
        <div @click="switchToFiletree" class="dock__item b3-tooltips b3-tooltips__sw">
          <svg>
            <use xlink:href="#iconAdd"></use>
          </svg>
        </div>
        <div @click="switchToFiletree" class="dock__item b3-tooltips b3-tooltips__sw">
          <svg>
            <use xlink:href="#iconTrashcan"></use>
          </svg>
        </div>
        <div @click="switchToFiletree" class="dock__item b3-tooltips b3-tooltips__sw">
          <svg>
            <use xlink:href="#iconAlignCenter"></use>
          </svg>
        </div>
        -->
        <div
          @click="maxMize(index)"
          v-if="currentData && currentData.size && currentData.size.width < 1"
          class="dock__item b3-tooltips b3-tooltips__sw"
        >
          <svg>
            <use xlink:href="#iconFullscreen"></use>
          </svg>
        </div>
        <div
          @click="miniMize(index)"
          v-if="currentData && currentData.size.width > 0"
          class="dock__item b3-tooltips b3-tooltips__sw"
        >
          <svg>
            <use xlink:href="#iconContract"></use>
          </svg>
        </div>
        <template
          v-if="
            !(currentData &&
            currentData.path &&
            !currentData.path.endsWith('/') &&
            currentData.path !== '.sy')
          "
        >
               <div
         
            class="dock__item b3-tooltips b3-tooltips__sw"
          >
            <svg>
              <use xlink:href="#icon-1f3e0"></use>
            </svg>
          </div>
        </template>
        <template
          v-if="
            currentData &&
            currentData.path &&
            !currentData.path.endsWith('/') &&
            currentData.path !== '.sy'
          "
        >
          <div
            v-if="!state.selected"
            @click="
              () => {
                state.selected = true;
                getIndex($event);

                selectBlock(currentData.id);
              }
            "
            class="dock__item b3-tooltips b3-tooltips__sw"
          >
            <svg>
              <use xlink:href="#iconAdd"></use>
            </svg>
          </div>

          <div
            v-if="state.selected"
            @click="
              () => {
                getIndex($event);

                state.selected = false;
                UnSelectBlock(currentData.id);
              }
            "
            class="dock__item b3-tooltips b3-tooltips__sw"
          >
            <svg>
              <use xlink:href="#iconMin"></use>
            </svg>
          </div>
        </template>
      </div>
    </div>
    <div class="fn_flex" style="writing-mode: vertical-lr !important; text-align: center">
      <div
        class="protyle-title protyle-wysiwyg--attr protyle-title__input vertical"
        style="margin: 0%"
      >
        <div
          contenteditable="false"
          spellcheck="false"
          style="outline: none"
          ref="titleDOM"
          @input="onInput"
        >
          {{ currentData.name || (DocInfo.value && DocInfo.value.name) }}
        </div>
      </div>
      <div></div>
    </div>
    <div class="fn_flex fn_flex-1" :data="JSON.stringify(state)"></div>
  </div>
</template>
<script setup>
import {
  appendLeft,
  appendRight,
  moveRight,
  moveLeft,
  maxMize,
  miniMize,
  switchSize,
  remove,
  switchToLeft,
  switchToPreviewer,
  switchToFiletree,
  refreshIndex,
  selectBlock,
  UnSelectBlock,
  checkSelected,
} from "../../../util/columnHandeler";
import { reactive, ref, watch } from "vue";
import { debounce } from "../../../util/event";
let { options, index } = defineProps(["options", "index", "docInfo"]);

let titleDOM = ref(null);
let DocInfo = ref({});
let currentData = reactive(window.layout[index]["data"]);
let state = reactive({
  selected: false,
  selectedBlockIndex: window.selectedBlockIndex.value + 0,
});
if(currentData.id){
getstate();}

watch(window.layout, (value) => {
  getstate();

  window.layout[index] ? (currentData = window.layout[index]["data"]) : null;
});
const onInput = function () {
  window.核心api.renameDoc(
    {
      path: DocInfo.value.path,
      notebook: DocInfo.value.notebook,
      title: titleDOM.value.innerText,
    },
    "",
    () => {
      setTimeout(
        () =>
          debounce(function () {
            refreshIndex(index);
          }, 1000),
        1000
      );
    }
  );
};
watch(options,()=>{
getstate()
})
watch(window.selectedBlock, () => {
  console.log(window.selectedBlock);
  getstate();
});
watch(currentData, () => {
  getstate();
});
watch(DocInfo, () => {
  getstate();
},{deep:true});
function getIndex(event) {
  state.selectedBlockIndex = window.selectedBlockIndex.value;
}

function getstate() {
  //遍历查找是否选中以及选择组序号
  console.log(currentData.id)
  let selectedstate = checkSelected(currentData.id) + "";
  if (selectedstate && selectedstate !== "undefined") {
    selectedstate = JSON.parse(selectedstate);
    state.selected = selectedstate.selected;
    state.selectedBlockIndex = selectedstate.selectedBlockIndex;
  }
  else {
    state.selected=false
    state.selectedBlockIndex=undefined
  }
}

watch(window.selectedBlock, () => {
  console.log(window.selectedBlock);
  getstate();
});
</script>
