import { styled } from "@/styled-system/jsx";
import { cva } from "@/styled-system/css";

export const card = cva({
	base: {
		rounded: "xl",
		bg: "slate.900",
		borderWidth: 1,
		borderColor: "slate.800",
		p: 4,
		w: "full",
		h: "full",
	},
});

export const Card = styled("div", card);
