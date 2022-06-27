import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    outDir:"f:/siyuan/data/widgets/vitetest",
    assetsDir:'./src',
    emptyOutDir:true
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
        target:"http://localhost/:80/api",
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
    }
  }
})
