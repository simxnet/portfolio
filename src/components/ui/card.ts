import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { Box, styled } from "@/styled-system/jsx";

export const card = cva({
	base: {
		rounded: "xl",
		p: 4,
		bg: {
			base: "bg.800",
			_hover: "bg.700",
		},
		borderWidth: 1,
		borderColor: "bg.600",
		w: "full",
		overflow: "hidden",
		h: "full",
		maxW: {
			lg: "sm",
			base: "full",
		},
		cursor: "pointer",
		transitionDuration: "fast",
	},
});

export type CardVariants = RecipeVariantProps<typeof card>;

export const Card = styled(Box, card);
