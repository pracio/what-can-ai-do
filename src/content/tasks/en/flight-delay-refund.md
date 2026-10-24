---
task_id: flight-delay-refund
lang: en
indices: {prompt: 2, hassle: 2, risk: 1}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Travel, Money]
type: agent
last_tested: pending
related: [complaint-letter, travel-plan]
sources:
  - title: "Get $500 in airline delay compensation with ChatGPT's help"
    url: "https://agentsinthewildai.com/cases/166-get-500-in-airline-delay-compensation-with-chatgpt-s-help/"
    note: "Self-reported on Hacker News; ChatGPT worked out which airline owed the money and what to say"
title: "AI can sort out a ruined flight"
tagline: "Delayed, cancelled, rerouted: what you're owed and how to ask"
accent: "#38bdf8"
accent2: "#7dd3fc"
icon: book-my-trip
order: 8
steps:
  - n: "1"
    text: "Screenshot everything while it happens: the delay notice in the airline's app, boarding passes, receipts for meals or a hotel you had to pay for, and any rebooking confirmations"
  - n: "2"
    text: "Tell the whole story to {{chatgpt}} or {{gemini}}:"
    prompt: "My flight was [delayed X hours / cancelled]. Airlines involved: [list]. What happened: [story]. What am I owed: refund, meal or hotel reimbursement, rebooking? Give me a claim checklist and the exact words to use."
  - n: "3"
    text: "If the airline's first answer is a form-letter refusal, go back with the receipts:"
    prompt: "They said no and pasted their policy. Here is their reply and here are my receipts. Draft a follow-up that cites their own policy wording and asks for a specific amount."
indicesText:
  prompt: "One story + screenshots"
  hassle: "Save receipts as you go"
  risk: "Low: worst case is a no"
---

# Get your money back from a wrecked flight

**What it does**: AI turns your messy travel day into a specific claim: what the airline owes you (refund, meal and hotel reimbursement, rebooking), which policy wording applies, and the exact message to send. When the airline stonewalls, it drafts the follow-up.
**How long**: 15 minutes to file, days to resolve. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ Screenshots and receipts | ★☆☆☆☆ Just the app | ★☆☆☆☆ Worst case is they say no |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. **Collect evidence before you leave the airport.** Screenshots of the delay notice, your receipts, the rebooking confirmation. Claims go better with timestamps
2. Tell the AI the full story in one message:

> My flight was [delayed X hours / cancelled / rerouted]. Here is what happened: [airlines involved, where you were flying, what the airline offered you, what you spent]. What am I entitled to from the airline: a refund, meal or hotel reimbursement, rebooking on another airline? Give me a checklist of what to claim, and tell me the exact words to use when I contact them.

Name any partner airline the flight was actually operated by, and paste or upload the airline's policy page if the first answer feels generic
3. Send the claim through the airline's own channels: app chat, the refunds form on their site, or email. Use the AI's wording, but check the numbers in it against your receipts
4. **If refused, escalate once with specifics.** One traveler's delayed codeshare flight bounced between airlines and claim companies until ChatGPT worked out which airline actually owed the compensation and what to say; the airline then paid $500 (self-reported on Hacker News; one story, not a promise)

### What you can realistically ask for in the US

A cancelled flight gets you a refund of the unused ticket, by the original payment method, without you having to beg; you're entitled to it even if you accepted a rebooking instead. For controllable delays and cancellations, most US airlines also commit to meals, hotels, and rebooking on a partner; each airline publishes its own commitments. AI is good at matching your situation to whichever airline's policy you paste in. Compensation beyond refund and expenses (the kind European rules mandate) generally doesn't exist for US domestic flights, so be suspicious of anything promising $700 checks.

### Watch out

- **Refund the ticket, not the trip.** The airline owes you airfare and their promised care, not your vacation cost. Non-refundable hotels and missed tours are travel insurance territory
- **The airline that operated the plane is the one that owes you.** Codeshares are designed to make this confusing; name both airlines in your message
- **Claims companies take a cut for work AI does free.** For a straightforward delay, the do-it-yourself route with an AI-drafted message usually gets the same result without the 30% fee
- **Keep expectations honest.** The stories that end in payment are self-reported; plenty of claims still die in form letters. The cost of trying is 15 minutes

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
