import { resolve } from "path";
import { writeFileSync } from "fs";

 const electron= ()=>{
  
    return {
      name: "vite-plugin-electron/renderer",
      config(config) {
        console.log(config.root)
        const electronJsPath = resolve(
          "./electron.js"
        );
        console.log(electronJsPath)

        // electron.js ESM 格式模板
    

        // 创建 electron.js 到 node_modules/.vite-plugin-electron/ 下

        // 利用 alias 将 import 'electron' 指向到前面创建的 electron.js
        config.resolve.alias.push({
          find: "electron",
          replacement: electronJsPath,
        });
        config.resolve.alias.push({
            find: "@electron/remote",
            replacement: electronJsPath,
          });
      }
    }
  
}
export default electron