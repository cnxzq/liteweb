import type { App } from 'vue'
import {setupVuetify} from './vuetify'

export const setupAllPlugin = (app:App)=>{
    setupVuetify(app)
}

export const install = (app:App)=>{
    setupAllPlugin(app)
}

export default {
    setupVuetify,
    setupAllPlugin,
    install
}