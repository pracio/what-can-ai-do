---
task_id: agent-research-report
lang: en
indices: {prompt: 2, hassle: 2, risk: 2}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Work, Decisions]
type: agent
last_tested: pending
related: [summarize-doc, watch-updates]
title: "AI can do the research for you"
tagline: "It checks dozens of sources and hands you a report"
accent: "#34d399"
accent2: "#a7f3d0"
icon: agent-research-report
order: 4
steps:
  - n: "1"
    text: "Open {{chatgpt}} → new chat, pick Deep Research (same idea in {{gemini}})"
  - n: "2"
    text: "Send this prompt (swap the topic):"
    prompt: "Research [topic] for me: break it into 3-5 key questions, verify each one online, then give me a report with the conclusion first, then what different sources say and where they disagree, and note how current the information is."
  - n: "3"
    text: "Follow up: \"How reliable are the sources for this conclusion?\""
indicesText:
  prompt: "2 sentences"
  hassle: "Wait ~10 min"
  risk: "Double-check big decisions"
---

# Let AI do the research for you

**What it does**: This is the chatbot-to-agent leap. Instead of you opening twenty tabs, Deep Research works on its own for several minutes: it searches, reads, cross-checks, then hands you a structured report with sources. You ask for the answer; it does the legwork.
**How long**: 5–15 minutes (it works while you do something else). **Does it cost money**: Free tiers have limited runs per month; paid tiers more.

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ Describe what you want | ★★☆☆☆ Find the Deep Research mode | ★★☆☆☆ Verify before big decisions |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) Deep Research (or the equivalent in [Google Gemini](https://gemini.google.com/))

1. Open a new chat and look for the **Deep Research** option (in ChatGPT it's in the tools menu next to the message box). Regular chat won't do multi-step browsing on its own; this mode is what makes it an agent
2. Copy and send this prompt, swapping in your topic:

> Research [topic] for me: break it into 3-5 key questions, verify each one online, then give me a report with the conclusion first, then what different sources say and where they disagree, and note how current the information is.

3. While it works (you'll see it searching and reading), go do something else. Come back to a structured report
4. Ask the follow-up that matters: **"How reliable are the sources for this conclusion?"** It will tell you which claims rest on solid sources and which are thin

### Good uses vs. bad uses

**Good**: comparing products across dozens of reviews, understanding a new field before a big purchase, background for a decision ("moving to Austin with two kids, what do we need to know about schools?"), sorting out what actually happened in a confusing news story

**Bad**: anything where being wrong is expensive. A report that reads confidently can still rest on weak sources. The follow-up question above is not optional for medical, legal, or financial topics

### Watch out

- **"Deep Research" ≠ truth.** It searches and reads like a diligent intern, not like an expert. For big decisions, have a human expert check the report
- **Free-tier limits**: most products meter Deep Research runs per month on free accounts. Save runs for questions that actually need them; simple questions belong in regular chat
- **Stale info**: sources can be years old. The prompt asks it to note currency. Read that note

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*

