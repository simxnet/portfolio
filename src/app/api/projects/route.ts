import { portfolio } from "@/lib/api/airtable";

export async function GET() {
	return Response.json(
		await portfolio("Projects")
			.select({ maxRecords: 10, view: "Grid view" })
			.firstPage(),
	);
}
