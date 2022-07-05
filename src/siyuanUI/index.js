import B3breadCrumb from "./src/components/B3breadCrumb.vue";
import B3Switch from "./src/components/B3Switch.vue";
import B3Slide from "./src/components/B3Slide.vue";
import B3Input from "./src/components/B3Input.vue";
import B3Select from "./src/components/B3Select.vue";
import B3Label from "./src/components/B3Label.vue";
import B3SettingPanel from "./src/components/B3SettingPanel.vue";
import B3Dialog from "./src/components/B3Dialog.vue";
import B3LayoutColumn from "./src/components/B3LayoutColumn.vue";
import B3LayoutRow from "./src/components/B3LayoutRow.vue";
import B3ProtylePreviewer from "./src/components/B3ProtylePreviewer.vue";
import B3Dock from "./src/components/B3Dock.vue";
import B3DocTiltle from "./src/components/B3DocTiltle.vue";
import B3Filetree from "./src/components/B3Filetree.vue";
import B3TabBar from "./src/components/B3TabBar.vue";
import tempBoxItem from "./src/components/tempBox/tempBoxItem.vue";

const siyuanUI = {};
siyuanUI.install = function (Vue) {
  Vue.component("B3Switch", B3Switch);
  Vue.component("B3Slide", B3Slide);
  Vue.component("B3Input", B3Input);
  Vue.component("B3Select", B3Select);
  Vue.component("B3Label", B3Label);
  Vue.component("B3SettingPanel", B3SettingPanel);
  Vue.component("B3Dialog", B3Dialog);
  Vue.component("B3LayoutColumn", B3LayoutColumn);
  Vue.component("B3ProtylePreviewer", B3ProtylePreviewer);
  Vue.component("B3breadCrumb", B3breadCrumb);
  Vue.component("B3LayoutRow", B3LayoutRow);
  Vue.component("B3Dock", B3Dock);
  Vue.component("B3DocTiltle", B3DocTiltle);
  Vue.component("B3Filetree", B3Filetree);
  Vue.component("B3TabBar", B3TabBar);
  Vue.component("tempBoxItem", tempBoxItem);

  ///#if!BROWSER
  /*  Vue.component(B3Select.name, B3Select);
  Vue.component(B3Select.name, B3Select);
  Vue.component(B3Select.name, B3Select);*/
  ///#endif
};
export default siyuanUI;
