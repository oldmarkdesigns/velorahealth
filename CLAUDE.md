# Velora Health – Design Engineer case (arbetsprov)

Work sample for the role **Design Engineer, Brand & Growth** at Velora Health.
Source brief (Swedish): `~/Desktop/Desktop/Work/Case Studies/Velora/Velora arbetsprov Design Engineer.pdf`
(a printed claude.ai artifact). When in doubt, re-read the brief – this file summarises it but does not replace it.

Starting point for all research: https://velora.se

---

## 1. The task in one paragraph

Set a clear direction for how Velora should **feel, sound and look**, then prove it holds in
(a) a new version of the **start page** that can be opened and scrolled on mobile, and
(b) **one ad** in the same direction. They want a holistic take ("helhetsgrepp"), not just a pretty page.
The deliverable must make it easy for Velora's leadership team to understand and pick a path in a few minutes.

## 2. Context from the brief

- Velora has helped thousands of people lose weight with medical treatment and follow-up.
- For most people the journey starts on velora.se. The start page must carry this journey:
  1. **Landar** – a visitor considering treatment arrives at velora.se.
  2. **Förstår** – immediately sees what Velora is and who it is for.
  3. **Litar på oss** – feels safe trusting Velora with their health.
  4. **Bokar möte** – proceeds to a free online meeting with care staff. Step 4 may link out to the existing flow.
- The start page must do three things at once:
  - **Konvertera** – every percentage point more who book a meeting matters.
  - **Skapa förtroende** – it is about health and weight; tone and safety weigh as much as layout.
  - **Kännas premium** – something you'd trust with your health, "not yet another ad".

## 3. Requirements (what the brief actually states)

### Work steps
1. **Utforska** – review the current site, preferably on mobile. What works, what doesn't, and why?
2. **Sätt riktningen och bygg med AI** – formulate the brand direction; show it in a new start page (mobile-scrollable) and an ad.
   The book-a-meeting button links to the existing flow: **velora.se/kom-igang**.
3. **Gör det lätt att besluta** – the delivery should let leadership understand and choose in minutes.

### Brand direction
- Velora's current identity is "a starting point, not a rulebook": **keep** what feels like Velora, **challenge** the rest.
- Express the direction as **3–5 brand principles** covering visual expression, verbal expression and tone.
  They must work for the start page, for ads, and for marketing that doesn't exist yet.
- Presentation format is free: principles in text, moodboard, typography and colour, or a combination.

### The expression is mine
- I write the copy, set the tone and choose the images.
- Images: may start from velora.se's images; stock or AI-generated images are allowed **but the choice must be motivated**.
- **Do not use AI-generated people that look like patients.** They assess the choice, not the photo.
- Consider typography, rhythm, headings, microcopy, and making the visitor feel **understood rather than sold to**.

### Versions
- One or more versions allowed; quantity is not rewarded. One well-made version beats several half-finished ones.
- If more than one: **max three**, with clearly different approaches (not just colour or copy), plus a clear recommendation and why.

