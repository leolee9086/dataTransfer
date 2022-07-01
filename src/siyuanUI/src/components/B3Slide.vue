<template>
    <input 
    :class="`b3-slider fn__size${size}`" 
    :id="id" 
    :max="max" 
    :min="min" 
    :step="step" 
    type="range" 
    v-model="value"
    v-bind="$attrs"
    :size="size"
    >
</template>
<script>
export default {
    name: 'B3Slide',
    props: [
        'value',
        'max',
        'min',
        'step',
        'size',
        'id'
        ]
}
</script>