---
task_id: tutoring-kids
lang: zh-Hant
indices: {prompt: 3, hassle: 1, risk: 2}
paths:
  - {tier: chat, tool: chatgpt, region: tw, verified: pending}
  - {tier: chat, tool: gemini, region: tw, verified: pending}
domains: [家庭, 教育]
type: chat
last_tested: pending
related: [agent-research-report, photo-answer]
title: "AI 能陪孩子練習功課"
tagline: "只引導不給答案，孩子自己想"
accent: "#34d399"
accent2: "#6ee7b7"
icon: tutoring-kids
order: 3
steps:
  - n: "1"
    text: "手機打開 {{chatgpt}} 或 {{gemini}}，先傳這段話定規矩："
    prompt: "你在輔導國小學生作業時，不要直接給答案。我傳給你一道題目，你要：1) 先問我孩子卡在哪一步；2) 出一道類似但數字不同的例題，帶孩子走一遍思路；3) 讓孩子自己寫原題；4) 寫錯了再提示，一次只提示一小步。現在第一題是："
  - n: "2"
    text: "拍照傳題目，讓 AI 問孩子卡在哪"
  - n: "3"
    text: "孩子自己寫完，錯了 AI 一次只提示一小步"
indicesText:
  prompt: "定規矩 1 次"
  hassle: "零安裝"
  risk: "別直接給答案"
---

# 用 AI 陪孩子練習功課

**能做什麼**：把 AI 變成一個不給答案的家教——它先問孩子卡在哪，出一道類似例題帶思路，然後讓孩子自己寫原題。家長最怕的「有了 AI 孩子更不動腦」，靠開頭那段定規矩的提示詞就能擋掉。
**要多久**：一次 15–30 分鐘。**要花錢嗎**：不用。

| 說話 | 要多麻煩 | 風險 |
|---|---|---|
| ★★★☆☆ 定規矩一次，之後輕鬆 | ★☆☆☆☆ 有 App 就行 | ★★☆☆☆ 前幾次家長要在旁邊 |

## 怎麼做

### 用 [ChatGPT](https://chatgpt.com/)（或 [Google Gemini](https://gemini.google.com/)）

1. 開新對話，先把上面那段定規矩的話傳給 AI。這一步是全部的關鍵——不定規矩，AI 預設就是直接給答案，那正是我們不要的
2. 把作業題目拍照傳上去。AI 應該先問「卡在哪一步」，而不是直接解題
3. 前幾次陪在旁邊。你要做的不是講數學——是盯著 AI 有沒有偷偷把答案說出來，有的話就插一句：「別告訴他，用問的」

### 為什麼比直接問答案好

拿到答案的孩子學會的是「去哪抄」，走過例題的孩子學會的是「怎麼想」——而方法會帶到下一題。定規矩的提示詞就是在逼 AI 走第二條路：先例題、再原題、錯了只提示一小步。

### 注意

- **AI 也會算錯**，尤其題目拍得糊的時候。孩子說「可是 AI 這樣講」的時候，那是要檢查的理由，不是要相信的理由
- **程度不合**：例題太難或太簡單，直接說「出一題簡單一點的」，它會調整
- **孩子會分心去聊天**：把 session 限制在作業這個對話裡。定規矩的提示詞能讓 AI 專注，但一個好奇的國小生可以讓任何東西分心
- 目標是孩子**不再需要家教**。哪個單元懂了，就放手讓他自己來

---

*最後實測：pending——本文依產品公開能力整理而成，尚未經真人逐步驗證。你跑通了（或跑不通），都請到 [GitHub Issues](https://github.com/pracio/what-can-ai-do/issues) 告訴我們。*

