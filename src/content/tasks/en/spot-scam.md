---
task_id: spot-scam
lang: en
indices: {prompt: 2, hassle: 1, risk: 5}
paths:
  - {tier: chat, tool: chatgpt, region: us, verified: pending}
  - {tier: chat, tool: gemini, region: us, verified: pending}
domains: [Safety, Family]
type: chat
last_tested: pending
related: [ai-health-consult, tutoring-kids]
title: "AI can help you spot scams"
tagline: "Screenshot the sketchy message and let AI find the tells"
accent: "#f87171"
accent2: "#fca5a5"
icon: spot-scam
order: 5
steps:
  - n: "1"
    text: "Open {{chatgpt}} or {{gemini}}, screenshot + send with this:"
    prompt: "I got this suspicious message/call. Analyze it: 1) What are the common red flags of this scam type? 2) How many warning signs are in this specific message? 3) If it's a scam, what will they likely ask me to do next? 4) How can I verify if it's real?"
  - n: "2"
    text: "Voice or video from a \"relative\"? Ask about deepfake tells"
  - n: "3"
    text: "Even if AI says it's legit — hang up and call back on the official number"
indicesText:
  prompt: "Screenshot + 1 line"
  hassle: "Always at hand"
  risk: "Verify with humans"
---

# Spot scams with AI

**What it does**: Get a phishing text, a "your account is locked" email, or a frantic call from a "grandchild in trouble"? Screenshot it and send it to AI with one line. It walks you through the red flags, predicts what the scammer will ask for next, and tells you how to verify.
**How long**: 1 minute. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ Screenshot + 1 line | ★☆☆☆☆ Always in your pocket | ★★★★★ AI advises, humans decide |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. Screenshot the suspicious message. Open the app, attach the screenshot, and send it with this:

> I got this suspicious message/call. Analyze it: 1) What are the common red flags of this scam type? 2) How many warning signs are in this specific message? 3) If it's a scam, what will they likely ask me to do next? 4) How can I verify if it's real?

2. Question 3 is the valuable one: scams follow scripts (gift cards, wire transfers, "don't tell anyone"). Knowing the next step before it comes is how you stay ahead of it
3. For a call that *sounded* like a relative (the "grandparent scam", now with AI voice cloning), follow up: "How can I tell if a voice is AI-cloned? What's the safe way to verify a family member is really in trouble?"

### The one rule that matters more than AI

**Hang up and call back on the official number.** If it's really your bank, calling the number on your card works. If it's really your grandchild, calling their usual number works. No genuine emergency gets worse because you spent two minutes calling back through a known channel. AI analysis is a second opinion. This rule is the first one.

### Watch out

- **This is the one case in this site where we rate risk 5/5**. Not because AI is bad at it (it's good), but because the cost of a wrong answer is the highest of any case here. AI helps you analyze; it must not make the final call
- **Forward the "emergency" to another family member** before acting. Scams isolate you on purpose; a second person breaks the isolation
- Report it: forward phishing texts to **7726** (SPAM) in the US, and report at **reportfraud.ftc.gov**. Every report makes the next person's filter better

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*

