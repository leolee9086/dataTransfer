<template>
    <div class="protyle-title protyle-wysiwyg--attr" style="margin: 16px 16px 0px 24px">
      <span
        aria-label="点击 打开菜单<br>⇧Click 修改属性"
        class="protyle-title__icon"
        data-type="a"
        data-position="right"
        ><svg><use xlink:href="#iconFile"></use></svg
      ></span>
      <div
        contenteditable="true"
        spellcheck="false"
        class="protyle-title__input"
        data-tip="请输入文档名"
        data-render="true"
        ref="titleDOM"
      >
        {{DocInfo.name}}
      </div>
      <div class="protyle-attr">
        <div
          class="protyle-attr--refcount popover__block"
          data-defids='["20211124002838-1hyo4t0"]'
          data-id='["20211124003422-pddruw6","20211124002819-761jd0i"]'
        >
          2
        </div>
      </div>
    </div>
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
import { ref, onMounted } from "vue";
///if!BROWSER
///#endif
let { id } = defineProps(["id"]);
let editorDOM = ref(null);
let titleDOM = ref(null);
let DocInfo = ref({})
let wysiwyg = {};
onMounted(() => {
  initUI(id,DocInfo,editorDOM)
});
</script>
<script>
function initUI(id,DocInfo,editorDOM){
window.核心api.getDoc({ id: id }, "", (data) => {
    if (data) {
      console.log(data);
      console.log(editorDOM);
      setTimeout(() => {
        editorDOM.value.innerHTML = data.content;
      }, 100);
    }
  });
  window.核心api.getDocInfo({ id: id,size:102400 }, "", (data) => {
    if (data) {
      console.log(data);
      console.log(DocInfo);
      setTimeout(() => {
        DocInfo.value = data;
      }, 100);
    }
  });
}
</script>
