import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginIfdef from 'vite-plugin-ifdef'

let path = require('path')
export default defineConfig({
  plugins: [
    vue(),
    vitePluginIfdef(),
    ],
  "ifdef-define":{
    BROWSER: true,
    MOBILE:false, 
    DEBUG: true ,
  },
  'ifdef-option':{verbose: true},
  build:{
    target:["chrome99"],
    outDir:"f:/siyuan/data/widgets/dataTransfer",
    assetsDir:'./src',
    emptyOutDir:false,
    rollupOptions:{
    },
    "ifdef-define":{
      BROWSER: false,
      MOBILE:false, 
      DEBUG: false ,
    },
    'ifdef-option':{verbose: true},
  
  },
  base: './',
  server:{
    proxy:{
      "/stage":{
        target:"http://127.0.0.1:6806/stage",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/stage/, '')
      },
      "/stage/js":{
        target:"http://127.0.0.1:6806/stage/js",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/stage/, '')
      },
      "/widgets":{
        target:"http://127.0.0.1:6806/widgets",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/widgets/, '')
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
      overlay:true
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
