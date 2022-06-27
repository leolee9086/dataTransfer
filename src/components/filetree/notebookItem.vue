<template>
    <ul class="b3-list b3-list--background" data-url="20210809224140-qvah5g7" data-sort="12">
        <li class="b3-list-item b3-list-item--hide-action" draggable="true" data-type="navigation-root" data-path="/">
            <span class="b3-list-item__toggle b3-tooltips b3-tooltips__e" aria-label="移动到右侧">
                <svg class="b3-list-item__arrow">
                    <use xlink:href="#iconRight"></use>
                </svg>
            </span>
            <span class="b3-list-item__icon b3-tooltips b3-tooltips__e" aria-label="修改图标"><svg class="custom-icon">
                    <use :xlink:href="icon"></use>
                </svg></span>
            <span class="b3-list-item__text">{{ notebook.name }}</span>
            <span data-type="more-root" class="b3-list-item__action b3-tooltips b3-tooltips__w" aria-label="更多">
                <svg>
                    <use xlink:href="#iconMore"></use>
                </svg>
            </span>
            <span data-type="new" class="b3-list-item__action b3-tooltips b3-tooltips__w" aria-label="新建文档">
                <svg>
                    <use xlink:href="#iconAdd"></use>
                </svg>
            </span>
            <ul class>
             <suspense>
                <slot>
                   
                </slot>
            </suspense>
            </ul>
        </li>
    </ul>
</template>
<script setup>
import { reactive, getCurrentInstance } from "vue"
let { notebook } = defineProps(
    {
        notebook: {},
        id:"",
        tebindex:"",
    }
)
let icon = notebook.icon ? "\#icon\-" + notebook.icon : "\#icon-1f4c4"
</script>