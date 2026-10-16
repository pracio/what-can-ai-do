#!/usr/bin/env python3
"""WCAD 图标-文字垂直对齐像素级检查
用法: python3 scripts/align_check.py [截图路径]
配合 scripts/shot_rows.mjs 产出的 3x 步骤行截图使用。
原理: 在截图里找彩色图标块(饱和色)与白色文字墨水的垂直中线, 差值>4px(css)判FAIL。
背景知识: DOM的Range.getClientRects()在文字折行时会碎片化, 量不准;
          inline-flex盒内img的vertical-align无效(要对flex容器本身设) —— 这两个坑都踩过。
"""
import sys
from PIL import Image

def analyze(path, row_text_band=(20, 99)):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    px = im.load()
    scale = 3  # deviceScaleFactor=3

    def colorful(p):
        r, g, b = p
        return (max(r, g, b) - min(r, g, b)) > 40

    def white(p):
        return p[0] > 200 and p[1] > 200 and p[2] > 200

    # 彩色块聚簇(排除x<60的序号圆圈)
    colcnt = {x: sum(1 for y in range(h) if colorful(px[x, y])) for x in range(60, w)}
    blocks, cur = [], None
    for x in range(60, w):
        if colcnt.get(x, 0) > 5:
            cur = [x, x] if cur is None else [cur[0], x]
        elif cur and x - cur[1] > 8:
            blocks.append(cur); cur = None
    if cur: blocks.append(cur)
    icons = [b for b in blocks if b[0] > 200 and (b[1]-b[0]) > 30]  # 排除序号圈(x<200), 真图标宽>10css px

    if not icons:
        return {"status": "NO_ICONS", "detail": "未找到彩色图标块"}

    icon_mids = []
    for bx in icons:
        rows = [y for y in range(h) if sum(1 for x in range(bx[0], bx[1]+1) if colorful(px[x, y])) > 3]
        icon_mids.append((min(rows) + max(rows)) // 2)

    # 第一行文字墨水(白像素), 默认带20-99, 可按截图调
    t0, t1 = row_text_band
    rows_t = [y for y in range(t0, min(t1, h)) if sum(1 for x in range(100, min(600, w)) if white(px[x, y])) > 3]
    if not rows_t:
        return {"status": "NO_TEXT", "detail": "未找到文字墨水行"}
    t_mid = (min(rows_t) + max(rows_t)) // 2

    diffs = [round((t_mid - m) / scale, 1) for m in icon_mids]
    worst = max(abs(d) for d in diffs)
    return {
        "status": "PASS" if worst <= 4 else "FAIL",
        "icon_mids_3x": icon_mids,
        "text_mid_3x": t_mid,
        "diffs_css_px": diffs,
        "worst": worst,
        "rule": "|icon中线-文字墨水中线| ≤ 4px (css)",
    }

if __name__ == '__main__':
    path = sys.argv[1] if len(sys.argv) > 1 else '/tmp/pixel-row.png'
    r = analyze(path)
    print(r)
    sys.exit(0 if r["status"] in ("PASS", "NO_ICONS") else 1)
