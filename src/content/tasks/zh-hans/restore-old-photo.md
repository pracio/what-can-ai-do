---
task_id: restore-old-photo
lang: zh-Hans
indices: {prompt: 1, hassle: 1, risk: 1}
paths:
  - {tier: chat, tool: doubao, region: cn, verified: pending}
  - {tier: chat, tool: yuanbao, region: cn, verified: pending}
  - {tier: app,  tool: meitu-miniprogram, region: cn, verified: pending}
domains: [生活, 创作]
type: chat
last_tested: pending
related: [colorize-old-photo, animate-old-photo, organize-photos-agent]
title: "AI 能修复老照片"
tagline: "泛黄模糊 → 清晰彩色，5 分钟"
accent: "#fbbf24"
accent2: "#fde68a"
icon: restore-old-photo
order: 1
steps:
  - n: "1"
    text: "手机上打开 {{doubao}} 或 {{yuanbao}} → ＋ → 图片，选一张老照片"
  - n: "2"
    text: "把这段话发给 AI："
    prompt: "修复这张老照片：提高清晰度、修复破损和褪色，如果是黑白照片就上色。保持人物面部特征完全不变。"
  - n: "3"
    text: "等 30 秒，不满意就追加要求"
indicesText:
  prompt: "说 1 句"
  hassle: "零安装"
  risk: "几乎无"
---

# 修复老照片

**能做什么**：把模糊、泛黄、黑白的老照片，变成清晰干净的彩色照片。纸质照片翻拍一下就能修。
**要多久**：5 分钟。**要花钱吗**：不要。

| 一句话指数 | 折腾指数 | 风险指数 |
|---|---|---|
| ★★★★☆ 粘贴就能用 | ★☆☆☆☆ 手机有豆包就能干 | ★☆☆☆☆ 照片会上传，证件照别传 |

## 怎么做

### 用手机里的 [豆包](https://www.doubao.com/chat/)（或 [元宝](https://yuanbao.tencent.com/)）

1. 打开豆包，点 **＋** → **图片**，选中老照片（纸质照片先用手机拍一张，光线均匀别反光）
2. 复制这段话一起发送：

> 修复这张老照片：去掉泛黄和划痕，画面变清晰，黑白的部分上自然真实的颜色。脸保持原样，不要美颜，不要改五官。

3. 等 10~30 秒。不满意就追加一句："人脸再清楚一点" / "颜色淡一点" / "只去划痕不上色"

**没有豆包？** [点此打开网页版](https://www.doubao.com/chat/)，或应用商店搜"豆包"装一个，手机号注册，1 分钟搞定。

### 不想打字？微信小程序一键修

微信搜"**美图秀秀**"小程序 → **画质修复** → **老照片修复** → 选照片 → **一键翻新**。
免费。保存时会让你分享，发给"文件传输助手"就行。

## 做不好的

- 缺角、霉斑很大的照片：AI 会"猜"，脸可能不像本人，多跑几次挑最像的
- 修复细节是 AI 补画的，别拿去当证件照
- 原片永远留好

## 隐私提醒

照片会上传到 AI 的服务器处理。家人生活照风险很低；身份证、户口本别传。

## 修好了？

试试 → **老照片上色进阶版** · **让照片动起来** · **智能体帮我整理照片**
