/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: ["dracula", "lofi"],
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
			},
			fontSize: {
				sm: "0.8rem",
				base: "1rem",
				xl: "1.25rem",
				"2xl": "1.563rem",
				"3xl": "1.953rem",
				"4xl": "2.441rem",
				"5xl": "3.052rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
