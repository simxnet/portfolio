import Projects from "@/components/modules/projects";
import Spotify from "@/components/modules/spotify";
import Status from "@/components/modules/status";
import { css } from "@/styled-system/css";
import { Flex, Grid } from "@/styled-system/jsx";

export default function Home() {
	return (
		<Flex flexDirection="column" gap={4} mb={5}>
			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Flex flexDirection="column">
					<h1 className={css({ fontSize: "4xl" })}>
						I am <span className={css({ color: "primary" })}>Simxnet</span>
					</h1>
					<p className={css({ fontSize: "sm", fontWeight: 400 })}>
						Software developer from Berlin, living in Spain.
					</p>
				</Flex>
				<img
					src={"/avatar.gif"}
					alt="avatar"
					className={css({ w: "200px", h: "200px", rounded: "full" })}
				/>
			</Flex>
			<Flex flexDir={"column"} gap={2}>
				<h1 className={css({ fontSize: "2xl" })}>My status</h1>
				<Flex w={"full"} gap={4}>
					<Status />
					<Spotify />
				</Flex>
			</Flex>
			<Flex flexDir={"column"} gap={2}>
				<h1 className={css({ fontSize: "2xl" })}>Featured projects</h1>
				<Grid gridTemplateColumns={2} gap={4}>
					<Projects />
				</Grid>
			</Flex>
		</Flex>
	);
}
