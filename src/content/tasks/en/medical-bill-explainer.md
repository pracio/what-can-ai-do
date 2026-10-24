---
task_id: medical-bill-explainer
lang: en
indices: {prompt: 2, hassle: 2, risk: 2}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Money, Health]
type: agent
last_tested: pending
related: [summarize-doc, complaint-letter, insurance-claim-appeal]
sources:
  - title: "I Used AI to Dispute a Medical Bill and Saved $1,201.80"
    url: "https://www.businessinsider.com/used-ai-help-me-dispute-medical-bill-1200-2026-3"
    note: "Business Insider reporter's first-person account; the two-document workflow follows her method"
  - title: "How we verify"
    url: "https://triedprompts.com/use-cases/appeal-a-surprise-dental-bill-with-chatgpt/"
    note: "Reconstructed prompt of the same case"
title: "AI can audit your medical bill"
tagline: "Bill + EOB in, list of bogus charges out"
accent: "#f87171"
accent2: "#fca5a5"
icon: medical-bill
order: 6
steps:
  - n: "1"
    text: "Request an itemized bill from the provider (a patient portal usually has it). Download your EOB from the insurer's site. You need both"
  - n: "2"
    text: "Upload both to {{chatgpt}} or {{gemini}} and send this prompt:"
    prompt: "Here are two documents: my itemized hospital bill and my insurance company's explanation of benefits (EOB). Compare them line by line. Flag every charge that is billed twice, charged above the allowed amount on the EOB, or for something I don't recognize. For each problem, quote the exact line from both documents and show the math. Then tell me which ones are worth disputing and what to say."
  - n: "3"
    text: "It comes back with a list. Check each flagged line against the papers yourself, then ask for the dispute letter:"
    prompt: "Draft an appeal letter to my insurer about the duplicate charge, in the format they require. Keep it factual. Include the bill line numbers."
indicesText:
  prompt: "2 files + 2 prompts"
  hassle: "Get the EOB first"
  risk: "You decide, you submit"
---

# Audit a medical bill before you pay it

**What it does**: AI reads your itemized bill and your insurer's explanation of benefits side by side, finds charges that don't match up (billing you twice, charging above the allowed amount, services you never got), and drafts the appeal letter. You check its work and mail the letter.
**How long**: 20 minutes once you have both documents. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ Getting the two documents is the hard part | ★☆☆☆☆ Just the app | ★★☆☆☆ A wrong accusation wastes a week; check every claim |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. Get an **itemized bill** from the hospital or clinic (patient portal, or call and ask; they must provide it) and your **EOB** from the insurer's site or app. The EOB is the document that says what the insurer allows, what they paid, and what's left for you
2. Upload both files and send the prompt above. If the files are photos of paper, take them in good light, one page per photo
3. For every flagged line, find it in the paper documents yourself. AI misreads scans sometimes, and a duplicate charge is a stronger dispute when you can point to both copies
4. Ask for the appeal letter only after the list checks out. Insurers have their own format and deadlines, so add: "My insurer is [name], the claim number is [#], and the appeal deadline is [date]"

### Why the two documents matter

A bill alone can't be audited; the EOB is the reference. The EOB lists the allowed amount for each service code, so a charge above that amount, or a service the EOB shows as already paid, is a concrete discrepancy with two paper trails. This is also why the job suits AI: comparing two long documents line by line is slow for a person and instant for a machine.

### One real case

A Business Insider writer got a $1,201.80 balance after a dental visit. She gave ChatGPT her receipts, EOB, and call notes. It flagged duplicate evaluations and a charge at seven times the allowed rate, and drafted the appeal. Her first appeal was denied; ChatGPT then drafted a second-level appeal. The office never billed her the balance. Her account is one person's experience, not a guaranteed outcome, but the workflow is the point: two documents in, specific line-item disputes out.

### Watch out

- **AI finds discrepancies, it doesn't judge intent.** A flagged line might have a legitimate explanation (a code the biller will fix with one call). Start with the provider's billing office; an appeal to the insurer is the second step
- **Never send your SSN or full claim numbers into a chat** you don't trust. Claim numbers are fine; the bill itself usually doesn't need your SSN in frame
- **Deadlines are on you.** Insurer appeal windows are often 180 days from the EOB date, but plans differ. Mark the date before you start
- **This is admin help, not medical or legal advice.** If the amount is large or the dispute escalates, a patient advocate or a billing-savvy attorney is the next step

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*

*Sources: the dental case above is from [a Business Insider first-person account](https://www.businessinsider.com/used-ai-help-me-dispute-medical-bill-1200-2026-3) (March 2026).*
