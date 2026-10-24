// 构建后为每篇详情页生成专属 og 分享卡 (1200x630 PNG)
// satori(jsx-object→SVG) + resvg-wasm(SVG→PNG)，纯 Node 无浏览器依赖
// 卡片设计语言与站一致: 深底 + 案例accent色 + 品牌字 + 标题/tagline/语言徽章
import satori from 'satori';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

let wasmReady = false;
async function ensureWasm() {
  if (wasmReady) return;
  await initWasm(readFileSync(process.cwd() + '/node_modules/@resvg/resvg-wasm/index_bg.wasm'));
  wasmReady = true;
}

const LANG_LABEL = { 'zh-Hans': '简体中文', 'zh-Hant': '繁體中文（台灣）', 'en': 'English' };

export async function generateOgCards(tasks, distDir) {
  await ensureWasm();
  const fontData = readFileSync(process.cwd() + '/src/assets/fonts/NotoSansTC.ttf');
  const outDir = path.join(distDir, 'og-cards');
  mkdirSync(outDir, { recursive: true });
  let n = 0;
  for (const t of tasks) {
    try {
      const el = {
        type: 'div', props: {
          style: { width: '1200px', height: '630px', display: 'flex', flexDirection: 'column',
                   justifyContent: 'center', padding: '0 90px', background: '#08080c',
                   fontFamily: 'Noto Sans TC', position: 'relative' },
          children: [
            { type: 'div', props: { style: { position: 'absolute', top: 44, left: 90, display: 'flex', color: 'rgba(255,255,255,.45)', fontSize: 22 }, children: 'What Can AI Do?' } },
            { type: 'div', props: { style: { display: 'flex', color: t.accent, fontSize: 26, marginBottom: 18, fontWeight: 700 }, children: `案例 ${String(t.order).padStart(2, '0')}` } },
            { type: 'div', props: { style: { display: 'flex', color: '#fff', fontSize: 64, fontWeight: 700, lineHeight: 1.25, marginBottom: 24, maxWidth: '1020px' }, children: t.title } },
            { type: 'div', props: { style: { display: 'flex', color: 'rgba(255,255,255,.68)', fontSize: 30, lineHeight: 1.6, maxWidth: '980px' }, children: t.tagline } },
            { type: 'div', props: { style: { position: 'absolute', bottom: 44, left: 90, display: 'flex', padding: '8px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.18)', color: t.accent, fontSize: 22 }, children: LANG_LABEL[t.lang] || '' } },
          ],
        }
      };
      const svg = await satori(el, { width: 1200, height: 630, fonts: [{ name: 'Noto Sans TC', data: fontData, weight: 400 }] });
      const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
      writeFileSync(path.join(outDir, `${t.task_id}.png`), png);
      n++;
    } catch (e) {
      console.warn(`og-card skip ${t.task_id}: ${e.message}`);
    }
  }
  console.log(`seo-files: ${n} og-cards written to /og-cards/`);
}
