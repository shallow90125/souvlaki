import { defineCollection, z } from 'astro:content';

const works = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		image: z.string()
	})
});

export const collections = { works };
