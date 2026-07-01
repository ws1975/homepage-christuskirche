import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string().optional(),
    heroTag: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    order: z.number().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    location: z.string(),
    category: z.enum([
      "Gottesdienst",
      "Gemeindeleben",
      "Kinder",
      "Jugend",
      "Musik",
      "Seelsorge",
      "Besonderes",
    ]),
    featured: z.boolean().default(false),
    demo: z.boolean().default(false),
    draft: z.boolean().default(false),
    livestream: z.boolean().default(false),
    registration: z.string().optional(),
    audience: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { pages, events };
