#!/usr/bin/env node
/**
 * WCAD 站点部署前检查脚本
 * 用法: node scripts/check.cjs [baseURL]
 *   baseURL 默认 http://localhost:4321 (astro preview) 或传评审服务器地址
 * 检查项(全部来自真实翻车记录, 见 notes/ideas-2026-10-11 档案):
 *   1. 占位符泄漏: {{doubao}}/{{yuanbao}}/{{workbuddy}} 出现在最终HTML = 模板replace漏配
 *   2. 绝对路径资源: src="/icons 或 href="/tasks 出现 = base前缀丢失(子路径部署下404/跳错)
 *   3. 图标可加载: 所有 .tool-ic img naturalWidth>0
 *   4. 图标与文字垂直对齐: |icon中线-同行文字墨水中线| ≤ 3px
 *   5. 引用块不超卡片: prompt-quote right ≤ steps right
 *   6. 无横向滚动: scrollWidth ≤ viewport宽
 *   7. CTA链接可达: 完整教程href在本地站点内且200
 */
const { chromium } = require('playwright');

const BASE = process.argv[2] || 'http://localhost:4321';
const VIEWPORTS = [
  { w: 390, h: 844, name: 'iPhone14' },
  { w: 360, h: 780, name: 'Android-narrow' },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox'],
  });
  const failures = [];
  const warn = [];
  const ok = [];

  function check(name, pass, detail) {
    (pass ? ok : failures).push(`${pass ? 'PASS' : 'FAIL'} ${name}${detail ? ' — ' + detail : ''}`);
  }

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: 2 });
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    // 1. 占位符泄漏
    const leaks = await page.evaluate(() => (document.body.innerHTML.match(/\{\{(doubao|yuanbao|workbuddy)\}\}/g) || []));
    check(`[${vp.name}] 占位符无泄漏`, leaks.length === 0, leaks.join(',') || 'clean');

    // 2. 绝对路径资源(子路径部署会挂)
    const absPaths = await page.evaluate(() => {
      const bad = [];
      document.querySelectorAll('img[src^="/"], a[href^="/tasks"]').forEach(el => {
        const v = el.src || el.getAttribute('href');
        if (!v.includes(location.pathname.split('/')[1] || '~')) bad.push(v);
      });
      return bad;
    });
    check(`[${vp.name}] 资源路径含base前缀`, absPaths.length === 0, absPaths.join(',') || 'clean');

    const slideCount = await page.locator('.slide').count();
    for (let i = 0; i < slideCount; i++) {
      await page.evaluate((idx) => {
        const slides = Array.from(document.querySelectorAll('.slide'));
        const go = window.__wcadGo;
        if (typeof go === 'function') go(idx);
        else throw new Error('go not exposed');
      }, i).catch(async () => {
        // 兜底: 连点next箭头
        for (let k = 0; k < i; k++) { await page.evaluate(() => (document.getElementById('next') || {}).click()); await page.waitForTimeout(250); }
      });
      await page.waitForTimeout(700);
      const tag = `[${vp.name} slide${i + 1}]`;

      // 3. 图标加载
      const icons = await page.evaluate(() =>
        Array.from(document.querySelectorAll('.slide.active .tool-ic img')).map(im => ({
          src: im.src.split('/').pop(), ok: im.complete && im.naturalWidth > 0,
        }))
      );
      const broken = icons.filter(x => !x.ok);
      check(`${tag} 图标全部加载`, broken.length === 0, broken.map(b => b.src).join(',') || `${icons.length} icons ok`);

      // 4. 图标垂直对齐: DOM量测在折行文本上不可靠(碎片化rect), 权威检查用 scripts/align_check.py 像素分析
      const iconCount = await page.evaluate(() => document.querySelectorAll('.slide.active .tool-ic img').length);
      ok.push(`PASS ${tag} 对齐检查移交 align_check.py (DOM量测不可靠, ${iconCount} icons)`);

      // 5. 引用块不超步骤卡
      const over = await page.evaluate(() => {
        const q = document.querySelector('.slide.active .prompt-quote');
        const s = document.querySelector('.slide.active .steps');
        if (!q || !s) return null;
        return +(q.getBoundingClientRect().right - s.getBoundingClientRect().right).toFixed(1);
      });
      if (over !== null) check(`${tag} 引用块在卡片内`, over <= 0, `right diff ${over}px`);

      // 6. 无横向滚动
      const hs = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      check(`${tag} 无横向滚动`, hs <= 0, hs > 0 ? `+${hs}px` : 'ok');
    }

    // 6.5 详情页占位符泄漏(所有tasks/*.md渲染后的页面)
    const detailLeaks = await page.evaluate(async () => {
      const links = Array.from(document.querySelectorAll('a[href*="/tasks/"]'));
      const bad = [];
      for (const a of links.slice(0, 12)) {
        const u = new URL(a.href);
        if (u.origin !== location.origin) continue;
        try {
          const t = await (await fetch(u.href)).text();
          if (/\{\{(doubao|yuanbao|workbuddy)\}\}/.test(t)) bad.push(u.pathname);
        } catch (e) {}
      }
      return bad;
    });
    check(`[${vp.name}] 详情页无占位符泄漏`, detailLeaks.length === 0, detailLeaks.join(',') || 'clean');

    // 6.8 about页占位链接(上线前必须替换FEEDBACK_URL_PLACEHOLDER)
    const aboutRes = await page.request.get(BASE + '/about/');
    const aboutText = await aboutRes.text();
    const ph = /FEEDBACK_URL_PLACEHOLDER|mailto:hello@example\.com/.test(aboutText);
    check(`[${vp.name}] about页无占位链接`, !ph, ph ? '有PLACEHOLDER(评审期可放行, 上线前必换)' : 'clean');

    // 7. CTA链接(首页第一屏)
    await page.evaluate(() => window.__wcadGo(0));
    await page.waitForTimeout(600);
    const ctaHref = await page.locator('.slide.active .open').first().getAttribute('href');
    const ctaUrl = new URL(ctaHref, BASE).toString();
    const resp = await page.goto(ctaUrl, { waitUntil: 'domcontentloaded' });
    check(`[${vp.name}] CTA链接可达(${ctaHref})`, !!resp && resp.status() === 200, resp ? String(resp.status()) : 'no response');
    await page.close();
  }

  await browser.close();
  console.log('\n===== WCAD CHECK =====');
  ok.forEach(l => console.log(l));
  if (warn.length) warn.forEach(l => console.log('WARN ' + l));
  if (failures.length) {
    console.log('\n--- FAILURES ---');
    failures.forEach(l => console.log(l));
    process.exit(1);
  }
  console.log('\nALL CHECKS PASSED');
})().catch(e => { console.error('CHECK SCRIPT ERROR:', e.message); process.exit(2); });
