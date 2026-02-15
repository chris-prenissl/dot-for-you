import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				light_white: "#f9f9f9",
				primary: "#f7d3df",
				logo_text: "#edb9c0",
				text_default: "#575656",
				text_on_primary: "#333333",
			},
			fontFamily: {
				sans: ["Noto Sans", "sans-serif"],
				weight: ["100", "200"],
			},
		},
	},
};
