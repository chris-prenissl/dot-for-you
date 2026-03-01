export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"nuxt-swiper",
		"@nuxtjs/sanity",
	],
	devtools: { enabled: true },
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	sanity: {
		projectId: process.env.SANITY_STUDIO_PROJECT_ID,
		dataset: "production",
		apiVersion: "2024-03-01",
	},
	tailwindcss: {
		editorSupport: true,
		cssPath: ["app/assets/css/tailwind.css", { injectPosition: "first" }],
	},
});
