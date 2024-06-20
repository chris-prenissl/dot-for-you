export default defineNuxtConfig({
  modules: ['nuxt-swiper', 'nuxt-aos', '@nuxtjs/tailwindcss'],
  ssr: true,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    viewer: true
  }
});