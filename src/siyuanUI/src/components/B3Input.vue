<template>
  <input
    :class="`b3-text-field fn__flex-center fn__size${size}`"
    id="virtualBlockRefExclude"
    v-model="value"
    @change="() => change(this)"
  />
</template>
<script>
export default {
  name: "B3Input",
  emit: ["change"],
  props: ["value", "center", "id", "size", "checker"],
  methods: {
    change($event) {
      if ($event) {
        this.$emit("change", $event);
      }
    },
  },
};
</script>
