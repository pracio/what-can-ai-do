import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tasks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/tasks' }),
  schema: z.object({
    task_id: z.string(),
    lang: z.string().default('zh-Hans'),
    indices: z.object({
      prompt: z.number(),
      hassle: z.number(),
      risk: z.number(),
    }),
    paths: z.array(z.object({
      tier: z.string(),
      tool: z.string(),
      region: z.string(),
      verified: z.union([z.string(), z.boolean()]).optional(),
    })).default([]),
    domains: z.array(z.string()).default([]),
    type: z.string().default('chat'),
    last_tested: z.union([z.string(), z.null()]).optional(),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { tasks };
