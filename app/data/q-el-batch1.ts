import type { Question } from './questions';

export const elBatch1: Question[] = [
  // ─── ODPOR (300–318) ────────────────────────────────────────────────────────
  {
    id: 300,
    topic: "odpor",
    question: "Aký je vzorec Ohmovho zákona?",
    options: ["U = R / I", "U = R * I", "U = I / R", "U = R + I"],
    correctIndex: 1,
    explanation: "Ohmov zákon hovorí, že napätie U sa rovná súčinu odporu R a prúdu I, teda U = R * I."
  },
  {
    id: 301,
    topic: "odpor",
    question: "Aká je jednotka elektrického odporu?",
    options: ["Ampér", "Volt", "Ohm", "Watt"],
    correctIndex: 2,
    explanation: "Jednotkou elektrického odporu je ohm (Ω), pomenovaný po Georgovi Simonovi Ohmovi."
  },
  {
    id: 302,
    topic: "odpor",
    question: "Rezistor má farebný kód: hnedá, čierna, červená, zlatá. Aká je jeho hodnota?",
    options: ["1 kΩ ± 5%", "10 kΩ ± 5%", "100 Ω ± 5%", "10 Ω ± 5%"],
    correctIndex: 0,
    explanation: "Hnedá = 1, čierna = 0, červená = x100, zlatá = ±5%. Výsledok je 10 * 100 = 1000 Ω = 1 kΩ ± 5%."
  },
  {
    id: 303,
    topic: "odpor",
    question: "Ako sa zmení odpor kovového vodiča pri zvýšení teploty?",
    options: ["Zníži sa", "Zvýši sa", "Nezmení sa", "Najprv sa zníži, potom zvýši"],
    correctIndex: 1,
    explanation: "Kovy majú kladný teplotný súčiniteľ odporu (PTC), preto sa ich odpor pri zvýšení teploty zvyšuje."
  },
  {
    id: 304,
    topic: "odpor",
    question: "Dva rezistory 10 Ω sú zapojené paralelne. Aký je celkový odpor?",
    options: ["20 Ω", "5 Ω", "10 Ω", "2,5 Ω"],
    correctIndex: 1,
    explanation: "Pri paralelnom zapojení dvoch rovnakých odporov je celkový odpor R/2 = 10/2 = 5 Ω."
  },
  {
    id: 305,
    topic: "odpor",
    question: "Aký je merný odpor medi pri 20 °C?",
    options: ["0,0178 Ω*mm²/m", "0,028 Ω*mm²/m", "0,11 Ω*mm²/m", "1,0 Ω*mm²/m"],
    correctIndex: 0,
    explanation: "Merný odpor (rezistivita) medi pri 20 °C je približne 0,0178 Ω*mm²/m, čo z nej robí výborný vodič."
  },
  {
    id: 306,
    topic: "odpor",
    question: "Čo je supravodivosť?",
    options: ["Odpor klesne na nulu pri veľmi nízkej teplote", "Odpor sa zvýši na nekonečno pri nízkej teplote", "Vodič vedie len jednosmerný prúd pri ochladení", "Materiál sa stane izolantom pri veľmi nízkej teplote"],
    correctIndex: 0,
    explanation: "Supravodivosť je jav, pri ktorom odpor materiálu klesne na nulu pri ochladení pod kritickú teplotu."
  },
  {
    id: 307,
    topic: "odpor",
    question: "NTC termistor má aký charakter závislosti odporu na teplote?",
    options: ["S rastúcou teplotou odpor rastie", "S rastúcou teplotou odpor klesá", "Odpor je konštantný", "Odpor najprv rastie a potom klesá"],
    correctIndex: 1,
    explanation: "NTC (Negative Temperature Coefficient) termistor má záporný teplotný súčiniteľ - s rastúcou teplotou jeho odpor klesá."
  },
  {
    id: 308,
    topic: "odpor",
    question: "Vodič má dĺžku 100 m, prierez 2,5 mm² a merný odpor 0,0178 Ω*mm²/m. Aký je jeho odpor?",
    options: ["0,356 Ω", "0,712 Ω", "1,78 Ω", "0,178 Ω"],
    correctIndex: 1,
    explanation: "R = ρ * l / S = 0,0178 * 100 / 2,5 = 0,712 Ω."
  },
  {
    id: 309,
    topic: "odpor",
    question: "Tri rezistory 30 Ω sú zapojené sériovo. Aký je celkový odpor?",
    options: ["10 Ω", "30 Ω", "60 Ω", "90 Ω"],
    correctIndex: 3,
    explanation: "Pri sériovom zapojení sa odpory sčítavajú: R = 30 + 30 + 30 = 90 Ω."
  },
  {
    id: 310,
    topic: "odpor",
    question: "Aký je vzorec pre výpočet odporu vodiča?",
    options: ["R = ρ * S / l", "R = ρ * l / S", "R = l * S / ρ", "R = ρ / (l * S)"],
    correctIndex: 1,
    explanation: "Odpor vodiča sa vypočíta ako R = ρ * l / S, kde ρ je merný odpor, l je dĺžka a S je prierez."
  },
  {
    id: 311,
    topic: "odpor",
    question: "Aká farba na rezistore predstavuje číslo 7?",
    options: ["Modrá", "Fialová", "Sivá", "Biela"],
    correctIndex: 1,
    explanation: "Vo farebnom kóde rezistorov fialová farba predstavuje číslo 7."
  },
  {
    id: 312,
    topic: "odpor",
    question: "PTC termistor sa používa najčastejšie na:",
    options: ["Stabilizáciu a reguláciu napätia", "Meranie teploty a tepelnú ochranu", "Usmerňovanie striedavého prúdu", "Zosilňovanie analógového signálu"],
    correctIndex: 1,
    explanation: "PTC termistory sa bežne používajú na meranie teploty a tepelnú ochranu motorov a obvodov."
  },
  {
    id: 313,
    topic: "odpor",
    question: "Rezistory 4 Ω a 12 Ω sú zapojené paralelne. Aký je celkový odpor?",
    options: ["16 Ω", "3 Ω", "8 Ω", "48 Ω"],
    correctIndex: 1,
    explanation: "1/R = 1/4 + 1/12 = 3/12 + 1/12 = 4/12, teda R = 12/4 = 3 Ω."
  },
  {
    id: 314,
    topic: "odpor",
    question: "Aká je tolerancia rezistora so zlatým pruhom?",
    options: ["±1%", "±2%", "±5%", "±10%"],
    correctIndex: 2,
    explanation: "Zlatý pruh na rezistore znamená toleranciu ±5%. Strieborný pruh znamená ±10%."
  },
  {
    id: 315,
    topic: "odpor",
    question: "Rezistorom 100 Ω preteká prúd 0,5 A. Aký výkon sa na ňom premení na teplo?",
    options: ["25 W", "50 W", "12,5 W", "200 W"],
    correctIndex: 0,
    explanation: "P = R * I² = 100 * 0,5² = 100 * 0,25 = 25 W."
  },
  {
    id: 316,
    topic: "odpor",
    question: "Čo je vodivosť (konduktancia)?",
    options: ["Prevrátená hodnota napätia", "Prevrátená hodnota odporu", "Súčin odporu a prúdu", "Jednotka kapacity"],
    correctIndex: 1,
    explanation: "Vodivosť G je prevrátená hodnota odporu: G = 1/R. Jej jednotkou je siemens (S)."
  },
  {
    id: 317,
    topic: "odpor",
    question: "Aký materiál má najmenší merný odpor?",
    options: ["Meď", "Hliník", "Striebro", "Zlato"],
    correctIndex: 2,
    explanation: "Striebro má najmenší merný odpor spomedzi bežných kovov (asi 0,016 Ω*mm²/m), preto je najlepším vodičom."
  },
  {
    id: 318,
    topic: "odpor",
    question: "Rezistor s farebným kódom červená, fialová, oranžová, strieborná má hodnotu:",
    options: ["27 kΩ ± 10%", "270 kΩ ± 10%", "2,7 kΩ ± 10%", "27 Ω ± 10%"],
    correctIndex: 0,
    explanation: "Červená = 2, fialová = 7, oranžová = x1000, strieborná = ±10%. Výsledok je 27 * 1000 = 27 kΩ ± 10%."
  },

  // ─── KIRCHHOFF (319–337) ────────────────────────────────────────────────────
  {
    id: 319,
    topic: "kirchhoff",
    question: "Čo hovorí 1. Kirchhoffov zákon?",
    options: ["Súčet napätí v uzavretej slučke je nula", "Súčet prúdov v uzle je nula", "Výkon je súčin napätia a prúdu", "Odpor je pomer napätia a prúdu"],
    correctIndex: 1,
    explanation: "1. Kirchhoffov zákon (prúdový) hovorí, že algebraický súčet prúdov vstupujúcich a vystupujúcich z uzla je nula."
  },
  {
    id: 320,
    topic: "kirchhoff",
    question: "Čo hovorí 2. Kirchhoffov zákon?",
    options: ["Súčet prúdov v uzle je nula", "Súčet napätí v uzavretej slučke je nula", "Prúd je konštantný v celom obvode", "Výkon zdroja sa rovná výkonu záťaže"],
    correctIndex: 1,
    explanation: "2. Kirchhoffov zákon (napäťový) hovorí, že algebraický súčet napätí v uzavretej slučke je nula."
  },
  {
    id: 321,
    topic: "kirchhoff",
    question: "Aký je vzorec pre výkon v jednosmernom obvode?",
    options: ["P = U / I", "P = U * I", "P = U² / I", "P = I / U"],
    correctIndex: 1,
    explanation: "Výkon v jednosmernom obvode sa vypočíta ako P = U * I (výkon = napätie * prúd)."
  },
  {
    id: 322,
    topic: "kirchhoff",
    question: "Zdroj má EMN 12 V a vnútorný odpor 0,5 Ω. Aké je svorkové napätie pri prúde 2 A?",
    options: ["11 V", "12 V", "13 V", "10 V"],
    correctIndex: 0,
    explanation: "Svorkové napätie U = EMN - Ri * I = 12 - 0,5 * 2 = 12 - 1 = 11 V."
  },
  {
    id: 323,
    topic: "kirchhoff",
    question: "V sériovom obvode s rezistormi 10 Ω a 20 Ω je napätie zdroja 30 V. Aký prúd tečie obvodom?",
    options: ["3 A", "1 A", "1,5 A", "2 A"],
    correctIndex: 1,
    explanation: "Celkový odpor R = 10 + 20 = 30 Ω. Prúd I = U / R = 30 / 30 = 1 A."
  },
  {
    id: 324,
    topic: "kirchhoff",
    question: "Delič napätia tvorený rezistormi R1 = 3 kΩ a R2 = 7 kΩ je napájaný napätím 10 V. Aké napätie je na R2?",
    options: ["3 V", "5 V", "7 V", "10 V"],
    correctIndex: 2,
    explanation: "U2 = U * R2 / (R1 + R2) = 10 * 7 / (3 + 7) = 10 * 7/10 = 7 V."
  },
  {
    id: 325,
    topic: "kirchhoff",
    question: "Aký je vzťah medzi energiou a výkonom?",
    options: ["W = P / t", "W = P * t", "W = P² * t", "W = P + t"],
    correctIndex: 1,
    explanation: "Elektrická energia W = P * t, kde P je výkon a t je čas."
  },
  {
    id: 326,
    topic: "kirchhoff",
    question: "Spotrebič s výkonom 2 kW je zapnutý 3 hodiny. Koľko energie spotrebuje?",
    options: ["6 kWh", "0,67 kWh", "5 kWh", "600 Wh"],
    correctIndex: 0,
    explanation: "W = P * t = 2 kW * 3 h = 6 kWh."
  },
  {
    id: 327,
    topic: "kirchhoff",
    question: "V paralelnom obvode sú dva rezistory. Čo platí pre napätie na nich?",
    options: ["Napätie je rôzne na každom rezistore", "Napätie je rovnaké na oboch rezistoroch", "Napätie je nulové na oboch rezistoroch", "Napätie sa sčíta na oboch rezistoroch"],
    correctIndex: 1,
    explanation: "V paralelnom zapojení je napätie na všetkých vetvách rovnaké."
  },
  {
    id: 328,
    topic: "kirchhoff",
    question: "Čo je Wheatstoneov mostík?",
    options: ["Obvod na zosilnenie prúdu", "Obvod na presné meranie odporu", "Obvod na usmerňovanie striedavého prúdu", "Obvod na meranie kapacity"],
    correctIndex: 1,
    explanation: "Wheatstoneov mostík je meracie zapojenie štyroch rezistorov, ktoré umožňuje presné meranie neznámeho odporu."
  },
  {
    id: 329,
    topic: "kirchhoff",
    question: "V uzle sa stretávajú tri vodiče. Prúdy I1 = 3 A a I2 = 5 A vstupujú do uzla. Aký prúd I3 z uzla vystupuje?",
    options: ["2 A", "8 A", "15 A", "1,67 A"],
    correctIndex: 1,
    explanation: "Podľa 1. Kirchhoffovho zákona: I1 + I2 = I3, teda I3 = 3 + 5 = 8 A."
  },
  {
    id: 330,
    topic: "kirchhoff",
    question: "Ako sa vypočíta výkon pomocou odporu a prúdu?",
    options: ["P = R / I²", "P = R * I²", "P = R² * I", "P = I / R"],
    correctIndex: 1,
    explanation: "P = R * I² je jeden z odvodených vzorcov pre výkon. Ďalšie sú P = U * I a P = U² / R."
  },
  {
    id: 331,
    topic: "kirchhoff",
    question: "Čo je EMN (elektromotorické napätie)?",
    options: ["Napätie na svorkách zaťaženého zdroja", "Celkové napätie zdroja bez zaťaženia", "Úbytok napätia na vnútornom odpore", "Napätie na spotrebiči"],
    correctIndex: 1,
    explanation: "EMN je celkové napätie, ktoré zdroj vytvára. Na svorkách zaťaženého zdroja je napätie menšie o úbytok na vnútornom odpore."
  },
  {
    id: 332,
    topic: "kirchhoff",
    question: "Superpozícia sa používa na analýzu obvodov s:",
    options: ["Jedným zdrojom", "Jedným rezistorom", "Viacerými zdrojmi", "Kondenzátormi"],
    correctIndex: 2,
    explanation: "Metóda superpozície sa používa na analýzu lineárnych obvodov s viacerými zdrojmi - účinky každého zdroja sa počítajú zvlášť a potom sa sčítajú."
  },
  {
    id: 333,
    topic: "kirchhoff",
    question: "Rezistor 100 Ω je pripojený na napätie 10 V. Aký výkon sa na ňom premení?",
    options: ["1 W", "10 W", "100 W", "0,1 W"],
    correctIndex: 0,
    explanation: "P = U² / R = 10² / 100 = 100 / 100 = 1 W."
  },
  {
    id: 334,
    topic: "kirchhoff",
    question: "V sériovom obvode platí, že:",
    options: ["Napätie je rovnaké na každom prvku", "Prúd je rovnaký cez všetky prvky", "Odpory sa počítajú ako prevrátené hodnoty", "Výkon je na každom prvku rovnaký"],
    correctIndex: 1,
    explanation: "V sériovom obvode tečie rovnaký prúd cez všetky prvky, napätie sa delí podľa odporov."
  },
  {
    id: 335,
    topic: "kirchhoff",
    question: "Zdroj s EMN 9 V a vnútorným odporom 1 Ω je skratovaný. Aký prúd nakrátko tečie?",
    options: ["0 A", "9 A", "1 A", "Nekonečný"],
    correctIndex: 1,
    explanation: "Prúd nakrátko Ik = EMN / Ri = 9 / 1 = 9 A. V praxi je tento stav nebezpečný."
  },
  {
    id: 336,
    topic: "kirchhoff",
    question: "Delič prúdu: celkový prúd 6 A sa delí do dvoch vetiev s R1 = 10 Ω a R2 = 20 Ω. Aký prúd tečie cez R1?",
    options: ["2 A", "3 A", "4 A", "6 A"],
    correctIndex: 2,
    explanation: "I1 = I * R2 / (R1 + R2) = 6 * 20 / (10 + 20) = 120 / 30 = 4 A. Väčší prúd tečie menším odporom."
  },
  {
    id: 337,
    topic: "kirchhoff",
    question: "1 kWh sa rovná koľko joulov?",
    options: ["3600 J", "36 000 J", "360 000 J", "3 600 000 J"],
    correctIndex: 3,
    explanation: "1 kWh = 1000 W * 3600 s = 3 600 000 J = 3,6 MJ."
  },

  // ─── STRIEDAVÝ PRÚD (338–356) ──────────────────────────────────────────────
  {
    id: 338,
    topic: "striedavy",
    question: "Aká je frekvencia striedavého prúdu v európskej rozvodnej sieti?",
    options: ["60 Hz", "50 Hz", "100 Hz", "25 Hz"],
    correctIndex: 1,
    explanation: "V Európe (vrátane Slovenska) je štandardná frekvencia rozvodnej siete 50 Hz."
  },
  {
    id: 339,
    topic: "striedavy",
    question: "Aký je vzťah medzi periódou T a frekvenciou f?",
    options: ["T = f", "T = 1 / f", "T = 2πf", "T = f²"],
    correctIndex: 1,
    explanation: "Perióda T je prevrátená hodnota frekvencie: T = 1/f. Napr. pri f = 50 Hz je T = 1/50 = 0,02 s."
  },
  {
    id: 340,
    topic: "striedavy",
    question: "Efektívna hodnota striedavého napätia sa rovná:",
    options: ["Umax", "Umax / √2", "Umax * √2", "Umax / 2"],
    correctIndex: 1,
    explanation: "Efektívna (RMS) hodnota sínusového napätia je Uef = Umax / √2 ≈ 0,707 * Umax."
  },
  {
    id: 341,
    topic: "striedavy",
    question: "Sieťové napätie 230 V je hodnota:",
    options: ["Maximálna (amplitúda)", "Efektívna", "Stredná", "Okamžitá"],
    correctIndex: 1,
    explanation: "Udávaná hodnota 230 V je efektívna hodnota. Maximálna (amplitúda) je 230 * √2 ≈ 325 V."
  },
  {
    id: 342,
    topic: "striedavy",
    question: "Čo je impedancia?",
    options: ["Odpor vodiča jednosmernému prúdu", "Celkový odpor obvodu striedavému prúdu", "Odpor kondenzátora pri nabíjaní", "Odpor cievky pri pripojení napätia"],
    correctIndex: 1,
    explanation: "Impedancia Z je celkový odpor obvodu voči striedavému prúdu. Zahŕňa odpor R, induktívnu reaktanciu XL a kapacitnú reaktanciu XC."
  },
  {
    id: 343,
    topic: "striedavy",
    question: "Ako sa vypočíta induktívna reaktancia?",
    options: ["XL = 2πfL", "XL = 1/(2πfL)", "XL = 2πfC", "XL = L/f"],
    correctIndex: 0,
    explanation: "Induktívna reaktancia XL = 2πfL = ωL, kde f je frekvencia a L je indukčnosť."
  },
  {
    id: 344,
    topic: "striedavy",
    question: "Ako sa vypočíta kapacitná reaktancia?",
    options: ["XC = 2πfC", "XC = 1/(2πfC)", "XC = C/f", "XC = 2πf/C"],
    correctIndex: 1,
    explanation: "Kapacitná reaktancia XC = 1/(2πfC), kde f je frekvencia a C je kapacita."
  },
  {
    id: 345,
    topic: "striedavy",
    question: "V čisto induktívnom obvode prúd za napätím:",
    options: ["Predchádza o 90°", "Zaostáva o 90°", "Je vo fáze", "Zaostáva o 45°"],
    correctIndex: 1,
    explanation: "V čisto induktívnom obvode prúd zaostáva za napätím o 90° (π/2)."
  },
  {
    id: 346,
    topic: "striedavy",
    question: "V čisto kapacitnom obvode prúd pred napätím:",
    options: ["Zaostáva o 90°", "Predchádza o 90°", "Je vo fáze", "Predchádza o 45°"],
    correctIndex: 1,
    explanation: "V čisto kapacitnom obvode prúd predchádza napätie o 90° (π/2)."
  },
  {
    id: 347,
    topic: "striedavy",
    question: "Čo je cos(φ) v striedavom obvode?",
    options: ["Pomer jalového a činného výkonu v obvode", "Účinník - pomer činného a zdanlivého výkonu", "Pomer napätia a prúdu v striedavom obvode", "Frekvencia obvodu pri záťaži na výstupe"],
    correctIndex: 1,
    explanation: "cos(φ) je účinník, vyjadruje pomer činného výkonu P k zdanlivému výkonu S: cos(φ) = P/S."
  },
  {
    id: 348,
    topic: "striedavy",
    question: "Činný výkon v striedavom obvode sa vypočíta ako:",
    options: ["P = U * I", "P = U * I * cos(φ)", "P = U * I * sin(φ)", "P = U² / Z"],
    correctIndex: 1,
    explanation: "Činný výkon P = U * I * cos(φ), kde cos(φ) je účinník. Len pri cos(φ) = 1 platí P = U * I."
  },
  {
    id: 349,
    topic: "striedavy",
    question: "Jalový výkon sa meria v:",
    options: ["Wattoch činných (W)", "Voltampéroch zdanlivých (VA)", "Voltampéroch reaktívnych (VAr)", "Jouloch energetických (J)"],
    correctIndex: 2,
    explanation: "Jalový výkon Q sa meria vo voltampéroch reaktívnych (VAr). Činný výkon je vo wattoch (W) a zdanlivý vo voltampéroch (VA)."
  },
  {
    id: 350,
    topic: "striedavy",
    question: "Amplitúda sieťového napätia 230 V je približne:",
    options: ["230 V", "325 V", "163 V", "460 V"],
    correctIndex: 1,
    explanation: "Umax = Uef * √2 = 230 * 1,414 ≈ 325 V."
  },
  {
    id: 351,
    topic: "striedavy",
    question: "Impedancia sériového RLC obvodu sa vypočíta ako:",
    options: ["Z = R + XL + XC", "Z = √(R² + (XL - XC)²)", "Z = R * XL * XC", "Z = R + XL - XC"],
    correctIndex: 1,
    explanation: "Impedancia sériového RLC obvodu je Z = √(R² + (XL - XC)²), pretože reaktancie sa odčítavajú a s odporom tvoria pravouhlý trojuholník."
  },
  {
    id: 352,
    topic: "striedavy",
    question: "Aký je vzťah medzi zdanlivým, činným a jalovým výkonom?",
    options: ["S = P + Q", "S² = P² + Q²", "S = P * Q", "S = P - Q"],
    correctIndex: 1,
    explanation: "Zdanlivý výkon S, činný výkon P a jalový výkon Q tvoria výkonový trojuholník: S² = P² + Q²."
  },
  {
    id: 353,
    topic: "striedavy",
    question: "Cievka s indukčnosťou 0,1 H je pripojená na sieť 50 Hz. Aká je jej induktívna reaktancia?",
    options: ["31,4 Ω", "5 Ω", "50 Ω", "314 Ω"],
    correctIndex: 0,
    explanation: "XL = 2πfL = 2 * 3,14 * 50 * 0,1 = 31,4 Ω."
  },
  {
    id: 354,
    topic: "striedavy",
    question: "Pri zvyšovaní frekvencie induktívna reaktancia:",
    options: ["Klesá", "Rastie", "Nemení sa", "Najprv rastie, potom klesá"],
    correctIndex: 1,
    explanation: "XL = 2πfL - induktívna reaktancia je priamo úmerná frekvencii, preto s frekvenciou rastie."
  },
  {
    id: 355,
    topic: "striedavy",
    question: "Pri zvyšovaní frekvencie kapacitná reaktancia:",
    options: ["Rastie", "Klesá", "Nemení sa", "Najprv klesá, potom rastie"],
    correctIndex: 1,
    explanation: "XC = 1/(2πfC) - kapacitná reaktancia je nepriamo úmerná frekvencii, preto s frekvenciou klesá."
  },
  {
    id: 356,
    topic: "striedavy",
    question: "Ak je cos(φ) = 1, obvod je:",
    options: ["Čisto induktívny s fázovým posunom", "Čisto kapacitný s predbiehaním", "V rezonancii alebo čisto odporový", "Rozladený s neznámou impedanciou"],
    correctIndex: 2,
    explanation: "cos(φ) = 1 znamená, že fázový posun je 0°. To nastane v čisto odporovom obvode alebo pri rezonancii, keď sa XL a XC navzájom vyrušia."
  },

  // ─── REZONANCIA (357–375) ──────────────────────────────────────────────────
  {
    id: 357,
    topic: "rezonancia",
    question: "Aký je vzorec pre rezonančnú frekvenciu?",
    options: ["f₀ = 2π√(LC)", "f₀ = 1/(2π√(LC))", "f₀ = LC/(2π)", "f₀ = √(LC)/2π"],
    correctIndex: 1,
    explanation: "Rezonančná frekvencia f₀ = 1/(2π√(LC)), kde L je indukčnosť a C je kapacita."
  },
  {
    id: 358,
    topic: "rezonancia",
    question: "Čo platí pri sériovej rezonancii?",
    options: ["Impedancia je maximálna a rovná sa XL", "Impedancia je minimálna a rovná sa R", "Prúd je minimálny a rovná sa nule", "Napätie na záťaži je nulové pri R"],
    correctIndex: 1,
    explanation: "Pri sériovej rezonancii sa XL = XC navzájom vyrušia a impedancia klesne na minimum Z = R, prúd je maximálny."
  },
  {
    id: 359,
    topic: "rezonancia",
    question: "Čo platí pri paralelnej rezonancii?",
    options: ["Impedancia je minimálna", "Impedancia je maximálna", "Prúd je maximálny", "Napätie je nulové"],
    correctIndex: 1,
    explanation: "Pri paralelnej rezonancii je impedancia maximálna a celkový prúd odoberaný zo zdroja je minimálny."
  },
  {
    id: 360,
    topic: "rezonancia",
    question: "Činiteľ kvality Q obvodu vyjadruje:",
    options: ["Účinnosť a energetické straty obvodu", "Selektivitu a ostrosť rezonančnej krivky", "Celkový výkon a príkon rezonančného obvodu", "Vnútorný odpor a impedanciu obvodu"],
    correctIndex: 1,
    explanation: "Činiteľ kvality Q vyjadruje ostrosť (selektivitu) rezonancie - čím vyšší Q, tým užšie rezonančné pásmo."
  },
  {
    id: 361,
    topic: "rezonancia",
    question: "Obvod s L = 10 mH a C = 10 μF. Aká je rezonančná frekvencia?",
    options: ["503 Hz", "159 Hz", "50 Hz", "1000 Hz"],
    correctIndex: 0,
    explanation: "f₀ = 1/(2π√(LC)) = 1/(2π√(10*10⁻³ * 10*10⁻⁶)) = 1/(2π√(10⁻⁷)) ≈ 1/(2π * 3,16*10⁻⁴) ≈ 503 Hz."
  },
  {
    id: 362,
    topic: "rezonancia",
    question: "Ako sa vypočíta činiteľ kvality sériového rezonančného obvodu?",
    options: ["Q = R/(ωL)", "Q = ωL/R", "Q = R*ωL", "Q = ω/(RL)"],
    correctIndex: 1,
    explanation: "Činiteľ kvality sériového RLC obvodu je Q = ωL/R = 1/(ωCR), kde ω je rezonančná uhlová frekvencia."
  },
  {
    id: 363,
    topic: "rezonancia",
    question: "Šírka pásma rezonančného obvodu je:",
    options: ["B = f₀ / Q", "B = f₀ * Q", "B = Q / f₀", "B = f₀ + Q"],
    correctIndex: 0,
    explanation: "Šírka pásma B = f₀/Q. Čím vyšší činiteľ kvality Q, tým užšie pásmo a lepšia selektivita."
  },
  {
    id: 364,
    topic: "rezonancia",
    question: "Rezonancia v rádioprijímači slúži na:",
    options: ["Zosilnenie prijímaného signálu na výstupe", "Výber požadovanej frekvencie (ladenie)", "Usmerňovanie prúdu z antény na výstup", "Stabilizáciu napätia v prijímacom obvode"],
    correctIndex: 1,
    explanation: "Rezonančný obvod v rádioprijímači slúži na výber (ladenie) požadovanej frekvencie z mnohých signálov."
  },
  {
    id: 365,
    topic: "rezonancia",
    question: "Pri rezonancii platí, že:",
    options: ["XL > XC", "XL < XC", "XL = XC", "XL = 0"],
    correctIndex: 2,
    explanation: "Pri rezonancii sa induktívna a kapacitná reaktancia navzájom rovnajú: XL = XC."
  },
  {
    id: 366,
    topic: "rezonancia",
    question: "Ako sa zmení rezonančná frekvencia, ak zdvojnásobíme kapacitu?",
    options: ["Zdvojnásobí sa na 2-násobok", "Zníži sa na 1/√2-násobok", "Zníži sa presne na polovicu", "Nezmení sa a zostane rovnaká"],
    correctIndex: 1,
    explanation: "f₀ = 1/(2π√(LC)). Ak C zdvojnásobíme: f₀' = 1/(2π√(L*2C)) = f₀/√2 ≈ 0,707 * f₀."
  },
  {
    id: 367,
    topic: "rezonancia",
    question: "Pásmový filter prepúšťa:",
    options: ["Len jednosmernú zložku signálu", "Frekvencie v určitom pásme", "Len vysoké frekvencie signálu", "Len nízke frekvencie signálu"],
    correctIndex: 1,
    explanation: "Pásmový filter (bandpass) prepúšťa frekvencie v určitom pásme okolo rezonančnej frekvencie a ostatné potláča."
  },
  {
    id: 368,
    topic: "rezonancia",
    question: "Horný priepust (high-pass filter) prepúšťa:",
    options: ["Len nízke frekvencie pod medznou frekvenciou", "Len vysoké frekvencie nad medznou frekvenciou", "Všetky frekvencie rovnomerne bez filtrácie", "Len jednosmernú zložku bez striedavej časti"],
    correctIndex: 1,
    explanation: "Horný priepust prepúšťa frekvencie vyššie ako medzná frekvencia a nižšie potláča."
  },
  {
    id: 369,
    topic: "rezonancia",
    question: "Dolný priepust (low-pass filter) prepúšťa:",
    options: ["Len frekvencie nižšie ako medzná frekvencia", "Len vysoké frekvencie nad medznou hranicou", "Frekvencie v úzkom pásme okolo rezonancie", "Len striedavú zložku bez jednosmernej časti"],
    correctIndex: 0,
    explanation: "Dolný priepust prepúšťa frekvencie nižšie ako medzná frekvencia a vyššie potláča."
  },
  {
    id: 370,
    topic: "rezonancia",
    question: "Napätie na kondenzátore pri sériovej rezonancii môže byť:",
    options: ["Menšie ako napätie zdroja (1/Q-krát)", "Rovné napätiu zdroja (presne 1-krát)", "Väčšie ako napätie zdroja (Q-krát)", "Vždy nulové pri rezonančnej frekvencii"],
    correctIndex: 2,
    explanation: "Pri sériovej rezonancii môže byť napätie na C (aj na L) Q-krát väčšie ako napätie zdroja - ide o rezonančné prevýšenie napätia."
  },
  {
    id: 371,
    topic: "rezonancia",
    question: "Ak Q = 50 a napätie zdroja je 1 V, aké napätie môže byť na cievke pri sériovej rezonancii?",
    options: ["1 V", "50 V", "0,02 V", "100 V"],
    correctIndex: 1,
    explanation: "Pri sériovej rezonancii UL = Q * Uzdroja = 50 * 1 = 50 V. Toto je rezonančné prevýšenie napätia."
  },
  {
    id: 372,
    topic: "rezonancia",
    question: "Zádrž (notch/band-stop filter) potláča:",
    options: ["Všetky frekvencie bez rozdielu", "Frekvencie v určitom pásme", "Len jednosmernú zložku signálu", "Len striedavú zložku signálu"],
    correctIndex: 1,
    explanation: "Zádrž (band-stop filter) potláča frekvencie v určitom pásme okolo rezonančnej frekvencie a ostatné prepúšťa."
  },
  {
    id: 373,
    topic: "rezonancia",
    question: "Sériový rezonančný obvod s R = 10 Ω a Q = 20 má reaktanciu XL pri rezonancii:",
    options: ["200 Ω", "0,5 Ω", "2 Ω", "10 Ω"],
    correctIndex: 0,
    explanation: "Q = XL/R, teda XL = Q * R = 20 * 10 = 200 Ω. Rovnako XC = 200 Ω pri rezonancii."
  },
  {
    id: 374,
    topic: "rezonancia",
    question: "Piezoelektrický kryštál (kremenný rezonátor) sa používa na:",
    options: ["Stabilizáciu frekvencie oscilátora", "Usmerňovanie striedavého prúdu", "Zosilnenie vysokofrekvenčného signálu", "Meranie teploty v obvode"],
    correctIndex: 0,
    explanation: "Kremenný rezonátor má veľmi vysoký činiteľ kvality (Q > 10000) a používa sa na stabilizáciu frekvencie oscilátora."
  },
  {
    id: 375,
    topic: "rezonancia",
    question: "Paralelný rezonančný obvod sa v praxi používa ako:",
    options: ["Usmerňovač striedavého napätia na jednosmerné", "Záťaž zosilňovača na výber frekvencie", "Stabilizátor napätia v napájacom zdroji", "Menič frekvencie v spínanom zdroji"],
    correctIndex: 1,
    explanation: "Paralelný rezonančný obvod s vysokou impedanciou pri rezonancii sa používa ako záťaž v ladených zosilňovačoch na výber požadovanej frekvencie."
  },

  // ─── KONDENZÁTOR (376–394) ─────────────────────────────────────────────────
  {
    id: 376,
    topic: "kondenzator",
    question: "Aký je vzorec pre kapacitu kondenzátora?",
    options: ["C = U / Q", "C = Q / U", "C = Q * U", "C = U² / Q"],
    correctIndex: 1,
    explanation: "Kapacita kondenzátora C = Q / U, kde Q je náboj a U je napätie. Jednotkou je farad (F)."
  },
  {
    id: 377,
    topic: "kondenzator",
    question: "Energia uložená v kondenzátore sa vypočíta ako:",
    options: ["W = CU", "W = ½CU²", "W = CU²", "W = C²U"],
    correctIndex: 1,
    explanation: "Energia uložená v kondenzátore W = ½CU², kde C je kapacita a U je napätie."
  },
  {
    id: 378,
    topic: "kondenzator",
    question: "Dva kondenzátory 10 μF sú zapojené paralelne. Aká je celková kapacita?",
    options: ["5 μF", "10 μF", "20 μF", "100 μF"],
    correctIndex: 2,
    explanation: "Pri paralelnom zapojení sa kapacity sčítavajú: C = C1 + C2 = 10 + 10 = 20 μF."
  },
  {
    id: 379,
    topic: "kondenzator",
    question: "Dva kondenzátory 10 μF sú zapojené sériovo. Aká je celková kapacita?",
    options: ["5 μF", "10 μF", "20 μF", "2,5 μF"],
    correctIndex: 0,
    explanation: "Pri sériovom zapojení dvoch rovnakých kondenzátorov: C = C1/2 = 10/2 = 5 μF."
  },
  {
    id: 380,
    topic: "kondenzator",
    question: "Časová konštanta RC obvodu sa vypočíta ako:",
    options: ["τ = R / C", "τ = R * C", "τ = R + C", "τ = C / R"],
    correctIndex: 1,
    explanation: "Časová konštanta τ = R * C. Za čas τ sa kondenzátor nabije na 63,2% konečného napätia."
  },
  {
    id: 381,
    topic: "kondenzator",
    question: "Za koľko časových konštánt sa kondenzátor prakticky plne nabije?",
    options: ["1τ", "3τ", "5τ", "10τ"],
    correctIndex: 2,
    explanation: "Za 5τ sa kondenzátor nabije na 99,3% konečného napätia, čo sa považuje za prakticky plné nabitie."
  },
  {
    id: 382,
    topic: "kondenzator",
    question: "Elektrolytický kondenzátor sa vyznačuje:",
    options: ["Malou kapacitou a vysokou presnosťou", "Veľkou kapacitou a polaritou", "Nulovou polaritou", "Použitím len vo vysokofrekvenčných obvodoch"],
    correctIndex: 1,
    explanation: "Elektrolytický kondenzátor má veľkú kapacitu, ale musí byť zapojený so správnou polaritou, inak sa môže poškodiť."
  },
  {
    id: 383,
    topic: "kondenzator",
    question: "Čo je dielektrikum?",
    options: ["Vodivý materiál medzi doskami kondenzátora", "Izolačný materiál medzi doskami kondenzátora", "Kovová doska na povrchu kondenzátora", "Typ kondenzátora s vysokou kapacitou"],
    correctIndex: 1,
    explanation: "Dielektrikum je izolačný materiál medzi doskami kondenzátora. Jeho vlastnosti ovplyvňujú kapacitu kondenzátora."
  },
  {
    id: 384,
    topic: "kondenzator",
    question: "Kondenzátor s kapacitou 100 μF a napätím 10 V. Aká energia je v ňom uložená?",
    options: ["5 mJ", "10 mJ", "1 mJ", "50 mJ"],
    correctIndex: 0,
    explanation: "W = ½CU² = ½ * 100*10⁻⁶ * 10² = ½ * 100*10⁻⁶ * 100 = 5*10⁻³ J = 5 mJ."
  },
  {
    id: 385,
    topic: "kondenzator",
    question: "Keramický kondenzátor sa používa hlavne na:",
    options: ["Filtráciu sieťového napätia v napájacích zdrojoch", "Blokovanie a odväzovanie vo vysokofrekvenčných obvodoch", "Ukladanie veľkého náboja v záložných zdrojoch", "Nastavovanie časovačov a oneskorovacích obvodov"],
    correctIndex: 1,
    explanation: "Keramické kondenzátory majú malú kapacitu, ale výborné vysokofrekvenčné vlastnosti, preto sa používajú na blokovanie a odväzovanie."
  },
  {
    id: 386,
    topic: "kondenzator",
    question: "Kondenzátor v obvode jednosmerného prúdu po nabití:",
    options: ["Vedie jednosmerný prúd stále", "Neprepúšťa jednosmerný prúd", "Skratuje celý jednosmerný obvod", "Zvyšuje prúd v celom obvode"],
    correctIndex: 1,
    explanation: "Nabitý kondenzátor v obvode jednosmerného prúdu neprepúšťa prúd - správa sa ako rozpojený obvod."
  },
  {
    id: 387,
    topic: "kondenzator",
    question: "R = 10 kΩ, C = 100 μF. Aká je časová konštanta?",
    options: ["0,1 s", "1 s", "10 s", "0,01 s"],
    correctIndex: 1,
    explanation: "τ = R * C = 10 000 * 100 * 10⁻⁶ = 1 s."
  },
  {
    id: 388,
    topic: "kondenzator",
    question: "Fóliový kondenzátor sa vyznačuje:",
    options: ["Veľkou kapacitou a polaritou", "Dobrou stabilitou a presnosťou", "Použitím len v jednosmerných obvodoch", "Najväčšou kapacitou spomedzi všetkých typov"],
    correctIndex: 1,
    explanation: "Fóliové kondenzátory majú dobrú stabilitou, presnosť a nízke straty. Sú nepolarizované."
  },
  {
    id: 389,
    topic: "kondenzator",
    question: "Kapacita doskového kondenzátora závisí od:",
    options: ["Napätia na doskách a prúdu v obvode", "Plochy dosiek, vzdialenosti a permitivity dielektrika", "Prúdu cez kondenzátor a frekvencie striedavého prúdu", "Teploty okolia a vlhkosti prostredia kondenzátora"],
    correctIndex: 1,
    explanation: "C = ε₀ * εr * S / d, kde S je plocha dosiek, d je vzdialenosť medzi nimi a εr je relatívna permitivita dielektrika."
  },
  {
    id: 390,
    topic: "kondenzator",
    question: "Ak zväčšíme vzdialenosť medzi doskami kondenzátora, kapacita:",
    options: ["Sa zvýši", "Sa zníži", "Sa nezmení", "Závisí od napätia"],
    correctIndex: 1,
    explanation: "C = ε₀ * εr * S / d. Kapacita je nepriamo úmerná vzdialenosti d medzi doskami, preto sa pri zväčšení d zníži."
  },
  {
    id: 391,
    topic: "kondenzator",
    question: "Superkondenzátor (EDLC) sa vyznačuje:",
    options: ["Malou kapacitou a veľmi vysokým menovitým napätím", "Veľmi veľkou kapacitou (jednotky až tisíce faradov)", "Len vysokofrekvenčným použitím v rezonančných obvodoch", "Nemožnosťou opakovaného nabíjania a vybíjania"],
    correctIndex: 1,
    explanation: "Superkondenzátory (EDLC) dosahujú kapacitu jednotky až tisíce faradov, ale s nízkym menovitým napätím (2,5-2,7 V)."
  },
  {
    id: 392,
    topic: "kondenzator",
    question: "Kondenzátor 47 μF a 100 μF sú zapojené sériovo. Celková kapacita je približne:",
    options: ["147 μF", "31,97 μF", "47 μF", "53 μF"],
    correctIndex: 1,
    explanation: "1/C = 1/47 + 1/100 = (100 + 47)/(47*100) = 147/4700, teda C = 4700/147 ≈ 31,97 μF."
  },
  {
    id: 393,
    topic: "kondenzator",
    question: "Ako sa kondenzátor správa v striedavom obvode?",
    options: ["Ako skrat s nulovým odporom", "Ako rozpojenie bez priepustnosti", "Prepúšťa striedavý prúd", "Mení frekvenciu signálu"],
    correctIndex: 2,
    explanation: "Kondenzátor prepúšťa striedavý prúd (s určitou reaktanciou XC = 1/(2πfC)), zatiaľ čo jednosmerný prúd blokuje."
  },
  {
    id: 394,
    topic: "kondenzator",
    question: "Tantalový kondenzátor oproti elektrolytickému má:",
    options: ["Väčšiu kapacitu pri rovnakých rozmeroch", "Menšie rozmery pri rovnakej kapacite a lepšiu stabilitu", "Nižšiu cenu pri rovnakých parametroch", "Väčšie rozmery ale vyššiu spoľahlivosť"],
    correctIndex: 1,
    explanation: "Tantalové kondenzátory sú menšie, stabilnejšie a spoľahlivejšie ako bežné elektrolytické, ale drahšie."
  },

  // ─── TROJFÁZOVÁ SÚSTAVA (395–413) ─────────────────────────────────────────
  {
    id: 395,
    topic: "trojfaz",
    question: "O koľko stupňov sú posunuté jednotlivé fázy v trojfázovej sústave?",
    options: ["90°", "180°", "120°", "60°"],
    correctIndex: 2,
    explanation: "V trojfázovej sústave sú tri fázy navzájom posunuté o 120° (tretina periódy)."
  },
  {
    id: 396,
    topic: "trojfaz",
    question: "Aké je fázové napätie v slovenskej rozvodnej sieti?",
    options: ["400 V", "230 V", "110 V", "325 V"],
    correctIndex: 1,
    explanation: "Fázové napätie (medzi fázou a nulovým vodičom) je 230 V. Združené napätie (medzi dvoma fázami) je 400 V."
  },
  {
    id: 397,
    topic: "trojfaz",
    question: "Aký je vzťah medzi združeným a fázovým napätím?",
    options: ["Uz = Uf", "Uz = √3 * Uf", "Uz = 2 * Uf", "Uz = Uf / √3"],
    correctIndex: 1,
    explanation: "Združené napätie Uz = √3 * Uf ≈ 1,732 * 230 ≈ 400 V."
  },
  {
    id: 398,
    topic: "trojfaz",
    question: "V zapojení do hviezdy (Y) platí pre prúdy:",
    options: ["Fázový prúd = združený prúd", "Fázový prúd = √3 * združený prúd", "Združený prúd = √3 * fázový prúd", "Prúdy sú nezávislé"],
    correctIndex: 0,
    explanation: "V zapojení Y tečie rovnaký prúd cez fázu aj vodič: If = Iz (fázový prúd sa rovná združenému)."
  },
  {
    id: 399,
    topic: "trojfaz",
    question: "V zapojení do trojuholníka (Δ) platí pre napätia:",
    options: ["Uf = √3 * Uz", "Uf = Uz", "Uf = Uz / √3", "Uf = 2 * Uz"],
    correctIndex: 1,
    explanation: "V zapojení Δ je fázové napätie rovné združenému: Uf = Uz."
  },
  {
    id: 400,
    topic: "trojfaz",
    question: "Výkon symetrickej trojfázovej záťaže sa vypočíta ako:",
    options: ["P = U * I * cos(φ) pre jednu fázu", "P = 3 * Uf * If * cos(φ)", "P = √3 * Uz * Iz * cos(φ)", "Obe odpovede B aj C sú správne"],
    correctIndex: 3,
    explanation: "Výkon trojfázovej záťaže: P = 3 * Uf * If * cos(φ) = √3 * Uz * Iz * cos(φ). Oba vzorce dávajú rovnaký výsledok."
  },
  {
    id: 401,
    topic: "trojfaz",
    question: "Na čo slúži nulový (neutrálny) vodič?",
    options: ["Na prenos činného výkonu do záťaže", "Na uzemnenie elektrickej inštalácie", "Na vyrovnávanie nesymetrie záťaže", "Na ochranu pred bleskom a prepätím"],
    correctIndex: 2,
    explanation: "Nulový vodič slúži na vyrovnávanie nesymetrickej záťaže - zabezpečuje, aby fázové napätie zostalo 230 V aj pri nerovnomernom zaťažení."
  },
  {
    id: 402,
    topic: "trojfaz",
    question: "Pri symetrickej záťaži v zapojení Y nulový vodič:",
    options: ["Vedie maximálny prúd", "Nevedie žiadny prúd", "Vedie trojnásobok fázového prúdu", "Musí byť vždy odpojený"],
    correctIndex: 1,
    explanation: "Pri symetrickej záťaži sa prúdy v nulovom vodiči navzájom vyrušia (súčet troch fázorov posunutých o 120° je nula)."
  },
  {
    id: 403,
    topic: "trojfaz",
    question: "Motor s výkonom 5,5 kW, Uz = 400 V, cos(φ) = 0,85. Aký prúd odoberá?",
    options: ["7,94 A", "9,34 A", "13,75 A", "23,8 A"],
    correctIndex: 1,
    explanation: "P = √3 * Uz * Iz * cos(φ), teda Iz = P/(√3 * Uz * cos(φ)) = 5500/(1,732 * 400 * 0,85) ≈ 9,34 A."
  },
  {
    id: 404,
    topic: "trojfaz",
    question: "Zapojenie do hviezdy (Y) oproti trojuholníku (Δ) rovnakej záťaže:",
    options: ["Má √3-krát väčší prúd", "Má 3-krát menší výkon", "Má rovnaký výkon", "Má √3-krát väčšie napätie na fáze"],
    correctIndex: 1,
    explanation: "Pri prepojení z Δ na Y klesne výkon na tretinu, preto sa rozbie Y-Δ používa na zníženie rozběhového prúdu motorov."
  },
  {
    id: 405,
    topic: "trojfaz",
    question: "Trojfázový motor sa rozbieha prepínaním Y-Δ. Prečo?",
    options: ["Na zvýšenie výkonu pri menovitých otáčkach", "Na zníženie rozběhového prúdu na tretinu", "Na zvýšenie otáčok nad synchronné", "Na zmenu smeru otáčania hriadeľa"],
    correctIndex: 1,
    explanation: "Rozběh Y-Δ: motor sa najprv zapojí do Y (menšie napätie na fáze, menší prúd), po rozbehnutí sa prepne do Δ pre plný výkon."
  },
  {
    id: 406,
    topic: "trojfaz",
    question: "Farby vodičov trojfázovej sústavy v SR sú:",
    options: ["Červená, žltá, modrá + zelená (N) + biela (PE)", "Hnedá, čierna, sivá + modrá (N) + zelenožltá (PE)", "Biela, červená, modrá + čierna (N) + zelená (PE)", "Červená, biela, čierna + zelená (N) + žltá (PE)"],
    correctIndex: 1,
    explanation: "Podľa noriem: L1 = hnedá, L2 = čierna, L3 = sivá, N = modrá, PE = zelenožltá."
  },
  {
    id: 407,
    topic: "trojfaz",
    question: "V zapojení do trojuholníka (Δ) platí pre prúdy:",
    options: ["If = Iz", "Iz = √3 * If", "If = √3 * Iz", "Iz = 3 * If"],
    correctIndex: 1,
    explanation: "V zapojení Δ je združený (vodičový) prúd √3-krát väčší ako fázový: Iz = √3 * If."
  },
  {
    id: 408,
    topic: "trojfaz",
    question: "Čo sa stane pri prerušení nulového vodiča a nesymetrickej záťaži?",
    options: ["Nič sa nezmení a obvod funguje ďalej normálne", "Napätia na fázach sa nevyrovnajú - niektoré stúpnu, iné klesnú", "Všetky napätia klesnú na nulu a obvod sa odpojí", "Prúd sa zvýši na všetkých fázach rovnomerne"],
    correctIndex: 1,
    explanation: "Pri prerušení nulového vodiča a nesymetrickej záťaži vznikne posun nulového bodu - na menej zaťažených fázach napätie stúpne (nebezpečne), na viac zaťažených klesne."
  },
  {
    id: 409,
    topic: "trojfaz",
    question: "Smer otáčania trojfázového motora sa zmení:",
    options: ["Odpojením jednej fázy", "Zámenou dvoch ľubovoľných fáz", "Zámenou všetkých troch fáz", "Zmenou frekvencie"],
    correctIndex: 1,
    explanation: "Na zmenu smeru otáčania trojfázového asynchrónneho motora stačí zameniť dva ľubovoľné fázové vodiče."
  },
  {
    id: 410,
    topic: "trojfaz",
    question: "Trojfázová sústava má oproti jednofázovej výhodu:",
    options: ["Jednoduchšiu inštaláciu a nižšie náklady na kabeláž", "Vyšší prenos výkonu pri menšom priereze vodičov a konštantný okamžitý výkon", "Nižšie napätie a tým bezpečnejšiu prevádzku spotrebičov", "Nepotrebuje transformátor ani ďalšie prístrojové vybavenie"],
    correctIndex: 1,
    explanation: "Trojfázová sústava prenáša viac výkonu pri menšom priereze vodičov a pri symetrickej záťaži má konštantný okamžitý výkon."
  },
  {
    id: 411,
    topic: "trojfaz",
    question: "Združené napätie 400 V zodpovedá fázovému napätiu:",
    options: ["400 V", "230 V", "325 V", "200 V"],
    correctIndex: 1,
    explanation: "Uf = Uz / √3 = 400 / 1,732 ≈ 230 V."
  },
  {
    id: 412,
    topic: "trojfaz",
    question: "Koľko vodičov je potrebných na prenos trojfázovej sústavy s nulovým vodičom?",
    options: ["3", "4", "5", "6"],
    correctIndex: 1,
    explanation: "Na prenos trojfázovej sústavy s nulovým vodičom sú potrebné 4 vodiče: L1, L2, L3 a N. S ochranným vodičom PE je to 5."
  },
  {
    id: 413,
    topic: "trojfaz",
    question: "Zdanlivý výkon trojfázovej sústavy sa meria v:",
    options: ["Wattoch (W)", "Voltampéroch (VA)", "Voltampéroch reaktívnych (VAr)", "Kilowatthodinách (kWh)"],
    correctIndex: 1,
    explanation: "Zdanlivý výkon S sa meria vo voltampéroch (VA). S = √3 * Uz * Iz."
  },

  // ─── DIÓDY (414–432) ──────────────────────────────────────────────────────
  {
    id: 414,
    topic: "diody",
    question: "Čo je PN prechod?",
    options: ["Spoj dvoch kovov s rôznou vodivosťou", "Rozhranie medzi polovodičom typu P a typu N", "Spoj vodiča a izolantu v dióde", "Typ rezistora závislého od napätia"],
    correctIndex: 1,
    explanation: "PN prechod je rozhranie medzi polovodičom P (s dierami) a polovodičom N (s elektrónmi), tvorí základ diódy."
  },
  {
    id: 415,
    topic: "diody",
    question: "Dióda vedie prúd v:",
    options: ["Oboch smeroch rovnako (anóda aj katóda)", "Priepustnom smere (anóda +, katóda -)", "Závernom smere (anóda -, katóda +)", "Žiadnom smere (je to izolant)"],
    correctIndex: 1,
    explanation: "Dióda vedie prúd v priepustnom smere, keď je anóda kladnejšia ako katóda (prahové napätie asi 0,6 V pre Si)."
  },
  {
    id: 416,
    topic: "diody",
    question: "Prahové napätie kremíkovej diódy je približne:",
    options: ["0,2 V", "0,3 V", "0,6-0,7 V", "1,5 V"],
    correctIndex: 2,
    explanation: "Prahové napätie kremíkovej (Si) diódy je približne 0,6-0,7 V. Pre germániovú (Ge) je to asi 0,3 V."
  },
  {
    id: 417,
    topic: "diody",
    question: "Zenerova dióda sa používa na:",
    options: ["Zosilnenie analógového signálu", "Stabilizáciu napätia", "Usmerňovanie striedavého prúdu", "Meranie teploty prostredia"],
    correctIndex: 1,
    explanation: "Zenerova dióda pracuje v závernom smere pri definovanom Zenerovom napätí a používa sa na stabilizáciu napätia."
  },
  {
    id: 418,
    topic: "diody",
    question: "LED dióda vyžaruje svetlo pri:",
    options: ["Závernom smere", "Priepustnom smere", "Oboch smeroch", "Bez pripojenia napätia"],
    correctIndex: 1,
    explanation: "LED (Light Emitting Diode) vyžaruje svetlo pri prechode prúdu v priepustnom smere rekombináciou elektrónov a dier."
  },
  {
    id: 419,
    topic: "diody",
    question: "Jednocestný usmerňovač využíva:",
    options: ["Štyri diódy", "Dve diódy", "Jednu diódu", "Šesť diód"],
    correctIndex: 2,
    explanation: "Jednocestný usmerňovač používa jednu diódu, ktorá prepúšťa len jednu polvlnu. Využíva sa len 50% energie."
  },
  {
    id: 420,
    topic: "diody",
    question: "Mostíkový usmerňovač (Graetzov mostík) obsahuje:",
    options: ["1 diódu", "2 diódy", "4 diódy", "6 diód"],
    correctIndex: 2,
    explanation: "Mostíkový usmerňovač obsahuje 4 diódy zapojené do mostíka. Usmerňuje obe polvlny a nepotrebuje transformátor so stredným vývodom."
  },
  {
    id: 421,
    topic: "diody",
    question: "Fotodioda pracuje v:",
    options: ["Priepustnom smere - prúd závisí od osvetlenia", "Závernom smere - záverný prúd závisí od osvetlenia", "Bez vonkajšieho napätia - generuje napätie", "Striedavom režime - mení polaritu podľa svetla"],
    correctIndex: 1,
    explanation: "Fotodioda pracuje v závernom smere. Dopadajúce svetlo generuje nositeľov náboja a zvyšuje záverný prúd."
  },
  {
    id: 422,
    topic: "diody",
    question: "Vlastný polovodič (intrinsický) je:",
    options: ["Polovodič s prímesami donorov", "Čistý polovodič bez prímesí", "Typ izolantu s nulovou vodivosťou", "Typ vodiča s vysokou vodivosťou"],
    correctIndex: 1,
    explanation: "Vlastný (intrinsický) polovodič je čistý materiál (napr. Si, Ge) bez prímesí. Vodivosť závisí len od teploty."
  },
  {
    id: 423,
    topic: "diody",
    question: "Nevlastný polovodič typu N vzniká dotovaním:",
    options: ["Akceptorovými prímesami (napr. bór)", "Donorovými prímesami (napr. fosfor)", "Bez prímesí (čistý kremík)", "Kovovými prímesami (napr. meď)"],
    correctIndex: 1,
    explanation: "Polovodič N sa vytvára dotovaním 5-mocným prvkom (napr. fosfor, arzén), ktorý dodáva voľné elektróny."
  },
  {
    id: 424,
    topic: "diody",
    question: "Nevlastný polovodič typu P vzniká dotovaním:",
    options: ["Donorovými prímesami (napr. fosfor)", "Akceptorovými prímesami (napr. bór)", "Iným kovom (napr. hliníkom)", "Izolantom (napr. oxidom kremíka)"],
    correctIndex: 1,
    explanation: "Polovodič P sa vytvára dotovaním 3-mocným prvkom (napr. bór, hliník), ktorý vytvára diery (chýbajúce elektróny)."
  },
  {
    id: 425,
    topic: "diody",
    question: "Schottkyho dióda má oproti bežnej kremíkovej dióde:",
    options: ["Vyššie prahové napätie (asi 1,0-1,2 V) a pomalšie spínanie", "Nižšie prahové napätie (asi 0,2-0,3 V) a rýchlejšie spínanie", "Pomalšie spínanie ale vyššiu prúdovú zaťažiteľnosť", "Rovnaké vlastnosti ale väčšie rozmery puzdra"],
    correctIndex: 1,
    explanation: "Schottkyho dióda má PN prechod kov-polovodič, nižšie prahové napätie (0,2-0,3 V) a veľmi rýchle spínanie."
  },
  {
    id: 426,
    topic: "diody",
    question: "V-A charakteristika diódy má tvar:",
    options: ["Lineárna priamka prechádzajúca počiatkom", "Exponenciálna krivka v priepustnom smere", "Parabola symetrická podľa osi napätia", "Kružnica so stredom v počiatku"],
    correctIndex: 1,
    explanation: "V priepustnom smere má dióda exponenciálny priebeh I-U charakteristiky. V závernom smere tečie len malý záverný prúd."
  },
  {
    id: 427,
    topic: "diody",
    question: "Čo sa stane, ak na kremíkovú diódu privedieme záverné napätie väčšie ako prierazné?",
    options: ["Dióda začne normálne viesť prúd", "Dióda sa môže zničiť prierazom", "Nič sa nestane so štruktúrou", "Dióda sa ochladí a odpor klesne"],
    correctIndex: 1,
    explanation: "Pri prekročení prierazného napätia dôjde k lavínovému prierazu - záverný prúd prudko stúpne a dióda sa môže zničiť."
  },
  {
    id: 428,
    topic: "diody",
    question: "Dvojcestný usmerňovač s dvoma diódami potrebuje transformátor:",
    options: ["Bez stredného vývodu", "So stredným vývodom", "Bez sekundárneho vinutia", "S tromi vinutiami"],
    correctIndex: 1,
    explanation: "Dvojcestný usmerňovač s dvoma diódami vyžaduje transformátor so stredným vývodom sekundárneho vinutia."
  },
  {
    id: 429,
    topic: "diody",
    question: "LED dióda potrebuje predradný rezistor, pretože:",
    options: ["Zvyšuje jas LED na maximálnu úroveň", "Obmedzuje prúd na bezpečnú hodnotu", "Zvyšuje napätie na potrebnú úroveň", "Zlepšuje farbu a kvalitu svetla"],
    correctIndex: 1,
    explanation: "Predradný rezistor obmedzuje prúd cez LED na bezpečnú hodnotu. Bez neho by LED mohla byť zničená nadmerným prúdom."
  },
  {
    id: 430,
    topic: "diody",
    question: "Varikap je dióda, ktorej kapacita závisí od:",
    options: ["Teploty okolitého prostredia", "Priloženého záverného napätia", "Prúdu v priepustnom smere", "Frekvencie striedavého signálu"],
    correctIndex: 1,
    explanation: "Varikap (varikapová dióda) mení svoju kapacitu v závislosti od priloženého záverného napätia. Používa sa na elektronické ladenie."
  },
  {
    id: 431,
    topic: "diody",
    question: "Kremík (Si) má koľko valenčných elektrónov?",
    options: ["2", "3", "4", "5"],
    correctIndex: 2,
    explanation: "Kremík má 4 valenčné elektróny. Preto tvorí 4 kovalentné väzby so susednými atómami v kryštálovej mriežke."
  },
  {
    id: 432,
    topic: "diody",
    question: "Aká je funkcia usmerňovača?",
    options: ["Zmena jednosmerného prúdu na striedavý (invertovanie)", "Zmena striedavého prúdu na jednosmerný (pulzujúci)", "Zosilnenie prúdu a napätia v obvode (amplifikácia)", "Zmena frekvencie striedavého signálu (konverzia)"],
    correctIndex: 1,
    explanation: "Usmerňovač premieňa striedavý prúd na jednosmerný (pulzujúci). Na vyhladenie sa používa filtračný kondenzátor."
  },

  // ─── TRANZISTOR (433–451) ─────────────────────────────────────────────────
  {
    id: 433,
    topic: "tranzistor",
    question: "Bipolárny tranzistor NPN má tri vývody:",
    options: ["Anóda, katóda, gate", "Báza, kolektor, emitor", "Source, drain, gate", "Vstup, výstup, zem"],
    correctIndex: 1,
    explanation: "Bipolárny tranzistor (NPN aj PNP) má tri vývody: báza (B), kolektor (C) a emitor (E)."
  },
  {
    id: 434,
    topic: "tranzistor",
    question: "Prúdové zosilnenie bipolárneho tranzistora β (beta) sa vypočíta ako:",
    options: ["β = IB / IC", "β = IC / IB", "β = IC / IE", "β = IE / IB"],
    correctIndex: 1,
    explanation: "Prúdové zosilnenie β = IC / IB, kde IC je kolektorový prúd a IB je bázový prúd."
  },
  {
    id: 435,
    topic: "tranzistor",
    question: "Tranzistor s β = 200 a bázovým prúdom IB = 50 μA. Aký je kolektorový prúd?",
    options: ["10 mA", "4 mA", "100 mA", "0,25 mA"],
    correctIndex: 0,
    explanation: "IC = β * IB = 200 * 50 * 10⁻⁶ = 0,01 A = 10 mA."
  },
  {
    id: 436,
    topic: "tranzistor",
    question: "V akom režime pracuje tranzistor ako spínač v stave 'zapnutý'?",
    options: ["V aktívnom režime", "V odsekaní (cut-off)", "V saturácii (nasýtení)", "V inverznom režime"],
    correctIndex: 2,
    explanation: "V spínacom režime 'zapnutý' je tranzistor v saturácii - oba PN prechody sú v priepustnom smere, UCE je minimálne."
  },
  {
    id: 437,
    topic: "tranzistor",
    question: "MOSFET tranzistor sa ovláda:",
    options: ["Prúdom bázy", "Napätím na gate", "Prúdom kolektora", "Teplotou"],
    correctIndex: 1,
    explanation: "MOSFET (unipolárny tranzistor) sa ovláda napätím na gate (hradle). Gate je izolovaný oxidovou vrstvou, preto neteče vstupný prúd."
  },
  {
    id: 438,
    topic: "tranzistor",
    question: "Tyristor (SCR) má koľko vývodov?",
    options: ["2", "3", "4", "5"],
    correctIndex: 1,
    explanation: "Tyristor má 3 vývody: anóda (A), katóda (K) a riadiaca elektróda (gate, G)."
  },
  {
    id: 439,
    topic: "tranzistor",
    question: "Tyristor sa otvorí (začne viesť) po:",
    options: ["Pripojení záverného napätia na anódu a katódu tyristora", "Privedení prúdového impulzu na gate pri kladnom napätí anóda-katóda", "Odpojení napätia z riadiacej elektródy a anódy tyristora", "Ochladení súčiastky pod kritickú hodnotu teploty"],
    correctIndex: 1,
    explanation: "Tyristor sa otvorí prúdovým impulzom na gate pri kladnom napätí na anóde. Po otvorení zostáva vodivý, aj keď gate signál zmizne."
  },
  {
    id: 440,
    topic: "tranzistor",
    question: "Ako sa vypne tyristor v jednosmernom obvode?",
    options: ["Odpojením gate signálu z riadiacej elektródy", "Znížením prúdu pod pridržiavací prúd alebo odpojením napájania", "Privedením záporného napätia na gate riadiacej elektródy", "Zvýšením prúdu nad menovitú hodnotu anódového obvodu"],
    correctIndex: 1,
    explanation: "Tyristor v DC obvode sa vypne len znížením anódového prúdu pod pridržiavaciu hodnotu (napr. prerušením obvodu)."
  },
  {
    id: 441,
    topic: "tranzistor",
    question: "Triak oproti tyristoru:",
    options: ["Vedie prúd len jedným smerom", "Vedie prúd oboma smermi", "Má len dva vývody", "Má štyri vývody"],
    correctIndex: 1,
    explanation: "Triak vedie prúd oboma smermi (je to akoby dva antiparalelne zapojené tyristory). Používa sa na reguláciu striedavého prúdu."
  },
  {
    id: 442,
    topic: "tranzistor",
    question: "IGBT tranzistor kombinuje výhody:",
    options: ["Diódy (nízke prahové napätie) a rezistora (lineárna charakteristika)", "Bipolárneho tranzistora (vysoký výkon) a MOSFETu (rýchle spínanie napätím)", "Tyristora (vysoké blokovacie napätie) a triaku (obojsmerné spínanie)", "Dvoch bipolárnych tranzistorov (vysoké zosilnenie Darlingtonovho zapojenia)"],
    correctIndex: 1,
    explanation: "IGBT spája výhody: ovládanie napätím (ako MOSFET) a vysokú prúdovú zaťažiteľnosť s nízkym saturačným napätím (ako bipolárny tranzistor)."
  },
  {
    id: 443,
    topic: "tranzistor",
    question: "NPN tranzistor vedie kolektorový prúd, keď:",
    options: ["UBE < 0 (záporné napätie)", "UBE > 0 (cca 0,6 V pre Si)", "UCE = 0 (nulové napätie)", "Všetky napätia sú nulové"],
    correctIndex: 1,
    explanation: "NPN tranzistor sa otvorí, keď napätie UBE presiahne prahové napätie (asi 0,6 V pre kremíkový tranzistor)."
  },
  {
    id: 444,
    topic: "tranzistor",
    question: "FET tranzistor má vývody označené:",
    options: ["Báza, kolektor, emitor", "Source, drain, gate", "Anóda, katóda, gate", "Plus, mínus, riadenie"],
    correctIndex: 1,
    explanation: "FET (Field Effect Transistor) má vývody: source (S), drain (D) a gate (G - hradlo)."
  },
  {
    id: 445,
    topic: "tranzistor",
    question: "V akom režime pracuje tranzistor ako zosilňovač?",
    options: ["V saturácii (nasýtenom režime)", "V odsekaní (uzavretom režime)", "V aktívnom (lineárnom) režime", "V prieraznom (deštrukčnom) režime"],
    correctIndex: 2,
    explanation: "Ako zosilňovač pracuje tranzistor v aktívnom (lineárnom) režime, kde je IC úmerný IB s zosilnením β."
  },
  {
    id: 446,
    topic: "tranzistor",
    question: "Darlingtonovo zapojenie slúži na:",
    options: ["Stabilizáciu výstupného napätia obvodu", "Zvýšenie celkového prúdového zosilnenia", "Usmerňovanie striedavého prúdu na jednosmerný", "Zníženie odporu v kolektorovom obvode"],
    correctIndex: 1,
    explanation: "Darlingtonovo zapojenie spojí dva tranzistory tak, že celkové zosilnenie β = β1 * β2, čím sa dosiahne veľmi vysoké zosilnenie."
  },
  {
    id: 447,
    topic: "tranzistor",
    question: "PNP tranzistor sa od NPN líši tým, že:",
    options: ["Má iné označenie vývodov", "Prúdy a polarity napätí sú opačné", "Má väčšie prúdové zosilnenie", "Nemôže spínať vysoké prúdy"],
    correctIndex: 1,
    explanation: "PNP tranzistor má opačné polarity napätí a smery prúdov oproti NPN. Emitor je kladnejší ako báza."
  },
  {
    id: 448,
    topic: "tranzistor",
    question: "Triak sa bežne používa na:",
    options: ["Zosilnenie analógového signálu v obvode", "Reguláciu jasu osvetlenia (stmievač)", "Usmerňovanie striedavého prúdu na jednosmerný", "Meranie teploty pomocou zmeny odporu"],
    correctIndex: 1,
    explanation: "Triak sa bežne používa v stmievačoch osvetlenia, regulátoroch otáčok a ďalších aplikáciách na reguláciu striedavého prúdu."
  },
  {
    id: 449,
    topic: "tranzistor",
    question: "Emitorový prúd IE sa rovná:",
    options: ["IB - IC", "IC - IB", "IB + IC", "IC / IB"],
    correctIndex: 2,
    explanation: "Podľa 1. Kirchhoffovho zákona: IE = IB + IC. Emitorový prúd je súčtom bázového a kolektorového prúdu."
  },
  {
    id: 450,
    topic: "tranzistor",
    question: "N-kanálový MOSFET sa otvorí pri:",
    options: ["Zápornom napätí UGS menšom ako prahové", "Kladnom napätí UGS väčšom ako prahové", "Nulovom napätí UGS na hradle gate", "Zápornom napätí UDS na draine"],
    correctIndex: 1,
    explanation: "Enhancement N-MOSFET sa otvorí, keď UGS presiahne prahové napätie Uth (typicky 2-4 V)."
  },
  {
    id: 451,
    topic: "tranzistor",
    question: "MOSFET oproti bipolárnemu tranzistoru má výhodu:",
    options: ["Väčšie prúdové zosilnenie a nižšie saturačné napätie", "Veľmi vysoký vstupný odpor (prakticky nulový vstupný prúd)", "Nižšiu cenu a jednoduchšie zapojenie obvodov", "Väčší výkon a vyššiu prúdovú zaťažiteľnosť"],
    correctIndex: 1,
    explanation: "MOSFET má izolovaný gate, preto je vstupný odpor veľmi vysoký (10⁹ - 10¹⁴ Ω) a vstupný prúd prakticky nulový."
  },

  // ─── STABILIZOVANÝ ZDROJ (452–469) ────────────────────────────────────────
  {
    id: 452,
    topic: "zdroj",
    question: "Aká je správna bloková schéma lineárneho stabilizovaného zdroja?",
    options: ["Usmerňovač → trafo → filter → stabilizátor", "Trafo → usmerňovač → filter → stabilizátor", "Filter → trafo → usmerňovač → stabilizátor", "Stabilizátor → trafo → usmerňovač → filter"],
    correctIndex: 1,
    explanation: "Správne poradie: transformátor (znižuje napätie) → usmerňovač (AC→DC) → filter (vyhladenie) → stabilizátor (konštantné napätie)."
  },
  {
    id: 453,
    topic: "zdroj",
    question: "Na čo slúži filtračný kondenzátor za usmerňovačom?",
    options: ["Na zvýšenie výstupného napätia zdroja", "Na vyhladenie pulzujúceho jednosmerného napätia", "Na zníženie prúdu v záťažovom obvode", "Na ochranu pred skratom na výstupe"],
    correctIndex: 1,
    explanation: "Filtračný kondenzátor vyhladzuje pulzujúce napätie z usmerňovača - nabíja sa pri špičkách a vybíja sa medzi nimi."
  },
  {
    id: 454,
    topic: "zdroj",
    question: "Zenerova stabilizácia napätia funguje tak, že Zenerova dióda:",
    options: ["Vedie prúd v priepustnom smere a stabilizuje", "Udržiava konštantné napätie v závernom smere", "Zosilňuje napätie na výstupe stabilizátora", "Usmerňuje prúd zo striedavého na jednosmerný"],
    correctIndex: 1,
    explanation: "Zenerova dióda v závernom smere udržiava na sebe konštantné Zenerovo napätie. Zmeny vstupného napätia sa kompenzujú zmenou prúdu cez Zenerovu diódu."
  },
  {
    id: 455,
    topic: "zdroj",
    question: "Lineárny stabilizátor oproti spínanému má:",
    options: ["Vyššiu účinnosť a menšie tepelné straty", "Nižšie zvlnenie a menší šum na výstupe", "Menšie rozmery a nižšiu hmotnosť", "Nižšiu cenu a jednoduchší návrh"],
    correctIndex: 1,
    explanation: "Lineárny stabilizátor má nižší šum a zvlnenie na výstupe, ale nižšiu účinnosť (prebytočná energia sa mení na teplo)."
  },
  {
    id: 456,
    topic: "zdroj",
    question: "Spínaný (impulzný) zdroj má oproti lineárnemu:",
    options: ["Vyššiu účinnosť (70-95%)", "Nižšiu účinnosť", "Väčšie rozmery", "Väčšie zvlnenie nie je možné filtrovať"],
    correctIndex: 0,
    explanation: "Spínaný zdroj má účinnosť 70-95%, pretože regulačný prvok pracuje v spínacom režime s minimálnymi stratami."
  },
  {
    id: 457,
    topic: "zdroj",
    question: "Zvlnenie výstupného napätia zdroja sa meria ako:",
    options: ["Jednosmerná zložka na výstupe zdroja po filtrácii", "Striedavá zložka superponovaná na jednosmernom napätí", "Maximálne napätie na výstupe zdroja pri špičke", "Priemerné napätie na záťaži za filtračným obvodom"],
    correctIndex: 1,
    explanation: "Zvlnenie (ripple) je nežiaduca striedavá zložka na výstupe zdroja, superponovaná na jednosmernom napätí."
  },
  {
    id: 458,
    topic: "zdroj",
    question: "Integrovaný stabilizátor 7805 poskytuje výstupné napätie:",
    options: ["12 V", "3,3 V", "5 V", "9 V"],
    correctIndex: 2,
    explanation: "Rada 78xx sú kladné lineárne stabilizátory. 7805 = +5 V, 7812 = +12 V, 7809 = +9 V."
  },
  {
    id: 459,
    topic: "zdroj",
    question: "Pre správnu funkciu stabilizátora 7805 musí byť vstupné napätie minimálne:",
    options: ["5 V", "7-8 V", "12 V", "3 V"],
    correctIndex: 1,
    explanation: "Lineárny stabilizátor potrebuje dropout napätie (asi 2-3 V). Pre 7805 s výstupom 5 V musí byť vstup minimálne 7-8 V."
  },
  {
    id: 460,
    topic: "zdroj",
    question: "Čo je dropout napätie stabilizátora?",
    options: ["Výstupné napätie stabilizátora pri menovitom zaťažení obvodu", "Minimálny rozdiel medzi vstupným a výstupným napätím pre správnu reguláciu", "Maximálne vstupné napätie, ktoré stabilizátor znesie bez poškodenia", "Zvlnenie na výstupe stabilizátora spôsobené nedokonalou filtráciou"],
    correctIndex: 1,
    explanation: "Dropout napätie je minimálny rozdiel Uvst - Uvýst, pri ktorom stabilizátor ešte správne reguluje. Pre 78xx je to asi 2-3 V."
  },
  {
    id: 461,
    topic: "zdroj",
    question: "LDO stabilizátor sa od bežného lineárneho líši:",
    options: ["Vyšším dropout napätím (nad 3 V)", "Veľmi nízkym dropout napätím (pod 0,5 V)", "Vyššou účinnosťou ako spínaný zdroj", "Väčšími rozmermi a vyšším príkonom"],
    correctIndex: 1,
    explanation: "LDO (Low Dropout) stabilizátor má veľmi nízke dropout napätie (typicky 0,1-0,5 V), preto pracuje aj s malým rozdielom vstup-výstup."
  },
  {
    id: 462,
    topic: "zdroj",
    question: "Ochrana proti skratu v zdroji sa realizuje pomocou:",
    options: ["Veľkého filtračného kondenzátora", "Prúdového obmedzovača alebo poistky", "Väčšieho výkonového transformátora", "Ďalšieho stabilizátora v kaskáde"],
    correctIndex: 1,
    explanation: "Ochrana proti skratu sa realizuje prúdovým obmedzovačom (electronic current limiting) alebo tavnou poistkou."
  },
  {
    id: 463,
    topic: "zdroj",
    question: "Stabilizátor 7905 poskytuje výstupné napätie:",
    options: ["+5 V", "-5 V", "+9 V", "-9 V"],
    correctIndex: 1,
    explanation: "Rada 79xx sú záporné lineárne stabilizátory. 7905 = -5 V, 7912 = -12 V."
  },
  {
    id: 464,
    topic: "zdroj",
    question: "Väčší filtračný kondenzátor spôsobí:",
    options: ["Väčšie zvlnenie", "Menšie zvlnenie na výstupe", "Vyššie výstupné napätie", "Nižšie výstupné napätie"],
    correctIndex: 1,
    explanation: "Väčšia kapacita filtračného kondenzátora lepšie vyhladzuje pulzy z usmerňovača, čím sa zníži zvlnenie."
  },
  {
    id: 465,
    topic: "zdroj",
    question: "Na vstup a výstup integrovaného stabilizátora sa pripájajú malé kondenzátory (100 nF). Prečo?",
    options: ["Na zvýšenie výstupného napätia stabilizátora o niekoľko voltov", "Na potlačenie vysokofrekvenčného šumu a zabránenie osciláciám", "Na meranie prúdu pretekajúceho stabilizátorom na výstupe", "Na ochranu proti prepólovaniu vstupného napätia stabilizátora"],
    correctIndex: 1,
    explanation: "Keramické kondenzátory (100 nF) na vstupe a výstupe potláčajú vysokofrekvenčný šum a zabraňujú nežiaducim osciláciám stabilizátora."
  },
  {
    id: 466,
    topic: "zdroj",
    question: "Účinnosť lineárneho stabilizátora s Uvst = 12 V a Uvýst = 5 V je približne:",
    options: ["95%", "42%", "70%", "85%"],
    correctIndex: 1,
    explanation: "Účinnosť lineárneho stabilizátora η ≈ Uvýst/Uvst = 5/12 ≈ 0,42 = 42%. Zvyšok (58%) sa mení na teplo."
  },
  {
    id: 467,
    topic: "zdroj",
    question: "Spínaný zdroj pracuje na princípe:",
    options: ["Lineárnej regulácie napätia tranzistorom", "Rýchleho spínania s reguláciou striedy (PWM)", "Zenerovej stabilizácie záverným napätím", "Odporovej regulácie predradným rezistorom"],
    correctIndex: 1,
    explanation: "Spínaný zdroj reguluje výstupné napätie zmenou striedy (duty cycle) vysokofrekvenčného spínania (PWM - pulzná šírková modulácia)."
  },
  {
    id: 468,
    topic: "zdroj",
    question: "Predradný rezistor Zenerovej stabilizácie slúži na:",
    options: ["Zvýšenie výstupného napätia stabilizátora", "Obmedzenie prúdu a absorpciu rozdielu napätí", "Filtráciu šumu na výstupe stabilizátora", "Meranie prúdu pretekajúceho obvodom"],
    correctIndex: 1,
    explanation: "Predradný rezistor obmedzuje prúd cez Zenerovu diódu a absorbuje rozdiel medzi vstupným a Zenerovým napätím."
  },
  {
    id: 469,
    topic: "zdroj",
    question: "Zenerova dióda s Uz = 5,1 V a predradným R = 470 Ω je napájaná napätím 12 V. Aký prúd tečie rezistorom?",
    options: ["14,7 mA", "25,5 mA", "10,9 mA", "5,1 mA"],
    correctIndex: 0,
    explanation: "IR = (Uvst - Uz) / R = (12 - 5,1) / 470 = 6,9 / 470 ≈ 0,01468 A ≈ 14,7 mA."
  }
];
