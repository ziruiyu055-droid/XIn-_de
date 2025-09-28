import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/XIn-_de/',   // 👈 这里很关键，告诉 Vite 你的项目部署在这个子路径下
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // 保持你之前的 glb 配置
})
