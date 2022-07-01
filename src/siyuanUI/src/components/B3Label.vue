<template>
    <label class="fn__flex b3-label">
        {{title}}
        <div class="fn__flex-1">
         <div>{{label}}</div>
         <slot name="label"></slot>
        </div>
        <span class="fn__space"></span>
        <slot>
        </slot>
    </label>
</template>
<script>
    export default {
       name:"B3Label",
       props:['title','label'] 
    }
</script>