import { styled } from "@/styled-system/jsx";
import { cva } from "@/styled-system/css";

export const skeleton = cva({
	base: {
		rounded: "xl",
		bg: "slate.800",
		animation: "pulse 1s ease-in-out infinite",
		w: "full",
		h: "full",
	},
});

export const Skeleton = styled("div", skeleton);
