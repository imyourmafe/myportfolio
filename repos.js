// ===== Repositórios do GitHub exibidos como cards de código =====
// Entram na mesma grade dos projetos, antes deles, e abrem o mesmo modal de
// detalhe — a diferença é que o card mostra o caminho do repositório no topo
// e o modal ganha um botão "Abrir no GitHub".
const REPOS = [
  {
    tipo: "codigo",
    repo: "fabriciosuzart/AcademAI",
    links: [{ tipo: "repo", url: "https://github.com/fabriciosuzart/AcademAI" }],
    titulo: "AcademAI — assistente virtual acadêmica",
    categorias: ["codigo", "prototipos"],
    stack: ["React 19", "TypeScript", "Vite", "React Router", "Axios"],
    descricao: "A outra metade do TCC: o protótipo virando código. Front-end em React 19 com TypeScript sobre Vite, React Router para navegação e Axios para consumo de API. Dá para abrir o protótipo e este repositório lado a lado e ver o que mudou entre desenhar e construir.",
    desafio: "Um protótipo não diz em que ordem construir. O trabalho foi decidir o que virava componente reutilizável e o que era desenho só daquela tela."
  },
  {
    tipo: "codigo",
    repo: "GestaoProjetos2026/crm-leads",
    links: [{ tipo: "repo", url: "https://github.com/GestaoProjetos2026/crm-leads" }],
    titulo: "CRM Leads — automação de marketing",
    categorias: ["codigo", "programacao"],
    stack: ["Node.js", "Docker", "PostgreSQL", "Redis", "GitHub Actions"],
    descricao: "Plataforma de automação de marketing que centraliza dados de leads, segmenta usuários e executa campanhas automatizadas baseadas em comportamento e regras configuráveis. O repositório reúne backend, frontend e documentação, com pipeline de CI/CD em GitHub Actions que constrói a imagem Docker, publica no Docker Hub e faz o deploy por SSH em uma VM de produção, com Postgres e Redis em containers.",
    desafio: "Automação é fácil de testar na máquina e difícil de confiar na produção: com deploy por SSH numa VM, o que quebra não quebra no teste, quebra com dado de lead real passando."
  },
  {
    tipo: "codigo",
    repo: "Tec-SCTV/Diagramas",
    links: [{ tipo: "repo", url: "https://github.com/Tec-SCTV/Diagramas" }],
    titulo: "Diagramas — setor técnico SCTV",
    categorias: ["codigo", "design"],
    stack: ["Documentação técnica", "Diagramas"],
    descricao: "Repositório responsável por armazenar os diagramas gerados pelo setor técnico da SCTV, organizados por tema — intercom do ginásio de jogos, rádio e Studio J.",
    desafio: "Diagrama serve para quem não estava lá. O esforço não é desenhar, é manter o conjunto organizado a ponto de outra pessoa achar o do intercom sem precisar perguntar."
  }
];
