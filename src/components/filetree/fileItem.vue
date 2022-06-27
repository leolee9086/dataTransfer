<template>
    <li title="致谢 71 kB
更新于 1 个星期以前
创建于 2020-11-21 21:26:05" :data-node-id="file.id" :data-name="file.name" draggable="true" data-count="0"
        data-type="navigation-file" class="b3-list-item b3-list-item--hide-action"
        data-path="/20201121212605-9td1a62.sy"
        :style="state.selected ? 'color:var(--b3-card-info-color);background-color:var(--b3-card-info-background)' : null">
        <span style="padding-left: 16px"
            class="b3-list-item__toggle b3-list-item__toggle--hl b3-tooltips b3-tooltips__n"
            @click="($event) => { $event.stopPropagation() }" aria-label="移动到左侧">
            <svg class="b3-list-item__arrow">
                <use xlink:href="#iconLeft"></use>
            </svg>
        </span>
        <span style="padding-left: 16px"
            class="b3-list-item__toggle b3-list-item__toggle--hl b3-tooltips b3-tooltips__n"
            @click="($event) => { $event.stopPropagation() }" aria-label="移动到右侧">
            <svg class="b3-list-item__arrow">
                <use xlink:href="#iconRight"></use>
            </svg>
        </span>

        <span class="b3-list-item__icon b3-tooltips b3-tooltips__n" aria-label="修改图标"><svg class="custom-icon">
                <use :xlink:href="icon"></use>
            </svg></span>
        <span class="b3-list-item__text b3-tooltips b3-tooltips__n " 
        @click="($event) => { $event.stopPropagation();打开() }"
        >
            {{ file.name }}
        </span>
             <span data-type="open" class="b3-list-item__action b3-tooltips b3-tooltips__nw" aria-label="在本页签展开"
            >
            <svg>
                <use xlink:href="#iconFullscreen"></use>
            </svg>
        </span>
        <span data-type="more-file" class="b3-list-item__action b3-tooltips b3-tooltips__nw" aria-label="更多"
            @click="($event) => { $event.stopPropagation(); }">
            <svg>
                <use xlink:href="#iconMore"></use>
            </svg>
        </span>
        <span data-type="new" class="b3-list-item__action b3-tooltips b3-tooltips__nw" v-b3show="!state.selected"
            @click="($event) => { $event.stopPropagation(); state.selected = true }" aria-label="选中">
            <svg>
                <use xlink:href="#iconAdd"></use>
            </svg>
        </span>
        <span data-type="new" class="b3-list-item__action b3-tooltips b3-tooltips__nw" v-b3show="state.selected"
            style="display:block" @click="($event) => { $event.stopPropagation(); state.selected = false }"
            aria-label="取消">
            <svg>
                <use xlink:href="#iconMin"></use>
            </svg>
        </span>

    </li>

</template>
<script setup>
import { reactive, getCurrentInstance } from "vue"
const emit = defineEmits(['open'])
let { file } = defineProps(
    {
        file: {},
        id: "",
        tebindex: "",
    }
)
let state = reactive({ selected: false })
let { selected } = state
let icon = file && file.icon ? "\#icon\-" + file.icon : "\#icon-1f4c4"
function 打开(){
    let link  = window.document.createElement("a")
    link.setAttribute('href',`siyuan://blocks/${file.id}`)
    link.click()
    
    link.remove()
    
    }
</script>