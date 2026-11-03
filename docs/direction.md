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

~~Superseded by entry 61, see the bento below.~~ **"Så går det till", revised (prompt log entry 20):** the one-at-a-time module is replaced. All four steps are always open, with unchanged text. The section uses the same scroll pattern as "Vem det passar": on desktop the steps scroll on the left while the image sticks 48 px from the top on the right. On mobile and tablet the image sits above the steps in normal flow.
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

**"Samma team följer dig" on one row (prompt log entry 60):** in the care-team heading the phrase is kept on one line (`white-space: nowrap`), and "*hela vägen.*" follows on the next. The heading's 12 ch max-width, which forced it onto three lines, was removed.
- **Measured fit:** 266 px in a 288 px column at 320 px wide. At 1440 px the phrase ends at x = 598, clear of the quote at x = 761.

**"Så går det till": three directions mocked up (prompt log entry 59)** for review before any change to the implementation:
- **A. Journey line:** the photo as a wide band, wine node badges on one line, and four columns.
- **B. Bento:** step 1 as a tall photo tile, then cream, rose and deep wine icon tiles. Recommended.
- **C. Zigzag timeline:** a centred line with alternating cards and rose badge icons.

All three keep the step text, heading and lede unchanged, and use Phosphor icons. The mockups are not in the project.

**"Så går det till" as a bento (prompt log entry 61, direction B):** the steps are now a bento grid (`Steps.astro`) with the heading, lede and step text unchanged.
- **Step 1 (the free call, where the CTA leads):** a tall tile with the video-meeting photo.
- **Steps 2–4:** tiles on cream, rose and deep wine, each with a Phosphor icon (drop, clipboard-text, chats-circle) in a thin outlined circle. Step 4 is wide.
- **Layout by width:**
  - Desktop: `1.25fr 1fr 1fr`, with the photo tile spanning both rows (480 × 532 px at 1440).
  - Tablet (≥ 640 px): two columns, with the photo tile across the top as image and copy side by side, and step 4 full-width.
  - Phones: one column, photo tile first.
- **Accessibility:** body text on the rose tile uses ink (12.3:1), because the soft grey measured ~4.4:1, under AA for small text.
- **Removed:** the sticky-image layout.
- **Verified:** no overflow at 375, 768 and 1440 px.

**Privacy heading on two rows (prompt log entry 63):** "*Så skyddar vi dem.*" is now its own row (`display: block; white-space: nowrap`), under "Dina uppgifter är dina.". The heading's 13 ch max-width was removed so the first sentence fits one row. Verified at 320, 375 and 1440 px: two rows, no overflow, rose colour unchanged.

**Two-option plan switch (prompt log entry 64, replacing the small toggle from entry 57):** the pricing card now opens with a large segmented switch, "Velorametoden | Underhåll". It is a full-width pill with a deep wine indicator that slides behind the selected plan, which gets a cream label. Selecting an option shows that plan's price, list and fine print; the booking button stays.
- **Accessibility:** it uses the tabs pattern (`tablist`, `tab`, `tabpanel`), with `aria-selected` and a roving tabindex. ←/→, Home and End switch plans. Each tab is 48 px tall. Reduced motion turns off the slide.
- **Plan name:** the small name label above the price was removed because the switch names the plan. It remains only in the no-JS fallback, where both plans are listed.
- **Unchanged:** the rest of the pricing section.
- **Verified:** at 375 px (two 143 px halves, labels on one line) and 1440 px (528 px switch). Click and keyboard both work.

**Pricing as three visible cards (prompt log entry 66, replacing the plan switch from entry 64):** inspired by the attached three-tier layout.
- **Velorametoden (left):** the featured card on solid deep wine, with a large cream "från 795 kr/mån", rose Phosphor checkmarks, the student price, and a cream booking button pinned to the bottom of the card.
- **Right column:**
  - **Velora Underhåll:** white and compact. The label and intro sit beside a 44 px "495 kr/mån", with the four points in a 2 × 2 checklist and "läkemedel ingår inte".
  - **Det här tillkommer:** still stroke-only with no fill, tightened (28 px padding, 14 px rows, smaller amounts and descriptions). All prices, conditions and the Villkor link are kept.
- **Removed:**
  - the extras card's line "När du nått din målvikt: Velora Underhåll, 495 kr/mån", which the Underhåll card now shows
  - the tabs switch and its script
- **Decided against:** the reference's "MEST POPULÄR" badge, because it is a claim we can't verify.
- **Verified:** at 1440 px the featured card (734 px) exactly matches the right column. At 375 px the cards stack (featured, Underhåll, extras) with no overflow.

**FAQ from velora.se with a sticky heading (prompt log entry 67):**
- **Questions:** 12 in total. Our two booking questions come first, then every question from velora.se's start-page FAQ with Velora's own answers. Their versions replace our two duplicates (side effects, which medicine).
- **Links:** "Fler frågor och svar på velora.se" is removed, and no answer links to velora.se. The 1177 and testmottagningen.se links stay.
- **Cautious stance (§3) kept:** in "Vilka läkemedel förskriver ni?" and "Vad kostar medicinen?" the brand names and per-drug prices are replaced by "GLP-1-analoger" and the general 1 050–4 800 kr/mån range. Every other fact is as on velora.se.
- **Layout:** on desktop, "Vanliga frågor" and "Bra att veta innan du bokar." stick 120 px from the top (below the navbar) while the questions scroll on the right. On mobile the heading scrolls normally.
- **Verified:** 12 items; sticky holds over 600 px of scroll; no overflow at 375 px.

**Smoother calculator slider (prompt log entry 68):** the calculation is unchanged.
- **Thumb:** it now moves continuously (`step="any"`) instead of snapping between 110 whole kilograms. The weight shown and the calculation still use the whole kilogram (`Math.round`). The thumb stays where it is released.
- **Results:** they glide to their new values (one requestAnimationFrame lerp, factor 0.2, settling within 0.05). With reduced motion turned on they update instantly.
- **Keyboard:** arrows still move 1 kg and Page Up/Down 10 kg; Home and End go to 70 and 180.
- **Screen readers:** `aria-valuetext` reads "N kg". The results are announced once, in a polite live region, when the value is committed, instead of on every frame; the old `aria-live` on the results list was removed.
- **Verified:** 70/100/130/180 kg give the same results as before (7/11–18, 10/16–25, 13/21–33, 18/29–45). The glide passed through 13 intermediate values from 100 to 130 kg.

