---
task_id: first-game-to-steam
lang: en
indices: {prompt: 4, hassle: 4, risk: 3}
paths:
  - {tier: agent, tool: chatgpt-codex, region: us, verified: pending}
domains: [Creation, Work]
type: agent
last_tested: pending
related: [build-game-with-kids, weekend-side-project, hobby-to-storefront]
sources:
  - title: "3 Months Ago I Couldn't Code. Now My Game Is on Steam."
    url: "https://robeoffire.substack.com/p/3-months-ago-i-couldnt-code-now-my"
    note: "First-person series by the developer; the 'AI writes, it doesn't decide' line is his"
title: "The long version: ship a real game"
tagline: "A 45-year-old non-coder put a game on Steam. What it actually took"
accent: "#94a3b8"
accent2: "#cbd5e1"
icon: diy-tool
order: 16
steps:
  - n: "1"
    text: "Start from the small-game level (see build-game-with-kids), then install a coding agent: ChatGPT's Codex or Claude Code. This is the step where you stop making one file and start keeping a project"
  - n: "2"
    text: "Set the direction yourself; that's the job now:"
    prompt: "We're building a small dungeon-crawler: top-down, retro look, one dungeon floor per session, loot that gets better as you go. I want it done in small playable steps: this week just walk and attack. Suggest what to build first, then wait for my go."
  - n: "3"
    text: "Daily loop: play, name what's wrong, ask for the fix, keep what works. When it breaks (it will):"
    prompt: "After your last change, enemies stopped taking damage. Here's what I did since it last worked: [changes]. Find what broke and fix just that."
indicesText:
  prompt: "You direct, it writes"
  hassle: "Months, most days"
  risk: "Costs money; no guaranteed payoff"
---

# What shipping a real game takes (from someone who did it)

**What it does**: This is the honest version of "AI can build your game": a working adult with zero coding background kept at it for months and released a real game on Steam. What AI writes, and what stays yours, is clearer here than anywhere.
**How long**: Months of most-day sessions. **Does it cost money**: Yes: a paid AI plan (about $20/month), Steam's $100 submission fee, possibly more.

| Effort | Setup | Risk |
|---|---|---|
| ★★★★☆ Months | ★★★☆☆ Paid plans + dev account | ★★★☆☆ It may never earn the fees back |

## The story, briefly

A 45-year-old former physique competitor (no coding, no game-dev background) spent three months giving daily instructions to Claude Code and released a dark-fantasy ARPG on Steam: 120,000 lines of code, 100 achievements, subtitles in 95 languages. His summary of the division of labor is the whole lesson: "AI writes. It doesn't decide. What to make, what's broken, how to fix it, whether it's any fun. That part was on me." He also says most days didn't go well. The record of those days is [his series](https://robeoffire.substack.com/p/3-months-ago-i-couldnt-code-now-my), and it's worth reading in full before believing either the hype or the dismissal.

## What transfers to your project

1. **Small playable steps, always.** A step you can play today (walk, then attack, then one enemy) keeps the project alive. A step that takes a month has a graveyard
2. **You are the one who says what's wrong.** "Enemies stopped taking damage after your last change" is a better bug report than most beginners manage, and it's enough. AI doesn't play your game; you do
3. **Decisions don't delegate.** What the game is, what's fun, what to cut. That's the part that makes it yours, and it's the part AI waits for
4. **Budget honestly.** A paid AI plan for months, Steam's submission fee, and the real cost: the hours. Whether it pays back is unknowable in advance; treat sales as a lottery ticket on top of an education you were going to buy anyway

### Watch out

- **Don't start here.** Start with a small browser game; if months of it delight you, this article is your map. If it bores you, you spent an afternoon, not a season
- **Scope is the killer.** Every failed AI game project dies the same death: "let me add one more system". The fix is a feature freeze you set before you start
- **Save versions and test after every change.** At thousands of lines, "it worked yesterday" is the most valuable sentence in the project
- **Revenue claims online are survivor stories.** For every Steam release there are a thousand abandoned folders. That's fine. The folder teaches too

---

*Last tested: pending. This walkthrough was prepared from the products' documented capabilities and has not yet been verified step-by-step by a real person. If you try it (whether it works or not), [tell us on GitHub](https://github.com/pracio/what-can-ai-do/issues).*
