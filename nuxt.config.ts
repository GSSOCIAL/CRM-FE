// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/style/main.scss'],
  ssr: false,
  target: 'static',
  modules:[
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
  devServer: {
    //https: true,
    disableHostCheck: true,
    https: {
      key: 'localhost.key',
      cert: 'localhost.crt'
    }
  },
})
