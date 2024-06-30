import Projects from "@/components/modules/projects";
import Status from "@/components/modules/status";
import { LinkButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Span } from "@/components/ui/span";
import { Text } from "@/components/ui/text";
import { getAirtableProjects } from "@/lib/airtable/api";
import {
	getCodeStatus,
	getDiscordStatus,
	getSpotifyStatus,
} from "@/lib/lanyard/api";
import { HStack, VStack } from "@/styled-system/jsx";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default async function Page() {
	const {
		data: { discord_user: user },
	} = await getDiscordStatus();

	const projects = await getAirtableProjects();
	const spotify = await getSpotifyStatus();
	const code = await getCodeStatus();

	return (
		<VStack alignItems={"start"} gap={12}>
			<VStack alignItems={"start"}>
				<Heading size="3xl">Hello, I'm {user.username}</Heading>
				<Text>
					Software developer from Germany, Apex Legends player, focused on
					bringing great UI/UX, learning <Span color="red.400">Rust</Span>
				</Text>
				<Status spotify={spotify} code={code} />
				<HStack>
					<LinkButton
						target="_blank"
						referrerPolicy="no-referrer"
						href="https://github.com/simxnet"
						color="gray"
						size="sm"
					>
						GitHub
					</LinkButton>
					<LinkButton
						target="_blank"
						referrerPolicy="no-referrer"
						href={`https://discord.com/users/${process.env.NEXT_PUBLIC_USER_ID}`}
						color="gray"
						size="sm"
					>
						Discord
					</LinkButton>
				</HStack>
			</VStack>
			<Projects projects={projects} />
		</VStack>
	);
}
