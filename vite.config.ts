import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src'),
    }
  },
  base: './', // 设置资源路径
  server: {
    port: 8080, // 设置开发服务器端口
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist', // 构建输出目录
  },  
})
