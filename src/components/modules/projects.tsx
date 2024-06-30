import type { AirtableProject } from "@/lib/airtable/api";
import { Grid, GridItem, HStack, VStack } from "@/styled-system/jsx";
import { Heading } from "../ui/heading";
import { Card } from "../ui/card";
import { Text } from "../ui/text";
import Image from "next/image";
import { css } from "@/styled-system/css";
import { Badge } from "../ui/badge";
import Link from "next/link";
import {
	IconBrandRust,
	IconBrandTypescript,
	IconMoonFilled,
} from "@tabler/icons-react";
import type { ReactNode } from "react";

const langColors: Record<
	string,
	"red" | "blue" | "green" | "purple" | "primary"
> = {
	Rust: "red",
	TypeScript: "blue",
	Lua: "purple",
};

const langIcons: Record<string, ReactNode> = {
	Rust: <IconBrandRust />,
	TypeScript: <IconBrandTypescript />,
	Lua: <IconMoonFilled />,
};

export default function Projects({
	projects,
}: { projects: AirtableProject[] }) {
	const projectList = projects.map((project) => (
		<GridItem key={project.id}>
			<Link href={project.fields.href ?? "#"}>
				<Card>
					<HStack w="full" gap={3}>
						<Image
							alt={project.fields.name}
							src={project.fields.logo}
							width={150}
							height={150}
							className={css({ w: "16", h: "16", rounded: "lg" })}
						/>
						<VStack alignItems={"start"} gap={1}>
							<Heading size="lg">{project.fields.name}</Heading>
							<Text size="xs">{project.fields.desc}</Text>
						</VStack>
						<Badge color={langColors[project.fields.lang]} ml="auto">
							{project.fields.lang} {langIcons[project.fields.lang]}
						</Badge>
					</HStack>
				</Card>
			</Link>
		</GridItem>
	));

	return (
		<VStack alignItems={"start"} w="full">
			<Heading>Projects</Heading>
			<Grid w="full" gridTemplateColumns={{ lg: 2, base: 1 }}>
				{projectList}
			</Grid>
		</VStack>
	);
}
