<template>
    <div ref="editordom">
        
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
///if!BROWSER
///#endif
import Editor from "../protyle/editorVue.js"

let editordom = ref(null)
let wysiwyg = {}

onMounted(() => {

    wysiwyg = new Editor(editordom.value)
    console.log(wysiwyg.eventBus)
    //wysiwyg.eventBus.on('all', (data, eventType) => { console.log(data, eventType) })
})

</script>