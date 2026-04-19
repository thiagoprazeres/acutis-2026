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
        'La letteratura su Acutis si orienta in due direzioni. Da un lato, gli studi di religione digitale — Heidi Campbell sulla distinzione tra religion online e online religion, Christopher Helland sul pellegrinaggio virtuale, Michael DiGiovine sull’etnografia del culto — lo leggono come un caso di religione che si adatta ai nuovi media.',
        'Dall’altro, la scrittura ecclesiale e devozionale lo assorbe in categorie già date di santità. Papa Francesco, in Christus Vivit, lo nomina come modello di una fede a proprio agio con gli schermi; la canonizzazione del 2025 suggella istituzionalmente questa lettura.',
        'Tra i due scaffali, un terzo registro è poco abitato. L’architettura dell’informazione (i pattern di integrazione di Gregor Hohpe; la scrittura classica di Jakob Nielsen sui siti come sistemi), la critica del capitalismo delle piattaforme (Shoshana Zuboff) e letture più antiche della religione come lavoro culturale (Gramsci, Löwy) raramente si incontrano attorno ad Acutis. È la cornice che questo pezzo prende in prestito — non per ampliare la bibliografia, ma per rendere visibile l’architettura.',
      ],
    },
    externalRecord: {
      eyebrow: 'Registro esterno',
      title: 'Fonti primarie e tracce istituzionali',
      intro:
        'Non sono download. Sono riferimenti esterni — semplici collegamenti alle fonti che questo pezzo legge. Se un host istituzionale si sposta, il testo resta; il collegamento è la traccia, non l’artefatto.',
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
      title: 'Una bibliografia breve e deliberata',
      intro:
        'L’elenco è volutamente ridotto. Ogni voce è presente perché l’argomento vi si appoggia. Ulteriori letture appartengono a release successive di questo pezzo.',
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
          author: 'DiGiovine, M. A.',
          year: '2023',
          title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
          publisher: 'Tesi di dottorato, West Chester University',
        },
        {
          author: 'Francesco',
          year: '2019',
          title: 'Christus Vivit',
          publisher: 'Esortazione apostolica, Vaticano',
        },
        {
          author: 'Hohpe, G., e B. Woolf',
          year: '2003',
          title: 'Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions',
          publisher: 'Addison-Wesley',
        },
        {
          author: 'Helland, C.',
          year: '2016',
          title: 'Digital Religion',
          publisher: 'In The Handbook of Religion and Communication, Wiley',
        },
        {
          author: 'Löwy, M.',
          year: '2005',
          title: 'The Theory of Revolution in the Young Marx',
          publisher: 'Haymarket',
        },
        {
          author: 'Zuboff, S.',
          year: '2019',
          title: 'The Age of Surveillance Capitalism',
          publisher: 'PublicAffairs',
        },
      ],
    },
  },
  nav: {
    skipToContent: 'Vai al contenuto',
    otherLanguages: 'Leggi in un’altra lingua',
    backToIndex: 'Torna all’indice',
    onThisPage: 'In questa pagina',
    sectionLabels: {
      problem: 'Problema',
      hypothesis: 'Ipotesi',
      stateOfTheArt: 'Stato dell’arte',
      externalRecord: 'Registro esterno',
      references: 'Riferimenti',
    },
  },
  colophon: {
    note: 'Questa pagina appartiene al rilascio v0.6.0 — Arricchimento dei media esterni. L’architettura editoriale della v0.4.0 tiene; i riferimenti esterni entrano ora nel testo come semplici collegamenti, non come asset locali.',
    license: 'Testo: CC BY 4.0 · Codice: MIT.',
  },
}
