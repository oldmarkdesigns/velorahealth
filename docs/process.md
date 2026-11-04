# Process (deliverable 04)

The verbatim prompts are in `docs/prompt-log.md`. This page covers the process around them.

**How to read this page:** plain text is backed by the project files, and the source is given in brackets.
**[FILL IN: …]** marks a detail only I can supply. **[CHECK: …]** marks something the files suggest but don't prove.

---

## 1. What I did first, and why

I started with research and written direction, not code:

1. **Turned the brief into working rules.** I had AI read the PDF and write `CLAUDE.md` with the requirements, open questions and a time-boxed plan. I told it not to build anything yet and not to assume requirements the brief doesn't state. [prompt log 1; commit `cc54459`]
2. **Gave my own view of velora.se and four benchmarks** (Oura, Relivo, Tandem, Apple Health), with six concrete problems on today's start page. [prompt log 4]
3. **Built a fact inventory before writing any copy.** Every price, claim and credential is listed with its source URL and a status (OK / premise / avoid). The rule was: if it isn't in `facts.md`, it doesn't go on the page. [`docs/facts.md`]
4. **Wrote the direction and approved it before the build:** audience assumptions, medical-rule assumptions, four principles, a keep/challenge list and a page outline. [`docs/direction.md` §1–11; prompt log 8; commit `63258df`]

