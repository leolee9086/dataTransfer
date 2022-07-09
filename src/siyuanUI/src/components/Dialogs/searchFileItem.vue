<template>
  <ul @click="clicked">
    <li
      class="search-item"
      style="background-color: var(--b3-theme-surface)"
    >
      <searchItem v-if="docBlock.value" :options="docBlock.value"></searchItem>
    </li>
    <template
      v-for="(block, i) in file.blocks"
      :key="block.id + 'block' + (i + '')"
      v-if="showBlock.value"
    >
      <li class="search-item">
        <searchItem v-if="block" :options="block"></searchItem>
      </li>
    </template>
  </ul>
</template>
<script setup>
import { reactive, onMounted, watch } from "vue";
import searchItem from "./searchItem.vue";
import { goToPath } from "../../../../util/dataHandler";
import {
  appendRight,
  moveFileById,
  selectBlock,
  UnSelectBlock,
} from "../../../../util/columnHandeler";
const { file, docBlocks, index } = defineProps(["file", "docBlocks", "index"]);
let docBlock = reactive({ value: {} });
const showBlock = reactive({ value: true });
function getDocBlock() {
  if (docBlocks) {
    docBlocks.forEach((item) => {
      item.id == file.id ? (docBlock.value = item) : null;
    });
  }
}
watch(
  docBlocks,
  (data) => {
    getDocBlock();
  },
  { deep: true }
);
onMounted(() => {
  getDocBlock();
});
function clicked(event) {
  if (!window.ctrlKey && !window.altKey && !window.shiftKey) {
    selectBlock(docBlock.value.id);
  } else if (!window.ctrlKey && !window.altKey && window.shiftKey) {
    UnSelectBlock(docBlock.value.id);
    event.preventDefault();
    event.stopPropagation();
  } else if (!window.ctrlKey && window.altKey && !window.shiftKey) {
    moveFileById(docBlock.value.id, window.layout[index]["data"]["id"]);
  } else if (window.ctrlKey && !window.altKey && !window.shiftKey) {
    console.log("aaa");
    showBlock.value = !showBlock.value;
    console.log(showBlock);
  } else if (window.ctrlKey && window.altKey && !window.shiftKey) {
    goToPath(docBlock.value.box, docBlock.value.path, index);
    window.layout[index]["data"].query = "";
  }
}
/*  if (!window.altKey) {
      goToPath(docBlock.value.box, docBlock.value.path, index);
      window.layout[index]["data"].query = "";
      if (!window.shiftKey) {
        selectBlock(docBlock.value.id)
      }
    } else {
      moveFileById(docBlock.value.id, window.layout[index]["data"]["id"]);
    }
  } else {
  }
*/
</script>
