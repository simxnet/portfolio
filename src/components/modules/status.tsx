import type { LanyardResponse } from "@/lib/lanyard/lanyard";
import { HStack, VStack } from "@/styled-system/jsx";
import { Span } from "../ui/span";
import { Text } from "../ui/text";
import Image from "next/image";

export default function Status({
	spotify,
	code,
}: {
	spotify: LanyardResponse["data"]["spotify"];
	code: LanyardResponse["data"]["activities"][0] | undefined;
}) {
	return (
		<VStack alignItems={"start"}>
			<HStack>
				<Image
					draggable={false}
					src="/spotify.png"
					alt="Spotify"
					width={24}
					height={24}
				/>
				{spotify ? (
					<Text>
						Listening to{" "}
						<Span fontWeight={"bold"} color="white">
							{spotify.song} · {spotify.artist}
						</Span>
					</Text>
				) : (
					"Not listening to anything"
				)}
			</HStack>
			<HStack>
				<Image
					draggable={false}
					src="/vscode.png"
					alt="Vscode"
					width={24}
					height={24}
				/>
				{code ? (
					<Text>
						Working on{" "}
						<Span fontWeight={"bold"} color="white">
							{code.state}
						</Span>
					</Text>
				) : (
					"Not working"
				)}
			</HStack>
		</VStack>
	);
}
