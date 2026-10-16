---
task_id: make-poster
lang: zh-Hans
indices: {prompt: 4, hassle: 1, risk: 1}
paths:
  - {tier: chat, tool: doubao, region: cn, verified: pending}
  - {tier: chat, tool: yuanbao, region: cn, verified: pending}
domains: [创作]
type: chat
last_tested: pending
related: [restore-old-photo, tutoring-kids]
title: "AI 能做出一张海报"
tagline: "说清需求先出方案，两轮能用"
accent: "#fb7185"
accent2: "#fda4af"
icon: make-poster
order: 9
steps:
  - n: "1"
    text: "手机上打开 {{doubao}} 或 {{yuanbao}}，发这段话（花括号换成你的）："
    prompt: "帮我设计一张海报，主题：{生日聚会/店庆促销/社团招新}。要求：竖版手机屏幕比例，主色调用{暖橙色}，风格{简约/可爱/正式}。请先给我 2 个不同的布局方案（描述每个方案：标题放哪、配图风格、信息层级），我选一个后你再生成图片。"
  - n: "2"
    text: "选一个方案，或说「方案一，标题再大点」"
  - n: "3"
    text: "出图后逐字检查（AI 中文偶尔错字），满意长按保存"
indicesText:
  prompt: "说清 4 件事"
  hassle: "零安装"
  risk: "几乎无"
---

# 不学设计，也能出海报

**能做什么**：生日邀请、店庆促销、社团招新、寻物启事——说清楚要什么，AI 直接出图。以前要等会设计的朋友，现在 5 分钟自己来。
**要多久**：5-10 分钟（含改两轮）。**要花钱吗**：基本免费。
**诀窍在提示词**：直接说"做张海报"出来的是模板货；说清比例、色调、先出方案再出图，出来的能直接用。

## 怎么做

### 用 [豆包](https://www.doubao.com/chat/) 或 [元宝](https://yuanbao.tencent.com/)

1. 手机上打开 [豆包](https://www.doubao.com/chat/) 或 [元宝](https://yuanbao.tencent.com/)，把这段话发给它（花括号里换成你的）：

> 帮我设计一张海报，主题：{生日聚会/店庆促销/社团招新}。要求：竖版手机屏幕比例，主色调用{暖橙色}，风格{简约/可爱/正式}。请先给我 2 个不同的布局方案（描述每个方案：标题放哪、配图风格、信息层级），我选一个后你再生成图片。

2. 它先给两个文字方案——选一个，或说"方案一，但标题再大点"

3. 生成图片后不满意就继续改：换颜色、换字体感觉、调文字内容，改到满意长按保存

**为什么要先出方案**：直接生成等于抽奖，一次两张图；先对齐想法再出图，两轮内基本能到位。

## 做不好的

- 图里的中文偶尔会打出错别字，出图后逐字检查（这是目前 AI 画图的通病）
- 特别复杂的排版（很多小字信息）不如 PPT，海报只放关键信息
- 商用注意版权：让它"生成"的形象可自用，别拿去注册商标

## 防坑提示

- 别在海报提示词里放真实手机号以外的隐私信息
- 生成结果记得保存原图，缩略图会糊
