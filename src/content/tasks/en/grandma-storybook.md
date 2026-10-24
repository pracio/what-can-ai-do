---
task_id: grandma-storybook
lang: en
indices: {prompt: 2, hassle: 2, risk: 1}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Family, Creation]
type: agent
last_tested: pending
related: [make-poster, build-game-with-kids]
title: "Make your grandkid the hero of a real book"
tagline: "Their name, their dog, their town, and a dragon"
accent: "#fb923c"
accent2: "#fdba74"
icon: make-poster
order: 13
steps:
  - n: "1"
    text: "Collect the raw material: the child's name and age, what they love (a purple bike, a dog named Biscuit, dinosaurs), where they live, and one thing that happened recently"
  - n: "2"
    text: "In {{chatgpt}} or {{gemini}}:"
    prompt: "Write a bedtime story for a [age]-year-old named [name]. The hero is [name] and their dog [Biscuit], who live in [town]. The story should involve [what the kid loves], and the lesson is gently about [sharing / being brave / bedtime]. About 600 words, split into pages of about 50 words each. For each page, describe the illustration in one sentence so I can generate pictures."
  - n: "3"
    text: "Then one page at a time:"
    prompt: "Now make the illustration for page 1: [the scene description]. Style: warm, soft colors, children's picture book."
  - n: "4"
    text: "Print the pages at any copy shop (cardstock lasts longer), staple or bind, read it together on video call"
indicesText:
  prompt: "One story prompt, then page by page"
  hassle: "An evening"
  risk: "Almost none"
---

# A book where they're the hero

**What it does**: AI writes and illustrates a personalized picture book with your grandchild as the main character, their dog, their street, their latest obsession. You print it, and it's a real object with their name on the cover.
**How long**: An evening for the first book. **Does it cost money**: Free tiers work; printing costs a few dollars.

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ Two or three prompts per page | ★☆☆☆☆ Just the app | ★☆☆☆☆ Almost none; check the story before printing |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. **Details make the book.** "A story about a girl" produces wallpaper. "Lily, 5, who lost her first tooth this week and is worried the tooth fairy can't find apartments" produces a book she'll demand every night. Whatever you know that a store-bought book doesn't, use it
2. Generate the story with page breaks and illustration notes first, **read the whole story**, fix anything ( pacing, scary parts, the lesson landing too hard), and only then make pictures. Words are cheap to redo; redoing pictures after finding a story problem wastes an evening
3. Make illustrations one page at a time with the same style sentence repeated every time ("warm, soft colors, children's picture book"), or the look drifts between pages. Regenerate any picture that doesn't match
4. **Print it.** PDF the pages, send to any print shop or pharmacy printing kiosk, cardstock for the cover. A laminated staple-bound book survives a four-year-old. Dedicated services will hardcover-bind it if you want a gift-grade copy

### Why this beats buying one

The book knows things about this child that no publisher does. Grandparents at a distance get the best of it: the making is the visit ("what should the dragon steal next?"), and the reading is the bedtime call. Products built exactly for this exist and work fine; doing it with a general chatbot costs less and the details stay yours.

### Watch out

- **Read before printing.** Picture-book AI text is sweet but can be treacly or miss the age mark. You are the editor; the machine is the intern
- **Faces drift.** If you generate the child's likeness from photos, results vary, and the resemblance may unsettle rather than delight. Many families keep illustrations generic and let the words carry the identity; your call
- **Keep the lesson light.** If the moral thumps, ask for a revision: "make the sharing lesson quieter, show it don't say it"
- **Grandkid name and details stay in your chat**; there's no reason to include last names, addresses, or school names in the story

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
