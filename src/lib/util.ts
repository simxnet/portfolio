export function getLanyardAsset(input: string): string {
	const parts = input.split("/");
	const urlStartIndex = parts.indexOf("https");
	const url = `https://${parts.slice(urlStartIndex + 1).join("/")}`;

	return url;
}
