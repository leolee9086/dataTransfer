<template>
  <div class="fn__flex fn_flex-column layout-tab-bar dock dock--vertical">
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
          @click="switchToPreviewer(index)"
          v-if="options.type !== 'Previewer'"
        >
          <svg>
            <use xlink:href="#iconFile"></use>
          </svg>
        </div>
        <div
          @click="switchToFiletree(index)"
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
        <div @click="switchToFiletree" class="dock__item b3-tooltips b3-tooltips__sw">
          <svg>
            <use xlink:href="#iconSettings"></use>
          </svg>
        </div>
        <div @click="switchToFiletree" class="dock__item b3-tooltips b3-tooltips__sw">
          <svg>
            <use xlink:href="#iconGraph"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="fn_flex" style="writing-mode: vertical-lr !important; text-align: center">
      <div
        class="protyle-title protyle-wysiwyg--attr protyle-title__input vertical"
        style="margin: 0%"
      >
        <div
          contenteditable="true"
          spellcheck="false"
          style="outline: none"
          ref="titleDOM"
          @input="onInput"
        >
          {{ currentData.name||(DocInfo.value&&DocInfo.value.name) }}
        </div>
      </div>
      <div></div>
    </div>
    <div class="fn_flex fn_flex-1"></div>
  </div>
</template>
<script setup>
import {
  appendLeft,
  appendRight,
  moveRight,
    moveLeft,

  remove,
  switchToLeft,
  switchToPreviewer,
  switchToFiletree,
  refreshIndex
} from "../../../util/columnHandeler";
import { ref,watch } from "vue";
import {debounce} from '../../../util/event'
let { options, index } = defineProps(["options", "index", "docInfo"]);

let titleDOM = ref(null);
let DocInfo = ref({});
let currentData = window.layout[index]['data']

const onInput = function () {
  window.核心api.renameDoc({
    path: DocInfo.value.path,
    notebook: DocInfo.value.notebook,
    title: titleDOM.value.innerText,
  },'',()=>{setTimeout(()=>debounce(function(){refreshIndex(index)},1000),1000)});
};

</script>
