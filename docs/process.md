# Process

---

## 1. Vad jag gjorde först, och varför

Jag började med research och en skriftlig riktning, inte med kod:

1. **Gjorde om briefen till arbetsregler.** Jag lät AI läsa PDF:en och skriva `CLAUDE.md` med krav, öppna frågor och en tidsplan. Jag sa åt den att inte bygga något än och inte anta krav som briefen inte ställer. [promptlogg 1; commit `cc54459`]
2. **Gav min egen bild av velora.se och fyra benchmarks** (Oura, Relivo, Tandem, Apple Health), med sex konkreta problem på dagens startsida. [promptlogg 4]
3. **Byggde en faktainventering innan jag skrev någon text.** Varje pris, påstående och certifiering listas med käll-URL och status (OK / premiss / undvik). Regeln var: finns det inte i `facts.md` kommer det inte med på sidan. [`docs/facts.md`]
4. **Skrev riktningen och godkände den före bygget:** antaganden om målgrupp, antaganden om medicinska regler, fyra principer, en lista över vad som behålls och utmanas, och en sidstruktur. [`docs/direction.md` §1–11; promptlogg 8; commit `63258df`]

**Varför den ordningen:** jag tror på att utgå från liknande tjänster, där kända och beprövade mönster fungerar bra, och utifrån dem se vad som kan förbättras i den befintliga versionen. Jag är också alltid noggrann med att sätta upp ramar för ett projekt innan jag sätter igång, eftersom det sparar mycket tid.

## 2. Arbetsordning

Från commit-historiken och promptloggen (datumen visar när commits gjordes, inte arbetade timmar):

| Steg | Vad | Underlag |
|------|-----|----------|
| 1 | Uppsättning, brief → `CLAUDE.md` | `cc54459` (2 nov) |
| 2 | Granskning, benchmarks, fakta, riktning | `63258df` (2 nov) |
| 3 | Anteckningar med penna och papper om vad som inte fungerar på dagens sida | egen uppgift |
| 4 | Första kompletta bygget av startsidan | `dfb50b9` (2 nov) |
| 5 | Premiumpass och förfining sektion för sektion (hero, pris, steg, FAQ) | promptlogg 11–96 |
| 6 | Iterationer på herobild och färg | promptlogg 101–124, 184–190 |
| 7 | Första 9:16-annonsen | `d146201` (3 nov) |
| 8 | Mobilpass: meny, hero, navbar, berättelser | promptlogg 144–212 |
| 9 | Feedbackrunda med testpersoner | promptlogg 213 |
| 10 | Annons: tre riktningar → C, sedan version B | promptlogg 243–261 (4 nov) |

**Beslut som styrde riktningen:**
- **"Vård du kan lita på" i stället för "medicin som fungerar".** Vi marknadsför vårdteamet och vägen, inte läkemedlet. [`direction.md` §1, P4]
- **En försiktig hållning i medicinska frågor:** jag skrev inte ut någon mer information än den jag hittade på velora.se. [`docs/facts.md`]
- **Kalkylatorn visar ett intervall med premisser** i stället för en enda siffra. [promptlogg 6]
- **Premiumpasset.** Det första bygget kändes för likt originalet, så jag valde att ta större visuella risker. [promptlogg 11]
- **En bokningsknapp i heron,** formulerad som en testbar hypotes. [`direction.md` §9]

## 3. Målgrupp: antaganden och hur de påverkade designen

**Mitt antagande:** en stor del av besökarna är något äldre, ungefär 35–59 år, vilket är åldrarna i patientberättelserna på velora.se. För dem väger tydlighet, tillit, professionalism och transparens tyngst. [`direction.md` §2]

**Hur det påverkade designen:**
- Jag sammanfattade tjänsten kort och tydligt, i stället för att lista påståenden.
- Startsidan berättar en sammanhängande historia, från vad Velora är till hur det går till, vad man kan förvänta sig, vilka som står bakom och vad det kostar.
- Tonen och den visuella identiteten är lugna och trygga, utan säljiga formuleringar.

