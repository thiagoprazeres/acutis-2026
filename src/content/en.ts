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
        'The literature on Acutis leans in two directions. On one side, digital religion studies — Heidi Campbell on religion online versus online religion, Christopher Helland on virtual pilgrimage, Michael DiGiovine on the cult — read him as a case of religion adapting to new media.',
        'On the other side, ecclesial and devotional writing absorbs him into existing categories of sanctity. Pope Francis, in Christus Vivit, names him as a model of a faith at ease with screens; the 2025 canonization seals that reading institutionally.',
        'Between these two shelves, a third register is thinly populated. Information architecture (Gregor Hohpe’s integration patterns; the classic web writing of Jakob Nielsen), the critique of platform capitalism (Shoshana Zuboff), and older readings of religion as cultural work (Gramsci, Löwy) are rarely brought together around Acutis. They are the frame this piece borrows — not to expand the bibliography, but to make the architecture visible.',
      ],
    },
    externalRecord: {
      eyebrow: 'External record',
      title: 'Primary sources and institutional traces',
      intro:
        'These are not downloads. They are external references — plain links to the sources the piece reads. If an institutional host moves, the text remains; the link is the trace, not the artefact.',
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
      title: 'A short, deliberate bibliography',
      intro:
        'The list is intentionally small. Each entry is present because the argument leans on it. Further reading belongs to later releases of this piece.',
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
          author: 'DiGiovine, M. A.',
          year: '2023',
          title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
          publisher: 'Doctoral dissertation, West Chester University',
        },
        {
          author: 'Francis',
          year: '2019',
          title: 'Christus Vivit',
          publisher: 'Apostolic Exhortation, Vatican',
        },
        {
          author: 'Hohpe, G., and B. Woolf',
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
    skipToContent: 'Skip to content',
    otherLanguages: 'Read in another language',
    backToIndex: 'Back to index',
    onThisPage: 'On this page',
    sectionLabels: {
      problem: 'Problem',
      hypothesis: 'Hypothesis',
      stateOfTheArt: 'State of the art',
      externalRecord: 'External record',
      references: 'References',
    },
  },
  colophon: {
    note: 'This page belongs to release v0.6.0 — Remote media enrichment. The editorial architecture from v0.4.0 still holds; external references now enter the text as plain links, not as local assets.',
    license: 'Text: CC BY 4.0 · Code: MIT.',
  },
}
