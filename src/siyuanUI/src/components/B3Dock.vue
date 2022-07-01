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
     const {option,position,vertical} = defineProps({
        option:{
            left:[],
            right:[],
            top:[],
            bottom:[],
        },
        vertical:false,
        position:""

    })
    
</script>