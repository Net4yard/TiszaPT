import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type ProgramSection = {
  title: string;
  promises: string[];
  page?: number;
};

type ProgramTheme = {
  title: string;
  sections: ProgramSection[];
};

@Component({
  selector: 'app-promises',
  imports: [NgFor, NgIf],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent {
  private readonly pageBySectionTitle: Record<string, number> = {
    '1.1. Ganz Ábrahám Gazdaságfejlesztési Program': 37,
    '1.2. Adócsökkentés+': 54,
    '1.3. Stabil költségvetés': 57,
    '1.4. Rezsicsökkentés+': 67,
    '1.5. Infrastruktúrafejlesztés': 72,
    '1.6. Wekerle Sándor Bérlakásépítési és Otthonfejlesztési Program': 86,
    '2.1. Biztonságos Magyarország, erős határok': 92,
    '2.2. Rend és közbiztonság': 96,
    '2.3. Zéró tolerancia az illegális bevándorlással szemben': 101,
    '2.4. Szuverén nemzet': 104,
    '2.5. Demográfiai fordulat, összetartó nemzet, hazatérő magyarok': 109,
    '2.6. Tisztességes Magyarország': 114,
    '2.7. Bibó István Program': 118,
    '2.8. Működő állam, erős önkormányzatok': 125,
    '2.9. Erős közösségek': 132,
    '3.1. Hugonnai Vilma Egészségügyi Program': 138,
    '3.2. Nyugdíjemelés+': 148,
    '3.3. Brunszvik Teréz Gyermekvédelmi Program': 151,
    '3.4. 100% Család Program': 158,
    '3.5. Okos nemzet, világszínvonalú tudás': 164,
    '3.6. Akadálymentes Magyarország': 180,
    '3.7. Egyenlő esély a nőknek a munkában és a magánéletben': 184,
    '3.8. Roma esélyegyenlőség': 189,
    '3.9. Hajós Alfréd Program': 194,
    '3.10. Szabad kultúra, támogatott művészet': 197,
    '4.1. Zöld Magyarország': 205,
    '4.2. Erős hazai agrár- és élelmiszeripar': 218,
    '4.3. Xantus János Állatvédelmi Program': 223,
    '4.4. Szent István Vidékfejlesztési Program': 228,
    '4.5. Felkészülés a jövőre': 233
  };

  private readonly rawThemes: ProgramTheme[] = [
    {
      title: '1. Gazdag és sikeres ország – fejlődés és növekedés',
      sections: [
        {
          title: '1.1. Ganz Ábrahám Gazdaságfejlesztési Program',
          promises: [
            'Hazahozzuk az uniós forrásokat, és a magyar vállalatok versenyképességét fokozó programokra fordítjuk azokat.',
            'Adókedvezményekkel és célzott támogatásokkal segítjük a hazai kkv-k fejlődését és külföldi piacra lépését.'
          ]
        },
        {
          title: '1.2. Adócsökkentés+',
          promises: [
            '15 százalékról 9 százalékra csökkentjük a minimálbér adóját.',
            'A mediánbér alatt kereső munkavállalóknál csökkentjük az szja-terhelést.'
          ]
        },
        {
          title: '1.3. Stabil költségvetés',
          promises: [
            '2030-ra teljesítjük a maastrichti kritériumokat: alacsonyabb hiány, csökkenő adósság és stabilabb infláció.',
            'Felelős költségvetési tervezést és számonkérhető végrehajtást vezetünk be.'
          ]
        },
        {
          title: '1.4. Rezsicsökkentés+',
          promises: [
            'Megtartjuk és szociális alapon kiterjesztjük a rezsicsökkentést.',
            'Szükség esetén megemeljük a rezsicsökkentett gáz- és áramfogyasztási limitet.'
          ]
        },
        {
          title: '1.5. Infrastruktúrafejlesztés',
          promises: [
            '10 éven belül megfelezzük a vasúti járműállomány átlagéletkorát.',
            'Országos kátyúmentesítési és átfogó közútfejlesztési programot indítunk.'
          ]
        },
        {
          title: '1.6. Wekerle Sándor Bérlakásépítési és Otthonfejlesztési Program',
          promises: [
            'Megduplázzuk a lakásépítések számát.',
            'Országos szociális és piaci alapú bérlakásépítési programot indítunk.'
          ]
        }
      ]
    },
    {
      title: '2. Békés és rendezett ország – biztonság és stabilitás',
      sections: [
        {
          title: '2.1. Biztonságos Magyarország, erős határok',
          promises: [
            'A béke pártján állunk, elutasítjuk a háborút és az erőszak minden formáját.',
            'Nem állítjuk vissza a sorkötelezettséget.'
          ]
        },
        {
          title: '2.2. Rend és közbiztonság',
          promises: [
            'Megújítjuk a rendvédelem bérrendszerét és vonzó életpályát kínálunk.',
            '150 ezer alá csökkentjük a regisztrált bűncselekmények számát.'
          ]
        },
        {
          title: '2.3. Zéró tolerancia az illegális bevándorlással szemben',
          promises: [
            'Fenntartjuk a déli határkerítést és megerősítjük a határvédelmet.',
            'Zéró toleranciát alkalmazunk az illegális bevándorlással és az embercsempészettel szemben.'
          ]
        },
        {
          title: '2.4. Szuverén nemzet',
          promises: [
            'Megerősítjük Magyarország szuverenitását és következetesen képviseljük a nemzeti érdeket.',
            'Megerősítjük az EU- és NATO-elköteleződést, valamint a regionális szövetségeket.'
          ]
        },
        {
          title: '2.5. Demográfiai fordulat, összetartó nemzet, hazatérő magyarok',
          promises: [
            '2035-ig megállítjuk a népességfogyást, hosszabb távon ismét 10 millió fölé növelve a népességet.',
            'A „Vár a hazád!” programmal hazatérési és visszailleszkedési támogatást nyújtunk.'
          ]
        },
        {
          title: '2.6. Tisztességes Magyarország',
          promises: [
            'Zéró toleranciát alkalmazunk a korrupcióval szemben.',
            'Csatlakozunk az Európai Ügyészséghez.'
          ]
        },
        {
          title: '2.7. Bibó István Program',
          promises: [
            'Helyreállítjuk a jogállamot és a demokratikus fékek-ellensúlyok rendszerét.',
            'Két ciklusra korlátozzuk a miniszterelnöki mandátumot.'
          ]
        },
        {
          title: '2.8. Működő állam, erős önkormányzatok',
          promises: [
            'Gyors, digitális és olcsó ügyintézést biztosítunk magánszemélyeknek és vállalkozásoknak.',
            'Eltöröljük az állami és önkormányzati szolgáltatások kényelmi díját.'
          ]
        },
        {
          title: '2.9. Erős közösségek',
          promises: [
            'Kiegyensúlyozott, kölcsönös tiszteleten alapuló állam–egyház viszonyt biztosítunk.',
            'Átlátható és politikától független finanszírozást biztosítunk a civil szervezeteknek.'
          ]
        }
      ]
    },
    {
      title: '3. Szabad és boldog ország – társadalmi jólét és jóllét',
      sections: [
        {
          title: '3.1. Hugonnai Vilma Egészségügyi Program',
          promises: [
            'Önálló Egészségügyi Minisztériumot hozunk létre, és évi többletforrást biztosítunk az állami ellátásnak.',
            '2027 végére érdemben csökkentjük a várólistákat.'
          ]
        },
        {
          title: '3.2. Nyugdíjemelés+',
          promises: [
            'Megtartjuk a 13. és 14. havi nyugdíjat.',
            'Nyugdíjas SZÉP-kártyát vezetünk be és emeljük a legalacsonyabb nyugdíjakat.'
          ]
        },
        {
          title: '3.3. Brunszvik Teréz Gyermekvédelmi Program',
          promises: [
            'Feltárjuk a gyermekvédelemben elkövetett visszaéléseket és bűncselekményeket.',
            'Megerősítjük a gyermekvédelmi ellátórendszert és növeljük az ágazati forrásokat.'
          ]
        },
        {
          title: '3.4. 100% Család Program',
          promises: [
            'Duplájára emeljük a családi pótlékot és az anyasági támogatást.',
            'Duplájára emeljük a GYES és GYET összegét.'
          ]
        },
        {
          title: '3.5. Okos nemzet, világszínvonalú tudás',
          promises: [
            '18 évre emeljük a tankötelezettséget.',
            'Az oktatást nemzetstratégiai ágazattá tesszük, önálló Oktatási Minisztériummal.'
          ]
        },
        {
          title: '3.6. Akadálymentes Magyarország',
          promises: [
            'Országos fizikai és online akadálymentesítési programot valósítunk meg.',
            'Megőrizzük a fogyatékossági és rokkantsági ellátások vásárlóerejét.'
          ]
        },
        {
          title: '3.7. Egyenlő esély a nőknek a munkában és a magánéletben',
          promises: [
            'Következetesen betartatjuk az egyenlő munkáért egyenlő bér elvét.',
            'Családbarát és rugalmas foglalkoztatási formákat támogatunk.'
          ]
        },
        {
          title: '3.8. Roma esélyegyenlőség',
          promises: [
            'A roma gyermekek számára is biztosítjuk a jó minőségű oktatáshoz való egyenlő hozzáférést.',
            'Új ösztöndíj- és támogatási rendszert vezetünk be az iskolai lemorzsolódás csökkentésére.'
          ]
        },
        {
          title: '3.9. Hajós Alfréd Program',
          promises: [
            'Átláthatóvá tesszük a sport finanszírozását.',
            'A forrásokat a tömeg- és szabadidősport, valamint az utánpótlás támogatására fordítjuk.'
          ]
        },
        {
          title: '3.10. Szabad kultúra, támogatott művészet',
          promises: [
            'Politikamentessé és átláthatóvá tesszük a kultúra irányítását.',
            'Ágazati bérrendezést és többéves, kiszámítható bérpályát vezetünk be.'
          ]
        }
      ]
    },
    {
      title: '4. Tiszta és haladó ország – fenntarthatóság és jövőállóság',
      sections: [
        {
          title: '4.1. Zöld Magyarország',
          promises: [
            'Szigorúan ellenőrizzük a környezetvédelmi előírások betartását és szankcionáljuk a szennyezőket.',
            'Magyarországot újra vízmegtartó országgá tesszük.'
          ]
        },
        {
          title: '4.2. Erős hazai agrár- és élelmiszeripar',
          promises: [
            '5%-ra csökkentjük az egészséges élelmiszerek áfáját.',
            'Kiemelten támogatjuk a családi gazdaságokat, fiatal gazdákat és kkv-kat.'
          ]
        },
        {
          title: '4.3. Xantus János Állatvédelmi Program',
          promises: [
            'Modern, európai szintű állatvédelmi rendszert építünk, szigorúbb szankciókkal.',
            'Országos állatjóléti hatóságot és megyeszékhelyi minősített menhelyeket hozunk létre.'
          ]
        },
        {
          title: '4.4. Szent István Vidékfejlesztési Program',
          promises: [
            'Éves, célzott közösségi fejlesztési keretet biztosítunk a vidéki településeknek.',
            'Javítjuk a vidéki közszolgáltatások elérhetőségét és minőségét.'
          ]
        },
        {
          title: '4.5. Felkészülés a jövőre',
          promises: [
            'Kiemelten támogatjuk a hazai kkv-k digitalizációját.',
            'Papírmentes, mobilbarát és akadálymentes e-közigazgatási ügyintézést vezetünk be.'
          ]
        }
      ]
    }
  ];

  readonly themes: ProgramTheme[] = this.rawThemes.map((theme) => ({
    ...theme,
    sections: theme.sections.map((section) => ({
      ...section,
      page: this.pageBySectionTitle[section.title]
    }))
  }));

}
