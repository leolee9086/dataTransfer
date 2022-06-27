<template>
    <ul class="fn__flex layout-tab-bar" v-if="!closed">
        <li data-type="tab-header" draggable="true" data-id="" data-position="center" class="item"
            aria-label="综合笔记本/JRE" style="opacity: 1;">
            <span class="item__text">JRE</span>
            <span class="item__close">
                <svg>
                    <use xlink:href="#iconClose" @click="close"></use>
                </svg>
            </span>
        </li>
    </ul>
</template>
<script setup>
    const emit = defineEmits(['close'])
    function close(){
        emit('close')
    }
</script>