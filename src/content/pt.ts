import type { LocaleContent } from './types.ts'
import { externalAnchors, POLICY_URL } from './externalAnchors.ts'

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
        'A bibliografia existente sobre Acutis se organiza em duas prateleiras. Na prateleira primária — o registro institucional — os artefatos são a própria exposição online, a Christus Vivit, o anúncio da canonização e o trabalho de campo antropológico que começou a descrever o culto. Na prateleira secundária — a literatura acadêmica — o caso recai quase inteiramente sobre os estudos de religião digital: Campbell e a distinção entre religion online e online religion, Helland sobre peregrinação virtual, DiGiovine sobre a santidade contemporânea e a tradição de handbooks que cresceu em torno dessas leituras.',
        'A escrita eclesial e devocional corre ao lado das duas prateleiras e absorve Acutis em categorias já dadas de santidade. O papa Francisco, em Christus Vivit, nomeia-o como modelo de uma fé à vontade com as telas; a canonização de 2025, celebrada sob Leão XIV, sela institucionalmente essa leitura. A leitura é legítima, mas lê a vida, não a obra.',
        'Um terceiro registro está pouco habitado. As teorias clássicas da mediação e da circulação (Peters, Debray, Couldry e Hepp), o cânone pragmático da arquitetura da informação (Rosenfeld, Morville e Arango; Hohpe sobre padrões de integração; Bolter e Grusin sobre remediação) e leituras mais antigas da religião como trabalho cultural (Gramsci, Löwy; mais recentemente Zuboff sobre a captura pela plataforma) raramente se cruzam em torno de Acutis. É o quadro que esta peça toma emprestado — não para inflar a bibliografia, mas para tornar visível a arquitetura numa linguagem em que a própria arquitetura foi construída.',
      ],
    },
    externalRecord: {
      eyebrow: 'Registro externo',
      title: 'Fontes primárias e rastros institucionais',
      intro:
        'Os ancoramentos documentais primários que esta peça lê: o artefato em si, os enquadramentos institucionais que o cercam e o primeiro trabalho de campo acadêmico a descrever o culto. Não são downloads. São links simples; se um host institucional mudar, o texto permanece; o link é o rastro, não o artefato.',
      accessedLabel: 'acessado em',
      policyLabel: 'Ver a política de mídia externa',
      policyUrl: POLICY_URL,
      kindLabels: {
        archive: 'Arquivo',
        document: 'Documento',
        press: 'Imprensa',
        scholarship: 'Pesquisa',
        site: 'Site',
      },
      items: [
        {
          ...externalAnchors.exhibition,
          note: 'O artefato primário. A peça lê esta exposição como arquitetura de comunicação, não como conteúdo devocional.',
        },
        {
          ...externalAnchors.christusVivit,
          note: 'A exortação apostólica que nomeia Acutis como modelo de uma fé à vontade com as telas. A primeira camada documentada de legitimação institucional.',
        },
        {
          ...externalAnchors.canonization,
          note: 'O anúncio que fecha o arco de legitimação. A canonização ocorreu em 7 de setembro de 2025.',
        },
        {
          ...externalAnchors.digiovine,
          note: 'Uma leitura antropológica do culto e da peregrinação virtual, em torno da qual converge grande parte da bibliografia atual sobre Acutis.',
        },
      ],
    },
    references: {
      eyebrow: 'Referências',
      title: 'Literatura secundária, agrupada por registro',
      intro:
        'A literatura secundária em que a peça se apoia, agrupada por registro em vez de listada em bloco. Os ancoramentos documentais primários permanecem no registro externo acima. A lista é deliberada, não exaustiva: cada entrada está aqui porque faz trabalho real no argumento.',
      groups: [
        {
          heading: 'Carlo Acutis e a santidade contemporânea',
          description:
            'O corpo tênue mas crescente de bibliografia que lê Acutis diretamente, ao lado dos documentos eclesiais que o enquadram.',
          items: [
            {
              author: 'DiGiovine, M. A.',
              year: '2023',
              title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
              publisher: 'Tese de doutorado, West Chester University',
            },
            {
              author: 'Francisco',
              year: '2019',
              title: 'Christus Vivit (§104–106)',
              publisher: 'Exortação apostólica, Vaticano',
            },
          ],
        },
        {
          heading: 'Estudos de religião digital',
          description:
            'A prateleira em que o caso Acutis é mais frequentemente alocado: religião e internet, peregrinação virtual, prática online/offline.',
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
              author: 'Dawson, L. L., e D. E. Cowan (orgs.)',
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
          heading: 'Arquitetura da comunicação, mediação e circulação',
          description:
            'O registro em que a peça efetivamente lê Acutis: como objetos são feitos para circular, como interfaces carregam argumentos, como mensagens se mantêm coerentes ao longo de uma pilha.',
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
              publisher: "O'Reilly, 4.ª ed.",
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
          heading: 'Enquadramento crítico: religião, poder e plataformas',
          description:
            'Leituras antigas e recentes da religião como trabalho cultural, mantidas à mão para resistir à redução de Acutis à pura devoção ou à pura plataforma.',
          items: [
            {
              author: 'Gramsci, A.',
              year: '1971',
              title: 'Selections from the Prison Notebooks',
              publisher: 'International Publishers (org. Q. Hoare e G. Nowell Smith)',
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
    skipToContent: 'Ir para o conteúdo',
    otherLanguages: 'Ler em outro idioma',
    backToIndex: 'Voltar ao índice',
    onThisPage: 'Nesta página',
    sectionLabels: {
      problem: 'Problema',
      hypothesis: 'Hipótese',
      stateOfTheArt: 'Estado da arte',
      externalRecord: 'Registro externo',
      references: 'Referências',
    },
  },
  colophon: {
    note: 'Esta página pertence ao release v0.8.0 — Edição de pesquisa. A arquitetura editorial da v0.4.0 permanece; a bibliografia agora é agrupada por registro e a distinção entre ancoramentos documentais primários e literatura secundária se torna explícita.',
    license: 'Texto: CC BY 4.0 · Código: MIT.',
  },
}
