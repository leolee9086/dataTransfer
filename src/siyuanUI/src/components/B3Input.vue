<template>
  <input
    :class="`b3-text-field fn__flex-center fn__size${size}`"
    id="virtualBlockRefExclude"
    v-model="value"
  />
</template>
<script>
export default {
  name: "B3Input",
  props: ["value", "center",'id','size','checker'],
};
</script>
