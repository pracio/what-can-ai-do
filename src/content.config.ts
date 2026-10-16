import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stepSchema = z.object({
  n: z.string(),
  text: z.string(),
  prompt: z.string().optional(),
});

const taskSchema = z.object({
  task_id: z.string(),
  lang: z.string().default('zh-Hans'),
  // 详情页指数(数字刻度)
  indices: z.object({ prompt: z.number(), hassle: z.number(), risk: z.number() }),
  indicesText: z.object({ prompt: z.string(), hassle: z.string(), risk: z.string() }).optional(),
  // 首页横滑卡数据
  title: z.string().optional(),
  tagline: z.string().optional(),
  accent: z.string().optional(),
  accent2: z.string().optional(),
  icon: z.string().optional(),
  order: z.number().optional(),
  steps: z.array(stepSchema).optional(),
  paths: z.array(z.object({
    tier: z.string(), tool: z.string(), region: z.string().optional(),
    verified: z.string().optional(),
  })).default([]),
  domains: z.array(z.string()).default([]),
  type: z.string().default('chat'),
  last_tested: z.string().default('pending'),
  related: z.array(z.string()).default([]),
});

const tasks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tasks/zh-hans' }),
  schema: taskSchema,
});
const tasksEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tasks/en' }),
  schema: taskSchema,
});
const tasksZhHant = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tasks/zh-hant' }),
  schema: taskSchema,
});

export const collections = { tasks, tasksEn, tasksZhHant };
