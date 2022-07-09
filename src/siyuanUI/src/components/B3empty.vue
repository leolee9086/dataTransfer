<template>
  
  <div class="fn_flex fn__flex-1" style="min-width: 300px">
            <div
              class="layout__empty b3-list"
              style="text-align: center"
              @dblclick="appendRight()"
            >
              <h2>双击此处增加分栏</h2>
              <div class="b3-list-item" id="saveLayout">
                <button @click="saveLayout" style="width: 100%">保存布局</button>
              </div>
              <div class="b3-list-item" id="saveLayout">
                <button @click="()=>saveLayout(true)" style="width: 100%">导出布局</button>
              </div>
              <div @click="getLayout" class="b3-list-item" id="getLayout">
                <button style="width: 100%">重新加载布局</button>
              </div>
              <div @click="importLayout()" class="b3-list-item" id="getLayout">
                <button style="width: 100%">导入其他布局</button>
              </div>
              <div class="b3-list-item" id="editorEmptySearch">
                <svg class="b3-list-item__graphic">
                  <use xlink:href="#iconHelp"></use></svg
                ><span
                  ><a href="https://www.chuanchengsheji.com/">关于dataTransfer</a></span
                >
              </div>
              <div class="b3-list-item" id="editorEmptySearch">
                <svg class="b3-list-item__graphic">
                  <use xlink:href="#iconHelp"></use></svg
                ><span><a href="https://afdian.net/@leolee9086">请作者喝杯咖啡</a></span>
              </div>
              <div class="b3-list-item" id="editorEmptySearch">
                <svg class="b3-list-item__graphic">
                  <use xlink:href="#iconGithub"></use></svg
                ><span
                  ><a target="blank" href="https://github.com/leolee9086/dataTransfer"
                    >GitHub</a
                  ></span
                >
              </div>
            </div>
          </div>
          
</template>
<script setup>

</script>