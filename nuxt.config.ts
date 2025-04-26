// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt configuration
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-03-26',
  typescript: {
    typeCheck: true,
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  // Misc
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#ff6467' },
      ],
    },
  },

  // Modules list
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxthub/core', 'nuxt-auth-utils', '@nuxtjs/seo', '@nuxt/test-utils/module', 'nuxt-maplibre'],

  // Module related configuration
  eslint: {
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: true },

  hub: {
    database: true,
  },

  site: {
    name: 'nMaps',
    description: 'An open-source way to display your Notion database data on an interactive world map.',
    defaultLocale: 'en',
  },
})
