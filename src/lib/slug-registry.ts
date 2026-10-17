// slug 注册表：三语案例 slug 池的单一事实源
// 各语言选题独立（繁中/EN 不是简中的翻译子集），slug 可能只有部分语言存在。
// trioSlugs = 三种语言都有的 slug（仅这些做 hreflang 互指）。
// 加/删 md 自动生效，无需手工维护清单。

const globs = import.meta.glob('/src/content/tasks/*/*.md', { eager: false });

function slugsOf(dirRe: RegExp): Set<string> {
  const out = new Set<string>();
  for (const p of Object.keys(globs)) {
    const m = p.match(dirRe);
    if (m) out.add(m[1]);
  }
  return out;
}

export const zhHansSlugs = slugsOf(/\/tasks\/zh-hans\/([^/]+)\.md$/);
export const zhHantSlugs = slugsOf(/\/tasks\/zh-hant\/([^/]+)\.md$/);
export const enSlugs = slugsOf(/\/tasks\/en\/([^/]+)\.md$/);

export function trioSlugs(): string[] {
  return [...zhHansSlugs].filter((s) => zhHantSlugs.has(s) && enSlugs.has(s)).sort();
}
