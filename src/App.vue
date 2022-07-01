<template>
  <teleport to="body">
    <B3Dock position="Top"></B3Dock>
    <div class="fn__flex fn__flex-1" >
      <B3Dock position="Left" :vertical="true"></B3Dock>
      <div id="layouts" class="fn__flex fn__flex-1">
        <B3LayoutColumn
          ><B3ProtylePreviewer id="20200905090211-2vixtlf"></B3ProtylePreviewer>
        </B3LayoutColumn>
        <B3LayoutColumn>
          <B3ProtylePreviewer id="20210618013343-zij807a"></B3ProtylePreviewer>
        </B3LayoutColumn>
      </div>
      <B3Dock :vertical="true" position="Right"></B3Dock>
    </div>
    <B3Dock position="Bottom"></B3Dock>
  </teleport>
</template>
<script setup>
import { ref } from "vue";
import B3ProtylePreviewer from "./siyuanUI/src/components/B3ProtylePreviewer.vue";

const layout = ref(null);
</script>
