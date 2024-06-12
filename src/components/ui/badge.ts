import { styled } from "@/styled-system/jsx";
import { cva, type RecipeVariantProps } from "@/styled-system/css";

export const badge = cva({
	base: {
		fontWeight: "medium",
		borderRadius: "md",
		px: 2,
	},
	variants: {
		language: {
			rust: {
				color: "ButtonText",
				bg: "red.500",
			},
			typescript: {
				color: "ButtonText",
				bg: "blue.500",
			},
			javascript: {
				color: "ButtonText",
				bg: "yellow.500",
			},
			lua: {
				color: "ButtonText",
				bg: "purple.500",
			},
		},
	},
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;

export const Badge = styled("span", badge);