**Why this order:** the brief is about health and medicine, and it says not to invent facts. If the facts and the tone weren't settled first, AI would fill the gaps with plausible copy I'd have to unpick later.
**[FILL IN: one sentence in your own words on why you didn't start with sketches or code.]**

## 2. Order of work

From the commit history and the prompt log (the dates are when commits were made, not hours worked):

| Step | What | Evidence |
|------|------|----------|
| 1 | Setup, brief → `CLAUDE.md` | `cc54459` (2 Nov) |
| 2 | Audit, benchmarks, facts, direction | `63258df` (2 Nov) |
| 3 | First full build of the start page | `dfb50b9` (2 Nov) |
| 4 | Premium pass and section-by-section refinement (hero, pricing, steps, FAQ) | prompt log 11–96 |
| 5 | Hero image and colour iterations | prompt log 101–124, 184–190 |
| 6 | First 9:16 ad | `d146201` (3 Nov) |
| 7 | Mobile pass: menu, hero, navbar, stories | prompt log 144–212 |
| 8 | Feedback round with testers | prompt log 213 |
| 9 | Ad: three directions → C, then version B | prompt log 243–261 (4 Nov) |

**Decisions that steered the direction:**
- **"Care you can trust" instead of "medicine that works".** We market the care team and the path, not the medicine. [`direction.md` §1, P4]
- **A cautious medical stance:** no drug names on the page or in the ad, and outcome numbers only as ranges with their premises. [prompt log 6; `direction.md` §3]
- **The calculator shows a range with its premises** instead of a single number. [prompt log 6]
- **The premium pass.** The first build felt too close to the original, so I chose to take bigger visual risks. [prompt log 11]
- **One booking action in the hero,** set up as a testable hypothesis. [`direction.md` §9]

## 3. Prioritising within four hours

- **[FILL IN: how much time you actually spent, and what you counted toward it.]** The commits span 2–4 November, and git can't show active working time. This is still an open question in `CLAUDE.md` §5.
- **One version of the page,** following the brief ("one well-made version beats several half-finished ones"). [`CLAUDE.md` §3]
- **Kept to scope.** No team page or test-list page was built. The "Läs mer om vårt team" and "vilka prover vi behöver" links are disabled placeholders instead. [`direction.md`, entries 215–216]
- **Not done yet:** deployment (prompt log 143: "Not yet"; there's no Vercel or Netlify config in the repo). **[FILL IN: deployed URL, or why not.]**
- **[FILL IN: what you deliberately cut to stay within the time.]**

## 4. Quality checks

Documented in the project files:
- **Facts against velora.se.** Each fact has a source and status in `facts.md`. Two figures couldn't be found on velora.se and are flagged instead of quietly used: "5 000+ patienter" and "20 % i snitt". [`facts.md`, Social proof]
- **Checked whether AI had invented anything.** I asked whether the "Trygg vård" statements were real. They were checked against /integritetspolicy and /om-oss, and one wording was tightened to match the source. [prompt log 213; `direction.md` entry 213]
- **The Trustpilot score (4,7, 316 reviews)** was read on Velora's Trustpilot page on 3 Nov. [`facts.md`]
- **Layout at phone widths.** Overflow was checked at 320, 360 and 375 px up to 1440 px after layout changes, in the browser pane's emulated viewports. [`direction.md`, many "Verified" lines]
- **Contrast was measured** for the hero text, navbar links and ad text. Some values are still under 4.5:1 by choice (see §5). [`direction.md` entries 183–189, 245]
- **Tested with people.** Testers found the step order confusing, so "Så går det till" was rebuilt as a numbered sequence. [prompt log 213] **[FILL IN: who they were and how many, e.g. friends or family, and how you ran it.]**
- **AI design critique:** the `/design-taste-frontend` skill was used for the hero title. [prompt log 23] **[CHECK: did you run any other AI critique of the design or copy? Add it, or delete this line.]**

Not documented, so don't claim it unless you did it:
- **[FILL IN: tested on a real phone (which one)?]** The files only show emulated viewports.
- Animations weren't verified in the browser pane: it froze them at 0 ms. [`direction.md` line ~516]
- **[FILL IN: any check of the medical-rule assumptions against an actual source?]** They're still written as assumptions. [`direction.md` §3]

## 5. Trade-offs

- **"5 000+ patienter" and "Gå ner 20 % i vikt i snitt" are kept** even though they fall outside my own cautious stance. "5 000+" comes from a Trustpilot snippet and isn't on velora.se. "20 % i snitt" is on velora.se's mobile hero, but the site gives 16–25 % as the average. Both should be confirmed with Velora. [prompt log 39, 47, 124; `facts.md`]
- **"5,3 miljoner" is back** in "Visste du att?", reframed as "you're not alone" and without the cancer list. It was marked *avoid*. [`direction.md` entries 128–136]
- **The top of the hero is lighter, at the cost of contrast:** some navbar links over the photo are below 4.5:1. [`direction.md` entry 189]
- **An AI-generated hero photo was tried, then replaced** with velora.se's own photo, because an AI-generated person can read as a patient. The cost: a 1024 px source that's soft on wide screens. Ad version A still uses the AI-generated photo; version B uses velora.se's. [`direction.md` entries 243, 261] **[FILL IN: which ad version you're submitting, and why.]**
- **The sticky booking bar on mobile was added, then removed.** [prompt log 9, 144]

## 6. Steering AI

### Where I overruled AI (broad examples)

**A. Visual options that were rearrangements, not ideas.**
When I asked for alternatives, AI often gave variations on its first idea. I rejected all three pricing layouts ("none of those are talking to me"). The next round went in a different direction, a receipt showing the total cost. [prompt log 71–73; `direction.md`, "Pricing layouts explored"]
The same thing happened with the mobile hero statements: I rejected both AI's cards and the tilted pills, and chose a plain list. [prompt log 195–200]

**B. Copy and conversion choices where I went against AI's recommendation.**
- AI recommended no sticky bar on mobile. I chose a calm one, then later removed it. [prompt log 9, 144]
- I questioned the headline "Det handlar inte om viljestyrka" because will and commitment do play a part. It became "biologi, inte bara om vilja". [prompt log 137; `direction.md` entry 193]
- For the ad subtitle, AI recommended option 1. I chose option 4. [`direction.md` entries 251–252]

### One time AI got it wrong

**Prompt log 195 → 197.** I asked for the mobile statement pills to use "the titles and copy from the attached reference image" (a screenshot of velora.se). AI took that to mean "rebuild them as the reference's white cards, with subtitles", and replaced the pills with new cards. What I wanted was the existing pills in the reference's position.
**How I caught it:** **[FILL IN: how you noticed, e.g. in the browser preview or on your phone. The files don't say.]** I corrected it in plain terms: "Keep the pills we had … Don't change their styling or turn them into cards." [prompt log 197, marked "AI went wrong"]
**What I took from it:** a reference image is ambiguous. Say which properties to take from it (position, text, style) and which to leave alone.
**[CHECK: swap this for another instance if you prefer. Other documented ones: AI read "stop logging to prompt log" as an order to stop (entry 122); the desktop service icons weren't added (entry 149); the "Visste du att" section went missing (entry 135); a CSS rewrite dropped the serif italics (entry 233).]**
