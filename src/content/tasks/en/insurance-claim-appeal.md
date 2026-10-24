---
task_id: insurance-claim-appeal
lang: en
indices: {prompt: 3, hassle: 2, risk: 2}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Money]
type: agent
last_tested: pending
related: [medical-bill-explainer, explain-contract, complaint-letter]
title: "AI can fight a denied insurance claim"
tagline: "Denial letter in, list of holes in their reasoning out"
accent: "#fbbf24"
accent2: "#fcd34d"
icon: insurance-appeal
order: 7
steps:
  - n: "1"
    text: "Collect three things: the denial letter, the relevant part of your policy (the PDF you got at signup), and any emails or call notes about the claim"
  - n: "2"
    text: "Upload them to {{chatgpt}} or {{gemini}} and send:"
    prompt: "My claim was denied. Here are the denial letter and my policy. Which policy wording is the denial based on, and does it actually say that? List every part of the policy that supports coverage, quoting exact sentences."
  - n: "3"
    text: "Read the analysis, correct anything that misquotes your documents, then:"
    prompt: "Now draft my appeal. Use the insurer's appeal address from the denial letter. State the facts, quote the policy language that supports coverage, respond to each reason they gave for denying, and keep the tone factual and calm. Leave a blank for my signature."
indicesText:
  prompt: "3 files + 2 prompts"
  hassle: "Find your policy PDF"
  risk: "Deadlines are yours to track"
---

# Answer a denial letter with the policy itself

**What it does**: AI reads the denial letter against your actual policy, tells you whether their stated reason holds up, lists the policy language that supports you, and drafts the appeal letter. You verify the quotes and submit.
**How long**: About 30 minutes. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★★★☆☆ Three documents to dig up | ★☆☆☆☆ Just the app | ★★☆☆☆ A missed appeal deadline is the real danger |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. Get the **denial letter** (it must list the reason and your appeal rights), your **policy document**, and any notes from calls with the insurer. If your policy is dozens of pages, upload the whole thing; these models handle long documents
2. Send this prompt:

> My insurance claim was denied. Here are the denial letter and my policy document. First, tell me exactly which policy wording the denial is based on. Then tell me: does that wording actually say what the denial letter claims? List every part of the policy that supports my claim being covered, quote the exact sentences, and explain them in plain language.

The key move is making AI quote exact sentences. Paraphrased policy language is where errors creep in; quoted text you can check against the PDF
3. **Verify the quotes.** Search the PDF (Ctrl+F) for the sentences it cited. If a quote doesn't exist, tell it: "That sentence isn't in my policy. Only cite sentences you can point to"
4. Send the second prompt to get the appeal letter. Add your state if the denial might hinge on a state-specific rule: "I live in [state]; note any state insurance rules that apply"
5. Submit through the channel the denial letter specifies, before the deadline. Keep a copy of everything

### Why this works better than asking for "an appeal letter"

Ask for a letter straight away and you get generic politeness that restates your claim. The audit step first makes the letter concrete: it names the exact policy clause, responds to their exact stated reason, and cites documents they must acknowledge. An appeal that reads like it was written by someone who read the policy is harder to dismiss with a form letter.

### Watch out

- **AI can misread ambiguous policy language optimistically.** Insurance policies are written to be narrow. Treat its confidence as a hypothesis, and check the cited sections yourself
- **The deadline is the whole game.** Appeal windows are typically 30 to 180 days depending on the insurer and claim type. Calendar the date the day the denial arrives, before anything else
- **Second denials have a next step.** Most states let you escalate to an external review or file a complaint with the state insurance commissioner. That's a government agency, so look up the process on its official site yourself; AI can tell you it exists, but you file it
- **Documented calls help.** Note the date, name, and what was said every time you call the insurer. Attach the log to your appeal

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
