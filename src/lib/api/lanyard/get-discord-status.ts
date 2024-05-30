import { lanyard, type LanyardResponse } from ".";

export async function getDiscordStatus() {
	return lanyard<LanyardResponse>(`/users/${process.env.NEXT_PUBLIC_USER_ID}`);
}

export async function getCodeStatus() {
	const { data } = await getDiscordStatus();

	return data.activities.find((a) => a.name === "Code") ?? undefined;
}

export async function getSpotifyStatus() {
	const { data } = await getDiscordStatus();

	return data.spotify ?? undefined;
}
