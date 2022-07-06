<template>

      <div
        class="protyle-wysiwyg protyle-wysiwyg--attr"
        spellcheck="false"
        contenteditable="true"
        data-doc-type="NodeDocument"
        style="padding: 16px 16px 312.5px 24px"
        ref="editorDOM"
      ></div>

</template>
<script setup>
import { ref, onMounted, reactive ,watch} from "vue";
import { getContenteditableElement } from "../../../protyle/row/protyle/wysiwyg/getBlock";
import B3DocTiltle from "./B3DocTiltle.vue";
///if!BROWSER
///#endif
let { options,index } = defineProps(["options","index"]);
defineEmits(['dataChange'])
let {id} = window.layout[index]
let editorDOM = ref(null);
let DocInfo = ref({});
onMounted(() => {
  if(id){
  initUI(id, DocInfo, editorDOM)
  };
});
</script>
<script>
function initUI(id, DocInfo, editorDOM) {
  let docData = {};
  window.核心api.getDoc({ id: id }, "", (data) => {
    if (data) {
      console.log(data);
      console.log(editorDOM);
      editorDOM.value.innerHTML = data.content;
      let blockDom =editorDOM.value.querySelectorAll("[contenteditable]")
      if(blockDom[0]){
        blockDom.forEach(
          blockElement=>blockElement.setAttribute("contenteditable",false)
        )
      }
      docData = data;
    }
  });
  window.核心api.getDocInfo({ id: id, size: 102400 }, "", (data) => {
    if (data) {
      console.log(data);
      console.log(DocInfo);
      DocInfo.value = data;
      DocInfo.value.notebook = docData.box;
      DocInfo.value.path = docData.path;
      console.log(DocInfo.value);
    }
  });
}
</script>
