---
task_id: family-event-site
lang: en
indices: {prompt: 2, hassle: 2, risk: 1}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Family, Creation]
type: agent
last_tested: pending
related: [build-game-with-kids, personal-site, grandma-storybook]
title: "A birthday page instead of a group text"
tagline: "One link: invite, RSVPs, directions, gift ideas"
accent: "#c084fc"
accent2: "#d8b4fe"
icon: make-poster
order: 15
steps:
  - n: "1"
    text: "In {{chatgpt}} or {{gemini}}:"
    prompt: "Make a simple birthday webpage for my daughter turning 6: single HTML file, the details ([date, time, place]), an RSVP section that saves responses, gifts optional note. Pink dinosaur theme, phone-friendly."
  - n: "2"
    text: "It writes the file. You preview it (open the HTML in your browser), ask for changes, then put it online free:"
    prompt: "Looks good except the RSVP button doesn't work on my phone. Fix that. Then give me exact steps to put this online free with a short link."
  - n: "3"
    text: "Host it (the AI walks you through a free host), then text the link. RSVPs land in one place instead of seventeen chats"
indicesText:
  prompt: "One prompt, then edits"
  hassle: "One evening"
  risk: "Almost none"
---

# The party page your phone can build

**What it does**: AI builds a small webpage for the party: details, RSVP list, theme, gift note. You get one link to send instead of a group text, and replies collect themselves.
**How long**: An evening, most of it choosing theme colors. **Does it cost money**: Free (hosting included, with free-tier limits).

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ Prompt, preview, publish | ★☆☆☆☆ Any computer | ★☆☆☆☆ Check RSVPs actually save before sending |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. **Put the real details in the first prompt**: date, place, age, theme, and anything guests need (swim suits? allergies? siblings welcome?). Specific first prompts save five rounds of "wait, also...":

> Make me a simple birthday party webpage for my daughter turning 6. Single HTML file I can put anywhere. Include: the details (Saturday June 14, 2pm, Maplewood Park pavilion), an RSVP section that saves responses, what to bring, and a short note that gifts are optional. Pink dinosaur theme, big friendly text that reads well on phones.
2. **Preview before you publish.** It hands you an HTML file; double-click to open in your browser. Click every button yourself. The RSVP form is the part to test: fill it, submit, and confirm the response is saved somewhere you can see
3. Ask for **free hosting steps** in the same chat. Static hosting (the kind this page needs) is free on several services; the AI gives current steps, and if one doesn't match what you see on screen, say so
4. Send the link. Ask for a follow-up page later if you want: photo gallery after the party, thank-you note template for the kid to fill in

### Why not just an invitation app

Party-invite apps exist and are fine, but they want signups from every relative, they hold your guest list, and they decide the format. A page you generated is yours: grandma clicks a link and it just opens. And the page is a byproduct; the real thing that happened is you made a working website in an evening, and next time (team snack schedule, garage sale, graduation open house) it's twenty minutes because you know the moves.

### Watch out

- **Test the RSVP on the phone you'll actually send from.** The mobile fix request isn't cosmetic; most guests open the link on phones
- **Free hosts have limits** (sleep after inactivity, subdomain names). Fine for a party; ask the AI what the limits are before promising the link to the whole class
- **Don't put the home address and kid's full name on a public link** if you can use a park or venue instead; the guest list is the only audience that needs the street address
- **Keep the old file.** Next party starts from last year's version, and AI edits it faster than it builds from zero

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
