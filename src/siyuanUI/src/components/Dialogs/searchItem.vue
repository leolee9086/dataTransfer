<template>
  <div
    data-type="search-item"
    class="b3-list-item b3-list-item--focus"
    data-url="20210809224140-qvah5g7"
    data-path="/20210911183922-0z0hmi2/20210809224143-p5j8cuf/20210809115020-4msly6n.sy"
    :data-node-id="options.id"
  >
    <svg class="b3-list-item__graphic"><use :xlink:href="'#'+getIconByType(options.type,options.subType)"></use></svg>
    <span class="b3-list-item__text" v-html="options.content"></span>
    <span
      class="b3-list-item__meta b3-list-item__meta--ellipsis"
      :title="options.hPath"
      v-html="options.hPath"
      ></span
    >
  </div>
</template>
<script setup>
import {ref} from 'vue'
import {getIconByType} from '../../../../util/BlockHandler.js'

console.log("ceshi")
const {options}  =  defineProps(["options"])

</script>
