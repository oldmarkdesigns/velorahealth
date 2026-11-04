# Fact inventory

Every fact the start page or ad may use, with its source. Collected 2026-11-02.
**If it isn't in this file, it doesn't go on the page.**

Status:
- **OK**: use as-is.
- **Premise**: use only with its premise or source stated next to it.
- **Avoid**: excluded under the cautious medical stance (see `direction.md` §3).

Sources:
- [H] https://www.velora.se/ (start page)
- [B] https://www.velora.se/behandling
- [O] https://www.velora.se/om-oss
- [P] https://www.velora.se/integritetspolicy (effective 2026-10-28)
- [K] https://www.velora.se/kom-igang

## Company and credentials

| Fact | Source | Status |
|------|--------|--------|
| Velora Health AB, org.nr 559455-0724, IVO-registered care provider | H, O | OK |
| Founded 2023; head office Birger Jarlsgatan 57 C, Stockholm | O | OK |
| Digital care across all of Sweden; no physical clinic; all meetings by video or chat | O | OK |
| All health-care staff are licensed in Sweden and registered with Socialstyrelsen | H, O | OK |
| LegitScript-certified | O (badge), H (footer link to legitscript.com) | OK |
| "Velora säljer inte läkemedel och får ingen ersättning från läkemedelstillverkare" | O | OK |
| "Medicinska beslut fattas av svensklegitimerade läkare, aldrig av en algoritm" | O | OK |
| Phone 08-525 132 73 (weekdays 08–17), hej@velora.se | H, O | OK |

## Care team (named on site)

| Person | Title | Source | Status |
|--------|-------|--------|--------|
| Mina Munktell | Specialistsjuksköterska inom viktnedgång och hälsa | H, O | OK |
| Daniel da Fonte | Legitimerad läkare och expert på hållbar viktnedgång | H, O | OK |
| Sandra Merei | Legitimerad läkare och expert på medicinsk viktbehandling | H, O | OK |
| The same team (doctor, nurse, dietitian, coach) follows you the whole way | O | OK |

## How it works

| Fact | Source | Status |
|------|--------|--------|
| /kom-igang opens a **questionnaire** first ("Svara på några frågor så bedömer vi…"), not a calendar | K | OK, and it shapes the microcopy under the action button |
| Step 1: short form, then a video meeting with a doctor or nurse; "helt gratis och du binder dig inte till något" | H, O | OK |
| Step 2: health check with blood tests at 165+ sampling locations, plus a doctor's review | H, B, O | OK |
| Step 3: personal treatment plan, with support from a dietitian and coach | O | OK |
| Step 4: regular check-ins; you can write to your care team at any time; treatment adapts over time | O | OK |
| ⚠ The start page shows **3 steps** while /om-oss shows **4**. The 4-step version is newer and includes follow-up. | H vs O | Pick one: we recommend O |
| No treatment starts before the doctor knows it's right for you | O | OK |

## FAQ (used in the FAQ section, prompt log entry 67)

| Content | Source | Status |
|---------|--------|--------|
| "Vad händer i bedömningssamtalet?", "Behöver jag åka någonstans?" | O (FAQ / steps) | OK |
| The ten questions in velora.se's start-page FAQ, with Velora's answers (eligibility, why medicine, which medicines, side effects, expected weight loss, health check, sampling locations, eating, medicine cost, guarantee) | H (FAQ) | OK. Two answers are adapted under the cautious stance: "Vilka läkemedel förskriver ni?" and "Vad kostar medicinen?" use "GLP-1-analoger" and the 1 050–4 800 kr/mån range (B) instead of brand names and per-drug prices. Links back to velora.se are removed; the 1177 and testmottagningen.se links stay |

## Social proof

