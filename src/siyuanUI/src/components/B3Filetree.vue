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
          @click="getNotebooks"
        >
          工作空间/
        </span>
        <span
          v-if="currentdata.noteBookConf.conf"
          class="protyle-breadcrumb__item protyle-breadcrumb__item--active"
          @click="goToPath(currentdata.noteBook, '/')"
        >
          {{ currentdata.noteBookConf.conf.name }}/
        </span>
        <template v-if="currentdata.pathArray[1]">
          <template v-for="(item, i) in currentdata.pathArray">
            <span
              class="protyle-breadcrumb__item protyle-breadcrumb__item--active"
              v-if="currentdata.nameDict[item]"
              @click="
                goToPath(currentdata.nameDict[item].box, currentdata.nameDict[item].path)
              "
              >{{ currentdata.nameDict[item].content }}/</span
            >
          </template>
        </template>
      </div>
    </div>
    <div class="fn__flex-1" data-type="navigation" v-if="realtype !== 'files'">
      <template v-for="(item, i) in Notebooks" v-if="Notebooks">
        <notebookItem
          @click="goToPath(item.id, '/')"
          :notebook="item"
          v-if="!item.closed"
        >
        </notebookItem>
      </template>
    </div>
    <div class="fn__flex-1" data-type="navigation" v-if="realtype == 'files'">
      <ul class>
        <template v-for="(item, i) in currentdata.files" :key="item.id+i+index">
          <fileItem
            :file="item"
            @click="goToPath(currentdata.noteBook, item.path)"
            :index="index"
         
          ></fileItem>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { moveRight, moveLeft, setId,setNoteBook,selectBlock,moveTemp } from "../../../util/columnHandeler";

import { reactive, watch, onMounted, ref } from "vue";
import notebookItem from "./filetree/notebookItem.vue";
import fileItem from "./filetree/fileItem.vue";
const emit = defineEmits(["最小化"]);
let { options, index } = defineProps(["options", "index"]);
console.log(options);
let { type, id,noteBook } = options;
let realtype = "" + type;
realtype = ref(realtype);
let currentdata = reactive({
  noteBook: "",
  files: [],
  path: "",
  Hpath: "",
  boxIcon: "",
  noteBookConf: {},
  pathArray: [],
  nameDict: {},
  name: "",
});
let Notebooks = ref([]);

onMounted(() => {
  if (id) {
    let sql = `select * from blocks where id = '${id}'`;
    window.核心api.sql({ stmt: sql }, "", (data) => {
      console.log(data);
      data && data[0] ? goToPath(data[0].box, data[0].path) : null;
      console.log(currentdata.nameDict);
    });
  }
  if(!id&&noteBook){
      goToPath(noteBook,'/')
  }
});
let realid = "" + id;
realid = ref(id);
getNotebooks();

function getNotebookConf() {
  window.核心api.getNotebookConf({ notebook: currentdata.noteBook }, "", (data) => {
    currentdata.noteBookConf = data;
  });
}
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
function getNotebooks() {
  window.核心api.lsNotebooks({}, "", (data) => {
    console.log("测试", data);
    Notebooks.value = data.notebooks;
    console.log(Notebooks);
  });
  realtype.value = "";
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
  if (ParentPath !== ".sy" && currentdata.path !== "/" && path) {
    goToPath(currentdata.noteBook, ParentPath);
  } else {
    currentdata.noteBook = "";
    currentdata.files = [];
    currentdata.path = "";
    currentdata.Hpath = "";
    currentdata.boxIcon = "";
    currentdata.noteBookConf = {};
    currentdata.pathArray = [];
    currentdata.nameDict = {};
    getNotebooks();
    setId("", index,currentdata.noteBook);
  }
}
function getPathArray() {
  let array = currentdata.path.split("/");
  currentdata.pathArray = array;
  array.forEach((item) => getPathItemInfor(item));
}
function getPathItemInfor(pathItem) {
  let id = pathItem.slice(0, "20210808180117-czj9bvb".length);
  let sql = `select * from blocks where id = '${id}'`;
  window.核心api.sql({ stmt: sql }, "", (data) => {
    console.log(data);
    data && data[0] ? (currentdata.nameDict[pathItem] = data[0]) : null;
    console.log(currentdata.nameDict);
  });
}
function goToPath(noteBook, path) {
  console.log(noteBook, path);
  window.核心api.listDocsByPath({ path: path, notebook: noteBook }, "", (data) => {
    if (data) {
      currentdata.noteBook = noteBook;
      currentdata.path = path;
      currentdata.files = data.files;
      realtype.value = "files";
      console.log(currentdata);
      getHpath();
      getNotebookConf();
      getPathArray();
      setId(path, index);
      setNoteBook(noteBook,index)
    }
  });
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