### Expandable extras card, aligned columns (entries 69–70)
- "Det här tillkommer" is a `<details>` card, collapsed by default. Its summary keeps the label and adds the question "Vad tillkommer utöver månadsavgiften?". The three cost rows and the Villkor link inside are unchanged.
- It animates open and closed where the browser supports `interpolate-size` and `::details-content`. Other browsers snap open, and reduced motion turns the animation off.
- Entry 70 replaced entry 69's height behaviour. From 1024px, the right column is a flex column and the collapsed extras card stretches to meet the bottom of the Velorametoden card. Opening it pushes the grid row taller, and the featured card follows, so the bottoms stay aligned on every frame.
- Measured at 1440px: the section is 1058px collapsed (the old always-open version was ~1300px) and 1300px open.

### Pricing layouts explored (entries 71–73)
- Round 1 (A–C) only rearranged the same cards: two plans side by side with a costs strip, cost over time in three phases, and a main band with two cards beneath. Samuel rejected all three ("none of those are talking to me"), which is a case where AI produced variations on its first idea instead of new concepts.
- Round 2 follows Samuel's choice, "Receipt / total cost". D is one receipt for the first month with a total. E keeps the wine Velorametoden card beside a receipt grouped by when you pay. D's total (ca 2 840–6 590 kr) is arithmetic on velora.se figures, not a stated fact, so it needs approval before use. Not yet built into the page.

### Slider with eased momentum (entry 74)
- Pointer drags go to a wrapper around the native range input. The thumb follows a critically damped spring (stiffness 320), so it accelerates and decelerates without overshooting. A flick at release glides a little further, capped at 56px (about 7.6 kg).
- Keyboard steps (whole kilograms, Home/End) and the screen-reader announcement are unchanged. Reduced motion moves the thumb directly. On touch screens, vertical swipes still scroll the page (`touch-action: pan-y`).
- The calculation is unchanged (10 % and 16–25 % of the rounded weight). I checked it at 136, 180 and 70 kg.
- AI got it wrong: my first version had no cap on the flick glide, so a fast drag that ended at about 130 kg ran all the way to 180 kg. Sampling the value every frame exposed it. After I added the cap, the next test still hit 180 because the dev server was serving the old script. Logging the pointer positions showed the mismatch, and restarting the server fixed it.

### Pricing option E built (entry 75)
- `Pricing.astro` now has the wine Velorametoden card (5fr) beside one receipt (7fr). The receipt groups costs into "En gång" (health check), "Varje månad" (Velorametoden and medicine) and "Efter målvikten" (Underhåll with its four inclusions), and ends with a 30-day guarantee stamp and the Villkor link. All wording and figures come from the earlier cards. There's no computed total.
- It replaces the expandable extras card from entries 69–70. Both columns share one grid row, so the receipt's torn edge always lines up with the wine card's bottom (checked at 1440 and 1024px).
- On phones, when a name and its amount don't fit on one line, the amount wraps to its own right-aligned line, so names aren't squeezed. No overflow at 320 or 375px.

### Team quote on two lines (entry 76)
- Split after the comma: "Medicinska beslut fattas av svensklegitimerade läkare," / "aldrig av en algoritm." The wording is unchanged.
- From 640px the two halves never wrap. The type shrinks only where the column is too narrow for 24px (19px at 1024px). On phones, the first half doesn't fit at a readable size, so the quote wraps naturally onto three lines.
- `text-box: trim-both cap alphabetic` trims the space above the capitals and below the baseline, so the divider is as tall as the text. Browsers without support keep the old line box.

### Pricing layout F built (entries 77–78)
- Samuel found option E's white receipt too busy. In round 3 (F, G, H), Underhåll became its own card and the receipt was cut down to what comes on top of the monthly fee. Samuel picked F, with Underhåll moved above the receipt.
- Desktop: the wine Velorametoden card spans both rows on the left (5fr). On the right (7fr), the white Underhåll card sits above the receipt. The receipt holds the health check and the medicine, and ends with the 30-day guarantee stamp and the Villkor link. The receipt's row takes the remaining height, so its torn edge meets the bottom of the wine card (checked at 1440 and 1024px).
- The Försäkringskassan reimbursement is removed from the pricing section at Samuel's request. The sentence about Velora's utlåtande went with it, since it only makes sense alongside the reimbursement. The FAQ answer "Vad kostar medicinen?" still mentions Försäkringskassan.
- Phones: the cards stack in the order wine card, Underhåll, receipt. A long amount wraps to its own line. No overflow at 375px.

### Trial hero image (entry 79)
- Samuel supplied a new hero photo: a person seen from behind with arms raised on a coastal hillside at sunset. It's saved as `public/images/hero-sunset.webp` (1376×768) and replaces the velora.se sofa photo. The old `IMG.hero` srcset and crop positions are noted in `Hero.astro` so it can be reverted.
- Crops: phones 92% 50% (keeps both raised hands in frame), tablets 80% 50%, desktop 82% 50%. The figure stays to the right of the headline at every width.
- Open questions to settle before keeping it:
  - **Source.** The image looks AI-generated (styling and lens flare). The brief forbids AI-generated people who look like patients. The person is seen from behind and isn't identifiable, but the choice still needs a written motivation and a confirmed source (stock licence or AI).
  - **Medical stance.** A celebrating figure in a weight-loss hero can read as an implied outcome. That conflicts with the cautious stance (direction.md §3: no before/after, outcomes only with premises).
  - **Resolution.** At 1376px wide it's softer than the original on large screens (scaled about 1.2× at 1440px).

### Navbar jumps within the page (entries 80–81)
- The navbar now has six links, all jumping to sections on this page:
  - Behandlingen → `#sa-fungerar-det`
  - Patientberättelser → `#patientberattelser`
  - Om Velora → `#vardteam` (the care-team section)
  - Pris → `#pris`
  - Vanliga frågor → `#vanliga-fragor`
