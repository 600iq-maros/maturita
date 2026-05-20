export type Question = {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Topic = {
  id: string;
  name: string;
  icon: string;
};

export const topicsSlovencina: Topic[] = [
  { id: "sj-uvaha", name: "Úvaha", icon: "💭" },
  { id: "sj-literarne-obdobia", name: "Literárne obdobia", icon: "📜" },
  { id: "sj-opisny-postup", name: "Opisný slohový postup", icon: "✏️" },
  { id: "sj-lexikologia", name: "Lexikológia a lexikografia", icon: "📖" },
  { id: "sj-indoeuropske", name: "Indoeurópske jazyky a vývin slovenčiny", icon: "🌍" },
  { id: "sj-slohove-postupy", name: "Slohové postupy", icon: "📝" },
  { id: "sj-shakespeare", name: "Shakespeare a renesančná literatúra", icon: "🎭" },
  { id: "sj-slovotvorne", name: "Slovotvorné postupy", icon: "🔤" },
  { id: "sj-romantizmus", name: "Slovenský a európsky romantizmus", icon: "🌹" },
  { id: "sj-modalnost", name: "Modálnosť a delenie viet", icon: "❓" },
  { id: "sj-funkcne-styly", name: "Funkčné jazykové štýly", icon: "🗂️" },
  { id: "sj-realizmus", name: "Slovenský a svetový realizmus", icon: "🏘️" },
  { id: "sj-slovne-druhy", name: "Slovné druhy a gramatické kategórie", icon: "🔡" },
  { id: "sj-vetne-cleny", name: "Vetné členy", icon: "🧩" },
  { id: "sj-zemianstvo", name: "Zemianstvo v literatúre", icon: "🏰" },
  { id: "sj-medzivojnova", name: "Medzivojnová literatúra", icon: "📰" },
  { id: "sj-lyrizovana", name: "Lyrizovaná próza a naturizmus", icon: "🌿" },
  { id: "sj-po1945", name: "Slovenská literatúra po 1945", icon: "🕊️" },
  { id: "sj-starovek", name: "Staroveká literatúra", icon: "🏛️" },
  { id: "sj-stredovek", name: "Stredoveká literatúra", icon: "⚔️" },
  { id: "sj-humanizmus", name: "Humanizmus a renesancia", icon: "🎨" },
  { id: "sj-klasicizmus", name: "Klasicizmus", icon: "🏛️" },
  { id: "sj-romantizmus-eur", name: "Európsky romantizmus", icon: "🌙" },
  { id: "sj-romantizmus-sk", name: "Slovenský romantizmus", icon: "🇸🇰" },
  { id: "sj-realizmus-svet", name: "Svetový realizmus", icon: "🌍" },
  { id: "sj-dedinský-realizmus", name: "Dedinský realizmus", icon: "🏡" },
  { id: "sj-hviezdoslav", name: "Hviezdoslav", icon: "⭐" },
  { id: "sj-drama", name: "Dráma", icon: "🎭" },
  { id: "sj-lit-moderna", name: "Literárna moderna", icon: "💫" },
  { id: "sj-1sv-vojna", name: "Prvá svetová vojna v literatúre", icon: "⚔️" },
  { id: "sj-medzivojnova-poezia", name: "Medzivojnová poézia", icon: "✍️" },
  { id: "sj-medzivojnova-proza", name: "Medzivojnová próza", icon: "📕" },
  { id: "sj-poezia-po1945", name: "Poézia po 1945", icon: "🖊️" },
  { id: "sj-postmoderna", name: "Postmoderna", icon: "🔀" },
  { id: "sj-styr", name: "Štylistika", icon: "🎯" },
  { id: "sj-narecja", name: "Nárečia", icon: "🗣️" },
  { id: "sj-pravopis", name: "Pravopis", icon: "📝" },
  { id: "sj-svet-po1945", name: "Svetová literatúra po 1945", icon: "🌐" },
  { id: "sj-frazeologia", name: "Frazeológia", icon: "💬" },
  { id: "sj-publicisticky", name: "Publicistický štýl", icon: "📰" },
  { id: "sj-naucny", name: "Náučný štýl", icon: "🔬" },
  { id: "sj-polovetne", name: "Polovetné konštrukcie", icon: "🔗" },
  { id: "sj-rozdiely-cj", name: "Rozdiely slovenčina–čeština", icon: "🇨🇿" },
];

export const questionsSlovencina: Question[] = [
  // ─── ÚVAHA ───────────────────────────────────────────────────────────────
  {
    id: 1000,
    topic: "sj-uvaha",
    question: "Úvaha patrí k útvaru:",
    options: [
      "Rozprávacieho slohového postupu",
      "Opisného slohového postupu",
      "Výkladového slohového postupu",
      "Informačného slohového postupu",
    ],
    correctIndex: 2,
    explanation:
      "Úvaha je útvarom výkladového slohového postupu – autor v nej analyzuje, hodnotí a uvažuje o určitej téme.",
  },
  {
    id: 1001,
    topic: "sj-uvaha",
    question: "Čo je pre úvahu typické?",
    options: [
      "Chronologické rozprávanie príbehu",
      "Osobný postoj autora, subjektívne hodnotenie a úsudky",
      "Objektívne opisovanie predmetu bez emócií",
      "Presné faktické informácie bez osobného názoru",
    ],
    correctIndex: 1,
    explanation:
      "Úvaha je subjektívna – autor v nej vyjadruje vlastný pohľad, hodnotí a zaujíma stanovisko k danej téme.",
  },
  {
    id: 1002,
    topic: "sj-uvaha",
    question: "Aká je štruktúra klasickej úvahy?",
    options: [
      "Exposícia – kolízia – kríza – peripetia – rozuzlenie",
      "Titulok – perex – jadro – záver",
      "Úvod (nastolenie témy) – jadro (rozvíjanie myšlienky) – záver (zhodnotenie)",
      "Opis miesta – opis osoby – opis deja",
    ],
    correctIndex: 2,
    explanation:
      "Úvaha má trojdielnu stavbu: úvod, v ktorom autor nastoľuje tému; jadro, kde rozvíja myšlienky a argumentuje; záver, kde hodnotí a uzatvára úvahu.",
  },
  {
    id: 1003,
    topic: "sj-uvaha",
    question: "Úvaha v umeleckom štýle sa vyznačuje:",
    options: [
      "Strohým odborným jazykom a termínmi",
      "Obrazným jazykom, lyrickými prvkami a osobným tónom",
      "Súpisom faktov bez emocionálneho zafarbenia",
      "Používaním administratívnych formulácií",
    ],
    correctIndex: 1,
    explanation:
      "Umelecká úvaha využíva bohatý obrazný jazyk, metafory, prirovnania a lyrické prvky; dominuje osobný tón autora.",
  },
  {
    id: 1004,
    topic: "sj-uvaha",
    question: "Publicistická úvaha sa líši od odbornej tým, že:",
    options: [
      "Obsahuje vedecké výsledky a dôkazy",
      "Je určená širokej verejnosti a používa zrozumiteľný, živý jazyk",
      "Vyhýba sa osobnému stanovisku autora",
      "Zaoberá sa len literárnymi témami",
    ],
    correctIndex: 1,
    explanation:
      "Publicistická úvaha oslovuje širokú verejnosť, je zrozumiteľná a aktuálna; autor zaujíma jasné stanovisko k spoločensky relevantnej téme.",
  },
  {
    id: 1005,
    topic: "sj-uvaha",
    question: "Ktorý z nasledujúcich textov je príkladom úvahy?",
    options: [
      "Návod na použitie lieku",
      "Recept na koláč",
      "Esej o zmysle priateľstva v modernej dobe",
      "Správa o dopravnej nehode",
    ],
    correctIndex: 2,
    explanation:
      "Esej o zmysle priateľstva je typickým príkladom úvahy – autor premýšľa, hodnotí a zaujíma postoj k abstraktnej téme.",
  },
  {
    id: 1006,
    topic: "sj-uvaha",
    question: "Odborná úvaha sa od bežnej líši tým, že:",
    options: [
      "Obsahuje dlhé opisné pasáže krajiny",
      "Pracuje s odbornými termínmi a vedeckými argumentmi, je určená odborníkom",
      "Je písaná výlučne veršovanou formou",
      "Neobsahuje záver",
    ],
    correctIndex: 1,
    explanation:
      "Odborná úvaha sa opiera o vedecké poznatky, odborné termíny a logické argumenty; je určená vzdelanému publiku z danej oblasti.",
  },
  {
    id: 1007,
    topic: "sj-uvaha",
    question: "Čo odlišuje úvahu od výkladu?",
    options: [
      "Výklad je kratší ako úvaha",
      "Úvaha obsahuje subjektívne hodnotenie a osobný postoj; výklad je objektívny a vysvetľujúci",
      "Výklad sa vždy píše vo veršoch",
      "Úvaha nemá záver",
    ],
    correctIndex: 1,
    explanation:
      "Výklad objektívne vysvetľuje javy a fakty, kým úvaha hodnotí, uvažuje a vyjadruje osobný postoj – je teda subjektívnejšia.",
  },
  {
    id: 1008,
    topic: "sj-uvaha",
    question: "Esej je forma úvahy, ktorá sa vyznačuje:",
    options: [
      "Prísnou vedeckou štruktúrou a citáciami",
      "Voľnou formou, osobným štýlom a kombinovaním myšlienok z rôznych oblastí",
      "Len emocionálnym vyjadrením bez argumentov",
      "Opisom konkrétnych udalostí s dátumami",
    ],
    correctIndex: 1,
    explanation:
      "Esej má voľnú formu, autor v nej kombinuje rôzne myšlienky, je osobná a štýlovo propracovaná; nevyžaduje strohú vedeckú štruktúru.",
  },
  {
    id: 1009,
    topic: "sj-uvaha",
    question: "Ktorý jazykový prostriedok je pre úvahu najmenej typický?",
    options: [
      "Rečnícka otázka",
      "Zoznam čísiel a štatistík bez komentára",
      "Prirovnanie a metafora",
      "Oslovovanie čitateľa",
    ],
    correctIndex: 1,
    explanation:
      "Holý zoznam čísiel a štatistík bez komentára je typický skôr pre informatívne žánre; úvaha naopak komentuje, hodnotí a argumentuje.",
  },

  // ─── LITERÁRNE OBDOBIA ───────────────────────────────────────────────────
  {
    id: 1010,
    topic: "sj-literarne-obdobia",
    question: "V akom poradí nasledujú literárne obdobia od najstaršieho?",
    options: [
      "Romantizmus – Realizmus – Barok – Klasicizmus",
      "Starovek – Stredovek – Humanizmus a renesancia – Barok – Klasicizmus – Romantizmus – Realizmus",
      "Klasicizmus – Barok – Stredovek – Romantizmus",
      "Realizmus – Romantizmus – Klasicizmus – Stredovek",
    ],
    correctIndex: 1,
    explanation:
      "Chronologické poradie: Starovek → Stredovek → Humanizmus a renesancia → Barok → Klasicizmus → Preromantizmus → Romantizmus → Realizmus → Literárna moderna → Medzivojnová → Súčasná.",
  },
  {
    id: 1011,
    topic: "sj-literarne-obdobia",
    question: "Ktoré literárne obdobie ovplyvnil objav kníhtlače (1450) a záujem o antiku?",
    options: ["Barok", "Stredovek", "Humanizmus a renesancia", "Klasicizmus"],
    correctIndex: 2,
    explanation:
      "Humanizmus a renesancia (15.–16. stor.) sa rozvinuli vďaka vynálezu kníhtlače a obnoveného záujmu o antické vzory; stred záujmu sa presúval na človeka.",
  },
  {
    id: 1012,
    topic: "sj-literarne-obdobia",
    question: "Čo je charakteristické pre barokovú literatúru?",
    options: [
      "Oslava rozumu a harmónie",
      "Protiklad tela a duše, pesimizmus, honosnosť a náboženský obsah",
      "Záujem o prírodu a prostého človeka",
      "Iracionalizmus, cit a subjektivizmus",
    ],
    correctIndex: 1,
    explanation:
      "Barok (17.–18. stor.) sa vyznačuje kontrastmi (telo vs. duša, krása vs. smrť), honosným štýlom, náboženskou tematikou a pesimistickým pohľadom na svet.",
  },
  {
    id: 1013,
    topic: "sj-literarne-obdobia",
    question: "Klasicizmus sa opiera o vzory:",
    options: ["Stredovekej náboženskej literatúry", "Romantickej poézie", "Antickej gréckej a rímskej literatúry", "Ľudovej slovesnosti"],
    correctIndex: 2,
    explanation:
      "Klasicizmus (17.–18. stor.) nadväzoval na antické vzory, zdôrazňoval rozum, pravidlá a harmóniu; literatúra sa delila na vysoké a nízke žánre.",
  },
  {
    id: 1014,
    topic: "sj-literarne-obdobia",
    question: "Romantizmus ako literárne hnutie vznikol ako reakcia na:",
    options: [
      "Nástup kresťanstva",
      "Osvietenský racionalizmus a priemyselnú revolúciu",
      "Zánik Rímskej ríše",
      "Vynález kníhtlače",
    ],
    correctIndex: 1,
    explanation:
      "Romantizmus (koniec 18. – 1. pol. 19. stor.) protestoval proti osvietenskému racionalizmu, vyzdvihoval cit, individualitu, slobodu a záujem o ľudovú kultúru.",
  },
  {
    id: 1015,
    topic: "sj-literarne-obdobia",
    question: "Realizmus v literatúre sa zameriava na:",
    options: [
      "Fantastické a nadprirodzené prvky",
      "Idealizáciu hrdinov a romantické motívy",
      "Verné zobrazenie skutočnosti, spoločenské problémy a typické postavy",
      "Výlučne náboženskú tematiku",
    ],
    correctIndex: 2,
    explanation:
      "Realizmus (2. pol. 19. stor.) zobrazuje skutočnosť verne, bez idealizácie; zaujíma ho spoločnosť, sociálne problémy a psychológia postáv.",
  },
  {
    id: 1016,
    topic: "sj-literarne-obdobia",
    question: "Literárna moderna (koniec 19. stor.) sa vyznačuje:",
    options: [
      "Návratom k antickým formám",
      "Opisom vidieckeho života bez štylizácie",
      "Dekadenciou, symbolizmom a dôrazom na vnútorný svet jednotlivca",
      "Objektívnym opisom historických udalostí",
    ],
    correctIndex: 2,
    explanation:
      "Literárna moderna reaguje na krízu hodnôt; zahŕňa symbolizmus, dekadentizmus a impresionizmus – dôraz na subjekt, umenie pre umenie.",
  },
  {
    id: 1017,
    topic: "sj-literarne-obdobia",
    question: "Ktoré obdobie nasleduje bezprostredne po romantizme?",
    options: ["Barok", "Klasicizmus", "Realizmus", "Stredovek"],
    correctIndex: 2,
    explanation:
      "Po romantizme nasleduje realizmus (2. pol. 19. stor.), ktorý odmieta idealizáciu a zameriava sa na verné zobrazenie spoločnosti.",
  },
  {
    id: 1018,
    topic: "sj-literarne-obdobia",
    question: "Stredoveká literatúra na Slovensku bola prevažne písaná:",
    options: ["Po slovensky", "V latinčine a cirkevnej slovančine", "V nemčine", "V maďarčine"],
    correctIndex: 1,
    explanation:
      "V stredoveku sa na území Slovenska písalo hlavne v latinčine (cirkevná a vzdelanecká vrstva) a cirkevnej slovančine (náboženská literatúra).",
  },
  {
    id: 1019,
    topic: "sj-literarne-obdobia",
    question: "Preromantizmus sa od romantizmu líši tým, že:",
    options: [
      "Je neskorší a radikálnejší",
      "Je prechodné obdobie, kde sa objavujú romantické prvky, no ešte prevláda racionalistické myslenie",
      "Odmieta ľudovú slovesnosť",
      "Vznikol v stredoveku",
    ],
    correctIndex: 1,
    explanation:
      "Preromantizmus (koniec 18. stor.) je prechodná fáza – záujem o prírodu, city a ľudovú kultúru sa objavuje, no ešte v rámci osvietenského myslenia.",
  },

  // ─── OPISNÝ SLOHOVÝ POSTUP ───────────────────────────────────────────────
  {
    id: 1020,
    topic: "sj-opisny-postup",
    question: "Čo je statický opis?",
    options: [
      "Opis pohybujúceho sa objektu alebo deja",
      "Opis predmetu, osoby alebo miesta v pokoji, bez zachytenia pohybu",
      "Opis historických udalostí v časovom slede",
      "Opis pocitov a nálad autora",
    ],
    correctIndex: 1,
    explanation:
      "Statický opis zachytáva predmet, osobu alebo miesto ako nehybné – opisuje ich vlastnosti, tvar, farbu, veľkosť bez zachytenia zmeny.",
  },
  {
    id: 1021,
    topic: "sj-opisny-postup",
    question: "Dynamický opis zachytáva:",
    options: [
      "Len vonkajší výzor osoby",
      "Zmeny, pohyb a dej – napr. pracovný postup alebo priebeh javu",
      "Pocity a dojmy bez konkrétnych faktov",
      "Iba farby a tvary predmetov",
    ],
    correctIndex: 1,
    explanation:
      "Dynamický opis zachytáva pohyb, zmenu alebo postup (napr. opis výroby, pohybujúcej sa krajiny); kombinuje opisné a rozprávacieho prvky.",
  },
  {
    id: 1022,
    topic: "sj-opisny-postup",
    question: "Objektívny opis sa líši od subjektívneho tým, že:",
    options: [
      "Je kratší",
      "Vyjadruje osobné pocity a dojmy autora",
      "Opisuje fakty bez osobného hodnotenia, presne a vecne",
      "Používa len poetický jazyk",
    ],
    correctIndex: 2,
    explanation:
      "Objektívny opis je nestranný a faktický (napr. odborný opis); subjektívny opis preniká osobným pohľadom, citmi a hodnotením autora.",
  },
  {
    id: 1023,
    topic: "sj-opisny-postup",
    question: "Umelecký opis sa od odborného líši:",
    options: [
      "Tým, že je vždy kratší",
      "Použitím obrazných prostriedkov, emocionálnym zafarbením a individuálnym pohľadom",
      "Absenciou adjektív",
      "Tým, že opisuje len technické predmety",
    ],
    correctIndex: 1,
    explanation:
      "Umelecký opis využíva metafory, prirovnania, personifikácie a má emocionálne zafarbenie; odborný opis je presný, terminologický a neutrálny.",
  },
  {
    id: 1024,
    topic: "sj-opisny-postup",
    question: "Jednoduchý opis je charakteristický:",
    options: [
      "Vedeckými termínmi a citáciami",
      "Jednoduchou slovnou zásobou, stručnosťou a zachytením základných znakov predmetu",
      "Bohatými lyrickými prvkami",
      "Dlhými súvetiami a zložitou syntax",
    ],
    correctIndex: 1,
    explanation:
      "Jednoduchý opis je stručný a používa bežnú slovnú zásobu; nevyžaduje odbornú terminológiu ani umelecké prostriedky.",
  },
  {
    id: 1025,
    topic: "sj-opisny-postup",
    question: "Odborný opis sa typicky nachádza v:",
    options: [
      "Románoch a poviedkach",
      "Náučných textoch, učebniciach, encyklopédiách a odborných článkoch",
      "Básňach a dramatických textoch",
      "Súkromných listoch",
    ],
    correctIndex: 1,
    explanation:
      "Odborný opis je súčasťou náučného štýlu – nachádza sa v učebniciach, encyklopédiách, vedeckých prácach; je presný a terminologický.",
  },
  {
    id: 1026,
    topic: "sj-opisny-postup",
    question: "Charakteristika osoby (portrét) patrí k:",
    options: [
      "Rozprávacieho slohového postupu",
      "Opisného slohového postupu",
      "Výkladového slohového postupu",
      "Informačného slohového postupu",
    ],
    correctIndex: 1,
    explanation:
      "Charakteristika (vnútorná aj vonkajšia) patrí k opisnému slohovému postupu – opisujeme vlastnosti a znaky osoby.",
  },
  {
    id: 1027,
    topic: "sj-opisny-postup",
    question: "Ktorá vetná konštrukcia je pre opis najcharakteristickejšia?",
    options: [
      "Rozkazovacia veta",
      "Opytovacie vety za sebou",
      "Menné prísudky a konštatovacie oznamovacie vety s bohatými prívlastkami",
      "Súvetia s časovými vedľajšími vetami",
    ],
    correctIndex: 2,
    explanation:
      "Opis využíva menné prísudky (je, má, vyzerá) a bohaté prívlastky, ktoré presne charakterizujú opisovaný predmet alebo osobu.",
  },
  {
    id: 1028,
    topic: "sj-opisny-postup",
    question: "Čo je to opis pracovného postupu (návod)?",
    options: [
      "Subjektívny pocitový opis",
      "Dynamický opis zachytávajúci kroky postupnosti, ako niečo urobiť",
      "Umelecký opis krajiny",
      "Statický opis budovy",
    ],
    correctIndex: 1,
    explanation:
      "Opis pracovného postupu (návod, recept) je dynamickým opisom – zachytáva postup krok za krokom; typická je chronologická postupnosť a rozkazovacia forma.",
  },

  // ─── LEXIKOLÓGIA ─────────────────────────────────────────────────────────
  {
    id: 1029,
    topic: "sj-lexikologia",
    question: "Čo skúma lexikológia?",
    options: [
      "Hláskový systém jazyka",
      "Slovnú zásobu jazyka – jej jednotky, štruktúru a vzťahy medzi slovami",
      "Tvorbu viet a súvetí",
      "Historický vývin písma",
    ],
    correctIndex: 1,
    explanation:
      "Lexikológia je jazykovedná disciplína zaoberajúca sa slovnou zásobou (lexikou) jazyka – skúma slová, ich významy a vzájomné vzťahy.",
  },
  {
    id: 1030,
    topic: "sj-lexikologia",
    question: "Aktívna slovná zásoba človeka zahŕňa:",
    options: [
      "Slová, ktoré pozná, ale aktívne nepoužíva",
      "Slová, ktoré pravidelne používa v hovorenej aj písanej komunikácii",
      "Odborné termíny z cudzích jazykov",
      "Slová vyšlé z používania",
    ],
    correctIndex: 1,
    explanation:
      "Aktívna slovná zásoba sú slová, ktoré jednotlivec aktívne používa; pasívna slovná zásoba sú slová, ktoré pozná a rozumie im, ale sám nepoužíva.",
  },
  {
    id: 1031,
    topic: "sj-lexikologia",
    question: "Čo je lexikografia?",
    options: [
      "Veda o dejinách literatúry",
      "Disciplína, ktorá sa zaoberá tvorbou a opisom slovníkov",
      "Veda o tvorbe nových slov",
      "Štúdium nárečí",
    ],
    correctIndex: 1,
    explanation:
      "Lexikografia je praktická disciplína, ktorá sa zaoberá zostavovaním a opisom slovníkov (výkladových, prekladových, frazeologických a iných).",
  },
  {
    id: 1032,
    topic: "sj-lexikologia",
    question: "Výkladový slovník sa od prekladového líši tým, že:",
    options: [
      "Prekladá slová do cudzích jazykov",
      "Vysvetľuje význam slov v tom istom jazyku",
      "Obsahuje len odborné termíny",
      "Je určený len pre žiakov základných škôl",
    ],
    correctIndex: 1,
    explanation:
      "Výkladový slovník (napr. Krátky slovník slovenského jazyka) vysvetľuje význam slov v slovenčine; prekladový slovník prekladá slová do iného jazyka.",
  },
  {
    id: 1033,
    topic: "sj-lexikologia",
    question: "Synonymá sú slová, ktoré:",
    options: [
      "Majú rovnaký pravopis, ale odlišný význam",
      "Majú rovnaký alebo podobný význam, ale odlišnú formu",
      "Stoja vo vzájomnom protikladnom vzťahu",
      "Patria do rôznych jazykov",
    ],
    correctIndex: 1,
    explanation:
      "Synonymá sú slová rovnakého alebo blízkeho významu (napr. domov – príbytok – byt); líšia sa formou alebo štylistickým zafarbením.",
  },
  {
    id: 1034,
    topic: "sj-lexikologia",
    question: "Čo sú antonymá?",
    options: [
      "Slová s rovnakým významom",
      "Slová opačného významu",
      "Slová rovnakej formy s rôznym významom",
      "Slová prevzaté z cudzích jazykov",
    ],
    correctIndex: 1,
    explanation:
      "Antonymá sú slová opačného významu (napr. starý – mladý, láska – nenávisť).",
  },
  {
    id: 1035,
    topic: "sj-lexikologia",
    question: "Čo sú homonymá?",
    options: [
      "Slová rovnakého alebo podobného významu",
      "Slová, ktoré majú rovnakú zvukovú alebo grafickú podobu, ale rozdielny význam",
      "Slová utvorené odvodzovaním",
      "Slová používané len v nárečiach",
    ],
    correctIndex: 1,
    explanation:
      "Homonymá sú slová rovnakej formy, ale rôzneho významu (napr. kosa – nástroj na kosenie / kosa – vrkoč).",
  },
  {
    id: 1036,
    topic: "sj-lexikologia",
    question: "Archaizmy sú:",
    options: [
      "Slová z cudzích jazykov",
      "Zastarané slová, ktoré sa vytlačili z bežného používania, ale sú historicky doložené",
      "Nové slová vzniknuté v posledných rokoch",
      "Odborné termíny z techniky",
    ],
    correctIndex: 1,
    explanation:
      "Archaizmy sú zastarané slová alebo tvary (napr. dievica, meč vo význame moderných ekvivalentov), ktoré sa už bežne nepoužívajú.",
  },
  {
    id: 1037,
    topic: "sj-lexikologia",
    question: "Neologizmy sú:",
    options: [
      "Zastarané výrazy z minulých storočí",
      "Nové slová alebo výrazy vzniknuté v súvislosti s novými javmi a skutočnosťami",
      "Slová prevzaté z latinčiny",
      "Nárečové slová z východného Slovenska",
    ],
    correctIndex: 1,
    explanation:
      "Neologizmy sú nové slová alebo nové významy slov, ktoré vznikajú v súvislosti so spoločenskými, vedeckými alebo technologickými zmenami (napr. selfie, pandémia).",
  },

  // ─── INDOEURÓPSKE JAZYKY ─────────────────────────────────────────────────
  {
    id: 1038,
    topic: "sj-indoeuropske",
    question: "Slovenčina patrí do skupiny:",
    options: [
      "Germánskych jazykov",
      "Románskych jazykov",
      "Slovanských jazykov",
      "Baltských jazykov",
    ],
    correctIndex: 2,
    explanation:
      "Slovenčina je západoslovanský jazyk patria k indoeurópskej jazykovej rodine; patrí do skupiny slovanských jazykov spolu s češtinou, poľštinou, srbčinou a ďalšími.",
  },
  {
    id: 1039,
    topic: "sj-indoeuropske",
    question: "Kto a kedy kodifikoval prvú spisovnú slovenčinu?",
    options: [
      "Ľudovít Štúr v roku 1843",
      "Anton Bernolák v roku 1787",
      "Martin Hattala v roku 1852",
      "Ján Hollý v roku 1820",
    ],
    correctIndex: 1,
    explanation:
      "Anton Bernolák v roku 1787 vytvoril prvú kodifikáciu spisovnej slovenčiny, opierajúcu sa o západ­oslo­ven­ské nárečia (Grammatica Slavica).",
  },
  {
    id: 1040,
    topic: "sj-indoeuropske",
    question: "Ktorý rok je spojený s kodifikáciou Štúrovej slovenčiny?",
    options: ["1787", "1843", "1852", "1918"],
    correctIndex: 1,
    explanation:
      "Ľudovít Štúr kodifikoval novú spisovnú slovenčinu v roku 1843; základom sa stali stredoslovenské nárečia (Nárečja slovenské alebo potreba písaňja v tomto nárečí).",
  },
  {
    id: 1041,
    topic: "sj-indoeuropske",
    question: "Hodžova-Hattalova reforma (1852) upravila Štúrovu slovenčinu hlavne v oblasti:",
    options: [
      "Hláskoslovia – zaviedla ypsilon (y) a ä",
      "Syntaxe – zmenila poradie slov vo vete",
      "Slovotvorby – pridala nové predpony",
      "Frazeológie – zjednotila idiomy",
    ],
    correctIndex: 0,
    explanation:
      "Hodža a Hattala v roku 1852 reformovali Štúrovu slovenčinu: zaviedli písanie y/ý a ä, čo priblížilo slovenčinu k starším slovanským tradíciám (Krátka mluvnica slovenská).",
  },
  {
    id: 1042,
    topic: "sj-indoeuropske",
    question: "Slovanské jazyky sa delia na tri skupiny. Ktorá nie je správna?",
    options: [
      "Západoslovanské (čeština, slovenčina, poľština)",
      "Južnoslovanské (srbčina, chorvátčina, slovinčina, bulharčina)",
      "Východoslovanské (ruština, ukrajinskí, bieloruský)",
      "Severoslovanské (nórčina, švédčina, dánčina)",
    ],
    correctIndex: 3,
    explanation:
      "Severoslovanská skupina neexistuje – nórčina, švédčina a dánčina patria k germánskym jazykom. Slovanské jazyky sa delia na západné, južné a východné.",
  },
  {
    id: 1043,
    topic: "sj-indoeuropske",
    question: "Cyril a Metod prišli na Veľkú Moravu v roku:",
    options: ["787", "863", "1000", "1087"],
    correctIndex: 1,
    explanation:
      "Cyril a Metod prišli na Veľkú Moravu v roku 863 na pozvanie Rastislava; priniesli hlaholiku a staroslovienčinu – prvý slovanský kultúrny jazyk.",
  },
  {
    id: 1044,
    topic: "sj-indoeuropske",
    question: "Indoeurópska jazyková rodina zahŕňa okrem slovanských aj:",
    options: [
      "Fínčinu a maďarčinu",
      "Čínštinu a japončinu",
      "Germánske, románske, baltské, indické jazyky a ďalšie",
      "Arabčinu a hebrejčinu",
    ],
    correctIndex: 2,
    explanation:
      "Indoeurópska rodina je najrozšírenejšia a zahŕňa slovanské, germánske, románske, baltské, indoiránske, grécke, arménske a iné jazyky. Fínčina a maďarčina patria do ugrofínskej rodiny.",
  },
  {
    id: 1045,
    topic: "sj-indoeuropske",
    question: "Bernolákova slovenčina sa opierala o nárečia:",
    options: [
      "Stredoslovenské",
      "Východoslovenské",
      "Západ­oslo­ven­ské (trnavské)",
      "Liptovské",
    ],
    correctIndex: 2,
    explanation:
      "Bernolák vychádzal zo západ­oslo­ven­ských (trnavských) nárečí, čo ho odlišovalo od Štúra, ktorý si vybral stredoslovenské nárečia.",
  },

  // ─── SLOHOVÉ POSTUPY ─────────────────────────────────────────────────────
  {
    id: 1046,
    topic: "sj-slohove-postupy",
    question: "Skratka IVOR označuje štyri slohové postupy. Čo znamená?",
    options: [
      "Inšpiračný – Vizuálny – Opisný – Rozprávací",
      "Informačný – Výkladový – Opisný – Rozprávací",
      "Informatívny – Vetný – Odborný – Rečnícky",
      "Intuitívny – Vedomý – Objektívny – Románový",
    ],
    correctIndex: 1,
    explanation:
      "IVOR je mnemotechnická pomôcka: Informačný, Výkladový, Opisný, Rozprávací slohový postup.",
  },
  {
    id: 1047,
    topic: "sj-slohove-postupy",
    question: "Informačný slohový postup sa uplatňuje v:",
    options: [
      "Rozprávkach a poviedkach",
      "Správach, oznamoch, reklamách, správach a inzerátoch",
      "Odborných esejach a vedeckých článkoch",
      "Románoch a drámach",
    ],
    correctIndex: 1,
    explanation:
      "Informačný postup slúži na stručné podanie faktov – uplatňuje sa v správach, oznamoch, inzerátoch, faktúrach; nehodnotí ani nevysvetľuje.",
  },
  {
    id: 1048,
    topic: "sj-slohove-postupy",
    question: "Výkladový slohový postup sa líši od informačného tým, že:",
    options: [
      "Len vymenúva fakty bez ich vysvetľovania",
      "Vysvetľuje príčiny a súvislosti javov, argumentuje a dokazuje",
      "Opisuje vonkajší vzhľad predmetov",
      "Rozpráva o konkrétnom deji v čase",
    ],
    correctIndex: 1,
    explanation:
      "Výkladový postup nielen informuje, ale aj vysvetľuje, analyzuje a dokazuje – typický pre vedecké, odborné a publicistické texty.",
  },
  {
    id: 1049,
    topic: "sj-slohove-postupy",
    question: "Rozprávací slohový postup je charakteristický:",
    options: [
      "Absenciou deja a časovej línie",
      "Dynamickým podávaním udalostí v časovom slede",
      "Strohým menovaním faktov",
      "Vysvetľovaním vedeckých javov",
    ],
    correctIndex: 1,
    explanation:
      "Rozprávací postup zachytáva dej v jeho časovom a príčinnom slede; je typický pre prózu, správy o udalostiach, denníky.",
  },
  {
    id: 1050,
    topic: "sj-slohove-postupy",
    question: "Ktorý slohový postup dominuje v románe?",
    options: [
      "Informačný",
      "Opisný",
      "Rozprávací (s prvkami opisného)",
      "Výkladový",
    ],
    correctIndex: 2,
    explanation:
      "V románe dominuje rozprávací postup, pretože sa rozpráva príbeh; je doplnený opisnými pasážami (opis prostredia, postáv) a dialógmi.",
  },
  {
    id: 1051,
    topic: "sj-slohove-postupy",
    question: "V ktorom žánri dominuje výkladový slohový postup?",
    options: [
      "Detektívna poviedka",
      "Vedecký článok a odborná prednáška",
      "Rozprávka",
      "Denný záznam",
    ],
    correctIndex: 1,
    explanation:
      "Výkladový postup prevláda v odborných a vedeckých textoch – argumentuje, vysvetľuje a dokazuje tvrdenia.",
  },
  {
    id: 1052,
    topic: "sj-slohove-postupy",
    question: "Ktorý slohový postup sa dominantne uplatňuje v sprievodcovi po meste?",
    options: [
      "Rozprávací",
      "Informačný a opisný",
      "Výkladový",
      "Iba informačný",
    ],
    correctIndex: 1,
    explanation:
      "Sprievodca kombinuje informačný (fakty, čísla, otváracie hodiny) a opisný postup (opis pamiatok a miest).",
  },
  {
    id: 1053,
    topic: "sj-slohove-postupy",
    question: "Životopis (CV) sa radí k:",
    options: [
      "Výkladovému postupu",
      "Rozprávacieho postupu",
      "Informačnému postupu",
      "Opisnému postupu",
    ],
    correctIndex: 2,
    explanation:
      "Životopis uvádza základné fakty – meno, dátum narodenia, vzdelanie, prax; patrí teda k informačnému slohový postup (konkrétne administratívny žáner).",
  },

  // ─── SHAKESPEARE A RENESANCIA ────────────────────────────────────────────
  {
    id: 1054,
    topic: "sj-shakespeare",
    question: "William Shakespeare bol anglický dramatik žijúci v rokoch:",
    options: ["1265–1321", "1452–1519", "1564–1616", "1694–1778"],
    correctIndex: 2,
    explanation:
      "William Shakespeare (1564–1616) bol najvýznamnejší anglický renesančný dramatik a básnik; jeho diela zahŕňajú tragédie, komédie a historické hry.",
  },
  {
    id: 1055,
    topic: "sj-shakespeare",
    question: "Čo je témou Shakespearovej tragédie Hamlet?",
    options: [
      "Milostný príbeh dvoch rodín v Verone",
      "Pomsta dánskeho princa Hamleta za vraždu otca",
      "Žiarlivosť maura Otella",
      "Závist a politická ambícia v Ríme",
    ],
    correctIndex: 1,
    explanation:
      "Hamlet je tragédia o dánskom princovi, ktorý sa pomstí strýkovi Claudiovi za zavraždenie otca; ústredné témy sú pomsta, zrada, existenciálna pochybnosť.",
  },
  {
    id: 1056,
    topic: "sj-shakespeare",
    question: "Rómeo a Júlia patrí k žánru:",
    options: [
      "Historická hra",
      "Komédia",
      "Tragédia",
      "Sonet",
    ],
    correctIndex: 2,
    explanation:
      "Rómeo a Júlia (1597) je tragédia o milencoch z znepriatelených veronských rodín Montague a Capulet; končí smrťou oboch hrdinov.",
  },
  {
    id: 1057,
    topic: "sj-shakespeare",
    question: "Dante Alighieri je autorom diela:",
    options: [
      "Dekameron",
      "Don Quijote",
      "Božská komédia",
      "Rómeo a Júlia",
    ],
    correctIndex: 2,
    explanation:
      "Dante Alighieri (1265–1321) napísal Božskú komédiu (Divina Commedia) – allegorické putovanie cez Peklo, Očistec a Raj; je považovaný za zakladateľa talianskej literatúry.",
  },
  {
    id: 1058,
    topic: "sj-shakespeare",
    question: "Giovanni Boccaccio je autorom diela:",
    options: [
      "Canzoniere",
      "Božská komédia",
      "Dekameron",
      "Hamlet",
    ],
    correctIndex: 2,
    explanation:
      "Giovanni Boccaccio (1313–1375) je autorom Dekamerona – zbierky 100 noviel, ktoré rozprávajú ľudia utekajúci pred morom z Florencie; dielo je symbolom renesančnej radosti zo života.",
  },
  {
    id: 1059,
    topic: "sj-shakespeare",
    question: "Francesco Petrarca je preslávený predovšetkým:",
    options: [
      "Epickými básňami o vojnách",
      "Ľúbostnými sonetmi venovanými Laure (Canzoniere)",
      "Filozofickými drámami",
      "Cestopisnými prózami",
    ],
    correctIndex: 1,
    explanation:
      "Petrarca (1304–1374) je otcom humanizmu; jeho Spevník (Canzoniere) obsahuje sonety venované milovanej Laure – vzor renesančnej ľúbostnej lyriky.",
  },
  {
    id: 1060,
    topic: "sj-shakespeare",
    question: "Miguel de Cervantes napísal:",
    options: [
      "Rómeo a Júlia",
      "Don Quijote de la Mancha",
      "Dekameron",
      "Hamlet",
    ],
    correctIndex: 1,
    explanation:
      "Miguel de Cervantes (1547–1616) je autorom Don Quijota – prvého moderného európskeho románu; paroduje rytierske romány a hovorí o idealizme vs. realite.",
  },
  {
    id: 1061,
    topic: "sj-shakespeare",
    question: "Čo je to sonet?",
    options: [
      "Epická báseň o hrdinoch",
      "Lyrická forma 14 veršov v stanovenom rýmovom a strofickom usporiadaní",
      "Krátka dramatická jednoaktovka",
      "Prozaická miniatura",
    ],
    correctIndex: 1,
    explanation:
      "Sonet je pevná lyrická forma 14 veršov (2 kvartetá + 2 tercetá alebo 3 kvartetá + kuplet); rozvinuli ho Petrarca a Shakespeare.",
  },
  {
    id: 1062,
    topic: "sj-shakespeare",
    question: "Humanizmus v literatúre sa vyznačuje:",
    options: [
      "Dôrazom na náboženský život a záhrobie",
      "Oslavu ľudského rozumu, dôstojnosti a pozemského života; návrat k antickým vzorám",
      "Odmietaním antiky a gréckeho dedičstva",
      "Pesimizmom a pocitom márnosti",
    ],
    correctIndex: 1,
    explanation:
      "Humanizmus (14.–16. stor.) kladie do stredu pozornosti človeka; inšpiruje sa antikou, oslavuje rozum, krásu, vedu a pozemský život.",
  },
  {
    id: 1063,
    topic: "sj-shakespeare",
    question: "Ktorá Shakespearova hra skúma tému moci, zrady a zodpovednosti vodcu?",
    options: [
      "Sen noci svätojánskej",
      "Kupec benátsky",
      "Macbeth",
      "Veselé panie windsorské",
    ],
    correctIndex: 2,
    explanation:
      "Macbeth je tragédia o škótskom šľachticovi, ktorého ctižiadosť a podnet manželky vedú k vražde kráľa a následnej deštrukcii; ústredné témy sú moc, zrada a vina.",
  },

  // ─── SLOVOTVORNÉ POSTUPY ─────────────────────────────────────────────────
  {
    id: 1064,
    topic: "sj-slovotvorne",
    question: "Derivácia (odvodzovanie) je slovotvorný postup, pri ktorom:",
    options: [
      "Spájame dve samostatné slová bez spojovníka",
      "Vytvárame nové slovo pridaním predpony alebo prípony k základovému slovu",
      "Skracujeme dlhé slovné spojenia na jedno slovo",
      "Preberáme slovo z cudzieho jazyka",
    ],
    correctIndex: 1,
    explanation:
      "Derivácia je najproduktívnejší slovotvorný postup v slovenčine – nové slovo vzniká pridaním formantu (predpony/prípony) k slovotvornému základu (napr. les → lesník).",
  },
  {
    id: 1065,
    topic: "sj-slovotvorne",
    question: "Skladanie (kompozícia) spočíva v:",
    options: [
      "Odvodzovaní slova príponou",
      "Spájaní dvoch alebo viacerých slov (základov) do jedného nového slova",
      "Skracovaní slova na skratku",
      "Preberaní cudzieho slova bez zmeny",
    ],
    correctIndex: 1,
    explanation:
      "Skladanie kombinuje dva alebo viac koreňových morfém do jedného slova (napr. čierno + biely → čiernobiely, pero + pero → prstencový... alebo veľryba, diaľnica).",
  },
  {
    id: 1066,
    topic: "sj-slovotvorne",
    question: "Čo je univerbizácia?",
    options: [
      "Rozklad jedného slova na viac slov",
      "Zjednodušenie viacslovného spojenia na jedno slovo",
      "Tvorba nových slov z cudzích jazykov",
      "Prepis skratiek na plné slová",
    ],
    correctIndex: 1,
    explanation:
      "Univerbizácia je postup, pri ktorom sa viacslovné pomenovanie zredukuje na jedno slovo (napr. osobné auto → osobák, materská škola → škôlka).",
  },
  {
    id: 1067,
    topic: "sj-slovotvorne",
    question: "Čo je multiverbizácia?",
    options: [
      "Tvorba skratiek z viacerých slov",
      "Nahradenie jednoslovného výrazu viacslovným spojením",
      "Skladanie dvoch slov do jedného",
      "Odvodzovanie predponami",
    ],
    correctIndex: 1,
    explanation:
      "Multiverbizácia je opak univerbizácie – jedno slovo sa nahrádza opisným viacslovným spojením (napr. skúmať → vykonávať skúmanie; hovoriť → viesť rozhovor).",
  },
  {
    id: 1068,
    topic: "sj-slovotvorne",
    question: "Skracovanie ako slovotvorný postup zahŕňa tvorbu:",
    options: [
      "Nových slov odvodzovaním prípon",
      "Skratiek, skratkových slov a značiek",
      "Zložených slov z dvoch koreňov",
      "Slov preberaním z latinčiny",
    ],
    correctIndex: 1,
    explanation:
      "Skracovanie vytvára skratky (SR, tzv.), skratkové slová (čo vyslovi sa ako slovo: laser, radar) a značky (km, kg).",
  },
  {
    id: 1069,
    topic: "sj-slovotvorne",
    question: "Ktorý z nasledujúcich príkladov ilustruje odvodzovanie predponou?",
    options: [
      "les → lesník",
      "dobrý → dobrovoľník",
      "písať → prepísať",
      "kvet → kvitnutie",
    ],
    correctIndex: 2,
    explanation:
      "Pridanie predpony pre- k slovesnému základu písať → prepísať je typickým príkladom derivácie predponou.",
  },
  {
    id: 1070,
    topic: "sj-slovotvorne",
    question: "Ktorý príklad je skratkové slovo (ako sa číta po slabikách, nie hláskuje)?",
    options: ["SR", "BBC", "laser", "UNESCO"],
    correctIndex: 2,
    explanation:
      "Laser (Light Amplification by Stimulated Emission of Radiation) sa číta ako bežné slovo; je to skratkové slovo. UNESCO je tiež skratkové slovo, ale laser je klasický príklad.",
  },
  {
    id: 1071,
    topic: "sj-slovotvorne",
    question: "Čo je spájanie (hybridizácia/kalkovanie) ako slovotvorný postup?",
    options: [
      "Spájanie dvoch nárečových slov",
      "Preberanie cudzieho výrazu s čiastočným alebo úplným prekladom jeho morfém do slovenčiny",
      "Skracovanie slova vynechávaním hlások",
      "Odvodzovanie príponou -ník",
    ],
    correctIndex: 1,
    explanation:
      "Kalkovanie (spájanie) je tvorba slova doslovným prekladom cudzieho zloženého slova; napr. anglické skyscraper → mrakodrap (mrak + drať sa).",
  },

  // ─── ROMANTIZMUS ─────────────────────────────────────────────────────────
  {
    id: 1072,
    topic: "sj-romantizmus",
    question: "Andrej Sládkovič napísal najdlhšiu lyricko-epickú báseň v slovenskej literatúre – ide o dielo:",
    options: [
      "Mor ho!",
      "Marína",
      "Zakliata panna vo Váhu a divný Janko",
      "Smrť Jánošíkova",
    ],
    correctIndex: 1,
    explanation:
      "Marína (1846) od Andreja Sládkoviča je najdlhšia lyricko-epická báseň v slovenčine; oslavuje lásku k dievčaťu Maríne a lásku k vlasti.",
  },
  {
    id: 1073,
    topic: "sj-romantizmus",
    question: "Sládkovičovo dielo Detvan je:",
    options: [
      "Tragická poviedka o zbojníkovi",
      "Lyricko-epická báseň oslavujúca slovenský ľud, prírodu a národný charakter",
      "Historický román z obdobia Tatárskych nájazdov",
      "Satirická dráma o zemianskej spoločnosti",
    ],
    correctIndex: 1,
    explanation:
      "Detvan (1853) je lyricko-epická skladba, v ktorej Sládkovič oslavuje slovenského detvana Martina ako symbol národnej sily, krásy a charakteru.",
  },
  {
    id: 1074,
    topic: "sj-romantizmus",
    question: "Básni Mor ho! autorom je:",
    options: [
      "Ján Botto",
      "Janko Kráľ",
      "Samo Chalupka",
      "Andrej Sládkovič",
    ],
    correctIndex: 2,
    explanation:
      "Mor ho! (1864) napísal Samo Chalupka – vlastenecká lyricko-epická báseň o slovenských bojovníkoch, ktorí odmietajú poddanstvo rímskemu cisárovi.",
  },
  {
    id: 1075,
    topic: "sj-romantizmus",
    question: "Janko Kráľ bol nazývaný najromantickejším zo štúrovcov kvôli:",
    options: [
      "Pokojnému klasickému štýlu básní",
      "Búrlivosti, vzdoru, individualizmui a revolucionárskemu duchu v jeho tvorbe",
      "Prekladaniu nemeckej literatúry",
      "Tvorbe historických románov",
    ],
    correctIndex: 1,
    explanation:
      "Janko Kráľ sa vyznačoval búrlivým, vzdorovitým duchom; jeho básne (Zakliata panna vo Váhu, Jarná pieseň) odrážajú romantický titanizmus a pocit osamelého rebela.",
  },
  {
    id: 1076,
    topic: "sj-romantizmus",
    question: "Ján Botto napísal dielo Smrť Jánošíkova, ktoré je:",
    options: [
      "Komédií o zemianoch",
      "Lyricko-epickou skladbou o zbojníkovi Jánošíkovi ako národnom symbole",
      "Historickým románom z 18. storočia",
      "Cestopisnou prózou zo Slovenska",
    ],
    correctIndex: 1,
    explanation:
      "Smrť Jánošíkova (1862) od Jána Bottu je lyricko-epická skladba, ktorá stvárňuje zbojníka Jánošíka ako romantického hrdinu a symbol slobody slovenského ľudu.",
  },
  {
    id: 1077,
    topic: "sj-romantizmus",
    question: "Victor Hugo bol predstaviteľom romantizmu vo Francúzsku. Jeho románom je:",
    options: [
      "Vojny a mier",
      "Otec Goriot",
      "Bedári (Les Misérables)",
      "Červený a čierny",
    ],
    correctIndex: 2,
    explanation:
      "Victor Hugo napísal Bedárov (Les Misérables, 1862) – sociálny román o spoločenských nerovnostiach; medzi jeho ďalšie diela patrí Chrbát Notre-Dame de Paris.",
  },
  {
    id: 1078,
    topic: "sj-romantizmus",
    question: "Alexandr Puškin je zakladateľom ruskej romantickej literatúry. Napísal:",
    options: [
      "Vojnu a mier",
      "Eugen Onegin",
      "Zločin a trest",
      "Mŕtve duše",
    ],
    correctIndex: 1,
    explanation:
      "Eugen Onegin (1833) od Puškina je veršovaný román – klasické dielo ruského romantizmu zobrazujúce zbytočného hrdinu; Puškin napísal aj Kapitánovu dcéru.",
  },
  {
    id: 1079,
    topic: "sj-romantizmus",
    question: "Lord Byron bol anglický romantický básnik preslávený predovšetkým:",
    options: [
      "Klasicistickými drámami v duchu antiky",
      "Romantickými básňami s búrlivým hrdinom – byrónsky hrdina (childe Harold)",
      "Realistickými románmi o anglickej spoločnosti",
      "Vedeckými pojednaniami o jazyku",
    ],
    correctIndex: 1,
    explanation:
      "Byron (1788–1824) stvoril typ byrónskeho hrdinu – osamelý, vzdorovitý, tajomný rebel; jeho Childe Haroldova púť je emblematickým dielom európskeho romantizmu.",
  },
  {
    id: 1080,
    topic: "sj-romantizmus",
    question: "Čo charakterizuje romantického hrdinu (titanizmus)?",
    options: [
      "Pokora, podriadenie sa osudu a autorite",
      "Vzdor spoločenským normám, výnimočnosť, osamelý boj s osudom a svetom",
      "Splynutie s kolektívom a plnenie povinností",
      "Racionálny a chladný pohľad na svet",
    ],
    correctIndex: 1,
    explanation:
      "Romantický hrdina je výnimočná individualita, ktorá vzdoruje spoločnosti, osudu a bohom – tzv. titanizmus; je osamelý, nepochopený, niekedy démonický.",
  },

  // ─── MODÁLNOSŤ ───────────────────────────────────────────────────────────
  {
    id: 1081,
    topic: "sj-modalnost",
    question: "Oznamovacia veta slúži na:",
    options: [
      "Vyjadrenie priania alebo rozkazu",
      "Kladenie otázky",
      "Podanie informácie, tvrdenie alebo konštatovanie",
      "Zvolanie a vyjadrenie emócie",
    ],
    correctIndex: 2,
    explanation:
      "Oznamovacia veta (declaratívna) podáva informáciu alebo konštatuje; intonačne klesá a zakončuje sa bodkou.",
  },
  {
    id: 1082,
    topic: "sj-modalnost",
    question: "Opytovacia veta sa delí na:",
    options: [
      "Kratšia a dlhšia",
      "Doplňovaciu (pýta sa na konkrétnu informáciu) a zisťovaciu (pýta sa na pravdivosť tvrdenia)",
      "Priamu a nepriamu",
      "Jednoduchú a súvetie",
    ],
    correctIndex: 1,
    explanation:
      "Doplňovacia otázka sa pýta na konkrétny obsah (Kto prišiel?); zisťovacia overuje, či je niečo pravda (Prišiel Ján?).",
  },
  {
    id: 1083,
    topic: "sj-modalnost",
    question: "Rozkazovacia veta vyjadruje:",
    options: [
      "Konštatovanie faktov",
      "Rozkaz, žiadosť, zákaz alebo výzvu k činnosti",
      "Prianie alebo túžbu",
      "Prekvapenie alebo radosť",
    ],
    correctIndex: 1,
    explanation:
      "Rozkazovacia (imperatívna) veta vyjadruje príkaz, zákaz, žiadosť alebo výzvu; prísudok je v rozkazovacom spôsobe (poď!, nezabudni!, prosím!).",
  },
  {
    id: 1084,
    topic: "sj-modalnost",
    question: "Želacia veta sa od rozkazovacej líši tým, že:",
    options: [
      "Pýta sa na informáciu",
      "Vyjadruje prianie alebo túžbu, nie rozkaz",
      "Konštatuje tvrdenie",
      "Opisuje dej v minulosti",
    ],
    correctIndex: 1,
    explanation:
      "Želacia veta vyjadruje želanie alebo prianie (Keby tak prišiel! Nech sa ti darí!); prísudok je v kondicionáli alebo optative.",
  },
  {
    id: 1085,
    topic: "sj-modalnost",
    question: "Zvolacia veta vyjadruje:",
    options: [
      "Logické vysvetlenie javu",
      "Zvýšenú emóciu – radosť, prekvapenie, obdiv, smútok; zakončuje sa výkričníkom",
      "Rozkaz alebo zákaz",
      "Doplňujúcu otázku",
    ],
    correctIndex: 1,
    explanation:
      "Zvolacia veta je emotívne zafarbená – vyjadruje silný cit; intonačne stúpa a zakončuje sa výkričníkom (Aká krásna krajina! To je zázrak!).",
  },
  {
    id: 1086,
    topic: "sj-modalnost",
    question: "Modálnosť vety sa vzťahuje na:",
    options: [
      "Počet slov vo vete",
      "Postoj hovorcu k obsahu výpovede (istota, možnosť, nutnosť, prianie...)",
      "Poradie vetných členov",
      "Príslušnosť vety k určitému štýlu",
    ],
    correctIndex: 1,
    explanation:
      "Modálnosť vyjadruje vzťah hovoriaceho k obsahu výpovede – či niečo konštatuje ako isté, považuje za možné, žiaduce alebo potrebné.",
  },
  {
    id: 1087,
    topic: "sj-modalnost",
    question: "Veta 'Zajtra pravdepodobne bude pršať.' vyjadruje modalitu:",
    options: [
      "Nutnosti",
      "Rozkazu",
      "Možnosti/pravdepodobnosti",
      "Priania",
    ],
    correctIndex: 2,
    explanation:
      "Slovo 'pravdepodobne' signalizuje modalitu možnosti – hovoriaci nepovažuje obsah za istý, ale za pravdepodobný.",
  },
  {
    id: 1088,
    topic: "sj-modalnost",
    question: "Veta 'Musíš prísť na stretnutie.' vyjadruje modalitu:",
    options: [
      "Priania",
      "Nutnosti/povinnosti",
      "Možnosti",
      "Pochybnosti",
    ],
    correctIndex: 1,
    explanation:
      "Modálne sloveso 'musieť' vyjadruje nutnosť alebo povinnosť – hovoriaci prezentuje dej ako nevyhnutný.",
  },

  // ─── FUNKČNÉ JAZYKOVÉ ŠTÝLY ──────────────────────────────────────────────
  {
    id: 1089,
    topic: "sj-funkcne-styly",
    question: "Skratka HARPUN označuje 6 funkčných štýlov. Ktorý z nasledujúcich patrí medzi nich?",
    options: [
      "Historický štýl",
      "Publicistický štýl",
      "Detektívny štýl",
      "Dramatický štýl",
    ],
    correctIndex: 1,
    explanation:
      "HARPUN: Hovorový, Administratívny, Rečnícky, Publicistický, Umelecký, Náučný. Publicistický štýl patrí medzi šesť funkčných štýlov slovenčiny.",
  },
  {
    id: 1090,
    topic: "sj-funkcne-styly",
    question: "Hovorový štýl sa vyznačuje:",
    options: [
      "Odbornou terminológiou a formálnym prejavom",
      "Neformálnosťou, spontánnosťou, expresívnosťou a dialogickosťou",
      "Prísnou normou a schematickými formuláciami",
      "Umelecky propracovaným jazykom",
    ],
    correctIndex: 1,
    explanation:
      "Hovorový štýl je typický pre každodennú ústnu komunikáciu – je neformálny, spontánny, využíva hovorové slová, skrátené tvary a dialogickú formu.",
  },
  {
    id: 1091,
    topic: "sj-funkcne-styly",
    question: "Administratívny štýl sa uplatňuje v:",
    options: [
      "Umeleckých románoch",
      "Vedeckých monografiách",
      "Úradných dokumentoch, formulároch, žiadostiach a smerniciach",
      "Novinových komentároch",
    ],
    correctIndex: 2,
    explanation:
      "Administratívny štýl je štýl úradného styku – používa sa v zákonoch, smerniciach, zmluvách, žiadostiach; je formálny, schematický a presný.",
  },
  {
    id: 1092,
    topic: "sj-funkcne-styly",
    question: "Publicistický štýl sa zameriava na:",
    options: [
      "Výlučne vedecké publikácie",
      "Masovú komunikáciu, informovanie a ovplyvňovanie verejnosti",
      "Umelecké stvárnenie skutočnosti",
      "Súkromnú korešpondenciu",
    ],
    correctIndex: 1,
    explanation:
      "Publicistický štýl slúži masovej komunikácii (noviny, časopisy, televízia); informuje, komentuje a ovplyvňuje; kombinuje informatívnosť s persuazívnosťou.",
  },
  {
    id: 1093,
    topic: "sj-funkcne-styly",
    question: "Rečnícky štýl je typický pre:",
    options: [
      "Súkromný list priateľovi",
      "Verejný prejav, prednášku, kázanie alebo politický prejav",
      "Technickú príručku",
      "Románové dialógy",
    ],
    correctIndex: 1,
    explanation:
      "Rečnícky štýl sa uplatňuje pri verejných prejavoch – politických, slávnostných, súdnych; má persuazívnu funkciu a pracuje s rétorikou.",
  },
  {
    id: 1094,
    topic: "sj-funkcne-styly",
    question: "Náučný (odborný) štýl sa vyznačuje:",
    options: [
      "Emocionálnosťou a obraznosťou jazyka",
      "Presnosťou, odbornou terminológiou a logickou stavbou textu",
      "Schematickými formuláciami a pečiatkami",
      "Hovorovými výrazmi a skratkami",
    ],
    correctIndex: 1,
    explanation:
      "Náučný štýl patrí do odbornej komunikácie – vyznačuje sa presnosťou, odbornou terminológiou, logickou argumentáciou a systémovosťou.",
  },
  {
    id: 1095,
    topic: "sj-funkcne-styly",
    question: "Umelecký štýl sa odlišuje od ostatných štýlov predovšetkým:",
    options: [
      "Tým, že sa nepoužívajú žiadne jazykové prostriedky",
      "Estetickou funkciou, obraznosťou jazyka, individuálnosťou autora a polyfunkčnosťou",
      "Strohosťou a formálnosťou",
      "Absenciou subjektívneho pohľadu",
    ],
    correctIndex: 1,
    explanation:
      "Umelecký štýl má predovšetkým estetickú funkciu; autor kreatívne pracuje s jazykom, využíva obrazné prostriedky a vyjadruje individuálny pohľad na svet.",
  },
  {
    id: 1096,
    topic: "sj-funkcne-styly",
    question: "Slohový útvar interview patrí do štýlu:",
    options: [
      "Náučného",
      "Administratívneho",
      "Publicistického",
      "Rečníckeho",
    ],
    correctIndex: 2,
    explanation:
      "Interview je publicistický žáner, v ktorom novinár kladie otázky a zachytáva odpovede významnej osoby; typické pre médiá.",
  },
  {
    id: 1097,
    topic: "sj-funkcne-styly",
    question: "Zmluva a zákon patria do štýlu:",
    options: [
      "Umeleckého",
      "Administratívneho",
      "Publicistického",
      "Hovorového",
    ],
    correctIndex: 1,
    explanation:
      "Zmluva, zákon, nariadenie a žiadosť sú typickými útvarmi administratívneho štýlu – formálneho štýlu úradného styku.",
  },

  // ─── REALIZMUS ───────────────────────────────────────────────────────────
  {
    id: 1098,
    topic: "sj-realizmus",
    question: "Martin Kukučín napísal román o živote v Dalmácii:",
    options: [
      "Suchá ratolesť",
      "Dom v stráni",
      "Jozef Mak",
      "Živý bič",
    ],
    correctIndex: 1,
    explanation:
      "Dom v stráni (1904) je Kukučínov román z prostredia dalmátskeho ostrova Brač; zachytáva konflikty medzi dedinským prostredím a modernitou a motív zemianstva.",
  },
  {
    id: 1099,
    topic: "sj-realizmus",
    question: "Jozef Gregor Tajovský je autorom poviedok zo slovenského vidieckeho prostredia. Ktoré dielo mu patrí?",
    options: [
      "Rysavá jalovica",
      "Maco Mlieč",
      "Ťapákovci",
      "Sobáš",
    ],
    correctIndex: 2,
    explanation:
      "Ťapákovci (1914) je Tajovského dráma o ľudskej chamtivosti a rozpadajúcej sa roľníckej rodine; je to jeho najznámejšia divadelná hra.",
  },
  {
    id: 1100,
    topic: "sj-realizmus",
    question: "Božena Slančíková-Timrava sa vo svojej tvorbe zameriavala na:",
    options: [
      "Romantické milostné príbehy šľachty",
      "Zobrazenie malomestského a dedinského sveta s kritikou spoločenských predsudkov",
      "Historické romány z husitského obdobia",
      "Kozmopolitné témy moderného mesta",
    ],
    correctIndex: 1,
    explanation:
      "Timrava sa venovala kritickému zobrazeniu malomestského a dedinského prostredia; kľúčovým motívom je postavenie ženy a spoločenská pokryteckosť (napr. Ťapákovci – spolunápisaná s Tajovským, či Bez radosti).",
  },
  {
    id: 1101,
    topic: "sj-realizmus",
    question: "Pavol Országh Hviezdoslav sa preslávil epickou básňou o rodinnom konflikte zemianstva:",
    options: [
      "Detvan",
      "Ežo Vlkolínsky",
      "Marína",
      "Svätopluk",
    ],
    correctIndex: 1,
    explanation:
      "Ežo Vlkolínsky (1890) je lyricko-epická báseň Hviezdoslava o láske Eža, syna zemianskeho rodu, ku gazdinej dcére Žofke; rieši konflikt triedy a citu.",
  },
  {
    id: 1102,
    topic: "sj-realizmus",
    question: "Honoré de Balzac je autorom cyklu románov:",
    options: [
      "Ľudská komédia",
      "Vojna a mier",
      "Bedári",
      "Červený a čierny",
    ],
    correctIndex: 0,
    explanation:
      "Honoré de Balzac napísal rozsiahly cyklus románov Ľudská komédia (La Comédie humaine) – súhrnné dielo zachytávajúce francúzsku spoločnosť 19. storočia (Otec Goriot, Eugen Grandet).",
  },
  {
    id: 1103,
    topic: "sj-realizmus",
    question: "Fiodor Dostojevskij je autorom psychologického románu:",
    options: [
      "Anna Karenina",
      "Mŕtve duše",
      "Zločin a trest",
      "Eugen Onegin",
    ],
    correctIndex: 2,
    explanation:
      "Zločin a trest (1866) od Dostojevského je psychologický román o Raskoľnikovovi, ktorý spácha vraždu a zápasí s vinou; ústredné témy sú morálka a psychológia.",
  },
  {
    id: 1104,
    topic: "sj-realizmus",
    question: "Lev Nikolajevič Tolstoj napísal epopej o napoleonských vojnách:",
    options: [
      "Vojna a mier",
      "Zločin a trest",
      "Idiot",
      "Bratia Karamazovci",
    ],
    correctIndex: 0,
    explanation:
      "Vojna a mier (1869) je Tolstého epický román zachytávajúci ruskú spoločnosť počas Napoleonových vojen; medzi jeho ďalšie diela patrí Anna Karenina.",
  },
  {
    id: 1105,
    topic: "sj-realizmus",
    question: "Čo je typickým znakom realizmu v literatúre?",
    options: [
      "Idealizovaní hrdinovia bez chýb",
      "Fantastické a rozprávkové prvky",
      "Verné, objektívne zobrazenie skutočnosti so sociálnou kritikou",
      "Výhradne náboženská tematika",
    ],
    correctIndex: 2,
    explanation:
      "Realizmus zobrazuje spoločnosť a jednotlivca verne a kriticky; hrdinovia majú chyby, spoločenské problémy sú analyzované bez romantickej idealizácie.",
  },
  {
    id: 1106,
    topic: "sj-realizmus",
    question: "Kukučínov realistický postup je charakteristický:",
    options: [
      "Abstraktnou symbolikou",
      "Humorným a lyrickým opisom ľudí, prírody a života na dedine",
      "Prevahou monológov nad dejom",
      "Temným, fatalistickým pohľadom na svet",
    ],
    correctIndex: 1,
    explanation:
      "Kukučín je majstrom jemného humoru a lyrického opisu; jeho postavy sú psychologicky presvedčivé, príroda je integrálnou súčasťou príbehu.",
  },

  // ─── SLOVNÉ DRUHY ────────────────────────────────────────────────────────
  {
    id: 1107,
    topic: "sj-slovne-druhy",
    question: "Koľko slovných druhov rozlišuje slovenská gramatika?",
    options: ["8", "9", "10", "12"],
    correctIndex: 2,
    explanation:
      "Slovenská gramatika rozlišuje 10 slovných druhov: podstatné mená, prídavné mená, zámená, číslovky, slovesá, príslovky, predložky, spojky, častice a citoslovcia.",
  },
  {
    id: 1108,
    topic: "sj-slovne-druhy",
    question: "Ktorý slovný druh patrí medzi neplnovýznamové (pomocné) slová?",
    options: [
      "Podstatné meno",
      "Sloveso",
      "Predložka",
      "Prídavné meno",
    ],
    correctIndex: 2,
    explanation:
      "Predložky, spojky a častice sú neplnovýznamové slovné druhy – nemajú samostatný lexikálny význam a plnia gramatickú alebo modálnu funkciu.",
  },
  {
    id: 1109,
    topic: "sj-slovne-druhy",
    question: "Gramatické kategórie substantív (podstatných mien) sú:",
    options: [
      "Čas, spôsob, vid",
      "Rod, číslo, pád",
      "Stupeň, číslo, spôsob",
      "Osoba, číslo, čas",
    ],
    correctIndex: 1,
    explanation:
      "Podstatné mená sa skloňujú podľa rodu (mužský, ženský, stredný), čísla (jednotné, množné) a pádu (7 pádov v slovenčine).",
  },
  {
    id: 1110,
    topic: "sj-slovne-druhy",
    question: "Gramatické kategórie slovesa zahŕňajú:",
    options: [
      "Rod, číslo, pád",
      "Stupeň, číslo, rod",
      "Osobu, číslo, čas, spôsob, vid, rod (slovesný)",
      "Len čas a osobu",
    ],
    correctIndex: 2,
    explanation:
      "Sloveso má kategórie: osoba (1., 2., 3.), číslo (sg., pl.), čas (prítomný, minulý, budúci), spôsob (oznamovací, rozkazovací, podmieňovací), vid (dokonavý/nedokonavý) a slovesný rod (činný/trpný).",
  },
  {
    id: 1111,
    topic: "sj-slovne-druhy",
    question: "Prídavné meno sa stupňuje. Aké sú tri stupne?",
    options: [
      "Základný – stredný – najvyšší",
      "Kladný – záporný – neutrálny",
      "Pozitív – komparatív – superlatív",
      "Prvý – druhý – tretí",
    ],
    correctIndex: 2,
    explanation:
      "Prídavné meno sa stupňuje: pozitív (pekný), komparatív (krajší), superlatív (najkrajší).",
  },
  {
    id: 1112,
    topic: "sj-slovne-druhy",
    question: "Číslovky sa delia na:",
    options: [
      "Radové, množné, hromadné, druhové, neurčité",
      "Kardinálne a ordinálne (základné a radové)",
      "Len základné (jedna, dve...)",
      "Len neurčité (veľa, málo, niekoľko)",
    ],
    correctIndex: 0,
    explanation:
      "Číslovky sa delia na: základné (jeden, dva), radové (prvý, druhý), násobné (jedenkrát), skupinové (obaja), druhové (jednaký) a neurčité (veľa, málo).",
  },
  {
    id: 1113,
    topic: "sj-slovne-druhy",
    question: "Citoslovcia sú:",
    options: [
      "Slová vyjadrujúce city, výzvy a zvuky bez plnohodnotného lexikálneho významu",
      "Slová označujúce vlastnosti predmetov",
      "Slová spájajúce vety v súvetí",
      "Slová vyjadrujúce existenciu alebo stav",
    ],
    correctIndex: 0,
    explanation:
      "Citoslovcia (interjekcie) sú neskloňovateľné slová vyjadrujúce city, vôľu alebo napodobňujúce zvuky (ach, fuj, hup, mňau); nestávajú sa plnohodnotnými vetnými členmi.",
  },
  {
    id: 1114,
    topic: "sj-slovne-druhy",
    question: "Zámeno nahradieva alebo zastupuje:",
    options: [
      "Slovesné tvary",
      "Podstatné mená, prídavné mená alebo číslovky",
      "Predložky a spojky",
      "Len citové výrazy",
    ],
    correctIndex: 1,
    explanation:
      "Zámená zastupujú podstatné mená (on, ona, ja, kto), prídavné mená (môj, taký) alebo číslovky (toľko); delia sa na osobné, privlastňovacie, ukazovacie, opytovacie atď.",
  },
  {
    id: 1115,
    topic: "sj-slovne-druhy",
    question: "Príslovka odpovedá na otázky:",
    options: [
      "Kto? Čo? Koho? Čoho?",
      "Aký? Ktorý? Čí?",
      "Kde? Kedy? Ako? Prečo?",
      "Koľko? Koľkokrát?",
    ],
    correctIndex: 2,
    explanation:
      "Príslovky bližšie určujú sloveso, prídavné meno alebo iné príslovky; odpovedajú na otázky miesta (kde?), času (kedy?), spôsobu (ako?) a príčiny (prečo?).",
  },

  // ─── VETNÉ ČLENY ─────────────────────────────────────────────────────────
  {
    id: 1116,
    topic: "sj-vetne-cleny",
    question: "Podmet (subjekt) vo vete zodpovedá otázke:",
    options: [
      "Koho? Čo?",
      "Kto? Čo? (v 1. páde)",
      "Kde? Kedy?",
      "Aký? Ktorý?",
    ],
    correctIndex: 1,
    explanation:
      "Podmet je základný vetný člen, ktorý pomenúva pôvodcu alebo nositeľa deja; odpovedá na otázku Kto? alebo Čo? v nominatíve (1. pád).",
  },
  {
    id: 1117,
    topic: "sj-vetne-cleny",
    question: "Prísudok (predikát) je vetný člen, ktorý:",
    options: [
      "Bližšie určuje podstatné meno",
      "Vypovedá o podmete – čo robí, čím je, aký je",
      "Vyjadruje okolnosti deja (miesto, čas, spôsob)",
      "Dopĺňa dej smerom k predmetu",
    ],
    correctIndex: 1,
    explanation:
      "Prísudok je druhý zo základných vetných členov; vypovedá o podmete a zvyčajne ho tvorí sloveso (napr. dievčatko spieva) alebo menný prísudok (je šikovné).",
  },
  {
    id: 1118,
    topic: "sj-vetne-cleny",
    question: "Predmet (objekt) rozvíja sloveso a odpovedá na otázky:",
    options: [
      "Kde? Kedy? Ako?",
      "Aký? Ktorý? Čí?",
      "Koho? Čoho? Komu? Čomu? Koho/Čo? Kým? Čím? O kom? O čom?",
      "Kto? Čo?",
    ],
    correctIndex: 2,
    explanation:
      "Predmet je rozvíjací vetný člen viazaný na sloveso; odpovedá na otázky v nepriamych pádoch (2.–7. pád): Číta Koho? Čo? Hovorí O čom? atď.",
  },
  {
    id: 1119,
    topic: "sj-vetne-cleny",
    question: "Príslovkové určenie (adverbiále) vyjadruje:",
    options: [
      "Vlastnosť podstatného mena",
      "Pôvodcu deja",
      "Okolnosti deja – miesto, čas, spôsob, príčinu, podmienku, cieľ",
      "Priradeného prisúdeného pôvodcu",
    ],
    correctIndex: 2,
    explanation:
      "Príslovkové určenie bližšie určuje sloveso tým, že vyjadruje okolnosti – miesto (Kde?), čas (Kedy?), spôsob (Ako?), príčinu (Prečo?), podmienku, cieľ a pod.",
  },
  {
    id: 1120,
    topic: "sj-vetne-cleny",
    question: "Prívlastok (atribút) bližšie určuje:",
    options: [
      "Sloveso",
      "Podstatné meno alebo zámeno",
      "Celú vetu",
      "Príslovku",
    ],
    correctIndex: 1,
    explanation:
      "Prívlastok je rozvíjací člen, ktorý bližšie určuje podstatné meno alebo zámeno; môže byť zhodný (pekný dom) alebo nezhodný (dom pri lese).",
  },
  {
    id: 1121,
    topic: "sj-vetne-cleny",
    question: "Prístavok (apozícia) je osobitný vetný člen, ktorý:",
    options: [
      "Nahrádza prísudok",
      "Stojí vedľa podstatného mena a bližšie ho určuje totožným pomenovaním",
      "Vyjadruje podmienku deja",
      "Spája dve súvetia",
    ],
    correctIndex: 1,
    explanation:
      "Prístavok stojí vedľa iného podstatného mena a dopĺňa ho ďalším pomenovaním tej istej skutočnosti; napr. Bratislava, hlavné mesto Slovenska, leží pri Dunaji.",
  },
  {
    id: 1122,
    topic: "sj-vetne-cleny",
    question: "Veta Pavol číta zaujímavú knihu.' – ktorým vetným členom je slovo zaujímavú'?",
    options: [
      "Predmet",
      "Príslovkové určenie spôsobu",
      "Zhodný prívlastok",
      "Prísudok",
    ],
    correctIndex: 2,
    explanation:
      "Slovo zaujímavú' je zhodný prívlastok k podstatnému menu knihu' – zhoduje sa v rode, čísle a páde (ženský rod, sg., akuzatív).",
  },
  {
    id: 1123,
    topic: "sj-vetne-cleny",
    question: "Menný prísudok (prísudok so sponou) je tvorený:",
    options: [
      "Len plnovýznamovým slovesom",
      "Sponovou slovesom (byť, stať sa, zdať sa) a mennou časťou (podstatné alebo prídavné meno)",
      "Dvoma plnovýznamovými slovesami",
      "Predložkovou väzbou",
    ],
    correctIndex: 1,
    explanation:
      "Menný prísudok pozostáva zo sponového slovesa (byť) a mennej časti (napr. Ján je lekár; Obloha je modrá).",
  },

  // ─── ZEMIANSTVO ──────────────────────────────────────────────────────────
  {
    id: 1124,
    topic: "sj-zemianstvo",
    question: "Ján Kalinčiak napísal satirickú novelu o zemianstve:",
    options: [
      "Suchá ratolesť",
      "Reštavrácia",
      "Dom v stráni",
      "Ežo Vlkolínsky",
    ],
    correctIndex: 1,
    explanation:
      "Reštavrácia (1860) od Jána Kalinčiaka je satirická novela o zemianskych voľbách hlavného župana; kriticky zobrazuje úpadok zemianskej triedy.",
  },
  {
    id: 1125,
    topic: "sj-zemianstvo",
    question: "Svetozár Hurban Vajanský napísal román o chátranie zemianskej rodiny:",
    options: [
      "Reštavrácia",
      "Dom v stráni",
      "Suchá ratolesť",
      "Živý bič",
    ],
    correctIndex: 2,
    explanation:
      "Suchá ratolesť (1884) od S. H. Vajanského je prvý slovenský psychologický román; zobrazuje duševné i morálne chradnutie zemiana Rudolfa Vilána.",
  },
  {
    id: 1126,
    topic: "sj-zemianstvo",
    question: "Hviezdoslav v básni Gábor Vlkolínsky zobrazuje:",
    options: [
      "Hrdého, ale morálne pevného zemiana",
      "Zemiana, ktorý podľahne alkoholu a chátrajúcemu spôsobu života",
      "Zbojníka bojujúceho za slobodu",
      "Lásku chudobného roľníka ku zemianskej dcére",
    ],
    correctIndex: 1,
    explanation:
      "Gábor Vlkolínsky (1882–1893) je Hviezdoslavova lyricko-epická báseň o zemianovi, ktorý sa morálne degraduje, prepadne alkoholu a nakoniec zahynie; je protikladom Eža.",
  },
  {
    id: 1127,
    topic: "sj-zemianstvo",
    question: "V Kalinčiakovej Reštavráciách je hlavnou satirickou témou:",
    options: [
      "Korupcia pri voľbe župana a morálna vyprázdnenosť zemianstva",
      "Láska medzi zemanmi a roľníkmi",
      "Turecké výboje na Slovensku",
      "Jánošíkovské zbojníctvo",
    ],
    correctIndex: 0,
    explanation:
      "Reštavrácia satirizuje voľby (reštauráciu) župana – korumpovanie voličov, opilstvo a pokrytectvo zemianstva; je to kritický pohľad na dekadenciu triedy.",
  },
  {
    id: 1128,
    topic: "sj-zemianstvo",
    question: "Kukučínov román Dom v stráni sa odohráva:",
    options: [
      "Na východnom Slovensku",
      "V Prahe",
      "Na chorvátskom ostrove Brač",
      "V Bratislave",
    ],
    correctIndex: 2,
    explanation:
      "Dom v stráni sa odohráva na dalmatínskom ostrove Brač; hrdinom je Mate Berac, ktorý súperí o dom a ženu – román zachytáva tamojšie spoločenské a rodové vzťahy.",
  },
  {
    id: 1129,
    topic: "sj-zemianstvo",
    question: "Pojem 'zemianstvo' v slovenskom kontexte označuje:",
    options: [
      "Slobodných roľníkov bez pôdy",
      "Šľachtickú vrstvu nižšieho stupňa s nárokmi na výsady, ale bez väčšieho majetku",
      "Kňazstvo a cirkevných hodnostárov",
      "Remeselníkov a obchodníkov v mestách",
    ],
    correctIndex: 1,
    explanation:
      "Zemianstvo bola nižšia šľachta (malejší šľachtici) na Slovensku; mali právo na erb a výsady, ale ich majetok bol skromný; v 19. stor. sa vyznačovalo konzervativizmom a samoľúbosťou.",
  },
  {
    id: 1130,
    topic: "sj-zemianstvo",
    question: "Ežo Vlkolínsky od Hviezdoslava je lyricko-epická báseň o:",
    options: [
      "Zbojníkovi Jánošíkovi",
      "Láske Eža zo zemianskej rodiny k dievčaťu Žofke z roľníckej rodiny",
      "Bitke pri Moháči",
      "Životopise Ľudovíta Štúra",
    ],
    correctIndex: 1,
    explanation:
      "Ežo Vlkolínsky opisuje milostný konflikt medzi triedami: zemania odsudzujú Ežov vzťah s Žofkou, roľníčkou; Hviezdoslav tým kritizuje triedne predsudky.",
  },
  {
    id: 1131,
    topic: "sj-zemianstvo",
    question: "Ktorý slovenský autor napísal poviedky a romány s tematikou zemianskej i roľníckej spoločnosti 19. storočia a je považovaný za zakladateľa modernej slovenskej prózy?",
    options: [
      "Janko Kráľ",
      "Ján Botto",
      "Martin Kukučín",
      "Samo Chalupka",
    ],
    correctIndex: 2,
    explanation:
      "Martin Kukučín je zakladateľom modernej slovenskej realistickej prózy; zobrazuje vidiecke prostredie, zemanstvo i roľníkov s jemnou iróniou a lyrickosťou.",
  },

  // ─── MEDZIVOJNOVÁ LITERATÚRA ─────────────────────────────────────────────
  {
    id: 1132,
    topic: "sj-medzivojnova",
    question: "Emil Boleslav Lukáč je hlavným predstaviteľom smeru:",
    options: [
      "Vitalizmu",
      "Neosymbolizmu",
      "Surrealizmu",
      "Katolíckej moderny",
    ],
    correctIndex: 1,
    explanation:
      "E. B. Lukáč (1900–1979) bol hlavným predstaviteľom neosymbolizmu v medzivojnovej poezii; jeho zbierky (Spoveď, Dunaj a Seina) kombinujú symbolistickú obraznosť s existenciálnymi témami.",
  },
  {
    id: 1133,
    topic: "sj-medzivojnova",
    question: "Ján Smrek bol predstaviteľom smeru:",
    options: [
      "Nadrealizmu",
      "Neosymbolizmu",
      "Vitalizmu",
      "Katolíckej moderny",
    ],
    correctIndex: 2,
    explanation:
      "Ján Smrek (1898–1982) je hlavný predstaviteľ vitalizmu – oslavoval radosť zo života, krásu, lásku a prírodu; zbierka Cválajúce dni.",
  },
  {
    id: 1134,
    topic: "sj-medzivojnova",
    question: "Laco Novomeský reprezentuje v medzivojnovej literatúre:",
    options: [
      "Nábožensky orientovanú poéziu",
      "Sociálnu avantgardu s vplyvom poetizmu a ľavicovej ideológie",
      "Ruralizmus a oslavu vidieka",
      "Historickú epiku",
    ],
    correctIndex: 1,
    explanation:
      "Laco Novomeský (1904–1976) bol ľavicový avantgardný básnik (DAV); jeho poézia má sociálne a revolučné zameranie s vplyvom poetizmu (zbierka Nedeľa).",
  },
  {
    id: 1135,
    topic: "sj-medzivojnova",
    question: "Nadrealizmus (surrealizmus) v slovenskej literatúre reprezentujú:",
    options: [
      "Smrek a Lukáč",
      "Rúfus a Válek",
      "Rudolf Fabry, Vladimír Reisel a Ján Brezina",
      "Hronský a Urban",
    ],
    correctIndex: 2,
    explanation:
      "Slovenský nadrealizmus (30.–40. roky) predstavujú Rudolf Fabry (Uťaté ruky), Vladimír Reisel, Ján Brezina – inšpirovaní francúzskym surrealizmom (Breton).",
  },
  {
    id: 1136,
    topic: "sj-medzivojnova",
    question: "Jozef Cíger Hronský napísal sociálny román o ťažkom živote prostého človeka:",
    options: [
      "Živý bič",
      "Jozef Mak",
      "Sklený vrch",
      "Drak sa vracia",
    ],
    correctIndex: 1,
    explanation:
      "Jozef Mak (1933) od J. C. Hronského je sociálny román; Jozef Mak je symbolom trpiaceho slovenského ľudu – 'človek milión', ktorý nesie všetky krivdy a trápenia.",
  },
  {
    id: 1137,
    topic: "sj-medzivojnova",
    question: "Milo Urban napísal román Živý bič, ktorý zobrazuje:",
    options: [
      "Ľúbostný trojuholník v Bratislave",
      "Osudy slovenskej dediny počas 1. svetovej vojny",
      "Emigráciu Slovákov do Ameriky",
      "Politické intrigy v medzivojnovom parlamente",
    ],
    correctIndex: 1,
    explanation:
      "Živý bič (1927) od Mila Urbana je sociálno-psychologický román o vplyve 1. svetovej vojny na dedinu Ráztoky; zobrazuje ľudské utrpenie, vzdor a kolaboráciu.",
  },
  {
    id: 1138,
    topic: "sj-medzivojnova",
    question: "Katolícka moderna v medzivojnovej literatúre sa vyznačuje:",
    options: [
      "Ateizmom a materializmom",
      "Náboženskou lyrikou s modernistickou formou; spojenie viery a básnickej inovácie",
      "Opisom sociálnych konfliktov",
      "Ľavicovou politickou angažovanosťou",
    ],
    correctIndex: 1,
    explanation:
      "Katolícka moderna (Rudolf Dilong, Pavol Gašparovič Hlbina, Janko Silan) spájala kresťanskú spiritualitu s modernistickými básnickými postupmi.",
  },
  {
    id: 1139,
    topic: "sj-medzivojnova",
    question: "Vitalizmus ako literárny smer oslavuje:",
    options: [
      "Smútok, pesimizmus a rozčarovanosť",
      "Životnú radosť, krásu, erotiku, prírodu a pozitívne emócie",
      "Náboženskú askézu a odriekanie",
      "Triedny boj a revolúciu",
    ],
    correctIndex: 1,
    explanation:
      "Vitalizmus oslavuje elan vital – radosť zo života, krásu ženského tela, prírody a slobody; v slovenskej literatúre ho reprezentuje Ján Smrek.",
  },

  // ─── LYRIZOVANÁ PRÓZA ────────────────────────────────────────────────────
  {
    id: 1140,
    topic: "sj-lyrizovana",
    question: "Lyrizovaná próza (naturizmus) je literárny smer, ktorý sa vyznačuje:",
    options: [
      "Sociálnou kritikou mestskej spoločnosti",
      "Splývaním prózy a poézie; oslavou prírody, ľudu a mytologickými motívmi",
      "Strohým realistickým opisom bez akejkoľvek lyrickosti",
      "Politickým angažovaním a propagandou",
    ],
    correctIndex: 1,
    explanation:
      "Lyrizovaná próza (naturizmus, 30.–40. roky) kombinuje epiku a lyriku; typické sú mýtické prvky, intenzívne zobrazenie prírody, jednoduchý ľud a folklórna atmosféra.",
  },
  {
    id: 1141,
    topic: "sj-lyrizovana",
    question: "Dobroslav Chrobák napísal lyrizovanú prózu:",
    options: [
      "Tri gaštanové kone",
      "Drak sa vracia",
      "Nevesta hôľ",
      "Jozef Mak",
    ],
    correctIndex: 1,
    explanation:
      "Drak sa vracia (1943) od Dobroslava Chrobáka je lyrizovaná novela; Martine Lepiešovi (Drakovi) sa vrátiť do rodnej dediny bráni minulosť a predsudky ľudí.",
  },
  {
    id: 1142,
    topic: "sj-lyrizovana",
    question: "Margita Figuli napísala lyrizovanú prózu:",
    options: [
      "Drak sa vracia",
      "Nevesta hôľ",
      "Tri gaštanové kone",
      "Dom v stráni",
    ],
    correctIndex: 2,
    explanation:
      "Tri gaštanové kone (1940) od Margity Figuli je lyrická novela; príbeh o láske Petra a Magdalény má biblické a mýtické prvky; je symbolom čistej ľudskej lásky.",
  },
  {
    id: 1143,
    topic: "sj-lyrizovana",
    question: "František Švantner napísal lyrizovanú prózu:",
    options: [
      "Tri gaštanové kone",
      "Drak sa vracia",
      "Nevesta hôľ",
      "Jozef Mak",
    ],
    correctIndex: 2,
    explanation:
      "Nevesta hôľ (1946) od Františka Švantnera je lyrizovaná novela; ústrednou témou je záhadný vzťah muža k hôrnej prírode zosobnenej tajomnou ženou.",
  },
  {
    id: 1144,
    topic: "sj-lyrizovana",
    question: "Ktorý prvok je typický pre lyrizovanú prózu?",
    options: [
      "Chladný, analytický štýl bez metafor",
      "Mýtické a folklórne motívy, poetický jazyk a symboly spojené s prírodou",
      "Výhradne dialóg bez opisných pasáží",
      "Priame komentáre autora o politike",
    ],
    correctIndex: 1,
    explanation:
      "Lyrizovaná próza je prepojená s folklórom, mytológiou a prírodou; využíva bohatú metaforiku, symboly a rytmizovaný jazyk blízky poézii.",
  },
  {
    id: 1145,
    topic: "sj-lyrizovana",
    question: "Naturizmus ako pojem bol odvodený od:",
    options: [
      "Prírodovedy a botaniky",
      "Blízkosti k prírode a prirodzenosti ľudového života (lat. natura)",
      "Náboženskej teológie",
      "Socialistického realizmu",
    ],
    correctIndex: 1,
    explanation:
      "Naturizmus v literatúre zdôrazňuje návrat k prírode, k prirodzenému životu dedinského ľudu, k archaickým hodnotám a mýtom; slovo pochádza z lat. natura.",
  },
  {
    id: 1146,
    topic: "sj-lyrizovana",
    question: "V novele Drak sa vracia je postava Draka (Martin Lepiešo) symbolom:",
    options: [
      "Moci a bohatstva",
      "Outsider a vyvrhnuteľ, ktorý sa snaží o zmierenie s minulosťou a spoločnosťou",
      "Ideálneho občana komunistickej spoločnosti",
      "Romantického hrdinu bez chýb",
    ],
    correctIndex: 1,
    explanation:
      "Drak je vyvrhnuteľ, ktorý sa po rokoch vracia domov; nosí bremeno viny a pochybností – jeho príbeh skúma vinu, odsúdenie a možnosť odpustenia.",
  },
  {
    id: 1147,
    topic: "sj-lyrizovana",
    question: "Lyrizovaná próza vznikla v slovenskom kontexte najmä v rokoch:",
    options: [
      "1890–1910",
      "1918–1925",
      "1930–1945",
      "1960–1975",
    ],
    correctIndex: 2,
    explanation:
      "Lyrizovaná próza (naturizmus) sa rozvinula v slovenskom medzivojnovom a vojnovom období – v 30. a 40. rokoch 20. storočia.",
  },

  // ─── PO 1945 ─────────────────────────────────────────────────────────────
  {
    id: 1148,
    topic: "sj-po1945",
    question: "Milan Rúfus patrí k generácii básnikov, ktorí:",
    options: [
      "Písali ľavicovú propagandistickú poéziu",
      "V 50. rokoch nastúpili s lyrikou orientovanou na etické a existenciálne hodnoty, nie na politiku",
      "Vytvárali absurdnú drámu",
      "Písali len historické románe",
    ],
    correctIndex: 1,
    explanation:
      "Rúfus (1928–2009) vstúpil do literatúry v 50. rokoch ako básnik hľadajúci hlboké ľudské hodnoty mimo politiky – čas, smrť, láska, Boh (zbierky Až dozrieme, Zvony).",
  },
  {
    id: 1149,
    topic: "sj-po1945",
    question: "Miroslav Válek je básnikom generácie 60. rokov, známy zbierkou:",
    options: [
      "Cválajúce dni",
      "Nedeľa",
      "Dotyky",
      "Zvony",
    ],
    correctIndex: 2,
    explanation:
      "Dotyky (1959) je Válkova debut­ová zbierka; neskôr vydal Príťažlivosť (1961) a Milovanie v husej koži; jeho poézia je existenciálna, plná úzkosti a jemnej erotiky.",
  },
  {
    id: 1150,
    topic: "sj-po1945",
    question: "Alfonz Bednár napísal novelu o ľudskej svedomitosti po 2. sv. vojne:",
    options: [
      "Jozef Mak",
      "Sklený vrch",
      "Živý bič",
      "Drak sa vracia",
    ],
    correctIndex: 1,
    explanation:
      "Sklený vrch (1954) od Alfonza Bednára je novela zachytávajúca morálne dilemy ľudí v SNP a po vojne; analyzuje vinu, zbabelosť a svedomie.",
  },
  {
    id: 1151,
    topic: "sj-po1945",
    question: "Ladislav Mňačko napísal dokument­árne reportáže a román:",
    options: [
      "Smrť sa volá Engelchen",
      "Jozef Mak",
      "Tri gaštanové kone",
      "Sklený vrch",
    ],
    correctIndex: 0,
    explanation:
      "Smrť sa volá Engelchen (1959) od Ladislava Mňačka je reportážny román o partizánskej vojně a hrôzach nacizmu; Mňačko bol tiež autorom kritickej prózy Ako chutí moc.",
  },
  {
    id: 1152,
    topic: "sj-po1945",
    question: "Po roku 1968 sa slovenská literatúra rozdelila do troch prúdov. Ktorý z nasledujúcich nepatrí medzi ne?",
    options: [
      "Domáca oficálna literatúra (tzv. normalizačná)",
      "Literatúra v samizdatovom vydaní a v exile",
      "Literatúra slovenských autorov v zahraničí",
      "Socialistický realizmus 40. rokov",
    ],
    correctIndex: 3,
    explanation:
      "Po roku 1968 existovali tri prúdy: 1. domáca tvorba publikovaná pod cenzúrou, 2. samizdat a literatúra v exil, 3. literatúra slovenských autorov v zahraničí. Socialistický realizmus 40. rokov je staršie obdobie.",
  },
  {
    id: 1153,
    topic: "sj-po1945",
    question: "Postmoderna v literatúre sa vyznačuje:",
    options: [
      "Prísnym dodržiavaním jedného žánru",
      "Intertextualitou, miešaním žánrov, iróniou a spochybnením jednej pravdy",
      "Návratom k romantickému idealizmu",
      "Výhradne realistickým opisom bez metafory",
    ],
    correctIndex: 1,
    explanation:
      "Postmoderna (od 80. rokov) pracuje s intertextualitou, parodiou, žánrovým miešaním, relatívnosťou pravdy a ironickým sebauvedomením; odmietava jedinú veľkú naráciu.",
  },
  {
    id: 1154,
    topic: "sj-po1945",
    question: "Milan Ferko a Ján Johanides reprezentujú v literatúre po 1968:",
    options: [
      "Normalizačnú literatúru s heroickými témami",
      "Psychologickú a existenciálnu prózu s vnútorným svetom postáv",
      "Historické eposy o slovenských dejinách",
      "Detskú literatúru",
    ],
    correctIndex: 1,
    explanation:
      "Johanides a ďalší autori po roku 1968 písali psychologickú a existenciálnu prózu; Johanides sa zameral na vnútorný monológ a existenciálne krízy postáv.",
  },
  {
    id: 1155,
    topic: "sj-po1945",
    question: "Literárny samizdat bol:",
    options: [
      "Štátne vydavateľstvo schvaľujúce knihy",
      "Tajné, neoficiálne vydávanie a šírenie textov zakázaných cenzúrou",
      "Exilové vydavateľstvo v Paríži",
      "Cenou za najlepší román roka",
    ],
    correctIndex: 1,
    explanation:
      "Samizdat (z rus. самиздат – sám vydávam) bolo tajné rozmnožovanie a šírenie zakázaných textov; v ČSSR sa praktizoval najmä po roku 1968.",
  },
  {
    id: 1156,
    topic: "sj-po1945",
    question: "Rúfusova básnická zbierka Zvony (1968) je zameraná na:",
    options: [
      "Politickú satiru na komunistický režim",
      "Ľudskú smrteľnosť, čas, detstvo a etické hodnoty",
      "Erotickú lyriku a oslavu krásy",
      "Vojnové zážitky a hrdinstvo",
    ],
    correctIndex: 1,
    explanation:
      "Rúfusove Zvony sú meditáciou o čase, smrteľnosti, detskej nevinnosti a ľudských hodnotách; básnik sa pýta na zmysel ľudského bytia bez politickej angažovanosti.",
  },
  {
    id: 1157,
    topic: "sj-po1945",
    question: "Dominik Tatarka bol po roku 1968 zakázaným autorom. Napísal:",
    options: [
      "Jozef Mak",
      "Rozhovory bez konca (samizdat)",
      "Živý bič",
      "Sklený vrch",
    ],
    correctIndex: 1,
    explanation:
      "Dominik Tatarka po roku 1968 nemohol publikovať; jeho Rozhovory bez konca a ďalšie texty kolovali v samizdatovom vydaní; bol jednou z najvýznamnejších postáv disidentskej literatúry.",
  },
];
