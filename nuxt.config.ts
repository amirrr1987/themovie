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
  image: {
    // Set provider to IPX or another image provider
    provider: "ipx", // This uses the default IPX provider for local image optimization
    domains: ["image.tmdb.org"], // Add external domains like the one you are using
    screens: {
      // Define image sizes for responsive handling
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // Disable static images in case Netlify has trouble processing them
    staticFilename: "[name]-[hash][ext]",
  },
});