- The page has no section per medicine, so the Viktmediciner menu points into the FAQ:
  - The four medicines and "Allt om viktmediciner" → the answer "Vilka läkemedel förskriver ni?" (`#faq-lakemedel`)
  - "Om viktmediciner" → "Varför läkemedel för att gå ner i vikt?"
  - "Så fungerar behandlingen" → the steps section
  - A jump to a question opens it, lands it 112px below the top (clearing the navbar) and closes the menu.
- The logo jumps to `#top`. Lenis (`anchors: true`) smooths every jump.
- Samuel's answers (entry 81): "Logga in" is unchanged (patient login), and "Kom igång" keeps the booking link to velora.se/kom-igang that the brief requires.
- With six links the bar overflowed by 38px at 1024px. Between 1024 and 1279px the links are now 14px with 16px gaps, so it fits on one row. Phones still have no nav links (unchanged); the sticky CTA covers booking.

### Hero without the left fade (entry 82, trial)
- On tablet and desktop the sunset photo now fills the whole panel with no cream fade on the left. Only the light top wash under the navbar remains. Phones are unchanged (that layout puts the text below the photo).
- Result: the headline's italic second line and the intro text sit on the dark hillside and are hard to read at 1440 and 820px. At 820px the headline also runs into the figure. It needs a decision: lighter text, a softer local scrim, or the fade back.

### Cream hero text (entry 83)
- From 768px, on the unfaded photo, the headline and intro are light cream with a soft wine-black shadow (a tight 1px layer plus a wide 24px glow). The italic second line is at 88 % cream. Phones keep wine text on cream, below the photo.
- Readable on both the bright sky and the dark hillside at 1440 and 820px. At 820px the headline still overlaps the figure a little.
- The trust pill, the CTA and the navbar are unchanged.

### Story link hover (entry 84)
- "Läs …s berättelse" shows a Phosphor arrow on hover (and on keyboard focus), and the underline runs on under it. The arrow's slot is a no-break space plus an em space, so the link's own underline covers it; the icon is a masked pseudo-element that fades in and slides 4px. The resting state is unchanged, and touch screens get no arrow.

### Expandable receipt again (entry 86)
- "Det här tillkommer" in layout F is a `<details>` card again, collapsed by default. Its head (label, the italic "utöver månadsavgiften" and a plus/minus sign) is the toggle. The two cost lines and the 30-day stamp are unchanged inside. The dashed rule under the head only shows when it's open. It animates where `::details-content` is supported, with no motion under reduced motion.
- The receipt is now a plain block. As a flex container it stayed at its collapsed height when opened, and the flex layout was only there to push the stamp to the bottom.
- Desktop 1440px: closed, the section's cards are 569px tall (was 790px); open, 790px. The receipt's torn edge meets the wine card's bottom both ways, because the receipt stretches to fill when closed.
- Phones: closed 103px, open 487px, no overflow.
- Testing note: the browser pane froze every animation at 0ms, so I took these measurements with transitions switched off. The animation itself wasn't verified here.

### Booking tile beside step 04 (entry 87)
- New white tile in the "Så går det till" bento: the title "Börja med ett gratis samtal", the shared note "Kostnadsfritt · Du binder dig inte" and a small "Kom igång" button to velora.se/kom-igang. The short label is the navbar's, so it fits the narrow tile.
- Desktop: the grid has five tracks (`1.25fr 0.5fr 0.5fr 0.2fr 0.8fr`, each `minmax(0, …)`). Steps 02 and 03 each span two tracks that add up to 1fr, so they stay equal (390px at 1440, 287px at 1024). Step 04 spans three tracks, and the booking tile gets the narrow last one (299px at 1440, 217px at 1024).
- The first version used plain `fr` tracks. At 1024px the button's width widened its column, which made step 02 274px and step 03 316px. `minmax(0, …)` fixed that; the regular-size button still didn't fit at 1024px, so the tile uses the small one.
- Tablet: the tile spans the full width under step 04. Phones: it stacks last. No overflow at 375 or 768px. Step 04's look is unchanged, though it's a little narrower on desktop now that it shares the row.

### Pricing: two plans side by side, cost table below (entry 88, kept in entry 89)
- Velorametoden (wine) and Underhåll (white) now share one structure: the label, a large serif price, a ruled checklist and the note at the foot. From 1024px they sit side by side at equal width and height (630×539px at 1440). Below that they stack, because the full-width booking button doesn't fit in half a tablet column.
- "Det här tillkommer" is a ruled table on the section background, following the "Våra planer i detalj" reference: a header row (title, with "utöver månadsavgiften" at the right), then one row per cost with name | explanation | amount columns (4:5:3; 3:4:4 on tablets so the medicine range fits). The 30-day stamp row closes the table. On phones each row shows name and amount above the explanation, and the amount wraps when it doesn't fit.
- All wording is unchanged. Since this is a table, the expandable card (entry 86) and the receipt styling (torn edge, dotted leaders) are gone. Layout F (entry 86) is saved at `scratchpad/Pricing.layoutF-entry86.astro`, outside the repo, for a quick revert.
- Samuel called the section "Kostnader som tillkommer". The on-page title is still the existing "Det här tillkommer".

### Narrower cost table, centered guarantee (entry 90)
- The cost table is capped at 880px and centered under the plan cards (which span 1280px). Rows are tighter: 16px padding (was 22px). Type is smaller: names 17px (was 20), amounts 20px (was 22), explanations 13px (was 14). Desktop columns are 3:5:3 with 28px gaps; tablets keep 3:4:4.
- The 30-day guarantee row is one centered group (stamp plus text, text capped at 46ch) instead of being aligned to the table columns. It's within 3px of center at 1440, 768 and 375px.
- At 1440px the table is 302px tall. No overflow at 1440, 768 or 375px. On phones the medicine row now fits name and amount on one line. Wording and plan cards are unchanged.

### Velorametoden button label (entry 92)
- The booking button on the Velorametoden card now reads "Kom igång", like the navbar and the steps booking tile. The link is unchanged (velora.se/kom-igang). The hero, sticky bar and final CTA keep "Boka gratis bedömningssamtal", so the page now uses two labels for the same action. That departs from the one-label principle in §8 at Samuel's request.

### Smaller Underhåll price (entries 93–94)
- The Underhåll price is now `clamp(3rem, 8vw, 4.25rem)`: 68px at 1440px, against 112px for Velorametoden. The main plan clearly leads. A first step to 88px was still too large, per Samuel.
- Prices never wrap (`white-space: nowrap`). The cards stay equal height (517px at 1440).

