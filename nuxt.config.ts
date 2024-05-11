// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  plugins: [
    '~/plugins/vuetify.ts'
    
  ],
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["vitest/globals"] // globalsのTypeScriptサポート
      }
    }
  },
  modules: [
    '@nuxt/test-utils/module',
    async (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  testUtils: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
