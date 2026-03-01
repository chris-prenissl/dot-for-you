import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				light_white: "var(--color-light_white)",
				primary: "var(--color-primary)",
				logo_text: "var(--color-logo_text)",
				text_default: "var(--color-text_default)",
				text_on_primary: "var(--color-text_on_primary)",
			},
			fontFamily: {
				sans: ["Noto Sans", "sans-serif"],
				weight: ["100", "200"],
			},
		},
	},
};
