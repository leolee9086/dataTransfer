<script setup>
import {
  appendLeft,
  appendRight,
  moveRight,
  remove,
  insertColumn,
} from "../../../util/columnHandeler";

import { reactive, getCurrentInstance, watch } from "vue";
import { ref } from "vue";
import B3TabBar from "./B3TabBar.vue";
const { options, resizeable, autoHeight, autoWidth, index } = defineProps([
  "options",
  "resizeable",
  "autoHeight",
  "autoWidth",
  "index",
]);
watch(options, (value) => {
  realoptions = value;
});
let realoptions = options;
let size = reactive({
  width: 350,
  htight: 350,
});
let dragging = false;
const container = ref(null);
const ondragstart = () => {
  dragging = true;
  document.addEventListener("mousemove", ondargging);
  document.addEventListener("mouseup", ondragsover);
};
const ondargging = () => {
  if (dragging) {
    size.width = event.clientX - container.value.offsetLeft;
  }
};
const ondragsover = function (event) {
  dragging = false;
  document.removeEventListener("mouseup", ondragsover);
};
const switchToPreviewer = function () {
  realoptions.type = "previewer";
};
const switchToFiletree = function () {
  realoptions.type = "filter";
};
</script>
<template>
  <div
    class="fn__flex"
    :style="`${autoWidth ? 'width:100%' : null};${
      autoHeight ? 'height:100%' : null
    };transition: var(--b3-width-transition);`"
  >
    <B3TabBar :options="realoptions" :index="index"></B3TabBar>

    <div
      ref="container"
      v-if="!autoWidth"
      class="fn__flex-column fn__flex-1"
      :style="`width: ${size.width}px; transition: var(--b3-width-transition);`"
    >
      <component
        :index="index"
        :is="realoptions.type == 'Filetree' ? 'B3Filetree' : 'B3ProtylePreviewer'"
        :options="realoptions"
      ></component>
    </div>
    <div
      ref="container"
      v-if="autoWidth"
      class="fn__flex-column fn__flex-1"
      :style="`width: 100%; transition: var(--b3-width-transition);`"
    >
      <slot></slot>
    </div>
    <div
      class="layout__resize--lr layout__resize "
      v-b3show="!autoWidth"
      :draggable="dragging"
      @mousedown="ondragstart"
      @mouseup="ondragsover"
      @dblclick="insertColumn(index)"
    ></div>
  </div>
</template>
