
import { createApp } from "vue";
import App from "./App.vue";
import {kernelApiList} from "./kernelApi.js";
import EventBus from "./eventBus.js";
import setSiyuan from "./setSiyuan.js"
import siyuanUI from "./siyuanUI";
import mocksiyuan from "./setSiyuan.js"
///#ifBROWSER
let emoji= await fetch('./src/emojis.svg')
emoji = await emoji.text()
let div =  document.createElement('div')
div.innerHTML =emoji
document.body.insertBefore(div.firstElementChild,document.body.firstElementChild)
let icos= await fetch('./src/icons.svg')
icos = await icos.text()
 div =  document.createElement('div')
div.innerHTML =icos
document.body.insertBefore(div.firstElementChild,document.body.firstElementChild)
///#endif
///#if!BROWSER
let fs= require('fs')

///#endif
window.__dirname = ""
window.layout=[]
window.selectedBlock=[]

const LUTE = await import ('./stage/js/lute/lute.min.js')
console.log(LUTE)
const 核心api = new kernelApiList()
const eventBus =new EventBus()
window.eventBus = eventBus
window.核心api = 核心api
window.siyuan=mocksiyuan()
const app = createApp(App);
app.use(siyuanUI)
app.directive("b3show", {beforeMount: (el, binding)=> {
  if (binding.value) {
    el.classList.remove("fn__none");
  } else {
    el.classList.add("fn__none");
  }
}})
app.mount("#app");
