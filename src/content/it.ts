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
      'Una lettura editoriale sobria di Carlo Acutis come programmatore, web designer e mediatore digitale del sacro.',
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
    problem: {
      eyebrow: 'Problema',
      title: 'Leggere Acutis come architetto, non come icona',
      paragraphs: [
        'I registri dominanti su Carlo Acutis sono due: l’agiografico — un santo digitale, un giovane testimone della fede — e il devozionale — un patrono di internet, una preghiera in movimento. Entrambi sono legittimi. Nessuno dei due basta. Il registro agiografico assorbe l’opera nella vita; quello devozionale assorbe la vita nel culto.',
        'Fra i due si perde qualcosa di concreto: l’opera stessa. La mostra online dei miracoli eucaristici — costruita, tradotta, distribuita e accreditata attraverso reti ecclesiali — è, prima di ogni altra cosa, un pezzo di comunicazione. Ha una struttura. Ha un metodo. Ha, nel linguaggio del software, un’architettura.',
        'Questo pezzo interroga il registro saltato. Legge Acutis come programmatore, web designer e mediatore digitale del sacro, e tratta la mostra online come un piccolo museo: non una nuvola di miracoli, ma un sistema per farli circolare.',
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
        archive: 'Archivio',
        document: 'Documento',
        press: 'Stampa',
        scholarship: 'Ricerca',
        site: 'Sito',
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
      problem: 'Problema',
      hypothesis: 'Ipotesi',
      stateOfTheArt: 'Stato dell’arte',
      externalRecord: 'Registro esterno',
      references: 'Riferimenti',
    },
  },
  colophon: {
    note: 'Questa pagina appartiene al rilascio v1.0.0 — Prodotto pubblico. L’architettura editoriale è stabile, la struttura multilingue è intenzionale e il lavoro successivo appartiene al post-1.0.',
    license: 'Testo: CC BY 4.0 · Codice: MIT.',
  },
}
