export type StatGoal = { title: string; completed: boolean };
export type StatSection = { title: string; page: number; goals: StatGoal[] };
export type StatGroup = { title: string; sections: StatSection[] };

export const STAT_GROUPS: StatGroup[] = [
  {
    title: '1. Gazdag és sikeres ország – fejlődés és növekedés',
    sections: [
      {
        title: '1.1. Ganz Ábrahám Gazdaságfejlesztési Program',
        page: 37,
        goals: [
          { title: 'Hazahozzuk az uniós forrásokat, és a magyar vállalatok versenyké - pességet fokozó programokra fordítjuk azokat.', completed: false },
          { title: 'Adókedvezményekkel, célzott pályázatokkal, vissza nem térítendő támogatásokkal segítjük a hazai kkv-k fejlődését és külföldi piacra lépését.', completed: false },
          { title: 'Megfelezzük a vállalkozások adminisztrációs terheit.', completed: false },
          { title: 'Zebrák helyett unikornisokat! Korrupt közbeszerzések helyett tisz - tességes versenyt és startupbarát környezetet teremtünk.', completed: false },
          { title: 'Négy év alatt legalább másfélszeresére emeljük az innovációra for - dított forrásokat.', completed: false },
          { title: 'Jelentősen csökkentjük a vállalkozások által fizetendő rezsiköltsé - geket.', completed: false },
        ]
      },
      {
        title: '1.2. Adócsökkentés+',
        page: 54,
        goals: [
          { title: '15 százalékról 9 százalékra csökkentjük a minimálbér adóját.', completed: false },
          { title: 'A mediánbér alatt kereső 2,2 millió munkavállalónak csökkentjük az szja terhelését.', completed: false },
          { title: 'A TISZA semmilyen munkabért terhelő adót nem emel meg.', completed: false },
          { title: 'Egymilliárd forint feletti vagyonokra bevezetjük az 1%-os vagyonadót.', completed: false },
          { title: 'A vényköteles gyógyszerek áfáját 0%-ra csökkentjük.', completed: false },
          { title: 'A tűzifa és az egészséges élelmiszerek áfáját 5%-ra mérsékeljük.', completed: false },
        ]
      },
      {
        title: '1.3. Stabil költségvetés',
        page: 57,
        goals: [
          { title: '2030-ra teljesítjük a maastricht-i kritériumokat: 3% alatti költség - vetési hiány, GDP-arányosan csökkenő államadósság, alacsony infláció és kamatok.', completed: false },
          { title: 'Felelős költségvetési tervezést és számonkérhető végrehajtást ve - zetünk be.', completed: false },
          { title: 'Erősítjük a befektetői bizalmat és százmilliárdokkal csökkentjük az államadósság után fizetendő kamatokat.', completed: false },
          { title: 'Előkészítjük az euró bevezetését, és belátható céldátummal meg - valósítjuk azt. Ma mindenki érzi a bőrén, hogy a gazdaság rossz irányba megy. A kor - mány gazdaságpolitikája…', completed: false },
          { title: 'Hazánk gazdasága 2022 óta lényegében nem fejlődött, annak ellenére stagnál, hogy a kormány mindig betervezte az évi 3-4%-os növekedést A kormány GDP-várakozásai és a tényadatok…', completed: false },
          { title: 'Miközben a GDP nem tud nőni, a beruházások zuhannak, a költségve - tési hiány évről-évre nagyobb a tervezettnél, és emelkedik az állam - adósság. 59STABIL KÖLTSÉGVETÉS A pénzünk…', completed: false },
        ]
      },
      {
        title: '1.4. Rezsicsökkentés+',
        page: 67,
        goals: [
          { title: 'Megtartjuk és szociális alapon kiterjesztjük a rezsicsökkentést.', completed: false },
          { title: 'Az időjárás függvényében szükség szerint megemeljük a rezsicsök - kentett gáz- és áramfogyasztási limitet.', completed: false },
          { title: 'A tűzifa áfáját 5%-ra csökkentjük, a szociális tűzifakeretet megdup - lázzuk, és elérhetővé tesszük az 5000 fő feletti településeknek is.', completed: false },
          { title: 'Megfizethető és versenyképes energiát biztosítunk a magyar vál - lalkozásoknak, a verseny növelésével és a rendszerhasználati díjak csökkentésével.', completed: false },
          { title: 'A magyar otthonok legalább 25%-át 10 éven belül magasabb ener - giahatékonyságúvá tesszük.', completed: false },
          { title: '2035-ig megszüntetjük az orosz energiafüggőséget, diverzifikáljuk a hazai energiaellátást.', completed: false },
        ]
      },
      {
        title: '1.5. Infrastruktúrafejlesztés',
        page: 72,
        goals: [
          { title: '10 éven belül megfelezzük a vasúti kocsik és mozdonyok átlagélet - korát a mostani 40-50 évről.', completed: false },
          { title: 'A vasúti fővonalakon elérjük az autópályával versenyképes, lega - lább 100 km/h állomástól állomásig mért átlagsebességet, amely 160–200 km/h-ra alkalmas pályák fejlesztését…', completed: false },
          { title: 'Országos villamosítási programot indítunk a vasúti szektorban, 50%-ra növeljük a villamosított pályák hosszát.', completed: false },
          { title: 'Országos kátyúmentesítési és átfogó közútfejlesztési programot indítunk, megduplázzuk a közutak fenntartására és felújítására for - dított kiadásokat.', completed: false },
          { title: 'Megépítjük az ország közepén áthaladó, az M1-est Kecskeméttel összekötő M200–M8-as gyorsforgalmi utakat, és megkezdjük az ország déli gyorsforgalmiút-körgyűrűjének, az M9-esnek a…', completed: false },
          { title: 'Kimelten kezeljük a települési elkerülő utak fejlesztését.', completed: false },
        ]
      },
      {
        title: '1.6. Wekerle Sándor Bérlakásépítési és Otthonfejlesztési Program',
        page: 86,
        goals: [
          { title: 'Megduplázzuk a lakásépítések számát.', completed: false },
          { title: 'Országos szociális és piaci alapú bérlakásépítési és lakásszövetke - zeti programot indítunk, több tízezer új bérlakást építünk.', completed: false },
          { title: 'A fiatalok számára legalább 50%-kal növeljük a rendelkezésre álló kollégiumi férőhelyek számát.', completed: false },
          { title: 'Szolgálati lakások fejlesztésével támogatjuk a hiányszakmákban dolgozó közalkalmazottak munkahelyhez közeli lakhatását.', completed: false },
          { title: 'A nyugdíjasok számára 20 ezer új férőhelyet létesítünk korszerű idősotthonokban.', completed: false },
          { title: 'Állami felújítási programot indítunk a komfort nélküli és félkomfor - tos ingatlanok teljes körű felújítására.', completed: false },
        ]
      },
    ]
  },
  {
    title: '2. Békés és rendezett ország – biztonság és stabilitás',
    sections: [
      {
        title: '2.1. Biztonságos Magyarország, erős határok',
        page: 92,
        goals: [
          { title: 'A béke pártján állunk, elutasítjuk a háborút és az erőszak minden formáját.', completed: false },
          { title: 'Magyarország nem küld katonát az orosz–ukrán háborúba, sem más fegyveres konfliktusba.', completed: false },
          { title: 'Nem állítjuk vissza a sorkötelezettséget.', completed: false },
          { title: 'Helyreállítjuk a bizalmat szövetségeseinkkel.', completed: false },
          { title: '2035-ig a védelmi kiadásainkat a NATO által elvárt 5%-os szintig növeljük.', completed: false },
          { title: 'Jelentősen fejlesztjük a hazai védelmi ipart, felülvizsgáljuk annak privatizációját, továbbfejlesztjük a katonai kibervédelmet, és véd - jük szuverenitásunkat. A világ veszélyes…', completed: false },
        ]
      },
      {
        title: '2.2. Rend és közbiztonság',
        page: 96,
        goals: [
          { title: 'Helyreállítjuk a rendvédelem becsületét és tekintélyét, megújítjuk a bérrendszert, és vonzó életpályát kínálunk.', completed: false },
          { title: 'Helyreállítjuk a közrendet: 150 ezer alá csökkentjük a regisztrált bűncselekmények számát.', completed: false },
          { title: 'Működő, szigorú, de emberközpontú drogpolitikával kezeljük az egyre súlyosbodó droghelyzetet.', completed: false },
          { title: '2021 óta ismét jelentősen romlott a közbiztonság. Az egyenruhások túlterheltek, alulfizetettek, a regisztrált bűncselekmények száma évek óta rohamosan nő, a droghelyzet egyre…', completed: false },
          { title: 'A TISZA helyreállítja a rendvédelem becsületét. Lesz elég rendőr min - den településen, tisztességes bért és modern felszerelést biztosítunk számukra. A rendőr és a tűzoltó újra…', completed: false },
          { title: 'A hivatásosok mellett a rend önkormányzati és civil őreit is megbe - csüljük: a polgárőrök és a mezőőrök felbecsülhetetlen értékű mun - káját jobb anyagi juttatásokkal és…', completed: false },
        ]
      },
      {
        title: '2.3. Zéró tolerancia az illegális bevándorlással szemben',
        page: 101,
        goals: [
          { title: 'Fenntartjuk a déli határkerítést, és megerősítjük a határvédelmet.', completed: false },
          { title: 'Elutasítjuk az Európai Unió migrációs kvótáit és a migrációs paktu - mot.', completed: false },
          { title: 'Zéró toleranciát alkalmazunk az illegális bevándorlással és az em - bercsempészettel szemben.', completed: false },
          { title: '2026. június 1-től megtiltjuk az Európán kívüli vendégmunkások behozatalát, felszámoljuk a bevándorlásra épülő NER-es üzleteket. Elég volt abból, hogy az állampárt riogat a…', completed: false },
          { title: 'Az emberek jogos igénye a biztonság és a stabilitás.', completed: false },
          { title: 'A magyar társadalom rendre és nyugalomra vágyik. A menekültügyből a kormány politikai és üzleti hasznot húz.', completed: false },
        ]
      },
      {
        title: '2.4. Szuverén nemzet',
        page: 104,
        goals: [
          { title: 'Hazánk helye Európában van, Magyarország nem lesz többé kom - pország.', completed: false },
          { title: 'Megerősítjük hazánk szuverenitását, következetesen képviseljük a magyar nemzeti érdeket, és szakmailag megerősítjük diplomácián - kat.', completed: false },
          { title: 'Megerősítjük elköteleződésünket az Európai Unió és a NATO felé, valamint a nemzetközi jogon alapuló rend mellett.', completed: false },
          { title: 'Megújítjuk a regionális szövetségeket és a Visegrádi Négyek együttműködését.', completed: false },
          { title: 'A nemzetközi jog keretei között a világ bármely országával készek vagyunk együttműködni, de hazánk érdekei soha nem kerülhetnek oligarchák és egyes személyek üzleti szempontjai…', completed: false },
          { title: 'Következetesen fellépünk a külhoni magyarok elleni támadásokkal szemben, és elérjük, hogy minden szomszédos ország biztosítsa a magyar közösségek nyelvi, oktatási és kulturális…', completed: false },
        ]
      },
      {
        title: '2.5. Demográfiai fordulat, összetartó nemzet, hazatérő magyarok',
        page: 109,
        goals: [
          { title: '2035-ig megállítjuk a népességfogyást, és célul tűzzük ki, hogy 2050-től ismét tízmillió fölé nőjön Magyarország lélekszáma.', completed: false },
          { title: 'Meghirdetjük a Vár a hazád! programot, és a visszailleszkedést megkönnyítő programokkal 8 éven belül hazahozunk 200 ezer főt a külföldön élő magyar honfitársaink közül.', completed: false },
          { title: 'Nemzeti minimumnak tekintjük a külhoni magyarok támogatását. Ma minden eddiginél nagyobb szükség lenne az összetartásra, egy egységes, egymásért felelősséget vállaló nemzetre.…', completed: false },
          { title: 'Magyarországon már nem 10, hanem kevesebb mint 9,5 millió ember él.', completed: false },
          { title: 'A születések száma soha nem volt ilyen alacsony: 2025 novemberében nem érte el a 6 ezret. Élve születések száma (fő), 2021–2025 (forrás: KSH) 5 000 6 000 7 000 8 000 9 000 10 000…', completed: false },
          { title: 'A teljes termékenységi arányszám az ideális 2,1 vagy afeletti érték he - lyett csak 1,3: átlagosan ennyi gyermeket hoz egy magyar nő világra. Ha ez a tendencia folytatódik,…', completed: false },
        ]
      },
      {
        title: '2.6. Tisztességes Magyarország',
        page: 114,
        goals: [
          { title: 'Zéró toleranciát alkalmazunk a korrupcióval szemben.', completed: false },
          { title: 'Csatlakozunk az Európai Ügyészséghez.', completed: false },
          { title: 'Létrehozzuk a Nemzeti Vagyonvisszaszerzési és Védelmi Hivatalt, kivizsgáljuk az elmúlt évek korrupciós botrányait és nyilvánvaló jogsértéseit, és a visszaszerzett vagyont…', completed: false },
          { title: '20 évre visszamenőleg vagyonosodási vizsgálatot vezetünk be az országgyűlési képviselők, politikai vezetők és közeli családtagjaik vonatkozásában.', completed: false },
          { title: 'Megszüntetjük a magántőkealapok mögötti tényleges tulajdonosok anonimitását, a bizalmi vagyonkezelők rendszerét felülvizsgáljuk. Magyarországot az elmúlt években az Európai Unió…', completed: false },
          { title: 'A magyarok 8000 milliárd forint uniós támogatástól esnek el a kor - mányzati korrupció és a demokrácia leépítése miatt.', completed: false },
        ]
      },
      {
        title: '2.7. Bibó István Program',
        page: 118,
        goals: [
          { title: 'Helyreállítjuk a jogállamot, megerősítjük a demokráciát és a hatal - mi fékeket.', completed: false },
          { title: 'Széles körű társadalmi egyeztetésben a nemzetet újraegyesítő al - kotmánytervezetet dolgozunk ki.', completed: false },
          { title: 'Megszüntetjük a rendeleti kormányzást.', completed: false },
          { title: 'Két ciklusra korlátozzuk a miniszterelnöki mandátumot.', completed: false },
          { title: 'Megerősítjük az igazságszolgáltatás függetlenségét.', completed: false },
          { title: 'A bíróságok alá rendeljük a végrehajtást és a felszámolást.', completed: false },
        ]
      },
      {
        title: '2.8. Működő állam, erős önkormányzatok',
        page: 125,
        goals: [
          { title: 'Felszabadítjuk a közigazgatást a pártpolitikai irányítás alól, meg - szüntetjük a vármegye elnevezést és a főispáni pozíciót.', completed: false },
          { title: 'Gyors, digitális és olcsó ügyintézést biztosítunk mindenkinek – ma - gánszemélyeknek és a cégeknek egyaránt.', completed: false },
          { title: 'Eltöröljük az állami vagy önkormányzati szolgáltatások kényelmi díját.', completed: false },
          { title: 'Leváltjuk a szakmailag alkalmatlan politikai kinevezetteket, és szakmai alkalmassághoz kötjük a vezetői pozíciók betöltését.', completed: false },
          { title: 'Biztosítjuk a szakigazgatási szervek önállóságát, a kormányhivata - lok alá szervezett feladatokat észszerűen szétválasztjuk.', completed: false },
          { title: 'Visszaadjuk a korábban elvont feladatokat, hatásköröket és intéz - ményeket, valamint a szükséges forrásokat az önkormányzatoknak.', completed: false },
        ]
      },
      {
        title: '2.9. Erős közösségek',
        page: 132,
        goals: [
          { title: 'Biztosítjuk az állam és az egyház kiegyensúlyozott, kölcsönös tisz - teletre épülő viszonyát.', completed: false },
          { title: 'Az intézményfenntartás és a hitélet szabadsága garantált lesz, a vallási közösségek döntéseibe pedig nem szól bele a politika.', completed: false },
          { title: 'Átlátható, előre tervezhető, politikától független finanszírozást biz - tosítunk a civil szervezeteknek.', completed: false },
          { title: 'A közpénz útját mindenhol követhetővé tesszük, az álcivil szerveze - tek finanszírozását azonnal leállítjuk. Erős ország csak ott születhet, ahol erős, szabad közösségek élnek. Az…', completed: false },
          { title: 'Az állam és az egyházak, vallási felekezetek partneri együttműködését az elmúlt években a politikai, gazdasági összefonódás váltotta fel.', completed: false },
          { title: 'Ennek alapját az egyházak, vallásfelekezetek jogállásáról szóló törvény átfogó és több szempontból kedvezőtlen átalakítása teremtette meg.', completed: false },
        ]
      },
    ]
  },
  {
    title: '3. Szabad és boldog ország – társadalmi jólét és jóllét',
    sections: [
      {
        title: '3.1. Hugonnai Vilma Egészségügyi Program',
        page: 138,
        goals: [
          { title: 'Önálló Egészségügyi Minisztériumot hozunk létre, évente legalább 500 milliárd forint többletforrást biztosítunk az állami egészségügy számára.', completed: false },
          { title: 'Minden régióban fejlesztünk egy szuperkórházat, a klinikai közpon - tokra alapozva.', completed: false },
          { title: 'Mindenkinek elérhetővé tesszük az ingyenes, jó minőségű állami egészségügyet.', completed: false },
          { title: 'A várólistákat 2027 végére a fekvőbeteg-ellátásban legfeljebb 6, a járóbeteg-ellátásban 2 hónapra fogjuk csökkenteni.', completed: false },
          { title: 'Újjászervezzük a népegészségügyet és a szűrőprogramokat, hogy a ciklus végére a részvételi arányok elérjék az uniós átlagot, és a da - ganatos megbetegedések száma legalább…', completed: false },
          { title: 'Elérjük, hogy 2035-ig legalább 80 évre emelkedjen a születéskor várható élettartam.', completed: false },
        ]
      },
      {
        title: '3.2. Nyugdíjemelés+',
        page: 148,
        goals: [
          { title: 'Megtartjuk a 13. és 14. havi nyugdíjat.', completed: false },
          { title: 'Bevezetjük a nyugdíjas SZÉP-kártyát évi maximum 200 ezer forint támogatás értékig.', completed: false },
          { title: 'Garantáljuk, hogy havonta 120 ezer forintos öregségi és rokkantsági nyugdíjnál senki nem kaphat kevesebbet, jelentősen megemeljük a 120 és 140 ezer forint közötti nyugdíjakat. A…', completed: false },
          { title: 'Duplájára emeljük az időskorúak járadékát.', completed: false },
          { title: '50%-kal megemeljük az otthonápolási díjakat.', completed: false },
          { title: 'A nyugdíjasok számára 20 ezer új férőhelyet létesítünk korszerű idős otthonokban. Ma Magyarországon rengeteg nyugdíjas érzi úgy, hogy magára maradt. A jelenlegi kormány cserben…', completed: false },
        ]
      },
      {
        title: '3.3. Brunszvik Teréz Gyermekvédelmi Program',
        page: 151,
        goals: [
          { title: 'Feltárjuk az elmúlt évtizedekben a gyermekvédelemben elkövetett bűncselekményeket.', completed: false },
          { title: 'Teljes körű anyagi és erkölcsi kártérítést biztosítunk a gyermekvé - delemben bántalmazást elszenvedett áldozatok számára.', completed: false },
          { title: 'A szakemberekkel szoros együttműködésben megerősítjük a jelző - rend szert: gyors, akadálytalan információáramlást teremtünk a vé - dőnők, pedagógusok, háziorvosok és a rendőrség…', completed: false },
          { title: 'Megerősítjük a gyermekvédelmi ellátórendszert, 20%-kal növeljük az ágazat működési költségvetését, növeljük a dolgozói létszámot.', completed: false },
          { title: 'Megteremtjük a gyors, minőségi gyermekvédelmi hatósági munka feltételeit.', completed: false },
          { title: '25%-kal azonnal megemeljük az ágazatban dolgozók bérét, és inflációkövetővé tesszük azt.', completed: false },
        ]
      },
      {
        title: '3.4. 100% Család Program',
        page: 158,
        goals: [
          { title: 'Duplájára emeljük a családi pótlékot és az anyasági támogatást.', completed: false },
          { title: 'Minden kisbaba megszületésekor „Gyermekem született!” kelen - gyét biztosítunk 50 ezer forint értékben.', completed: false },
          { title: 'Duplájára emeljük a GYES-t és a GYET-et.', completed: false },
          { title: 'Minden évben iskolakezdési támogatást adunk a rászorulóknak 100 ezer forint értékben.', completed: false },
          { title: '50%-kal megemeljük az otthonápolási díjakat.', completed: false },
          { title: 'Garantáljuk, hogy válás esetén ne kelljen visszafizetni a CSOK-ot és a CSOK Pluszt.', completed: false },
        ]
      },
      {
        title: '3.5. Okos nemzet, világszínvonalú tudás',
        page: 164,
        goals: [
          { title: 'A működő és emberséges közoktatást a gyermekek igényeihez iga - zítva alkotjuk meg, mert minden pedagógia alapja a hazaszeretet és a gyermekek szeretete.', completed: false },
          { title: 'Elérjük, hogy minden gyermek megtanuljon értő módon olvasni és írni az általános iskola alsó tagozatának végére.', completed: false },
          { title: '18 évre emeljük a tankötelezettséget.', completed: false },
          { title: 'Az oktatást nemzetstratégiai ágazattá tesszük, önálló Oktatási Mi - nisztériumot hozunk létre.', completed: false },
          { title: '25%-os béremelést hajtunk végre a nevelést és oktatást segítő dol - gozók körében.', completed: false },
          { title: 'Megbecsüljük a pedagógusokat, nagyobb módszertani szabadsá - got biztosítunk a számukra, csökkentjük a pedagógusok adminiszt - rációs terheit.', completed: false },
        ]
      },
      {
        title: '3.6. Akadálymentes Magyarország',
        page: 180,
        goals: [
          { title: 'Országos fizikai és online akadálymentesítési programot valósítunk meg.', completed: false },
          { title: 'Célzott támogatásokkal és szolgáltatásokkal ösztönözzük a mun - kaadókat egészségprevenciós programok indítására, fogyatékos - sággal élő álláskeresők alkalmazására, a fogyatékos…', completed: false },
          { title: 'Elindítjuk a gondoskodó munkahely programot.', completed: false },
          { title: 'Biztosítjuk a fogyatékosság és rokkantság jogán járó pénzbeli ellá - tások vásárlóerejének megőrzését, a rokkantsági nyugdíjakat lega - lább 120 ezer forintra emeljük.', completed: false },
          { title: '50%-kal emeljük az otthonápolási díjakat.', completed: false },
          { title: 'Otthoni ápolást, gondozást biztosító szolgáltatásokkal segítjük, hogy a gondozási feladatokat végző szülők megtarthassák munká - jukat.', completed: false },
        ]
      },
      {
        title: '3.7. Egyenlő esély a nőknek a munkában és a magánéletben',
        page: 184,
        goals: [
          { title: 'Következetesen betartatjuk az egyenlő munkáért egyenlő bér elvét.', completed: false },
          { title: 'Rugalmas foglalkoztatási formák támogatásával és családbarát munkahelyek létrehozásával segítjük a munka és a család egyensú - lyának megteremtését.', completed: false },
          { title: 'Létrehozzuk az Egyenlő Bánásmódért Felelős Ombudsman intéz - ményét, hogy valódi védelmet nyújthassunk a diszkrimináció ellen.', completed: false },
          { title: 'Elsőbbséget biztosítunk az egyszülős családoknak a bérlakás-prog - ramokban és a lakhatási támogatások rendszerében.', completed: false },
          { title: 'Emberséges szülészeti ellátásokat és hatékony meddőségi (IVF) ke - zeléseket biztosítunk.', completed: false },
          { title: 'Felszámoljuk a menstruációs szegénységet, és minden érintettnek biztosítjuk az alapvető menstruációs higiénéhez való hozzáférést. 185EGYENLŐ ESÉLY A NŐKNEK A MUNKÁBAN ÉS A…', completed: false },
        ]
      },
      {
        title: '3.8. Roma esélyegyenlőség',
        page: 189,
        goals: [
          { title: 'A roma gyermekek számára is egyenlő hozzáférést biztosítunk a jó minőségű oktatáshoz.', completed: false },
          { title: 'Új ösztöndíjrendszert vezetünk be, új iskolabuszokat indítunk, hogy a nehéz körülmények közé született fiatalok is eljuthassanak az is - kolába.', completed: false },
          { title: 'Megteremtjük a gazdasági kitörés feltételeit a romák számára tar - tós, jól fizető munkahelyek biztosításával.', completed: false },
          { title: 'Átalakítjuk a közmunkát, valódi átjárást biztosítunk a munkaerőpi - acra.', completed: false },
          { title: 'Közművesítési és energetikai korszerűsítési programokat indítunk, különös figyelemmel a települési szegregátumokra.', completed: false },
          { title: 'Minden szakpolitikánknál, különösen az adócsökkentési, nyugdí - jemelési, gazdaságfejlesztési, közlekedési, építésügyi, szociális, oktatási és egészségügyi rendszereink…', completed: false },
        ]
      },
      {
        title: '3.9. Hajós Alfréd Program',
        page: 194,
        goals: [
          { title: 'A sport finanszírozását átláthatóvá tesszük. A jelenleg társasági adón (tao) keresztül érkező finanszírozási összegeket nem csök - kentjük, azokat teljes egészében a sportra…', completed: false },
          { title: 'A túlárazott stadionépítések és presztízsberuházások helyett a for - rásokat a tömeg- és szabadidősport-programokra, valamint az is - kolai, utánpótlás- és egyetemi…', completed: false },
          { title: 'Az ország minden pontján elérhető, fenntartható és bárki számára hozzáférhető sportinfrastruktúrát hozunk létre.', completed: false },
          { title: 'A hátrányos helyzetűek sportolását kiemelten támogatjuk. Az elmúlt másfél évtizedben a magyar sport soha nem látott mennyi - ségű közpénzt kapott, mégsem lettünk egészségesebb…', completed: false },
          { title: 'A magyar sportpolitika az elmúlt másfél évtizedben példátlan men ynyiségű közpénzt kapott, de a forrásbőség nem járt együtt strukturális megújulással.', completed: false },
          { title: '2010 óta a környező országoknál jelentősen többet költöttünk sport-, kulturális és vallási célokra. A magas kiadások elsősorban annak kö - szönhetők, hogy túl sokat költünk…', completed: false },
        ]
      },
      {
        title: '3.10. Szabad kultúra, támogatott művészet',
        page: 197,
        goals: [
          { title: 'Politikamentessé és átláthatóvá tesszük a kultúra irányítását, biz - tosítjuk a Nemzeti Kulturális Alap és a Nemzeti Filmintézet önálló - ságát, a kuratóriumokat szakmai alapon…', completed: false },
          { title: 'A közgyűjtemények szakmai önállóságát helyreállítjuk, és leállítjuk a politikailag motivált költöztetéseket.', completed: false },
          { title: 'Ágazati bérrendezést, 25%-os általános béremelést és többéves, kiszámítható bérpályát vezetünk be, valamint lakhatási programot indítunk a kulturális dolgozóknak.', completed: false },
          { title: 'Felújítjuk és korszerűsítjük a művelődési házakat, újraindítjuk a he - lyi közösségi életet, és mindenki számára elérhetővé tesszük a kul - túrát.', completed: false },
          { title: 'Biztosítjuk a magyar filmipar kiszámíthatóságát és nemzetközi versenyképességét, fenntartjuk az adókedvezmények jól kialakult rendszerét.', completed: false },
          { title: 'Véget vetünk a politikai alapon történő kinevezéseknek a színházi vezetők körében.', completed: false },
        ]
      },
    ]
  },
  {
    title: '4. Tiszta és haladó ország – fenntarthatóság és jövőállóság',
    sections: [
      {
        title: '4.1. Zöld Magyarország',
        page: 205,
        goals: [
          { title: 'Szigorúan ellenőrizzük a környezetvédelmi előírások betartását, a szennyezőket gyorsan és hatékonyan szankcionáljuk.', completed: false },
          { title: 'Magyarországot újra vízmegtartó országgá tesszük.', completed: false },
          { title: 'Megvédjük a folyóvizeinket, a tavainkat, és egyben mindenki szá - mára hozzáférhetővé tesszük azokat.', completed: false },
          { title: 'Összehangolt szakpolitikai intézkedésekkel 2030-ra minden tele - pülésen csökkentjük a levegőszennyezést és célul tűzzük ki, hogy az év 95 százalékában az egészségügyi határérték…', completed: false },
          { title: 'Felülvizsgáljuk a MOHU Zrt. 35 évre szóló hulladékkoncessziós szer - ződését, és olcsóbb, igazságos, átlátható rendszert vezetünk be, ezáltal csökkentjük a hazai vállalkozások…', completed: false },
          { title: 'A regionális és természeti adottságok figyelembe vételével vissza - építjük az önálló természetvédelmi, környezetvédelmi és vízvédel - mi hatósági rendszert, biztosítjuk annak…', completed: false },
        ]
      },
      {
        title: '4.2. Erős hazai agrár- és élelmiszeripar',
        page: 218,
        goals: [
          { title: '5%-ra csökkentjük az egészséges élelmiszerek áfáját, hogy a ter - melők versenyképesebbek legyenek a piacon, és a magyarok kön ynyebben hozzájuthassanak az egészséges hazai…', completed: false },
          { title: 'A magyar agrárium erőforrás, amelyet akkor használunk felelő - sen, ha a lehető legtöbb honfitársunk számára biztosít tisztességes megélhetést.', completed: false },
          { title: 'Kiemelten támogatjuk a családi gazdálkodókat, fiatal gazdákat és a kis- és középvállalatokat.', completed: false },
          { title: 'Széles körben támogatjuk a rövid ellátási láncok kialakítását, a ma - gas hozzáadott értékű termékek előállítását, a hatékony termelési technológiák elterjedését.', completed: false },
          { title: 'Visszaállítjuk a növény-, állat- és élelmiszer-egészségügyi szakha - tóságok függetlenségét, garantáljuk a magyar hatóságok szemlé - letváltását, a gazdálkodókat segíteni és…', completed: false },
          { title: 'Megvédjük a magyar agrár- és élelmiszeripart az Unión kívüli har - madik országokból beáramló ellenőrizetlen, rossz minőségű ter - ményektől és termékektől.', completed: false },
        ]
      },
      {
        title: '4.3. Xantus János Állatvédelmi Program',
        page: 223,
        goals: [
          { title: 'Megteremtjük a modern, európai szintű állatvédelem alapjait, szi - gorúan büntetjük az állatkínzást.', completed: false },
          { title: 'Országos hatáskörű állatjóléti hatóságot hozunk létre, amely elle - nőrzési és elkobzási jogkörrel rendelkezik, és állatjóléti őröket fog - lalkoztat.', completed: false },
          { title: 'Minden megyeszékhelyen minősített állatmenhelyet hozunk létre.', completed: false },
          { title: 'Országos állativartalanítási programot indítunk.', completed: false },
          { title: 'Egységes, országos állatnyilvántartási adatbázist hozunk létre.', completed: false },
          { title: 'Az állatjólétet kiemelt szemponttá tesszük az agrárágazatban is.', completed: false },
        ]
      },
      {
        title: '4.4. Szent István Vidékfejlesztési Program',
        page: 228,
        goals: [
          { title: 'Tíz falunként évente egymilliárd forint közösségi fejlesztési keretet adunk, a Magyar Falu Program forrásain felül. Az összeg felhaszná - lásáról a helyi közösségek dönthetnek…', completed: false },
          { title: 'Felszabadítjuk a vidéket a helyi oligarchák és politikusok uralma alól.', completed: false },
          { title: 'A közszolgáltatások vidéki elérhetőségét jelentősen javítjuk. Újra - indítjuk a háziorvosi, közlekedési, közművelődési és egyéb alapvető szolgáltatásokat.', completed: false },
          { title: 'Kiegyensúlyozott város–vidék fejlesztést és tisztességes, politika - mentes uniós forráselosztást biztosítunk.', completed: false },
          { title: 'Kiemelt figyelmet fordítunk a vidéki településeken az infrastruktú - ra fejlesztésére és a közvilágítás biztosítására.', completed: false },
          { title: 'Helyi adottságokra építő gazdaságfejlesztő programokkal ösztö - nözzük a minőségi munkahelyek és megfizethető szolgáltatások létrehozását.', completed: false },
        ]
      },
      {
        title: '4.5. Felkészülés a jövőre',
        page: 233,
        goals: [
          { title: 'Kiemelten támogatjuk a hazai kkv-k digitalizációját.', completed: false },
          { title: 'Minden ágazatban segítjük a digitalizáció terjedését — külön prog - ramok lesznek az egészségügyben, az oktatásban, a közlekedés - ben, a rendvédelemben, az…', completed: false },
          { title: 'Kötelező minimum lesz az e-közigazgatási szoftvereknél, webolda - laknál a jó felhasználói élmény és az akadálymentesség; papírmen - tes, mobilbarát ügyintézést vezetünk be.', completed: false },
          { title: 'Minden magyar állampolgár számára személyes mesterséges intel - ligencia-asszisztenst fejlesztünk az egészségügy, az oktatás és az e-ügyintézés támogatására.', completed: false },
          { title: 'Felelősen kezeljük, átláthatóvá és hasznossá tesszük az állami adat - vagyont, minden magyar állampolgár számára átláthatóvá és elér - hetővé tesszük az állam által tárolt…', completed: false },
          { title: 'Elérhetővé tesszük azokat az adatokat, amelyek a társadalom ér - deklődésére számot tartanak (például valós idejű tömegközlekedé - si információk, közegészségügyi és…', completed: false },
        ]
      },
    ]
  },
];