| Fact | Source | Status |
|------|--------|--------|
| "5 000+ patienter" | Trustpilot snippet in a screenshot supplied by Samuel (prompt log entry 37). **Not found** on velora.se (start page, /om-oss, /patientberattelser, /behandling, /kom-igang, static and rendered, checked 2026-11-02) | ⚠ **Confirm with Velora.** Kept in the hero bar by Samuel's decision (entry 39); Samuel will confirm the figure with Velora |
| Trustpilot score "4,7" (316 omdömen) | https://se.trustpilot.com/review/velora.se, read in the browser 2026-11-03 (prompt log entry 164; a plain request got a bot check, the browser page loaded) | OK. Used in the hero bar; stars drawn to the nearest half (4½), as Trustpilot does. The live score can change |
| Hero card copy on velora.se's mobile hero: "Ditt eget vårdteam / Obegränsad kontakt, hela vägen", "Gå ner 20 % i vikt i snitt / Med mindre hunger och sug", "30 dagars nöjdhetsgaranti / Nöjd eller pengarna tillbaka" | velora.se mobile start page, screenshot supplied by Samuel (prompt log entry 195) | OK, used as title + subtitle in the phone pills under the hero (entry 199). ⚠ "Gå ner 20 % i snitt": see the 20 % row. ⚠ "Nöjd eller pengarna tillbaka" is broader than the terms (only the first monthly fee is refunded; not medicine or tests); velora.se's own wording, but the guarantee card and pricing state the limits |
| "Gå ner 20 % i vikt i snitt" (was "20 % viktnedgång i snitt") | Samuel's wording (prompt log entries 47, 124). **Not stated as an average** on velora.se: the site gives 16–25 % (FAQ). The only "20 %" is one study, in which "nästan en tredjedel hade gått ner 20 %" (/behandling) | ⚠ **Confirm with Velora.** Used in the hero pill at Samuel's request; outside the cautious stance (§3), as it is a single figure without its premise |
| "4,7 på Trustpilot" | /om-oss; also in the same screenshot | OK (not used yet) |
| LegitScript seal image | static.legitscript.com/seals/9675475.png, linked from velora.se's footer | OK, shown in the hero bar |

## Switching provider

| Fact | Source | Status |
|------|--------|--------|
| "Vi hjälper dig med en smidig & snabb övergång" | H ("Byt" block) | OK |
| Blood tests and their review are needed only if the previous provider hasn't done them | H ("Byt" footnote) | OK |
| "Vi utgår från människan, inte bara från en siffra på vågen" | O | OK, paraphrased in the final CTA |

## Who it's for (eligibility)

One of the following must apply [H, B, O], status **OK**:
1. BMI 30 or higher.
2. BMI 27 or higher **and** at least one weight-related condition (e.g. high blood pressure, type 2 diabetes, high blood lipids, sleep apnoea, atherosclerosis).
3. Previously met one of the above, has now lost weight, and wants help keeping it.

## Price

