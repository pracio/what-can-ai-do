---
task_id: restore-old-photo
lang: en
indices: {prompt: 4, hassle: 1, risk: 1}
paths:
  - {tier: chat, tool: chatgpt, region: us, verified: pending}
  - {tier: chat, tool: gemini, region: us, verified: pending}
domains: [Life, Creative]
type: chat
last_tested: pending
related: [colorize-old-photo, animate-old-photo, organize-photos-agent]
title: "AI can restore old photos"
tagline: "Faded and blurry → sharp and in color, in 5 minutes"
accent: "#fbbf24"
accent2: "#fde68a"
icon: restore-old-photo
order: 1
steps:
  - n: "1"
    text: "Open {{chatgpt}} or {{gemini}} on your phone → ＋ → Photos, pick an old photo"
  - n: "2"
    text: "Send this prompt:"
    prompt: "Restore this old photo: improve sharpness, repair damage and fading, and colorize it if it's black and white. Keep every facial feature exactly the same."
  - n: "3"
    text: "Wait 30 seconds — not happy? Just say what to change"
indicesText:
  prompt: "1 sentence"
  hassle: "No install"
  risk: "Almost none"
---

# Restore old photos

**What it does**: Turn faded, blurry, or black-and-white family photos into sharp, clean color images. Works on photos you snap with your phone or scan at home.
**How long**: 5 minutes. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★★★★☆ One paste away | ★☆☆☆☆ Just need the ChatGPT app | ★☆☆☆☆ Photos get uploaded — skip anything sensitive |

## How to do it

### Using [ChatGPT](https://chatgpt.com/) (or [Google Gemini](https://gemini.google.com/)) on your phone

1. Open ChatGPT, tap **＋** → **Photos**, and pick the old photo (for paper photos, take a picture of it first in even lighting with no glare)
2. Copy and send this prompt:

> Restore this old photo: improve sharpness, repair damage and fading, and colorize it if it's black and white. Keep every facial feature exactly the same.

3. Wait about 30 seconds. Not happy with it? Just say what to change — "make the faces sharper", "warmer colors" — and it'll try again

### Tips that actually matter

- **Paper photos**: prop them on a plain surface near a window, shoot straight down. A glass frame will glare — take the photo out if you can
- **Group photos**: restore the whole shot first, then ask it to zoom in on one person if needed
- **Badly damaged photos** (torn, water-stained): it still works, but expect softer results around the damaged areas. It fills in gaps by guessing, so compare faces carefully against the original

### Watch out

- The AI fills in missing details by making its best guess. For one-of-a-kind family photos, keep the original file untouched and treat the restored version as a copy
- Results vary between apps. If ChatGPT's version looks off, try the same prompt in Gemini — they fail differently

---

*Last tested: pending — this walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
