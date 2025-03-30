import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    template: z.enum(["post", "feature"]).default("post"), // Layouts als Enum
  }),
});

const blogDe = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/de/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    template: z.enum(["post", "feature"]).default("post"), // Layouts als Enum
  }),
});

export const collections = { blog, blogDe };
