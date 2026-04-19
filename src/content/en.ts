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
      'A sober editorial reading of Carlo Acutis as programmer, web designer and digital mediator of the sacred.',
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
    problem: {
      eyebrow: 'Problem',
      title: 'Reading Acutis as an architect, not as an icon',
      paragraphs: [
        'The dominant registers on Carlo Acutis are two: the hagiographic — a digital saint, a young witness of faith — and the devotional — a patron of the internet, a prayer in motion. Both are legitimate. Neither is enough. The hagiographic register absorbs the object into the life; the devotional absorbs the life into the cult.',
        'Between the two, something concrete is lost: the work itself. The online exhibition of Eucharistic miracles — built, translated, distributed and accredited through ecclesial networks — is, before anything else, a communication piece. It has a structure. It has a method. It has, in the language of software, an architecture.',
        'This piece asks what is in the register that has been skipped. It reads Acutis as a programmer, a web designer and a digital mediator of the sacred, and it treats the online exhibition as a small museum: not a cloud of miracles, but a system for circulating them.',
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
        archive: 'Archive',
        document: 'Document',
        press: 'Press',
        scholarship: 'Scholarship',
        site: 'Site',
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
      problem: 'Problem',
      hypothesis: 'Hypothesis',
      stateOfTheArt: 'State of the art',
      externalRecord: 'External record',
      references: 'References',
    },
  },
  colophon: {
    note: 'This page belongs to release v0.9.0 — Public beta. The editorial architecture still holds; this beta tightens accessibility, public references, and reading conditions for review.',
    license: 'Text: CC BY 4.0 · Code: MIT.',
  },
}