**Feedback från testare:** testarna, mina föräldrar, upplevde att informationen var väl sammanfattad och att sidan höll ihop som en berättelse.

## 4. Prioriteringar inom fyra timmar

- **Tid:** jag lade fyra timmar på research och bygge. Uppsättning och dokumentation räknade jag inte in. [egen uppgift] Commits sträcker sig över 2–4 november.
- **En version av sidan,** i linje med briefen: hellre en genomarbetad version än flera halvfärdiga. [`CLAUDE.md` §3]
- **Höll mig inom ramarna.** Ingen teamsida eller sida med provlista byggdes. Länkarna "Läs mer om vårt team" och "vilka prover vi behöver" är inaktiverade platshållare i stället. [`direction.md`, poster 215–216]
- **Strök nästan helt att leta nya bilder.** Jag ansåg att de befintliga bilderna är bra och har ett bra bildspråk. Undantaget var en vända där jag letade efter en herobild som passar desktop i 16:9. [egen uppgift]
## 5. Kvalitetssäkring

- **Fakta mot velora.se.** Varje faktauppgift har källa och status i `facts.md`. [`facts.md`]
- **Kontrollerade om AI hade hittat på något.** Jag frågade om påståendena under "Trygg vård" var verkliga. De kontrollerades mot /integritetspolicy och /om-oss, och en formulering stramades upp för att stämma med källan. [promptlogg 213; `direction.md` post 213]
- **Läkemedel:** jag lade inte till någon information om läkemedel, eller något nytt sätt att tala om dem, utöver det som redan står på Veloras befintliga sida. [egen uppgift] Antagandena om regler är skrivna som antaganden och inte kontrollerade mot någon juridisk källa. [`direction.md` §3]
- **Trustpilot-betyget (4,7, 316 omdömen)** lästes av på Veloras Trustpilot-sida den 3 november. [`facts.md`]
- **Layout i mobilbredd.** Överflöde kontrollerades vid 320, 360 och 375 px upp till 1440 px efter layoutändringar, i webbläsarpanelens emulerade fönsterstorlekar. [`direction.md`, många rader märkta "Verified"]
- **Testat på riktig telefon:** iPhone 16 Pro. [egen uppgift]
- **Kontrast mättes** för herotexten, navbarlänkarna och annonstexten.
- **Granskning med människor i stället för AI.** Jag gjorde ingen AI-granskning av design eller text, utan testade med familj: mina föräldrar, som jag tror är i en ålder som passar målgruppen. [egen uppgift]

## 6. Avvägningar

- **Två knappetiketter i stället för en.** Riktningen sa en etikett överallt, "Boka gratis bedömningssamtal". Jag valde ändå den kortare "Kom igång" i navbaren och på Velorametoden-kortet, eftersom den passar ett kompakt utrymme. Priset är att samma handling har två namn. [promptlogg 25, 92; `direction.md` §8]
- **Hjälptexten under knappen togs bort.** Knappen lovar en bokning, men flödet börjar med frågor, och texten "Börjar med några korta frågor …" skulle förbereda besökaren på det. Jag tog bort den för en renare hero. "Kostnadsfritt" och "du binder dig inte" står kvar i steg 1 och i FAQ:n, men förväntan sätts inte längre vid knappen. [promptlogg 38; `audit.md` punkt 8]
- **Patientberättelserna hamnade inte högst upp.** I granskningen ville jag flytta upp dem för att bygga förtroende tidigare. Till slut placerade jag dem efter kalkylatorn: först resultatintervallet, sedan tre verkliga personers resultat, sedan teamet bakom. En tydlig berättelse gick före tidigt förtroende. [promptlogg 4, 220; `direction.md` post 220]
- **Ett intervall i kalkylatorn i stället för en siffra.** Ett intervall med premisser (16–25 % efter 12 månader) är mindre slagkraftigt än "−21 kg", men det är ärligt och följer den försiktiga hållningen. [promptlogg 6; `audit.md` punkt 3]

## 7. Styrning av AI

### Där jag gick emot AI (övergripande exempel)

