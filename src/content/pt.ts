import type { LocaleContent } from './types.ts'

export const pt: LocaleContent = {
  code: 'pt',
  label: 'Português',
  htmlLang: 'pt',
  dir: 'ltr',
  meta: {
    title: 'Carlo Acutis — uma arquitetura de comunicação do sagrado',
    description:
      'Uma leitura editorial sóbria de Carlo Acutis como programador, web designer e mediador digital do sagrado.',
  },
  masthead: {
    eyebrow: 'Peça editorial · 2026',
    title: 'Carlo Acutis',
    subtitle: 'Uma arquitetura de comunicação do sagrado, lida em chave 2026.',
    lead: 'Carlo Acutis (1991–2006) costuma ser apresentado como um adolescente santo que mantinha um site. Esta peça adota um ângulo mais estreito e mais sóbrio: lê sua obra breve como uma arquitetura de comunicação — um exercício deliberado de design de informação, distribuição, legitimação e ritual. Não é uma startup, não é um álbum devocional, não é um aplicativo de milagres. É um pequeno objeto editorial coerente, montado por um programador.',
    byline: 'Leitura de Thiago Prazeres. Disponível em cinco idiomas.',
  },
  sections: {
    problem: {
      eyebrow: 'Problema',
      title: 'Ler Acutis como arquiteto, não como ícone',
      paragraphs: [
        'Os registros dominantes sobre Carlo Acutis são dois: o hagiográfico — um santo digital, um jovem testemunho da fé — e o devocional — um padroeiro da internet, uma oração em movimento. Ambos são legítimos. Nenhum é suficiente. O registro hagiográfico absorve a obra na vida; o devocional absorve a vida no culto.',
        'Entre os dois, perde-se algo concreto: a obra em si. A exposição online de milagres eucarísticos — construída, traduzida, distribuída e acreditada por redes eclesiais — é, antes de qualquer coisa, uma peça de comunicação. Tem estrutura. Tem método. Tem, na linguagem do software, uma arquitetura.',
        'Esta peça pergunta pelo registro que foi saltado. Lê Acutis como programador, web designer e mediador digital do sagrado, e trata a exposição online como um pequeno museu: não uma nuvem de milagres, mas um sistema para fazê-los circular.',
      ],
    },
    hypothesis: {
      eyebrow: 'Hipótese',
      title: 'Uma arquitetura de comunicação em cinco camadas',
      paragraphs: [
        'A hipótese de trabalho é que a exposição se lê melhor como uma arquitetura em camadas: conteúdo, interface, distribuição, legitimação e ritualização. A palavra arquitetura aparece aqui em sentido modesto — não como retórica, mas como o modo em que decisões se empilham umas sobre as outras e começam a formar uma figura.',
        'Nessa leitura, os milagres são conteúdo. O site é interface. As redes paroquiais, os painéis imprimíveis e as traduções multilíngues são distribuição. O prefácio do cardeal, o logotipo da associação e o aval eclesial são legitimação. A peregrinação virtual, a oração e o circuito itinerante dos painéis são ritualização.',
        'O que importa não é nenhuma camada isolada, mas a coerência do conjunto. A peça funciona não porque alguma decisão seja incomum, mas porque a pilha se sustenta. A tese é discreta, mas precisa: a obra é interessante menos pelo conteúdo do que pela disciplina silenciosa do seu desenho.',
      ],
    },
    stateOfTheArt: {
      eyebrow: 'Estado da arte',
      title: 'O que já foi dito',
      paragraphs: [
        'A literatura sobre Acutis inclina-se em duas direções. De um lado, os estudos de religião digital — Heidi Campbell e a distinção entre religion online e online religion, Christopher Helland sobre peregrinação virtual, Michael DiGiovine sobre o culto — o lêem como caso de religião adaptando-se aos novos meios.',
        'De outro lado, a escrita eclesial e devocional o absorve em categorias já existentes de santidade. O papa Francisco, em Christus Vivit, nomeia-o como modelo de uma fé à vontade com as telas; a canonização de 2025 sela institucionalmente essa leitura.',
        'Entre essas duas prateleiras, um terceiro registro está pouco habitado. A arquitetura da informação (os padrões de integração de Gregor Hohpe; a escrita clássica de Jakob Nielsen sobre sites como sistemas), a crítica do capitalismo de plataforma (Shoshana Zuboff) e leituras mais antigas da religião como trabalho cultural (Gramsci, Löwy) raramente se reúnem em torno de Acutis. É o quadro que esta peça toma emprestado — não para ampliar a bibliografia, mas para tornar visível a arquitetura.',
      ],
    },
    references: {
      eyebrow: 'Referências',
      title: 'Uma bibliografia curta e deliberada',
      intro:
        'A lista é intencionalmente pequena. Cada entrada está aqui porque o argumento se apoia nela. Leituras adicionais pertencem a releases posteriores desta peça.',
      items: [
        {
          author: 'Campbell, H. A. (org.)',
          year: '2012',
          title: 'Digital Religion: Understanding Religious Practice in New Media Worlds',
          publisher: 'Routledge',
        },
        {
          author: 'Campbell, H. A., e R. Tsuria (orgs.)',
          year: '2022',
          title: 'Digital Religion: Understanding Religious Practice in Digital Media',
          publisher: 'Routledge, 2.ª ed.',
        },
        {
          author: 'DiGiovine, M. A.',
          year: '2023',
          title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
          publisher: 'Tese de doutorado, West Chester University',
        },
        {
          author: 'Francisco',
          year: '2019',
          title: 'Christus Vivit',
          publisher: 'Exortação apostólica, Vaticano',
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
    skipToContent: 'Ir para o conteúdo',
    otherLanguages: 'Ler em outro idioma',
    backToIndex: 'Voltar ao índice',
    onThisPage: 'Nesta página',
    sectionLabels: {
      problem: 'Problema',
      hypothesis: 'Hipótese',
      stateOfTheArt: 'Estado da arte',
      references: 'Referências',
    },
  },
  colophon: {
    note: 'Esta página pertence ao release v0.4.0 — Arquitetura editorial. Releases posteriores ampliarão a superfície de pesquisa sem alterar a arquitetura.',
    license: 'Texto: CC BY 4.0 · Código: MIT.',
  },
}
