<script setup>
import {
  appendLeft,
  appendRight,
  moveRight,
  remove,
  insertColumn,
miniMize,
refreshIndex,
} from "../../../util/columnHandeler";

import { reactive, nextTick, watch } from "vue";
import { ref } from "vue";
import B3TabBar from "./B3TabBar.vue";
import B3Search from "./B3Search.vue";
const { options, resizeable, autoHeight, autoWidth, index } = defineProps([
  "options",
  "resizeable",
  "autoHeight",
  "autoWidth",
  "index",
]);
//watch(options, (value) => {
// realoptions = value;
//});
//console.log(window.layout[index])
let size;
const gensize= function(){
options &&options.data &&options.data.size
  ? (size = options.data.size)
  : (size = reactive({
      width: 350,
      height: 350,
    }));
}
gensize()

watch(options,()=>{
  gensize()

})

let dragging = false;
const container = ref(null);
const ondragstart = () => {
  dragging = true;
  document.addEventListener("mousemove", ondargging);
  document.addEventListener("mouseup", ondragsover);
};
const ondargging = () => {
  if (dragging) {
    if(container.value){
    size.width =
      event.clientX -
      container.value.offsetLeft +
      container.value.parentElement.parentElement.scrollLeft;
      }
  }
};
const ondragsover = function (event) {
  dragging = false;
  document.removeEventListener("mouseup", ondragsover);
};
</script>
<template>
  <div
    class="fn__flex"
    :style="`${autoWidth ? 'width:100%' : null};${
      autoHeight ? 'height:100%' : null
    };transition: var(--b3-width-transition);`"
  >
    <B3TabBar :options="options" :index="index"></B3TabBar>

    <div
      ref="container"
      v-if="!autoWidth"
      class="fn__flex-column fn__flex-1"
      :style="`width: ${size.width}px; transition: var(--b3-width-transition);`"
    >
      <template v-if="options&&size.width>100">
        <component
          :index="index"
          :is="options.type == 'Filetree' ? 'B3Filetree' : 'B3ProtylePreviewer'"
          :options="options"
        ></component>
        <B3Search :options="options" :index="index"></B3Search>
      </template>
    </div>

    <div
      class="layout__resize--lr layout__resize"
      v-b3show="!autoWidth"
      :draggable="dragging"
      @mousedown="ondragstart"
      @mouseup="ondragsover"
      @dblclick="insertColumn(index)"
    ></div>
  
  </div>
</template>
