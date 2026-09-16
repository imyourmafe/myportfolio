// ===== Projetos exibidos na seção "Projetos" =====
// Cada objeto vira um card; a descrição completa aparece no modal de detalhe.
//
// `links` é uma lista de { tipo, url }. Os tipos conhecidos estão em TIPOS_LINK,
// no script.js: repo, figma, demo e video. Projeto sem links abre o modal sem
// nenhum botão — e é exatamente isso que a gente quer ver menos por aqui.
const PROJETOS = [
  {
    imagem: "images/este_site.jpg", largura: 900, altura: 562,
    alt: "O portfólio aberto no tema Petróleo, com o painel de personalização mostrando temas, cores de destaque e ícones",
    categorias: ["design", "programacao"], titulo: "ESTE PORTFÓLIO",
    stack: ["HTML", "CSS", "JavaScript", "WCAG 2.1 AA"],
    links: [{ tipo: "demo", url: "https://imyourmafe.github.io/myportfolio/" },
            { tipo: "repo", url: "https://github.com/imyourmafe/myportfolio" }],
    descricao: "O site que você está lendo agora, escrito à mão em HTML, CSS e JavaScript, sem framework e sem etapa de build. O que ele tem de diferente está no botão de personalizar: são 8 temas, 9 cores de destaque e 8 ícones de marca livremente combináveis, e cada escolha é aplicada e gravada no instante do clique. Como uma cor só não consegue ser legível como texto em tema claro e escuro ao mesmo tempo, o site deriva em tempo de execução uma versão acessível de cada destaque — mantém o matiz e a saturação da paleta e move só a luminosidade até alcançar o mínimo da WCAG. As 72 combinações de tema e destaque passam em AA, e o próprio arquivo traz a função que audita isso. A navegação inteira funciona por teclado, o modal prende o foco, e sem JavaScript a página continua legível."
  },
  {
    imagem: "images/ratimbum.jpg", largura: 900, altura: 506, alt: "Maquete interativa com tema do Sonic: percurso com obstáculos, loops e efeitos acionados por um botão",
    categorias: ["eletronica", "programacao"], titulo: "PROJETO RATIMBUM",
    stack: ["Arduino","Sensores","Automação","Lógica sequencial"],
    descricao: "Uma maquete do universo do Sonic em que um único botão dispara toda a sequência: o percurso corre sozinho por obstáculos, loops e efeitos sonoros até o fim. O trabalho está todo na sincronia — sensores e motores precisam disparar na ordem certa, porque cada mecanismo depende do anterior ter terminado."
  },
  {
    imagem: "images/prototype_cinemark.png", largura: 672, altura: 715, alt: "Telas do protótipo do app Cinemark no Figma: splash screen e feed com Em Cartaz, Pré-venda e Em Breve",
    categorias: ["prototipos"], titulo: "PROTÓTIPO DE APP CINEMARK",
    stack: ["Figma","UX/UI","Design mobile","Prototipagem"],
    descricao: "Recriação do app do Cinemark no Figma, da splash screen ao feed com \"Em Cartaz\", \"Pré-venda\" e \"Em Breve\". Copiar uma interface que já existe é um exercício diferente de desenhar do zero: obriga a reparar em decisões que passam despercebidas quando se é dono da tela — espaçamento, hierarquia entre cartaz e título, o que cabe antes da dobra. Os componentes foram montados para reuso, não desenhados tela a tela."
  },
  {
    imagem: "images/prototype_protfolio.png", largura: 900, altura: 501, alt: "Protótipo de portfólio no Figma, nas versões clara e escura, com as seções Sobre, Projetos e Contato",
    categorias: ["prototipos"], titulo: "PROTÓTIPO DESTE SITE",
    stack: ["Figma","UI/UX","Modo claro/escuro","Prototipagem"],
    descricao: "O desenho que virou o site que você está lendo. Protótipo no Figma com as versões clara e escura, as seções Sobre, Projetos e Contato e as ligações entre telas. Comparar com o resultado é metade da graça: dá para ver o que sobreviveu à passagem para código e o que só deu para decidir com o conteúdo real na frente."
  },
  {
    imagem: "images/prototype_tcc.png", largura: 788, altura: 592, alt: "Tela inicial do protótipo no Figma, com o catálogo de equipamentos do laboratório — impressora 3D, cortadora a laser, prototipadora — e o estado de cada um para agendamento",
    categorias: ["prototipos"], titulo: "ACADEMAI — PROTÓTIPO",
    stack: ["Figma","UX acessível","IA por voz","Fluxos de navegação"],
    descricao: "O protótipo do AcademAI, o TCC: um sistema de gestão do laboratório da faculdade desenhado em torno de quem não enxerga a tela. As telas cobrem login, cadastro, o catálogo de equipamentos com o estado de cada um, agendamento, treinamentos e uma assistente que responde por comando de voz. Projetar para voz muda a estrutura inteira — sem a tela servindo de mapa, a navegação precisa caber na memória de quem ouve, e cada fluxo tem que ser curto o bastante para não se perder no meio. O projeto trocou de nome no caminho: as telas ainda trazem o InovFabLab no topo."
  },
  {
    imagem: "images/launching_applewatch.png", largura: 900, altura: 900, alt: "Pôster de lançamento de um smartwatch, feito no Canva",
    categorias: ["design"], titulo: "LANÇAMENTO APPLE WATCH",
    stack: ["Canva","Design gráfico","Tipografia","Marketing visual"],
    descricao: "Pôster de lançamento do Apple Watch Series 10, feito como se fosse peça oficial da Apple. Imitar uma marca de linguagem tão fechada não deixa espaço para inventar: ou o espaçamento, o peso da tipografia e o silêncio em volta do produto estão certos, ou a peça denuncia na hora que não é deles."
  },
  {
    imagem: "images/online_coding_workshop.png", largura: 900, altura: 450, alt: "Anúncio digital de um workshop de programação online, feito no Canva",
    categorias: ["design"], titulo: "ANÚNCIO DE WORKSHOP",
    stack: ["Canva","Design gráfico","Layout","Marketing digital"],
    descricao: "Anúncio de um workshop de programação, para circular em rede social. É peça de informação antes de ser peça de estética: data, tema e como se inscrever precisam ser lidos num passar de olhos, e é isso que decide a hierarquia — não o gosto."
  },
  {
    imagem: "images/techexpo.png", largura: 506, altura: 900, alt: "Pôster do evento fictício de tecnologia Future Tech Expo",
    categorias: ["design"], titulo: "FUTURE TECH EXPO",
    stack: ["Canva","Pôster","Identidade visual","Harmonia cromática"],
    descricao: "Pôster de um evento de tecnologia inventado para o exercício. A identidade se apoia em ícones de circuito e paleta fria, e a dificuldade do gênero é justamente essa: \"tecnologia\" tem um clichê visual pronto, e sair dele sem perder a leitura imediata do tema é o trabalho."
  },
  {
    imagem: "images/galao_agua.jpg", largura: 831, altura: 900, alt: "Sistema de abastecimento automatizado: galão de água com sensor de nível e bomba",
    categorias: ["eletronica", "programacao"], titulo: "CONTROLE DE NÍVEL DE TANQUE",
    stack: ["Automação","Sensores de nível","PCB","Programação embarcada"],
    descricao: "Sistema que enche um tanque superior puxando água de um reservatório embaixo, ligando a bomba conforme o nível lido pelos sensores. O nível é monitorado de forma escalonada, e o esvaziamento também é controlado. Circuito montado em PCB, com a lógica em programação embarcada."
  },
  {
    imagem: "images/braço_mecanico.jpg", largura: 900, altura: 675, alt: "Braço robótico articulado montado, controlado por Arduino UNO",
    categorias: ["eletronica", "programacao"], titulo: "BRAÇO ROBÓTICO",
    stack: ["Arduino UNO","C++","Servomotores","Joystick"],
    descricao: "Braço articulado movido por servomotores e controlado por joystick, com firmware em C++ num Arduino UNO. Montagem de circuito com joystick, interruptor e resistores, prototipagem da placa e teste em laboratório."
  },
  {
    imagem: "images/cofre.jpg", largura: 900, altura: 690, alt: "Cofre eletrônico com teclado e travamento por senha, controlado por ATmega328P",
    categorias: ["eletronica", "programacao"], titulo: "COFRE COM SENHA",
    stack: ["ATmega328P","Assembly","Teclado matricial","Trava solenoide"],
    descricao: "Cofre eletrônico com teclado matricial e trava solenoide, controlado por um ATmega328P programado em Assembly. Escrever em Assembly quer dizer tratar a varredura do teclado, a comparação da senha e o acionamento da trava direto nos registradores do microcontrolador, sem nenhuma camada de abstração no meio."
  },
  {
    imagem: "images/gigante_mdf.PNG", largura: 1045, altura: 997, alt: "Robô móvel de MDF com motores e sensores, controlado por ATMega328(p)",
    categorias: ["eletronica", "programacao", "codigo"], titulo: "GIGANTE DE MDF",
    links: [{ tipo: "repo", url: "https://github.com/tysper/universidade_unisanta_gigantes_de_mdf" }],
    stack: ["C", "ATMega328(p)", "PWM", "Timers", "Doxygen"],
    descricao: "Robô móvel sobre um ATMega328(p), com motores em PWM, temporizadores e interrupções escritos sem nenhuma biblioteca pronta. O controle inteiro foi montado a partir dos registradores. Código documentado com Doxygen e versionado no GitHub, em equipe e com prazo por etapa."
  },
  {
    imagem: "images/calcResistor.png", largura: 646, altura: 474, alt: "Tela do programa em C# que calcula resistência equivalente",
    categorias: ["programacao"], titulo: "ASSOCIAÇÃO DE RESISTORES",
    stack: ["C#","Windows Forms","Visual Studio","Leis de Ohm"],
    descricao: "Calculadora de associação de resistores em C# com Windows Forms: entram os valores, sai a resistência equivalente. Exercício de fundamentos — leis de Ohm, série e paralelo, e interface orientada a eventos."
  },
  {
    imagem: "images/calcDesloceVel.png", largura: 805, altura: 514, alt: "Tela do programa em C# que calcula deslocamento e velocidade",
    categorias: ["programacao"], titulo: "CINEMÁTICA — MRUV",
    stack: ["C#","Windows Forms","POO","MRUV"],
    descricao: "Calculadora de movimento uniformemente variado em C#: entra a condição inicial, saem deslocamento e velocidade. Exercício de fundamentos de cinemática e de orientação a objetos."
  },
  {
    imagem: "images/calcFatrito.png", largura: 563, altura: 693, alt: "Tela do programa em C# que calcula força de atrito",
    categorias: ["programacao"], titulo: "FORÇA DE ATRITO",
    stack: ["C#","Windows Forms","Física aplicada","Eventos"],
    descricao: "Calculadora de força de atrito em C#, com massa, coeficiente, força aplicada, ângulo e deslocamento como entrada. Exercício de fundamentos de física aplicada."
  },
  {
    imagem: "images/vldCartao.png", largura: 647, altura: 477, alt: "Tela do programa em C# que valida números de cartão de crédito",
    categorias: ["programacao"], titulo: "ALGORITMO DE LUHN",
    stack: ["C#","Windows Forms","Algoritmo de Luhn","Validação"],
    descricao: "Implementação do algoritmo de Luhn em C#: dobra os dígitos em posição alternada, soma tudo, e o número só é válido se o total fechar em múltiplo de dez. É a verificação que barra erro de digitação em número de cartão antes de qualquer consulta à operadora — checagem local, sem rede."
  },
  {
    imagem: "images/vldRG.png", largura: 801, altura: 462, alt: "Tela do programa em C# que valida números de RG",
    categorias: ["programacao"], titulo: "DÍGITO VERIFICADOR DE RG",
    stack: ["C#","Windows Forms","Strings","Validação"],
    descricao: "Validador de RG em C#, implementando o dígito verificador. Cada posição do número carrega um peso, a soma ponderada determina o último algarismo, e trocar qualquer dígito quebra a conta. Mesma família de verificação do Luhn, com outra regra de peso."
  },
  {
    imagem: "images/veias.png", largura: 528, altura: 591, alt: "Protótipo portátil de scanner de veias por infravermelho",
    categorias: ["eletronica", "programacao"], titulo: "SCANNER DE VEIAS",
    stack: ["Android","OpenCV","Visão computacional","LEDs NIR 850nm"],
    descricao: "Protótipo portátil para achar veia antes de punção, com LEDs infravermelhos de 850 nm e um filtro improvisado de lentes de óculos 3D. A imagem vem da câmera de um celular comum, e um aplicativo Android processa com OpenCV para realçar o contraste que o infravermelho revela sob a pele. A intenção é essa mesmo — pôr ao alcance uma tecnologia que costuma vir em aparelho caro."
  }
];
