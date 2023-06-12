// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    'ant-design-vue/dist/antd.css',
  ],
  vite: {
    ssr: {
      noExternal: ['ant-design-vue',],
    },  
  },
})
