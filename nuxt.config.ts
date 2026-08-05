// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'دیدرس | اشتراک گذاری تجربه‌ها', // default fallback title
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl' // right-to-left direction for Persian language
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ]
    },
    baseURL: '/'
  },
  site: { indexable: false },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/hints', '@nuxt/image', '@nuxt/test-utils', '@nuxtjs/tailwindcss', '@nuxtjs/device'],
  css: [
    "~/assets/css/main.css"
  ],
})