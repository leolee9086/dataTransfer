<template>
  <div :id="`dock${position}`" :class="vertical ? `dock dock--vertical` : 'dock'">
    <div>
      <slot name="first"></slot>
    </div>
    <div class="fn__flex-1"></div>
    <div>
      <slot name="second"></slot>
    </div>
  </div>
</template>
<script setup>
const { option, position, vertical } = defineProps({
  option: {
    left: [],
    right: [],
    top: [],
    bottom: [],
  },
  vertical: false,
  position: "",
});
</script>
