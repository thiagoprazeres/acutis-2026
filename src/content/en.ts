import type { LocaleContent } from './types.ts'
import { externalAnchors, POLICY_URL } from './externalAnchors.ts'

export const en: LocaleContent = {
  code: 'en',
  label: 'English',
  htmlLang: 'en',
  dir: 'ltr',
  meta: {
    title: 'Carlo Acutis — a communication architecture of the sacred',
    description:
      'A sober editorial reading of Carlo Acutis as programmer and web designer, and as a digital mediator of the sacred.',
  },
  masthead: {
    eyebrow: 'An editorial piece · 2026',
    title: 'Carlo Acutis',
    subtitle: 'A communication architecture of the sacred, read in a 2026 key.',
    leadLabel: 'Lead',
    lead: 'Carlo Acutis (1991–2006) is most often presented as a teenage saint with a website. This piece takes a narrower, more sober angle: it reads his short work as a communication architecture — a deliberate exercise in information design, distribution, legitimation and ritual. Not a startup, not a scrapbook, not a miracle app. A small, coherent editorial object, assembled by a programmer.',
    byline: 'Read by Thiago Prazeres. Available in five languages.',
  },
  sections: {
    story: {
      eyebrow: 'Storytelling · v2',
      title: 'The Architect of the Invisible: The Journey of Carlo Acutis',
      intro: [
        'Carlo Acutis enters this story not as a prodigy hired to solve a Church technology problem, but as a teenager who noticed that scattered devotional memory could become readable if someone gave it structure.',
        'From London in 1991 to Milan, from daily Mass to the early web, the question becomes practical: how can a miracle kept in a parish archive, a local testimony or a scientific report travel without losing its sign?',
      ],
      chapters: [
        {
          eyebrow: '1991–2006',
          title: 'Before the catalog',
          paragraphs: [
            'Carlo was born in London on 3 May 1991 and returned to Milan with his parents a few months later. The public record insists on the ordinary texture of his life: school, football, video games, computer programs, parish service, a taste for the tools of his generation.',
            'The same record also shows the unusual center of gravity. From his First Communion, the Eucharist became the organizing point of his day. The website and the exhibition did not appear as a detached hobby; they grew from a young life already arranged around the question of presence.',
          ],
        },
        {
          eyebrow: 'Systems integration',
          title: 'The message broker of faith',
          paragraphs: [
            'By the early 2000s, the stories Carlo wanted to circulate were not absent. They were distributed across different systems: parish archives, local memory, scanned images, ecclesial approvals, scientific reports, languages and geographies. In software terms, they behaved like data silos.',
            'Read through Gregor Hohpe’s Enterprise Integration Patterns, Carlo’s work becomes a metaphorical Message Bus. The site and the printable exhibition gave separated records a shared interface. They did not erase local histories; they allowed them to travel through a common channel.',
            'The deeper move was translation. A medieval or early modern miracle cannot simply be copied into the web without changing protocol. Carlo acted like a Message Translator: dates, places, photographs, maps, captions and summaries converted analog devotion into a digital itinerary without pretending that the bit exhausted the mystery.',
          ],
        },
        {
          eyebrow: 'Semiosis',
          title: 'The signal decipherer',
          paragraphs: [
            'For Carlo, the Eucharist was not a vague emblem. It was a sign charged with presence. Peirce helps name the structure: a signifying form, an object toward which the sign points, and an interpretant produced in the person who learns to read the relation.',
            'The catalog intensified that process. A photograph, a map or a medical report does not replace faith; it gives the interpretant more material to work with. The miracle becomes not only an object of devotion but also an object of information, capable of being followed, compared and revisited.',
            'In that sense, the click was not trivial. Opening a record on Lanciano or Buenos Aires began a chain of interpretation: place, matter, witness, institution, reader. Technology became a bridge for semiosis, not a substitute for the sacred.',
          ],
        },
        {
          eyebrow: 'Synthesis',
          title: 'Carlo as a meeting point',
          paragraphs: [
            'The synthesis is not a choice between Carlo the programmer and web designer and Carlo the devotee. It is that the registers met in one editorial act. He treated the database with the seriousness of a reliquary and treated the reliquary with the distribution logic of a network.',
            'By 2026, after canonization and after a new mobile continuation of the Eucharistic-miracles project, the shape of that act is clearer. Carlo became a node between archive and pilgrimage, screen and altar, youthful technical fluency and an older sacramental grammar.',
            'The architecture of public trust points to the real achievement: Carlo did not invent the mysteries he cataloged. He made an interface through which another generation could encounter them without the past being flattened into content.',
          ],
        },
      ],
    },
    problem: {
      eyebrow: 'Problem',
      title: 'Reading Acutis as an architect, not as an icon',
      paragraphs: [
        'The dominant registers on Carlo Acutis are two: the hagiographic — a digital saint, a young witness of faith — and the devotional — a patron of the internet, a prayer in motion. Both are legitimate. Neither is enough. The hagiographic register absorbs the object into the life; the devotional absorbs the life into the cult.',
        'Between the two, something concrete is lost: the work itself. The online exhibition of Eucharistic miracles — built, translated, distributed and accredited through ecclesial networks — is, before anything else, a communication piece. It has a structure. It has a method. It has, in the language of software, an architecture.',
        'This piece asks what is in the register that has been skipped. It reads Acutis as a programmer and web designer, and as a digital mediator of the sacred, treating the online exhibition as a small museum: not a cloud of miracles, but a system for circulating them.',
      ],
    },
    hypothesis: {
      eyebrow: 'Hypothesis',
      title: 'A five-layer communication architecture',
      paragraphs: [
        'The working hypothesis is that the exhibition is best read as a layered architecture: content, interface, distribution, legitimation and ritualization. The word architecture is used here in its modest sense — not as rhetoric, but as the way in which choices stack on top of each other and begin to form a shape.',
        'In this reading, the miracles are content. The site is interface. Parish networks, printable panels and multilingual translations are distribution. The cardinal preface, the association logo and the ecclesial endorsement are legitimation. The virtual pilgrimage, the prayer, the travelling panel circuit are ritualization.',
        'What matters is not any single layer but their coherence. The piece functions not because any one decision is unusual, but because the stack holds. The claim is soft but specific: the work is interesting less for its content than for the quiet discipline of its design.',
      ],
    },
    stateOfTheArt: {
      eyebrow: 'State of the art',
      title: 'What has already been said',
      paragraphs: [
        'The existing writing on Acutis sits on two shelves. On the primary shelf — the institutional record — the artefacts are the online exhibition itself, Christus Vivit, the canonization announcement, and the anthropological fieldwork that has begun to describe the cult. On the secondary shelf — the scholarly literature — the case falls almost exclusively to digital religion studies: Campbell on the distinction between religion online and online religion, Helland on virtual pilgrimage, DiGiovine on contemporary sainthood, and the handbook tradition that has grown around them.',
        'Ecclesial and devotional writing runs alongside both shelves and absorbs Acutis into existing categories of sanctity. Pope Francis, in Christus Vivit, names him as a model of a faith at ease with screens; the 2025 canonization, celebrated under Leo XIV, seals that reading institutionally. The reading is legitimate, but it reads the life, not the work.',
        'A third register is thinly populated. Classical theories of mediation and circulation (Peters, Debray, Couldry and Hepp), the pragmatic canon of information architecture (Rosenfeld, Morville and Arango; Hohpe on integration patterns; Bolter and Grusin on remediation), and older readings of religion as cultural work (Gramsci, Löwy; more recently Zuboff on platform capture) rarely converge around Acutis. They are the frame this piece borrows — not to widen the bibliography for its own sake, but to make the architecture visible in a language the architecture itself was built in.',
      ],
    },
    externalRecord: {
      eyebrow: 'External record',
      title: 'Primary sources and institutional traces',
      intro:
        'The primary documentary anchors the piece reads: the artefact itself, the institutional framings that surround it, and the first scholarly fieldwork to describe the cult. These are not downloads. They are plain links; if an institutional host moves, the text remains; the link is the trace, not the artefact.',
      accessedLabel: 'accessed',
      policyLabel: 'See the external-media policy',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Asset',
        archive: 'Archive',
        document: 'Document',
        press: 'Press',
        scholarship: 'Scholarship',
        site: 'Site',
        theory: 'Theory',
      },
      items: [
        {
          ...externalAnchors.exhibition,
          note: 'The primary artefact. The piece reads this exhibition as a communication architecture, not as devotional content.',
        },
        {
          ...externalAnchors.christusVivit,
          note: 'The apostolic exhortation that names Acutis as a model of a faith at ease with screens. The first documented layer of institutional legitimation.',
        },
        {
          ...externalAnchors.canonization,
          note: 'The announcement that closes the legitimation arc. The canonization took place on 7 September 2025.',
        },
        {
          ...externalAnchors.digiovine,
          note: 'An anthropological reading of the cult and the virtual pilgrimage, where most current scholarship on Acutis converges.',
        },
      ],
    },
    remoteAssets: {
      eyebrow: 'Remote assets',
      title: 'External links for the narrative layer',
      intro:
        'The v2 storytelling layer adds a stricter set of external coordinates: official biography and timeline pages, the exhibition page, the 2026 app trace, a media catalog, and the theory links used for the Hohpe and Peirce reading. They remain external by design.',
      accessedLabel: 'accessed',
      policyLabel: 'See the external-media policy',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Asset',
        archive: 'Archive',
        document: 'Document',
        press: 'Press',
        scholarship: 'Scholarship',
        site: 'Site',
        theory: 'Theory',
      },
      items: [
        {
          ...externalAnchors.biography,
          note: 'Official biographical page used to ground the narrative in Carlo’s ordinary life, parish work and computer practice.',
        },
        {
          ...externalAnchors.timeline,
          note: 'Official chronological anchor for the 1991–2025 arc, including birth, First Communion, illness, beatification and canonization.',
        },
        {
          ...externalAnchors.exhibitionAssociation,
          note: 'Association page describing the Eucharistic Miracles exhibition as created and designed by Carlo Acutis and distributed internationally.',
        },
        {
          ...externalAnchors.vaticanApp,
          note: 'Vatican News trace of the 2026 mobile continuation of the Eucharistic-miracles project, useful for the “until 2026” endpoint.',
        },
        {
          ...externalAnchors.commons,
          note: 'External media catalog for readers who need visual context. No files are downloaded or rehosted by this project.',
        },
        {
          ...externalAnchors.hohpeMessageBus,
          note: 'Conceptual coordinate for reading the exhibition as a shared channel through which distributed records can circulate.',
        },
        {
          ...externalAnchors.hohpeMessageTranslator,
          note: 'Conceptual coordinate for reading Carlo’s web work as translation between archival, devotional and digital protocols.',
        },
        {
          ...externalAnchors.peirceSigns,
          note: 'Conceptual coordinate for the triadic sign reading used in the semiosis chapter.',
        },
      ],
    },
    references: {
      eyebrow: 'References',
      title: 'Secondary literature, grouped by register',
      intro:
        'The secondary literature the piece leans on, grouped by register rather than listed flat. Primary documentary anchors are kept in the external record above. This list is deliberate, not exhaustive: each entry earns its place by doing real work in the argument.',
      groups: [
        {
          heading: 'Carlo Acutis and contemporary sainthood',
          description:
            'The thin but growing body of scholarship that reads Acutis directly, alongside the ecclesial documents that frame him.',
          items: [
            {
              author: 'DiGiovine, M. A.',
              year: '2023',
              title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
              publisher: 'Doctoral dissertation, West Chester University',
            },
            {
              author: 'Francis',
              year: '2019',
              title: 'Christus Vivit (§104–106)',
              publisher: 'Apostolic Exhortation, Vatican',
            },
          ],
        },
        {
          heading: 'Digital religion studies',
          description:
            'The shelf on which the Acutis case is most often placed: religion and the internet, virtual pilgrimage, online/offline practice.',
          items: [
            {
              author: 'Campbell, H. A. (ed.)',
              year: '2012',
              title: 'Digital Religion: Understanding Religious Practice in New Media Worlds',
              publisher: 'Routledge',
            },
            {
              author: 'Campbell, H. A., and R. Tsuria (eds.)',
              year: '2022',
              title: 'Digital Religion: Understanding Religious Practice in Digital Media',
              publisher: 'Routledge, 2nd ed.',
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
              author: 'Dawson, L. L., and D. E. Cowan (eds.)',
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
          heading: 'Communication architecture, mediation and circulation',
          description:
            'The register the piece actually reads Acutis in: how objects are made to travel, how interfaces carry arguments, how messages stay coherent across a stack.',
          items: [
            {
              author: 'Hohpe, G., and B. Woolf',
              year: '2003',
              title: 'Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions',
              publisher: 'Addison-Wesley',
            },
            {
              author: 'Rosenfeld, L., P. Morville, and J. Arango',
              year: '2015',
              title: 'Information Architecture: For the Web and Beyond',
              publisher: "O'Reilly, 4th ed.",
            },
            {
              author: 'Bolter, J. D., and R. Grusin',
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
              author: 'Couldry, N., and A. Hepp',
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
          heading: 'Critical framing: religion, power and platforms',
          description:
            'Older and newer readings of religion as cultural work, kept close at hand to resist the reduction of Acutis to either pure devotion or pure platform.',
          items: [
            {
              author: 'Gramsci, A.',
              year: '1971',
              title: 'Selections from the Prison Notebooks',
              publisher: 'International Publishers (ed. Q. Hoare and G. Nowell Smith)',
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
              publisher: 'Verso, rev. ed.',
            },
            {
              author: 'Castells, M.',
              year: '2010',
              title: 'The Power of Identity',
              publisher: 'Wiley-Blackwell, 2nd ed.',
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
    skipToContent: 'Skip to content',
    otherLanguages: 'Read in another language',
    backToIndex: 'Back to index',
    onThisPage: 'On this page',
    opensInNewTab: '(opens in a new tab)',
    sectionLabels: {
      story: 'Storytelling',
      problem: 'Problem',
      hypothesis: 'Hypothesis',
      stateOfTheArt: 'State of the art',
      externalRecord: 'External record',
      remoteAssets: 'Remote assets',
      references: 'References',
    },
  },
  colophon: {
    note: 'This page belongs to release v2.1.0 — 2026 continuity anchor. The storytelling layer now lands in the February 2026 mobile continuation of Carlo’s Eucharistic-miracles work.',
    license: 'Text: CC BY 4.0 · Code: MIT.',
  },
}
