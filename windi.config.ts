import { defineConfig } from "windicss/helpers";
// import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
	extract: {
		include: ["src/**/*.{vue,html,jsx,tsx}"],
		exclude: ["node_modules", ".git"],
	},
	alias: {},
	shortcuts: {
		"center-items": "flex justify-center items-center",
	},
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	// plugins: [formsPlugin],
});
