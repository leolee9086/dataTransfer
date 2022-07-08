<template>
  <div>
    <input v-model="search.k" />
    <template v-for="(item, i) in groupedData.notebooks">
      <searchNotebookItem :notebook="item"></searchNotebookItem>
    </template>
  </div>
</template>
<script setup>
import { onMounted, reactive, watch, ref } from "vue";
import { debounce } from "../../../util/event";
import searchItem from "./Dialogs/searchItem.vue";
import searchNotebookItem from "./Dialogs/searchNotebookItem.vue";

const { options, index } = defineProps(["options", "index"]);
const currentData = window.layout[index]["data"];
const search = reactive({
  k: "",
});
const result = reactive({ resultData: [] });
    let groupedData = reactive({notebooks:{}})

let { resultData } = result;
const getSearchResult = function (k) {
  window.核心api.fullTextSearchBlock({ query: k }, "", (data) => {
    if (data) {
      console.log(data);
      result.resultData = data;
      if(data){
        groupData(data)
      }
      console.log(result);
    }
  });
};
function groupData (data){
    data.forEach(
        item=>{
            if(!groupedData.notebooks[item.box])
            {
                groupedData.notebooks[item.box]={docs:{}}
            }
            if(!groupedData.notebooks[item.box].docs[item.rootID]){
                groupedData.notebooks[item.box].docs[item.rootID]={blocks:{}}
            }
             if(!groupedData.notebooks[item.box].docs[item.rootID].blocks[item.id]){
                groupedData.notebooks[item.box].docs[item.rootID].blocks[item.id]=item
            }
        }
    )
    console.log(groupedData)

}
watch(search, (data) => {
  console.log(data.k);
  getSearchResult(data.k);
});
onMounted(() => {
  let stmt = `select * from attributes where block_id ='${currentData.id}' and name ='custom-stmt'`;
  window.核心api.sql({ stmt: stmt }, "", (data) => {
    console.log(data);
  });
});
</script>
