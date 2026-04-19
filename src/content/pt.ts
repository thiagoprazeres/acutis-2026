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
      'Uma leitura editorial sóbria de Carlo Acutis como programador e webdesigner, e como mediador digital do sagrado.',
  },
  masthead: {
    eyebrow: 'Peça editorial · 2026',
    title: 'Carlo Acutis',
    subtitle: 'Uma arquitetura de comunicação do sagrado, lida em chave 2026.',
    leadLabel: 'Abertura',
    lead: 'Carlo Acutis foi programador e webdesigner, e usou código, imagem e forma para tornar visíveis os milagres eucarísticos aprovados pela Igreja. Aos 14 anos, já havia catalogado cerca de 136 casos e desenhado uma exposição internacional que transformava arquivos dispersos em experiência pública. Hohpe ajuda a nomear a integração: registros separados passam a circular por um canal comum. Peirce ajuda a nomear o sentido: fotografia, vestígio e símbolo conduzem o leitor a interpretar, não apenas a olhar. Carlo permanece no centro: em 2026, sua obra aparece como uma arquitetura de confiança pública, onde técnica e semiose religiosa se encontram.',
    byline: 'Leitura de Thiago Prazeres. Disponível em cinco idiomas.',
  },
  sections: {
    story: {
      eyebrow: 'Narrativa · v2',
      title: 'O Arquiteto do Invisível: a jornada de Carlo Acutis',
      intro: [
        'Carlo Acutis não entrou na internet para escapar do mundo. Entrou para dar forma ao que permanecia invisível: uma memória eucarística espalhada por arquivos, santuários, testemunhos, fotografias e aprovações eclesiais.',
        'Nascido em Londres em 1991 e criado em Milão, Carlo era profundamente ligado à Eucaristia, mas também era programador e webdesigner. A força da sua obra está nessa unidade: ele não alternou entre fé e técnica; fez da técnica um modo de organizar a fé para que outra geração pudesse encontrá-la.',
      ],
      chapters: [
        {
          eyebrow: '1991–2006',
          title: 'O início de uma arquitetura',
          paragraphs: [
            'O registro público preserva a textura comum da vida de Carlo: escola, futebol, videogames, programas de computador, serviço paroquial, familiaridade com as ferramentas de sua geração. Essa normalidade importa porque impede que sua obra seja lida como um artefato fora do tempo. Carlo trabalhou com a web que tinha diante de si.',
            'O centro de gravidade, porém, era incomum. Desde a Primeira Comunhão, a Eucaristia passou a ordenar seu dia. O site e a exposição sobre milagres eucarísticos não nasceram como passatempo paralelo; cresceram de uma vida jovem já organizada pela pergunta da presença real.',
            'O gesto decisivo foi perceber que uma herança invisível podia se tornar legível. Milagres reconhecidos pela Igreja existiam em livros, arquivos locais, tradições paroquiais e materiais devocionais. O problema não era a ausência de conteúdo; era a dispersão do conteúdo.',
          ],
        },
        {
          eyebrow: 'Catálogo',
          title: 'Tornar o invisível visível',
          paragraphs: [
            'Aos 11 anos, Carlo começou a pesquisar milagres eucarísticos documentados: relatos em que pão e vinho consagrados aparecem ligados a sinais materiais de carne e sangue. O ponto crucial é que ele buscava casos investigados e aprovados pela Igreja. A credibilidade fazia parte da arquitetura desde o início.',
            'Ao longo de cerca de três anos, Carlo reuniu informações sobre aproximadamente 136 milagres. Usou HTML, programação, design gráfico e organização editorial para converter esse material em apresentações digitais: histórias, fotografias, datas, lugares, documentos e aprovações eclesiais.',
            'Ele não apenas copiou textos para uma página. Desenhou um caminho. Cada caso precisava ser encontrado, reconhecido e comparado sem perder sua singularidade local. O catálogo funcionava como mapa, arquivo e exposição ao mesmo tempo.',
            'Quando a exposição “Milagres Eucarísticos no Mundo” ganhou forma, o resultado já era maior que um site pessoal. Carlo havia criado um objeto público: painéis, páginas, traduções e arquivos que podiam circular por paróquias, escolas, universidades e comunidades em diferentes países.',
          ],
        },
        {
          eyebrow: 'Integração de sistemas',
          title: 'Da sala de máquinas à experiência pública',
          paragraphs: [
            'Hohpe entra aqui como lente, não como protagonista. Sua linguagem ajuda a ver a qualidade técnica do gesto de Carlo: relatos dispersos se comportavam como sistemas isolados, cada um com seu vocabulário, sua prova, sua geografia e seu modo de circulação.',
            'Carlo construiu, em escala modesta e precisa, algo próximo de um barramento de mensagens para a fé. O site e a exposição imprimível não apagavam as histórias locais; ofereciam uma interface comum para que elas pudessem viajar. O arquivo deixava a sala de máquinas e chegava à experiência pública.',
            'A tradução foi tão importante quanto a coleta. Um milagre medieval, uma fotografia moderna, um relatório médico e uma legenda catequética não têm o mesmo protocolo. Carlo aproximou esses materiais sem fingir que eram idênticos. Datas, lugares, imagens, resumos e aprovações se tornaram uma gramática compartilhada.',
            'Essa é a arquitetura de confiança pública no ponto mais concreto: não uma metáfora grandiosa, mas um modo disciplinado de fazer registros confiáveis circularem. Carlo programou e desenhou para que o visitante não recebesse ruído, mas uma forma legível de encontro.',
          ],
        },
        {
          eyebrow: 'Semiose',
          title: 'Ícone, índice e símbolo',
          paragraphs: [
            'Peirce também entra como lente, não como substituto de Carlo. Sua semiótica ajuda a nomear o que Carlo desenhou intuitivamente: um sistema de sinais em que imagem, vestígio e linguagem conduzem o visitante a interpretar o que vê.',
            'Em um único registro de milagre, a fotografia funciona como ícone, porque se parece com a evidência material apresentada. A data, o lugar, o testemunho e o relatório funcionam como índices, porque apontam para um acontecimento situado. A legenda, a linguagem teológica e o reconhecimento eclesial funcionam como símbolos, porque dependem de uma tradição compartilhada para serem lidos.',
            'Carlo organizou esses níveis sem transformar o mistério em dado bruto. A imagem não substitui a fé; dá forma ao olhar. O relatório não substitui a presença; oferece um vestígio investigável. A palavra “Eucaristia” não fecha o sentido; abre uma gramática sacramental para o leitor.',
            'Por isso, o clique não é trivial. Abrir um registro sobre Lanciano, Buenos Aires ou outro caso inicia uma cadeia de interpretação: matéria, lugar, testemunho, instituição, leitor. A tecnologia se torna ponte para a semiose, não substituto do sagrado.',
          ],
        },
        {
          eyebrow: '2026',
          title: 'A continuidade do itinerário',
          paragraphs: [
            'Em 2026, a forma do gesto de Carlo aparece com mais nitidez. Depois da canonização e da continuação móvel do projeto dos milagres eucarísticos, sua obra já não pode ser reduzida a devoção online de começo de século. O que permanece é uma maneira de fazer a tradição circular com clareza.',
            'A nova camada móvel não troca Carlo por uma atualização técnica. Ela confirma a direção do trabalho original: tornar acessíveis, em outro suporte, os relatos documentados que ele reuniu. O canal muda; a arquitetura permanece reconhecível.',
            'Essa continuidade é importante porque o ambiente digital de 2026 é mais ruidoso que a web de Carlo. Em meio a mídia viral, automação e excesso de imagens, sua resposta continua construtiva: organizar, verificar, narrar, dar forma. A confiança pública nasce dessa combinação entre sistema robusto e signo bem cuidado.',
          ],
        },
        {
          eyebrow: 'Síntese',
          title: 'Carlo como ponto de encontro',
          paragraphs: [
            'A síntese não é opor o Carlo programador e webdesigner ao Carlo devoto. A síntese é perceber que os registros se encontraram em um único ato editorial. Ele tratou o banco de dados com a seriedade de um relicário e tratou o relicário com a lógica distributiva de uma rede.',
            'Carlo não inventou os mistérios que catalogou. Também não se colocou acima deles como intérprete final. Fez algo mais preciso: construiu uma interface pela qual outra geração poderia encontrar esses sinais sem que o passado fosse achatado em conteúdo.',
            'Hohpe ajuda a ver a integração. Peirce ajuda a ver a produção de sentido. Mas a obra é de Carlo: o jovem que uniu programação, webdesign, arquivo e Eucaristia em uma arquitetura de confiança pública.',
            'Por isso, o “Arquiteto do Invisível” não é uma metáfora de fuga. É o nome de um trabalho concreto: tornar visível o que estava disperso, sem retirar do invisível sua profundidade. Carlo catalogou milagres; mais profundamente, desenhou sua circulação e sua legibilidade.',
          ],
        },
      ],
    },
    problem: {
      eyebrow: 'Problema',
      title: 'Ler Acutis como arquiteto, não como ícone',
      paragraphs: [
        'Os registros dominantes sobre Carlo Acutis são dois: o hagiográfico — um santo digital, um jovem testemunho da fé — e o devocional — um padroeiro da internet, uma oração em movimento. Ambos são legítimos. Nenhum é suficiente. O registro hagiográfico absorve a obra na vida; o devocional absorve a vida no culto.',
        'Entre os dois, perde-se algo concreto: a obra em si. A exposição online de milagres eucarísticos — construída, traduzida, distribuída e acreditada por redes eclesiais — é, antes de qualquer coisa, uma peça de comunicação. Tem estrutura. Tem método. Tem, na linguagem do software, uma arquitetura.',
        'Esta peça pergunta pelo registro que foi saltado. Lê Acutis como programador e webdesigner, e como mediador digital do sagrado, tratando a exposição online como um pequeno museu: não uma nuvem de milagres, mas um sistema para fazê-los circular.',
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
        asset: 'Ativo',
        archive: 'Arquivo',
        document: 'Documento',
        press: 'Imprensa',
        scholarship: 'Pesquisa',
        site: 'Site',
        theory: 'Teoria',
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
    remoteAssets: {
      eyebrow: 'Ativos remotos',
      title: 'Links externos para a camada narrativa',
      intro:
        'A camada narrativa v2 acrescenta um conjunto mais estrito de coordenadas externas: biografia e linha do tempo oficiais, página da exposição, rastro do app de 2026, catálogo de mídia e links teóricos usados na leitura Hohpe e Peirce. Eles permanecem externos por desenho.',
      accessedLabel: 'acessado em',
      policyLabel: 'Ver a política de mídia externa',
      policyUrl: POLICY_URL,
      kindLabels: {
        asset: 'Ativo',
        archive: 'Arquivo',
        document: 'Documento',
        press: 'Imprensa',
        scholarship: 'Pesquisa',
        site: 'Site',
        theory: 'Teoria',
      },
      items: [
        {
          ...externalAnchors.biography,
          note: 'Página biográfica oficial usada para ancorar a narrativa na vida comum de Carlo, no serviço paroquial e na prática de computador.',
        },
        {
          ...externalAnchors.timeline,
          note: 'Âncora cronológica oficial para o arco 1991–2025, incluindo nascimento, Primeira Comunhão, doença, beatificação e canonização.',
        },
        {
          ...externalAnchors.exhibitionAssociation,
          note: 'Página da associação que descreve a exposição dos Milagres Eucarísticos como criada e projetada por Carlo Acutis e distribuída internacionalmente.',
        },
        {
          ...externalAnchors.vaticanApp,
          note: 'Rastro da Vatican News sobre a continuação móvel, em 2026, do projeto dos milagres eucarísticos, útil para o ponto de chegada “até 2026”.',
        },
        {
          ...externalAnchors.commons,
          note: 'Catálogo externo de mídia para leitores que precisam de contexto visual. Nenhum arquivo é baixado ou re-hospedado por este projeto.',
        },
        {
          ...externalAnchors.hohpeMessageBus,
          note: 'Coordenada conceitual para ler a exposição como canal compartilhado pelo qual registros distribuídos podem circular.',
        },
        {
          ...externalAnchors.hohpeMessageTranslator,
          note: 'Coordenada conceitual para ler a obra web de Carlo como tradução entre protocolos arquivísticos, devocionais e digitais.',
        },
        {
          ...externalAnchors.peirceSigns,
          note: 'Coordenada conceitual para a leitura triádica do signo usada no capítulo sobre semiose.',
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
    opensInNewTab: '(abre em nova aba)',
    sectionLabels: {
      story: 'Narrativa',
      problem: 'Problema',
      hypothesis: 'Hipótese',
      stateOfTheArt: 'Estado da arte',
      externalRecord: 'Registro externo',
      remoteAssets: 'Ativos remotos',
      references: 'Referências',
    },
  },
  colophon: {
    note: 'Esta página pertence ao release v2.0.0 — Edição narrativa. O produto público estável agora inclui uma camada de storytelling e um registro mais estrito de ativos remotos.',
    license: 'Texto: CC BY 4.0 · Código: MIT.',
  },
}
