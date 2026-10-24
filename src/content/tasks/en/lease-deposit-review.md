---
task_id: lease-deposit-review
lang: en
indices: {prompt: 1, hassle: 1, risk: 2}
paths:
  - {tier: chat, tool: chatgpt, region: us, verified: pending}
  - {tier: chat, tool: gemini, region: us, verified: pending}
domains: [Home, Money]
type: chat
last_tested: pending
related: [summarize-doc, explain-contract, complaint-letter]
title: "AI can read your lease before you sign"
tagline: "And get your deposit back with a letter, not a lawsuit"
accent: "#2dd4bf"
accent2: "#5eead4"
icon: lease-review
order: 11
steps:
  - n: "1"
    text: "Photograph or upload the lease into {{chatgpt}} or {{gemini}} (before signing, not after):"
    prompt: "Explain my lease in plain language. List separately: every fee, every condition that could cost me my deposit, and the early-exit terms. Quote the exact clause for each."
  - n: "2"
    text: "Moving out, use it again on the deposit:"
    prompt: "I'm moving out on [date]. My landlord hasn't returned my deposit / deducted $[amount] for [item]. Draft a polite letter citing my lease's move-out clause, asking for [the deposit / an itemized list] by [date]."
  - n: "3"
    text: "Take dated photos at move-in and move-out. The photos beat any letter when deductions get disputed"
indicesText:
  prompt: "1 lease + 1 prompt"
  hassle: "Photograph before signing"
  risk: "AI explains, doesn't give legal advice"
---

# Understand the lease, then get the deposit back

**What it does**: AI translates the lease into plain language before you sign (fees, deposit conditions, early-exit costs), and later drafts the deposit demand letter that cites the lease's own move-out clause. Your evidence is your dated photos.
**How long**: 5 minutes to review, 5 minutes for the letter. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★☆☆☆☆ One upload | ★☆☆☆☆ Just the app | ★★☆☆☆ Big disputes need a lawyer, not a chatbot |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. **Before signing**, upload the lease and send this prompt:

> This is my apartment lease. Explain it in plain language. List separately: every fee and when it's charged, every condition that could cost me my security deposit, what happens if I break the lease early, and anything unusual compared to a standard lease. Quote the exact clause for each point.

The "list separately" part matters: buried in a summary, a $15/month "admin fee" disappears; on its own line, you can ask the landlord to remove it
2. Ask follow-ups on anything that matters to you: "What exactly counts as 'normal wear and tear' here?" "If my roommate leaves, am I liable for their share?" Quote-based answers let you verify against the PDF
3. **At move-in, photograph everything, dated.** Walls, appliances, carpets, existing damage. This is the deposit's insurance policy and it takes ten minutes
4. **Moving out**, give notice exactly as the lease requires (the AI can tell you what your lease requires), clean, photograph again, then send this if the deposit is late or deductions look wrong:

> I'm moving out on [date]. The lease says deposits are returned within [X] days with an itemized list of deductions. My landlord hasn't responded in [X] days / deducted $[amount] for [item]. Draft a polite letter citing my lease's own move-out clause and asking for [the full deposit / an itemized deduction list] by [date].

### The deposit letter, and where it stops

Most deposits die from silence on one side and vagueness on the other. A letter that cites the lease's own clause ("Section 9: deposit returned within 30 days of move-out with an itemized statement"), states the dates, and sets a reply deadline is usually enough for an ordinary landlord. If it isn't, the next steps (demand letter from a lawyer, small claims court, state tenant agencies) involve legal process that's beyond what a chat session should steer. AI got one renter as far as knowing his state's deposit cap and the exact statute text; going further than a firm letter is a decision to make with a professional.

### Watch out

- **AI explains your lease; it doesn't know your state's law reliably.** Lease terms that contradict state law are usually void, but which rules apply is a legal question. For real money, ask a tenants' rights organization or a lawyer
- **The photos are the case.** Letters argue; photos prove. Date-stamped move-in photos settle most deduction disputes before they start
- **Don't sign with unresolved questions.** If the AI flags an odd clause, ask the landlord to change it in writing before you sign; after signing, it's your lease
- **Deadlines work both ways.** Your notice period and the landlord's deposit window are both in the lease. Missing yours loses you leverage

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
