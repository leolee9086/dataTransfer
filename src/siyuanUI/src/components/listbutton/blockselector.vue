<template>
  <span
    data-type="new"
    class="b3-list-item__action b3-tooltips b3-tooltips__nw"
    @click="($event) => switchSelect($event)"
    :aria-label="state.selected?'取消':`选中到组:${globalCtx.selectedBlockIndex.value}`"
  >
    <svg     v-if="!state.selected"
>
      <use xlink:href="#iconAdd"></use>
    </svg>
        <svg  v-if="state.selected">
      <use xlink:href="#iconMin"></use>
    </svg>

  </span>
</template>
<script setup>
import {
  moveRight,
  moveLeft,
  selectBlock,
  UnSelectBlock,
  checkSelected,
} from "../../../../util/columnHandeler";
import { reactive, watch } from "vue";
let { id } = defineProps(["id"]);
let state = reactive({
  selected: false,
  selectedBlockIndex: window.selectedBlockIndex.value + 0,
});
const emit = defineEmits(["selected", "UnSelectBlock"]);
const globalCtx=window
getstate();
function getstate() {
  //遍历查找是否选中以及选择组序号
  let selectedstate = checkSelected(id) + "";
  console.log("test", selectedstate);

  if (selectedstate && selectedstate !== "undefined") {
    selectedstate = JSON.parse(selectedstate);
    state.selected = selectedstate.selected;
    console.log("test", state.selected);
    state.selectedBlockIndex = selectedstate.selectedBlockIndex;
  }
}
function switchSelect($event) {
  if (state.selected) {
    getIndex($event);
    $event.stopPropagation();
    UnSelectBlock(id, state.selectedBlockIndex);
  } else {
    getIndex($event);
    $event.stopPropagation();
    selectBlock(id);
  }
}
watch(window.selectedBlock, () => {
  console.log(window.selectedBlock);
  getstate();
});
watch(state, (data) => {
  if (state.selected) {
    emit("selectBlock", { index: state.selectedBlockIndex });
  } else {
    emit("UnSelectBlock");
  }
},
{immediate:true}
);
function getIndex() {
  state.selectedBlockIndex = window.selectedBlockIndex.value;
}
</script>
