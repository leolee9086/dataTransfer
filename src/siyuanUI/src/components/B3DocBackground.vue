<template>
<div
    class="protyle-background"
    data-node-id="20210808180320-qgr0b3q"
    style="min-height: 64px"
  >
    <div class="protyle-background__img">
      <img class="fn__none" />
      <div class="protyle-icons">
        <span
          class="protyle-icon protyle-icon--first b3-tooltips b3-tooltips__sw"
          style="position: relative"
          aria-label="上传"
          ><input
            type="file"
            style="
              position: absolute;
              width: 22px;
              height: 100%;
              top: 0;
              left: 0;
              opacity: 0.001;
              overflow: hidden;
              cursor: pointer;
            " /><svg><use xlink:href="#iconUpload"></use></svg
        ></span>
        <span
          class="protyle-icon b3-tooltips b3-tooltips__sw"
          data-type="link"
          aria-label="链接"
          ><svg><use xlink:href="#iconLink"></use></svg
        ></span>
        <span
          class="protyle-icon b3-tooltips b3-tooltips__sw"
          data-type="random"
          aria-label="随机"
          ><svg><use xlink:href="#iconRefresh"></use></svg
        ></span>
        <span
          class="protyle-icon b3-tooltips b3-tooltips__sw fn__none"
          data-type="position"
          aria-label="上下拖动图片以调整位置"
          ><svg><use xlink:href="#iconMove"></use></svg
        ></span>
        <span
          class="protyle-icon protyle-icon--last b3-tooltips b3-tooltips__sw"
          data-type="remove"
          aria-label="删除"
          ><svg><use xlink:href="#iconTrashcan"></use></svg
        ></span>
      </div>
      <div class="protyle-icons fn__none">
        <span class="protyle-icon protyle-icon--text">上下拖动图片以调整位置</span>
      </div>
      <div class="protyle-icons fn__none" style="opacity: 0.86">
        <span class="protyle-icon protyle-icon--first" data-type="cancel">取消</span>
        <span class="protyle-icon protyle-icon--last" data-type="confirm">确定</span>
      </div>
    </div>
    <div class="protyle-background__tags"></div>
    <div class="protyle-background__iconw" style="left: 16px">
      <div class="protyle-background__icon" data-menu="true" data-type="open-emoji">
        <svg class="custom-icon"><use xlink:href="#icon-1f3a8"></use></svg>
      </div>
      <div class="protyle-icons fn__flex-center">
        <span
          class="protyle-icon protyle-icon--first b3-tooltips b3-tooltips__s"
          data-menu="true"
          data-type="tag"
          aria-label="添加标签"
          ><svg><use xlink:href="#iconTags"></use></svg
        ></span>
        <span
          class="protyle-icon b3-tooltips b3-tooltips__s"
          data-type="icon"
          aria-label="修改图标"
          ><svg><use xlink:href="#iconEmoji"></use></svg
        ></span>
        <span
          class="protyle-icon protyle-icon--last b3-tooltips b3-tooltips__s"
          data-type="random"
          aria-label="题头图"
          ><svg><use xlink:href="#iconImage"></use></svg
        ></span>
      </div>
    </div>
  </div>
  </template>