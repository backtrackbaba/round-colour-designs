import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(), category: z.enum(['Residential','Commercial','Hospitality','Bungalow & Villa','Farmhouse']),
    location: z.string(), area: z.string(), year: z.number(), featured: z.boolean().default(false),
    summary: z.string(), cover: image(), services: z.array(z.string()), placeholder: z.boolean().default(true),
  }),
});
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({ title:z.string(), shortTitle:z.string(), order:z.number(), summary:z.string(), image:z.string(), features:z.array(z.string()) })
});
const testimonials = defineCollection({ loader: glob({pattern:'**/*.json',base:'./src/content/testimonials'}), schema:z.object({quote:z.string(),name:z.string(),project:z.string(),placeholder:z.boolean().default(true)}) });
const faqs = defineCollection({ loader: glob({pattern:'**/*.json',base:'./src/content/faqs'}), schema:z.object({question:z.string(),answer:z.string(),order:z.number(),pages:z.array(z.string())}) });
const journal = defineCollection({ loader: glob({pattern:'**/*.{md,mdx}',base:'./src/content/journal'}), schema:z.object({title:z.string(),description:z.string(),publishedAt:z.coerce.date(),draft:z.boolean().default(true)}) });
export const collections = { projects, services, testimonials, faqs, journal };