| Fact | Source | Status |
|------|--------|--------|
| Velorametoden from 795 kr/month | H, O | OK |
| Includes: own doctor, personal coach and dietitian, 24/7 access to the web app | H | OK |
| Student price 695 kr/month (full-time students) | H | OK |
| Velora Underhåll 495 kr/month | H | OK |
| Underhåll: "När du uppnått din målvikt och vill bygga vidare på dina framgångar"; includes help keeping your target weight, optimised medicine dosing for lower cost, continued support from the whole expert team, flexible with no binding period; medicine not included | H (pricing) | OK; used in the pricing card's Underhåll toggle |
| Health check 995 kr; 495 kr if you send in recent blood tests (doctor's review only) | H, B | OK |
| Medicine is not included; it's bought at a pharmacy, the price varies by medicine and dose | H, B | OK, but don't name drugs |
| Medicine cost about 1 050–4 800 kr/month (October 2026) | B | Premise: only as a general range, no drug names |
| Försäkringskassan may reimburse up to 3 343 kr/month; not guaranteed | H, B | Premise: always with "not guaranteed" |
| "Ingen bindningstid om du vill" / "om du önskar fri från bindningstid" | H | OK, keep the conditional wording |
| 30-day satisfaction guarantee: refund of the **first monthly fee**, once per person; excludes medicine and tests | H (FAQ) | Premise: link the terms |

## Outcomes and medicine

| Fact | Source | Status |
|------|--------|--------|
| 16–25 % average weight loss in the first 12 months, depending on medicine (large studies) | H (FAQ) | Premise: range plus premises, in the calculator only |
| About 10 % on average in the first 4 months | H (FAQ) | Premise: calculator only |
| Study: semaglutide plus lifestyle, 68 weeks, half lost 16 %; lifestyle alone about 2.4 % | B | Avoid naming the substance. ⚠ 68 weeks ≠ "12 months", so the page needs **one** consistent framing. |
| "Only 1 in 5 achieve long-term weight loss with diet and exercise" (also "20 %", "8/10 regain") | H, B | Premise: cite as "enligt studier" |
| Weight is not about laziness or lack of motivation | H, B, O | OK. This is a core message. |
| "1,3 kg/vecka i genomsnittlig viktnedgång" | H | **Avoid**: a single number with no premise |
| "Ingen hunger & inget sug" | H | **Avoid**: an absolute promise about effect |
| Drug names: Ozempic, Wegovy, Rybelsus, Mounjaro, semaglutid, tirzepatid | H, B | **Avoid** on the start page and in the ad |
| "GLP-1" as a drug class | H, B | Premise: use sparingly, explained, inside the care story |
| Side effects are usually mild and passing, mostly from the stomach and gut at the start | H, B | OK, in the FAQ |
| "13 olika cancerformer", "5,3 miljoner i riskzonen" | H, B | **Avoid** on the start page: these use fear. Entry 136: "5,3 miljoner" brought back at Samuel's request in "Visste du att?", framed as "you're not alone"; the cancer list stays out |
| "Högst patientnöjdhet på marknaden" | H | **Avoid**: a superlative we can't verify |

## Medicines as listed on velora.se/viktmediciner (navbar menu only)

| Drug | Substance and form | Source | Status |
|------|--------------------|--------|--------|
| Mounjaro | Tirzepatid, injektionspenna | /viktmediciner | Navbar only (exception, entry 29); no effect claims |
| Ozempic | Semaglutid, injektionspenna | /viktmediciner | Same as above |
| Rybelsus | Semaglutid, tablett | /viktmediciner | Same as above |
| Wegovy | Semaglutid, injektionspenna | /viktmediciner | Same as above |

## Patient stories (real stories on velora.se)

| Story | Source | Status |
|-------|--------|--------|
| Caroline, 47, Jönköping: −15 kg in 10 months | H, /patientberattelser/carolines-viktresa | Premise: present as an individual story, "resultat varierar" |
| Manga, 35, Tierp: −23 kg in 10 months | H, /patientberattelser/mangas-viktresa | Premise: same as above |
| Roger, 59, Norrköping: −25 kg in 6 months | H, /patientberattelser/rogers-viktresa | Premise: same as above |

## Privacy (supports an Apple-style section)

All statuses **OK**.

| Fact | Source |
|------|--------|
| "Uppgifter om din hälsa används aldrig för marknadsföring." | P §2 |
| Medical records and other health data are stored within the EU/EEA | P §5 |
| All care staff are bound by confidentiality; access to records is logged | P §5 |
| Video meetings are recorded only if you say yes; saying no doesn't affect your care; audio and video are deleted once transcribed | P §3 |
| AI is used only for transcription and de-identification; "Beslut om din vård fattas alltid av vårdpersonal" | P §6 |
| You can see who has read your record and block it from other care providers | P §7 |

## Images used on the page (hotlinked from velora.se's CDN)

These are Velora's own photographs; no AI-generated people. URLs are in `src/data/site.ts`.

| Image | Used in | Why |
|-------|---------|-----|
| Woman on a sofa in a video meeting on her phone (`velora-hero.avif`) | Hero | Shows the care itself (a video meeting at home) |
| Woman with headphones talking to a doctor on a laptop (`online-doktor.avif`) | How it works | The first step, made concrete |
| Woman smiling on a sofa (`Velora-abonnemang.avif`) | Final action | Warm and everyday, no product in shot |
| Caroline, Manga and Roger | Patient stories | The real patients behind the stories |
| Mina, Daniel and Sandra | Care team | The real clinicians |
| Pen and loose jeans: earlier "not used" | n/a | The pen puts the medicine first; the jeans read as a before/after shot. Entry 155: both now used at Samuel's request, one per card in "Den medicinska grunden": a pen photo Samuel supplied (`public/images/pen-hand.webp`, cropped to remove a "Zoom in" tooltip; source: velora.se's own "Vad är det?" card photo, from a phone screenshot kept in `assets/references/velora-se-pen-and-jeans-2026-11-03.png`) and velora.se's own "Weight_Loss" card photo (hotlinked). Needs a line in the decision document. |

## Brand as it is today (observed on velora.se and /om-oss)

| Element | Value | Source |
|---------|-------|--------|
| Heading font | "Ubu" (a rounded sans-serif, weight 700) | H, computed style |
| Body font | Manrope | H, computed style |
| Darkest plum, H1 colour | `#2C0015` (start page), `#460222` (/om-oss) | computed style |
| Action-button plum | `#751A4B` | computed style |
| Hero background | `#F4EDF1` (soft pink) | computed style |
| Logo | lowercase "velora" wordmark in plum | H |
| ⚠ A site banner says "Vinn 995 kr – hjälp oss välja vår nya logo", so the logo itself is up for change | H, /marketing/logo-survey | Don't redesign the logo. Use the current one. |
