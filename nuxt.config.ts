// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    async (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass'],
  srcDir: 'src/',
  // vuetifyの設定
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-11-01',
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
