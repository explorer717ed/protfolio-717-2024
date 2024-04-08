// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kranky&display=swap&text=717' },
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
  css: ['~/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }

})
