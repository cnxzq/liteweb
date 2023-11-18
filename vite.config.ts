import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => {
          return tag === 'css-doodle'
          // tag.includes('-')
        }
      }
    }
  }),UnoCSS()],
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
