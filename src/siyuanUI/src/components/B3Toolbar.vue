<script setup>
import toolbarItem from './toolbarItem.vue'
    let {option} = defineProps({
        "option":{}
    })

let {left,right,hide} = option
console.log(left)
</script>
<template>
    <div class="toolbar fn__flex" v-b3show="!hide">
        <template v-for="(item, i) in left">
            <toolbarItem :option="item"></toolbarItem>
        </template>
        <template v-for="(item, i) in right">
            <toolbarItem :option="item"></toolbarItem>
        </template>
    </div>
</template>