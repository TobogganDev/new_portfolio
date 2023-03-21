// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/main.scss'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      script: [
        { src: 'https://kit.fontawesome.com/23761b7654.js', crossorigin: 'anonymous' }
      ],
      title: 'Portfolio TobogganDev',
    }
  }
})
