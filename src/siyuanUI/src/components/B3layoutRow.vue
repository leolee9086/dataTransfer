<script setup>
import { reactive, getCurrentInstance } from "vue"
import { ref } from "vue"
const props = defineProps({
    option: {},
    resizeable: "",
    autoHeight:"",
    autoWidth:""
})
const container = ref(null)

const row = props['option']
let size = reactive({
    width: 350,
    height: 500,
})
let dragging = false

const ondragstart = () => {
    dragging = true
    document.addEventListener('mousemove', ondargging)
    document.addEventListener('mouseup', ondragsover)
}
const ondargging = () => {
    if (dragging) {
        size.height = event.clientY - container.value.offsetTop

    }
}
const ondragsover = function (event) {
    dragging = false
    document.removeEventListener('mouseup', ondragsover)

}
</script>
<template>
    <div class="fn__flex-column" :style="`${props.autoWidth?'width:100%':null};${props.autoHeight?'height:100%':null};transition: var(--b3-width-transition);`">
        <div ref="container" class="fn__flex fn__flex-1" v-if="(!props.autoHeight)" :style="`height:${size.height}px; transition: var(--b3-width-transition);`">
            <slot></slot>
        </div>
          <div ref="container" class="fn__flex fn__flex-1" v-if="(props.autoHeight)" :style="`height:${size.height}px; transition: var(--b3-width-transition);`">
            <slot></slot>
        </div>
        <div class=" layout__resize fn__none" v-b3show="!props.autoHeight"  @mousedown="ondragstart"
            @mousemove="ondargging" @mouseup="ondragsover">
        </div>
    </div>
</template>
