// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'australia-southeast1',
        maxInstances: 3,
      },
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kranky&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap&subset=latin' },
      ],
      meta: [
        // { hid: 'og:image', property: 'og:image', content: (process.env.BASE_URL || 'https://kronos-front.web.app/') + 'img/OGimage.jpg' },
      ],
      titleTemplate: `%s %separator %siteName`,
      templateParams: {
        siteName: `717's Protfolio 2024`,
        separator: '(⁰▿⁰)',
      },
    },
    pageTransition: { name: 'slide', mode: 'out-in' }
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    gaSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      imgBase: '/temp/img'
    }
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  modules:[
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/device',
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    // hid: 'nuxt-color-mode-script',
    // globalName: '__NUXT_COLOR_MODE__',
    // componentName: 'ColorScheme',
    // classPrefix: '',
    // classSuffix: '-mode',
    // storageKey: 'nuxt-color-mode'
  }

})
