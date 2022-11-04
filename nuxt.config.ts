// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   app:{
    head:{
        title: 'NFT Preview Card'
    }
   },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