### Underhåll price sized to align the dividers (entry 95)
- Side by side (≥1024px), the Underhåll price is `calc((7rem * 0.9 - 4rem) / 0.9)`, about 41px. That's exactly what aligns both checklist dividers: Underhåll's price line plus its intro block (16px of gap and two 24px lines) equals Velorametoden's 112px price line. Measured 0px apart at 1024, 1440 and 1920px. "kr/mån" stays on the line, and the cards stay equal height.
- Below 1024px the cards stack, so nothing needs to align. The entry 94 size (`clamp(3rem, 8vw, 4.25rem)`) still applies there.
- The formula assumes the intro wraps to exactly two lines. It does at every desktop width (its column is at least 367px, and the intro is capped at 40ch).

### Story link hover animation (entry 96)
- Entry 84's arrow appeared instantly: its slot switched from `display: none` to inline, so the underline jumped. Now the slot's `font-size` animates from 0 to 1em (380ms ease-out), so the link's own underline glides out to the right. The arrow (a fixed 15px masked Phosphor icon) fades in 60ms later and slides 10px into place. Moving off reverses both.
- Measured in the browser: the slot grows 0 → 18px over about 320ms with an ease-out curve, and the arrow's opacity reaches 1 at about 370ms. At rest the slot is 0px wide, so the resting look is unchanged. Only mouse hover triggers it (keyboard focus shows the end state); touch screens are untouched, and reduced motion turns the animation off.

