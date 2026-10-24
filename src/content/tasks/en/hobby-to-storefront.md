---
task_id: hobby-to-storefront
lang: en
indices: {prompt: 3, hassle: 3, risk: 2}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Work, Creation]
type: agent
last_tested: pending
related: [personal-site, agent-research-report, complaint-letter]
title: "Turn the craft into a shop"
tagline: "Listings, photos, pricing: the selling work AI actually takes off your hands"
accent: "#f97316"
accent2: "#fdba74"
icon: diy-tool
order: 14
steps:
  - n: "1"
    text: "Photograph your work on a plain background in daylight, five or six shots per item. This is the one part AI can't do for you"
  - n: "2"
    text: "In {{chatgpt}} or {{gemini}}, work through the setup one decision at a time:"
    prompt: "I make [what you make]. Help me start selling online, one question at a time: which platform fits me, how to price so I don't work for free, then write my first listing: title, description, search tags."
  - n: "3"
    text: "Answer its questions, take the listing, and post it. Then use it weekly:"
    prompt: "Here are my sales this month and what sold. What should I make more of, what price looks wrong, and draft my shop announcement for the holiday season."
indicesText:
  prompt: "One question at a time"
  hassle: "Photos + a few evenings"
  risk: "Your money details stay yours"
---

# The shop you kept postponing

**What it does**: AI handles the selling scaffolding that stops most craftspeople: choosing a platform, pricing with a real margin, writing listings with the search tags buyers type, and the weekly tune-up. Your hours go into the work; the paperwork shrinks to prompts.
**How long**: A few evenings to the first listing, 15 minutes a week after. **Does it cost money**: Platform fees apply (Etsy listing fees, a domain); the AI part is free tiers' territory.

| Effort | Setup | Risk |
|---|---|---|
| ★★★☆☆ Real work, real evenings | ★★☆☆☆ Platform account + photos | ★★☆☆☆ Pricing mistakes cost real money; sanity-check the math |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. **Photos first, human-made.** Daylight, plain background, five or six angles, one detail shot. No photo, no sale; and this is the step where AI genuinely can't substitute for you
2. Ask it to interview you, not advise you:

> I make [what you make]. Help me start selling online. Walk me through, one question at a time: which platform fits my price range and time (Etsy, a marketplace, or my own simple site), how to price so I don't work for free (materials + my hours + a margin), and then write my first product listing: title, description, tags buyers actually search for.

The questions it asks (how many hours per piece, what materials cost, what similar shops charge) are the ones first-time sellers skip, and skipping them is how shops lose money per sale
3. **Check the pricing math yourself.** Materials + your hours × a wage you could accept + platform fees + a margin. If the number is uncomfortably high, that's the market telling you something; adjust the product, not the wage
4. For each listing: title, description, and 13 tags of phrases a buyer would actually type ("walnut end table live edge", not "beautiful handcraft"). Ask for variations and pick
5. The weekly ritual is where agents earn their keep: paste the week's numbers, ask what to make more of and which price looks off, draft the shop announcement. Sellers report going from zero to a full AI-assisted shop (listings, Pinterest posts, print-on-demand pipeline) inside days; the ones who last treat AI as staff, with the owner checking the register

### What AI doesn't replace

The craft, the photos, the shipping runs, and the judgment about whether this hobby should carry money at all. A shop that needs you to enjoy the making survives the slow first months; a shop built only to be a shop usually doesn't.

### Watch out

- **Platform rules are contracts.** AI can summarize Etsy's fee structure or a marketplace's handmade policy, but read the current policy page yourself before listing; these change more often than AI's training data
- **Never let it auto-answer customer problems with promises** (refunds, remakes) you haven't approved. Draft yes, send no
- **Sales tax is real.** Once sales are regular, the tax question needs an actual answer from an actual source; a chatbot's confident summary isn't it
- **The first ten listings will be mediocre.** Publish anyway; the weekly AI review loop fixes faster than pre-emptive polishing

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
