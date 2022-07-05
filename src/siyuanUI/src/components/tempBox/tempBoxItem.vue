<template>
  <li
    v-if="block.value"
    :data-node-id="`${block.value.id}`"
    data-name="搜索进阶.sy"
    draggable="true"
    data-count="0"
    data-type="navigation-file"
    class="b3-list-item b3-list-item--hide-action"
    :data-path="`${block.value.path}`"
  >
  
    <span class="b3-list-item__text b3-tooltips b3-tooltips__n">{{
      block.value.hpath
    }}</span
    >
     <span
      style="padding-left: 16px"
      class="b3-list-item__toggle b3-list-item__toggle--hl b3-tooltips b3-tooltips__n"
      @click="
        ($event) => {
          $event.stopPropagation();
          moveRight(block.value.id, undefined);
        }
      "
      aria-label="在右侧打开"
    >
          <svg class="b3-list-item__arrow">
        <use xlink:href="#iconRight"></use>
      </svg>

    </span>
    <span
      data-type="open"
      class="b3-list-item__action b3-tooltips b3-tooltips__nw"
      aria-label="在应用打开"
      ><svg>
        <use xlink:href="#iconFullscreen"></use></svg></span
    ><span
      data-type="new"
      class="b3-list-item__action b3-tooltips b3-tooltips__nw"
      aria-label="取消"
      style="display: block"
      @click="UnSelectBlock(block.value.id)"
      ><svg>
        <use xlink:href="#iconMin"></use></svg
    ></span>
  </li>
</template>
<script setup>
import {
  moveRight,
  moveLeft,
  selectBlock,
  UnSelectBlock,
  checkSelected
} from "../../../../util/columnHandeler";

import { onMounted, reactive } from "vue";
let { id } = defineProps(["id"]);
let block = reactive({});
onMounted(() => {
  if (id) {
    let stmt = `select * from blocks where id ='${id}'`;
    window.核心api.sql({ stmt: stmt }, "", (data) => {
      data && data[0] ? (block.value = data[0]) : null;
    });
  }
});
</script>
