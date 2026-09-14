// ===== Repositórios do GitHub exibidos como cards de código =====
// Entram na mesma grade dos projetos, antes deles, e abrem o mesmo modal de
// detalhe — a diferença é que o card mostra o caminho do repositório no topo
// e o modal ganha um botão "Abrir no GitHub".
const REPOS = [
  {
    tipo: "codigo",
    repo: "fabriciosuzart/AcademAI",
    url: "https://github.com/fabriciosuzart/AcademAI",
    titulo: "AcademAI — assistente virtual acadêmica",
    categorias: ["codigo", "prototipos"],
    stack: ["React 19", "TypeScript", "Vite", "React Router", "Axios"],
    descricao: "Aplicação web do TCC, com o intuito de criar uma assistente virtual. O front-end é construído em React 19 com TypeScript sobre Vite, usando React Router para navegação, Axios para consumo de API e ícones Lucide. O projeto é a continuação em código do protótipo SmartLab desenhado no Figma."
  },
  {
    tipo: "codigo",
    repo: "GestaoProjetos2026/crm-leads",
    url: "https://github.com/GestaoProjetos2026/crm-leads",
    titulo: "CRM Leads — automação de marketing",
    categorias: ["codigo", "programacao"],
    stack: ["Node.js", "Docker", "PostgreSQL", "Redis", "GitHub Actions"],
    descricao: "Plataforma de automação de marketing que centraliza dados de leads, segmenta usuários e executa campanhas automatizadas baseadas em comportamento e regras configuráveis. O repositório reúne backend, frontend e documentação, com pipeline de CI/CD em GitHub Actions que constrói a imagem Docker, publica no Docker Hub e faz o deploy por SSH em uma VM de produção, com Postgres e Redis em containers."
  },
  {
    tipo: "codigo",
    repo: "tysper/universidade_unisanta_gigantes_de_mdf",
    url: "https://github.com/tysper/universidade_unisanta_gigantes_de_mdf",
    titulo: "Gigantes de MDF — robô ATMega328",
    categorias: ["codigo", "programacao"],
    stack: ["C", "ATMega328(p)", "PWM", "Timers", "Doxygen"],
    descricao: "Robô funcional desenvolvido na disciplina de Programação de Hardware: movimentação por motores controlados via PWM, \"arma laser\" acionada por temporizadores, detecção por sensores e lógica de controle escrita sem bibliotecas prontas. O código é documentado com Doxygen e versionado no GitHub."
  },
  {
    tipo: "codigo",
    repo: "Tec-SCTV/Diagramas",
    url: "https://github.com/Tec-SCTV/Diagramas",
    titulo: "Diagramas — setor técnico SCTV",
    categorias: ["codigo", "design"],
    stack: ["Documentação técnica", "Diagramas"],
    descricao: "Repositório responsável por armazenar os diagramas gerados pelo setor técnico da SCTV, organizados por tema — intercom do ginásio de jogos, rádio e Studio J."
  }
];
