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
		"app-bg-main":
			"bg-emerald-500 dark:bg-dark-500 dark:text-white rounded-md",
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
