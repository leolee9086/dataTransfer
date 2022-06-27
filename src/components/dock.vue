<template>
    <div :id="`dock${position}`" :class="vertical?`dock dock--vertical`:'dock'">
        <div>
        </div>
        <div class="fn__flex-1">
        </div>
        <div>
        </div>
    </div>
</template>
<script setup>
     const props = defineProps({
        option:{
            left:[],
            right:[],
            top:[],
            bottom:[],
        },
        vertical:false,
        position:""

    })
    const {option,position,vertical} =  props
    
</script>