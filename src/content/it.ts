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
    lead: 'Carlo Acutis fu più di un adolescente devoto con talento tecnico. Fu programmatore e web designer, qualcuno che comprese che anche la fede ha bisogno di struttura, linguaggio e circolazione. Catalogando i miracoli eucaristici approvati dalla Chiesa e trasformandoli in mostra, sito e percorso pubblico, diede forma digitale a ciò che per lungo tempo era rimasto disperso tra archivi, memoria locale e devozione. Nel 2026, quella missione è ancora viva. Ciò che è iniziato come catalogo è diventato mostra, poi sito, e ora continua in forma mobile. Carlo conta oggi perché ha mostrato come la tecnologia possa organizzare fiducia, non solo informazione.',
    byline: 'A cura di Thiago Prazeres. Disponibile in cinque lingue.',
  },
  sections: {
    story: {
      eyebrow: 'Narrazione · v2.1',
      title: 'L’Architetto dell’Invisibile',
      intro: [
        'Carlo Acutis non entrò in internet per fuggire dal mondo. Vi entrò per dare forma a ciò che il mondo non riusciva più a vedere.',
        'Nato nel 1991 e morto nel 2006, Carlo divenne noto per la sua devozione all’Eucaristia. Ma questa descrizione resta troppo piccola per ciò che rappresenta oggi. Carlo fu anche programmatore e web designer. Non si limitò ad ammirare la tecnologia. Comprese che codice, interfaccia, ordine visivo e accesso pubblico potevano servire qualcosa di più grande dell’informazione stessa.',
        'È qui che comincia la sua singolarità. Mentre gran parte del primo web diventava uno spazio di distrazione, novità e velocità, Carlo lo trattò come un luogo di organizzazione. Non usò internet soltanto per navigare. Lo usò per catalogare. Non usò i media digitali soltanto per parlare della fede. Li usò per strutturare la visibilità della fede.',
        'Da quel gesto nacque la sua opera più potente: la catalogazione dei miracoli eucaristici approvati dalla Chiesa e la creazione di una mostra internazionale e di un sito web che li resero pubblicamente navigabili. Non fu solo un atto di devozione. Fu un atto di design.',
      ],
      chapters: [
        {
          eyebrow: 'Catalogo',
          title: 'Catalogare l’invisibile',
          paragraphs: [
            'Prima di Carlo, per la maggior parte delle persone i miracoli eucaristici esistevano come frammenti. Erano custoditi in archivi, libri, tradizioni locali, memoria ecclesiale e discorso teologico. Erano reali nella vita della Chiesa, ma dispersi allo sguardo pubblico. Esistevano come testimonianza, ma non ancora come circolazione digitale contemporanea.',
            'Carlo riconobbe quella distanza. Capì che, per la sua generazione, non sarebbe bastato ripetere che l’Eucaristia stava al centro della vita cattolica. Bisognava mostrare. Bisognava organizzare. Bisognava costruire un percorso attraverso cui l’invisibile potesse essere incontrato di nuovo.',
            'Per questo catalogare conta così tanto qui. Catalogare non significava semplicemente elencare casi. Significava trasformare testimonianze disperse in struttura pubblica. Significava prendere miracoli vissuti in forme sparse e riarticolarli come sequenza, pannello, scheda, paese, data, immagine e racconto.',
            'Nelle mani di Carlo, la fede guadagnò architettura. Il sacro guadagnò interfaccia. Questo è il primo movimento della sua opera: non invenzione, ma organizzazione. Carlo non inventò i miracoli. Li rese leggibili in un nuovo medium.',
          ],
        },
        {
          eyebrow: 'Integrazione dei sistemi',
          title: 'Hohpe + Acutis',
          paragraphs: [
            'È qui che Gregor Hohpe diventa una lente utile. Hohpe aiuta a pensare l’architettura come movimento tra strati: dalla sala macchine all’attico dell’esperienza pubblica, dall’implementazione all’intelligibilità, dalla struttura nascosta alla forma che qualcuno può attraversare.',
            'Letto attraverso questa lente, Carlo non appare semplicemente come un adolescente religioso che fece un sito web, ma come qualcuno che risolse un problema reale di integrazione. Da un lato c’era il backend della tradizione: racconti di miracoli approvati dalla Chiesa, memoria storica, contesto dottrinale, dispersione geografica e senso sacramentale.',
            'Dall’altro lato c’era il frontend del suo tempo: pannelli espositivi, navigazione del sito, materiali scaricabili, circolazione multilingue e incontro pubblico. Carlo collegò questi strati. Prese contenuti che vivevano in contesti ecclesiali, culturali e storici separati e li fece muovere in un formato pubblico coerente.',
            'Ridusse la frammentazione. Diede consistenza alla presentazione. Rese possibile l’accesso senza appiattire il significato. In questo senso, Carlo agì come architetto della circolazione: fece viaggiare la fede attraverso i media e rese secoli di testimonianza disponibili come esperienza contemporanea.',
            'Per questo la mostra conta così tanto. Non fu solo una collezione. Fu una superficie di integrazione. Fece funzionare un corpo disperso di testimonianza religiosa come un sistema pubblico.',
          ],
        },
        {
          eyebrow: 'Semiosi',
          title: 'Peirce + Acutis',
          paragraphs: [
            'Ma l’integrazione da sola non spiega Carlo. Carlo non fece soltanto circolare le cose. Le fece significare.',
            'È qui che Charles Sanders Peirce offre la lente più precisa. Peirce permette di vedere che l’opera di Carlo non riguarda solo l’architettura del contenuto, ma l’architettura del segno. Il miracolo non viene semplicemente mostrato. Diventa leggibile attraverso una catena di segni.',
            'Le immagini funzionano come icone quando offrono somiglianza visiva e forma immediata. Date, luoghi, tracce e riferimenti documentali funzionano come indici quando puntano verso un accadimento storico e una testimonianza materiale. Il linguaggio teologico, l’inquadramento ecclesiale e la dottrina eucaristica funzionano come simboli quando inseriscono ogni caso in una tradizione condivisa di senso.',
            'Il risultato di Carlo come web designer vive esattamente qui. Non creò un’interfaccia neutrale. Creò un percorso interpretativo. Organizzò testo, immagine, contesto e sequenza affinché il visitatore non ricevesse dati isolati, ma un incontro guidato. L’utente vede. Legge. Collega. Interpreta. La fiducia comincia a formarsi.',
            'Per questo Carlo può essere letto come web designer della fiducia pubblica. Progettò più che schermate e pannelli. Progettò credibilità. Capì che, nell’era digitale, la fede avrebbe avuto bisogno non solo di proclamazione, ma anche di forma.',
          ],
        },
        {
          eyebrow: 'Sintesi',
          title: 'Carlo come punto d’incontro',
          paragraphs: [
            'È qui che le due linee convergono. Carlo si trova nel punto d’incontro tra integrazione dei sistemi e semiosi religiosa. Integra strati, ma struttura anche interpretazione. Organizza circolazione, ma organizza anche significato.',
            'Prende testimonianza, archivio, dottrina, immagine e geografia e dà loro un percorso condiviso nel mondo digitale pubblico. Per questo non può essere ridotto né a “un santo di internet” né a “un ragazzo cattolico dotato che fece un sito web”. Sono descrizioni troppo sottili.',
            'Carlo conta perché trasformò i media digitali in un luogo in cui fiducia, testimonianza e senso eucaristico potevano circolare insieme. Non stava semplicemente usando il web. Stava dando al web un’altra finalità.',
          ],
        },
        {
          eyebrow: '2026',
          title: 'Perché questo conta nel 2026',
          paragraphs: [
            'Nel 2026, la rilevanza di Carlo diventa ancora più chiara perché la sua missione non si fermò al primo web. Nel febbraio 2026, Vatican News ha riferito il lancio di una nuova applicazione mobile dedicata ai miracoli eucaristici catalogati da Carlo Acutis.',
            'Il servizio presenta esplicitamente l’app come continuità della sua missione: Carlo usò la tecnologia del suo tempo per catalogare e promuovere miracoli eucaristici approvati dalla Chiesa, e la nuova applicazione prosegue lo stesso lavoro nel linguaggio mobile contemporaneo.',
            'Questo dettaglio rafforza l’argomento. Significa che Carlo non è importante solo come pioniere del passato. Resta attivo come architettura presente. Ciò che è iniziato come catalogo è diventato mostra. Ciò che è diventato mostra è diventato sito. Ciò che è diventato sito ora continua come app mobile.',
            'La forma cambia. La missione resta. Per questo il 2026 conta così tanto. La Chiesa stessa tratta l’opera di Carlo non come memoria nostalgica, ma come eredità digitale fertile. L’app di febbraio 2026 mostra che la sua intuizione originale genera ancora nuove interfacce per la stessa testimonianza eucaristica.',
            'L’app non sostituisce Carlo. Prova che l’architettura da lui avviata resta viva. In un’epoca segnata da eccesso di contenuti, credibilità instabile, media sintetici e attenzione frammentata, Carlo offre un modello più forte: non rumore, ma cura; non sola accelerazione, ma struttura; non spettacolo, ma fiducia pubblica.',
            'Per questo la sua opera conta ora. Non perché abbia anticipato ogni tecnologia futura, ma perché colse qualcosa di più profondo: la tecnologia diventa significativa quando serve un percorso affidabile di interpretazione.',
          ],
        },
        {
          eyebrow: 'Continuità',
          title: 'La continuità della missione',
          paragraphs: [
            'Carlo Acutis catalogò i miracoli eucaristici approvati dalla Chiesa. Li trasformò in mostra. Trasformò la mostra in sito. E, nel 2026, quella stessa linea continua in forma mobile.',
            'Questo è il modo più semplice e più forte di leggere la sua eredità nel presente: catalogo -> mostra -> sito -> app mobile.',
            'Questa continuità non diluisce l’originalità della sua opera. La conferma. Carlo resta al centro perché ogni nuovo strato dipende ancora dall’architettura che per prima diede a questa testimonianza: organizzazione, visibilità, circolazione, interpretazione e fiducia.',
          ],
        },
        {
          eyebrow: 'Chiusura',
          title: 'Dare forma',
          paragraphs: [
            'Carlo non entrò in internet per seguirne il flusso. Vi entrò per dargli forma.',
            'Programmò per organizzare. Disegnò per orientare. Catalogò per far circolare la fede.',
            'E così facendo fece portare al web qualcosa che raramente porta bene: il peso del sacro senza perdere leggibilità pubblica.',
            'Per questo Carlo Acutis conta nel 2026. Non solo come memoria della devozione cattolica, ma come architetto dell’invisibile.',
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
