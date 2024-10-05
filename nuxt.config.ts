// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-typed-router",
    "@morev/vue-transitions/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-lodash",
  ],
});