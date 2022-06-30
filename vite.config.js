import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginIfdefCompile from './vite-ifdef-compile'
import electron from './vite-electron'
let path = require('path')
export default defineConfig({
  plugins: [
    vue(),
    vitePluginIfdefCompile(),
    electron({

    }),  ],
  "ifdef-define":{
    BROWSER: true,
    MOBILE:false, 
    _DEBUG: 1 ,
  },
  'ifdef-option':{verbose: false},
  build:{
    outDir:"f:/siyuan/data/widgets/vitetest",
    assetsDir:'./src',
    emptyOutDir:true,
  },
  base: './',
  server:{
    proxy:{
      "/stage":{
        target:"http://127.0.0.1:6806/stage",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/stage/, '')
      },
      "/api":{
        target:"http://localhost/:6806/api",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      "/assets":{
        target:"http://127.0.0.1:6806/assets",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/assets/, '')
      },
      "/appearance":{
        target:"http://127.0.0.1:6806/appearance",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/appearance/, '')
      },
    },
    cors: {
      allowedHeaders:['Content-Type', 'Authorization']
    },
    hmr:{
      overlay:false
    }
  },
//  external:['electron'],
  define: {
    'process.env': {},
  },
  optimizeDeps: {
  //exclude: ['electron',"@electron/remote"], // 告诉 Vite 排除预构建 electron，不然会出现 __diranme is not defined
  },
  resolve:{alias:[]}
})
