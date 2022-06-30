
import { createApp } from "vue";
import App from "./App.vue";
import {kernelApiList} from "./kernelApi.js";
import EventBus from "./eventBus.js";
 window.__dirname = ""
const 核心api = new kernelApiList()
const eventBus =new EventBus()
window.eventBus = eventBus
window.核心api = 核心api
window.lsNotebooks=[]
window.lsNotebooks = await 核心api.lsNotebooks()
console.log(lsNotebooks)
const app = createApp(App);
app.directive("b3show", {beforeMount: (el, binding)=> {
  if (binding.value) {
    el.classList.remove("fn__none");
  } else {
    el.classList.add("fn__none");
  }
}})
app.mount("body");
