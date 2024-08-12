export default defineNuxtConfig({
    modules: ['nuxt-swiper', 'nuxt-aos', '@nuxtjs/tailwindcss', "@nuxt/image"],
    css: ["~/assets/css/main.css"],
    image: {},
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
    app: {
        head: {
            title: 'DotForYou',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Mit Liebe. handgemacht.' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        },

    }
});