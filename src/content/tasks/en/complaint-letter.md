---
task_id: complaint-letter
lang: en
indices: {prompt: 2, hassle: 1, risk: 1}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Money, Shopping]
type: agent
last_tested: pending
related: [insurance-claim-appeal, flight-delay-refund, medical-bill-explainer]
title: "AI can write the complaint that gets read"
tagline: "It researches the company first, then writes with receipts"
accent: "#a78bfa"
accent2: "#c4b5fd"
icon: multi-post
order: 10
steps:
  - n: "1"
    text: "Gather your file: order number, receipts, photos of the problem, and the dates of any calls or chats you already had"
  - n: "2"
    text: "In {{chatgpt}} or {{gemini}}, use the deep research or agent mode if your plan has it:"
    prompt: "I bought [item] from [company] on [date] and [what went wrong]. I've spent [amount]. Before you write anything: research this company's written warranty, return window, and documented complaints process. Then draft a complaint email that cites their own policy, states the specific remedy I want [refund / repair / replacement], sets a reply deadline of two weeks, and mentions what I'll do next if they don't respond. Keep it under 250 words, factual, no anger."
  - n: "3"
    text: "Check the cited policy lines against the company's site (they must actually be there), add your order details, and send it"
indicesText:
  prompt: "One detailed prompt"
  hassle: "Collect your receipts"
  risk: "Almost none"
---

# The complaint letter that cites their own policy

**What it does**: AI looks up the company's actual warranty and return policy, then writes a short, factual complaint that quotes it, states exactly what remedy you want, and sets a deadline. Companies respond to specific policy citations far faster than to anger.
**How long**: 10 minutes. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★☆☆☆☆ One prompt + one check | ★☆☆☆☆ Just the app | ★☆☆☆☆ Verify the quotes it cites |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. Have your facts ready before you prompt: order number, date, amount, what went wrong, what you want. The remedy matters most; "I want a refund of $84.99 within two weeks" gets a decision, "this is unacceptable" gets sympathy
2. Send the prompt above. If your plan includes deep research or agent mode, use it: the difference shows up in the letter citing the company's actual warranty clause instead of generic consumer language
3. **Check every citation.** Open the company's policy page and confirm the quoted sentences exist. A letter citing a policy line that isn't there loses its power at the first read
4. Send it to the right address. Ask the AI where this company documents its formal complaints channel; use that channel, not the general support inbox, for anything over a routine refund

### Why the research step changes the reply rate

A generic complaint gives the company's first-line support an easy out: apologize, offer a coupon, close the ticket. A letter that names the warranty section, states the remedy, and sets a deadline reads like it came from someone who will escalate on schedule. The letter is the same length; the information in it is different.

### Watch out

- **Deadline and remedy, or it's a rant.** No stated deadline means no urgency; no stated remedy means they decide
- **Don't threaten what you won't do.** "My next step is a chargeback" works only if you mean it and your card issuer actually handles it
- **One escalation ladder, in order**: support ticket, formal complaint channel, card chargeback, then (for real money) small claims. Each step is legitimate; skipping to the loudest one first costs you the earlier options
- **Keep it clean of personal threats.** Factual and calm isn't politeness for its own sake: it's what makes a written record useful later

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
