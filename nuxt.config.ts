export default defineNuxtConfig({
    modules: ['nuxt-swiper', 'nuxt-aos', '@nuxtjs/tailwindcss', "@nuxt/image"],
    ssr: true,
    css: ["~/assets/css/main.css"],
    image: { format: ['webp']},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    tailwindcss: {
        viewer: true
    },
    compatibilityDate: '2024-08-10',
});