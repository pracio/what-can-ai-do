---
task_id: stock-caution
lang: zh-Hans
indices: {prompt: 3, hassle: 1, risk: 5}
paths:
  - {tier: chat, tool: doubao, region: cn, verified: pending}
  - {tier: chat, tool: yuanbao, region: cn, verified: pending}
domains: [风险]
type: chat
last_tested: pending
related: [spot-scam, explain-contract]
title: "AI 炒股有红线"
tagline: "能当学习参谋，不能当操盘手"
accent: "#fb923c"
accent2: "#fdba74"
icon: stock-caution
order: 20
steps:
  - n: "1"
    text: "手机上打开 {{doubao}} 或 {{yuanbao}}，先发这段话："
    prompt: "我在学投资，你当我的老师：1) 我发你财报术语/新闻，你解释背后含义，别给买卖建议；2) 我发你的K线截图，你讲这是什么形态、历史上这类形态的常见解读，同时强调局限性；3) 每次都提醒我哪些是你的知识局限。我不会问你\"该买什么\"。"
  - n: "2"
    text: "拿它拆财报、辨术语，不当荐股机器"
  - n: "3"
    text: "记住：它连昨天的股价都可能是编的"
indicesText:
  prompt: "先定边界"
  hassle: "随手可用"
  risk: "荐股即骗局"
---

# AI 炒股：能当参谋，不能当操盘手

**能做什么**：让 AI 讲懂财报术语、复盘K线形态概念、整理行业逻辑——它是极好的学习参谋。但**让它荐股/预测涨跌 = 亏钱的开始**。
**要多久**：随手可用。**要花钱吗**：不要。
**先说结论**：AI 说的每句行情判断，都不构成投资建议——它连昨天的股价都可能是编的。

## 正确的用法：当学习参谋

### 用 [豆包](https://www.doubao.com/chat/) 或 [元宝](https://yuanbao.tencent.com/)

1. 把这段话发给它：

> 我在学投资，你当我的老师：1) 我发你财报术语/新闻，你解释背后含义，别给买卖建议；2) 我发你的K线截图，你讲这是什么形态、历史上这类形态的常见解读，同时强调局限性；3) 每次都提醒我哪些是你的知识局限。我不会问你"该买什么"。

2. 用它拆财报：把年报章节拍照发它，问"这段在说什么，对股东是好事吗"

3. 用它比信息：让不同 AI 分析同一份公告，看分歧在哪

## AI 在投资上查不了的

- ❌ 实时行情——它的数据有截止日期，还可能一本正经编造
- ❌ 预测——股价短期是混沌系统，谁预测谁错，AI 也一样
- ❌ "内幕感"——AI 语气自信≠信息可靠，恰恰相反，它对错误答案同样自信
- ✅ 唯一可靠区：概念解释、知识梳理、财报语言翻译

## 防坑铁律

- 网上"AI 荐股群""AI 量化大师"= 诈骗新皮，见一个举报一个
- 让 AI 帮你"算过"的投资结论，和抛硬币的区别没那么大
- 真金白银的决定，自己研究 + 官方渠道核实 + 亏得起的仓位
