---
task_id: summarize-doc
lang: zh-Hant
indices: {prompt: 1, hassle: 1, risk: 1}
paths:
  - {tier: chat, tool: chatgpt, region: tw, verified: pending}
  - {tier: chat, tool: gemini, region: tw, verified: pending}
domains: [工作, 學習]
type: chat
last_tested: pending
related: [explain-contract, agent-research-report]
title: "AI 能把長文件讀薄"
tagline: "幾十頁 → 10 條重點，2 分鐘"
accent: "#60a5fa"
accent2: "#93c5fd"
icon: summarize-doc
order: 2
steps:
  - n: "1"
    text: "手機打開 {{chatgpt}} 或 {{gemini}} → ＋ → 檔案，選好文件"
  - n: "2"
    text: "把這段話傳給 AI："
    prompt: "總結這份文件：用 10 條以內的重點講清楚它在說什麼。最後單獨列出：文件裡的數字、日期、金額，一共有哪些。"
  - n: "3"
    text: "太淺或太深，換一句話再問"
indicesText:
  prompt: "說 1 句"
  hassle: "零安裝"
  risk: "幾乎沒有"
---

# 把長文件讀薄

**能做什麼**：丟給 AI 一份長 PDF——租約、保單、學校通知、幾十頁的報告——兩分鐘內拿到重點整理，而且數字、日期、金額會被單獨列出來，不用自己從頭翻到尾。
**要多久**：2 分鐘。**要花錢嗎**：不用。

| 說話 | 折騰 | 風險 |
|---|---|---|
| ★★☆☆☆ 上傳＋一句話 | ★☆☆☆☆ 有 App 就行 | ★☆☆☆☆ 要簽要付錢的先核對原文 |

## 怎麼做

### 用手機上的 [ChatGPT](https://chatgpt.com/)（或 [Google Gemini](https://gemini.google.com/)）

1. 打開 App，點 **＋** → **檔案**，選好文件（PDF、Word 都行，紙本翻拍的照片也可以）
2. 把這段話傳給 AI：

> 總結這份文件：用 10 條以內的重點講清楚它在說什麼。最後單獨列出：文件裡的數字、日期、金額，一共有哪些。

3. 先看重點、再看數字列表。哪一段對你重要就追問：「第 3 點展開講」「用我聽得懂的方式解釋第 4 節」

### 為什麼要加「單獨列出數字」

只說「幫我總結」，AI 容易把細節磨平——租金漲多少、期限哪天、金額多少。要求把數字和日期單獨列出來，是逼它把這些撈出來。而一份文件的關鍵往往就在這裡：什麼改了、改多少、什麼時候生效。

### 注意

- **AI 整理，不代表 AI 背書。**要簽字、要付錢、有期限壓力的文件，用總結來決定「哪些該細讀」，不能拿來代替細讀
- **掃描品質差的文件**：紙本翻拍光線太暗、字跡太潦草，結果會變差。核對一下它回的頁數對不對——30 頁的文件只回你 2 頁的重點，多半是上傳失敗
- **超長文件**（100 頁以上）可能超過檔案大小限制，分開上傳或一章一章總結

---

*最後實測：pending——本文依產品公開能力整理而成，尚未經真人逐步驗證。你跑通了（或跑不通），都請到 [GitHub Issues](https://github.com/pracio/what-can-ai-do/issues) 告訴我們。*

