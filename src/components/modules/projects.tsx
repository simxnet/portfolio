"use client";

import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { listAirtableProjects } from "@/lib/api/airtable/list-records";
import { Flex } from "@/styled-system/jsx";
import { Card } from "../ui/card";
import { css } from "@/styled-system/css";
import { Badge } from "../ui/badge";

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
						src={
							(pr.fields.Logo as unknown as { url: string }[])[0].url as string
						}
						alt=""
						className={css({
							rounded: "xl",
							maxW: "70px",
							maxH: "70px",
							w: "full",
						})}
					/>
					<Flex flexDir={"column"}>
						<h3 className={css({ fontSize: "lg" })}>
							{pr.fields.Name as string}
						</h3>
						<p className={css({ fontWeight: 400, fontSize: "sm" })}>
							{pr.fields.Description as string}
						</p>
					</Flex>
				</Flex>
				<Badge
					status={
						(pr.fields.Status as string).toLowerCase() as
							| "done"
							| "beta"
							| "sunsetted"
					}
				>
					{pr.fields.Status as string}
				</Badge>
			</Flex>
		</Card>
	));

	return projectCards;
}
