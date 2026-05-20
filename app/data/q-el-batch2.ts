import type { Question } from './questions';

export const elBatch2: Question[] = [
  // ===== TVAROVANIE (500-518) =====
  {
    id: 500,
    topic: "tvarovanie",
    question: "Aky je vzorec pre casovu konstantu RC obvodu?",
    options: ["tau = R/C", "tau = R * C", "tau = C/R", "tau = 1/(R * C)"],
    correctIndex: 1,
    explanation: "Casova konstanta RC obvodu je sucin odporu a kapacity: tau = R * C. Udava cas, za ktory sa kondenzator nabije na 63,2 % maximalnej hodnoty napätia."
  },
  {
    id: 501,
    topic: "tvarovanie",
    question: "Za kolko casovych konstant sa kondenzator nabije priblizne na 99,3 % maximalneho napatia?",
    options: ["3 tau", "4 tau", "5 tau", "10 tau"],
    correctIndex: 2,
    explanation: "Po 5 casovych konstantach (5 tau) je kondenzator nabitý na 99,3 % maximalneho napatia, co sa v praxi povazuje za plne nabitie."
  },
  {
    id: 502,
    topic: "tvarovanie",
    question: "Integracny RC clanok prepusta:",
    options: ["vysoke frekvencie", "nizke frekvencie", "vsetky frekvencie rovnako", "ziadne frekvencie"],
    correctIndex: 1,
    explanation: "Integracny RC clanok (dolnopriepustny filter) prepusta nizke frekvencie a potlaca vysoke. Vystup sa odoberá z kondenzatora."
  },
  {
    id: 503,
    topic: "tvarovanie",
    question: "Derivacny RC clanok sa pouziva ako:",
    options: ["dolnopriepustny filter", "hornopriepustny filter", "pasmovy priepustny filter", "pasmova zadrz (notch)"],
    correctIndex: 1,
    explanation: "Derivacny RC clanok je hornopriepustny filter - prepusta vysoke frekvencie a potlaca nizke. Vystup sa odoberá z rezistora."
  },
  {
    id: 504,
    topic: "tvarovanie",
    question: "Klopny obvod RS ma:",
    options: ["1 vstup, 1 vystup", "2 vstupy, 1 vystup", "2 vstupy, 2 vystupy", "3 vstupy, 2 vystupy"],
    correctIndex: 2,
    explanation: "RS klopny obvod ma 2 vstupy (R - Reset, S - Set) a 2 vystupy (Q a negovane Q)."
  },
  {
    id: 505,
    topic: "tvarovanie",
    question: "Aky je zakazany stav RS klopneho obvodu?",
    options: ["R=0, S=0", "R=0, S=1", "R=1, S=0", "R=1, S=1"],
    correctIndex: 3,
    explanation: "Pri RS klopnom obvode je stav R=1, S=1 zakazany, pretoze by oba vystupy Q aj negovane Q boli v rovnakom stave, co je logicky rozpor."
  },
  {
    id: 506,
    topic: "tvarovanie",
    question: "Klopny obvod typu D ma funkciu:",
    options: ["pamatania jedneho bitu", "scitania dvoch bitov", "nasobenia dvoch cisel", "delenia frekvencie na tretinu"],
    correctIndex: 0,
    explanation: "D klopny obvod (Data/Delay) si pamatá hodnotu na vstupe D v momente hodinoveho impulzu. Sluzi na pamatanie jedneho bitu informacie."
  },
  {
    id: 507,
    topic: "tvarovanie",
    question: "T klopny obvod pri kazdom hodinovom impulze:",
    options: ["sa nastavi na logicku 1", "sa vynuluje na logicku 0", "zmeni svoj stav na opacny", "zostane v rovnakom stave"],
    correctIndex: 2,
    explanation: "T klopny obvod (Toggle) pri kazdom hodinovom impulze zmeni svoj stav na opacny - z 0 na 1 alebo z 1 na 0. Pouziva sa na delenie frekvencie."
  },
  {
    id: 508,
    topic: "tvarovanie",
    question: "Astabilny klopny obvod:",
    options: ["ma dva stabilne stavy", "ma jeden stabilny stav", "nema ziadny stabilny stav", "ma tri stabilne stavy"],
    correctIndex: 2,
    explanation: "Astabilny klopny obvod nema ziadny stabilny stav - neustale sa preklapá medzi dvoma stavmi. Generuje pravidelne impulzy (obdlznikovy signal)."
  },
  {
    id: 509,
    topic: "tvarovanie",
    question: "Monostabilny klopny obvod ma:",
    options: ["0 stabilnych stavov", "1 stabilny stav", "2 stabilne stavy", "3 stabilne stavy"],
    correctIndex: 1,
    explanation: "Monostabilny klopny obvod ma jeden stabilny stav. Po spusteni impulzom prejde do nestabilneho stavu na urcity cas a potom sa vrati spat."
  },
  {
    id: 510,
    topic: "tvarovanie",
    question: "Bistabilny klopny obvod ma:",
    options: ["0 stabilnych stavov", "1 stabilny stav", "2 stabilne stavy", "nekonecno stavov"],
    correctIndex: 2,
    explanation: "Bistabilny klopny obvod ma dva stabilne stavy a zotrváva v jednom z nich, kym nie je externym signalom prepnuty do druheho."
  },
  {
    id: 511,
    topic: "tvarovanie",
    question: "Schmittov obvod sa pouziva na:",
    options: ["zosilnenie analogoveho signalu", "tvarovanie signalu s hysterezou", "generovanie sinusoveho signalu", "meranie frekvencie signalu"],
    correctIndex: 1,
    explanation: "Schmittov obvod tvaruje signal s vyuzitim hystereze - ma rozne prahy pre prechod z 0 na 1 a z 1 na 0, cim odstrañuje sum zo signalu."
  },
  {
    id: 512,
    topic: "tvarovanie",
    question: "Casovac 555 v astabilnom rezime generuje:",
    options: ["jednorazovy obdlznikovy impulz", "pravidelne obdlznikove impulzy", "sinusovy signal s konst. amplitudou", "pilovity signal s meniacou sa amplitudou"],
    correctIndex: 1,
    explanation: "Casovac 555 v astabilnom rezime generuje nepretrzite pravidelne obdlznikove impulzy s frekvenciou urcenou externymi sucastkami R a C."
  },
  {
    id: 513,
    topic: "tvarovanie",
    question: "Casovac 555 v monostabilnom rezime generuje:",
    options: ["nepretrzite obdlznikove impulzy", "jednorazovy impulz definovanej dlzky", "sinusovy signal definovanej amplitudy", "trojuholnikovy signal meniacej sa striedou"],
    correctIndex: 1,
    explanation: "V monostabilnom rezime casovac 555 po spusteni vygeneruje jeden impulz s dlzkou t = 1,1 * R * C a potom sa vrati do povodneho stavu."
  },
  {
    id: 514,
    topic: "tvarovanie",
    question: "Aka je dlzka impulzu casovaca 555 v monostabilnom rezime pri R = 100 kohm a C = 10 uF?",
    options: ["0,11 s", "1,1 s", "11 s", "0,011 s"],
    correctIndex: 1,
    explanation: "Dlzka impulzu t = 1,1 * R * C = 1,1 * 100 000 * 0,00001 = 1,1 s."
  },
  {
    id: 515,
    topic: "tvarovanie",
    question: "JK klopny obvod pri J=1 a K=1:",
    options: ["sa nastavi na 1", "sa vynuluje", "zmeni stav (toggle)", "zostane nezmeneny"],
    correctIndex: 2,
    explanation: "JK klopny obvod pri J=1 a K=1 zmeni svoj stav na opacny (toggle). Na rozdiel od RS obvodu nema zakazany stav."
  },
  {
    id: 516,
    topic: "tvarovanie",
    question: "Na ake percento maximalnej hodnoty sa nabije kondenzator za 1 casovu konstantu?",
    options: ["50 %", "63,2 %", "86,5 %", "95 %"],
    correctIndex: 1,
    explanation: "Za jednu casovu konstantu tau sa kondenzator nabije na 63,2 % maximalnej hodnoty napatia (presnejsie na (1 - e^(-1)) * 100 %)."
  },
  {
    id: 517,
    topic: "tvarovanie",
    question: "Aky je stav vystupu RS klopneho obvodu pri R=1, S=0?",
    options: ["Q = 1", "Q = 0", "Q = predchadzajuci stav", "nedefinovany stav"],
    correctIndex: 1,
    explanation: "Pri R=1, S=0 sa RS klopny obvod resetuje - vystup Q sa nastavi na logicku 0."
  },
  {
    id: 518,
    topic: "tvarovanie",
    question: "Casova konstanta RC obvodu s R = 10 kohm a C = 100 uF je:",
    options: ["0,1 s", "1 s", "10 s", "0,01 s"],
    correctIndex: 1,
    explanation: "tau = R * C = 10 000 * 0,0001 = 1 s."
  },
  // ===== CISLICOVA (519-538) =====
  {
    id: 519,
    topic: "cislicova",
    question: "Logicke hradlo AND dava na vystupe 1 iba ak:",
    options: ["aspon jeden vstup je 1", "vsetky vstupy su 1", "vsetky vstupy su 0", "aspon jeden vstup je 0"],
    correctIndex: 1,
    explanation: "Hradlo AND (logicky sucin) dava na vystupe 1 iba vtedy, ked su vsetky vstupy v logickej 1."
  },
  {
    id: 520,
    topic: "cislicova",
    question: "Logicke hradlo OR dava na vystupe 1 ak:",
    options: ["vsetky vstupy su 1", "aspon jeden vstup je 1", "vsetky vstupy su 0", "ziadny vstup nie je 1"],
    correctIndex: 1,
    explanation: "Hradlo OR (logicky sucet) dava na vystupe 1, ak je aspon jeden vstup v logickej 1."
  },
  {
    id: 521,
    topic: "cislicova",
    question: "Hradlo NAND je kombinaciou:",
    options: ["NOT a OR", "AND a NOT", "OR a NOT", "XOR a NOT"],
    correctIndex: 1,
    explanation: "NAND je negovany AND - najprv vykona logicky sucin a potom negaciu vystupu. NAND je univerzalne hradlo."
  },
  {
    id: 522,
    topic: "cislicova",
    question: "Kolko riadkov ma pravdivostna tabulka pre 3 vstupne premenne?",
    options: ["4", "6", "8", "16"],
    correctIndex: 2,
    explanation: "Pocet riadkov pravdivostnej tabulky je 2^n, kde n je pocet vstupnych premennych. Pre 3 premenne: 2^3 = 8 riadkov."
  },
  {
    id: 523,
    topic: "cislicova",
    question: "Hradlo XOR dava na vystupe 1 ak:",
    options: ["oba vstupy su rovnake", "oba vstupy su 1", "vstupy su rozne", "oba vstupy su 0"],
    correctIndex: 2,
    explanation: "XOR (exkluzivny OR) dava na vystupe 1 prave vtedy, ked su vstupy rozne (jeden je 0 a druhy je 1)."
  },
  {
    id: 524,
    topic: "cislicova",
    question: "Binarne cislo 1010 ma v desiatkovej sustave hodnotu:",
    options: ["8", "10", "12", "14"],
    correctIndex: 1,
    explanation: "1010 v binarnej sustave = 1*8 + 0*4 + 1*2 + 0*1 = 8 + 0 + 2 + 0 = 10 v desiatkovej sustave."
  },
  {
    id: 525,
    topic: "cislicova",
    question: "Hexadecimalne cislo FF ma v desiatkovej sustave hodnotu:",
    options: ["128", "200", "255", "256"],
    correctIndex: 2,
    explanation: "FF v hexadecimalnej sustave = 15*16 + 15*1 = 240 + 15 = 255 v desiatkovej sustave."
  },
  {
    id: 526,
    topic: "cislicova",
    question: "Multiplexor je obvod, ktory:",
    options: ["rozdeluje jeden vstup na viacero vystupov", "vyberá jeden z viacerych vstupov na vystup", "scitava dve binarne cisla na vystupe", "dekoduje binarne cislo na vystupe"],
    correctIndex: 1,
    explanation: "Multiplexor (MUX) vyberá jeden z viacerych vstupov a pripoji ho na vystup podla adresovych vstupov."
  },
  {
    id: 527,
    topic: "cislicova",
    question: "Demultiplexor je obvod, ktory:",
    options: ["vyberá jeden z viacerych vstupov na vystup", "rozdeluje jeden vstup na viacero vystupov", "scitava binarne cisla dvoch operandov", "neguje vstupny signal na komplementarny"],
    correctIndex: 1,
    explanation: "Demultiplexor (DEMUX) rozdeluje jeden vstupny signal na jeden z viacerych vystupov podla adresovych vstupov."
  },
  {
    id: 528,
    topic: "cislicova",
    question: "Polovicna scitacka (half adder) ma:",
    options: ["1 vstup, 1 vystup", "2 vstupy, 1 vystup", "2 vstupy, 2 vystupy", "3 vstupy, 2 vystupy"],
    correctIndex: 2,
    explanation: "Polovicna scitacka ma 2 vstupy (A, B) a 2 vystupy (Sum - sucet a Carry - prenos). Nema vstup pre prenos z nizsieho radu."
  },
  {
    id: 529,
    topic: "cislicova",
    question: "Uplna scitacka (full adder) ma:",
    options: ["2 vstupy, 2 vystupy", "3 vstupy, 1 vystup", "3 vstupy, 2 vystupy", "4 vstupy, 2 vystupy"],
    correctIndex: 2,
    explanation: "Uplna scitacka ma 3 vstupy (A, B, prenos Cin) a 2 vystupy (Sum - sucet a Carry - prenos Cout)."
  },
  {
    id: 530,
    topic: "cislicova",
    question: "A/D prevodnik pretvara:",
    options: ["digitalny signal na analogovy", "analogovy signal na digitalny", "striedavy prud na jednosmerny", "jednosmerny prud na striedavy"],
    correctIndex: 1,
    explanation: "A/D prevodnik (analogovo-digitalny) pretvara analogovy (spojity) signal na digitalny (diskretny) signal."
  },
  {
    id: 531,
    topic: "cislicova",
    question: "D/A prevodnik s rozlisenim 8 bitov moze mat:",
    options: ["128 urovni", "256 urovni", "512 urovni", "1024 urovni"],
    correctIndex: 1,
    explanation: "Pocet urovni D/A prevodnika je 2^n, kde n je pocet bitov. Pre 8 bitov: 2^8 = 256 urovni."
  },
  {
    id: 532,
    topic: "cislicova",
    question: "De Morganov zakon hovori, ze NOT(A AND B) sa rovna:",
    options: ["NOT A AND NOT B", "NOT A OR NOT B", "A OR NOT B", "NOT A AND B"],
    correctIndex: 1,
    explanation: "Podla De Morganovho zakona: negacia sucinu sa rovna suctu negacii, teda NOT(A AND B) = NOT A OR NOT B."
  },
  {
    id: 533,
    topic: "cislicova",
    question: "Dekoder 3-na-8 ma:",
    options: ["8 vstupov a 3 vystupy", "3 vstupy a 8 vystupov", "3 vstupy a 3 vystupy", "8 vstupov a 8 vystupov"],
    correctIndex: 1,
    explanation: "Dekoder 3-na-8 ma 3 vstupne (adresove) bity a 8 vystupov. Aktivuje prave jeden z 8 vystupov podla kombinacie na vstupe."
  },
  {
    id: 534,
    topic: "cislicova",
    question: "Asynchronny citac sa od synchronneho lisi tym, ze:",
    options: ["nema hodinovy signal na vstupe", "klopne obvody su budene kaskadovito", "pouziva ine typy logickych hradiel", "ma viac vystupov ako synchronny"],
    correctIndex: 1,
    explanation: "V asynchronnom citaci je vystup jedneho klopneho obvodu hodinovym signalom pre dalsi (kaskadove budenie), co sposobuje oneskorenie. V synchronnom su vsetky budene spolocnym hodinovym signalom."
  },
  {
    id: 535,
    topic: "cislicova",
    question: "Register je obvod slúziaci na:",
    options: ["scitanie binárnych cisel", "docasne ulozenie skupiny bitov", "generovanie hodinoveho signalu", "zosilnenie digitalneho signalu"],
    correctIndex: 1,
    explanation: "Register je skupina klopnych obvodov slúziaca na docasne ulozenie skupiny bitov (napr. 8-bitove slovo)."
  },
  {
    id: 536,
    topic: "cislicova",
    question: "Cislo 27 v desiatkovej sustave je v binarnej sustave:",
    options: ["11001", "11011", "11101", "10111"],
    correctIndex: 1,
    explanation: "27 = 16 + 8 + 2 + 1 = 2^4 + 2^3 + 2^1 + 2^0, co je v binarnej sustave 11011."
  },
  {
    id: 537,
    topic: "cislicova",
    question: "Univerzalne hradlo, z ktoreho mozno zostavit vsetky ostatne, je:",
    options: ["AND", "OR", "NAND", "XOR"],
    correctIndex: 2,
    explanation: "NAND (rovnako ako NOR) je univerzalne hradlo - pomocou samotnych NAND hradiel mozno zostrojit vsetky ostatne logicke funkcie (NOT, AND, OR, XOR)."
  },
  {
    id: 538,
    topic: "cislicova",
    question: "Oktalkova sustava ma zaklad:",
    options: ["2", "8", "10", "16"],
    correctIndex: 1,
    explanation: "Oktalkova (osmickova) sustava ma zaklad 8 a pouziva cislice 0 az 7."
  },
  // ===== SVETELNA (539-557) =====
  {
    id: 539,
    topic: "svetelna",
    question: "Jednotkou svetelneho toku je:",
    options: ["kandela [cd]", "lumen [lm]", "lux [lx]", "watt [W]"],
    correctIndex: 1,
    explanation: "Svetelny tok (Phi) sa meria v lumenoch [lm]. Udava celkove mnozstvo svetla vyareneho zdrojom."
  },
  {
    id: 540,
    topic: "svetelna",
    question: "Jednotkou svietivosti je:",
    options: ["lumen [lm]", "lux [lx]", "kandela [cd]", "watt [W]"],
    correctIndex: 2,
    explanation: "Svietivost (I) sa meria v kandelach [cd]. Je to svetelny tok vyareny v urcitom priestorovom uhle."
  },
  {
    id: 541,
    topic: "svetelna",
    question: "Jednotkou osvetlenosti je:",
    options: ["lumen [lm]", "kandela [cd]", "lux [lx]", "cd/m2"],
    correctIndex: 2,
    explanation: "Osvetlenost (E) sa meria v luxoch [lx]. 1 lux = 1 lumen na 1 m2 osvetlenej plochy."
  },
  {
    id: 542,
    topic: "svetelna",
    question: "Merny svetelny vykon (ucinnost) svetelneho zdroja sa udava v:",
    options: ["lux na watt", "lumen na watt", "kandela na watt", "watt na lumen"],
    correctIndex: 1,
    explanation: "Merny svetelny vykon sa udava v lumenoch na watt [lm/W] a vyjadruje, kolko svetla zdroj vyprodukuje na kazdy watt elektrickeho prikonu."
  },
  {
    id: 543,
    topic: "svetelna",
    question: "Ktory zdroj svetla ma najvyssiu ucinnost [lm/W]?",
    options: ["ziarovka", "halogénova ziarovka", "ziarivka", "LED"],
    correctIndex: 3,
    explanation: "LED diody maju najvyssiu ucinnost spomedzi beznych zdrojov - az 150-200 lm/W. Ziarovka ma len okolo 10-15 lm/W."
  },
  {
    id: 544,
    topic: "svetelna",
    question: "Farebna teplota denneho svetla je priblizne:",
    options: ["2700 K", "4000 K", "5500 K", "8000 K"],
    correctIndex: 2,
    explanation: "Denne svetlo (poludñajsie slnko) ma farebnu teplotu priblizne 5500 K. Teplo-biele svetlo ma okolo 2700 K, studene biele okolo 6500 K."
  },
  {
    id: 545,
    topic: "svetelna",
    question: "Index podania farieb (Ra/CRI) idealneho zdroja je:",
    options: ["0", "50", "80", "100"],
    correctIndex: 3,
    explanation: "Idealny zdroj svetla (slnko) ma index podania farieb Ra = 100. Cim je hodnota vyssia, tym vernejsie zdroj reprodukuje farby."
  },
  {
    id: 546,
    topic: "svetelna",
    question: "Ziarivka vytvara svetlo pomocou:",
    options: ["zahriateho volframoveho vladna", "vyboja v plyne a luminoforu", "polovovicoveho prechodu", "chemickej reakcie"],
    correctIndex: 1,
    explanation: "Ziarivka vyuziva elektricky vyboj v plyne (rtuťových parach), ktory produkuje UV ziarenie. To sa luminoforom premeni na viditelne svetlo."
  },
  {
    id: 547,
    topic: "svetelna",
    question: "LED dioda vytvara svetlo pomocou:",
    options: ["zahriateho volframoveho vladna na vysoku teplotu", "vyboja v plyne a naslednej premeny UV ziarenia", "rekombinacie nosicov naboja na PN prechode", "luminiscencie fosforeskujucej latky po excitacii"],
    correctIndex: 2,
    explanation: "LED (Light Emitting Diode) vytvara svetlo elektroluniniscenciou - rekombinaciou elektronov a dier na PN prechode polovovica."
  },
  {
    id: 548,
    topic: "svetelna",
    question: "Osvetlenost pracovneho stola v kancelarii by mala byt podla normy minimalne:",
    options: ["100 lx", "300 lx", "500 lx", "1000 lx"],
    correctIndex: 2,
    explanation: "Podla normy STN EN 12464-1 je pozadovana osvetlenost pre kancelarske prace minimalne 500 lx."
  },
  {
    id: 549,
    topic: "svetelna",
    question: "Teplo-biele svetlo ma farebnu teplotu priblizne:",
    options: ["2700 K", "4000 K", "5500 K", "6500 K"],
    correctIndex: 0,
    explanation: "Teplo-biele svetlo ma farebnu teplotu priblizne 2700 K. Je to typicka farba klasickej ziarovky."
  },
  {
    id: 550,
    topic: "svetelna",
    question: "Jas (luminancia) sa meria v jednotkach:",
    options: ["lumen [lm]", "lux [lx]", "kandela na meter stvorcovy [cd/m2]", "kandela [cd]"],
    correctIndex: 2,
    explanation: "Jas (luminancia L) sa meria v kandelach na meter stvorcovy [cd/m2]. Vyjadruje svietivost plochy v urcitom smere."
  },
  {
    id: 551,
    topic: "svetelna",
    question: "Ak svetelny zdroj produkuje 1000 lm a ma prikon 10 W, jeho merny svetelny vykon je:",
    options: ["10 lm/W", "100 lm/W", "1000 lm/W", "10000 lm/W"],
    correctIndex: 1,
    explanation: "Merny svetelny vykon = svetelny tok / prikon = 1000 lm / 10 W = 100 lm/W."
  },
  {
    id: 552,
    topic: "svetelna",
    question: "Dimovanie LED zdroja sa najcastejsie realizuje:",
    options: ["zmenou frekvencie", "PWM modulaciou", "zmenou farebnej teploty", "pridanim filtra"],
    correctIndex: 1,
    explanation: "Dimovanie (stmievanie) LED sa najcastejsie realizuje PWM (pulzno-sirkovou) modulaciou, kde sa meni strieda zapnutia a vypnutia pri vysokej frekvencii."
  },
  {
    id: 553,
    topic: "svetelna",
    question: "Ziarovka premeni na svetlo priblizne:",
    options: ["5 % energie", "25 % energie", "50 % energie", "75 % energie"],
    correctIndex: 0,
    explanation: "Klasicka ziarovka premeni na svetlo len priblizne 5 % elektrickej energie. Zvysok (95 %) sa premeni na teplo."
  },
  {
    id: 554,
    topic: "svetelna",
    question: "Osvetlenost klesá so stvorcovou vzdialenostou od zdroja. Ak zdvojnasobime vzdialenost, osvetlenost:",
    options: ["klesne na polovicu", "klesne na stvrtinu", "klesne na osminu", "zostane rovnaka"],
    correctIndex: 1,
    explanation: "Podla zakona obratnych stvorcov: E = I / d^2. Pri zdvojnasobeni vzdialenosti klesne osvetlenost na 1/4 povodnej hodnoty."
  },
  {
    id: 555,
    topic: "svetelna",
    question: "Co je to stroboskopicky efekt pri osvetleni?",
    options: ["zmena farby svetla vplyvom otacania strojov", "blikanie svetla synchronne s pohybom, co vyvolava zdanie nehybnosti", "postupne stlmovanie svetla sposobene starnutim zdroja", "rozptyl svetla vplyvom vibracie svietidla pri otackach"],
    correctIndex: 1,
    explanation: "Stroboskopicky efekt nastáva, ked frekvencia blikania svetla (napr. ziarivky na 50 Hz) je synchronna s otackami stroja, co moze vyvolat dojem, ze sa stroj netocí."
  },
  {
    id: 556,
    topic: "svetelna",
    question: "Svetelny tok zdroja s svietivostou 100 cd rovnomerne do vsetkych smerov (4 pi sr) je:",
    options: ["314 lm", "628 lm", "1257 lm", "400 lm"],
    correctIndex: 2,
    explanation: "Phi = I * omega = 100 cd * 4 * pi sr = 100 * 12,57 = 1257 lm. Priestorovy uhol celej gule je 4 pi steradianov."
  },
  {
    id: 557,
    topic: "svetelna",
    question: "Halogénova ziarovka sa od klasickej ziarovky lisi tym, ze:",
    options: ["neobsahuje vlakno ale pouziva obluk", "obsahuje halogénovy plyn, ktory predlzuje zivotnost vlakna", "pouziva LED cipy namiesto vlakna", "pracuje na nizkom napati a jednosmernom prude"],
    correctIndex: 1,
    explanation: "Halogénova ziarovka obsahuje halogénovy plyn (jod alebo brom), ktory regeneruje volframove vlakno (halogénovy cyklus) a predlzuje tak jeho zivotnost."
  },
  // ===== PRISTROJE (558-576) =====
  {
    id: 558,
    topic: "pristroje",
    question: "Istic s charakteristikou B vypne pri nadprude:",
    options: ["1,13 az 1,45-nasobku menoviteho prudu", "3 az 5-nasobku menoviteho prudu", "5 az 10-nasobku menoviteho prudu", "10 az 20-nasobku menoviteho prudu"],
    correctIndex: 1,
    explanation: "Istic s charakteristikou B (pre bytove rozvody) reaguje na okamzity skrat pri 3 az 5-nasobku menoviteho prudu."
  },
  {
    id: 559,
    topic: "pristroje",
    question: "Istic s charakteristikou C je urceny predovsetkym pre:",
    options: ["bytove rozvody a zasuvkove obvody", "obvody s motormi a transformatormi", "velmi induktivne zataze s vysokymi prudmi", "osvetlovacie obvody a svetelne okruhy"],
    correctIndex: 1,
    explanation: "Istic C (5-10 nasobok In) je urceny pre obvody s motormi a transformatormi, kde vznikaju vysie zapínacie prudy."
  },
  {
    id: 560,
    topic: "pristroje",
    question: "Prudovy chranic (RCD/FI) chrání pred:",
    options: ["skratom v silovom obvode", "pretazenim vedenia nad menovity prud", "urazom elektrickym prudom", "prepätim sposobenym bleskom"],
    correctIndex: 2,
    explanation: "Prudovy chranic detekuje rozdiel prudov medzi fazovym a nulovym vodicom (zvyskovy prud) a odpojí obvod, cim chrání pred urazom elektrickym prudom."
  },
  {
    id: 561,
    topic: "pristroje",
    question: "Menovity zvyskovy prud prudoveho chranica pre ochranu osob je:",
    options: ["10 mA", "30 mA", "100 mA", "300 mA"],
    correctIndex: 1,
    explanation: "Pre ochranu osob pred urazom elektrickym prudom sa pouziva prudovy chranic s menovitym zvyskovym prudom 30 mA."
  },
  {
    id: 562,
    topic: "pristroje",
    question: "Stykac je elektromechanicky pristroj urceny na:",
    options: ["meranie prudu v silovych obvodoch pomocou meracieho transformatora", "spínanie velkych prudov pomocou maleho ovladacieho signalu", "ochranu pred skratom a pretazenim v elektrickom rozvode", "uzemñovanie elektrickych zariadení a ochrannych vodicov"],
    correctIndex: 1,
    explanation: "Stykac je dalkovane ovladany spínaci pristroj, ktory pomocou maleho ovladacieho prudu (civka) spína velke zaťažovacie prudy v silovych obvodoch."
  },
  {
    id: 563,
    topic: "pristroje",
    question: "Rele sa od stykaca lisi hlavne tym, ze:",
    options: ["je vacsie a tazsie", "spína mensie prudy", "nema budiace civku", "nema spínacie kontakty"],
    correctIndex: 1,
    explanation: "Rele je urcene pre mensie prudy (riadiace obvody), zatial co stykac je dimenzovany na spínanie velkych prudov v silovych obvodoch."
  },
  {
    id: 564,
    topic: "pristroje",
    question: "Poistka chrání obvod pred:",
    options: ["prepätim v sieti", "podpätim v sieti", "pretazenim a skratom", "zmenou frekvencie siete"],
    correctIndex: 2,
    explanation: "Poistka chrání obvod pred pretazenim a skratom. Pri prekroceni menoviteho prudu sa tavny vodic prepalí a prerusí obvod."
  },
  {
    id: 565,
    topic: "pristroje",
    question: "Odpojovac sluzi na:",
    options: ["spínanie obvodu pod plnou zátažou v prevadzke", "viditelne odpojenie obvodu pre bezpecnu pracu", "regulaciu napatia v silovom rozvadzaci", "meranie prudu pomocou zabudovaneho transformatora"],
    correctIndex: 1,
    explanation: "Odpojovac vytvara viditelnu izolacnu medzeru v obvode pre bezpecnu pracu na zariadeni. Nesmie sa spínat pod zátažou."
  },
  {
    id: 566,
    topic: "pristroje",
    question: "Odpínac je pristroj, ktory kombinuje funkcie:",
    options: ["poistky a istica", "odpojovaca a vypínaca", "rele a stykaca", "meracieho transformatora a voltmetra"],
    correctIndex: 1,
    explanation: "Odpínac kombinuje funkcie odpojovaca (viditelna medzera) a vypínaca (moze spínat pod zátažou)."
  },
  {
    id: 567,
    topic: "pristroje",
    question: "Stupeñ krytia IP44 znamená ochranu pred:",
    options: ["prachom a striekajucou vodou", "telesami > 1 mm a striekajucou vodou", "telesami > 12 mm a kvapkajucou vodou", "uplnu ochranu pred prachom a vodou"],
    correctIndex: 1,
    explanation: "IP44: prva cislica 4 = ochrana pred telesami > 1 mm, druha cislica 4 = ochrana pred striekajucou vodou z kazdeho smeru."
  },
  {
    id: 568,
    topic: "pristroje",
    question: "Stupeñ krytia IP68 znamená:",
    options: ["ochranu pred dažďom a striekajucou vodou z kazdeho smeru", "uplnu ochranu pred prachom a trvalym ponorenim do vody", "ochranu pred kvapkajucou vodou a dotykom prstov", "ziadnu ochranu pred vniknuntím vody a pevnych telies"],
    correctIndex: 1,
    explanation: "IP68: cislica 6 = uplna ochrana pred prachom, cislica 8 = ochrana pred trvalym ponorenim do vody (tlak urcí vyrobca)."
  },
  {
    id: 569,
    topic: "pristroje",
    question: "Prepäťova ochrana (zvodzic prepätia) chrání zariadenia pred:",
    options: ["pretazenim pri vysokom odbere prudu", "skratom medzi fazou a nulovym vodicom", "napäťovymi spickami (napr. blesk)", "podpätim pri poklese napatia v sieti"],
    correctIndex: 2,
    explanation: "Prepäťova ochrana (SPD) chrání zariadenia pred krátkodobymi napäťovymi spickami sposobenymi napr. bleskom alebo spínaním v sieti."
  },
  {
    id: 570,
    topic: "pristroje",
    question: "Istic s charakteristikou D je vhodny pre:",
    options: ["bytove rozvody a zasuvkove obvody pre domacnosti", "osvetlenie a svetelne okruhy s nizkou indukciou", "velmi induktivne zataze (velke motory, transformatory)", "pocitacove siete a komunikacne obvody v budovach"],
    correctIndex: 2,
    explanation: "Istic D (10-20 nasobok In) je urceny pre velmi induktivne zataze s vysokymi zapínacimi prudmi, ako su velke motory a transformatory."
  },
  {
    id: 571,
    topic: "pristroje",
    question: "Tepelna spoust istica chrání pred:",
    options: ["skratom", "pretazením", "prepätim", "podpätim"],
    correctIndex: 1,
    explanation: "Tepelna spoust (bimetalovy pasik) istica reaguje na dlhodobe pretaženie - ohreva sa prechodom prudu a po urcitom case vypne istic."
  },
  {
    id: 572,
    topic: "pristroje",
    question: "Elektromagneticka spoust istica chrání pred:",
    options: ["pretazením", "skratom", "prepätim", "vypadkom fazy"],
    correctIndex: 1,
    explanation: "Elektromagneticka spoust reaguje okamzite na velky skratovy prud a vypne istic v radove milisekund."
  },
  {
    id: 573,
    topic: "pristroje",
    question: "Prudovy chranic s menovitym zvyskovym prudom 300 mA sluzi na:",
    options: ["ochranu osob", "ochranu pred poziarom", "ochranu elektroniky", "ochranu pred prepätim"],
    correctIndex: 1,
    explanation: "Prudovy chranic 300 mA sa pouziva na ochranu pred poziarom (detekcí zvyskoveho prudu, ktory moze sposobit prehriatie a poziar). Na ochranu osob sa pouziva 30 mA."
  },
  {
    id: 574,
    topic: "pristroje",
    question: "Hlavny istic v bytovom rozvadzaci je typicky:",
    options: ["jednopolovy", "dvojpolovy", "trojpolovy", "štvorpolovy"],
    correctIndex: 1,
    explanation: "V jednofazovom bytovom rozvode sa pouziva dvojpolovy hlavny istic, ktory odpojí fazu aj nulovy vodic sucasne."
  },
  {
    id: 575,
    topic: "pristroje",
    question: "Prva cislica v oznaceni IP urcuje ochranu pred:",
    options: ["vodou a vlhkostou prostredia", "pevnymi telesami a dotykom", "mechanickym narazom a vibráciami", "koroziou a chemickym posobením"],
    correctIndex: 1,
    explanation: "Prva cislica IP kodu urcuje stupeñ ochrany pred vniknuntim pevnych cudzích telies a pred nebezpecnym dotykom. Druha cislica urcuje ochranu pred vodou."
  },
  {
    id: 576,
    topic: "pristroje",
    question: "Iskrova medzera sa pouziva v:",
    options: ["istici na DIN liste", "poistke v rozvádzaci", "prepäťovej ochrane", "prudovom chranici RCD"],
    correctIndex: 2,
    explanation: "Iskrova medzera (spark gap) je jednoducha prepäťova ochrana. Pri prepätí dojde k preskoku iskry cez medzeru, cim sa zvede prepätie do zeme."
  },
  // ===== TRANSFORMATOR (577-596) =====
  {
    id: 577,
    topic: "transformator",
    question: "Transformator pracuje na principe:",
    options: ["termoelektrickeho javu (Seebeckov)", "piezoelektrickeho javu (deformácia)", "elektromagnetickej indukcie", "elektrolýzy (chemická premena)"],
    correctIndex: 2,
    explanation: "Transformator pracuje na principe elektromagnetickej indukcie - striedavy prud v primarnom vinutí vytvara meniace sa magneticke pole, ktore indukuje napätie v sekundarnom vinutí."
  },
  {
    id: 578,
    topic: "transformator",
    question: "Ak ma transformator prevodovy pomer 10:1, ide o:",
    options: ["zvysovací transformator", "znizovací transformator", "oddelovalcí transformator", "autotransformator"],
    correctIndex: 1,
    explanation: "Prevodovy pomer N1/N2 = 10 znamena, ze primarné vinutie ma 10x viac zavitov. Sekundarne napatí je 10x nizsie - ide o znizovací transformator."
  },
  {
    id: 579,
    topic: "transformator",
    question: "Transformator s 500 zavitmi na primarnej strane a 50 závitmi na sekundarnej strane pri vstupnom napati 230 V dava na vystupe:",
    options: ["23 V", "2300 V", "115 V", "46 V"],
    correctIndex: 0,
    explanation: "U2 = U1 * N2/N1 = 230 * 50/500 = 230 * 0,1 = 23 V."
  },
  {
    id: 580,
    topic: "transformator",
    question: "Straty v jadre transformatora su sposobene:",
    options: ["odporom vinutia (Joulove straty)", "hysterezou a vírívými prudmi", "mechanickym treníím rotacnych castí", "odporom vzduchových medzier v jadre"],
    correctIndex: 1,
    explanation: "Straty v jadre (straty v zeleze) su sposobene magnetickou hysterezou a vírívými (Foucaultovymi) prudmi v feromagnetickom jadre."
  },
  {
    id: 581,
    topic: "transformator",
    question: "Straty v medi transformatora su sposobene:",
    options: ["magnetickou hysterezou v jadre", "vírivými prudmi v jadre transformatora", "odporom vinutia (Joulove teplo)", "rozptylovym tokom mimo hlavneho jadra"],
    correctIndex: 2,
    explanation: "Straty v medi (straty vo vinutí) su Joulove straty sposobene prechodom prudu cez odpor vodicov vinutia: P = I^2 * R."
  },
  {
    id: 582,
    topic: "transformator",
    question: "Meranie naprazdno transformatora sluzi na urcenie:",
    options: ["strat v medi", "strat v jadre", "skratoveho napatia", "prevodoveho pomeru a ucinnosti"],
    correctIndex: 1,
    explanation: "Pri meraní naprazdno (sekundar je rozpojeny) transformator odoberá len magnetizacny prud. Meraju sa straty v jadre (v zeleze)."
  },
  {
    id: 583,
    topic: "transformator",
    question: "Meranie nakratko transformatora sluzi na urcenie:",
    options: ["strat v jadre (v zeleze)", "strat v medi a skratoveho napatia", "prevodoveho pomeru vinutí", "magnetizacneho prudu naprazdno"],
    correctIndex: 1,
    explanation: "Pri meraní nakratko (sekundar je skratovany) sa na primar privadza znizene napätie. Meraju sa straty v medi a skratove napätie."
  },
  {
    id: 584,
    topic: "transformator",
    question: "Autotransformator sa od klasickeho transformatora lisi tym, ze:",
    options: ["nema jadro", "ma galvanicky oddelene vinutia", "ma spolocne primarné a sekundarne vinutie", "pracuje len na jednosmerny prud"],
    correctIndex: 2,
    explanation: "Autotransformator ma len jedno vinutie, z ktoreho sa cast pouziva ako primarne a cast ako sekundarne. Vinutia nie su galvanicky oddelene."
  },
  {
    id: 585,
    topic: "transformator",
    question: "Meracíe transformatory sa pouzivaju na:",
    options: ["zvysenie vykonu", "znizenie strat", "bezpecne meranie vysokych napati a prudov", "regulaciu otacok motora"],
    correctIndex: 2,
    explanation: "Meracíe transformatory (napäťove a prudove) umozñuju bezpecne meranie vysokych napati a prudov ich transformovanim na nizsie, bezpecne hodnoty."
  },
  {
    id: 586,
    topic: "transformator",
    question: "Ucinnost velkeho siloveho transformatora je typicky:",
    options: ["50-60 %", "70-80 %", "85-90 %", "95-99 %"],
    correctIndex: 3,
    explanation: "Velke silove transformatory maju velmi vysoku ucinnost, typicky 95-99 %, pretoze nemaju rotujuce casti a straty su pomerne male."
  },
  {
    id: 587,
    topic: "transformator",
    question: "Transformator moze pracovat na:",
    options: ["jednosmerny prud", "striedavy prud", "jednosmerny aj striedavy prud", "len na trojfazovy prud"],
    correctIndex: 1,
    explanation: "Transformator pracuje len na striedavy prud, pretoze potrebuje meniace sa magneticke pole pre elektromagneticku indukciu. Jednosmerny prud by sposobil len pociatocny prud a nasytenie jadra."
  },
  {
    id: 588,
    topic: "transformator",
    question: "Ak transformator zvysuje napatíe, potom prud na sekundarnej strane:",
    options: ["sa tiez zvysi", "sa znizi", "zostane rovnaky", "sa zdvojnasobí"],
    correctIndex: 1,
    explanation: "Pri idealnom transformatore plati: P1 = P2, teda U1*I1 = U2*I2. Ak U2 > U1, potom I2 < I1. Vykon sa zachovava, napatíe a prud su nepriamo umerne."
  },
  {
    id: 589,
    topic: "transformator",
    question: "Skratove napatíe transformatora je typicky:",
    options: ["0,5-1 %", "2-4 %", "4-12 %", "20-30 %"],
    correctIndex: 2,
    explanation: "Skratove napatíe uk je typicky 4-12 % menoviteho napatia. Je to napatíe na primari, pri ktorom sekundarom (skratovanym) preteka menovity prud."
  },
  {
    id: 590,
    topic: "transformator",
    question: "Jadro transformatora je vyrobene z:",
    options: ["masivneho zeleza", "plechov kremíkovej ocele izolovaných lakom", "medi", "hliníka"],
    correctIndex: 1,
    explanation: "Jadro transformatora je zlozene z tenkych plechov kremíkovej ocele, ktore su navzajom izolovane lakom, aby sa znizili vírive prudy."
  },
  {
    id: 591,
    topic: "transformator",
    question: "Olejove chladenie transformatora sa pouziva hlavne u:",
    options: ["malych transformatorov do 100 VA", "strednych transformatorov do 10 kVA", "velkych silovych transformatorov", "meracich transformatorov"],
    correctIndex: 2,
    explanation: "Olejove chladenie sa pouziva u velkych silovych transformatorov, kde olej sluzi ako chladiace medium aj ako izolant."
  },
  {
    id: 592,
    topic: "transformator",
    question: "Transformator s prevodom 1:1 sa nazyva:",
    options: ["zvysovací", "znizovací", "oddelovalcí (izolacny)", "regulacny"],
    correctIndex: 2,
    explanation: "Transformator s prevodom 1:1 je oddelovalcí (izolacny) transformator. Nemeni napatíe, ale galvanicky oddeluje primar od sekundaru pre bezpecnost."
  },
  {
    id: 593,
    topic: "transformator",
    question: "Prudovy merací transformator ma sekundar vzdy:",
    options: ["naprazdno", "zaťazeny meracim pristrojom", "skratovany ked nie je pripojeny pristroj", "pripojeny na zem"],
    correctIndex: 2,
    explanation: "Sekundar prudoveho meracieho transformatora nesmie byt nikdy rozpojeny (naprazdno), pretoze by na nom vzniklo nebezpecne vysoke napatíe. Ked nie je pripojeny pristroj, musi byt skratovany."
  },
  {
    id: 594,
    topic: "transformator",
    question: "Prevodovy pomer transformatora p = N1/N2 = 2. Ak je vstupne napatíe 230 V, vystupne napatíe je:",
    options: ["460 V", "115 V", "230 V", "57,5 V"],
    correctIndex: 1,
    explanation: "U2 = U1 / p = 230 / 2 = 115 V. Pri prevodovom pomere 2 je vystupne napatíe polovicne."
  },
  {
    id: 595,
    topic: "transformator",
    question: "Magnetizacny prud transformatora pri chode naprazdno je typicky:",
    options: ["0,5-5 % menoviteho prudu", "20-30 % menoviteho prudu", "50 % menoviteho prudu", "rovnaky ako menovity prud"],
    correctIndex: 0,
    explanation: "Magnetizacny prud pri chode naprazdno je typicky 0,5-5 % menoviteho prudu. Sluzi na vytvorenie magnetickeho toku v jadre."
  },
  {
    id: 596,
    topic: "transformator",
    question: "Trojfazovy transformator moze byt zapojeny v schéme:",
    options: ["len hviezda-hviezda", "len trojuholník-trojuholník", "hviezda alebo trojuholník na kazdej strane", "len hviezda-trojuholník"],
    correctIndex: 2,
    explanation: "Trojfazovy transformator moze byt zapojeny v roznych kombinaciach: Yy, Yd, Dy, Dd (hviezda alebo trojuholník nezavisle na kazdej strane)."
  },
  // ===== ASYNCHRONNY (597-615) =====
  {
    id: 597,
    topic: "asynchronny",
    question: "Synchronne otacky asynchronneho motora so 4 polmi pri frekvencii 50 Hz su:",
    options: ["3000 ot/min", "1500 ot/min", "1000 ot/min", "750 ot/min"],
    correctIndex: 1,
    explanation: "n1 = 60*f/p = 60*50/2 = 1500 ot/min. Pocet polov je 4, ale pocet parov polov p = 4/2 = 2."
  },
  {
    id: 598,
    topic: "asynchronny",
    question: "Sklz asynchronneho motora je dany vzorcom:",
    options: ["s = n/n1", "s = (n1 - n)/n1", "s = n1/n", "s = (n - n1)/n"],
    correctIndex: 1,
    explanation: "Sklz s = (n1 - n)/n1, kde n1 su synchronne otacky a n su skutocne otacky rotora. Sklz vyjadruje relativne zaostávanie rotora za tocivym polom."
  },
  {
    id: 599,
    topic: "asynchronny",
    question: "Asynchronny motor so synchronnymi otackami 1500 ot/min a sklzom 4 % sa toci otackami:",
    options: ["1440 ot/min", "1460 ot/min", "1500 ot/min", "1560 ot/min"],
    correctIndex: 0,
    explanation: "n = n1 * (1 - s) = 1500 * (1 - 0,04) = 1500 * 0,96 = 1440 ot/min."
  },
  {
    id: 600,
    topic: "asynchronny",
    question: "Tocive magneticke pole trojfazoveho motora sa vytvorí, ked su civky posunuté o:",
    options: ["90 stupñov", "120 stupñov", "180 stupñov", "360 stupñov"],
    correctIndex: 1,
    explanation: "V trojfázovom motore su civky posunuté o 120 stupñov (trojfázová sustava) a napajane proudmi s fazovym posunom 120 stupñov, co vytvorí tocive magneticke pole."
  },
  {
    id: 601,
    topic: "asynchronny",
    question: "Klietkovy rotor asynchronneho motora sa sklada z:",
    options: ["vinutia z izolovaného drotu", "hliníkovych alebo medených tycí skratovanych na oboch koncoch", "permanentnych magnetov", "komutátora a kief"],
    correctIndex: 1,
    explanation: "Klietkovy rotor obsahuje hliníkove alebo medené tyce ulozene v drázkach rotora, ktore su na oboch koncoch spojene (skratovane) kruhmi - tvoria tak 'klietku'."
  },
  {
    id: 602,
    topic: "asynchronny",
    question: "Krúzkovy rotor asynchronneho motora sa od klietkového lisi tym, ze:",
    options: ["nema vinutie", "ma vinutie vyvedene na klzne kruzky", "pouziva permanentne magnety", "nema zelezne jadro"],
    correctIndex: 1,
    explanation: "Krúzkovy (fazovy) rotor ma trojfázové vinutie vyvedene cez klzne krúzky a kefy, co umozñuje pripojenie externeho odporu pre regulaciu a zlepsenie rozbehu."
  },
  {
    id: 603,
    topic: "asynchronny",
    question: "Rozbeh hviezda-trojuholník znizuje zaberovy prud na:",
    options: ["polovicu", "tretinu", "stvrtinu", "pätinu"],
    correctIndex: 1,
    explanation: "Pri rozbehu hviezda-trojuholník sa motor najprv zapojí do hviezdy (napatíe na vinutí je sqrt(3)-krat nizsie), cim sa zaberovy prud znízi na tretinu oproti priamemu rozbehu v trojuholníku."
  },
  {
    id: 604,
    topic: "asynchronny",
    question: "Frekvencny menic reguluje otacky asynchronneho motora zmenou:",
    options: ["napatia", "frekvencie a napatia", "odporu rotora", "poctu polov"],
    correctIndex: 1,
    explanation: "Frekvencny menic reguluje otacky zmenou frekvencie a sucasne aj napatia (pre zachovanie U/f = konst.), co umozñuje plynulu regulaciu otacok."
  },
  {
    id: 605,
    topic: "asynchronny",
    question: "Softstarter je zariadenie, ktore pri rozbehu motora:",
    options: ["mení frekvenciu", "postupne zvysuje napatíe", "pripajá rozbehove kondenzátory", "prepína hviezda-trojuholník"],
    correctIndex: 1,
    explanation: "Softstarter postupne zvysuje napatíe pri rozbehu motora pomocou tyristorov, cim obmedzuje zaberovy prud a mechanicke razy."
  },
  {
    id: 606,
    topic: "asynchronny",
    question: "Menovity sklz asynchronneho motora je typicky:",
    options: ["0-0,5 %", "2-5 %", "15-20 %", "50 %"],
    correctIndex: 1,
    explanation: "Menovity sklz bežného asynchronneho motora je typicky 2-5 %. Male motory maju vyssí sklz, velke motory nizsí."
  },
  {
    id: 607,
    topic: "asynchronny",
    question: "Ak je sklz asynchronneho motora 0, motor:",
    options: ["stojí", "toci sa synchronnymi otackami a nevyvíja moment", "toci sa maximalnymi otackami", "je v skrate"],
    correctIndex: 1,
    explanation: "Pri sklze 0 sa rotor toci synchronnymi otackami, cize sa nehybe vzhliadom na tocive pole. Nedochádza k indukcii napätia v rotore, nevyvíja sa moment."
  },
  {
    id: 608,
    topic: "asynchronny",
    question: "Synchronne otacky motora s 2 polmi pri 50 Hz su:",
    options: ["1500 ot/min", "3000 ot/min", "750 ot/min", "6000 ot/min"],
    correctIndex: 1,
    explanation: "n1 = 60*f/p = 60*50/1 = 3000 ot/min. Motor s 2 polmi ma 1 par polov (p=1)."
  },
  {
    id: 609,
    topic: "asynchronny",
    question: "Zaberovy prud asynchronneho motora pri priamom pripojení na sieť je typicky:",
    options: ["rovnaky ako menovity", "2-3 nasobok menoviteho", "5-8 nasobok menoviteho", "0,5 nasobok menoviteho"],
    correctIndex: 2,
    explanation: "Zaberovy prud pri priamom pripojení (DOL) je typicky 5-8 nasobok menoviteho prudu motora."
  },
  {
    id: 610,
    topic: "asynchronny",
    question: "Momentova charakteristika asynchronneho motora ma maximum (zaberovy moment) pri sklze:",
    options: ["0", "menovitom sklze", "kritickom sklze (sk)", "1"],
    correctIndex: 2,
    explanation: "Maximum momentu (zaberovy moment) sa dosiahne pri kritickom sklze sk. Za týmto bodom moment klesa."
  },
  {
    id: 611,
    topic: "asynchronny",
    question: "Smer otacania trojfazoveho asynchronneho motora sa zmení:",
    options: ["zmenou velkosti napatia", "zámenou dvoch faz", "pripojením kondenzatora", "znízením frekvencie"],
    correctIndex: 1,
    explanation: "Smer otacania trojfázového asynchronneho motora sa zmeni zámenou lubovolných dvoch fáz (napr. L1 a L2), cim sa zmeni smer tociveho magnetickeho pola."
  },
  {
    id: 612,
    topic: "asynchronny",
    question: "Jednofazovy asynchronny motor potrebuje na rozbeh:",
    options: ["frekvencny menic", "rozbehovy kondenzator alebo pomocne vinutie", "komutátor", "klzne krúzky"],
    correctIndex: 1,
    explanation: "Jednofázový asynchronny motor sám od seba nevytvorí tocive pole. Na rozbeh potrebuje fázovo posunuty prud v pomocnom vinutí, co sa dosiahne kondenzátorom."
  },
  {
    id: 613,
    topic: "asynchronny",
    question: "Brzdenie protiprúdom asynchronneho motora spocíva v:",
    options: ["odpojení od siete", "zámene dvoch fáz za chodu", "pripojení jednosmerneho prudu", "znízení napatía"],
    correctIndex: 1,
    explanation: "Pri brzdení protiprúdom sa za chodu motora zamenia dve fázy, cím tocive pole zmení smer a pusobí brzdiacim momentom na rotor."
  },
  {
    id: 614,
    topic: "asynchronny",
    question: "Synchronne otacky motora s 6 polmi pri 50 Hz su:",
    options: ["3000 ot/min", "1500 ot/min", "1000 ot/min", "500 ot/min"],
    correctIndex: 2,
    explanation: "n1 = 60*f/p = 60*50/3 = 1000 ot/min. Motor s 6 polmi ma 3 páry polov (p=3)."
  },
  {
    id: 615,
    topic: "asynchronny",
    question: "Energeticka trieda ucinnosti motora IE3 znamená:",
    options: ["standardna ucinnost", "zvysena ucinnost", "vysoká ucinnost (Premium)", "super-premiova ucinnost"],
    correctIndex: 2,
    explanation: "IE3 je trieda vysokej ucinnosti (Premium Efficiency). Stupnica je: IE1 (standardna), IE2 (zvysena), IE3 (vysoká/Premium), IE4 (super-premiova)."
  },
  // ===== JEDNOSMERNY (616-634) =====
  {
    id: 616,
    topic: "jednosmerny",
    question: "Komutátor v jednosmernom motore sluzi na:",
    options: ["regulaciu otacok", "chladenie", "premenu striedaveho prudu na jednosmerny v kotvovom vinutí", "meranie otacok"],
    correctIndex: 2,
    explanation: "Komutátor (zberác) v jednosmernom motore zabezpecuje mechanicke prepínanie smeru prudu vo vinutí kotvy, aby sa zachoval staly smer otácania."
  },
  {
    id: 617,
    topic: "jednosmerny",
    question: "Jednosmerny motor so seriovym budením ma charakteristiku:",
    options: ["konstantne otacky pri zmene zataze", "otacky klésaju so zatazou", "otacky rastu so zatazou", "otacky su nezavisle od zataze"],
    correctIndex: 1,
    explanation: "Seriovy motor ma mäkku (klesajucu) otáckovu charakteristiku - pri zvysení zataze otácky klésaju. Nesmie bežať naprázdno (hrozí roztocenie)."
  },
  {
    id: 618,
    topic: "jednosmerny",
    question: "Jednosmerny motor s bocníkovym budením ma charakteristiku:",
    options: ["výrazne klesajuce otácky so záťažou", "priblizne konstantne otácky", "rastuce otácky so záťažou", "nulove otácky pri záťaži"],
    correctIndex: 1,
    explanation: "Bocníkovy (paralelny) motor ma tvrdú otáčkovú charakteristiku - otácky su priblizne konstantne nezávisle od záťaže."
  },
  {
    id: 619,
    topic: "jednosmerny",
    question: "Proti-EMN (protielektromotorické napatíe) v jednosmernom motore:",
    options: ["pomáha roztoceniu motora", "posobí proti napájaciemu napatiu a obmedzuje prud", "zvysuje prud vo vinutí", "nemá ziaden vplyv na funkciu"],
    correctIndex: 1,
    explanation: "Proti-EMN sa indukuje vo vinutí kotvy otácaním v magnetickom poli. Posobí proti napájaciemu napatiu a obmedzuje prud v kotvovom vinutí."
  },
  {
    id: 620,
    topic: "jednosmerny",
    question: "Záberovy prud jednosmerneho motora je vysoký, pretoze:",
    options: ["otácky su vysoké", "proti-EMN je maximálne", "proti-EMN je nulové (motor stojí)", "budenie je slabé"],
    correctIndex: 2,
    explanation: "Pri rozbehu motor stojí, takze proti-EMN = 0. Prud je obmedzeny len odporom vinutia: Iz = U/Ra, co je mnohonásobok menovitého prudu."
  },
  {
    id: 621,
    topic: "jednosmerny",
    question: "Otácky jednosmerneho motora mozno regulovat:",
    options: ["len zmenou napatia", "len zmenou budenia", "zmenou napatia, budenia alebo odporu v kotve", "len zmenou odporu kotvy"],
    correctIndex: 2,
    explanation: "Otácky DC motora mozno regulovat: 1) zmenou napajacieho napatia, 2) zmenou budiaceho prudu (magnetického toku), 3) zaradením odporu do obvodu kotvy."
  },
  {
    id: 622,
    topic: "jednosmerny",
    question: "Jednosmerny generator (dynamo) premieña:",
    options: ["elektrickou energiu na mechanickú", "mechanickú energiu na elektrickú", "tepelnú energiu na elektrická", "svetelnú energiu na elektrickú"],
    correctIndex: 1,
    explanation: "DC generátor (dynamo) premieña mechanickú energiu (otácaníe hriadeľa) na jednosmernú elektrickú energiu pomocou elektromagnetickej indukcie a komutátora."
  },
  {
    id: 623,
    topic: "jednosmerny",
    question: "BLDC motor je:",
    options: ["jednosmerny motor s komutátorom", "bezkefkový jednosmerny motor", "striedavy motor", "krokový motor"],
    correctIndex: 1,
    explanation: "BLDC (Brushless DC) motor je bezkefkový jednosmerny motor. Namiesto mechanického komutátora pouzíva elektronickú komutáciu."
  },
  {
    id: 624,
    topic: "jednosmerny",
    question: "Motor so zmiesanym budením kombinuje:",
    options: ["sériové a bocníkové budenie", "cudzie a sériové budenie", "permanentné magnety a cievky", "dva rotory"],
    correctIndex: 0,
    explanation: "Motor so zmiesanym (kompoundným) budením má sériové aj bocníkové (paralelné) budiace vinutie, cím kombinuje vlastnosti oboch typov."
  },
  {
    id: 625,
    topic: "jednosmerny",
    question: "Cudzie budenie jednosmerneho motora znamená, ze:",
    options: ["budiace vinutie je napájané z rovnakeho zdroja ako kotva", "budiace vinutie je napájané z nezávislého zdroja", "motor nemá budiace vinutie", "motor pouzíva permanentné magnety"],
    correctIndex: 1,
    explanation: "Pri cudzom budení je budiace vinutie napájané z nezávislého (cudzieho) zdroja, co umozñuje nezávislú reguláciu magnetického toku."
  },
  {
    id: 626,
    topic: "jednosmerny",
    question: "Sériový DC motor sa pouzíva predovsetkym v:",
    options: ["ventilátoroch", "cerpadlách", "elektrických trakciách (vlaky, tramvaje)", "presných pohonoch"],
    correctIndex: 2,
    explanation: "Sériový motor má vysoký záberový moment, preto sa pouzíva v elektrických trakciách (vlaky, tramvaje, zdvíhadlá), kde je potrebný veľký moment pri rozbehu."
  },
  {
    id: 627,
    topic: "jednosmerny",
    question: "Preco sa sériový DC motor nesmie prevádzkovat naprázdno?",
    options: ["prehrieva sa", "hrozí roztocenie na nebezpecné otácky", "strácí magnetizmus", "poruší sa komutátor"],
    correctIndex: 1,
    explanation: "Pri sériovom motore naprázdno tecie malý prud, magnetický tok je slabý a motor sa roztocí na veľmi vysoké (nebezpecné) otácky."
  },
  {
    id: 628,
    topic: "jednosmerny",
    question: "Bocníkovy DC motor s napájaním 200 V, odporom kotvy 0,5 ohm a prúdom kotvy 20 A má proti-EMN:",
    options: ["190 V", "200 V", "180 V", "210 V"],
    correctIndex: 0,
    explanation: "U = Ui + Ia*Ra, teda Ui = U - Ia*Ra = 200 - 20*0,5 = 200 - 10 = 190 V."
  },
  {
    id: 629,
    topic: "jednosmerny",
    question: "Kotva jednosmerneho motora sa skladá z:",
    options: ["statora s vinutím", "rotora s vinutím a komutátorom", "permanentnych magnetov", "transformátorového jadra"],
    correctIndex: 1,
    explanation: "Kotva jednosmerného motora je rotor, ktorý obsahuje vinutie ulozené v drázkach a komutátor na mechanickú komutáciu prúdu."
  },
  {
    id: 630,
    topic: "jednosmerny",
    question: "PWM regulácia jednosmerneho motora mení:",
    options: ["frekvenciu napájania", "striedu impulzov napájacieho napatia", "odpor kotvy", "pocet pólov"],
    correctIndex: 1,
    explanation: "PWM (pulzne-sírková modulácia) mení striedu (pomer doby zapnutia a periódy) napájacieho napatia, cím sa mení efektívne napatíe na motore a teda aj otácky."
  },
  {
    id: 631,
    topic: "jednosmerny",
    question: "Výhoda BLDC motora oproti klasickemu DC motoru s kefkami je:",
    options: ["jednoduchsie riadenie", "nizsía cena", "ziadne opotrebenie kefiek, vyssía zivotnosť", "vyssí záberový moment"],
    correctIndex: 2,
    explanation: "BLDC motor nemá mechanické kefy a komutátor, takze nedochádza k ich opotrebeniu. Má vyssiu zivotnost, nizsí sum a nevyzaduje údrzbu kefiek."
  },
  {
    id: 632,
    topic: "jednosmerny",
    question: "Jednosmerny motor s permanentnymi magnetmi má:",
    options: ["budiace vinutie na statore", "permanentné magnety na statore", "permanentné magnety na rotore", "budiace vinutie na rotore"],
    correctIndex: 1,
    explanation: "DC motor s permanentnymi magnetmi má na statore permanentné magnety, ktoré vytvárajú stále magnetické pole. Vinutie je na rotore (kotve)."
  },
  {
    id: 633,
    topic: "jednosmerny",
    question: "Záberový moment jednosmerneho motora so sériovym budením je:",
    options: ["nizký", "stredný", "velmi vysoký", "nulový"],
    correctIndex: 2,
    explanation: "Sériový motor má veľmi vysoký záberový moment, pretoze pri rozbehu tecie veľký prúd cez sériové budiace vinutie, co vytvára silné magnetické pole."
  },
  {
    id: 634,
    topic: "jednosmerny",
    question: "Otácky jednosmerneho motora su priamo umerne:",
    options: ["záťažovemu momentu", "napájaciemu napatiu", "odporu kotvy", "poctu lameliek komutátora"],
    correctIndex: 1,
    explanation: "Otácky DC motora: n = (U - Ia*Ra) / (k*Phi). Otácky su priamo umerne napájaciemu napatiu a nepriamo umerne magnetickému toku."
  },
  // ===== SYNCHRONNY (635-653) =====
  {
    id: 635,
    topic: "synchronny",
    question: "Synchronný stroj sa toci otáckami:",
    options: ["nizsimi ako synchronné", "vyššími ako synchronné", "presne synchronnymi n = 60f/p", "premenlivymi"],
    correctIndex: 2,
    explanation: "Synchronný stroj sa tocí presne synchronnými otáckami n = 60f/p, kde f je frekvencia siete a p je pocet párov pólov. Rotor sa tocí synchronne s tocivym poľom."
  },
  {
    id: 636,
    topic: "synchronny",
    question: "Alternátor je:",
    options: ["jednosmerný generátor", "synchronný generátor striedavého prúdu", "asynchronný generátor", "jednosmerný motor"],
    correctIndex: 1,
    explanation: "Alternátor je synchronný generátor, ktorý premieña mechanickú energiu na striedavú elektrickú energiu. Pouzíva sa v elektrárñach."
  },
  {
    id: 637,
    topic: "synchronny",
    question: "Pred pripojením synchronného generátora k sieti je potrebné splniť podmienky synchronizácie, a to:",
    options: ["len rovnaké napatíe", "rovnaké napatíe a frekvenciu", "rovnaké napatíe, frekvenciu, fázový uhol a sled fáz", "len rovnaký výkon"],
    correctIndex: 2,
    explanation: "Podmienky synchronizácie: rovnaké napatíe, frekvencia, fázový uhol (fázová zhoda) a sled fáz. Nesplnenie moze sposobit veľké vyrovnávacie prúdy."
  },
  {
    id: 638,
    topic: "synchronny",
    question: "Synchronný kompenzátor je synchronný motor pracujúci:",
    options: ["s mechanickou záťažou", "naprázdno na reguláciu ucinníka (cos phi)", "ako generátor", "v skrate"],
    correctIndex: 1,
    explanation: "Synchronný kompenzátor je synchronný motor pracujúci naprázdno (bez záťaže na hriadeli). Reguláciou budenia sa mení jeho ucinník, cím kompenzuje jalový výkon v sieti."
  },
  {
    id: 639,
    topic: "synchronny",
    question: "V-krivky synchronného motora zobrazujú závislosť:",
    options: ["otácok od záťaze", "prúdu statora od budiaceho prúdu", "napatia od frekvencie", "momentu od otácok"],
    correctIndex: 1,
    explanation: "V-krivky synchronného motora zobrazujú závislosť prúdu statora (Ia) od budiaceho prúdu (If) pri konštantnej záťaži. Tvar pripomína písmeno V."
  },
  {
    id: 640,
    topic: "synchronny",
    question: "Prebudeny synchronný motor pracuje s ucinníkom:",
    options: ["induktívnym (cos phi oneskorený)", "kapacitným (cos phi predbiehavým)", "jednotkovým (cos phi = 1)", "nulovým"],
    correctIndex: 1,
    explanation: "Prebudený synchronný motor (zvýsený budiaci prúd) odoberá predbiehavý (kapacitný) prúd. Tým kompenzuje induktívny jalový výkon v sieti."
  },
  {
    id: 641,
    topic: "synchronny",
    question: "Podbudený synchronný motor pracuje s ucinníkom:",
    options: ["kapacitným", "induktívnym", "jednotkovým", "záporným"],
    correctIndex: 1,
    explanation: "Podbudený synchronný motor (znízený budiaci prúd) odoberá oneskorený (induktívny) prúd, podobne ako asynchronný motor."
  },
  {
    id: 642,
    topic: "synchronny",
    question: "Synchronny motor s permanentnymi magnetmi (PMSM) sa pouzíva v:",
    options: ["elektrárñach", "elektromobiloch a servopohonoch", "výťahoch s priamym pohonomom", "osvetlení"],
    correctIndex: 1,
    explanation: "PMSM motory sa vdaka vysokej ucinnosti, kompaktnosti a presnému riadeniu pouzívaju v elektromobiloch, servopohonoch a robotike."
  },
  {
    id: 643,
    topic: "synchronny",
    question: "Rotor synchronného stroja moze byt:",
    options: ["len hladký (valcový)", "len s vyjadrenými pólmi", "hladký alebo s vyjadrenými pólmi", "len klietkový"],
    correctIndex: 2,
    explanation: "Rotor synchronného stroja moze byt hladký (valcový - pre vysokootáckové stroje, turboalternátory) alebo s vyjadrenými pólmi (pre pomalobézné stroje, vodné elektrárne)."
  },
  {
    id: 644,
    topic: "synchronny",
    question: "Synchronný motor nie je schopný sám sa rozbehnuť, pretoze:",
    options: ["nemá vinutie", "rotor nemá cas sa uchytiť za rýchlo rotujuce tocive pole", "nemá budiace vinutie", "nemá stator"],
    correctIndex: 1,
    explanation: "Pri pripojení na sieť sa tocivé pole okamzite tocí synchronnými otáckami. Rotor kvoli zotrvacnosti nestihne nasledovat pole a nevytvorí sa uťahovací moment."
  },
  {
    id: 645,
    topic: "synchronny",
    question: "Rozbeh synchronného motora sa najcastejsie realizuje:",
    options: ["priamym pripojením na sieť", "pomocou rozbehovej klietky na rotore (asynchronny rozbeh)", "rucným roztocením", "jednosmerným prúdom"],
    correctIndex: 1,
    explanation: "Synchronný motor sa najcastejsie rozbiehá pomocou rozbehovej klietky na rotore. Motor sa rozbehne ako asynchronný a po dosiahnutí takmer synchronnych otácok sa zapne budenie."
  },
  {
    id: 646,
    topic: "synchronny",
    question: "Alternátor v elektrárni so 4 pólmi musí mať otácky pre frekvenciu 50 Hz:",
    options: ["3000 ot/min", "1500 ot/min", "1000 ot/min", "750 ot/min"],
    correctIndex: 1,
    explanation: "n = 60*f/p = 60*50/2 = 1500 ot/min. So 4 pólmi (2 páry pólov) musí mať alternátor 1500 ot/min."
  },
  {
    id: 647,
    topic: "synchronny",
    question: "Turboalternátor v tepelnej elektrárni má typicky:",
    options: ["2 póly a 3000 ot/min", "mnoho pólov a nízke otácky", "permanentné magnety", "komutátor"],
    correctIndex: 0,
    explanation: "Turboalternátor poháñaný parnou turbínou má typicky 2 póly (1 pár) a tocí sa 3000 ot/min pri 50 Hz. Má hladký (valcový) rotor."
  },
  {
    id: 648,
    topic: "synchronny",
    question: "Hydroalternátor vo vodnej elektrárni má typicky:",
    options: ["2 póly a vysoké otácky", "veľký pocet pólov a nízke otácky", "permanentné magnety", "klietkový rotor"],
    correctIndex: 1,
    explanation: "Hydroalternátor poháñaný vodnou turbínou má veľký pocet pólov (napr. 40-80) a nízke otácky (napr. 75-500 ot/min). Má rotor s vyjadrenými pólmi."
  },
  {
    id: 649,
    topic: "synchronny",
    question: "Ak synchronný motor stratí budenie za chodu:",
    options: ["zastavi sa", "pokracuje synchronne", "prejde do asynchronného chodu", "exploduje"],
    correctIndex: 2,
    explanation: "Ak synchronný motor stratí budenie, prejde do asynchronneho chodu (ak má tlmivé vinutie/rozbehovú klietku). Odoberá väcsí induktívny prúd."
  },
  {
    id: 650,
    topic: "synchronny",
    question: "Záťazový uhol synchronného motora je uhol medzi:",
    options: ["napätím a prúdom", "rotorom a tocivým poľom statora", "dvoma fázami", "napätím a magnetickým tokom"],
    correctIndex: 1,
    explanation: "Záťazový uhol (delta) je uhol medzi osou pólu rotora a osou tocivého poľa statora. Rastie so záťažou. Pri prekrocení kritického uhla motor vypadne zo synchronizmu."
  },
  {
    id: 651,
    topic: "synchronny",
    question: "Maximálny moment synchronného motora sa dosiahne pri záťažovom uhle:",
    options: ["0 stupñov", "45 stupñov", "90 stupñov", "180 stupñov"],
    correctIndex: 2,
    explanation: "Maximálny (prehazovací) moment synchronného motora s hladkým rotorom sa dosiahne pri záťažovom uhle 90 stupñov. Pri vacsím uhle motor vypadne zo synchronizmu."
  },
  {
    id: 652,
    topic: "synchronny",
    question: "Budenie synchronneho stroja sa typicky realizuje:",
    options: ["z bateríe", "jednosmernym prudom cez klzne kruzky alebo bezkontaktne", "striedavym prudom", "permanentnymi magnetmi na statore"],
    correctIndex: 1,
    explanation: "Budenie rotora synchronného stroja sa realizuje jednosmerným prúdom, privádzaným cez klzné krúzky a kefy, alebo bezkontaktne pomocou rotujúceho budiča."
  },
  {
    id: 653,
    topic: "synchronny",
    question: "Synchronný motor pri jednotkovom ucinníku (cos phi = 1):",
    options: ["odoberá len cinný prúd", "odoberá len jalový prúd", "dodáva jalový výkon do siete", "odoberá maximálny prúd"],
    correctIndex: 0,
    explanation: "Pri cos phi = 1 synchronný motor odoberá len cinný (aktívny) prúd. Jalový prúd je nulový - motor neprodukuje ani nespotrebúva jalový výkon."
  },
  // ===== MERANIE (654-669) =====
  {
    id: 654,
    topic: "meranie",
    question: "Ampérmeter sa do obvodu zapojuje:",
    options: ["paralelne k záťazi", "sériovo do obvodu", "medzi fázu a nulu", "na výstup zdroja"],
    correctIndex: 1,
    explanation: "Ampérmeter sa zapojuje sériovo (do série) s obvodom, ktorým meriame prúd. Musí mať veľmi malý vnútorný odpor, aby neovplyvnil meraný obvod."
  },
  {
    id: 655,
    topic: "meranie",
    question: "Voltmeter sa do obvodu zapojuje:",
    options: ["sériovo", "paralelne k meranému prvku", "do série s ampérmetrom", "namiesto záťaze"],
    correctIndex: 1,
    explanation: "Voltmeter sa zapojuje paralelne k prvku, na ktorom meriame napätie. Musí mať veľmi veľký vnútorný odpor, aby neovplyvnil meraný obvod."
  },
  {
    id: 656,
    topic: "meranie",
    question: "Osciloskop sa pouzíva na:",
    options: ["meranie odporu", "zobrazenie priebehu napatia v case", "meranie teploty", "meranie kapacity"],
    correctIndex: 1,
    explanation: "Osciloskop zobrazuje priebeh napatia v case (casový diagram). Umozñuje meranie amplitúdy, frekvencie, fázového posunu a tvaru signálu."
  },
  {
    id: 657,
    topic: "meranie",
    question: "Bozník sa pouzíva na:",
    options: ["rozšírenie rozsahu voltmetra", "rozsírenie rozsahu ampérmetra", "meranie odporu", "meranie frekvencie"],
    correctIndex: 1,
    explanation: "Bocník (shunt) je malý odpor zapojený paralelne k ampérmetru, ktory odvedie casť meraného prúdu. Tým sa rozsírí rozsah ampérmetra."
  },
  {
    id: 658,
    topic: "meranie",
    question: "Predradník sa pouzíva na:",
    options: ["rozšírenie rozsahu ampérmetra", "rozsírenie rozsahu voltmetra", "meranie výkonu", "meranie odporu"],
    correctIndex: 1,
    explanation: "Predradník je veľký odpor zapojený sériovo s voltmetrom. Znízi prúd prechádzajúci voltmetrom a tým rozsíri jeho merací rozsah."
  },
  {
    id: 659,
    topic: "meranie",
    question: "Trieda presnosti meracieho prístroja 0,5 znamená:",
    options: ["presnosť merania je 0,5 V", "maximálna chyba je 0,5 % z rozsahu", "rozlísenie je 0,5 dieliku", "presnosť je 50 %"],
    correctIndex: 1,
    explanation: "Trieda presnosti 0,5 znamená, ze maximálna mozná chyba merania je 0,5 % z celkového rozsahu prístroja."
  },
  {
    id: 660,
    topic: "meranie",
    question: "Wheatstoneov mostík sa pouzíva na presné meranie:",
    options: ["napatia", "prúdu", "odporu", "frekvencie"],
    correctIndex: 2,
    explanation: "Wheatstoneov mostík je presná metóda merania odporu. Mostík je vyvázený, ked galvanometrom netecie prúd: Rx = R3*R2/R1."
  },
  {
    id: 661,
    topic: "meranie",
    question: "Wattmeter meria:",
    options: ["napatíe", "prúd", "odpor", "cinný výkon"],
    correctIndex: 3,
    explanation: "Wattmeter meria cinný (aktívny) výkon v obvode. Má prúdovú cievku (sériovo) a napäťovú cievku (paralelne)."
  },
  {
    id: 662,
    topic: "meranie",
    question: "Digitálny multimeter oproti analógovému má výhodu:",
    options: ["je lacnejsí", "má vyssiu presnosť a lepsiu citatelnosť", "je odolnejsí", "meria viac velicín"],
    correctIndex: 1,
    explanation: "Digitálny multimeter má vyssiu presnosť, lepsiu citateľnosť (císelný displej), automatický výber rozsahu a mensiu chybu odcítania."
  },
  {
    id: 663,
    topic: "meranie",
    question: "Ohmova metóda merania odporu spocíva v:",
    options: ["porovnávaní s etalónom", "súcasnom meraní napatia a prúdu (R = U/I)", "meraní na mostíku", "meraní casovej konstanty"],
    correctIndex: 1,
    explanation: "Ohmova (nepriama) metóda merania odporu spocíva v súcasnom meraní napatia voltmetrom a prúdu ampérmetrom, pricom R = U/I."
  },
  {
    id: 664,
    topic: "meranie",
    question: "Pri Ohmovej metóde merania malých odporov sa pouzíva zapojenie:",
    options: ["ampérmeter pred voltmetrom (za zdrojom)", "voltmeter pred ampérmetrom", "ampérmeter aj voltmeter paralelne", "len ampérmeter"],
    correctIndex: 0,
    explanation: "Pri meraní malých odporov sa pouzíva zapojenie, kde ampérmeter je sériovo v hlavnom obvode a voltmeter je paralelne priamo k meranému odporu, aby sa minimalizovala chyba."
  },
  {
    id: 665,
    topic: "meranie",
    question: "Klieštovy ampérmeter meria prúd:",
    options: ["len jednosmerný", "len striedavý", "bezkontaktne obopnutím vodica", "len v trojfázovej sústave"],
    correctIndex: 2,
    explanation: "Klieštový ampérmeter meria prúd bezkontaktne - obopne vodic magnetickým obvodom a detekuje magnetické pole vytvorené prúdom. Netreba prerušovať obvod."
  },
  {
    id: 666,
    topic: "meranie",
    question: "Ak voltmeter s rozsahom 10 V a triedou presnosti 1,0 ukazuje 8 V, maximálna absolútna chyba merania je:",
    options: ["0,08 V", "0,1 V", "0,8 V", "1,0 V"],
    correctIndex: 1,
    explanation: "Absolútna chyba = trieda presnosti * rozsah / 100 = 1,0 * 10 / 100 = 0,1 V. Chyba sa pocíta z celého rozsahu, nie z meranej hodnoty."
  },
  {
    id: 667,
    topic: "meranie",
    question: "Merací transformátor prúdu sa v schéme oznacuje:",
    options: ["TP", "TN", "MTP", "PTN"],
    correctIndex: 2,
    explanation: "Merací transformátor prúdu sa oznacuje MTP (merací transformátor prúdu). Merací transformátor napatia sa oznacuje MTN."
  },
  {
    id: 668,
    topic: "meranie",
    question: "Na meranie izolacného odporu sa pouzíva:",
    options: ["bezný multimeter", "megger (megohmeter)", "osciloskop", "wattmeter"],
    correctIndex: 1,
    explanation: "Megger (megohmeter) je prístroj na meranie izolacného odporu. Generuje vysoké skúsobné napatíe (250 V, 500 V, 1000 V) a meria odpor izolácie v megaohmoch."
  },
  {
    id: 669,
    topic: "meranie",
    question: "Analógový merací prístroj magnetoelektrickej sústavy moze priamo merať:",
    options: ["len striedavé veliciny", "len jednosmerné veliciny", "jednosmerné aj striedavé veliciny", "len odpor"],
    correctIndex: 1,
    explanation: "Magnetoelektrická sústava (s otocnou cievkou v poli permanentného magnetu) reaguje na smer prúdu, preto moze priamo merať len jednosmerné veliciny. Na striedavé veliciny potrebuje usmerñovac."
  }
];