### Rules ("Ramar")
- **Time: max 4 hours.** Hard prioritisation is part of the task.
- **AI is required.** Any tools. They judge *how smartly* AI was used: where it accelerated, where I redirected it, how quality was assured.
- **Underlag:** logo, colours, images and facts (prices, how treatment works, what's included) are all on velora.se.
  **Do not invent facts.**
- **Målgrupp:** no audience description is given. Make my own assumptions and write them out in the decision document.
- **Medical rules:** no medical knowledge required, but there are rules for what may be said about treatment and
  medicines. Any assumptions about them must be written out.
- **Questions:** asking Velora when something is unclear is a plus.
- Nothing from the case will be used by Velora.

### Out of scope
Subpages, quiz, booking flow, backend, integrations. No other channels beyond start page + ad
(may *talk about* how the direction extends to them in the presentation).

## 4. Deliverables (submit within 7 days of receiving the case)

| # | Deliverable | Notes from brief |
|---|-------------|------------------|
| 01 | **Sidan** – the start page | A link openable and scrollable on mobile. Claude artifact / v0 / Framer / Lovable etc. is enough; Figma sketches or images are not. **Bonus:** build it in **Astro** and deploy it yourself (e.g. Vercel or Netlify) – "exactly how we will work". |
| 02 | **Annonsen** – the ad | Same direction, e.g. Meta 1:1 or 9:16. A still image is enough. Must feel like the same brand as the start page and lead there. |
| 03 | **Beslutsunderlag och designmotivering** | **One page** for leadership: brand direction in 3–5 principles, audience assumptions, what was wrong with today's start page, what was kept/changed and why, expected effect, what was cut. If several versions: compare side by side. |
| 04 | **Process och promptlogg** | **Process:** what I did first, order of work, decisions that steered the direction. **Kvalitetssäkring:** how I checked it was right and used AI to review my own work. **Promptlogg:** the prompts that actually produced the solution, in order, **verbatim** (shared-conversation link, export or copied text – not tidied up afterwards). **Styrning:** where I changed/rejected AI suggestions, and **at least one time AI went wrong** and how I noticed. |

They are especially curious about: *What did you do first (research, sketches, copy, or straight into code) and why?*
and *How did you make sure it was right?* (e.g. AI critique of the design, fact-checking against velora.se,
mobile testing, finding weaknesses in the copy).

### Follow-up
Velora assesses the submission and decides on a presentation. Written feedback either way.
Presentation: **30 minutes**, alongside an interview, with the team and the person responsible for the brand.
Minute 0–5: present as to leadership – **recommendation first**.

## 5. Open questions

Things the brief leaves open or that are missing from the PDF. Resolve by asking Velora, or decide and
**write the assumption down** in the decision document.

- [ ] **Assessment criteria ("Bedömning")** – the brief's nav has a BEDÖMNING section, but its content is not in the PDF export. The presentation timeline is also cut off after "0–5". Re-open the original artifact or ask Velora.
- [ ] **What counts toward the 4 hours?** Does project setup, exploration and writing the decision doc/process log count, or only design/build?
- [x] **Ad format** – decided: **9:16** (Story/Reel), mobile-native like the page.
- [ ] **Format of deliverables 03 and 04** – "en sida" for 03; no format given for either (web page in the Astro site, PDF, doc?).
- [ ] **Hosting** – Vercel or Netlify (both given as examples). Public URL vs. unlisted?
- [ ] **Audience** – no description given; my assumptions must be explicit.
- [x] **Medical/pharma marketing rules** – decided: **cautious stance**. No drug brand names on start page or ad; outcome numbers only as attributed study ranges with premises; no before/after, fear stats or unverifiable superlatives. Assumptions written out in `docs/direction.md` §3 (still assumptions – not verified legal fact).
- [x] **Calculator** – decided: keep, as an interactive **range + premises** (16–25 % / 12 months, ~10 % / 4 months, per velora.se), not a single number.
- [ ] **Image usage** – may velora.se images/logo be reused directly in the case build? The brief suggests yes ("utgå gärna från bilderna på velora.se") – confirm quality/availability when exploring.
- [ ] **One version or several?** – my call; default to one well-made version unless exploration clearly argues for comparing approaches.
- [ ] **Desktop** – brief stresses mobile; desktop quality is not mentioned. Decide how much desktop polish fits in 4 h.

## 6. Plan (proposal – time boxes sum to ~4 h)

1. **Explore (~35 min)** – walk velora.se on mobile (and desktop). Capture screenshots.
   Build a fact inventory in `docs/facts.md`: prices, how treatment works, what's included, claims and wording –
   **each with its source URL**. Note logo, colours, typography and imagery. Write what works / doesn't and why.
2. **Direction (~45 min)** – audience assumptions; medical-rule assumptions; 3–5 brand principles (visual + verbal + tone);
   explicit keep vs. challenge list; type and colour decisions; voice examples.
3. **Build the start page (~90 min)** – Astro, mobile first. Structure follows the journey Landar → Förstår → Litar på oss → Bokar möte.
   Primary CTA links to `https://velora.se/kom-igang`. Swedish copy, all facts from `docs/facts.md`.
4. **Ad (~20 min)** – one still in the same direction that leads to the start page.
5. **Quality check with AI (~20 min)** – fact-check every claim against velora.se, design critique, copy critique
   (understood vs. sold to), real mobile test, accessibility basics. Log what AI got wrong.
6. **Decision document + process log + deploy (~30 min)** – one page for leadership, recommendation first;
   process + verbatim prompt log; deploy and verify the URL on a phone.

## 7. Working rules for Claude in this repo

- **Never invent facts.** Prices, treatment process, inclusions, statistics and claims must come from velora.se and be logged with a source URL. If a fact can't be verified, leave it out or flag it.
- **Don't add requirements the brief doesn't state.** If something is unclear, add it to Open questions instead of guessing.
- **Respect the scope**: start page + ad only. No subpages, quiz, booking flow, backend or integrations.
- **No AI-generated people that look like patients.** Any image choice needs a written motivation.
- Site copy is **Swedish** (`lang="sv"`). Docs for this repo are in English unless written for Velora.
- **Mobile first.** Check every change at phone width.
- **Prompt log is a deliverable – keep it current**: at the start of every turn, append the user's new prompt to
  `docs/prompt-log.md` verbatim (exact characters, incl. curly apostrophes) and in order; log multiple-choice answers and
  plan approvals too. Never rewrite past entries. Record when AI suggestions are rejected or go wrong.
- **Facts come only from `docs/facts.md`.** Add new facts there (with source URL and status) before using them.
- Keep dependencies minimal; add one only when it clearly earns its place.
- Respect the 4-hour budget: prefer one well-made version over breadth.

## 8. Project setup

- Framework: **Astro** (`astro` 7.x, TypeScript strict). Requires Node ≥ 22.
- Commands:
  - `npm run dev` – dev server (http://localhost:4321)
  - `npm run build` – static build to `dist/`
  - `npm run preview` – serve the build
  - `npm run check` – Astro type check (needs `@astrojs/check` + `typescript` installed on first run)
- Layout: `src/pages/` (routes), `public/` (static assets), `docs/` (process material).
- Docs:
  - `docs/prompt-log.md` – verbatim prompt log (deliverable 04)
  - `docs/facts.md` – fact inventory with sources and use status (single source of truth for copy)
  - `docs/audit.md` – current velora.se audit + benchmark patterns (Oura, Relivo, Tandem, Apple Health)
  - `docs/direction.md` – audience + medical-rule assumptions, brand principles, page outline (approved 2026-11-02)
- `src/pages/index.astro` is a placeholder only.
