import { defineConfig } from "@pandacss/dev";
import { getColors } from "theme-colors";

const primaryColors = getColors("#0165d7");
const backgroundColors = getColors("#011627");

function generateColorTokens(colors: Record<string, string>) {
	return Object.entries(colors).reduce(
		(acc: Record<string, { value: string }>, [key, value]) => {
			acc[key] = { value };
			return acc;
		},
		{},
	);
}

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
					brand: generateColorTokens(primaryColors),
					bg: generateColorTokens(backgroundColors),
				},
			},
		},
	},

	// Global css
	globalCss: {
		extend: {
			body: {
				bg: "bg.950",
				color: "bg.50",
			},
		},
	},

	prefix: "simxnet",

	// The output directory for your css system
	outdir: "src/styled-system",
	jsxFramework: "react",
});
