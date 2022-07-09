<template>
  <div class="fn_flex fn_flex-column">
    <div class="fn_flex fn_flex-1">
      <div class="fn__flex" style="padding: 4px 8px; position: relative">
        <span
          :style="`opacity: 1;${
            search.lockPath ? 'background-color:var(--b3-card-info-background)' : ''
          }`"
          class="block__icon fn__flex-center b3-tooltips b3-tooltips__s"
          id="searchHistoryBtn"
          data-menu="true"
          aria-label="限当前路径"
          @click="search.lockPath = !search.lockPath"
        >
          <svg v-if="search.lockPath">
            <use xlink:href="#icon-1f512"></use>
          </svg>
          <svg v-if="!search.lockPath">
            <use xlink:href="#icon-1f513"></use>
          </svg>
        </span>
        <div class="fn__space"></div>
        <input v-model="search.k" class="b3-text-field fn__flex-1" />
        <span class="fn__space"></span>
        <span
          style="opacity: 1"
          class="block__icon fn__flex-center b3-tooltips b3-tooltips__w"
          id="globalSearchReload"
          @click="getSearchResult(search.k)"
          aria-label="刷新"
        >
          <svg><use xlink:href="#iconRefresh"></use></svg>
        </span>
      </div>
    </div>
    <div class="fn_flex fn_flex-column fn_flex-1">
      <template v-if="groupedData.docBlocks[0]">
        <template v-for="item in groupedData.notebooks" :key="item.id + 'noteBook'">
          <searchNotebookItem
            :notebook="item"
            :docBlocks="groupedData.docBlocks"
            :index="index"
          ></searchNotebookItem>
        </template>
      </template>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, watch, ref } from "vue";
import { refreshAll } from "../../../util/columnHandeler";
import { debounce } from "../../../util/event";
import searchItem from "./Dialogs/searchItem.vue";
import searchNotebookItem from "./Dialogs/searchNotebookItem.vue";

let { options, index, path } = defineProps(["options", "index", "path"]);
let currentData = window.layout[index]["data"];
const search = reactive({
  k: currentData.query,
  path: "",
  lockPath: false,
});
let { lockPath } = search;
const result = reactive({ resultData: [] });
let groupedData = reactive({ notebooks: {}, docBlocks: [] });

let { resultData } = result;
const getSearchResult = function (k) {
  if (window.layout[index]) {
    window.layout[index]["data"].query = k;
    window.核心api.fullTextSearchBlock(
      {
        query: k,
        path: search.lockPath
          ? window.layout[index]["data"].notebook + window.layout[index]["data"].path
          : null,
      },
      "",
      (data) => {
        if (data) {
          console.log(data);
          result.resultData = data;
          if (data) {
            groupData(data);
          }
        }
      }
    );
  }
};
function groupData(data) {
  groupedData.docBlocks = [];
  groupedData.notebooks = {};
  let docIds = [];
  let stmt = `select * from blocks where `;
  data.forEach((item) => {
    if (!groupedData.notebooks[item.box]) {
      groupedData.notebooks[item.box] = { docs: {}, id: item.box };
    }
    if (!groupedData.notebooks[item.box].docs[item.rootID]) {
      groupedData.notebooks[item.box].docs[item.rootID] = { blocks: {}, id: item.rootID };
      docIds.push(item.rootID);
    }
    if (!groupedData.notebooks[item.box].docs[item.rootID].blocks[item.id]) {
      groupedData.notebooks[item.box].docs[item.rootID].blocks[item.id] = item;
    }
  });
  stmt = stmt + `id = '${docIds[0]}'`;
  docIds.forEach((item, i) => (stmt = stmt + `or id = '${item}'`));
  window.核心api.sql({ stmt: stmt }, "", (data) => {
    groupedData.docBlocks = data;
  });
}
watch(search, (data) => {
  console.log(data.k);
  debounce(refreshAllSearch, 500);
});
watch(window.layout, () => {
  search.k = window.layout[index] ? window.layout[index]["data"].query : "";
});
function refreshAllSearch() {
  result.resultData = [];
  getSearchResult(search.k);
}
onMounted(() => {
  let stmt = `select * from attributes where block_id ='${currentData.id}' and name ='custom-stmt'`;
  window.核心api.sql({ stmt: stmt }, "", (data) => {
    console.log(data);
  });
});
</script>
