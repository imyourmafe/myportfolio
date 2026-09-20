// ===== Projetos exibidos na seção "Projetos" =====
// Cada objeto vira um card; a descrição completa aparece no modal de detalhe.
//
// `links` é uma lista de { tipo, url }. Os tipos conhecidos estão em TIPOS_LINK,
// no script.js: repo, figma, demo e video. Projeto sem links abre o modal sem
// nenhum botão — e é exatamente isso que a gente quer ver menos por aqui.
const PROJETOS = [
  {
    imagem: "images/este_site.jpg", largura: 900, altura: 562,
    alt: "O portfólio aberto no tema Hanami, de fundo marrom e acento rosa, com o painel de personalização mostrando os nove temas e os oito ícones de marca",
    categorias: ["design", "programacao"], titulo: "ESTE PORTFÓLIO",
    stack: ["HTML", "CSS", "JavaScript", "WCAG 2.1 AA"],
    links: [{ tipo: "demo", url: "https://imyourmafe.github.io/myportfolio/" },
            { tipo: "repo", url: "https://github.com/imyourmafe/myportfolio" }],
    descricao: "O site que você está lendo agora, escrito à mão em HTML, CSS e JavaScript, sem framework e sem etapa de build. O que ele tem de diferente está no botão de personalizar: são 9 temas fechados — fundo, texto, linhas e cor de destaque saem juntos — mais 8 ícones de marca, e cada escolha é aplicada e gravada no instante do clique. Cada tema tem o acento amarrado ao próprio fundo, e quando a cor da paleta não alcança o mínimo de contraste como texto, o site deriva em tempo de execução uma versão legível dela: mantém o matiz e a saturação e move só a luminosidade até passar na WCAG. Os 9 temas passam em AA, e o próprio arquivo traz a função que audita isso. A navegação inteira funciona por teclado, o modal prende o foco, e sem JavaScript a página continua legível.",
    desafio: "A saída fácil era escolher cores mais confortáveis. Manter as da paleta e ainda passar em AA obrigou a admitir que preencher e ser lido são dois papéis, e que uma cor só não faz os dois."
  },
  {
    imagem: "images/ratimbum.jpg", largura: 900, altura: 506, alt: "Maquete interativa com tema do Sonic: percurso com obstáculos, loops e efeitos acionados por um botão",
    categorias: ["eletronica", "programacao"], titulo: "PROJETO RATIMBUM",
    stack: ["Arduino","Sensores","Automação","Lógica sequencial"],
    descricao: "Uma maquete do universo do Sonic em que um único botão dispara toda a sequência: o percurso corre sozinho por obstáculos, loops e efeitos sonoros até o fim. O trabalho está todo na sincronia — sensores e motores precisam disparar na ordem certa, porque cada mecanismo depende do anterior ter terminado.",
    desafio: "Erro de sincronia não aparece no teste de bancada: cada peça funciona sozinha, e o defeito só existe quando tudo roda junto, uma vez, do começo ao fim."
  },
  {
    imagem: "images/prototype_cinemark.png", largura: 672, altura: 715, alt: "Telas do protótipo do app Cinemark no Figma: splash screen e feed com Em Cartaz, Pré-venda e Em Breve",
    categorias: ["prototipos"], titulo: "PROTÓTIPO DE APP CINEMARK",
    stack: ["Figma","UX/UI","Design mobile","Prototipagem"],
    descricao: "Recriação do app do Cinemark no Figma, da splash screen ao feed com \"Em Cartaz\", \"Pré-venda\" e \"Em Breve\". Copiar uma interface que já existe é um exercício diferente de desenhar do zero: obriga a reparar em decisões que passam despercebidas quando se é dono da tela — espaçamento, hierarquia entre cartaz e título, o que cabe antes da dobra. Os componentes foram montados para reuso, não desenhados tela a tela.",
    desafio: "Recriar não deixa esconder dúvida atrás de escolha própria — cada diferença em relação ao original é um erro, não um estilo."
  },
  {
    imagem: "images/prototype_protfolio.png", largura: 900, altura: 501, alt: "Protótipo de portfólio no Figma, nas versões clara e escura, com as seções Sobre, Projetos e Contato",
    categorias: ["prototipos"], titulo: "PROTÓTIPO DESTE SITE",
    stack: ["Figma","UI/UX","Modo claro/escuro","Prototipagem"],
    descricao: "O desenho que virou o site que você está lendo. Protótipo no Figma com as versões clara e escura, as seções Sobre, Projetos e Contato e as ligações entre telas. Comparar com o resultado é metade da graça: dá para ver o que sobreviveu à passagem para código e o que só deu para decidir com o conteúdo real na frente.",
    desafio: "Desenhar antes de ter conteúdo é apostar: o texto real chega com um tamanho que o Figma não previu, e só sobrevive o layout que foi feito para ceder."
  },
  {
    imagem: "images/prototype_tcc.png", largura: 788, altura: 592, alt: "Tela inicial do protótipo no Figma, com o catálogo de equipamentos do laboratório — impressora 3D, cortadora a laser, prototipadora — e o estado de cada um para agendamento",
    categorias: ["prototipos"], titulo: "ACADEMAI — PROTÓTIPO",
    stack: ["Figma","UX acessível","IA por voz","Fluxos de navegação"],
    descricao: "O protótipo do AcademAI, o TCC: um sistema de gestão do laboratório da faculdade desenhado em torno de quem não enxerga a tela. As telas cobrem login, cadastro, o catálogo de equipamentos com o estado de cada um, agendamento, treinamentos e uma assistente que responde por comando de voz. Projetar para voz muda a estrutura inteira — sem a tela servindo de mapa, a navegação precisa caber na memória de quem ouve, e cada fluxo tem que ser curto o bastante para não se perder no meio. O projeto trocou de nome no caminho: as telas ainda trazem o InovFabLab no topo.",
    desafio: "Numa tela, quem se perde volta olhando. Por voz não há para onde olhar, então cada fluxo tem que terminar antes de a pessoa esquecer por onde entrou."
  },
  {
    imagem: "images/launching_applewatch.png", largura: 900, altura: 900, alt: "Pôster de lançamento de um smartwatch, feito no Canva",
    categorias: ["design"], titulo: "LANÇAMENTO APPLE WATCH",
    stack: ["Canva","Design gráfico","Tipografia","Marketing visual"],
    descricao: "Pôster de lançamento do Apple Watch Series 10, feito como se fosse peça oficial da Apple. Imitar uma marca de linguagem tão fechada não deixa espaço para inventar: ou o espaçamento, o peso da tipografia e o silêncio em volta do produto estão certos, ou a peça denuncia na hora que não é deles.",
    desafio: "O que denuncia uma imitação não é o que falta, é o que sobra: qualquer elemento a mais quebra o silêncio que a marca usa como assinatura."
  },
  {
    imagem: "images/online_coding_workshop.png", largura: 900, altura: 450, alt: "Anúncio digital de um workshop de programação online, feito no Canva",
    categorias: ["design"], titulo: "ANÚNCIO DE WORKSHOP",
    stack: ["Canva","Design gráfico","Layout","Marketing digital"],
    descricao: "Anúncio de um workshop de programação, para circular em rede social. É peça de informação antes de ser peça de estética: data, tema e como se inscrever precisam ser lidos num passar de olhos, e é isso que decide a hierarquia — não o gosto.",
    desafio: "A peça concorre com o polegar de quem rola a tela. Se data e inscrição não chegam antes do gesto seguinte, o resto do design não chegou a ser visto."
  },
  {
    imagem: "images/techexpo.png", largura: 506, altura: 900, alt: "Pôster do evento fictício de tecnologia Future Tech Expo",
    categorias: ["design"], titulo: "FUTURE TECH EXPO",
    stack: ["Canva","Pôster","Identidade visual","Harmonia cromática"],
    descricao: "Pôster de um evento de tecnologia inventado para o exercício. A identidade se apoia em ícones de circuito e paleta fria, e a dificuldade do gênero é justamente essa: \"tecnologia\" tem um clichê visual pronto, e sair dele sem perder a leitura imediata do tema é o trabalho.",
    desafio: "Recusar o clichê custa reconhecimento: quanto mais longe do circuito e do azul néon, mais o pôster precisa dizer sozinho de que evento se trata."
  },
  {
    imagem: "images/galao_agua.jpg", largura: 831, altura: 900, alt: "Sistema de abastecimento automatizado: galão de água com sensor de nível e bomba",
    categorias: ["eletronica", "programacao"], titulo: "CONTROLE DE NÍVEL DE TANQUE",
    stack: ["Automação","Sensores de nível","PCB","Programação embarcada"],
    descricao: "Sistema que enche um tanque superior puxando água de um reservatório embaixo, ligando a bomba conforme o nível lido pelos sensores. O nível é monitorado de forma escalonada, e o esvaziamento também é controlado. Circuito montado em PCB, com a lógica em programação embarcada.",
    desafio: "Fechar a malha nos dois sentidos: não bastava ligar a bomba pelo nível lido, o esvaziamento também precisava ser controlado, e a leitura escalonada foi o que deu ao sistema mais de um estado para responder."
  },
  {
    imagem: "images/braço_mecanico.jpg", largura: 900, altura: 675, alt: "Braço robótico articulado montado, controlado por Arduino UNO",
    categorias: ["eletronica", "programacao"], titulo: "BRAÇO ROBÓTICO",
    stack: ["Arduino UNO","C++","Servomotores","Joystick"],
    descricao: "Braço articulado movido por servomotores e controlado por joystick, com firmware em C++ num Arduino UNO. Montagem de circuito com joystick, interruptor e resistores, prototipagem da placa e teste em laboratório.",
    desafio: "O que tolera fio solto na protoboard não tolera na placa — passar o circuito do joystick para a prototipagem é onde a montagem deixa de perdoar."
  },
  {
    imagem: "images/cofre.jpg", largura: 900, altura: 690, alt: "Cofre eletrônico com teclado e travamento por senha, controlado por ATmega328P",
    categorias: ["eletronica", "programacao"], titulo: "COFRE COM SENHA",
    stack: ["ATmega328P","Assembly","Teclado matricial","Trava solenoide"],
    descricao: "Cofre eletrônico com teclado matricial e trava solenoide, controlado por um ATmega328P programado em Assembly. Escrever em Assembly quer dizer tratar a varredura do teclado, a comparação da senha e o acionamento da trava direto nos registradores do microcontrolador, sem nenhuma camada de abstração no meio.",
    desafio: "Em Assembly o erro não se anuncia: uma varredura mal escrita não levanta exceção, devolve uma tecla que simplesmente não responde — e achar isso é ler registrador."
  },
  {
    imagem: "images/gigante_mdf.PNG", largura: 1045, altura: 997, alt: "Robô móvel de MDF com motores e sensores, controlado por ATMega328(p)",
    categorias: ["eletronica", "programacao", "codigo"], titulo: "GIGANTE DE MDF",
    links: [{ tipo: "repo", url: "https://github.com/tysper/universidade_unisanta_gigantes_de_mdf" }],
    stack: ["C", "ATMega328(p)", "PWM", "Timers", "Doxygen"],
    descricao: "Robô móvel sobre um ATMega328(p), com motores em PWM, temporizadores e interrupções escritos sem nenhuma biblioteca pronta. O controle inteiro foi montado a partir dos registradores. Código documentado com Doxygen e versionado no GitHub, em equipe e com prazo por etapa.",
    desafio: "Sem biblioteca, cada temporizador vira decisão de projeto em vez de chamada de função — e com prazo por etapa e mais gente no repositório, o código ainda tinha que ficar legível para outra pessoa continuar."
  },
  {
    imagem: "images/calcResistor.png", largura: 646, altura: 474, alt: "Tela do programa em C# que calcula resistência equivalente",
    categorias: ["programacao"], titulo: "ASSOCIAÇÃO DE RESISTORES",
    stack: ["C#","Windows Forms","Visual Studio","Leis de Ohm"],
    descricao: "Calculadora de associação de resistores em C# com Windows Forms: entram os valores, sai a resistência equivalente. Exercício de fundamentos — leis de Ohm, série e paralelo, e interface orientada a eventos.",
    desafio: "A conta é de primeiro ano; o que não é trivial é a interface responder a cada digitação sem calcular em cima de um campo ainda pela metade."
  },
  {
    imagem: "images/calcDesloceVel.png", largura: 805, altura: 514, alt: "Tela do programa em C# que calcula deslocamento e velocidade",
    categorias: ["programacao"], titulo: "CINEMÁTICA — MRUV",
    stack: ["C#","Windows Forms","POO","MRUV"],
    descricao: "Calculadora de movimento uniformemente variado em C#: entra a condição inicial, saem deslocamento e velocidade. Exercício de fundamentos de cinemática e de orientação a objetos.",
    desafio: "Levar a cinemática para objetos: a condição inicial deixa de ser um punhado de variáveis soltas e passa a ser o estado de quem calcula."
  },
  {
    imagem: "images/calcFatrito.png", largura: 563, altura: 693, alt: "Tela do programa em C# que calcula força de atrito",
    categorias: ["programacao"], titulo: "FORÇA DE ATRITO",
    stack: ["C#","Windows Forms","Física aplicada","Eventos"],
    descricao: "Calculadora de força de atrito em C#, com massa, coeficiente, força aplicada, ângulo e deslocamento como entrada. Exercício de fundamentos de física aplicada.",
    desafio: "As cinco entradas não são independentes — o ângulo muda a componente normal, que muda o atrito — então a ordem do cálculo pesa tanto quanto a fórmula."
  },
  {
    imagem: "images/vldCartao.png", largura: 647, altura: 477, alt: "Tela do programa em C# que valida números de cartão de crédito",
    categorias: ["programacao"], titulo: "ALGORITMO DE LUHN",
    stack: ["C#","Windows Forms","Algoritmo de Luhn","Validação"],
    descricao: "Implementação do algoritmo de Luhn em C#: dobra os dígitos em posição alternada, soma tudo, e o número só é válido se o total fechar em múltiplo de dez. É a verificação que barra erro de digitação em número de cartão antes de qualquer consulta à operadora — checagem local, sem rede.",
    desafio: "A regra cabe num parágrafo, e é por isso que engana: acertar qual posição dobra e tratar o resultado que passa de nove é onde a implementação erra calada."
  },
  {
    imagem: "images/vldRG.png", largura: 801, altura: 462, alt: "Tela do programa em C# que valida números de RG",
    categorias: ["programacao"], titulo: "DÍGITO VERIFICADOR DE RG",
    stack: ["C#","Windows Forms","Strings","Validação"],
    descricao: "Validador de RG em C#, implementando o dígito verificador. Cada posição do número carrega um peso, a soma ponderada determina o último algarismo, e trocar qualquer dígito quebra a conta. Mesma família de verificação do Luhn, com outra regra de peso.",
    desafio: "Com peso por posição, o defeito não aparece onde se procura: número inválido continua sendo recusado, e o erro só se revela no documento legítimo que o validador reprova."
  },
  {
    imagem: "images/veias.png", largura: 528, altura: 591, alt: "Protótipo portátil de scanner de veias por infravermelho",
    categorias: ["eletronica", "programacao"], titulo: "SCANNER DE VEIAS",
    stack: ["Android","OpenCV","Visão computacional","LEDs NIR 850nm"],
    descricao: "Protótipo portátil para achar veia antes de punção, com LEDs infravermelhos de 850 nm e um filtro improvisado de lentes de óculos 3D. A imagem vem da câmera de um celular comum, e um aplicativo Android processa com OpenCV para realçar o contraste que o infravermelho revela sob a pele. A intenção é essa mesmo — pôr ao alcance uma tecnologia que costuma vir em aparelho caro.",
    desafio: "Sem filtro óptico de verdade, a lente de óculos 3D deixa passar mais do que deveria — sobra pouco contraste, e cabe ao processamento no OpenCV puxar o que a óptica não entregou."
  }
];
