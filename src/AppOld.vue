<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive } from "vue";
import Toolbar from "./components/toolbar.vue";
import dock from "./components/dock.vue";
import commonIcons from "./components/commonIcons.vue";
import twitterEmojis from "./components/twitterEmojis.vue";
import layoutColumn from "./components/layoutColumn.vue";
import layoutRow from "./components/layoutRow.vue";
import layoutTab from "./components/layoutTab.vue";
import filetree from "./components/filetree.vue";
import commonMenu from "./components/commonMenu.vue";
import protyleEditor from "./components/protyleEditor.vue";

const layout = reactive({
  dock: {
    left: {
      top: [],
      bottom: [],
    },
    right: {
      top: [],
      bottom: [],
    },
    top: {
      left: [],
      right: [],
    },
    bottom: {
      left: [],
      right: [],
    },
  },
  toolbarOption: {
    left: [{ id: "toolbarVIP", label: "年付订阅", icon: "iconVIP" }],
    right: [],
    hide: false,
  },
  left: [],
  center: [
    { type: "", uuid: "", option: {} },
    { type: "", uuid: "", option: {} },
    { type: "", uuid: "", option: {} },
  ],
  top: [],
});
</script>

<template>
  <toolbar :option="layout.toolbarOption"> </toolbar>
  <dock position="Top"></dock>
  <div class="fn__flex-1 fn__flex">
    <dock :vertical="true" position="Left"></dock>
    <div id="layouts" class="layout fn__flex-1 fn__flex-column">
      <layoutColumn :colIndex="i" :autoHeight="true" :autoWidth="true">
        <layoutRow :option="layout.center" :autoHeight="true">
          <template v-for="(column, i) in layout.center">
            <layoutColumn :option="column" :colIndex="i">
              <layoutTab>
                <B3ProtylePreviewer id="20200905090211-2vixtlf"></B3ProtylePreviewer>
              </layoutTab>
            </layoutColumn>
          </template>
        </layoutRow>
      </layoutColumn>
    </div>
    <dock :vertical="true" position="Right"></dock>
  </div>
  <div id="commonMenu"></div>
  <div id="barSync"><svg></svg></div>

  <dock position="Bottom"></dock>
  <commonMenu></commonMenu>
</template>
