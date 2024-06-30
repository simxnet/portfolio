import { css } from "@/styled-system/css";
import { Box, Container, Flex } from "@/styled-system/jsx";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Heading } from "../ui/heading";

export default function Header() {
	return (
		<Box p={4}>
			<header
				className={css({
					top: 0,
					position: "sticky",
					bg: "bg.800",
					w: "full",
					py: 4,
					borderBottom: 2,
					rounded: "full",
					borderColor: "bg.500",
				})}
			>
				<Container w={"full"}>
					<Flex justifyContent={"space-between"} alignItems={"center"}>
						<Heading>simxnet</Heading>
						<Link
							href="https://github.com/simxnet/portfolio"
							target="_blank"
							referrerPolicy="no-referrer"
						>
							<IconBrandGithubFilled />
						</Link>
					</Flex>
				</Container>
			</header>
		</Box>
	);
}
