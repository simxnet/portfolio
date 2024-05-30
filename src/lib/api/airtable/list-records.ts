import type { FieldSet, Records } from "airtable";
import { ofetch } from "ofetch";

export async function listAirtableProjects() {
	return ofetch<Records<FieldSet>>("/api/projects", { responseType: "json" });
}
