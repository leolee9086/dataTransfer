<template>
  <div class="fn__flex-1 fn__flex-column file-tree sy__file">
    <div class="block__icons">
      <div class="block__logo">
        <svg>
          <use xlink:href="#iconFiles"></use>
        </svg>
      </div>
      <span class="fn__flex-1 fn__space"></span>
      <span
        data-type="focus"
        class="block__icon b3-tooltips b3-tooltips__sw"
        aria-label="移入所有临时文档"
        @click="moveTemp(index)"
        ><svg>
          <use xlink:href="#iconDown"></use></svg
      ></span>
      <span class="fn__space"></span>
      <span
        data-type="collapse"
        class="block__icon b3-tooltips b3-tooltips__sw"
        @click="goToParent"
        aria-label="返回上级 ctrl + 点击返回工作空间"
      >
        <svg>
          <use xlink:href="#iconLeft"></use>
        </svg>
      </span>
      <div class="fn__space"></div>
      <div
        data-type="more"
        class="b3-tooltips b3-tooltips__sw block__icon"
        aria-label="更多"
        @click="fileTreeMenuShow"
      >
        <svg>
          <use xlink:href="#iconMore"></use>
        </svg>
      </div>
      <span class="fn__space"></span>
      <span
        data-type="min"
        class="block__icon b3-tooltips b3-tooltips__sw"
        @click="最小化文档树;"
        aria-label="最小化 Ctrl+W"
      >
        <svg>
          <use xlink:href="#iconMin"></use>
        </svg>
      </span>
    </div>
    <div class="protyle-breadcrumb">
      <div class="protyle-breadcrumb__bar protyle-breadcrumb__bar">
        <span
          class="protyle-breadcrumb__item protyle-breadcrumb__item--active"
          @click="getNotebooks(index)"
        >
          工作空间/
        </span>
        <span
          v-if="currentdata.noteBookConf.conf"
          class="protyle-breadcrumb__item protyle-breadcrumb__item--active"
          @click="goToPath(currentdata.noteBook, '/',index)"
        >
          {{ currentdata.noteBookConf.conf.name }}/
        </span>
        <template v-if="currentdata.pathArray[1]">
          <template v-for="(item, i) in currentdata.pathArray">
            <span
              class="protyle-breadcrumb__item protyle-breadcrumb__item--active"
              v-if="currentdata.nameDict[item]"
              @click="
                goToPath(currentdata.nameDict[item].box, currentdata.nameDict[item].path,index)
              "
              >{{ currentdata.nameDict[item].content }}/</span
            >
          </template>
        </template>
      </div>
    </div>
    <div ref = "noteBooksListDom" class="fn__flex-1 NoteBooks" data-type="navigation" v-if="currentdata.subtype == 'NoteBooks'">
      <template v-for="(item, i) in notebooks.value" v-if="notebooks">
        <notebookItem
          @click="goToPath(item.id, '/',index)"
          :notebook="item"
          v-if="!item.closed"
        >
        </notebookItem>
      </template>
    </div>
    <div ref="docListDom"  
    class="fn__flex-1 Filetree" 
    data-type="navigation" 
    v-if="currentdata.subtype == 'Filetree'"
    @scroll="()=>genVisiable('doc')"
    >
      <ul class>
        <template 
        v-for="(item, i) in currentdata.files" 
        :key="item.id + i + index+''"
        >
        <template   v-if='i<visiableMaxIndex.value'>
          <fileItem
            :file="item"
            @click="goToPath(currentdata.noteBook, item.path,index)"
            :index="index"
          ></fileItem>
          </template>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup>
import {
  moveRight,
  moveLeft,
  selectBlock,
  moveTemp,
} from "../../../util/columnHandeler";
import { reactive, watch, onMounted, ref } from "vue";
import notebookItem from "./filetree/notebookItem.vue";
import fileItem from "./filetree/fileItem.vue";
import {
  setName,
  goToPath,
  getNotebookConf,
  setId,
  getNotebooks
} from "../../../util/dataHandler"
const emit = defineEmits(["最小化"]);
let { options, index } = defineProps(["options", "index"]);
console.log(options);
console.log(window.layout[index]);
let { type, id, noteBook } = options.data;
let realtype = "" + type;
realtype = ref(realtype);
let currentdata = window.layout[index]["data"];
let notebooks = window.notebooks

let visiableMaxIndex = reactive({value:window.innerHeight/30})


let noteBooksListDom= ref(null)
let docListDom = ref(null)
const genVisiable=function(type){
  let containerScrollHeight
  let containerInnerHeight 
  if(type=="doc"&&docListDom.value){
    console.log(docListDom)
    containerScrollHeight = docListDom.value.scrollTop
    containerInnerHeight =docListDom.value.offsetHeight
  }
  visiableMaxIndex.value=(containerScrollHeight+containerInnerHeight)/28
    console.log(visiableMaxIndex)

}


onMounted(() => {
  if (id) {
    console.log(index)
    let sql = `select * from blocks where id = '${id}'`;
    window.核心api.sql({ stmt: sql }, "", (data) => {
      data && data[0] ? goToPath(data[0].box, data[0].path,index) : null;
      if (data && data[0]) {
        setName(data[0].content,index)
      }
      console.log(currentdata.nameDict);
    });
  }
  if (!id && noteBook) {
    goToPath(noteBook, "/",index);
  }
  else{
    getNotebooks(index);

  }
});
let realid = "" + id;
realid = ref(id);
getNotebooks(index);


function getPathName() {
  currentdata.pathArray.forEach((item) => {
    if (item.length > 4) {
    }
  });
}
function getHpath() {
  window.核心api.getHPathByPath(
    { notebook: currentdata.noteBook, path: currentdata.path },
    "",
    (data) => {
      currentdata.Hpath = data;
    }
  );
}

function goToParent() {
  let path = currentdata.path;
  console.log(path);
  let ParentPath =
    currentdata.path.slice(
      0,
      currentdata.path.length - "20210808180117-czj9bvb".length - 3
    ) + ".sy";
  ParentPath == "/.sy" ? (ParentPath = "/") : null;
  console.log(ParentPath,path)
  if (ParentPath !== ".sy" && currentdata.path !== "/" && path) {
    goToPath(currentdata.noteBook, ParentPath,index);
  } else {
    getNotebooks(index);
    setId("", index, currentdata.noteBook);
  }
}


let view = reactive({ 最小化: false });
const 最小化文档树 = () => {
  view.最小化 = true;
  console.log(view.最小化);
  emit("最小化");
};
function fileTreeMenuShow() {
  window.eventBus.emit("menuShow", {});
}
</script>
