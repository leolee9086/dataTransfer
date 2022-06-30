///#if!BROWSER
const {
  ipcRenderer,
  shell,
  clipboard,
  nativeImage,
  webFrame,
} = require("electron");
const { getCurrentWindow, dialog, BrowserWindow } = require("@electron/remote");

///#endif
///#ifBROWSER
let
ipcRenderer,
  shell,
  clipboard,
  getCurrentWindow,
  dialog,
  BrowserWindow,
  nativeImage,
  webFrame
export {
  ipcRenderer,
  shell,
  clipboard,
  getCurrentWindow,
  dialog,
  BrowserWindow,
  nativeImage,
  webFrame,
};
///#endif
