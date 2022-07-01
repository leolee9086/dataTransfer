<template>
  <select
    id="fontFamily"
    class="b3-select fn__flex-center fn__size200"
    v-model="value"
    v-bind="$attrs"
  >
    <template v-for="(option, i) in options">
      <option :value="option.value">{{ option.label }}</option>
    </template>
  </select>
</template>
<script>
export default {
  name: "B3Select",
  props: ["options", "center", "value"],
};
</script>
