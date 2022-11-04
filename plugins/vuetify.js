import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
        dark: true,
        themes: {
          dark: {
            primary: '#8bacda',
            cyan: '#2f415b',
            darkBlue1: '#0d192b',
            darkBlue2: '#14253d',
            darkBlue3: '#2f415b',
          },
        },
      },
  })

  nuxtApp.vueApp.use(vuetify)
})
