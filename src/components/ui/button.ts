import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import Link from "next/link";

export const button = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		borderRadius: "lg",
		cursor: "pointer",
		transitionDuration: "slow",
		fontWeight: 500,
		w: "fit",
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
		userSelect: "none",
	},
	variants: {
		color: {
			primary: {
				bg: {
					base: "brand.500",
					_hover: "brand.600",
					_active: "brand.700",
				},
				color: "ButtonText",
			},
			gray: {
				bg: {
					base: "bg.800",
					_hover: "bg.700",
					_active: "bg.600",
				},
				color: "bg.200",
			},
		},
		size: {
			sm: {
				h: 9,
				px: 4,
				py: 2,
			},
			md: {
				h: 10,
				px: 5,
				py: 2,
			},
			lg: {
				h: 11,
				px: 6,
				py: 4,
			},
		},
	},
	defaultVariants: {
		color: "primary",
		size: "md",
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

export const Button = styled("button", button);
export const LinkButton = styled(Link, button);
