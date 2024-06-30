import { portfolio } from "./airtable";

export interface AirtableProject {
	id: string;
	fields: {
		logo: string;
		desc: string;
		name: string;
		lang: string;
		href: string;
	};
}

export async function getAirtableProjects(): Promise<AirtableProject[]> {
	return portfolio("Projects")
		.select({ maxRecords: 10, view: "Grid view" })
		.firstPage() as unknown as Promise<AirtableProject[]>;
}
