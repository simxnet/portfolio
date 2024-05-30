import { styled } from "@/styled-system/jsx";
import { cva } from "@/styled-system/css";

export const badge = cva({
	base: {
		fontWeight: "medium",
		borderRadius: "md",
		px: 2,
	},
	variants: {
		status: {
			done: {
				color: "ButtonText",
				bg: "green.500",
			},
			beta: {
				color: "ButtonText",
				bg: "amber.500",
			},
			sunsetted: {
				color: "ButtonText",
				bg: "red.500",
			},
		},
	},
});

export const Badge = styled("span", badge);