**A. Visuella alternativ som var omflyttningar, inte idéer.**
När jag bad om alternativ gav AI ofta varianter av sin första idé. Jag förkastade alla tre prislayouterna ("none of those are talking to me"). Nästa runda gick i en annan riktning: ett kvitto som visar totalkostnaden. [promptlogg 71–73; `direction.md`, "Pricing layouts explored"]
**B. Text- och konverteringsval där jag gick emot AI:s rekommendation.**
- AI rekommenderade ingen fast bokningsrad på mobil. I stället behöll jag en fast navbar på mobil som täcker hela överkanten av skärmen, medan desktop har ett svävande fast kort. [promptlogg 9, 144, 148; desktop: 42–43]
- Jag ifrågasatte rubriken "Det handlar inte om viljestyrka" eftersom vilja och engagemang faktiskt spelar in. Den blev "biologi, inte bara om vilja". [promptlogg 137; `direction.md` post 193]

### Två tillfällen då AI hade fel

**1. Stegsektionen "Så går det till"** (länkad som "Så fungerar det" i sidfoten).
- **Misstaget:** AI rekommenderade en bento med numrerade rutor i olika storlekar och färger, och jag lät bygga den. [promptlogg 59, 61] I praktiken var läsordningen otydlig och layouten svår att skumma.
- **Hur jag upptäckte det:** i feedbacksessionerna kunde testpersonerna, mina föräldrar, inte avgöra i vilken ordning korten skulle läsas. De satt vid desktop. [promptlogg 213; egen uppgift]
- **Vad jag ändrade:** jag lade de fyra korten på en vågrät rad, i nummerordning, med bilden ovanför. Nu är det layouten som styr läsordningen. [promptlogg 213–214; `src/components/Steps.astro`]
- De ursprungliga skisserna sparades inte, så utgångsläget kan bara beskrivas. [`direction.md`]

**2. Sektionen "Visste du att?" kom inte med.**
- **Misstaget:** jag ville behålla sektionen från velora.se, eftersom den förklarar behandlingen och att viktnedgång inte bara handlar om motivation. Jag bad om förslag och om att behålla det mesta av innehållet, men AI fick inte med sektionen på sidan. [promptlogg 128, 130]
- **Hur jag upptäckte det:** jag märkte att den saknades och frågade vad som hänt med den. [promptlogg 135]
- **Vad jag ändrade:** jag lät bygga den och placerade den under "Ditt vårdteam". [promptlogg 136; `direction.md` poster 128–136]

## 8. Vad jag hade tittat på och utvecklat härnäst

- **En ny Om Velora-sida.** Den befintliga /om-oss beskriver mest processen och säger lite om Veloras historia och vision. Jag vill ha en sida som känns mer genuin och som handlar om tanken bakom Velora snarare än om processen. Länken "Läs mer om vårt team", som i dag är en inaktiverad platshållare, skulle leda hit.
- **Tydligare information om vilka prover som behövs** inför en behandling. Länken "vilka prover vi behöver", som i dag är en inaktiverad platshållare, skulle leda hit.
- **En förklaring av vad det innebär att byta till Velora** som vårdgivare, och vad man kan förvänta sig av Velora.

## 9. Avslutande kommentarer

Startsidan skulle få fler att boka ett samtal, få besökaren att känna sig trygg och ge ett genomarbetat intryck, samtidigt. Så här styrde de tre målen mina val:

- **Fler bokningar:** bokningsknappen ligger i heron, och en kortare "Kom igång" finns kvar i navbaren på alla skärmar. Sidan leder fram till samtalet steg för steg i stället för att trycka på.
- **Trygghet:** allt på sidan bygger på det som står på velora.se. Resultat visas som intervall med sina premisser, kostnaden visas i sin helhet, och verkliga patienter och namngivna vårdgivare får synas.
- **Ett genomarbetat intryck:** lugn ton, färre element per vy, en redaktionell typografi och Veloras egna foton. Plommonfärgen används för att markera det viktiga, inte som bakgrund överallt.

Målen drar ibland åt olika håll, och då har jag oftast valt förtroende före säljtryck, till exempel ett ärligt intervall i kalkylatorn i stället för en enda slagkraftig siffra (se §6).
