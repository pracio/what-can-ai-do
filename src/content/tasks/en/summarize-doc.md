---
task_id: summarize-doc
lang: en
indices: {prompt: 1, hassle: 1, risk: 1}
paths:
  - {tier: chat, tool: chatgpt, region: us, verified: pending}
  - {tier: chat, tool: gemini, region: us, verified: pending}
domains: [Work, Study]
type: chat
last_tested: pending
related: [explain-contract, agent-research-report]
title: "AI can boil down long documents"
tagline: "Dozens of pages → 10 key points, in 2 minutes"
accent: "#60a5fa"
accent2: "#93c5fd"
icon: summarize-doc
order: 2
steps:
  - n: "1"
    text: "Open {{chatgpt}} or {{gemini}} on your phone → ＋ → File, pick the document"
  - n: "2"
    text: "Send this prompt:"
    prompt: "Summarize this document: give me the gist in 10 bullet points or fewer. Then list separately every number, date, and dollar amount the document mentions."
  - n: "3"
    text: "Too shallow or too deep? Ask again in different words"
indicesText:
  prompt: "1 sentence"
  hassle: "No install"
  risk: "Almost none"
---

# Boil down long documents

**What it does**: Hand AI a long PDF (a lease, an insurance policy, a school district letter, a 40-page report) and get the key points back in a couple of minutes, with every number and date pulled out separately so you don't have to hunt for them.
**How long**: 2 minutes. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ One upload + one prompt | ★☆☆☆☆ Just the app | ★☆☆☆☆ Double-check anything you'll act on |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/)) on your phone

1. Open the app, tap **＋** → **File**, and pick the document (PDF and Word both work; photos of printed pages work too)
2. Copy and send this prompt:

> Summarize this document: give me the gist in 10 bullet points or fewer. Then list separately every number, date, and dollar amount the document mentions.

3. Read the summary first, then the numbers list. If a section matters to you, follow up: "Expand on point 3" or "Explain section 4 like I'm new to this"

### Why the "list every number" trick matters

Ask only for a summary and AI tends to smooth over specifics: the exact rent increase, the deadline, the dollar amount. Asking for numbers and dates as a separate list forces it to surface them. That's usually where the real content of a document lives: what changes, by how much, starting when.

### Watch out

- **AI summarizes, it doesn't certify.** For anything with legal or financial consequences (signing, paying, deadline decisions), use the summary to decide *what to read closely*, not to skip reading
- **Scanned documents**: if the pages are photos of paper, results get worse with bad lighting or small handwriting. Flip through what it returns against the page count; a "2-page" answer on a 30-page file means the upload failed
- **Very long documents** (100+ pages) may hit file size limits. Split the file or summarize chapter by chapter

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*

