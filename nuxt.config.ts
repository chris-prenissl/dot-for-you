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
            title: 'DotForYou - Handmade Kunst für Deko und Geschenke',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Willkommen bei DotForYou - bei mir findest du kreative und handgemachte Schätze zu vielen Anlässen.' },
                { property: 'og:title', content: 'DotForYou - Handmade' },
                { property: 'og:url', content: 'https://dotforyou.de/' },
                { property: 'og:description', content: 'Kreative und handgemachte Schätze zu vielen Anlässen' },
                { property: 'og:image', content: 'https://dotforyou.de/webpage.jpeg' },
                { property: 'og:type', content: 'website' },
                { property: 'og:locale', content: 'de_DE' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/icon.png' },
                { rel: 'apple-touch-icon', type: 'image/png', href: '/icon.png' },
                { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' },
            ],
        },
    }
});