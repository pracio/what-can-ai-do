import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const taskSchema = z.object({
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
});

// 三语各一个 collection，目录即语言。zh-hans 的 slug 不带前缀（URL 向后兼容 /tasks/x/）
const tasks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/tasks/zh-hans' }),
  schema: taskSchema,
});
const tasksZhHant = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/tasks/zh-hant' }),
  schema: taskSchema,
});
const tasksEn = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/tasks/en' }),
  schema: taskSchema,
});

export const collections = { tasks, tasksZhHant, tasksEn };
