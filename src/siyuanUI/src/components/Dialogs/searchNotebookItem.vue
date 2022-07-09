<template>
  <div>
    <ul style="background-color: var(--b3-theme-background-light)">
      <notebookItem :notebook="flatnotebooks[notebook.id]"> </notebookItem>
    </ul>

    <ul>
      <template v-for="(fileid, i) in notebook.docs">
        <searchFileItem
          :file="fileid"
          :docBlocks="realdocBlocks.value"
          :index="index"
        ></searchFileItem>
      </template>
    </ul>
  </div>
</template>
<script setup>
import notebookItem from "../filetree/notebookItem.vue";
import searchFileItem from "./searchFileItem.vue";
import { watch, reactive } from "vue";
let notebooks = window.notebooks;
let flatnotebooks = flat(notebooks.value);
let { notebook, data, docBlocks,index } = defineProps(["notebook", "data", "docBlocks","index"]);
let realdocBlocks = reactive({ value: [] });
realdocBlocks.value = docBlocks;
function flat(array) {
  let obj = {};
  array.forEach((item) => {
    obj[item.id] = item;
  });
  return obj;
}
watch(
  docBlocks,
  (data) => {
    realdocBlocks.value = data;
  },
  { deep: true, immediate: true }
);
</script>
