---
task_id: build-game-with-kids
lang: en
indices: {prompt: 2, hassle: 2, risk: 1}
paths:
  - {tier: agent, tool: chatgpt, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Family, Creation]
type: agent
last_tested: pending
related: [weekend-side-project, personal-site, first-game-to-steam]
sources:
  - title: "I (28M) built a full video game with my 5yo son using AI with zero coding knowledge"
    url: "https://www.reddit.com/r/ChatGPT/comments/1pg8740/i_28m_built_a_full_video_game_with_my_5yo_son"
    note: "Father's account: kid dictates prompts, dad saves files"
  - title: "Vibe coding democratizes custom software: dad builds personalized piano learning app for daughter using Claude"
    url: "https://glenrhodes.com/vibe-coding-democratizes-custom-software-dad-builds-personalized-piano-learning-app-for-daughter-using-claude/"
    note: "One-afternoon custom app story"
title: "Build a game with your kid, no coding"
tagline: "They describe the dragon, AI writes the game, you both play"
accent: "#f472b6"
accent2: "#f9a8d4"
icon: game-kids
order: 12
steps:
  - n: "1"
    text: "Open {{chatgpt}} or {{gemini}} on a computer (bigger screen, easier to share) and let the kid talk first:"
    prompt: "My kid (age [X]) and I want to make a simple game together. Make it a single HTML file we can open in a browser. Kid's idea: [their idea, in their words]. Keep the code simple. Show us how to play it."
  - n: "2"
    text: "Play it. Then let the kid ask for changes by voice, typed or dictated:"
    prompt: "The dinosaur should breathe fire when I press space. And give it three lives. And the background should be a volcano."
  - n: "3"
    text: "Save the file each round (File → Save As, version numbers help: game-v3.html). Next session, upload the last version and keep going"
indicesText:
  prompt: "Describe the idea"
  hassle: "A computer, an afternoon"
  risk: "Almost none"
---

# The game they designed, that actually runs

**What it does**: Your kid describes a game in their own words; AI turns it into a small game you open in a browser. Then comes the good part: they ask for changes ("the dragon breathes fire now") and see their ideas become real in seconds.
**How long**: An afternoon for the first version. **Does it cost money**: No (the free tiers handle this fine).

| Effort | Setup | Risk |
|---|---|---|
| ★★☆☆☆ Talking and playing | ★☆☆☆☆ Any computer | ★☆☆☆☆ Frustration when a change breaks; keep old versions |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/))

1. **Let the kid hold the prompt.** Speech-to-text means a five-year-old can dictate "a game where I'm a T-rex and I jump over volcanoes". One dad and his five-year-old built a full game this way, starting on a phone; the kid dictated ideas, the dad handled saving files
2. Ask for **one HTML file**. It opens in any browser by double-clicking; nothing to install, nothing to sign up for. This one constraint keeps the whole project kid-scale
3. **Iterate out loud.** The loop that hooks kids: play it, ask for a change, refresh, play again. Small asks work better than big ones ("make the dinosaur jump higher" lands; "make it awesome" doesn't)
4. **Save versions.** When a change breaks the game (it will), you go back a version instead of starting over. game-v3.html, game-v4.html
5. When it outgrows one file, that's a real milestone: a piano-practice dad built his daughter a custom app in one sitting after starting exactly like this, and the app tracked her real keyboard and ramped difficulty like a game

### What the kid actually learns

Not coding. Designing: deciding what the rules should be, seeing the consequence of a request, learning that "it broke" has a cause you can find. One session of "the dragon falls through the floor, how do we describe the problem to get it fixed" teaches more debugging instinct than an hour of tutorial. And the work is theirs; the parent's job is saving files and asking "what do you want to change next?"

### Watch out

- **Ask for simple on purpose.** "One HTML file, simple code" keeps the AI in kid-project territory. Without it, you get an over-engineered skeleton neither of you can steer
- **Long sessions drift.** After many changes, AI starts forgetting earlier ones. Starting a fresh chat with the latest file pasted in ("this is our game, now add X") resets it
- **The kid dictates, you operate the keyboard.** Reversing this turns it into you building a game while they watch
- **Some ideas genuinely exceed the tool.** "A game like Minecraft" won't fit in one file. Help shrink the idea ("what's the one thing that makes it fun?")

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
