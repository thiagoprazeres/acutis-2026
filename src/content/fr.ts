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
      'Une lecture éditoriale sobre de Carlo Acutis comme programmeur et designer web, et comme médiateur numérique du sacré.',
  },
  masthead: {
    eyebrow: 'Pièce éditoriale · 2026',
    title: 'Carlo Acutis',
    subtitle: 'Une architecture de communication du sacré, lue en clé 2026.',
    leadLabel: 'Ouverture',
    lead: 'Carlo Acutis fut plus qu’un adolescent pieux doté d’un talent technique. Il fut programmeur et designer web, quelqu’un qui comprit que la foi a aussi besoin de structure, de langage et de circulation. En cataloguant les miracles eucharistiques approuvés par l’Église et en les transformant en exposition, site et parcours public, il a donné une forme numérique à ce qui était longtemps resté dispersé entre archives, mémoire locale et dévotion. En 2026, cette mission reste vivante. Ce qui a commencé comme catalogue est devenu exposition, puis site, et se poursuit maintenant sous forme mobile. Carlo compte aujourd’hui parce qu’il a montré comment la technologie peut organiser la confiance, pas seulement l’information.',
    byline: 'Lecture par Thiago Prazeres. Disponible en cinq langues.',
  },
  sections: {
    story: {
      eyebrow: 'Récit · v2.1',
      title: 'L’Architecte de l’Invisible',
      intro: [
        'Carlo Acutis n’est pas entré sur internet pour fuir le monde. Il y est entré pour donner forme à ce que le monde ne parvenait plus à voir.',
        'Né en 1991 et mort en 2006, Carlo est devenu connu pour sa dévotion à l’Eucharistie. Mais cette description reste trop étroite pour ce qu’il représente aujourd’hui. Carlo fut aussi programmeur et designer web. Il n’a pas simplement admiré la technologie. Il a compris que le code, l’interface, l’ordre visuel et l’accès public pouvaient servir quelque chose de plus grand que l’information elle-même.',
        'C’est là que commence sa singularité. Alors qu’une grande partie du premier web devenait un espace de distraction, de nouveauté et de vitesse, Carlo l’a traité comme un lieu d’organisation. Il n’a pas utilisé internet seulement pour naviguer. Il l’a utilisé pour cataloguer. Il n’a pas utilisé les médias numériques seulement pour parler de la foi. Il les a utilisés pour structurer la visibilité de la foi.',
        'De ce geste est née son œuvre la plus forte : le catalogage des miracles eucharistiques approuvés par l’Église et la création d’une exposition internationale et d’un site web qui les ont rendus publiquement navigables. Ce ne fut pas seulement un acte de dévotion. Ce fut un acte de design.',
      ],
      chapters: [
        {
          eyebrow: 'Catalogue',
          title: 'Cataloguer l’invisible',
          paragraphs: [
            'Avant Carlo, les miracles eucharistiques existaient pour la plupart des gens sous forme de fragments. Ils étaient conservés dans des archives, des livres, des traditions locales, une mémoire ecclésiale et un discours théologique. Ils étaient réels dans la vie de l’Église, mais dispersés pour le regard public. Ils existaient comme témoignage, mais pas encore comme circulation numérique contemporaine.',
            'Carlo a reconnu cet écart. Il a compris que, pour sa génération, il ne suffirait pas de répéter que l’Eucharistie est au centre de la vie catholique. Il faudrait montrer. Il faudrait organiser. Il faudrait construire un chemin par lequel l’invisible puisse être rencontré à nouveau.',
            'C’est pourquoi le catalogage compte autant ici. Cataloguer ne signifiait pas seulement dresser une liste de cas. Cela signifiait transformer un témoignage dispersé en structure publique. Cela signifiait prendre des miracles qui avaient vécu sous des formes éparses et les réarticuler comme séquence, panneau, fiche, pays, date, image et récit.',
            'Entre les mains de Carlo, la foi a gagné une architecture. Le sacré a gagné une interface. Voilà le premier mouvement de son œuvre : non pas l’invention, mais l’organisation. Carlo n’a pas inventé les miracles. Il les a rendus lisibles dans un nouveau médium.',
          ],
        },
        {
          eyebrow: 'Intégration de systèmes',
          title: 'Hohpe + Acutis',
          paragraphs: [
            'C’est ici que Gregor Hohpe devient une lentille utile. Hohpe aide à penser l’architecture comme mouvement entre les couches : de la salle des machines à l’étage de l’expérience publique, de l’implémentation à l’intelligibilité, de la structure cachée à la forme que quelqu’un peut parcourir.',
            'Lu ainsi, Carlo n’apparaît pas seulement comme un adolescent religieux qui a fait un site web, mais comme quelqu’un qui a résolu un vrai problème d’intégration. D’un côté se trouvait le backend de la tradition : récits de miracles approuvés par l’Église, mémoire historique, contexte doctrinal, dispersion géographique et sens sacramentel.',
            'De l’autre côté se trouvait le frontend de son temps : panneaux d’exposition, navigation du site, ressources téléchargeables, circulation multilingue et rencontre publique. Carlo a relié ces couches. Il a pris des contenus qui vivaient dans des contextes ecclésiaux, culturels et historiques séparés et les a fait circuler dans un format public cohérent.',
            'Il a réduit la fragmentation. Il a donné de la cohérence à la présentation. Il a rendu l’accès possible sans aplatir le sens. En ce sens, Carlo a agi comme un architecte de la circulation : il a fait voyager la foi à travers les médias et rendu des siècles de témoignage disponibles comme expérience contemporaine.',
            'C’est pourquoi l’exposition compte autant. Elle ne fut pas seulement une collection. Elle fut une surface d’intégration. Elle a fait fonctionner un corps dispersé de témoignage religieux comme un système public.',
          ],
        },
        {
          eyebrow: 'Sémiose',
          title: 'Peirce + Acutis',
          paragraphs: [
            'Mais l’intégration seule n’explique pas Carlo. Carlo n’a pas seulement fait circuler des choses. Il les a fait signifier.',
            'C’est ici que Charles Sanders Peirce offre la lentille la plus précise. Peirce permet de voir que l’œuvre de Carlo ne concerne pas seulement l’architecture du contenu, mais l’architecture du signe. Le miracle n’est pas simplement affiché. Il devient lisible à travers une chaîne de signes.',
            'Les images fonctionnent comme icônes lorsqu’elles offrent une ressemblance visuelle et une forme immédiate. Les dates, les lieux, les traces et les références documentaires fonctionnent comme indices lorsqu’ils pointent vers une occurrence historique et un témoignage matériel. Le langage théologique, le cadrage ecclésial et la doctrine eucharistique fonctionnent comme symboles lorsqu’ils inscrivent chaque cas dans une tradition partagée de sens.',
            'L’accomplissement de Carlo comme designer web vit exactement ici. Il n’a pas créé une interface neutre. Il a créé un parcours interprétatif. Il a organisé texte, image, contexte et séquence afin que le visiteur ne reçoive pas des données isolées, mais une rencontre guidée. L’utilisateur voit. Lit. Relie. Interprète. La confiance commence à se former.',
            'C’est pourquoi Carlo peut être lu comme designer web de la confiance publique. Il a conçu plus que des écrans et des panneaux. Il a conçu de la crédibilité. Il a compris qu’à l’âge numérique, la foi aurait besoin non seulement de proclamation, mais aussi de forme.',
          ],
        },
        {
          eyebrow: 'Synthèse',
          title: 'Carlo comme point de rencontre',
          paragraphs: [
            'C’est ici que les deux lignes convergent. Carlo se tient au point de rencontre entre l’intégration des systèmes et la sémiose religieuse. Il intègre des couches, mais il structure aussi l’interprétation. Il organise la circulation, mais il organise aussi le sens.',
            'Il prend témoignage, archive, doctrine, image et géographie et leur donne un chemin partagé dans le monde numérique public. C’est pourquoi on ne peut pas le réduire à “un saint d’internet” ou à “un garçon catholique doué qui a fait un site web”. Ces descriptions sont trop minces.',
            'Carlo compte parce qu’il a transformé les médias numériques en un lieu où confiance, témoignage et sens eucharistique pouvaient circuler ensemble. Il n’utilisait pas simplement le web. Il donnait au web une autre finalité.',
          ],
        },
        {
          eyebrow: '2026',
          title: 'Pourquoi cela compte en 2026',
          paragraphs: [
            'En 2026, la pertinence de Carlo devient encore plus claire parce que sa mission ne s’est pas arrêtée au premier web. En février 2026, Vatican News a annoncé le lancement d’une nouvelle application mobile dédiée aux miracles eucharistiques catalogués par Carlo Acutis.',
            'L’article présente explicitement l’application comme une continuité de sa mission : Carlo a utilisé la technologie de son temps pour cataloguer et promouvoir les miracles eucharistiques approuvés par l’Église, et la nouvelle application poursuit ce même travail dans le langage mobile contemporain.',
            'Ce détail renforce l’argument. Il signifie que Carlo n’est pas important seulement comme pionnier du passé. Il reste actif comme architecture présente. Ce qui a commencé comme catalogue est devenu exposition. Ce qui est devenu exposition est devenu site. Ce qui est devenu site se poursuit maintenant comme application mobile.',
            'La forme change. La mission demeure. C’est pourquoi 2026 compte autant. L’Église elle-même traite l’œuvre de Carlo non comme une mémoire nostalgique, mais comme un héritage numérique fertile. L’application de février 2026 montre que son intuition originale génère encore de nouvelles interfaces pour le même témoignage eucharistique.',
            'L’application ne remplace pas Carlo. Elle prouve que l’architecture qu’il a commencée reste vivante. Dans une époque marquée par l’excès de contenu, la crédibilité instable, les médias synthétiques et l’attention fragmentée, Carlo offre un modèle plus fort : non le bruit, mais la curation ; non l’accélération seule, mais la structure ; non le spectacle, mais la confiance publique.',
            'C’est pourquoi son œuvre compte maintenant. Non parce qu’il aurait anticipé chaque technologie future, mais parce qu’il a saisi quelque chose de plus profond : la technologie devient signifiante lorsqu’elle sert un chemin fiable d’interprétation.',
          ],
        },
        {
          eyebrow: 'Continuité',
          title: 'La continuité de la mission',
          paragraphs: [
            'Carlo Acutis a catalogué les miracles eucharistiques approuvés par l’Église. Il les a transformés en exposition. Il a transformé l’exposition en site. Et, en 2026, cette même ligne continue sous forme mobile.',
            'C’est la manière la plus simple et la plus forte de lire son héritage au présent : catalogue -> exposition -> site -> application mobile.',
            'Cette continuité ne dilue pas l’originalité de son œuvre. Elle la confirme. Carlo reste le centre parce que chaque nouvelle couche dépend encore de l’architecture qu’il a d’abord donnée à ce témoignage : organisation, visibilité, circulation, interprétation et confiance.',
          ],
        },
        {
          eyebrow: 'Clôture',
          title: 'Donner forme',
          paragraphs: [
            'Carlo n’est pas entré sur internet pour suivre son flux. Il y est entré pour lui donner forme.',
            'Il a programmé pour organiser. Il a designé pour orienter. Il a catalogué pour faire circuler la foi.',
            'Et, ce faisant, il a fait porter au web quelque chose qu’il porte rarement bien : le poids du sacré sans perdre sa lisibilité publique.',
            'C’est pourquoi Carlo Acutis compte en 2026. Non seulement comme mémoire de la dévotion catholique, mais comme architecte de l’invisible.',
          ],
        },
      ],
    },
    problem: {
      eyebrow: 'Problème',
      title: 'Lire Acutis en architecte, non en icône',
      paragraphs: [
        'Les registres dominants sur Carlo Acutis sont deux : l’hagiographique — un saint numérique, un jeune témoin de la foi — et le dévotionnel — un patron d’internet, une prière en mouvement. Les deux sont légitimes. Aucun ne suffit. Le registre hagiographique absorbe l’œuvre dans la vie ; le dévotionnel absorbe la vie dans le culte.',
        'Entre les deux, on perd quelque chose de concret : l’œuvre elle-même. L’exposition en ligne des miracles eucharistiques — construite, traduite, distribuée et accréditée par des réseaux ecclésiaux — est d’abord une pièce de communication. Elle a une structure. Elle a une méthode. Elle a, dans la langue du logiciel, une architecture.',
        'Cette pièce interroge le registre qui a été sauté. Elle lit Acutis comme programmeur et designer web, et comme médiateur numérique du sacré, en traitant l’exposition en ligne comme un petit musée : non un nuage de miracles, mais un système pour les faire circuler.',
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
        asset: 'Actif',
        archive: 'Archives',
        document: 'Document',
        press: 'Presse',
        scholarship: 'Recherche',
        site: 'Site',
        theory: 'Théorie',
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
    remoteAssets: {
      eyebrow: 'Actifs distants',
      title: 'Liens externes pour la couche narrative',
      intro:
        'La couche narrative v2 ajoute un ensemble plus strict de coordonnées externes : biographie et chronologie officielles, page de l’exposition, trace de l’app de 2026, catalogue média et liens théoriques utilisés dans la lecture Hohpe et Peirce. Ils restent externes par choix.',
      accessedLabel: 'consulté le',
      policyLabel: 'Voir la politique des médias externes',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Actif',
        archive: 'Archives',
        document: 'Document',
        press: 'Presse',
        scholarship: 'Recherche',
        site: 'Site',
        theory: 'Théorie',
      },
      items: [
        {
          ...externalAnchors.biography,
          note: 'Page biographique officielle utilisée pour ancrer le récit dans la vie ordinaire de Carlo, le service paroissial et la pratique informatique.',
        },
        {
          ...externalAnchors.timeline,
          note: 'Ancrage chronologique officiel pour l’arc 1991–2025, incluant naissance, Première Communion, maladie, béatification et canonisation.',
        },
        {
          ...externalAnchors.exhibitionAssociation,
          note: 'Page de l’association décrivant l’exposition des Miracles Eucharistiques comme créée et conçue par Carlo Acutis et distribuée internationalement.',
        },
        {
          ...externalAnchors.vaticanApp,
          note: 'Trace de Vatican News sur la continuation mobile, en 2026, du projet des miracles eucharistiques, utile pour le point d’arrivée « jusqu’en 2026 ».',
        },
        {
          ...externalAnchors.commons,
          note: 'Catalogue média externe pour les lecteurs qui ont besoin de contexte visuel. Aucun fichier n’est téléchargé ni réhébergé par ce projet.',
        },
        {
          ...externalAnchors.hohpeMessageBus,
          note: 'Coordonnée conceptuelle pour lire l’exposition comme canal partagé par lequel des dossiers distribués peuvent circuler.',
        },
        {
          ...externalAnchors.hohpeMessageTranslator,
          note: 'Coordonnée conceptuelle pour lire le travail web de Carlo comme traduction entre protocoles archivistiques, dévotionnels et numériques.',
        },
        {
          ...externalAnchors.peirceSigns,
          note: 'Coordonnée conceptuelle pour la lecture triadique du signe utilisée dans le chapitre sur la sémiose.',
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
    opensInNewTab: '(s’ouvre dans un nouvel onglet)',
    sectionLabels: {
      story: 'Récit',
      problem: 'Problème',
      hypothesis: 'Hypothèse',
      stateOfTheArt: 'État de l’art',
      externalRecord: 'Archives externes',
      remoteAssets: 'Actifs distants',
      references: 'Références',
    },
  },
  colophon: {
    note: 'Cette page appartient à la version v2.1.0 — Ancrage de continuité 2026. La couche narrative rejoint désormais la continuation mobile de février 2026 du travail de Carlo sur les miracles eucharistiques.',
    license: 'Texte : CC BY 4.0 · Code : MIT.',
  },
}
