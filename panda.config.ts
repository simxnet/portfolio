import { defineConfig } from "@pandacss/dev";
import { getColors } from "theme-colors";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					primary: {
						value: "#1f9f6b",
					},
				},
			},
		},
	},

	// Global css
	globalCss: {
		body: {
			bg: { base: "slate.950" },
			color: { base: "slate.50" },
			fontWeight: 700,
			mx: "auto",
			maxWidth: "900px",
			paddingTop: "3em",
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",
	jsxFramework: "react",
	prefix: "s",
});
