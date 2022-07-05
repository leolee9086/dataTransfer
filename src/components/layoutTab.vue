<template>
    <div class="fn__flex-1 fn__flex" style="transition: var(--b3-width-transition);">
        <div data-type="wnd" class="fn__flex-column fn__flex fn__flex-1">
            <ul class="fn__flex layout-tab-bar"></ul>
            <div class="layout-tab-container fn__flex-1">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
</script>