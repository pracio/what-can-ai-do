---
task_id: tutoring-kids
lang: en
indices: {prompt: 3, hassle: 1, risk: 2}
paths:
  - {tier: chat, tool: chatgpt, region: us, verified: pending}
  - {tier: chat, tool: gemini, region: us, verified: pending}
domains: [Family, Education]
type: chat
last_tested: pending
related: [agent-research-report, photo-answer]
title: "AI can tutor your kid"
tagline: "It guides, never gives away the answer"
accent: "#34d399"
accent2: "#6ee7b7"
icon: tutoring-kids
order: 3
steps:
  - n: "1"
    text: "Open {{chatgpt}} or {{gemini}}, set the ground rules first:"
    prompt: "Act as a tutor for an elementary schooler, but never give the answer directly. When I send a problem: 1) ask which step my kid is stuck on; 2) walk through a similar example with different numbers; 3) have them solve the original themselves; 4) if they get it wrong, give one small hint at a time. Here comes the first problem:"
  - n: "2"
    text: "Snap a photo of the homework, let AI ask where they're stuck"
  - n: "3"
    text: "Kid solves it themselves — wrong answers get one small hint at a time"
indicesText:
  prompt: "Set rules once"
  hassle: "No install"
  risk: "Don't let it give answers"
---

# Tutor your kid with AI

**What it does**: Turn AI into a patient tutor that never gives away the answer — it asks where your kid is stuck, works a similar example, and lets the kid solve the real problem themselves. The worry every parent has ("AI will do their homework for them") is exactly what the ground-rules prompt prevents.
**How long**: 15–30 minutes per session. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★★★☆☆ Ground rules once, then easy | ★☆☆☆☆ Just the app | ★★☆☆☆ Needs a parent nearby at first |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. Open a new chat and send the ground-rules prompt above. This one-time setup is the whole trick — without it, AI defaults to just answering, which is exactly what you don't want
2. Snap a photo of the homework problem and send it. AI should respond by asking which step is confusing — not by solving it
3. Sit with your kid for the first few sessions. Your job isn't to explain math — it's to notice when AI starts giving too much away and say "don't tell them, ask them a question instead"

### Why this works better than just asking AI the answer

A kid who gets answers learns to fetch answers. A kid who gets guided through a similar example learns the *method* — and the method transfers to the next problem. The ground-rules prompt forces the second pattern: similar example first, original problem second, hints one small step at a time.

### Watch out

- **AI can be wrong**, especially on poorly photographed problems. If your kid says "but the AI said...", that's a reason to check the work, not to trust it
- **Wrong level**: if the "similar example" is way too hard or too easy, just say so — "make the example easier" — and it adjusts
- **Kids drifting into chat**: keep the session on the homework app screen. The tutor prompt keeps AI on task, but a curious 10-year-old can derail anything
- The goal is a kid who *doesn't need the tutor*. Once a topic clicks, drop it and let them fly solo

---

*Last tested: pending — this walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*

