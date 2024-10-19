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
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxtjs/supabase",
    "dayjs-nuxt",
    "@pinia/nuxt",
  ],
  image: {
    provider: "ipx",
    domains: ["image.tmdb.org"],
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    staticFilename: "[name]-[hash][ext]",
  },
});
