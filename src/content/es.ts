import type { LocaleContent } from './types.ts'

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
    lead: 'A Carlo Acutis (1991–2006) suele presentárselo como un adolescente santo con un sitio web. Esta pieza elige un ángulo más estrecho y más sobrio: lee su breve obra como una arquitectura de comunicación — un ejercicio deliberado de diseño de información, distribución, legitimación y ritual. No es una startup, no es un álbum devocional, no es una app de milagros. Es un pequeño objeto editorial coherente, armado por un programador.',
    byline: 'Leído por Thiago Prazeres. Disponible en cinco idiomas.',
  },
  sections: {
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
        'La literatura sobre Acutis se orienta en dos direcciones. Por un lado, los estudios de religión digital — Heidi Campbell sobre la distinción entre religion online y online religion, Christopher Helland sobre la peregrinación virtual, Michael DiGiovine sobre el culto — lo leen como un caso de religión adaptándose a los nuevos medios.',
        'Por otro lado, la escritura eclesial y devocional lo absorbe en categorías ya dadas de santidad. El papa Francisco, en Christus Vivit, lo nombra como modelo de una fe cómoda con las pantallas; la canonización de 2025 sella institucionalmente esa lectura.',
        'Entre ambos estantes, un tercer registro está poco habitado. La arquitectura de la información (los patrones de integración de Gregor Hohpe; la escritura clásica de Jakob Nielsen sobre sitios como sistemas), la crítica del capitalismo de plataformas (Shoshana Zuboff) y lecturas más antiguas de la religión como trabajo cultural (Gramsci, Löwy) rara vez se reúnen en torno a Acutis. Es el marco que esta pieza toma prestado — no para ampliar la bibliografía, sino para hacer visible la arquitectura.',
      ],
    },
    references: {
      eyebrow: 'Referencias',
      title: 'Una bibliografía breve y deliberada',
      intro:
        'La lista es deliberadamente pequeña. Cada entrada está aquí porque el argumento se apoya en ella. Lecturas adicionales corresponden a entregas posteriores de esta pieza.',
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
          author: 'DiGiovine, M. A.',
          year: '2023',
          title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
          publisher: 'Tesis doctoral, West Chester University',
        },
        {
          author: 'Francisco',
          year: '2019',
          title: 'Christus Vivit',
          publisher: 'Exhortación apostólica, Vaticano',
        },
        {
          author: 'Hohpe, G., y B. Woolf',
          year: '2003',
          title: 'Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions',
          publisher: 'Addison-Wesley',
        },
        {
          author: 'Helland, C.',
          year: '2016',
          title: 'Digital Religion',
          publisher: 'En The Handbook of Religion and Communication, Wiley',
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
    skipToContent: 'Ir al contenido',
    otherLanguages: 'Leer en otro idioma',
    backToIndex: 'Volver al índice',
    onThisPage: 'En esta página',
    sectionLabels: {
      problem: 'Problema',
      hypothesis: 'Hipótesis',
      stateOfTheArt: 'Estado del arte',
      references: 'Referencias',
    },
  },
  colophon: {
    note: 'Esta página pertenece a la entrega v0.4.0 — Arquitectura editorial. Las entregas posteriores ampliarán la superficie de investigación sin alterar la arquitectura.',
    license: 'Texto: CC BY 4.0 · Código: MIT.',
  },
}
