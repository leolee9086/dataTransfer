<template>
  <div
    class="fn__flex-column"
    style="border-radius: 4px; overflow: hidden; position: relative"
  >
    <slot name="header"></slot>
    <div class="fn__flex-1 fn__flex">
      <ul
        class="b3-tab-bar b3-list b3-list--background"
        style="
          user-select: none;
          width: 180px;
          height: 672.6999999999999px;
          overflow: auto;
        "
      >
        <li data-name="editor" class="b3-list-item b3-list-item--big b3-list-item--focus">
          <svg class="b3-list-item__graphic"><use xlink:href="#iconEdit"></use></svg
          >编辑器
        </li>
      </ul>
      <div
        class="b3-tab-container"
        style="height: 672.6999999999999px"
        data-name="editor"
      ></div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "B3SettingPanel",
  props: ["Settings", "center", "value"],
};
</script>
