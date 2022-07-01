<template>
     <input 
               :class="`b3-switch fn__flex${center?'-center':''}`" 
               id="networkServe" 
               type="checkbox"
               v-model="value"
               v-bind="$attrs"
        >
</template>
<script>
export default {
  name: 'B3Switch',
  props: ['value','center']
}
</script>
