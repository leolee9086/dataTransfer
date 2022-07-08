<template>
    <notebookItem :notebook="notebooks[notebook]">
    
    </notebookItem>
</template>
<script setup>
    import notebookItem from '../filetree/notebookItem.vue'
    let notebooks =  window.notebooks
    let {notebook,data} = defineProps(['notebook','data'])
    

</script>