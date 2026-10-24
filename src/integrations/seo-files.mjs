
// 构建后自动生成: sitemap.xml (扫dist所有html), llms.txt (从content md的frontmatter生成), robots.txt
// 加case=加md → sitemap和llms.txt自动带上, 无需手动维护
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://what-can-ai-do.pages.dev';

// 简易frontmatter解析(只取title/tagline/lang/task_id/last_tested, 避免引yaml库)
function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.+)$/);
    if (kv) fm[kv[1]] = kv[2].trim().replace(/^"(.*)"$/, '$1');
  }
  return fm;
}

export function seoFiles() {
  return {
    name: 'seo-files',
    hooks: {
      'astro:build:done': ({ dir, pages }) => {
        if (dir instanceof URL) dir = dir.pathname;
        // ---- sitemap.xml: 扫dist里所有index.html (排除根跳转页) ----
        const urls = [];
        const walk = (d) => {
          for (const e of fs.readdirSync(d, { withFileTypes: true })) {
            const p = path.join(d, e.name);
            if (e.isDirectory()) walk(p);
            else if (e.name === 'index.html') {
              let u = path.relative(dir, p).replace(/\\/g, '/').replace(/index\.html$/, '');
              if (u === '') continue; // 根=跳转页, 不进sitemap(x-default)
              urls.push('/' + u);
            }
          }
        };
        walk(dir);
        urls.sort();
        const today = new Date().toISOString().slice(0, 10);
        const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
        // hreflang: 首页三语互指; 详情页只有三语齐的5个slug互指
        const HOME_SET = ['/zh-Hans/', '/zh-Hant/', '/en/'];
        // 动态检测三语齐的slug: 扫content目录(单一事实源=md文件本身)
        const root = process.cwd();
        const slugsIn = (d) => new Set(
          fs.readdirSync(root + '/src/content/tasks/' + d).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3)),
        );
        const zH = slugsIn('zh-hans'), hT = slugsIn('zh-hant'), eN = slugsIn('en');
        const TRIO = new Set([...zH].filter((x) => hT.has(x) && eN.has(x)));
        const altOf = (u) => {
          const m = u.match(/^\/(zh-Hans|zh-Hant|en)\/(?:tasks\/([a-z0-9-]+)\/)?$/);
          if (!m) return '';
          const [, lang, slug] = m;
          const langs = slug ? (TRIO.has(slug) ? ['zh-Hans', 'zh-Hant', 'en'] : [lang]) : ['zh-Hans', 'zh-Hant', 'en'];
          const base = slug ? `/${lang}/tasks/${slug}/` : `/${lang}/`;
          return langs.map((l) => {
            const alt = slug ? `/${l}/tasks/${slug}/` : `/${l}/`;
            return `  <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${alt}"/>`;
          }).join('\n') + `\n  <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${slug ? '/zh-Hans/tasks/' + slug + '/' : '/zh-Hans/'}"/>`;
        };
        const sm = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
          urls.map((u) => {
            const alt = altOf(u);
            return `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${today}</lastmod>\n${alt}\n  </url>`;
          }).join('\n') + '\n</urlset>\n';
        fs.writeFileSync(path.join(dir, 'sitemap.xml'), sm);

        // ---- llms.txt: 从md frontmatter自动生成 ----
        const LANGS = { 'zh-hans': '简体中文', 'zh-hant': '繁體中文（台灣）', 'en': 'English (US)' };
        const secs = {};
        for (const [d, label] of Object.entries(LANGS)) {
          const dd = path.join('src/content/tasks', d);
          if (!fs.existsSync(dd)) continue;
          const items = [];
          for (const f of fs.readdirSync(dd).filter((x) => x.endsWith('.md')).sort()) {
            const fm = parseFrontmatter(fs.readFileSync(path.join(dd, f), 'utf-8'));
            if (!fm || !fm.title) continue;
            const slug = f.replace(/\.md$/, '');
            const lang = d === 'zh-hans' ? 'zh-Hans' : d === 'zh-hant' ? 'zh-Hant' : 'en';
            items.push({ slug, lang, title: fm.title, tagline: fm.tagline || '', tested: fm.last_tested || 'pending' });
          }
          secs[d] = { label, items };
        }
        const total = Object.values(secs).reduce((n, s) => n + s.items.length, 0);
        let out = `# What Can AI Do? — a free, non-commercial manual of ${total} real-life AI use cases\n\n`;
        out += `Free walkthroughs showing what today's consumer AI can actually do, in three languages (Simplified Chinese, Traditional Chinese for Taiwan, English for the US). Every case: what to ask, a copy-paste prompt, and where to be skeptical.\n\n`;
        out += `Honesty note: every case is marked "verified: pending" until a real person re-tests it on a real phone. We do not claim testing we have not done.\n\n`;
        out += `## Pages\n\n`;
        for (const [d, s] of Object.entries(secs)) {
          out += `### ${s.label}\n\n`;
          for (const it of s.items) {
            const url = it.lang === 'zh-Hans' ? `${SITE}/zh-Hans/tasks/${it.slug}/` : `${SITE}/${it.lang === 'zh-Hant' ? 'zh-Hant' : 'en'}/tasks/${it.slug}/`;
            out += `- [${it.title}](${url}): ${it.tagline}${it.tested !== 'pending' ? '' : ' (awaiting real-device verification)'}\n`;
          }
          out += '\n';
        }
        out += `## About\n\n- Home: ${SITE}/zh-Hans/ · ${SITE}/zh-Hant/ · ${SITE}/en/\n- About & submit a case: ${SITE}/zh-Hans/about/\n- Feedback: https://github.com/pracio/what-can-ai-do/issues\n`;
        fs.writeFileSync(path.join(dir, 'llms.txt'), out);

        // ---- llms-full.txt: 全文版, AI爬虫直接读正文 ----
        const slugOf = (lang, slug) => `/${lang === 'zh-Hans' ? 'zh-Hans' : lang}/tasks/${slug}/`;
        let full = `# What Can AI Do? — full text (${total} cases, 3 languages)\n\n`;
        full += `Free, non-commercial manual of real-life AI use cases. Honest about limits; every case pending real-device verification is marked.\n\n`;
        for (const [d, s] of Object.entries(secs)) {
          full += `## ${s.label}\n\n`;
          for (const it of s.items) {
            const mdPath = path.join('src/content/tasks', d, it.slug + '.md');
            let body = '';
            try {
              body = fs.readFileSync(mdPath, 'utf-8').replace(/^[\s\S]*?\n---\n/, ''); // 剥frontmatter
              body = body.replace(/^---[\s\S]*?\n---\n/, ''); // 双保险
            } catch { body = `(see ${SITE}${slugOf(it.lang, it.slug)})`; }
            const url = SITE + slugOf(it.lang, it.slug);
            full += `### ${it.title}\n\nURL: ${url}\n\n${body.trim()}\n\n---\n\n`;
          }
        }
        fs.writeFileSync(path.join(dir, 'llms-full.txt'), full);

        // ---- robots.txt ----
        fs.writeFileSync(path.join(dir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n\n# For AI crawlers\n# llms.txt: ${SITE}/llms.txt\n# llms-full.txt (full text): ${SITE}/llms-full.txt\n`);
        console.log(`seo-files: sitemap.xml (${urls.length} urls), llms.txt (${total} cases), llms-full.txt, robots.txt written`);
      },
    },
  };
}
