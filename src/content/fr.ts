import type { LocaleContent } from './types.ts'
import { externalAnchors, POLICY_URL } from './externalAnchors.ts'

export const fr: LocaleContent = {
  code: 'fr',
  label: 'Français',
  htmlLang: 'fr',
  dir: 'ltr',
  meta: {
    title: 'Carlo Acutis — une architecture de communication du sacré',
    description:
      'Une lecture éditoriale sobre de Carlo Acutis, programmeur, designer web et médiateur numérique du sacré.',
  },
  masthead: {
    eyebrow: 'Pièce éditoriale · 2026',
    title: 'Carlo Acutis',
    subtitle: 'Une architecture de communication du sacré, lue en clé 2026.',
    lead: 'On présente d’habitude Carlo Acutis (1991–2006) comme un adolescent saint doté d’un site web. Cette pièce choisit un angle plus étroit et plus sobre : elle lit son œuvre brève comme une architecture de communication — un exercice délibéré de design de l’information, de distribution, de légitimation et de rituel. Pas une startup, pas un album dévotionnel, pas une application de miracles. Un petit objet éditorial cohérent, assemblé par un programmeur.',
    byline: 'Lecture par Thiago Prazeres. Disponible en cinq langues.',
  },
  sections: {
    problem: {
      eyebrow: 'Problème',
      title: 'Lire Acutis en architecte, non en icône',
      paragraphs: [
        'Les registres dominants sur Carlo Acutis sont deux : l’hagiographique — un saint numérique, un jeune témoin de la foi — et le dévotionnel — un patron d’internet, une prière en mouvement. Les deux sont légitimes. Aucun ne suffit. Le registre hagiographique absorbe l’œuvre dans la vie ; le dévotionnel absorbe la vie dans le culte.',
        'Entre les deux, on perd quelque chose de concret : l’œuvre elle-même. L’exposition en ligne des miracles eucharistiques — construite, traduite, distribuée et accréditée par des réseaux ecclésiaux — est d’abord une pièce de communication. Elle a une structure. Elle a une méthode. Elle a, dans la langue du logiciel, une architecture.',
        'Cette pièce interroge le registre qui a été sauté. Elle lit Acutis comme programmeur, designer web et médiateur numérique du sacré, et traite l’exposition en ligne comme un petit musée : non un nuage de miracles, mais un système pour les faire circuler.',
      ],
    },
    hypothesis: {
      eyebrow: 'Hypothèse',
      title: 'Une architecture de communication à cinq couches',
      paragraphs: [
        'L’hypothèse de travail est que l’exposition se lit mieux comme une architecture en couches : contenu, interface, distribution, légitimation et ritualisation. Le mot architecture est ici au sens modeste — non comme rhétorique, mais comme la manière dont les décisions s’empilent les unes sur les autres et commencent à dessiner une forme.',
        'Dans cette lecture, les miracles sont contenu. Le site est interface. Les réseaux paroissiaux, les panneaux imprimables et les traductions multilingues sont distribution. La préface du cardinal, le logo de l’association et l’aval ecclésial sont légitimation. Le pèlerinage virtuel, la prière et le circuit itinérant des panneaux sont ritualisation.',
        'Ce qui compte n’est pas une couche isolée, mais leur cohérence. La pièce fonctionne non parce qu’une décision serait inhabituelle, mais parce que la pile tient. La thèse est sobre et précise : l’œuvre intéresse moins par son contenu que par la discipline silencieuse de son dessin.',
      ],
    },
    stateOfTheArt: {
      eyebrow: 'État de l’art',
      title: 'Ce qui a déjà été dit',
      paragraphs: [
        'La bibliographie existante sur Acutis se répartit sur deux rayonnages. Sur le rayonnage primaire — le registre institutionnel — les artefacts sont l’exposition en ligne elle-même, Christus Vivit, l’annonce de la canonisation et le travail ethnographique qui a commencé à décrire le culte. Sur le rayonnage secondaire — la littérature académique — le cas relève presque uniquement des études de religion numérique : Campbell sur la distinction entre religion online et online religion, Helland sur le pèlerinage virtuel, DiGiovine sur la sainteté contemporaine, et la tradition de handbooks qui s’est développée autour d’eux.',
        'L’écriture ecclésiale et dévotionnelle court à côté des deux rayonnages et absorbe Acutis dans des catégories déjà données de sainteté. Le pape François, dans Christus Vivit, le nomme comme modèle d’une foi à l’aise avec les écrans ; la canonisation de 2025, célébrée sous Léon XIV, scelle institutionnellement cette lecture. La lecture est légitime, mais elle lit la vie, non l’œuvre.',
        'Un troisième registre reste peu habité. Les théories classiques de la médiation et de la circulation (Peters, Debray, Couldry et Hepp), le canon pragmatique de l’architecture de l’information (Rosenfeld, Morville et Arango ; Hohpe sur les patterns d’intégration ; Bolter et Grusin sur la remédiation), et des lectures plus anciennes de la religion comme travail culturel (Gramsci, Löwy ; plus récemment Zuboff sur la capture par la plateforme) convergent rarement autour d’Acutis. C’est le cadre que cette pièce emprunte — non pour grossir la bibliographie, mais pour rendre visible l’architecture dans la langue dans laquelle l’architecture elle-même a été construite.',
      ],
    },
    externalRecord: {
      eyebrow: 'Archives externes',
      title: 'Sources primaires et traces institutionnelles',
      intro:
        'Les ancrages documentaires primaires que cette pièce lit : l’artefact lui-même, les cadres institutionnels qui l’entourent et le premier travail de terrain à avoir commencé à décrire le culte. Ce ne sont pas des téléchargements. Ce sont de simples liens ; si un hôte institutionnel bouge, le texte demeure ; le lien est la trace, non l’artefact.',
      accessedLabel: 'consulté le',
      policyLabel: 'Voir la politique des médias externes',
      policyUrl: POLICY_URL,
      kindLabels: {
        archive: 'Archives',
        document: 'Document',
        press: 'Presse',
        scholarship: 'Recherche',
        site: 'Site',
      },
      items: [
        {
          ...externalAnchors.exhibition,
          note: 'L’artefact primaire. La pièce lit cette exposition comme une architecture de communication, non comme un contenu dévotionnel.',
        },
        {
          ...externalAnchors.christusVivit,
          note: 'L’exhortation apostolique qui nomme Acutis comme modèle d’une foi à l’aise avec les écrans. La première couche documentée de légitimation institutionnelle.',
        },
        {
          ...externalAnchors.canonization,
          note: 'L’annonce qui ferme l’arc de la légitimation. La canonisation a eu lieu le 7 septembre 2025.',
        },
        {
          ...externalAnchors.digiovine,
          note: 'Une lecture anthropologique du culte et du pèlerinage virtuel, autour de laquelle converge la majeure partie de la bibliographie actuelle sur Acutis.',
        },
      ],
    },
    references: {
      eyebrow: 'Références',
      title: 'Littérature secondaire, regroupée par registre',
      intro:
        'La littérature secondaire sur laquelle la pièce s’appuie, regroupée par registre plutôt que listée en bloc. Les ancrages documentaires primaires restent dans les archives externes ci-dessus. La liste est délibérée, non exhaustive : chaque entrée y figure parce qu’elle fait un travail réel dans l’argument.',
      groups: [
        {
          heading: 'Carlo Acutis et la sainteté contemporaine',
          description:
            'Le corpus mince mais croissant d’études qui lisent Acutis directement, aux côtés des documents ecclésiaux qui l’encadrent.',
          items: [
            {
              author: 'DiGiovine, M. A.',
              year: '2023',
              title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
              publisher: 'Thèse de doctorat, West Chester University',
            },
            {
              author: 'François',
              year: '2019',
              title: 'Christus Vivit (§104–106)',
              publisher: 'Exhortation apostolique, Vatican',
            },
          ],
        },
        {
          heading: 'Études de religion numérique',
          description:
            'Le rayonnage sur lequel le cas Acutis est le plus souvent placé : religion et internet, pèlerinage virtuel, pratique en ligne/hors ligne.',
          items: [
            {
              author: 'Campbell, H. A. (dir.)',
              year: '2012',
              title: 'Digital Religion: Understanding Religious Practice in New Media Worlds',
              publisher: 'Routledge',
            },
            {
              author: 'Campbell, H. A., et R. Tsuria (dir.)',
              year: '2022',
              title: 'Digital Religion: Understanding Religious Practice in Digital Media',
              publisher: 'Routledge, 2ᵉ éd.',
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
              author: 'Dawson, L. L., et D. E. Cowan (dir.)',
              year: '2004',
              title: 'Religion Online: Finding Faith on the Internet',
              publisher: 'Routledge',
            },
            {
              author: 'O’Leary, S. D.',
              year: '1996',
              title: 'Cyberspace as Sacred Space: Communicating Religion on Computer Networks',
              publisher: 'Journal of the American Academy of Religion 64 (4) : 781–808',
            },
          ],
        },
        {
          heading: 'Architecture de la communication, médiation et circulation',
          description:
            'Le registre dans lequel la pièce lit effectivement Acutis : comment on fait voyager des objets, comment les interfaces portent des arguments, comment des messages restent cohérents à travers une pile.',
          items: [
            {
              author: 'Hohpe, G., et B. Woolf',
              year: '2003',
              title: 'Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions',
              publisher: 'Addison-Wesley',
            },
            {
              author: 'Rosenfeld, L., P. Morville, et J. Arango',
              year: '2015',
              title: 'Information Architecture: For the Web and Beyond',
              publisher: "O'Reilly, 4ᵉ éd.",
            },
            {
              author: 'Bolter, J. D., et R. Grusin',
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
              author: 'Couldry, N., et A. Hepp',
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
          heading: 'Cadre critique : religion, pouvoir et plateformes',
          description:
            'Lectures anciennes et récentes de la religion comme travail culturel, gardées à portée de main pour résister à la réduction d’Acutis à la pure dévotion ou à la pure plateforme.',
          items: [
            {
              author: 'Gramsci, A.',
              year: '1971',
              title: 'Selections from the Prison Notebooks',
              publisher: 'International Publishers (dir. Q. Hoare et G. Nowell Smith)',
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
              publisher: 'Verso, éd. rev.',
            },
            {
              author: 'Castells, M.',
              year: '2010',
              title: 'The Power of Identity',
              publisher: 'Wiley-Blackwell, 2ᵉ éd.',
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
    skipToContent: 'Aller au contenu',
    otherLanguages: 'Lire dans une autre langue',
    backToIndex: 'Retour à l’index',
    onThisPage: 'Sur cette page',
    sectionLabels: {
      problem: 'Problème',
      hypothesis: 'Hypothèse',
      stateOfTheArt: 'État de l’art',
      externalRecord: 'Archives externes',
      references: 'Références',
    },
  },
  colophon: {
    note: 'Cette page appartient à la version v0.8.0 — Édition de recherche. L’architecture éditoriale de la v0.4.0 tient ; la bibliographie est désormais regroupée par registre et la distinction entre ancrages documentaires primaires et littérature secondaire est explicite.',
    license: 'Texte : CC BY 4.0 · Code : MIT.',
  },
}
