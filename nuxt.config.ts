// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [],
  ssr: false,
  target: "static",
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "vertex-admin"],

  pinia: {
    storesDirs: ["./store/**"],
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  components: {
    global: true,
    dirs: ["~/components", "~/custom/components"],
  },

  devServer: {
    https: {
      key: "localhost-key.pem",
      cert: "localhost.pem",
    },
  },

  compatibilityDate: "2025-01-12",
});
