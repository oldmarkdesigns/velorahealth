# Direction: draft for review

Status: **APPROVED, 2026-11-02** (prompt log entry 8). The proposals in §11 are accepted as written.
Sticky action bar: **yes**, a calm version on mobile only, appearing after the hero (prompt log entry 9).
The Swedish copy here is placeholder text to show the voice. Final copy is written during the build.
Every fact comes from `facts.md`.

## 1. In one sentence

**From "medicine that works" to "care you can trust"**: Velora's own plum, told with Oura's calm,
Relivo's clarity, Tandem's concreteness and Apple's way of talking about privacy.

## 2. Audience assumptions

The brief gives no audience description. These are my assumptions, and they go into the decision document.

- **Who:** adults in Sweden with BMI ≥ 27–30 (Velora's eligibility criteria). The patient stories cover women and men aged 35–59, so the audience is broad.
- **Where from:** mostly mobile, many arriving from social ads or search. The ad in this case is one such entry point.
- **Their history:** many have tried diets several times (a recurring theme in the stories).
- **Their state of mind:**
  - tired of and sceptical about quick fixes
  - possibly carrying shame about their weight
  - worried about side effects, the total cost, and who sees their health data
- **Two groups:**
  - first-timers considering medical treatment
  - people switching who are already being treated elsewhere (the site already has a "Byt" block)
- **What they need answered before clicking, in order:**
  1. Is this for me?
  2. Is it real care, and is it safe?
  3. Who will I meet?
  4. What does it cost in total?
  5. What happens when I click?

## 3. Assumptions about medical and advertising rules

These are not legal advice. They are working assumptions, chosen to be cautious, and they go into the decision document.

1. **No advertising of prescription medicines to the public.** I'm assuming Swedish law (läkemedelslagen) doesn't allow it. So: no drug brand names or substance names on the start page or in the ad, and no effect claims tied to a specific drug. We market the **care**, not the medicine. This matches /om-oss: "Velora säljer inte läkemedel".
2. **Outcome claims always come with their premise.** Ranges, not single numbers. "Enligt studier", "i genomsnitt", "resultat varierar". No promises and no guarantees about results.
3. **Patient stories are real (from velora.se) and presented as individual experiences**, with "resultat varierar".
4. **No before/after bodies, no fear statistics, no superlatives we can't verify.** This is both a guess at the rules and a choice of tone.
5. **The Meta ad:** I'm assuming Meta's rules on weight-loss ads apply (no before/after images, no negative body image, 18+ targeting), and that ads for prescription treatment require certification. Velora is LegitScript-certified.
6. Anything that can be read as medical advice stays in the FAQ, in Velora's own wording, and the doctor always decides.

## 4. Brand principles (draft, 4)

Each principle covers the look, the language and the tone, and must work for the start page, the ad and future marketing.

### P1. Understood before sold to
Start with the visitor's experience, then the offer. Weight is not about willpower. Say it once, clearly, without pity.
- **Words:** "du", short sentences, no exclamation marks, no hype ("genombrott", "revolution").
- **Visual:** real people in everyday settings, not bodies or scales.
- **Test:** would the sentence feel OK to read for someone who has felt ashamed of their weight?

### P2. Show it, don't promise it
Every claim comes with its proof: a source, a premise or a named person.
- Ranges with premises instead of a single number.
- Named clinicians with titles.
- Credentials (IVO, LegitScript, Socialstyrelsen) as quiet facts.
- Footnotes are part of the design, not the fine print (Relivo pattern).
- **Test:** can the claim be checked on velora.se?

### P3. Calm is premium
Fewer elements, more space, one point per screen (Oura).
- Plum is a **signal** (the action and key emphasis), not a background wash.
- One action label everywhere.
- An editorial pace: big headline, little text, then the proof.
- **Test:** can you remove one more element without losing meaning?

### P4. The care is the product
Velora sells a care team and a path, not a medicine.
- The story follows the path: free call → health check → personal plan → follow-up.
- Privacy is part of the care (Apple pattern): "Uppgifter om din hälsa används aldrig för marknadsföring."
- **Test:** is the hero of the sentence the person and their team, or the pill?

## 5. Keep / challenge

| Keep | Challenge |
|------|-----------|
| The plum family `#751A4B` / `#2C0015` | Pink wash across whole sections; plum used everywhere |
| The lowercase wordmark, untouched (the logo is up for change) | The heavy rounded heading font ("Ubu"), which reads as an app, not care |
| Manrope as the body font | Three check-mark claims in the hero |
| Warm photos of real people from velora.se | Drug names and kg/week as the selling point |
| Named clinicians | Five action labels |
| Honest pricing including extra costs; the guarantee | Fear statistics and superlatives |
| The voice and trust blocks on /om-oss | Text cards with no images; two repeated selling-point blocks |
| The FAQ content | The single-number calculator |

## 6. Type and colour (starting point)

- **Headings:** an editorial serif with a warm, humanist feel (a free font, chosen during the build) instead of "Ubu". This gives Oura/Relivo seriousness without feeling cold. **Body:** Manrope stays, for continuity with Velora.
- **Colour:**
  - a warm, light neutral base (off-white) instead of pink
  - `#2C0015` for text and headings
  - `#751A4B` **only** for actions, links and key emphasis
  - `#F4EDF1` kept as a quiet secondary surface, for example behind the calculator or the stories
- **Images:**
  - velora.se's own photos of real people in everyday settings
  - stock only for environments or objects, with a reason given
  - **no AI-generated people**
  - clinician portraits from velora.se

## 7. Voice: before → after (placeholder copy)

| Today (velora.se) | Direction |
|-------------------|-----------|
| "Nytt vetenskapligt genombrott. Medicinsk viktnedgång när dieter inte räcker" | "Övervikt handlar inte om viljestyrka." Supporting line: "Velora är en svensk digital vårdgivare. Ett legitimerat vårdteam bedömer om medicinsk behandling passar dig, och följer dig hela vägen." |
| "Se om du kvalificerar dig" / "Kom igång" / "Byt idag" … | One action: **"Boka gratis bedömningssamtal"**. Text under the button: "Börjar med några korta frågor. Kostnadsfritt, och du binder dig inte till något." |
| "Behandling 100% online på dina villkor, inga besvärliga fysiska besök" | "Allt sker via video och chatt. Det enda du gör på plats är ett blodprov, på något av 165 provtagningsställen." |
| "Byt till en bättre vårdgivare med riktiga resultat" | "Redan i behandling någon annanstans? Vi hjälper dig att byta." |
| "−21 kg" (the calculator) | "Efter 12 månader går man i genomsnitt ner 16–25 % av kroppsvikten. För dig: ungefär X–Y kg." Premises shown next to the number. |

## 8. Proposed page: mobile first

Each section is mapped to a step in the brief's journey: Landar → Förstår → Litar på oss → Bokar möte.

1. **Hero (Landar → Förstår)**
   - A warm full-bleed photo (Relivo pattern), the headline from P1 and a supporting line.
   - **"Boka gratis bedömningssamtal"** in the hero, with the expectation-setting text under it.
   - A quiet trust row: Legitimerad vårdpersonal · IVO-registrerad · 30 dagars nöjdhetsgaranti.
2. **Patient stories, moved up (Litar på oss)**
   - Caroline, Manga and Roger with photos, as a horizontal swipe on mobile.
   - Each card is the person's own story, with "Resultat varierar" visible.
3. **Who Velora is for (Förstår)**
   - The three eligibility criteria in plain words.
   - Includes the "switching provider" case, which replaces the "Byt" block.
4. **How it works: 4 steps (Förstår)**
   - The /om-oss version, as a vertical story with an image or icon per step: free call → health check → personal plan → we stay with you.
   - Replaces "3 enkla steg".
5. **What you can expect: calculator (Förstår)**
   - Input: a weight slider. Output: a range at 4 and 12 months.
   - Premises stated next to it:
     - an average from large studies
     - depends on the medicine the doctor chooses
     - combined with diet and exercise
     - individual results vary
     - the doctor decides whether treatment suits you
6. **Your care team (Litar på oss)**
   - Mina, Daniel and Sandra with titles.
   - "Medicinska beslut fattas av svensklegitimerade läkare, aldrig av en algoritm."
7. **Safe and private (Litar på oss, Apple pattern)**
   - Four short points with icons:
     - health data is never used for marketing
     - records are stored in the EU/EEA
     - confidentiality, and logged access
     - Velora doesn't sell medicines
   - **Merges** "Alltid med Velora" and the trust content from "Byt".
8. **Price: honest and complete (Förstår → Bokar möte)**
   - 795 kr/month, the health check 995 kr, medicine extra (a general range, no names).
   - The guarantee with a link to its terms. The student price.
   - Velora Underhåll as a single line.
9. **FAQ, short (the 4–5 real objections)**
   - Side effects, cost, eligibility, what happens in the call, no physical visits.
10. **Final action (Bokar möte)**
   - The same label and the same expectation-setting text.

**Desktop:** the same order. The hero splits into text and photo, the stories and care team sit in rows, and the calculator sits next to its premises.

**Open point:**
- Should mobile have a **sticky action bar** at the bottom that appears after the hero? It may help conversion, but it adds pressure. That cuts against P1.

## 9. Hero hypothesis (for the decision document)

> Putting "Boka gratis bedömningssamtal" in the hero, with text saying what happens next, increases the share of start-page visitors who click through to /kom-igang, compared with today's navbar-only "Kom igång".

- **Main metric:** click-through rate from the start page to /kom-igang.
- **Secondary metric:** how many people start and complete the questionnaire (Velora's own data).
- **How to test:** an A/B test, hero action vs today's version, with mobile and desktop analysed separately. We can't run this test in the case, so it's presented as a recommendation.

## 10. How it carries over to the ad (9:16)

- One still image: a warm everyday photo from velora.se and the P1 headline.
- The line "Gratis bedömningssamtal med legitimerad läkare eller sjuksköterska", plus the wordmark and velora.se.
- The same plum signal and the same fonts.
- No drug names, no numbers, no before/after.

## 11. Questions for you

1. Are the four principles right? Is one missing, or is one too weak?
2. Should the stories come **before** or **after** "Who Velora is for"? (Proposed: before, as you asked.)
3. Sticky action bar on mobile: yes or no?
4. An editorial serif for headings: OK to challenge "Ubu"?

## 12. Revision 2: premium pass (2026-11-02, prompt log entries 11–12)

The first build felt too close to today's velora.se. The brand is allowed to change, so this pass takes bigger visual risks. The principles (§4) and the page order (§8) are unchanged.

| Decision | Before | Now | Why |
|----------|--------|-----|-----|
| Primary colour | Plum `#751A4B` on buttons and accents | **Deep wine `#2C0015`** for every action, accent and the logo (recoloured with a CSS mask; the logo's shape is untouched) | Chosen by Samuel. Near-black restraint (Oura) reads more premium than a saturated brand colour. Plum is retired. |
| Base palette | White, pink wash `#F4EDF1` | Cream `#F7F2EC`, stone `#EDE4DA`, two full deep-wine sections (calculator, privacy) and a deep-wine footer | Warmer and more editorial; the light/dark rhythm paces the scroll. No pink. |
| Emphasis | Italic in plum | Italic only (a change of voice, not of colour); rose `#E8C9D3` only on deep wine | Fewer colours means each one counts (P3). |
| Type | Serif headings at a normal display size | Newsreader at 300 weight, much larger (hero up to ~7 rem), tight leading; plain uppercase section labels (the 01–08 section numbers were removed in entry 17) and italic serif numerals inside lists | Gives the page an editorial, magazine-like feel instead of a landing-page one. |
| Hero | Rounded image card above the text | **Full-viewport cover.** Mobile: the photo bleeds across the top and dissolves into cream, with the text below. Wide screens: the photo bleeds off the right edge at ~64% width and dissolves into cream behind the text. | A full-width cover zooms into her face, and the headline lands on it; the split bleed keeps her whole figure visible. The 1024 px source is also barely upscaled on desktop. |
| Credentials | Check-mark row in the hero | A quiet strip under the hero (Tandem pattern) | Keeps the hero to one message and one action. |
| Cards | Rounded white cards | Hairline rules, almost square corners (4 px), large serif numbers | Feels calmer and more considered (Oura, Tandem). |
| Motion | None | A slow fade-up as sections enter the screen; off when reduced motion is requested; content stays visible without JS | Gives the page a premium pace without decoration. |

**Hero image:** the largest source on velora.se is 1024 px wide. The plan is to swap in an extended or higher-resolution version when one exists, for example with Generative Expand on the **background only**: the person stays real, and the reason gets documented. `IMG.hero` in `src/data/site.ts` is the only place it needs changing.

**Caroline's photo, decided:** it's a full-body shot in workout clothes, and the tall crop puts the focus on her body, which pulls against P1. It is **kept as is** because it is her own story photo from velora.se (prompt log entry 13).

**Hero headline, decided (prompt log entries 15–16):** *Medicinsk viktnedgång när dieter inte räcker.* is velora.se's current headline, with the second half set in italic. It replaces the draft "Övervikt handlar inte om viljestyrka." It is the most professional of the four options and the clearest about what Velora is. The warmth comes from the italic change of voice, not from new words. The supporting line and the rest of the hero are unchanged. Note: the core message "not about willpower" (P1) lived only in the old headline and is no longer on the page. The stories still touch on diets that failed, but nothing says it outright.

~~Superseded by entry 20, see below.~~ **"Så går det till" as a scroll-driven module (prompt log entry 18):** the four steps (with unchanged content) sit on the left and the image on the right. The module pins for one screen while the visitor scrolls through a short track, about 40% of a screen per step. Each step opens as its slice of the track comes into view, and the previous one closes. On phones the image sits above the steps, and the module stops above the sticky booking bar. The layout is anchored to the top, so nothing shifts when a step opens. Each step title is a button that jumps to that step.
- **Fallbacks:** without JS, or on screens shorter than 640 px, every step is shown open in normal flow.
- **Reduced motion:** the open/close animation is off.

**Calculator (prompt log entry 19):**
- The lines above and below the slider are removed.
- The premises ("Det här bygger siffrorna på", the four points and the source) now open in an overlay from a "Vad bygger siffrorna på?" button. The overlay is a cream sheet on a dimmed page; the content is unchanged.
- It uses the native `<dialog>`, which gives focus trapping, Escape to close and focus back to the button. Clicking the backdrop or "Stäng" also closes it.
- **Trade-off:** the premises are one click away instead of always visible. The cautious stance (§3) asked for premises "next to the number". The button sits directly under the numbers, so the premise is still signposted at the point of the claim, but it is no longer read by default.

**"Så går det till", revised (prompt log entry 20):** the one-at-a-time module is replaced. All four steps are always open, with unchanged text. The section uses the same scroll pattern as "Vem det passar": on desktop the steps scroll on the left while the image sticks 48 px from the top on the right. On mobile and tablet the image sits above the steps in normal flow.
- For the image to actually stick, it has to be shorter than the steps column. So on desktop the image is 64% of the screen height and the steps get more vertical spacing, which gives roughly 270 px of sticky travel at 1440 × 900.
- The pinned track, its script and the step buttons are gone.

**Smooth scrolling (prompt log entry 21):** mouse-wheel and trackpad scrolling is eased with Lenis (`lerp` 0.1), the pattern premium sites use to feel calm and weighty.
- Touch keeps the phone's native scrolling.
- Visitors who prefer reduced motion get normal scrolling.
- Lenis keeps the browser's native scroll position, so the sticky image and the sticky booking bar still work.
- Smooth scrolling pauses while any `<dialog>` is open, so the page behind the overlay stays put. A stable scrollbar gutter stops the layout from shifting when it pauses.

**Trust strip (prompt log entry 22):** the four statements, with unchanged wording, now drift slowly to the right as a seamless marquee, one loop every 48 seconds.
- **Look:** each statement has a fine-line wine icon in a small circle (stethoscope, shield with check, seal, circular arrow) and is set in the serif, with a small diamond between statements and soft fades at both edges.
- **Behaviour:** it pauses on hover. Screen readers get the list once, because the moving copy is hidden from them. With reduced motion turned on it doesn't move, and the statements wrap centred.

**Hero title typeface (prompt log entry 23):** the hero title is now set in **Instrument Sans**, self-hosted, so it no longer looks like the Newsreader serif used for every other heading, the face common to many AI-built sites. It is smaller and fixed to two lines:
- **Line 1:** "Medicinsk viktnedgång", upright, medium weight, deep wine.
- **Line 2:** "när dieter inte räcker", italic of the same family, lighter weight, softer ink colour. The italic is a change of voice within one family rather than a second typeface.
- **Size:** scales with the screen width (`clamp(1.5rem, 7.8vw, 3.5rem)`), so each line stays on one line: 25 px at 320 px wide, 29 px at 375 px and 56 px on desktop.
- **Change from before:** the full stop after "räcker" was dropped to match the two lines as given.
- **Mobile:** the title now starts just below the photo instead of overlapping it.
- Section headings keep Newsreader. The hero is deliberately the one place in a different face.

**Trust strip icons (prompt log entry 24):** the white fill behind the icon circles is removed. The circles are now outline only on cream; the icons, text and drift are unchanged.

**Navbar label (prompt log entry 25):** the navbar button now reads "Kom igång", the same label velora.se uses in its navbar today. The link (/kom-igang) and the styling are unchanged.
- Every other booking button (hero, pricing, final section, sticky bar) still says "Boka gratis bedömningssamtal".
- This deliberately relaxes the earlier "one action label everywhere" rule (§8): the short label suits the compact navbar, and both labels lead to the same flow.
- Implemented as an optional `label` prop on `CtaButton.astro`, so the link and styling stay shared.

**Hero title, slightly larger (prompt log entry 26):** still Instrument Sans.
- **Sizing:** it now scales with the hero's own text column (`clamp(1.5rem, 100cqi / 10.6, 3.75rem)`). The widest line measures ~10.3 em, so this is the largest size that keeps each line on one line, with a small margin.
- **Measured sizes:** 27.2 px at 320 px wide (was 25.0), 30.9 px at 360 px, 32.4 px at 375 px (was 29.3), and 60 px on tablet and desktop (was 56).
- **Fit:** both lines stay on one line at every width tested, and the button and note still fit on the first screen.

**Hero title, serif (prompt log entry 27, correcting entry 26):** the hero title is a serif again, but **Cormorant Garamond**, not Newsreader, so it still stands apart from the section headings (entry 23).
- **Why this face:** a high-contrast display Garamond with a calligraphic italic. It's premium and warm, and not one of the usual AI-default display serifs (Fraunces, Instrument Serif).
- **Line 1:** semibold upright, deep wine.
- **Line 2:** medium italic of the same family, softer ink.
- **Sizing:** Cormorant is narrow (the widest line is ~8.9 em, against ~10.3 em for the sans), so it is set larger: `clamp(1.5rem, 100cqi / 9.2, 4.5rem)`.
- **Measured sizes:** 31.3 px at 320 px wide, 35.7 px at 360 px, 37.3 px at 375 px, and 72 px on tablet and desktop.
- **Fit:** both lines stay on one line at every width, and the button and note still fit on the first screen.
- Instrument Sans has been removed from the project.

**Viktmediciner navbar menu (prompt log entries 28–29):** "Viktmediciner ⌄" sits after "Behandlingen", where velora.se has it.
- **Pattern:** borrowed from Oura's Shop menu and adapted to Velora. The bar turns cream and a full-width cream panel drops from it as one surface, with near-square 4 px corners (not Oura's large radius), a wine-tinted shadow and a light dim over the page.
- **Content:**
  - two photo cards with serif labels and wine arrows: "Om viktmediciner" and "Så fungerar behandlingen"
  - the four drugs, Mounjaro, Ozempic, Rybelsus and Wegovy, each with its substance and form taken from velora.se/viktmediciner
  - a final "Allt om viktmediciner" row with a wine arrow circle (Oura's blue circle, in Velora's colour)
- **Interaction:**
  - Opens on click everywhere, and on hover with a short delay on mouse devices.
  - Closes with Escape (focus returns to the button), a click outside, or tabbing past the last item. `aria-expanded` and `aria-controls` are set.
  - With reduced motion turned on there are no transitions.
- **Desktop only:** the navbar links only appear from 1024 px up, so the mobile header is unchanged.
- **Exception to the cautious stance (§3), chosen by Samuel:** the drug brand names appear in the navbar, mirroring velora.se's own navigation. They still do not appear in the page content or the ad. Effect claims are left out; each drug shows only its substance and form.

~~Superseded by entries 33–35, see "Hero trust pill" below.~~ **Hero glass ledger, direction C (prompt log entries 30–31):** a single frosted cream pane sits bottom-right over the hero photo, aligned to the page container's right edge (`HeroLedger.astro`). It has three rows split by hairlines, with the figures in the hero serif:
- **Row 1:** "Ditt eget vårdteam / Skriv till ditt team när som helst", with the three clinicians' portraits.
- **Row 2:** "Av kroppsvikten första året / Genomsnitt i stora studier, varierar", with **16–25 %**.
- **Row 3:** "30 dagars nöjdhetsgaranti / Första månadsavgiften tillbaka", with **30**.

**The reference copy was corrected to match velora.se:** "obegränsad kontakt" is not stated, the site's figure is 16–25 % rather than "20 %", "mindre hunger och sug" is an effect claim, and the guarantee covers only the first monthly fee. The premise sits beside the number, as §3 requires.

**Glass treatment:** frosted cream with a 24 px blur and a hairline highlight. Browsers without blur, and visitors who ask for less transparency, get a solid cream pane. It fades up shortly after load.

**Shown on desktop only (≥ 1024 px wide and ≥ 680 px tall):** on tablets it would sit on the headline, and on phones on her, so below that it is hidden. The trust strip just below the hero carries the same reassurances there. A mobile variant was mocked up but not built.

**Known overlap:** "30 dagars nöjdhetsgaranti" now appears in both the ledger and the trust strip.

**"Byt vårdgivare idag" (prompt log entry 32):** a small deep wine button in the "Redan i behandling någon annanstans?" block, linking to /kom-igang like velora.se's own "Byt idag". The rest of the block is unchanged; the paragraph keeps its styling. It is a fourth button label alongside "Boka gratis bedömningssamtal" and "Kom igång", all leading to the same flow.

**Hero trust pill (prompt log entries 33–35, replacing the ledger):** the frosted ledger became a pill-shaped strip and moved into the hero's text stack, directly above the headline (`HeroTrustPill.astro`).
- **Content:** one row with thin vertical dividers and short titles only. "Eget vårdteam" keeps the three small overlapping clinician portraits, then "16–25 % enligt studier", then "30 dagars nöjdhetsgaranti".
- **Why "enligt studier":** it is the shortest premise that keeps the figure compliant with §3. The full premise ("första året", "varierar") stays in the calculator section.
- **Why above the headline:** it reads proof, then promise, then action, so the booking button stays last. Because the stack is anchored to the bottom on mobile and tablet, the pill grows upward and never moves the button.
- **Styling:** compact, with 17 px serif titles and 24 px portraits, so it supports rather than competes with the 72 px headline. It sits on cream now, so it has a fine wine outline over a light frost.
- **Measured:** one row, 28 px above the title and clear of the header at 1440, 1280, 1024 and 768 px. The button note stays on the first screen at all of these widths.
- **Shown from 768 px:** hidden on phones, where three statements don't fit one row and the button must stay above the fold.

**Overflow fixes (prompt log entry 36):**
- **Calculator at 1024 px.** The cause was the section's 5fr/7fr grid and the result cells, which could not shrink below the large numbers' natural width. The page overflowed by 33–65 px.
  - Fix: the columns use `minmax(0, …)`, each result cell is a size container, and the number is capped with `min(original size, 100cqi / 4.1)`. The widest full result, "16–25 kg", measures ~3.9 em.
  - Effect: the number shrinks only where it would overflow, to 58 px at 1024 px. At 1280 and 1440 px it stays at 72 px.
- **Pricing card at 320 px.** The full-width booking button couldn't wrap, so the card was 33 px too wide.
  - Fix: below 480 px a full-width button may wrap onto two centred lines.
  - Effect: in practice this happens only in the pricing card at 320 px. Everywhere else the label still fits on one line.
- **Verified:** no horizontal overflow at 320, 360, 375, 768, 1024, 1280 or 1440 px.
- **Lesson (AI got this wrong):** the first calculator fix measured only the widest text fragment ("16–25", 2.73 em) instead of the full line with " kg" (3.9 em). It then clipped the overflow, which would have cut off "kg". Re-measuring the whole line caught it before it shipped.

**Hemmapartner-style hero and key-information bar (prompt log entry 37):**
- **Inset hero:** the hero is an inset, rounded panel (8 px from the page edge, 16 px corners on mobile, 20 px on desktop), so the photo sits like a framed image on the page. On desktop it is shortened by the bar's height, so the bar is on the first screen. Copy, photo, veil and pill are unchanged.
- **Static bar:** the drifting trust carousel is replaced by a static bar directly under the hero (`TrustStrip.astro`):
  - **"5 000+ patienter"**, in the serif, with a hairline divider after it
  - three outlined service pills: Läkarmöten via video, Hälsokontroll, Dietist och coach
  - a certification badge with Velora's real **LegitScript seal**: "LegitScript-certifierad / IVO-registrerad vårdgivare med legitimerad personal"
- **Layout by width:**
  - Desktop: one row.
  - 1024–1279 px: tighter pills and a one-line badge, so it stays one row.
  - Phones and tablets: the bar stacks below the hero.
- **Measured:** the bar ends within the first screen at 1024 × 768, 1280 × 720 and 1440 × 900, and there is no horizontal overflow from 320 to 1440 px.
- **⚠ The figure is unverified:** "5 000+ patienter" comes from a screenshot Samuel supplied and is not on velora.se (see facts.md, Social proof). Confirm it with Velora before this goes to leadership.
- **Removed:** the trust statement "30 dagars nöjdhetsgaranti" and the drift animation are gone from the bar. The guarantee is still in the hero pill and the pricing section.

**CTA note removed (prompt log entry 38):** "Börjar med några korta frågor. Kostnadsfritt, och du binder dig inte till något." is gone from under the hero, pricing and final booking buttons, and the note option was removed from `CtaButton.astro`.
- **Trade-off:** the button says "Boka gratis bedömningssamtal", but /kom-igang opens with a questionnaire, not a calendar. Without the note, nothing sets that expectation (audit finding 8).
- **Where it's still said:** "Kostnadsfritt" and "du binder dig inte" remain in step 1 of "Så går det till", in the FAQ and in the mobile sticky bar.

**Certification without a card (prompt log entry 40):** the LegitScript certification in the hero bar is now just the seal and its text. The border, background and padding of the card are removed.

**Hero fills the viewport (prompt log entry 41):** the hero panel and the key-information bar are wrapped in `.first-screen` (index.astro).
- **Desktop (≥ 1024 px):** the wrapper is at least `100svh`, and the hero flexes to take whatever height the bar leaves. Together they are exactly one screen: the bar ends at the bottom edge at 1024 × 768, 1280 × 720 and 1440 × 900. This replaces the fixed `100svh - 124px` guess.
- **Phones and tablets:** the hero alone fills the screen (`100svh` minus its 8 px margins), and the stacked bar follows below. The booking button is on the first screen at every size tested.

**Sticky navbar, Oura-style (prompt log entry 42):** the navbar is now fixed to the top edge.
- **At the top of the page:** it is transparent over the hero, as before.
- **Once scrolled:** a rounded (16 px), frosted cream surface fades in behind the same content, inset from the edges (10 px vertically, 8 px horizontally), like Oura's floating bar but in Velora's palette.
- **No reflow:** the surface is a `::before` layer behind the content, so only its opacity animates.
- **Detection:** the scroll state comes from an IntersectionObserver on a small marker at the top of the page, not a scroll listener.
- **Unchanged:** the logo, links, "Kom igång", "Logga in" and the Viktmediciner menu. The menu still drops full-width from under the bar when scrolled. An open menu still turns the bar solid cream.
- **Mobile:** the same floating bar at the top with the logo and "Logga in", and the booking bar stays at the bottom.
- **Accessibility:** reduced motion turns off the fade, and reduced transparency gives a solid cream bar.

**Narrower sticky navbar (prompt log entry 43):** on desktop the floating bar now hugs the content instead of running nearly edge to edge. It starts 20 px before the logo and ends 20 px after "Kom igång", using `inset-inline: max(12px, calc((100% - var(--max)) / 2 - 20px))`.
- **Measured:** 1320 px wide at 1440 (was ~1409), 1241 px at 1280 and 985 px at 1024. The inner padding is 20 px at every desktop width.
- **Mobile:** keeps the 8 px inset.
- **AI error caught by measuring:** the first formula added the side gutter twice, which would have put the bar edge inside the logo and the button (−12 px padding).

**Navbar hides on scroll down (prompt log entry 44):** the sticky navbar slides out of view while scrolling down and reappears on any scroll up (Oura pattern). Its width and styling are unchanged.
- **How:** only `transform` animates, by `-100% - 24px` so the shadow leaves too. Movements under 6 px are ignored.
- **Always visible when:**
  - within 120 px of the top
  - the Viktmediciner menu is open (opening it also reveals the bar)
  - keyboard focus is inside it (`:focus-within`)
- **Technical exception:** direction needs the scroll position, so this uses one passive scroll listener throttled to a single check per frame. It is the one exception to "observe, don't listen".
- **Reduced motion:** the bar still hides and shows, but without the slide.
- **Verified:** on desktop and mobile; hides on scroll down, stays hidden through small jitter, shows on scroll up and near the top.

**Context for "16–25 %" in the hero pill (prompt log entry 45):** "16–25 % enligt studier" became **16–25 %**, with a two-line caption beside it: "av kroppsvikten efter 12 mån / i snitt i studier, beroende på läkemedel".
- **Covers:** average, share of body weight, 12 months, dependence on the medicine, and the study attribution required by §3. All of it is from velora.se's FAQ.
- **Fit:** the pill stays one row at 768–1440 px (664 px wide).
- **Caveat:** the caption is 10 px and may be too small for some readers.

**Services without pills (prompt log entry 46):** the three service labels in the hero bar lost their outlined pills. From 560 px they are plain uppercase labels in one row with thin 1 px vertical dividers. On narrower phones they stack as a short list without dividers, which would otherwise end up stranded at line starts. On desktop the bar is still one row and still ends at the bottom of the screen.

**Hero pill: "20 % viktnedgång i snitt" + icons (prompt log entry 47):** the outcome item now reads "20 % viktnedgång i snitt", replacing the 16–25 % figure and its caption. It has a bare chart-line-down icon, and "30 dagars nöjdhetsgaranti" gets a bare shield-check icon.
- **Icon style:** both icons are Phosphor light, 20 px, deep wine, with no circle or background. They are imported as raw SVG from `@phosphor-icons/core` rather than hand-drawn.
- **Fit:** the pill stays one row at 638 px.
- **⚠ Unverified and against the cautious stance (§3):** velora.se gives 16–25 % as the average, not 20 %. "20 %" appears only as one study's share of participants. It is flagged in facts.md and CLAUDE.md for confirmation with Velora, and it departs from §3 because it is a single figure without its premise.

**"patienter" centred on "5 000+" (prompt log entry 48):** the stat now centres its two parts. The serif figure's box reserves descender space, so its visible middle sits higher. "patienter" is therefore nudged up by 0.3 em (4.5 px), and the measured visual offset is 0.2 px.

**Simpler pill icons (prompt log entry 49):** the chart and shield icons are replaced by a plain Phosphor **arrow-down** for "20 % viktnedgång i snitt" and a **check** for "30 dagars nöjdhetsgaranti". They keep the same 20 px, deep wine, bare treatment, and the text is unchanged.

**Smaller section titles (prompt log entry 50):** every section `h2` is about 25% smaller, `clamp(2rem, 4.8vw, 3.75rem)`, in place of `clamp(2.5rem, 6.4vw, 5rem)`. That is 32 px on phones (was 40) and 60 px on desktop (was 80). Wording, font (Newsreader) and layout are unchanged. Line breaks stay the same because each title's max-width is set in `ch`, which scales with the font. The hero `h1` is sized separately and unaffected.

**Circled pill icons, larger avatars (prompt log entry 52):** the arrow and checkmark in the hero pill now sit in 32 px outlined circles (1 px wine hairline, no fill), echoing the round avatars. The glyphs are 18 px. The avatars grew from 24 to 28 px.
- **Size:** the pill grew from 638 to 674 px wide and 54 px tall.
- **Tablets (768–1023 px):** the dividers tighten from 16 to 12 px, so the pill stays one row in the 673 px text column (658 px at 768).

**Avatars match the icon circles (prompt log entry 54):** the hero pill's avatars are now 32 px, the same as the arrow and checkmark circles. The overlap went from −9 to −10 px to keep the stack in proportion.
- **Size:** the pill is 684 px wide on desktop and 668 px at 768 px, inside the 673 px column.
- **Fit:** still one row, with no overflow.

**Badge treatment for the pill icons (prompt log entry 55):** the arrow and checkmark circles are now filled badges.
- **Look:** a soft rose `#E8C9D3` fill, a 2 px cream ring (matching the avatars' ring) and the thin wine outline kept just outside it.
- **Contrast:** the wine glyph on rose is 12.3:1.
- **Unchanged:** same 32 px size, so the pill is still 684 px and one row. The avatars and the rest of the pill are unchanged.

**Underhåll toggle in the pricing card (prompt log entry 57):** the Velorametoden card has an "Underhåll" switch in its header, off by default.
- **Switched on:** the card's name, price, list and fine print swap to Velora Underhåll, using velora.se's wording: "När du uppnått din målvikt…", 495 kr/mån, four included points, and medicine not included. The booking button stays.
- **Accessibility:** it is a `role="switch"` button with `aria-checked`, a 44 px tap target and a 22 px visual track. Reduced motion turns off the knob's slide.
- **Without JS:** both plans are listed and the switch is hidden.
- **Unchanged:** the rest of the pricing section, including the "När du nått din målvikt: Velora Underhåll, 495 kr/mån" line in the extras card.
