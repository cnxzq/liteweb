import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import App from './App.vue'
import router from '@/router'
import plugins from '@/plugin'

createApp(App)
.use(plugins)
.use(router)
.mount('#app')
