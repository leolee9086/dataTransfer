<template>
    <div v-if="!closed" data-type="wnd" data-id="" class="fn__flex-column fn__flex fn__flex-1 layout__wnd--active">
        <tabBar @close="close"></tabBar>
        <slot name="content"></slot>
    </div>
</template>
<script setup>
 import {tabBar} from './tabBar.vue'
 let closed= false
 function close(){
    closed=true
 }
</script>