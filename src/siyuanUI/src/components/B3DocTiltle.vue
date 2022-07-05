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
      @input="rename"
    >
    {{ DocInfo.name }}
    </div>
    <div class="protyle-attr">
      <div
        class="protyle-attr--refcount popover__block"
        data-defids='["20211124002838-1hyo4t0"]'
        data-id='["20211124003422-pddruw6","20211124002819-761jd0i"]'
      >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted ,watch} from "vue";
let titleDOM = ref(null);
const {DocInfo} = defineProps(
    ['DocInfo']
)
onMounted(() => {
  console.log(DocInfo)
});
const rename = function(){
  let id = DocInfo.id
  console.log(DocInfo)
  window.核心api.renameDoc(
    {
    path:DocInfo.path,
    notebook:DocInfo.notebook,
    title:titleDOM.value.innerText
    }
  )
}
</script>