import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:{
      '@':'/src',
    }
  },
  base: './', // 设置资源路径
  server: {
    port: 8080, // 设置开发服务器端口
  },
  build: {
    outDir: 'dist', // 构建输出目录
  },  
})
