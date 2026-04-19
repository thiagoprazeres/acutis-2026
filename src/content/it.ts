import type { LocaleContent } from './types.ts'
import { externalAnchors, POLICY_URL } from './externalAnchors.ts'

export const it: LocaleContent = {
  code: 'it',
  label: 'Italiano',
  htmlLang: 'it',
  dir: 'ltr',
  meta: {
    title: 'Carlo Acutis — un’architettura di comunicazione del sacro',
    description:
      'Una lettura editoriale sobria di Carlo Acutis come programmatore e web designer, e come mediatore digitale del sacro.',
  },
  masthead: {
    eyebrow: 'Un pezzo editoriale · 2026',
    title: 'Carlo Acutis',
    subtitle: 'Un’architettura di comunicazione del sacro, letta in chiave 2026.',
    leadLabel: 'Apertura',
    lead: 'Carlo Acutis (1991–2006) è quasi sempre presentato come un adolescente santo con un sito web. Questo pezzo sceglie un angolo più stretto e più sobrio: legge il suo breve lavoro come un’architettura di comunicazione — un esercizio deliberato di design dell’informazione, distribuzione, legittimazione e rituale. Non una startup, non un album devozionale, non un’app di miracoli. Un piccolo oggetto editoriale coerente, assemblato da un programmatore.',
    byline: 'A cura di Thiago Prazeres. Disponibile in cinque lingue.',
  },
  sections: {
    story: {
      eyebrow: 'Narrazione · v2',
      title: 'L’Architetto dell’Invisibile: il viaggio di Carlo Acutis',
      intro: [
        'Carlo Acutis entra in questa storia non come un prodigio chiamato a risolvere un problema tecnologico della Chiesa, ma come un adolescente che capì che una memoria devozionale dispersa poteva diventare leggibile se qualcuno le avesse dato struttura.',
        'Da Londra nel 1991 a Milano, dalla Messa quotidiana al primo web, la domanda diventa pratica: come può viaggiare un miracolo custodito in un archivio parrocchiale, in una testimonianza locale o in una relazione scientifica senza perdere il proprio segno?',
      ],
      chapters: [
        {
          eyebrow: '1991–2006',
          title: 'Prima del catalogo',
          paragraphs: [
            'Carlo nacque a Londra il 3 maggio 1991 e tornò a Milano con i genitori pochi mesi dopo. Il registro pubblico insiste sulla trama ordinaria della sua vita: scuola, calcio, videogiochi, programmi al computer, servizio parrocchiale, familiarità con gli strumenti della sua generazione.',
            'Lo stesso registro mostra anche un centro di gravità insolito. Dalla Prima Comunione, l’Eucaristia divenne il punto organizzatore della sua giornata. Il sito e la mostra non nacquero come passatempo separato; crebbero da una vita giovane già disposta attorno alla questione della presenza.',
          ],
        },
        {
          eyebrow: 'Integrazione dei sistemi',
          title: 'Il broker della fede',
          paragraphs: [
            'All’inizio degli anni Duemila, le storie che Carlo voleva far circolare non erano assenti. Erano distribuite in sistemi diversi: archivi parrocchiali, memoria locale, immagini scansionate, approvazioni ecclesiali, relazioni scientifiche, lingue e geografie. Nel linguaggio del software, si comportavano come silos di dati.',
            'Letto sullo sfondo delle Enterprise Integration Patterns di Gregor Hohpe, il lavoro di Carlo diventa un Message Bus metaforico. Il sito e la mostra stampabile diedero a registri separati un’interfaccia comune. Non cancellarono le storie locali; permisero loro di viaggiare attraverso un canale condiviso.',
            'La mossa più profonda fu la traduzione. Un miracolo medievale o moderno non può essere semplicemente copiato nel web senza cambiare protocollo. Carlo agì come un Message Translator: date, luoghi, fotografie, mappe, didascalie e sintesi convertirono la devozione analogica in itinerario digitale senza fingere che il bit esaurisse il mistero.',
          ],
        },
        {
          eyebrow: 'Semiosi',
          title: 'Il decifratore del segnale',
          paragraphs: [
            'Per Carlo, l’Eucaristia non era un emblema vago. Era un segno carico di presenza. Peirce aiuta a nominare la struttura: una forma significante, un oggetto verso cui il segno punta e un interpretante prodotto nella persona che impara a leggere quella relazione.',
            'Il catalogo intensificò questo processo. Una fotografia, una mappa o una relazione medica non sostituisce la fede; offre più materia all’interpretante. Il miracolo diventa non solo oggetto di devozione ma anche oggetto di informazione, capace di essere seguito, confrontato e rivisitato.',
            'In questo senso, il clic non era banale. Aprire una scheda su Lanciano o Buenos Aires iniziava una catena di interpretazione: luogo, materia, testimonianza, istituzione, lettore. La tecnologia diventava un ponte per la semiosi, non un sostituto del sacro.',
          ],
        },
        {
          eyebrow: 'Sintesi',
          title: 'Carlo come punto d’incontro',
          paragraphs: [
            'La sintesi non è scegliere tra Carlo programmatore e web designer e Carlo devoto. È che i registri si incontrarono in un unico atto editoriale. Trattò il database con la serietà di un reliquiario e trattò il reliquiario con la logica distributiva di una rete.',
            'Nel 2026, dopo la canonizzazione e dopo una nuova continuazione mobile del progetto sui miracoli eucaristici, la forma di quel gesto è più chiara. Carlo divenne un nodo tra archivio e pellegrinaggio, schermo e altare, padronanza tecnica giovanile e una grammatica sacramentale più antica.',
            'L’architettura della fiducia pubblica indica il risultato reale: Carlo non inventò i misteri che catalogò. Creò un’interfaccia attraverso cui un’altra generazione poteva incontrarli senza che il passato fosse appiattito in contenuto.',
          ],
        },
      ],
    },
    problem: {
      eyebrow: 'Problema',
      title: 'Leggere Acutis come architetto, non come icona',
      paragraphs: [
        'I registri dominanti su Carlo Acutis sono due: l’agiografico — un santo digitale, un giovane testimone della fede — e il devozionale — un patrono di internet, una preghiera in movimento. Entrambi sono legittimi. Nessuno dei due basta. Il registro agiografico assorbe l’opera nella vita; quello devozionale assorbe la vita nel culto.',
        'Fra i due si perde qualcosa di concreto: l’opera stessa. La mostra online dei miracoli eucaristici — costruita, tradotta, distribuita e accreditata attraverso reti ecclesiali — è, prima di ogni altra cosa, un pezzo di comunicazione. Ha una struttura. Ha un metodo. Ha, nel linguaggio del software, un’architettura.',
        'Questo pezzo interroga il registro saltato. Legge Acutis come programmatore e web designer, e come mediatore digitale del sacro, trattando la mostra online come un piccolo museo: non una nuvola di miracoli, ma un sistema per farli circolare.',
      ],
    },
    hypothesis: {
      eyebrow: 'Ipotesi',
      title: 'Un’architettura di comunicazione a cinque strati',
      paragraphs: [
        'L’ipotesi di lavoro è che la mostra si legga meglio come un’architettura a strati: contenuto, interfaccia, distribuzione, legittimazione e ritualizzazione. La parola architettura è usata qui in senso modesto — non come retorica, ma come il modo in cui le scelte si impilano l’una sull’altra e iniziano a disegnare una forma.',
        'In questa lettura, i miracoli sono contenuto. Il sito è interfaccia. Le reti parrocchiali, i pannelli stampabili e le traduzioni multilingue sono distribuzione. La prefazione del cardinale, il logo dell’associazione e l’avallo ecclesiale sono legittimazione. Il pellegrinaggio virtuale, la preghiera e il circuito itinerante dei pannelli sono ritualizzazione.',
        'Ciò che conta non è un singolo strato, ma la loro coerenza. Il pezzo funziona non perché una sola decisione sia insolita, ma perché l’intera pila tiene. La tesi è sobria e precisa: l’opera è interessante meno per il suo contenuto che per la disciplina silenziosa del suo disegno.',
      ],
    },
    stateOfTheArt: {
      eyebrow: 'Stato dell’arte',
      title: 'Che cosa è già stato detto',
      paragraphs: [
        'La bibliografia esistente su Acutis si dispone su due scaffali. Sullo scaffale primario — il registro istituzionale — gli artefatti sono la mostra online stessa, la Christus Vivit, l’annuncio della canonizzazione e il lavoro etnografico che ha iniziato a descrivere il culto. Sullo scaffale secondario — la letteratura accademica — il caso ricade quasi interamente negli studi di religione digitale: Campbell sulla distinzione tra religion online e online religion, Helland sul pellegrinaggio virtuale, DiGiovine sulla santità contemporanea e la tradizione di handbook cresciuta intorno a loro.',
        'La scrittura ecclesiale e devozionale corre di fianco ai due scaffali e assorbe Acutis in categorie già date di santità. Papa Francesco, in Christus Vivit, lo nomina come modello di una fede a proprio agio con gli schermi; la canonizzazione del 2025, celebrata sotto Leone XIV, suggella istituzionalmente questa lettura. È una lettura legittima, ma legge la vita, non l’opera.',
        'Un terzo registro è poco abitato. Le teorie classiche della mediazione e della circolazione (Peters, Debray, Couldry e Hepp), il canone pragmatico dell’architettura dell’informazione (Rosenfeld, Morville e Arango; Hohpe sui pattern di integrazione; Bolter e Grusin sulla rimediazione) e letture più antiche della religione come lavoro culturale (Gramsci, Löwy; più di recente Zuboff sulla cattura piattaformatica) raramente convergono attorno ad Acutis. È la cornice che questo pezzo prende in prestito — non per ingrossare la bibliografia, ma per rendere visibile l’architettura nella lingua in cui l’architettura stessa è stata costruita.',
      ],
    },
    externalRecord: {
      eyebrow: 'Registro esterno',
      title: 'Fonti primarie e tracce istituzionali',
      intro:
        'Gli ancoraggi documentali primari che questo pezzo legge: l’artefatto stesso, le cornici istituzionali che lo circondano e il primo lavoro sul campo che ha iniziato a descrivere il culto. Non sono download. Sono semplici collegamenti; se un host istituzionale si sposta, il testo resta; il collegamento è la traccia, non l’artefatto.',
      accessedLabel: 'consultato il',
      policyLabel: 'Vedi la politica sui media esterni',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Asset',
        archive: 'Archivio',
        document: 'Documento',
        press: 'Stampa',
        scholarship: 'Ricerca',
        site: 'Sito',
        theory: 'Teoria',
      },
      items: [
        {
          ...externalAnchors.exhibition,
          note: 'L’artefatto primario. Il pezzo legge questa mostra come architettura di comunicazione, non come contenuto devozionale.',
        },
        {
          ...externalAnchors.christusVivit,
          note: 'L’esortazione apostolica che nomina Acutis come modello di una fede a proprio agio con gli schermi. Il primo strato documentato di legittimazione istituzionale.',
        },
        {
          ...externalAnchors.canonization,
          note: 'L’annuncio che chiude l’arco della legittimazione. La canonizzazione è avvenuta il 7 settembre 2025.',
        },
        {
          ...externalAnchors.digiovine,
          note: 'Una lettura antropologica del culto e del pellegrinaggio virtuale, attorno alla quale converge gran parte della bibliografia attuale su Acutis.',
        },
      ],
    },
    remoteAssets: {
      eyebrow: 'Asset remoti',
      title: 'Collegamenti esterni per la narrazione',
      intro:
        'La narrazione v2 aggiunge un insieme più rigoroso di coordinate esterne: biografia e cronologia ufficiali, pagina della mostra, traccia dell’app del 2026, catalogo media e collegamenti teorici usati nella lettura Hohpe e Peirce. Restano esterni per scelta.',
      accessedLabel: 'consultato il',
      policyLabel: 'Vedi la politica sui media esterni',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Asset',
        archive: 'Archivio',
        document: 'Documento',
        press: 'Stampa',
        scholarship: 'Ricerca',
        site: 'Sito',
        theory: 'Teoria',
      },
      items: [
        {
          ...externalAnchors.biography,
          note: 'Pagina biografica ufficiale usata per radicare la narrazione nella vita ordinaria di Carlo, nel servizio parrocchiale e nella pratica informatica.',
        },
        {
          ...externalAnchors.timeline,
          note: 'Ancora cronologica ufficiale per l’arco 1991–2025, inclusi nascita, Prima Comunione, malattia, beatificazione e canonizzazione.',
        },
        {
          ...externalAnchors.exhibitionAssociation,
          note: 'Pagina dell’associazione che descrive la mostra dei Miracoli Eucaristici come creata e progettata da Carlo Acutis e distribuita a livello internazionale.',
        },
        {
          ...externalAnchors.vaticanApp,
          note: 'Traccia di Vatican News sulla continuazione mobile, nel 2026, del progetto sui miracoli eucaristici, utile per il punto di arrivo “fino al 2026”.',
        },
        {
          ...externalAnchors.commons,
          note: 'Catalogo media esterno per lettori che hanno bisogno di contesto visivo. Nessun file viene scaricato o ripubblicato da questo progetto.',
        },
        {
          ...externalAnchors.hohpeMessageBus,
          note: 'Coordinata concettuale per leggere la mostra come canale condiviso attraverso cui registri distribuiti possono circolare.',
        },
        {
          ...externalAnchors.hohpeMessageTranslator,
          note: 'Coordinata concettuale per leggere il lavoro web di Carlo come traduzione fra protocolli archivistici, devozionali e digitali.',
        },
        {
          ...externalAnchors.peirceSigns,
          note: 'Coordinata concettuale per la lettura triadica del segno usata nel capitolo sulla semiosi.',
        },
      ],
    },
    references: {
      eyebrow: 'Riferimenti',
      title: 'Letteratura secondaria, raggruppata per registro',
      intro:
        'La letteratura secondaria su cui il pezzo si appoggia, raggruppata per registro invece che elencata in blocco. Gli ancoraggi documentali primari restano nel registro esterno sopra. L’elenco è deliberato, non esaustivo: ogni voce è qui perché fa un lavoro reale nell’argomento.',
      groups: [
        {
          heading: 'Carlo Acutis e la santità contemporanea',
          description:
            'Il corpo esile ma in crescita di studi che leggono Acutis direttamente, insieme ai documenti ecclesiali che lo inquadrano.',
          items: [
            {
              author: 'DiGiovine, M. A.',
              year: '2023',
              title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
              publisher: 'Tesi di dottorato, West Chester University',
            },
            {
              author: 'Francesco',
              year: '2019',
              title: 'Christus Vivit (§104–106)',
              publisher: 'Esortazione apostolica, Vaticano',
            },
          ],
        },
        {
          heading: 'Studi di religione digitale',
          description:
            'Lo scaffale su cui il caso Acutis viene più spesso collocato: religione e internet, pellegrinaggio virtuale, pratica online/offline.',
          items: [
            {
              author: 'Campbell, H. A. (a cura di)',
              year: '2012',
              title: 'Digital Religion: Understanding Religious Practice in New Media Worlds',
              publisher: 'Routledge',
            },
            {
              author: 'Campbell, H. A., e R. Tsuria (a cura di)',
              year: '2022',
              title: 'Digital Religion: Understanding Religious Practice in Digital Media',
              publisher: 'Routledge, 2ª ed.',
            },
            {
              author: 'Helland, C.',
              year: '2016',
              title: 'Digital Religion',
              publisher: 'In The Handbook of Religion and Communication, Wiley',
            },
            {
              author: 'Hoover, S. M.',
              year: '2006',
              title: 'Religion in the Media Age',
              publisher: 'Routledge',
            },
            {
              author: 'Dawson, L. L., e D. E. Cowan (a cura di)',
              year: '2004',
              title: 'Religion Online: Finding Faith on the Internet',
              publisher: 'Routledge',
            },
            {
              author: 'O’Leary, S. D.',
              year: '1996',
              title: 'Cyberspace as Sacred Space: Communicating Religion on Computer Networks',
              publisher: 'Journal of the American Academy of Religion 64 (4): 781–808',
            },
          ],
        },
        {
          heading: 'Architettura della comunicazione, mediazione e circolazione',
          description:
            'Il registro in cui il pezzo legge effettivamente Acutis: come gli oggetti vengono fatti viaggiare, come le interfacce sostengono argomenti, come i messaggi restano coerenti attraverso una pila di strati.',
          items: [
            {
              author: 'Hohpe, G., e B. Woolf',
              year: '2003',
              title: 'Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions',
              publisher: 'Addison-Wesley',
            },
            {
              author: 'Rosenfeld, L., P. Morville, e J. Arango',
              year: '2015',
              title: 'Information Architecture: For the Web and Beyond',
              publisher: "O'Reilly, 4ª ed.",
            },
            {
              author: 'Bolter, J. D., e R. Grusin',
              year: '1999',
              title: 'Remediation: Understanding New Media',
              publisher: 'MIT Press',
            },
            {
              author: 'Peters, J. D.',
              year: '1999',
              title: 'Speaking into the Air: A History of the Idea of Communication',
              publisher: 'University of Chicago Press',
            },
            {
              author: 'Couldry, N., e A. Hepp',
              year: '2017',
              title: 'The Mediated Construction of Reality',
              publisher: 'Polity',
            },
            {
              author: 'Debray, R.',
              year: '2000',
              title: 'Transmitting Culture',
              publisher: 'Columbia University Press',
            },
          ],
        },
        {
          heading: 'Cornice critica: religione, potere e piattaforme',
          description:
            'Letture antiche e recenti della religione come lavoro culturale, tenute a portata di mano per resistere alla riduzione di Acutis alla pura devozione o alla pura piattaforma.',
          items: [
            {
              author: 'Gramsci, A.',
              year: '1971',
              title: 'Selections from the Prison Notebooks',
              publisher: 'International Publishers (a cura di Q. Hoare e G. Nowell Smith)',
            },
            {
              author: 'Löwy, M.',
              year: '1996',
              title: 'The War of Gods: Religion and Politics in Latin America',
              publisher: 'Verso',
            },
            {
              author: 'Anderson, B.',
              year: '2006',
              title: 'Imagined Communities: Reflections on the Origin and Spread of Nationalism',
              publisher: 'Verso, ed. riv.',
            },
            {
              author: 'Castells, M.',
              year: '2010',
              title: 'The Power of Identity',
              publisher: 'Wiley-Blackwell, 2ª ed.',
            },
            {
              author: 'Zuboff, S.',
              year: '2019',
              title: 'The Age of Surveillance Capitalism',
              publisher: 'PublicAffairs',
            },
          ],
        },
      ],
    },
  },
  nav: {
    skipToContent: 'Vai al contenuto',
    otherLanguages: 'Leggi in un’altra lingua',
    backToIndex: 'Torna all’indice',
    onThisPage: 'In questa pagina',
    opensInNewTab: '(si apre in una nuova scheda)',
    sectionLabels: {
      story: 'Narrazione',
      problem: 'Problema',
      hypothesis: 'Ipotesi',
      stateOfTheArt: 'Stato dell’arte',
      externalRecord: 'Registro esterno',
      remoteAssets: 'Asset remoti',
      references: 'Riferimenti',
    },
  },
  colophon: {
    note: 'Questa pagina appartiene al rilascio v2.1.0 — Ancora di continuità 2026. Lo strato narrativo ora approda alla continuazione mobile, nel febbraio 2026, del lavoro di Carlo sui miracoli eucaristici.',
    license: 'Testo: CC BY 4.0 · Codice: MIT.',
  },
}