### Lakeside hero image (entries 97–100)
- Samuel generated the new hero from my image-to-image prompt (entry 99), using a reference cabin photo: a woman in a woven oak chair under a wine-red blanket, on a phone video call by a large window onto a forest lake, with the left half open. It's saved as `public/images/hero-lake.webp` (1376×768). It replaces the sunset trial; `hero-sunset.webp` is still in `public/` but unused.
- Desktop (≥1024px): the photo fills the panel unfaded, at object-position 70% 50%. The photo is light, so the hero text is wine again rather than cream (entry 83's cream suited the darker sunset). A soft three-layer cream glow lifts it off the dark treeline, and the italic line is a deeper #4a2a38. Readable at 1024 and 1440px, with the woman clear of the text.
- Tablets (768–1023px) now use the phone layout: photo on top, text below on cream. On a tall tablet screen the landscape photo put her behind the headline and the intro text over the dark floor. Phones are unchanged in structure, cropped at 82% 50%.
- Still open: this is an AI-generated person, which the brief rules out "if they look like patients". She is shown as someone using the service (a video call from home), not as a before/after or outcome. This choice must be motivated in the decision document. The image is also only 1376px wide, so a larger render would be sharper on big screens.

### Sharper hero image and progressive blur (entry 101)
- Sharpness: the generated image is only 1376px wide. I made `hero-lake-2x.webp` (2752×1536) with a Lanczos 2× upscale and a gentle unsharp mask (radius 2, 70 %), and lightly sharpened the 1x file too (Pillow). `srcset` serves the 2x file to high-density and wide screens. This restores edge contrast but can't add real detail; a native high-resolution render is still the better fix. The untouched original is the attachment from entry 100.
- Blur (desktop, ≥1024px): two backdrop-blur layers over the photo, 4px and then 14px, each masked with a right-to-left gradient (soft from 40 to 62 %, strong from 58 to 92 % of the width, measured from the right). The image stays clear on the right, around the woman, and the blur builds gradually to its strongest at the left edge behind the text. Phones and tablets don't need it (text sits below the photo), so the layers are hidden there. The rest of the hero is unchanged.

### Dark wash instead of blur (entry 102)
- On desktop the entry 101 blur is replaced by a wine-black gradient, transparent on the right (to 34 % from the right edge) and deepening in eased steps to 60 % opacity at the left edge. The woman on the right is untouched.
- On the darker left side the hero text is light cream again (like entry 83), with a soft wine-black shadow; the italic line is at 88 % cream. Readable at 1024 and 1440px. Phones and tablets are unchanged (text below the photo, no wash). The sharpened 2× image from entry 101 stays.

### New hero photo, crop, top fade and black overlay (entries 103–105)
- New hero photo from Samuel (1679×937, a closer and larger render of the lakeside scene). As in entry 101, there's a lightly sharpened 1x file and a Lanczos 2× (3358px) with an unsharp mask, served via `srcset`.
- Desktop crop is 100% 50% (as far right as it goes). At 1024–1279px the image is cropped tighter, so the headline steps down to 60px (from 72) to stay clear of her. A first attempt narrowed the text column instead, which squeezed and clipped the trust pill, so it was reverted.
- Entry 104: the light wash at the top of the hero is gone at every width; the photo now runs right up to the navbar. Phones keep the bottom dissolve into cream.
- Entry 105: the left-side overlay is now pure black (rgba 0,0,0; up to 60 %) instead of a wine-black.
- Open: without the top wash, the wine logo, the nav links and "Logga in" sit straight on the photo. They read poorly over the darker left and the window frame (most visible at 1024px).

### No dark overlay (entry 106, trial)
- The desktop black overlay is switched off (`.shade` set to `display: none`, CSS kept for a quick restore).
- On the bare, light photo the cream text from entry 102 disappeared into the sky and water, so the hero text is wine again with a three-layer cream glow, and the italic line is #4a2a38 (as in entry 100). Readable at 1440px, though the headline's first line crosses the dark treeline.
- Without the overlay the navbar's wine text reads better on the lighter photo. "Logga in" over the wooden window frame is still faint.

### Hero card, Logga in button, top-to-bottom overlay (entries 107–112)
- Entries 107, 110–112: the pill, headline, intro and CTA sit in a `.hero-card` wrapper on desktop. It went from frosted light glass to dark glass to plain dark grey, and now has no fill (entry 112), so it only groups and pads the content. At 1024–1279px it's capped at 660px with a compact trust pill (28px avatars and icons, 15px text); avatars and icons no longer shrink. A first try used CSS `zoom` on the pill, which misdrew the avatars over the text, so it was replaced.
- Entry 112: the desktop overlay now runs top to bottom (clear at the top, black up to 58 % at the bottom), and the text is cream. Readable at 1440px.
- Entries 108–109: "Logga in" is an outline pill with white stroke and text, 8px from "Kom igång". It turns wine on the floating cream bar and in the open menu.
- Entry 113: the image Samuel sent is identical to the entry 103 photo already in use (same SHA-1), so nothing changed. Also checked the top-to-bottom overlay at 1024px: cream text readable, no navbar or card overflow. The end of "räcker" sits just beside her knee.
- Entry 114: new hero photo (same scene, seen from further back: more floor and lake, she sits smaller on the right). Same 1679 × 937 size, so the markup is unchanged; `hero-lake.webp` and `hero-lake-2x.webp` were regenerated with the same sharpening as entry 101. Checked at 1440, 1024 and 375px: text stays clear of her and the chair.
- Entry 115: the wine was too dark (it read as near-black on large areas). Lifted `--wine` and `--ink` from `#2c0015` to `#4a1430`, hover from `#4a0a2a` to `#64203f`, and moved the translucent wine shadows, borders and scrims to the same hue (rgb 74, 20, 48). Contrast stays high: 13.2:1 on cream, 11.7:1 on stone.
- Entries 117–118: the hero button is cream with wine text from 1024px, where it sits on the darkened photo and a wine button blended into it. Below 1024px it stays wine, since it sits on cream there.
- Entries 119–120: the hero button reads "Se om behandlingen passar dig" instead of the shared "Boka gratis bedömningssamtal". It replaces velora.se's "Se om du kvalificerar dig", which tests the visitor; this asks whether the treatment fits them, and echoes the lede. Link unchanged (/kom-igang); every other CTA keeps the shared label.
- Entry 121: the hero button is back to solid wine with cream text on desktop too (entry 118's cream version reverted); the "Se om behandlingen passar dig" label stays.
- Entries 122–123: "stop logging to prompt log" was misread as stopping the log; Samuel meant the buttons. "Logga in" is now solid white with wine text (cream on hover; a faint wine edge on the floating cream bar). The hero button is white with wine text on desktop again (cream on hover), wine below 1024px; label and link unchanged.
- Entry 125: the "+" in "5 000+" is lifted 0.11em so its centre lines up with the middle of the digits (measured with canvas text metrics: digits centre 12.3px, "+" centre 8.3px above the baseline at 36px).
- Entry 126: "Passar Velora dig?" gets a "Se om behandlingen passar dig" button under its intro (same label as the hero, link /kom-igang). On desktop it sits in the sticky left column, filling the empty space under the intro; on phones it comes right after the intro, before the criteria.
- Entry 129: "Ditt vårdteam" gets a fourth, white booking card after Sandra Merei ("Börja med ett gratis samtal", video meeting with a doctor or nurse, the short note and a "Boka gratis bedömningssamtal" button). Desktop: a fourth column, so the three portraits are a little narrower; the button fills the card, without its arrow, and wraps to two lines at 1024px. Tablets: the card runs full width under the portraits. Phones: a card under the three rows.
- Entry 131: entry 129's booking card is replaced by one centred "Boka gratis bedömningssamtal" button under the three portraits (back to three columns), and the footnote ("Läkare, sjuksköterska, dietist och coach … Socialstyrelsen.") is removed.
- Entry 133: each patient story is now one photo card. Result, name, text and "Läs …s berättelse" sit inside the photo at the bottom, in cream, on a dark gradient that belongs to the text block (clear 96px above it, deepening to the bottom), so it stays readable at any card size. The whole card is the link (stretched link); hover adds an even 18 % dark wash plus the existing zoom and arrow. Phones: 2:3 cards and slightly smaller type. Tablets (768–1023px) keep the swipeable row with wider cards, since three across were too narrow for text on the photo; desktop is three across as before.
- Entries 128–136: "Visste du att?" is back, below "Ditt vårdteam", on stone (between the cream team section and the wine privacy section). Headline "Det handlar inte om viljestyrka." Three ruled columns from velora.se's cards: "8 av 10" (diet alone, with "enligt studier" and the body defending its weight), "16–25 %" (with its premises) and "5,3 miljoner" (reframed as "you're not alone"; the cancer list is dropped). Below: one GLP-1 line linking to the FAQ answer, and a "Se om behandlingen passar dig" button. Deviation from the cautious stance (§3), at Samuel's request: "5,3 miljoner" was marked avoid; it needs a line in the decision document.
- Entry 137: the "Visste du att?" headline is now "Det handlar om mer än viljestyrka." Samuel noted that will and commitment do play a part; "inte om" denied that, "mer än" keeps it and adds the body's side.
- Entry 140 (deliverable 02, the ad): `src/pages/annons.astro` at /annons, a fixed 1080 × 1920 canvas (Meta Story/Reel), exported to `public/annons/velora-annons-9x16.png` with headless Chromium from the production build (the dev toolbar would otherwise show). It mirrors the mobile hero: the lakeside photo full bleed on top dissolving into cream, the velora wordmark, the hero headline in Cormorant, "Gratis bedömningssamtal med legitimerad läkare eller sjuksköterska.", the "Se om behandlingen passar dig" pill and velora.se. No figures, no drug names. Key content stays out of Story safe zones (top ~250px, bottom ~340px). Fixes during export: the headline first wrapped to three lines over the photo (now 100px, one line each), and the page-wide `scrollbar-gutter: stable` cut 15px off the canvas's right edge (turned off on this page).
- Entry 141: a coordinated load sequence for the first screen (global.css, `data-load` + `--load-delay`): the hero photo fades in and settles from 104 % (1.6s), the navbar drops in (150ms), then the pill, both headline lines, the intro and the button rise 18px in turn (250–720ms), and the trust bar last (860ms); all done by ~1.9s. The keyframes use the separate `translate`/`scale` properties and fill backwards only, so the navbar's own slide-away transform still works. Section reveals on scroll are softened to match (20px, 1s). Everything sits behind `prefers-reduced-motion: no-preference`; with reduced motion the page appears at once, as before.
- Entry 144: below 1024px the navbar shows the logo, "Kom igång" and a two-stroke burger (the strokes cross into an X when open). The burger opens a cream panel under the bar, the same surface as the desktop menu, with the six section links in Newsreader and "Logga in" as an outline pill. A link, a tap on the dimmed page or Esc closes it. The mobile sticky "Boka gratis bedömningssamtal" bar is removed (StickyCta.astro deleted; it only showed below 768px). Three mobile hero layouts sketched for the missing pill and the cramped services list (A: pill on the photo + icon grid; B: check list under the button; C: chip row); the hero is unchanged until one is chosen.
- Entry 145 (mobile hero, option A): below 768px the trust pill is back. The three statements don't fit one row at 375px, so it is a small frosted card with one statement per line; it leads the bottom-anchored text stack, so it lands on the foot of the photo. Below 560px the trust bar's services come first as a three-column grid of Phosphor icons (video camera, test tube, food bowl) with sentence-case labels between two rules; "5 000+ patienter" and the LegitScript/IVO line follow on their own rows (side by side squeezed the certification into four lines). From 560px the bar is unchanged; desktop and tablet pills unchanged. Also: at 320px the navbar's logo and "Kom igång" tighten so the burger stays on screen. Known trade-off: on a 320 × 640 phone the pill card covers part of her and the chair.
- Entry 147: on phones each hero statement is its own frosted pill, stacked and left-aligned, each as wide as its content with the same padding (6px around the 28px badge, 16px after the text); from 768px it is one pill as before. The mobile menu's Viktmediciner is now an accordion with the desktop menu's content (the two image cards side by side, the four medicines, "Allt om viktmediciner"); the panel scrolls inside itself when that makes it taller than the screen (`data-lenis-prevent`). Desktop: the trust bar's services show their Phosphor icons inline before each label; at 1024–1279px the dividers tighten and "5 000+ patienter" stays on one line (the icons had pushed it onto two).
- Entry 148: below 1024px the navbar no longer slides away on scroll. Once scrolled it is a full-width band flush with the top edge (frosted, see-through cream at 78 % with a hairline beneath, no rounded floating bar), like velora.se's mobile bar. Desktop keeps the floating bar and the slide-away.
- Entry 149: Samuel didn't see the desktop service icons. They rendered at 1440px locally, but only from 1024px and were not yet pushed. They now show from 768px (tablets too); 560–767px keeps the text-only row (too narrow for icons), phones keep the icon grid. Checked at 600, 768, 1024 and 1440px: no overflow, "5 000+ patienter" on one line.
- Entry 151: new section "Den medicinska grunden" after "Så fungerar det" (MedicalBasis.astro): "Läkemedlet hjälper kroppen. Teamet hjälper dig." Two white cards joined by a wine "+": "Så fungerar läkemedlet" (the body defends its weight; GLP-1 analogues reduce hunger and cravings and help you feel full longer; you still need to eat less than you burn, without surgery) and "Så stöttar vårdteamet" (doctor assesses after the health check and chooses medicine and dose; dietitian and coach build habits; the same team follows up, side effects usually mild and passing). A note says decisions are made by licensed doctors, effect and side effects vary, and medicine isn't in the monthly fee, with a link to the FAQ answer. Every sentence restates velora.se's FAQ and treatment steps. Deliberately left out from velora.se's cards: "kliniskt bevisat", "Effektivt, enkelt och säkert", "ingen hunger", the pen and jeans photos, and drug names.
- Entry 152: the mobile menu's Viktmediciner accordion is animated by script (Web Animations API, 380ms, height, bottom padding and opacity), since Safari can't transition a <details> to its natural height in CSS. Skipped with reduced motion. Checked: 0 → 388px open, back to 0 closed.
- Entry 153: "Dietist och coach" uses a broccoli icon. Phosphor (2.1.1, the latest) and Tabler have none, so Lucide's broccoli is vendored as one file (`src/icons/broccoli.svg`, ISC licence noted in the file) rather than adding a second icon library; its stroke is thinned from 2 to 1.25 to match Phosphor light. Same size and colour as the other two icons, on phones and desktop.
- Entry 154: "Den medicinska grunden" gets a third card, "Vilka resultat får jag?", after an "=" (läkemedlet + vårdteamet = resultat). Three rows from the FAQ answer on expected weight loss, each with its premise: 16–25 % in the first 12 months in large studies depending on the medicine; about 10 % in the first four months; the goal is your target weight, for most BMI 20–25, and results vary. Figures in the serif; a link "Räkna på din egen vikt" jumps to the calculator (now `id="raknare"`). Desktop: three equal columns (tighter padding at 1024–1279px, where the cards run tall); phones: stacked. No before/after imagery (velora.se's jeans photo stays out).
- Entry 155: each card in "Den medicinska grunden" opens with a full-bleed 16:9 image band, same height in all three: the pen photo Samuel supplied (cropped to drop a "Zoom in" browser tooltip; framed at 28 % so the pen tip and fingers show), the three care-team portraits overlapping on stone (88px, like the hero pill's avatars), and velora.se's own loose-jeans photo. Card content unchanged. Deviation from the image rules (§ images in facts.md): the pen and the jeans had been ruled out (medicine-first; reads as before/after). Used at Samuel's request; the decision document must say why, and the pen photo's source needs noting.
- Entry 156: the "Den medicinska grunden" intro gets the same wine rule as the care team's quote: 2px border on the left, 20px in, trimmed to the text height. Its typeface and colour are unchanged.
- Entry 158: "Redan i behandling någon annanstans?" is now a shared component (`SwitchBlock.astro`) so both copies stay identical. It stays in "Passar Velora dig?" (unchanged: 40px above, wine rule) and is repeated in the pricing section directly under the 30-day guarantee, centred on the same axis as the guarantee row (max 46ch).
- Entry 159: below 1024px the navbar's frosted full-width band shows from the very top of the page too, not only once scrolled, so the mobile bar always has its background. With the menu open it still turns into the one cream surface. Desktop unchanged (clear over the hero until scrolled).
- Entry 161: the patient stories no longer swipe. Below 1024px they stack vertically, one full-width card each: 2:3 on phones (343 × 515 at 375px), 4:3 on tablets (a full-width 3:4 card would be ~940px tall). Desktop keeps three across at 3:4. Cards and their content unchanged.
- Entry 162: from 1024px the 30-day guarantee and "Redan i behandling någon annanstans?" sit side by side in two equal columns, exactly the cost table's 880px wide, under one shared rule. Phones and tablets keep them stacked as before.
- Entry 164: the hero bar's service statements (video, health check, dietitian and coach) are gone, along with their icons and the broccoli file. In their place, to the right of "5 000+ patienter" and split from it by a thin rule, is a Trustpilot rating styled after Trustpilot's snippet: the green star mark and "Trustpilot", then five green star boxes (the last half filled, as Trustpilot rounds 4,7) and "4,7". It links to Velora's Trustpilot page. Same row on phones and desktop; on phones "5 000+" drops to 28px (from 36px) and the stars to 18px so both fit at 375px. The certification stays (its own row on phones, right-hand side on desktop). The 4,7 is verified on Velora's Trustpilot page (316 reviews, 2026-11-03). At 320px the figure, stars and gaps step down once more so the row still fits.
- Entry 165: from 1024px the Trustpilot logo and the stars with "4,7" sit on one line (logo a step larger, 16px text and a 22px mark, to match the 22px star boxes). Phones keep the logo above the stars.
- Entries 166–167: the Trustpilot block is vertically centred on the visual middle of "5 000+" (the digits, not their box, which reserves descender space): lifted 4px from 560px (36px figure) and 3px below (28/24px figure). Measured centres: 855.6/855.6 at 1440px, 755.6/755.6 at 1024px, 855.9/856.0 at 375px, 684.1/683.8 at 320px.
- Entry 169: the Trustpilot rating now comes first and "5 000+ patienter" second, on the same row; the thin rule moved to the left of the figure. Sizes and the optical centring are unchanged.
- Entry 172: link previews now use the hero photo. The page had no Open Graph tags, so previews picked the first large image (the pen photo in the Viktmediciner menu). Base.astro now sets og:title/description/url/image and a large Twitter card; the image is `public/images/og-hero.jpg`, a 1200 × 630 JPG crop of `hero-lake-2x.webp`. `site` in astro.config.mjs is the Vercel address (https://velorahealth-ten.vercel.app) so the image URL is absolute. The hero itself is unchanged.
- Entry 174: on desktop the bar is one row, Trustpilot | LegitScript/IVO | "5 000+ patienter", with a thin rule between each (32px each side). The LegitScript seal and text get the same 4px optical lift as the rating, so all three centre on the digits' visual middle (measured 856.8/856.8/856.8/856.9 at 1440px, 755.6 throughout at 1024px). Phones unchanged: Trustpilot and "5 000+" on one row, the badge below.
- Entry 176: "5 000+ patienter" is back on the left of Trustpilot, on phones and desktop (reverses entry 169). Desktop row: "5 000+ patienter" | Trustpilot | LegitScript/IVO; the rule after the figure sits on its right edge again. Centres still match (855.6 for all three at 1440px). Phones: figure and rating on one row, the badge below.
- Entry 178: below 1024px the patient story cards always show the hover state's extra 18 % dark wash (there is no hover on touch screens). Desktop keeps it as a hover effect.
- Entry 179: the closing section "Första steget är ett samtal" now uses velora.se's own hero photo (the woman on a sofa in a video meeting on her phone; the page's original hero), with its 800/1080/1500px variants, instead of the woman smiling on a sofa. It fits the section's line "via video". Layout, veil and copy unchanged.
  Tablets (768–1023px) now use the phone layout in this section (photo on top, text below): the near-square photo couldn't move far enough right behind the text, which crossed her face at 800px. Desktop keeps the split with the photo on the right.
- Entry 181 (trial): the hero uses the cabin photo (`hero-cabin.webp` / `-2x`, 1376 × 768, sharpened like the lake photo); the lake files are kept for a revert. Measured against the text on desktop: she fills ~41–92 % of the frame, so the headline crosses her. At 1440px "Medicinsk viktnedgång" ends at 793px, past the blanket (570px) and knees (664px); at 1024px it ends at 656px, past her face (635px). Phones look good (photo on top, text below). Not settled: keep the lake photo, or adapt the desktop hero to this photo.
- Entry 182 (trial): a second cabin photo (darker wood, a little wider, 1678 × 937) replaces entry 181's in `hero-cabin.webp` / `-2x`. She starts further right, so less overlap than entry 181, but the headline still crosses her on desktop: at 1440px it ends at 793px vs the blanket at 652px and knees at 730px; at 1440 and 1280 her face stays clear; at 1024px it ends at 656px, just past her face (649px). Phones look good. Lake files still kept.
- Entry 183 (trial): a third cabin photo (whitewashed wood, a dark-haired woman), same framing and size as entry 182, now in `hero-cabin.webp` / `-2x`. Same overlap as entry 182. Contrast of the cream text against photo + overlay, measured at 1440px (average / worst spot): line 1 2.45 / 1.17, line 2 2.17 / 1.28, intro 1.95 / 1.50. The lake photo with the same overlay: 6.02 / 1.38, 2.44 / 1.48, 2.31 / 2.05. So the pale walls mostly hurt the first headline line; line 2 and the intro are below 3:1 (large text) and 4.5:1 (body) with either photo, which the current light overlay doesn't fix. Phones are unaffected (text on cream).
- Entry 184: the primary colour moves towards the hero blanket: `--wine` and `--ink` from plum #4a1430 (hue 329°) to burgundy #5e1628 (hue 345°), hover #75203a; translucent wine uses (shadows, borders, scrims) follow as rgb(94, 22, 40). Sampled from the blanket in the original photo (crimson, hue ~350°, shaded mid-tones ~#5f1f20); kept a step darker than the lit blanket so cream text still reads: 11.6:1 on cream, 10.3:1 on stone, 13.0:1 white on wine. Not changed: `--ink-soft` (#6b5560, plum-grey) and `--rose` (#e8c9d3); the 9:16 ad PNG still has the old wine until re-exported.
- Entry 185: the burgundy a step darker: `--wine`/`--ink` #5e1628 → #521324 (same hue, 344°), hover #6a1c31, translucent uses rgb(82, 19, 36). Contrast 12.8:1 on cream.
- Entry 186: on desktop, at the top of the page over the hero photo, the navbar's menu links (Behandlingen, Viktmediciner, Patientberättelser, Om Velora, Pris, Vanliga frågor) are white. Once the bar floats on cream, or the Viktmediciner menu is open, they return to ink. Phones have no links in the bar (they're in the burger panel), so nothing changes there.
  Contrast of the white links against the top of the current (whitewashed cabin) photo at 1440px, average / worst spot: Behandlingen 1.83 / 1.05, Viktmediciner 1.31 / 1.03, Patientberättelser 2.02 / 1.40, Om Velora 2.36 / 1.96, Pris 2.78 / 2.24, Vanliga frågor 3.21 / 2.47 (4.5:1 needed). The hero overlay is clear at the top, and the sky and pale walls sit behind the links. Unresolved.
- Entry 187: on desktop the hero's overlay gets a second band at the very top, behind the navbar (black 78 % at the edge, 66 % at 64px, 30 % at 150px, gone by 280px), and the logo turns white there with the links (both back to burgundy on the floating bar or with a menu open; the links also get a soft shadow). White-link contrast at 1440px now 5.3–8.2:1 average, except "Viktmediciner" over the brightest sky at 3.98; at 1024px 5.9–8.1 except "Behandlingen" at 4.17. Phones unchanged.
- Entry 188: "Logga in" on desktop is an outline pill again: white 1px stroke and white text over the hero, burgundy text and stroke on the floating bar or with a menu open. (Hidden in the phone bar; the burger panel keeps its own outline button.)
- Entry 189: the top band eased a step at Samuel's request (62 % at the edge, 52 % at 64px, 22 % at 150px, gone by 280px). White-link contrast, average: 1440px 2.78–6.17 (Viktmediciner 2.78, Behandlingen 3.78, Patientberättelser 4.13 under 4.5); 1024px 2.92–6.12 (Behandlingen 2.92, Viktmediciner 4.24 under). A deliberate trade-off of legibility for a lighter top edge; the faint text shadow helps a little.
- Entry 192: the mobile menu no longer dissolves. Cause: on opening, the bar's frosted band faded out while a solid cream header background faded in, and the panel faded at the same time, so for ~300ms everything was half-transparent. Now (below 1024px) the band stays and simply turns solid cream, and the panel unrolls downward from the bar's edge with a clip-path (420ms, no opacity change); the links settle 10px into place 60ms behind. Closing rolls it back up. Off with reduced motion. Desktop menu unchanged.
- Entry 193: the hero's supporting text is now "Kroppen försvarar sin vikt – det handlar om biologi, inte bara om vilja. Hos Velora får du ett eget vårdteam och en personlig plan, och samma team följer dig hela vägen." Rewritten from Samuel's draft: "inte bara om vilja" instead of "inte bristande vilja" (entry 137), no "livslångt resultat" (a promise velora.se doesn't make), "vårdteam" instead of "expertteam" (healthcare, matching the pill). Every claim is on velora.se. Trade-off: it no longer says "svensk digital vårdgivare" or "legitimerat" in the hero; the trust bar (LegitScript/IVO) and the sections below carry that. One line longer: 5 lines at 375px (button still above the fold, ends at 772 of 812px), 4 at 1440px.
- Entry 194: Samuel trimmed the intro to "Det handlar om biologi, inte bara om vilja. Hos Velora får du ett eget vårdteam och en personlig plan, och samma team följer dig hela vägen." (opening "Kroppen försvarar sin vikt –" dropped).
- Entry 195 (phones, below 768px; tablets and desktop unchanged): "5 000+ patienter" and the Trustpilot rating now sit above the hero title, on the photo's cream fade. The rating is a shared component (`RatingRow.astro`) used both here and in the bar under the hero, which hides it on phones. The hero pills leave the photo; instead the bar under the hero shows three white cards in a soft stone panel, centred, each tilted slightly (−1.5°, +1.2° nudged 6px right, −0.8°; flat with reduced motion), with velora.se's own mobile copy: "Ditt eget vårdteam / Obegränsad kontakt, hela vägen" (two team portraits), "Gå ner 20 % i vikt i snitt / Med mindre hunger och sug" (burgundy tile, trend-down icon), "30 dagars nöjdhetsgaranti / Nöjd eller pengarna tillbaka" (rose tile, shield-check icon). LegitScript/IVO follows. "Nöjd eller pengarna tillbaka" is broader than the guarantee's terms; noted in facts.md.
- Entry 196: on phones the rating above the hero title follows velora.se's own layout: the Trustpilot logo on its own line, then the five star boxes (20px), "4,7", a thin rule and "5 000+ patienter" in plain body text (not the serif figure). Smaller stars at 320px. The desktop bar is unchanged (serif figure, one row).
- Entry 197 (corrects entry 195): Samuel wanted the existing statement pills, not new cards. On phones the hero's pill component (unchanged: frosted pills, badge or portraits, Cormorant label, same padding) now sits in a stone panel under the hero, centred, each pill tilted slightly (−1.5°, +1.2° nudged 6px right, −0.8°; flat with reduced motion). The cards and their extra subtitles are gone. The hero no longer shows the pills on phones; tablets and desktop unchanged.
- Entry 198: the LegitScript seal and "LegitScript-certifierad / IVO-registrerad vårdgivare med legitimerad personal" moved from the bar under the hero to the footer, on every device, between the footer columns and the work-sample disclaimer (light-on-dark). The desktop bar is now "5 000+ patienter" | Trustpilot. Also removed the footer's leftover extra bottom padding on phones, which made room for the sticky booking bar deleted in entry 144.
- Entry 199: the phone pills under the hero now carry velora.se's mobile titles and subtitles ("Ditt eget vårdteam / Obegränsad kontakt, hela vägen", "Gå ner 20 % i vikt i snitt / Med mindre hunger och sug", "30 dagars nöjdhetsgaranti / Nöjd eller pengarna tillbaka"), title in the pill's serif, subtitle in small body text below it. Same pills, icons, padding, centring and tilts. The hero's one-row pill on tablet and desktop keeps its short labels.
- Entry 200: Samuel rejected both the cards (195) and the tilted pills (197–199). On phones the three statements are now a plain list in one white card under the hero: the same icons (portraits, round badges) and texts (title + subtitle), one row each with hairlines between, no pill backgrounds, shadows or tilts.
- Entry 201: in the phone list the icons (portraits, badges) sit on the right of each row, so all three titles and subtitles start on the same left edge.
