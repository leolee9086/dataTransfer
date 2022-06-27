<script setup>
    let {option} = defineProps(["option"])
</script>
<template>
    <div 
    :id="option.id" 
    :data-menu="option.menu" 
    :aria-label="option.label" 
    class="toolbar__item b3-tooltips b3-tooltips__se">
    <svg>
        <use :xlink:href="'#'+option.icon"></use>
    </svg>
    </div>
</template>