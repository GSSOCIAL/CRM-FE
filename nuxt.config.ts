// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.scss"],
  ssr: false,
  target: "static",
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  pinia: {
    storesDirs: ["./store/**"],
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  components: {
    global: true,
    dirs: ['~/components', '~/custom/components']
  },
  devServer: {
    //https: true,
    disableHostCheck: true,
    https: {
      key: "localhost.key",
      cert: "localhost.crt",
    },
  },
});
