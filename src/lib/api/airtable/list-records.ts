import type { FieldSet, Records } from "airtable";
import { ofetch } from "ofetch";

export interface AirtableProject {
	id: string;
	fields: {
		Logo: string;
		Description: string;
		Name: string;
		Language: string;
	};
}

export async function listAirtableProjects() {
	return ofetch<AirtableProject[]>("/api/projects", { responseType: "json" });
}
