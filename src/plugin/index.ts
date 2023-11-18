import type { App } from 'vue'
import {setupVuetify} from './vuetify'
import 'css-doodle'

export const setupDoodlePlugin = (app:App)=>{
    app.config.compilerOptions.isCustomElement = (tag) => {
        return tag.startsWith('ion-')
    }
}

export const setupAllPlugin = (app:App)=>{
    setupVuetify(app);
    //setupDoodlePlugin(app);
}

export const install = (app:App)=>{
    setupAllPlugin(app)
}

export default {
    setupVuetify,
    setupAllPlugin,
    install
}