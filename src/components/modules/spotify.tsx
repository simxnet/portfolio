"use client";

import {
	getDiscordStatus,
	getSpotifyStatus,
} from "@/lib/api/lanyard/get-discord-status";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { Card } from "../ui/card";
import { Flex } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";

export default function Spotify() {
	const { data, isLoading } = useQuery({
		queryKey: ["spotify"],
		queryFn: async () => await getSpotifyStatus(),
	});

	if (isLoading && !data) return <Skeleton />;

	return (
		<Card>
			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Flex gap={5} alignItems={"center"}>
					<img
						src={
							data?.album_art_url ??
							"https://static-00.iconduck.com/assets.00/spotify-icon-256x256-v9xrqvy6.png"
						}
						alt=""
						width={64}
						height={64}
						className={css({
							rounded: "xl",
							filter: `grayscale(${data ? 0 : 100}%)`,
						})}
					/>
					<Flex flexDir={"column"}>
						<h3 className={css({ fontSize: "lg", lineClamp: 1 })}>
							{data?.song ?? "Not listening to Spotify"}
						</h3>
						<p className={css({ fontWeight: 400, lineClamp: 1 })}>
							{data?.artist ?? ""}
						</p>
					</Flex>
				</Flex>
				<img
					width={29}
					height={29}
					src={
						data?.album_art_url ??
						"https://static-00.iconduck.com/assets.00/spotify-icon-256x256-v9xrqvy6.png"
					}
					alt=""
					className={css({
						animation: "spin 3s linear infinite",
						rounded: "full",
					})}
				/>
			</Flex>
		</Card>
	);
}
