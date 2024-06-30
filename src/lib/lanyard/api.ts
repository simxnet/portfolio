import { type LanyardResponse, lanyard } from "./lanyard";

export async function getDiscordStatus(): Promise<LanyardResponse> {
	return lanyard<LanyardResponse>(`/users/${process.env.NEXT_PUBLIC_USER_ID}`);
}

export async function getCodeStatus(): Promise<
	LanyardResponse["data"]["activities"][number] | undefined
> {
	const { data } = await getDiscordStatus();

	return data.activities.find((a) => a.name === "Code") ?? undefined;
}

export async function getSpotifyStatus(): Promise<
	LanyardResponse["data"]["spotify"]
> {
	const { data } = await getDiscordStatus();

	return data.spotify ?? undefined;
}
