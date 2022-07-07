<template>
  <div class="b3-dialog--open" v-if="dialogIf">
    <div class="b3-dialog">
      <div class="b3-dialog__scrim" v-if="scrim"></div>
      <div class="b3-dialog__container" :style="`width:${width ? width : '80vw'}`">
        <svg class="b3-dialog__close fn__a" @click="close" v-if="closeButton">
          <use xlink:href="#iconClose"></use>
        </svg>
        <div class="b3-dialog__header" v-if="header">
          {{ header }}
          <slot name="header"></slot>
        </div>
        <div class="b3-dialog__header">
          <slot name="header"></slot>
        </div>
        <div :style="`height:${height}`">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, reactive } from "vue";
const {
  options,
  center,
  value,
  scrim,
  dialogIf,
  closeButton,
  header,
  height,
  width,
} = defineProps([
  "options",
  "center",
  "value",
  "scrim",
  "dialogIf",
  "closeButton",
  "header",
  "height",
  "width",
]);
const emit = defineEmits(["close"]);

const close = function () {
  emit("close");
};
</script>
