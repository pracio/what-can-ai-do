---
task_id: appliance-fix-along
lang: en
indices: {prompt: 1, hassle: 1, risk: 2}
paths:
  - {tier: agent, tool: chatgpt-voice, region: us, verified: pending}
  - {tier: agent, tool: gemini, region: us, verified: pending}
domains: [Home]
type: agent
last_tested: pending
related: [fix-computer, ai-health-consult]
sources:
  - title: "Fix a washing machine drainage fault with ChatGPT voice and photos"
    url: "https://agentplays.ai/uc/fix-a-washing-machine-drainage-fault-with-chatgpt-voice-and-photos.html"
    note: "First-person account by Ewan MacLeod"
title: "AI can sit with you while you fix it"
tagline: "Photo of the error light, then step by step, out loud"
accent: "#4ade80"
accent2: "#86efac"
icon: fix-computer
order: 9
steps:
  - n: "1"
    text: "Open the app's voice mode, then photograph the model label and the flashing error light. Speak while you show: \"It's a washing machine, this light is blinking, it won't drain\""
  - n: "2"
    text: "Follow one step at a time, narrating what you see and sending photos:"
    prompt: "Walk me through this one step at a time, safest checks first. Wait for my photo before the next step. Stop me before anything that needs a professional."
  - n: "3"
    text: "If the machine isn't recognized, find the manual PDF on the maker's site, upload it, and ask again"
indicesText:
  prompt: "Show and tell"
  hassle: "A screwdriver and a bowl"
  risk: "Unplug before you open anything"
---

# Fix the thing before you replace it

**What it does**: You show the appliance (photo of the model label, the error light, the leak) and talk through the repair live. AI identifies the likely fault, walks you one step at a time, confirms each step from your photos, and tells you when to stop and call a technician.
**How long**: 10 minutes to an hour, depending on the fault. **Does it cost money**: No.

| Effort | Setup | Risk |
|---|---|---|
| ★☆☆☆☆ Talk and photograph | ★☆☆☆☆ Just the app | ★★☆☆☆ Water, power, gas: know when to stop |

## How to do it

### Using ChatGPT voice mode (or [Google Gemini](https://gemini.google.com/))

1. **Unplug the machine first** if the fix involves opening anything. Then open voice mode, show the camera the model label and the error light, and describe the symptom out loud
2. Say the full boundary out loud too, so it's in the conversation:

> Walk me through fixing this one step at a time, cheapest and safest checks first. Wait for my photo or confirmation before the next step. Tell me to unplug it whenever that's needed, and stop me before anything that needs a professional: gas, mains wiring, sealed parts.

This one sentence is what keeps a free repair from becoming a costly one
3. Work one step at a time and say what you see: "The filter cap is off, there's a coin and some lint". The back-and-forth is the point; a one-shot answer gives you a manual, the conversation gives you a guide that adapts when the photo surprises it
4. One writer's washing machine flashed a drain error with a new machine already sitting in his online cart. ChatGPT walked him through opening the drain filter with a flathead screwdriver, draining it into a bowl, and clearing the debris. His verdict: "I did. It worked." A similar photo-first loop has saved diagnostic fees on cars (check-engine lights, photographed and described before the mechanic visit)

### Why voice and photos, not a search

Searching "Whirlpool WFW5620 error F9 E1" gets you a forum thread for a different model year. Showing and telling keeps the loop short: AI sees what you see, adjusts when the part looks different from the manual, and you never touch the phone with wet hands. Older relatives who would never type a prompt get on fine with talking.

### Watch out

- **Unplug before opening. Water and mains don't mix.** For gas appliances and anything behind a sealed panel, stop at the diagnosis and call a pro
- **Warranty: opening some sealed parts voids it.** If the machine is under warranty, use the AI session to describe the fault precisely for the warranty call instead
- **AI can misidentify parts from a bad photo.** If its instruction doesn't match what's in front of you, say so; don't force a part that doesn't fit
- **Know the stop line.** Anything with gas, mains wiring, or a structure (drums, door glass) is a technician's job. A correct diagnosis still saves you money on the service call

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*

*Sources: the washing machine case is from [a first-person account at AgentPlays](https://agentplays.ai/uc/fix-a-washing-machine-drainage-fault-with-chatgpt-voice-and-photos.html).*
