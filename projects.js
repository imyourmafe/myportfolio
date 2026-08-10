// ===== Dados dos projetos exibidos na seção "Projetos" =====
// Cada objeto vira um card renderizado dinamicamente por script.js.
const PROJETOS = [
  {
    imagem: "images/ratimbum.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 01",
    categorias: ["eletronica", "programacao"],
    titulo: "PROJETO RATIMBUM",
    descricao: "O projeto teve como tema o universo do Sonic, sendo desenvolvido como uma maquete interativa onde uma sequência de eventos físicos e eletrônicos era acionada automaticamente por um botão inicial. Inspirado nas fases do jogo, o percurso incluía obstáculos, loops e efeitos sonoros que representavam a velocidade e energia características do personagem. O trabalho exigiu competências em programação aplicada à eletrônica, automação de mecanismos, lógica sequencial, sincronização de sensores e motores e design criativo, resultando em uma experiência visual e funcional que unia eletrônica, movimento e narrativa temática."
  },
  {
    imagem: "images/prototype_cinemark.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 05",
    categorias: ["prototipos"],
    titulo: "PROTÓTIPO DE APP CINEMARK",
    descricao: "Este projeto foi um treinamento de design de interface, desenvolvido no Figma, com o objetivo de recriar o aplicativo do Cinemark. O protótipo inclui telas de splash screen e feed com seções de filmes \"Em Cartaz\", \"Pré-venda\" e \"Em Breve\", aplicando conceitos de UX/UI Design, hierarquia visual, uso de componentes reutilizáveis e prototipagem interativa. Foram exploradas também práticas de design responsivo, organização de layout mobile e consistência visual, resultando em uma interface fiel ao aplicativo original e funcional para aprimorar habilidades de design e usabilidade."
  },
  {
    imagem: "images/prototype_protfolio.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 09",
    categorias: ["prototipos"],
    titulo: "PROTÓTIPO DE PORTFOLIO",
    descricao: "Este projeto consiste no protótipo de um portfólio pessoal, desenvolvido no Figma, com foco em design limpo, navegação intuitiva e responsividade para diferentes dispositivos. O protótipo apresenta versões em modo claro e escuro, seções dedicadas a \"Sobre\", \"Projetos\" e \"Contato\", e conexões interativas simulando a experiência real do usuário. Foram aplicadas competências em UI/UX Design, prototipagem interativa, organização de fluxo de navegação, hierarquia visual, acessibilidade e identidade pessoal de marca, resultando em um layout funcional e esteticamente equilibrado para a futura implementação em código."
  },
  {
    imagem: "images/prototype_tcc.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 12",
    categorias: ["prototipos"],
    titulo: "PROTÓTIPO DO TCC",
    descricao: "Este projeto, desenvolvido como Trabalho de Conclusão de Curso (TCC), consiste em um SmartLab — um sistema voltado para o gerenciamento inteligente do laboratório da faculdade, com foco em acessibilidade e inclusão de pessoas com deficiência visual. O protótipo foi criado no Figma e apresenta telas funcionais para login, cadastro, agendamento de equipamentos, treinamentos e interação com uma assistente de IA, capaz de auxiliar alunos por comandos de voz. Foram aplicadas competências em UX/UI Design acessível, prototipagem de sistemas complexos, integração de inteligência artificial, design de interação inclusiva e organização de fluxos de navegação, resultando em uma solução moderna e humanizada para o ambiente acadêmico."
  },
  {
    imagem: "images/launching_applewatch.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 13",
    categorias: ["design"],
    titulo: "DESIGN DE LANÇAMENTO",
    descricao: "Este projeto pessoal consistiu na criação de um pôster de lançamento de produto no Canva, simulando uma campanha oficial da Apple para o \"Apple Watch Series 10\". Foram aplicadas competências em design gráfico, composição visual, hierarquia tipográfica, uso de cores e contrastes, e marketing visual. O trabalho também envolveu criatividade na simulação de identidade de marca, atenção ao layout profissional e noções de comunicação publicitária, resultando em uma peça visual moderna e coerente com o estilo da marca."
  },
  {
    imagem: "images/online_coding_workshop.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 14",
    categorias: ["design"],
    titulo: "DESIGN DE WORKSHOP DE PROGRAMAÇÃO",
    descricao: "Este projeto consistiu na criação de um anúncio digital para um workshop de programação, desenvolvido no Canva com foco em comunicação visual e clareza informativa. Foram aplicadas competências em design gráfico, organização de layout, uso de cores e tipografia para impacto visual, e estratégias de marketing digital voltadas à divulgação de eventos. O trabalho também envolveu criatividade na composição e consistência estética, resultando em um material atrativo e profissional para promover o evento online."
  },
  {
    imagem: "images/techexpo.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 15",
    categorias: ["design"],
    titulo: "DESIGN DE EVENTO FICTÍCIO",
    descricao: "Este projeto consistiu na criação de um pôster digital para um evento fictício de tecnologia, o Future Tech Expo, desenvolvido no Canva. Foram aplicadas competências em design gráfico, composição visual e identidade tecnológica, utilizando elementos como ícones de circuitos e cores frias para transmitir inovação e modernidade. O trabalho também envolveu organização hierárquica de informações, harmonia cromática e noções de marketing visual, resultando em uma peça profissional voltada à divulgação de conferências e eventos do setor tecnológico."
  },
  {
    imagem: "images/galao_agua.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 02",
    categorias: ["eletronica", "programacao"],
    titulo: "CONTROLE DE NÍVEL DE TANQUE",
    descricao: "O projeto tem como objetivo desenvolver um sistema automatizado de abastecimento de água, no qual uma bomba transfere o líquido de um reservatório inferior para um tanque superior conforme o nível detectado por sensores. O sistema deve monitorar o nível de forma escalonada, acionar a bomba automaticamente e permitir o esvaziamento controlado do tanque. Exigiu competências em automação, eletrônica, controle de sensores e atuadores, além de montagem de circuito com PCB e programação embarcada para o gerenciamento do processo."
  },
  {
    imagem: "images/braço_mecanico.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 03",
    categorias: ["eletronica", "programacao"],
    titulo: "BRAÇO ROBÓTICO",
    descricao: "O projeto \"Braço Robótico\" teve como objetivo desenvolver um sistema controlado por Arduino UNO, utilizando a linguagem C++ para movimentar articulações por meio de servomotores. Foram aplicadas competências em eletrônica, montagem de circuitos e programação embarcada, além do uso de componentes como joystick, interruptor e resistores. O trabalho exigiu conhecimentos em controle de movimento, prototipagem de placas e testes práticos em laboratório."
  },
  {
    imagem: "images/cofre.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 04",
    categorias: ["eletronica", "programacao"],
    titulo: "COFRE COM SENHA",
    descricao: "O projeto consistiu na criação de um sistema eletrônico controlado pelo microcontrolador ATmega328P, programado em Assembly. Envolveu competências em eletrônica e programação de baixo nível, com integração de teclado matricial, LED e trava solenoide. Exigiu conhecimentos em arquitetura de hardware, montagem de circuitos, depuração e documentação técnica."
  },
  {
    imagem: "images/gigante_mdf.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 16",
    categorias: ["eletronica", "programacao"],
    titulo: "GIGANTE DE MDF",
    descricao: "O trabalho \"Gigantes de MDF\" consistiu no desenvolvimento de um robô móvel controlado por um microcontrolador ATMega328(p)(PB), integrando eletrônica, mecânica e programação embarcada. Foram aplicadas competências em lógica de controle com PWM, timers e interrupções, além do projeto de circuitos para acionamento de motores e sensores sem uso de bibliotecas prontas. Exigiu domínio em programação C/C++, documentação técnica com Doxygen, versionamento no GitHub e trabalho em equipe para cumprimento das etapas e prazos definidos."
  },
  {
    imagem: "images/calcResistor.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 06",
    categorias: ["programacao"],
    titulo: "CÁLCULO DE RESISTORES",
    descricao: "O projeto desenvolvido em C# no Visual Studio Community tem como objetivo calcular valores equivalentes de resistência elétrica a partir de resistores informados pelo usuário. O sistema aplicou conhecimentos de eletricidade e circuitos, incluindo associação de resistores e leis de Ohm, aliados a lógica de programação, manipulação de variáveis numéricas e interface gráfica com Windows Forms. Exigiu também compreensão de conceitos de eletrônica básica e estruturação de código orientado a eventos para exibir os resultados de forma clara e interativa."
  },
  {
    imagem: "images/calcDesloceVel.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 07",
    categorias: ["programacao"],
    titulo: "CÁLCULO DE DESLOC. E VELOCIDADE",
    descricao: "O projeto foi desenvolvido em C# no Visual Studio Community e tem como objetivo calcular o deslocamento e a velocidade de um veículo a partir de valores inseridos pelo usuário. O trabalho envolveu competências em lógica de programação, aplicação de fórmulas de cinemática (MRUV), desenvolvimento de interfaces gráficas (Windows Forms) e manipulação de eventos e entradas de dados. Também exigiu conhecimentos de estruturação de código orientado a objetos, tratamento de variáveis numéricas e organização visual da interface para uma experiência de uso clara e funcional."
  },
  {
    imagem: "images/calcFatrito.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 08",
    categorias: ["programacao"],
    titulo: "CÁLCULO DE FORÇA DE ATRITO",
    descricao: "O projeto, desenvolvido em C# no Visual Studio Community, tem como objetivo determinar a força de atrito resultante a partir de dados inseridos pelo usuário, como massa, coeficiente de atrito, força aplicada, ângulo e deslocamento. O sistema exigiu competências em lógica matemática e física aplicada, programação orientada a eventos, manipulação de dados numéricos e fórmulas físicas, além de desenvolvimento de interface gráfica (Windows Forms) com foco em clareza, funcionalidade e interação do usuário."
  },
  {
    imagem: "images/vldCartao.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 10",
    categorias: ["programacao"],
    titulo: "VALIDAÇÃO DE CARTÃO",
    descricao: "O projeto, desenvolvido em C# no Visual Studio Community, tem como objetivo validar números de cartão de crédito inseridos pelo usuário, aplicando o algoritmo de Luhn. O sistema exigiu competências em lógica de programação, tratamento de strings e dados numéricos, validação de entradas, e interface gráfica com Windows Forms. Também envolveu conhecimentos de segurança e verificação de dados, garantindo o funcionamento correto e intuitivo da aplicação."
  },
  {
    imagem: "images/vldRG.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 11",
    categorias: ["programacao"],
    titulo: "VALIDAÇÃO DE RG",
    descricao: "O projeto desenvolvido em C# no Visual Studio Community tem como objetivo validar números de Registro Geral (RG) digitados pelo usuário. O sistema aplicou competências em lógica de programação, tratamento e verificação de dados numéricos, implementação de algoritmos de validação, e desenvolvimento de interface gráfica com Windows Forms. Também envolveu manipulação de strings, controle de eventos e boas práticas de usabilidade, garantindo uma validação rápida e visualmente intuitiva."
  },
  {
    imagem: "images/veias.jpg",
    largura: 1200,
    altura: 900,
    alt: "Imagem do Projeto 17",
    categorias: ["eletronica", "programacao"],
    titulo: "SCANNER DE VEIAS",
    descricao: "O projeto teve como objetivo criar um protótipo portátil e de baixo custo capaz de auxiliar na localização de veias para punção intravenosa. O sistema utiliza LEDs NIR de 850 nm, filtro infravermelho feito com lentes de óculos 3D, câmera de smartphone e um aplicativo Android desenvolvido com OpenCV para processamento de imagem. O trabalho exigiu competências em eletrônica, óptica, programação mobile e visão computacional, visando tornar essa tecnologia mais acessível e eficiente para uso médico."
  }
];
