<script setup>
import { reactive, getCurrentInstance } from "vue"
import { ref } from "vue"
const props = defineProps({
    option: {},
    resizeable: "",
    autoHeight:"",
    autoWidth:""

})
let size = reactive({
    width: 350,
    htight: 350
})
let dragging = false
const container = ref(null)
const ondragstart = () => {
    dragging = true
    document.addEventListener('mousemove', ondargging)
    document.addEventListener('mouseup', ondragsover)
}
const ondargging = () => {
    if (dragging) {
        size.width = event.clientX - container.value.offsetLeft

    }
}
const ondragsover = function (event) {
    dragging = false
    document.removeEventListener('mouseup', ondragsover)

}
</script>
<template>

    <div class="fn__flex" :style="`${props.autoWidth?'width:100%':null};${props.autoHeight?'height:100%':null};transition: var(--b3-width-transition);`">

        <div ref="container" v-if="!props.autoWidth" class="fn__flex-column fn__flex"
            :style="`width: ${size.width}px; transition: var(--b3-width-transition);`">
            <slot></slot>
        </div>
         <div ref="container" v-if="props.autoWidth" class="fn__flex-column fn__flex"
            :style="`width: 100%; transition: var(--b3-width-transition);`">
            <slot></slot>
        </div>
        <div class="layout__resize--lr layout__resize " v-b3show="!props.autoWidth" :draggable="dragging"
            @mousedown="ondragstart" @mouseup="ondragsover"></div>
    </div>
</template>
