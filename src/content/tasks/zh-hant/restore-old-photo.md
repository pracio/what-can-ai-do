---
task_id: restore-old-photo
lang: zh-Hant
indices: {prompt: 4, hassle: 1, risk: 1}
paths:
  - {tier: chat, tool: chatgpt, region: tw, verified: pending}
  - {tier: chat, tool: gemini, region: tw, verified: pending}
domains: [生活, 創作]
type: chat
last_tested: pending
related: [colorize-old-photo, animate-old-photo, organize-photos-agent]
title: "AI 能修復老照片"
tagline: "泛黃模糊 → 清晰彩色，5 分鐘"
accent: "#fbbf24"
accent2: "#fde68a"
icon: restore-old-photo
order: 1
steps:
  - n: "1"
    text: "手機打開 {{chatgpt}} 或 {{gemini}} → ＋ → 照片，選一張老照片"
  - n: "2"
    text: "把這段話傳給 AI："
    prompt: "修復這張老照片：提高清晰度、修復破損和褪色，如果是黑白照片就上色。保持人物面部特徵完全不要改動。"
  - n: "3"
    text: "等 30 秒，不滿意就直接說要改哪裡"
indicesText:
  prompt: "說 1 句"
  hassle: "零安裝"
  risk: "幾乎沒有"
---

# 修復老照片

**能做什麼**：把模糊、泛黃、黑白的老照片，變成清晰乾淨的彩色照片。紙本照片用手機翻拍一下就能修。
**要多久**：5 分鐘。**要花錢嗎**：不用。

| 一句話指數 | 折騰指數 | 風險指數 |
|---|---|---|
| ★★★★☆ 貼上就能用 | ★☆☆☆☆ 手機有 ChatGPT 就能做 | ★☆☆☆☆ 照片會上傳，證件照別傳 |

## 怎麼做

### 用手機裡的 [ChatGPT](https://chatgpt.com/)（或 [Google Gemini](https://gemini.google.com/)）

1. 打開 ChatGPT，點 **＋** → **照片**，選一張老照片（紙本照片先用均勻光線、不反光的角度翻拍一張）
2. 複製這段話一起傳送：

> 修復這張老照片：提高清晰度、修復破損和褪色，如果是黑白照片就上色。保持人物面部特徵完全不要改動。

3. 等大約 30 秒，不滿意就直接說要改哪裡——「臉再清楚一點」「顏色偏黃一點」——它會再修一次

### 實用細節

- **紙本照片**：放在純色桌面上、靠窗自然光下正上方拍。相框玻璃會反光——拿得出來就先把照片抽出來
- **多人合照**：先整張修，再指定「把左邊第二位放大處理」
- **破損嚴重的照片**（摺痕、水漬）：一樣能修，但破損區域附近效果會比較軟。它補細節是用猜的，臉部要跟原稿對照一下

### 注意

- AI 補出來的細節是用推測的。家裡唯一一張的老照片，原始檔案留好不要覆蓋，把修好的當副本用
- 每家工具修出來的感覺不一樣。ChatGPT 的版本怪怪的，就把同一段話丟給 Gemini 試試——兩家出錯的方式不同

---

*最後實測：待驗證——本教學依產品公開能力整理，還沒有經過真人逐步驗證。你跑通了（或跑不通），都歡迎到 [GitHub 告訴我們](https://github.com/pracio/what-can-ai-do/issues)。*
