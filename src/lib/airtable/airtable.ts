import Airtable from "airtable";

export const airtable = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
});

export const portfolio = airtable.base(
	process.env.NEXT_PUBLIC_AIRTABLE_ID as string,
);
