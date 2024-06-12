"use client";

import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { listAirtableProjects } from "@/lib/api/airtable/list-records";
import { Flex } from "@/styled-system/jsx";
import { Card } from "../ui/card";
import { css } from "@/styled-system/css";
import { Badge, type BadgeVariants } from "../ui/badge";

export default function Projects() {
	const { data, isLoading } = useQuery({
		queryKey: ["airtable#projects"],
		queryFn: async () => await listAirtableProjects(),
	});

	if (isLoading) return [...Array(5)].map((_) => <Skeleton key={_} />);
	if (!data) return "No projects";

	const projectCards = data.map((pr) => (
		<Card maxW={"md"} key={pr.id}>
			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Flex gap={5} alignItems={"center"}>
					<img
						src={pr.fields.Logo}
						alt=""
						className={css({
							rounded: "xl",
							maxW: "70px",
							maxH: "70px",
							w: "full",
						})}
					/>
					<Flex flexDir={"column"}>
						<h3 className={css({ fontSize: "lg" })}>{pr.fields.Name}</h3>
						<p className={css({ fontWeight: 400, fontSize: "sm" })}>
							{pr.fields.Description}
						</p>
					</Flex>
				</Flex>
				<Badge
					language={
						pr.fields.Language.toLowerCase() as NonNullable<BadgeVariants>["language"]
					}
				>
					{pr.fields.Language}
				</Badge>
			</Flex>
		</Card>
	));

	return projectCards;
}
