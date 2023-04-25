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
        { src: 'https://kit.fontawesome.com/23761b7654.js', crossorigin: 'anonymous' },
        { src: 'js/script.js', body: true },
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js'},
      ],
      title: 'Portfolio TobogganDev',
    }
  },
  build: {
    transpile: ['gsap'],
  }
})
