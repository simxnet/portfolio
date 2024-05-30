"use client";

import { getCodeStatus } from "@/lib/api/lanyard/get-discord-status";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { Card } from "../ui/card";
import { Flex } from "@/styled-system/jsx";
import { getLanyardAsset } from "@/lib/util";
import { css } from "@/styled-system/css";

export default function Status() {
	const { data, isLoading } = useQuery({
		queryKey: ["status"],
		queryFn: async () => await getCodeStatus(),
	});

	if (isLoading && !data) return <Skeleton />;

	return (
		<Card>
			<Flex gap={5} alignItems={"center"}>
				<img
					src={
						data?.assets?.large_image
							? getLanyardAsset(data?.assets?.large_image)
							: "https://github.com/leonardssh/vscord/blob/main/assets/icons/vscode.png?raw=true"
					}
					alt=""
					width={64}
					height={64}
					className={css({
						rounded: "xl",
						filter: `grayscale(${data?.assets?.large_image ? 0 : 100}%)`,
					})}
				/>
				<Flex flexDir={"column"}>
					<h3 className={css({ fontSize: "lg" })}>
						{data?.details ?? "Not working atm"}
					</h3>
					<p className={css({ fontWeight: 400 })}>{data?.state ?? ""}</p>
				</Flex>
			</Flex>
		</Card>
	);
}
