import type { LocaleContent } from './types.ts'
import { externalAnchors, POLICY_URL } from './externalAnchors.ts'

export const es: LocaleContent = {
  code: 'es',
  label: 'Español',
  htmlLang: 'es',
  dir: 'ltr',
  meta: {
    title: 'Carlo Acutis — una arquitectura de comunicación de lo sagrado',
    description:
      'Una lectura editorial sobria de Carlo Acutis como programador, diseñador web y mediador digital de lo sagrado.',
  },
  masthead: {
    eyebrow: 'Pieza editorial · 2026',
    title: 'Carlo Acutis',
    subtitle: 'Una arquitectura de comunicación de lo sagrado, leída en clave 2026.',
    leadLabel: 'Apertura',
    lead: 'A Carlo Acutis (1991–2006) suele presentárselo como un adolescente santo con un sitio web. Esta pieza elige un ángulo más estrecho y más sobrio: lee su breve obra como una arquitectura de comunicación — un ejercicio deliberado de diseño de información, distribución, legitimación y ritual. No es una startup, no es un álbum devocional, no es una app de milagros. Es un pequeño objeto editorial coherente, armado por un programador.',
    byline: 'Leído por Thiago Prazeres. Disponible en cinco idiomas.',
  },
  sections: {
    story: {
      eyebrow: 'Narrativa · v2',
      title: 'El Arquitecto de lo Invisible: el viaje de Carlo Acutis',
      intro: [
        'Carlo Acutis entra en esta historia no como un prodigio convocado para resolver un problema tecnológico de la Iglesia, sino como un adolescente que percibió que una memoria devocional dispersa podía hacerse legible si alguien le daba estructura.',
        'De Londres en 1991 a Milán, de la misa diaria a la web temprana, la pregunta se vuelve práctica: ¿cómo puede viajar un milagro conservado en un archivo parroquial, en un testimonio local o en un informe científico sin perder su signo?',
      ],
      chapters: [
        {
          eyebrow: '1991–2006',
          title: 'Antes del catálogo',
          paragraphs: [
            'Carlo nació en Londres el 3 de mayo de 1991 y volvió a Milán con sus padres pocos meses después. El registro público insiste en la textura ordinaria de su vida: escuela, fútbol, videojuegos, programas de ordenador, servicio parroquial, familiaridad con las herramientas de su generación.',
            'Ese mismo registro muestra también un centro de gravedad poco común. Desde la Primera Comunión, la Eucaristía se convirtió en el punto organizador de su día. El sitio y la exposición no aparecieron como una afición separada; crecieron desde una vida joven ya ordenada por la pregunta de la presencia.',
          ],
        },
        {
          eyebrow: 'Integración de sistemas',
          title: 'El broker de la fe',
          paragraphs: [
            'A comienzos de los años 2000, las historias que Carlo quería hacer circular no estaban ausentes. Estaban distribuidas en sistemas distintos: archivos parroquiales, memoria local, imágenes escaneadas, aprobaciones eclesiales, informes científicos, lenguas y geografías. En términos de software, funcionaban como silos de datos.',
            'Leído con las Enterprise Integration Patterns de Gregor Hohpe como fondo, el trabajo de Carlo se vuelve un Message Bus metafórico. El sitio y la exposición imprimible dieron a registros separados una interfaz común. No borraron las historias locales; permitieron que viajaran por un canal compartido.',
            'El movimiento más profundo fue la traducción. Un milagro medieval o moderno no puede copiarse simplemente a la web sin cambiar de protocolo. Carlo actuó como un Message Translator: fechas, lugares, fotografías, mapas, leyendas y resúmenes convirtieron la devoción analógica en itinerario digital sin fingir que el bit agotaba el misterio.',
          ],
        },
        {
          eyebrow: 'Semiosis',
          title: 'El descifrador de señales',
          paragraphs: [
            'Para Carlo, la Eucaristía no era un emblema vago. Era un signo cargado de presencia. Peirce ayuda a nombrar la estructura: una forma significante, un objeto hacia el que apunta el signo y un interpretante producido en la persona que aprende a leer esa relación.',
            'El catálogo intensificó ese proceso. Una fotografía, un mapa o un informe médico no sustituye la fe; ofrece más materia al interpretante. El milagro se convierte no solo en objeto de devoción, sino también en objeto de información, capaz de ser seguido, comparado y revisitado.',
            'En ese sentido, el clic no era trivial. Abrir una ficha sobre Lanciano o Buenos Aires iniciaba una cadena de interpretación: lugar, materia, testimonio, institución, lector. La tecnología se volvía puente para la semiosis, no sustituto de lo sagrado.',
          ],
        },
        {
          eyebrow: 'Síntesis',
          title: 'Carlo como punto de encuentro',
          paragraphs: [
            'La síntesis no es que Carlo fuera programador o devoto. Es que ambos registros se encontraron en un solo acto editorial. Trató la base de datos con la seriedad de un relicario y trató el relicario con la lógica distributiva de una red.',
            'En 2026, después de la canonización y después de una nueva continuación móvil del proyecto de los milagros eucarísticos, la forma de ese gesto resulta más clara. Carlo se volvió un nodo entre archivo y peregrinación, pantalla y altar, fluidez técnica juvenil y una gramática sacramental más antigua.',
            'La expresión “API para la eternidad” es deliberadamente metafórica, pero señala el logro real: Carlo no inventó los misterios que catalogó. Creó una interfaz por la que otra generación podía encontrarlos sin que el pasado quedara reducido a contenido.',
          ],
        },
      ],
    },
    problem: {
      eyebrow: 'Problema',
      title: 'Leer a Acutis como arquitecto, no como ícono',
      paragraphs: [
        'Los registros dominantes sobre Carlo Acutis son dos: el hagiográfico — un santo digital, un joven testigo de la fe — y el devocional — un patrono de internet, una oración en movimiento. Ambos son legítimos. Ninguno alcanza. El registro hagiográfico absorbe la obra en la vida; el devocional absorbe la vida en el culto.',
        'Entre los dos se pierde algo concreto: la obra misma. La exposición en línea de milagros eucarísticos — construida, traducida, distribuida y acreditada por redes eclesiales — es, antes que nada, una pieza de comunicación. Tiene estructura. Tiene método. Tiene, en el lenguaje del software, una arquitectura.',
        'Esta pieza pregunta por el registro que quedó de lado. Lee a Acutis como programador, diseñador web y mediador digital de lo sagrado, y trata la exposición en línea como un pequeño museo: no una nube de milagros, sino un sistema para hacerlos circular.',
      ],
    },
    hypothesis: {
      eyebrow: 'Hipótesis',
      title: 'Una arquitectura de comunicación en cinco capas',
      paragraphs: [
        'La hipótesis de trabajo es que la exposición se lee mejor como una arquitectura por capas: contenido, interfaz, distribución, legitimación y ritualización. La palabra arquitectura aparece aquí en sentido modesto — no como retórica, sino como la manera en que las decisiones se apilan unas sobre otras y empiezan a dibujar una forma.',
        'En esta lectura, los milagros son contenido. El sitio es interfaz. Las redes parroquiales, los paneles imprimibles y las traducciones multilingües son distribución. El prefacio del cardenal, el logotipo de la asociación y el aval eclesial son legitimación. La peregrinación virtual, la oración y el circuito itinerante de paneles son ritualización.',
        'Lo que importa no es ninguna capa aislada, sino la coherencia del conjunto. La pieza funciona no porque alguna decisión sea inusual, sino porque la pila se sostiene. La tesis es discreta pero precisa: la obra interesa menos por su contenido que por la disciplina silenciosa de su diseño.',
      ],
    },
    stateOfTheArt: {
      eyebrow: 'Estado del arte',
      title: 'Lo que ya se ha dicho',
      paragraphs: [
        'La bibliografía existente sobre Acutis se organiza en dos estantes. En el estante primario — el registro institucional — los artefactos son la propia exposición en línea, Christus Vivit, el anuncio de la canonización y el trabajo etnográfico que ha empezado a describir el culto. En el estante secundario — la literatura académica — el caso recae casi por completo en los estudios de religión digital: Campbell sobre la distinción entre religion online y online religion, Helland sobre la peregrinación virtual, DiGiovine sobre la santidad contemporánea y la tradición de handbooks que creció a su alrededor.',
        'La escritura eclesial y devocional corre junto a ambos estantes y absorbe a Acutis en categorías ya dadas de santidad. El papa Francisco, en Christus Vivit, lo nombra como modelo de una fe cómoda con las pantallas; la canonización de 2025, celebrada bajo León XIV, sella institucionalmente esa lectura. Es una lectura legítima, pero lee la vida, no la obra.',
        'Un tercer registro está poco habitado. Las teorías clásicas de la mediación y la circulación (Peters, Debray, Couldry y Hepp), el canon pragmático de la arquitectura de la información (Rosenfeld, Morville y Arango; Hohpe sobre patrones de integración; Bolter y Grusin sobre remediación) y lecturas más antiguas de la religión como trabajo cultural (Gramsci, Löwy; más recientemente Zuboff sobre la captura por la plataforma) rara vez convergen en torno a Acutis. Es el marco que esta pieza toma prestado — no para inflar la bibliografía, sino para hacer visible la arquitectura en la lengua en la que la arquitectura misma fue construida.',
      ],
    },
    externalRecord: {
      eyebrow: 'Registro externo',
      title: 'Fuentes primarias y huellas institucionales',
      intro:
        'Los anclajes documentales primarios que esta pieza lee: el artefacto mismo, los marcos institucionales que lo rodean y el primer trabajo de campo académico que ha empezado a describir el culto. No son descargas. Son enlaces simples; si un host institucional cambia, el texto permanece; el enlace es el rastro, no el artefacto.',
      accessedLabel: 'consultado el',
      policyLabel: 'Ver la política de medios externos',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Activo',
        archive: 'Archivo',
        document: 'Documento',
        press: 'Prensa',
        scholarship: 'Investigación',
        site: 'Sitio',
        theory: 'Teoría',
      },
      items: [
        {
          ...externalAnchors.exhibition,
          note: 'El artefacto primario. La pieza lee esta exposición como arquitectura de comunicación, no como contenido devocional.',
        },
        {
          ...externalAnchors.christusVivit,
          note: 'La exhortación apostólica que nombra a Acutis como modelo de una fe cómoda con las pantallas. La primera capa documentada de legitimación institucional.',
        },
        {
          ...externalAnchors.canonization,
          note: 'El anuncio que cierra el arco de legitimación. La canonización tuvo lugar el 7 de septiembre de 2025.',
        },
        {
          ...externalAnchors.digiovine,
          note: 'Una lectura antropológica del culto y de la peregrinación virtual, en torno a la cual converge la mayor parte de la bibliografía actual sobre Acutis.',
        },
      ],
    },
    remoteAssets: {
      eyebrow: 'Activos remotos',
      title: 'Enlaces externos para la capa narrativa',
      intro:
        'La capa narrativa v2 añade un conjunto más estricto de coordenadas externas: biografía y cronología oficiales, página de la exposición, rastro de la app de 2026, catálogo de medios y enlaces teóricos usados en la lectura Hohpe y Peirce. Permanecen externos por diseño.',
      accessedLabel: 'consultado el',
      policyLabel: 'Ver la política de medios externos',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Activo',
        archive: 'Archivo',
        document: 'Documento',
        press: 'Prensa',
        scholarship: 'Investigación',
        site: 'Sitio',
        theory: 'Teoría',
      },
      items: [
        {
          ...externalAnchors.biography,
          note: 'Página biográfica oficial usada para anclar la narrativa en la vida ordinaria de Carlo, el servicio parroquial y la práctica informática.',
        },
        {
          ...externalAnchors.timeline,
          note: 'Ancla cronológica oficial para el arco 1991–2025, incluidos nacimiento, Primera Comunión, enfermedad, beatificación y canonización.',
        },
        {
          ...externalAnchors.exhibitionAssociation,
          note: 'Página de la asociación que describe la exposición de los Milagros Eucarísticos como creada y diseñada por Carlo Acutis y distribuida internacionalmente.',
        },
        {
          ...externalAnchors.vaticanApp,
          note: 'Rastro de Vatican News sobre la continuación móvil, en 2026, del proyecto de los milagros eucarísticos, útil para el punto de llegada “hasta 2026”.',
        },
        {
          ...externalAnchors.commons,
          note: 'Catálogo externo de medios para lectores que necesitan contexto visual. Este proyecto no descarga ni realoja archivos.',
        },
        {
          ...externalAnchors.hohpeMessageBus,
          note: 'Coordenada conceptual para leer la exposición como canal compartido por el que pueden circular registros distribuidos.',
        },
        {
          ...externalAnchors.hohpeMessageTranslator,
          note: 'Coordenada conceptual para leer el trabajo web de Carlo como traducción entre protocolos archivísticos, devocionales y digitales.',
        },
        {
          ...externalAnchors.peirceSigns,
          note: 'Coordenada conceptual para la lectura triádica del signo usada en el capítulo sobre semiosis.',
        },
      ],
    },
    references: {
      eyebrow: 'Referencias',
      title: 'Literatura secundaria, agrupada por registro',
      intro:
        'La literatura secundaria en la que la pieza se apoya, agrupada por registro en vez de listada en bloque. Los anclajes documentales primarios permanecen en el registro externo, más arriba. La lista es deliberada, no exhaustiva: cada entrada está aquí porque hace un trabajo real en el argumento.',
      groups: [
        {
          heading: 'Carlo Acutis y la santidad contemporánea',
          description:
            'El cuerpo delgado pero en crecimiento de estudios que leen a Acutis directamente, junto a los documentos eclesiales que lo enmarcan.',
          items: [
            {
              author: 'DiGiovine, M. A.',
              year: '2023',
              title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
              publisher: 'Tesis doctoral, West Chester University',
            },
            {
              author: 'Francisco',
              year: '2019',
              title: 'Christus Vivit (§104–106)',
              publisher: 'Exhortación apostólica, Vaticano',
            },
          ],
        },
        {
          heading: 'Estudios de religión digital',
          description:
            'El estante en el que el caso Acutis es colocado con más frecuencia: religión e internet, peregrinación virtual, práctica online/offline.',
          items: [
            {
              author: 'Campbell, H. A. (ed.)',
              year: '2012',
              title: 'Digital Religion: Understanding Religious Practice in New Media Worlds',
              publisher: 'Routledge',
            },
            {
              author: 'Campbell, H. A., y R. Tsuria (eds.)',
              year: '2022',
              title: 'Digital Religion: Understanding Religious Practice in Digital Media',
              publisher: 'Routledge, 2.ª ed.',
            },
            {
              author: 'Helland, C.',
              year: '2016',
              title: 'Digital Religion',
              publisher: 'En The Handbook of Religion and Communication, Wiley',
            },
            {
              author: 'Hoover, S. M.',
              year: '2006',
              title: 'Religion in the Media Age',
              publisher: 'Routledge',
            },
            {
              author: 'Dawson, L. L., y D. E. Cowan (eds.)',
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
          heading: 'Arquitectura de la comunicación, mediación y circulación',
          description:
            'El registro en el que la pieza lee efectivamente a Acutis: cómo se hacen viajar los objetos, cómo las interfaces sostienen argumentos, cómo los mensajes permanecen coherentes a lo largo de una pila.',
          items: [
            {
              author: 'Hohpe, G., y B. Woolf',
              year: '2003',
              title: 'Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions',
              publisher: 'Addison-Wesley',
            },
            {
              author: 'Rosenfeld, L., P. Morville, y J. Arango',
              year: '2015',
              title: 'Information Architecture: For the Web and Beyond',
              publisher: "O'Reilly, 4.ª ed.",
            },
            {
              author: 'Bolter, J. D., y R. Grusin',
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
              author: 'Couldry, N., y A. Hepp',
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
          heading: 'Marco crítico: religión, poder y plataformas',
          description:
            'Lecturas antiguas y recientes de la religión como trabajo cultural, mantenidas a mano para resistir la reducción de Acutis a pura devoción o a pura plataforma.',
          items: [
            {
              author: 'Gramsci, A.',
              year: '1971',
              title: 'Selections from the Prison Notebooks',
              publisher: 'International Publishers (eds. Q. Hoare y G. Nowell Smith)',
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
              publisher: 'Verso, ed. rev.',
            },
            {
              author: 'Castells, M.',
              year: '2010',
              title: 'The Power of Identity',
              publisher: 'Wiley-Blackwell, 2.ª ed.',
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
    skipToContent: 'Ir al contenido',
    otherLanguages: 'Leer en otro idioma',
    backToIndex: 'Volver al índice',
    onThisPage: 'En esta página',
    opensInNewTab: '(se abre en una pestaña nueva)',
    sectionLabels: {
      story: 'Narrativa',
      problem: 'Problema',
      hypothesis: 'Hipótesis',
      stateOfTheArt: 'Estado del arte',
      externalRecord: 'Registro externo',
      remoteAssets: 'Activos remotos',
      references: 'Referencias',
    },
  },
  colophon: {
    note: 'Esta página pertenece a la entrega v2.0.0 — Edición narrativa. El producto público estable incluye ahora una capa de storytelling y un registro más estricto de activos remotos.',
    license: 'Texto: CC BY 4.0 · Código: MIT.',
  },
}
