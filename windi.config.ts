import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
	extract: {
		include: ["src/**/*.{vue,html,jsx,tsx}"],
		exclude: ["node_modules", ".git"],
	},
	alias: {},
	shortcuts: {
		"center-items": "flex justify-center items-center",
		// bg-emerald-500
		"app-bg-main": "dark:bg-gray-900 rounded-md",
		bodyBg: "text-slate-900 dark:bg-slate-700 dark:text-light-900 ",
	},
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [formsPlugin],
});
