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
        'La littérature sur Acutis se tourne vers deux directions. D’un côté, les études de religion numérique — Heidi Campbell sur la distinction entre religion online et online religion, Christopher Helland sur le pèlerinage virtuel, Michael DiGiovine sur le culte — le lisent comme un cas de religion s’adaptant aux nouveaux médias.',
        'De l’autre, l’écriture ecclésiale et dévotionnelle l’absorbe dans des catégories déjà données de sainteté. Le pape François, dans Christus Vivit, le nomme comme modèle d’une foi à l’aise avec les écrans ; la canonisation de 2025 scelle institutionnellement cette lecture.',
        'Entre ces deux rayonnages, un troisième registre reste peu habité. L’architecture de l’information (les patterns d’intégration de Gregor Hohpe ; l’écriture classique de Jakob Nielsen sur les sites comme systèmes), la critique du capitalisme de plateforme (Shoshana Zuboff) et des lectures plus anciennes de la religion comme travail culturel (Gramsci, Löwy) se rencontrent rarement autour d’Acutis. C’est le cadre que cette pièce emprunte — non pour élargir la bibliographie, mais pour rendre l’architecture visible.',
      ],
    },
    externalRecord: {
      eyebrow: 'Archives externes',
      title: 'Sources primaires et traces institutionnelles',
      intro:
        'Ce ne sont pas des téléchargements. Ce sont des références externes — de simples liens vers les sources que cette pièce lit. Si un hôte institutionnel bouge, le texte demeure ; le lien est la trace, non l’artefact.',
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
      title: 'Une bibliographie courte et délibérée',
      intro:
        'La liste est volontairement réduite. Chaque entrée figure ici parce que l’argument s’y appuie. Des lectures supplémentaires relèveront des publications ultérieures de cette pièce.',
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
          author: 'DiGiovine, M. A.',
          year: '2023',
          title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
          publisher: 'Thèse de doctorat, West Chester University',
        },
        {
          author: 'François',
          year: '2019',
          title: 'Christus Vivit',
          publisher: 'Exhortation apostolique, Vatican',
        },
        {
          author: 'Hohpe, G., et B. Woolf',
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
    note: 'Cette page appartient à la version v0.6.0 — Enrichissement des médias externes. L’architecture éditoriale de la v0.4.0 tient ; les références externes entrent désormais dans le texte comme de simples liens, non comme des ressources locales.',
    license: 'Texte : CC BY 4.0 · Code : MIT.',
  },
}
