<template>
  <div
    class="layout__resize--lr layout__resize"
    v-b3show="!props.autoWidth"
    :draggable="dragging"
    @mousedown="ondragstart"
    @mouseup="ondragsover"
  ></div>
</template>
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