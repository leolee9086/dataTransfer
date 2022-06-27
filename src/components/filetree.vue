 <template>
    <div class="fn__flex-1 fn__flex-column file-tree sy__file" v-if="!view.最小化">
        <div class="block__icons">
            <div class="block__logo">
                <svg>
                    <use xlink:href="#iconFiles"></use>
                </svg>
                {{currentFile?currentFile.name:''}}
            </div>
            <span class="fn__flex-1 fn__space"></span>
            <span data-type="focus" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="定位打开的文档 "><svg>
                    <use xlink:href="#iconFocus"></use>
                </svg></span>
            <span class="fn__space"></span>
            <span data-type="collapse" class="block__icon b3-tooltips b3-tooltips__sw" @click="currentPath=prePath[prePath.length-1];prePath=prePath.slice(0,prePath.length-2)" aria-label="返回上级">
                <svg>
                    <use xlink:href="#iconLeft"></use>
                </svg>
            </span>
            <div class="fn__space"></div>
            <div data-type="more" class="b3-tooltips b3-tooltips__sw block__icon" aria-label="更多" @click="fileTreeMenuShow">
                <svg>
                    <use xlink:href="#iconMore"></use>
                </svg>
            </div>
            <span class="fn__space"></span>
            <span data-type="min" class="block__icon b3-tooltips b3-tooltips__sw" @click="最小化文档树" aria-label="最小化 Ctrl+W">
                <svg>
                    <use xlink:href="#iconMin"></use>
                </svg>
            </span>
        </div>
        <div class="fn__flex-1" data-type="navigation">
            <template v-if="!realtype || realtype == 'Notebooks'">
                <template v-for="(item, i) in Notebooks">
                    <notebookItem @click="currentNoteBook = item.id; realtype = 'files'" :notebook="item"
                        v-if="!item.closed"></notebookItem>
                </template>
            </template>
            <template v-if="realtype == 'files'">
                <ul class>
                    <template v-for="(item, i) in currentdata.files">
                        <fileItem :file="item"
                            @click="
                            currentdata.path = item.path; 
                            prePath .push( currentPath||'/'); 
                            currentPath = item.path
                            currentFile = item
                            "
                        ></fileItem>
                    </template>
                </ul>
            </template>
        </div>
    </div>
    <div class="fn__flex " v-if="view.最小化">
        <h1 @click="view.最小化=false" style="writing-mode:vertical-lr;text-align:center">
                        {{currentFile?currentFile.name:'最小化'}}

        </h1>
    </div>
</template>
 <script setup>
 import { reactive, getCurrentInstance, watch, ref, shallowReactive, nextTick } from "vue"
 import notebookItem from './filetree/notebookItem.vue';
 import fileItem from './filetree/fileItem.vue';
 const emit = defineEmits(['最小化'])

 let Notebooks = reactive(window.lsNotebooks.notebooks)
 let { type, id } = defineProps({
     type: "",
     id: ''
 })
 let realtype = "" + type
 realtype = ref(realtype)
 let realid = "" + id
 realid = ref(id)
 let currentdata = reactive({
     box: "",
     files: [],
     path: ""
 })
 let currentNoteBook = ref(null)
 let currentPath = ref(null)
 let currentFile = ref(null)
 let prePath = ref([])
 watch(realtype, (value) => {
     console.log(value, realid)
     if (id) {
         window.核心api.listDocsByPath({ path: '', notebook: "" }, "", (data) => { currentdata.files = data; console.log(data) })
     }
     else {
         window.核心api.listDocsByPath(
             { path: '/', notebook: currentNoteBook.value },
             "",
             (data) => {
                 if (data) {
                     currentdata.files = data.files
                     currentdata.path = data.path
                     currentdata.box = data.box
                 }; console.log(currentdata)
             }
         )
     }
 })
 let view= reactive(
    {最小化 : false}
    )
 const 最小化文档树= () =>{
    view.最小化 =true
    console.log(view.最小化 )
    emit('最小化')
 }  
 function fileTreeMenuShow(){
    window.eventBus.emit('menuShow',{})
 }
 watch(currentPath, (value, oldvalue) => {
     console.log(value)
     window.核心api.listDocsByPath(
         { path: value, notebook: currentdata.box },
         "",
         (data) => {
             if (data) {
                 currentdata.files = data.files
                 currentdata.path = data.path
                 currentdata.box = data.box
                     ; console.log(currentdata)
             }
         }
     )
 })
 </script>
