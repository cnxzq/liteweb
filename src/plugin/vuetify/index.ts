import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/scss/materialdesignicons.scss'
import type { App } from 'vue'

export const vuetify = createVuetify({
  components,
  directives,
  theme:{
      defaultTheme:"dark",
      themes:{
          dark: {
              dark:true,
            //   colors: {
            //       primary:  `#012243`,
            //       secondary: `#FFCDD2`
            //   }
          }
      }
  }
})

export const setupVuetify = (app:App)=>{
    app.use(vuetify)
} 