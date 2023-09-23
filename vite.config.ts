import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),UnoCSS()],
  resolve: {
    alias: {
      '@': resolve('./src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build:{
    outDir:"docs"
  }
})
