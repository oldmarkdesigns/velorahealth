# Direction: draft for review

Status: **APPROVED, 2026-11-02** (prompt log entry 8). The proposals in §11 are accepted as written. The sticky action bar is still open.
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
