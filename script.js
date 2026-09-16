// ===== Portfólio 2026 =====
// Tudo o que é escolhível (tema, cor de destaque, ícone da marca) é aplicado
// e gravado na hora. Os cards de projeto e de repositório vêm de projects.js
// e repos.js e compartilham o mesmo modal de detalhe.

// ---------- Temas ----------
// O destaque tem dois papéis, e eles pedem coisas opostas:
//
//   preenchimento  fundo de botão, ladrilho da marca, filtro ativo.
//                  Aqui vale a cor da paleta, exatamente como desenhada.
//   texto          .sobrelinha, .card-categoria, ícones, contorno de foco.
//                  Aqui a cor precisa vencer o fundo do tema por 4,5:1.
//
// Uma cor só não dá conta dos dois em temas claros e escuros ao mesmo tempo:
// para passar sobre #F9D6DF (o card do tema Rosa) a luminância tem que ficar
// abaixo de 0,125, e para passar sobre #1B1B1D (o card do tema Escuro) tem que
// ficar acima de 0,225. Não existe interseção.
//
// Então --accent guarda a cor da paleta e --accent-text guarda a versão
// legível dela, derivada por destaqueLegivel(): mesmo matiz, mesma saturação,
// só a luminosidade anda até passar. Em 36 das 72 combinações a cor já passa e
// nada é derivado. Ver verificarContraste() no fim do arquivo.
const BASES = {
  rosa:    { rotulo: 'Rosa',    bg: '#FFEEF2', surface: '#F9D6DF', ink: '#531222', muted: '#7A4152', soft: '#F5BAC9', hairline: 'rgba(83,18,34,.16)',    strongLine: 'rgba(83,18,34,.38)',    accent: '#972E48', onAccent: '#FFEEF2' },
  azul:    { rotulo: 'Azul',    bg: '#010A24', surface: '#061127', ink: '#E6E8EE', muted: '#BFC8EE', soft: '#1B2440', hairline: 'rgba(230,232,238,.16)', strongLine: 'rgba(230,232,238,.42)', accent: '#67749B', onAccent: '#010A24' },
  claro:   { rotulo: 'Claro',   bg: '#FAFAF9', surface: '#FFFFFF', ink: '#1B1A19', muted: '#6B6965', soft: '#EFEEEC', hairline: 'rgba(27,26,25,.12)',    strongLine: 'rgba(27,26,25,.35)',    accent: '#1B1A19', onAccent: '#FAFAF9' },
  escuro:  { rotulo: 'Escuro',  bg: '#111112', surface: '#1B1B1D', ink: '#ECEBE9', muted: '#A3A19D', soft: '#26262A', hairline: 'rgba(236,235,233,.14)', strongLine: 'rgba(236,235,233,.4)',  accent: '#ECEBE9', onAccent: '#111112' },
  papel:   { rotulo: 'Papel',   bg: '#F6F2EC', surface: '#FFFDFA', ink: '#2A241E', muted: '#706356', soft: '#EBE2D6', hairline: 'rgba(42,36,30,.13)',    strongLine: 'rgba(42,36,30,.35)',    accent: '#A04A2E', onAccent: '#FFFDFA' },
  matcha:  { rotulo: 'Matcha',  bg: '#F2F5EE', surface: '#FFFFFF', ink: '#1F2A1C', muted: '#5B6C54', soft: '#DFE9D6', hairline: 'rgba(31,42,28,.13)',    strongLine: 'rgba(31,42,28,.35)',    accent: '#4A7A45', onAccent: '#F2F5EE' },
  lavanda: { rotulo: 'Lavanda', bg: '#F5F2FA', surface: '#FFFFFF', ink: '#241B33', muted: '#6A5F83', soft: '#E6DEF5', hairline: 'rgba(36,27,51,.13)',    strongLine: 'rgba(36,27,51,.35)',    accent: '#6A4BA8', onAccent: '#F5F2FA' },
  ambar:   { rotulo: 'Âmbar',   bg: '#FBF4E9', surface: '#FFFCF7', ink: '#33220F', muted: '#7A6246', soft: '#F2E2CA', hairline: 'rgba(51,34,15,.14)',    strongLine: 'rgba(51,34,15,.35)',    accent: '#B06A1E', onAccent: '#FFFCF7' }
};

// A primeira opção mantém o destaque próprio de cada tema.
const DESTAQUES = [
  { nome: 'Padrão do tema',    cor: null,      onAccent: null },
  { nome: 'Vinho',             cor: '#972E48', onAccent: '#FFEEF2' },
  { nome: 'Vinho escuro',      cor: '#531222', onAccent: '#FFEEF2' },
  { nome: 'Rosa',              cor: '#D2557E', onAccent: '#2A0913' },
  { nome: 'Azul marinho',      cor: '#021E73', onAccent: '#E6E8EE' },
  { nome: 'Azul acinzentado',  cor: '#67749B', onAccent: '#010A24' },
  { nome: 'Matcha',            cor: '#4A7A45', onAccent: '#F2F5EE' },
  { nome: 'Lavanda',           cor: '#6A4BA8', onAccent: '#F5F2FA' },
  { nome: 'Âmbar',             cor: '#B06A1E', onAccent: '#FFF9F1' }
];

const FILTROS = [
  { id: 'todos',       rotulo: 'Todos' },
  { id: 'eletronica',  rotulo: 'Eletrônica' },
  { id: 'prototipos',  rotulo: 'Protótipos' },
  { id: 'design',      rotulo: 'Design' },
  { id: 'programacao', rotulo: 'Programação' }
];

const NOMES_CAT = {
  eletronica: 'Eletrônica',
  prototipos: 'Protótipos',
  design: 'Design',
  programacao: 'Programação',
  codigo: 'Programação'
};

// ---------- Cor: contraste e derivação ----------
function hexParaRgb(cor) {
  let h = cor.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
}

function rgbParaHex(rgb) {
  return '#' + rgb.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0').toUpperCase()).join('');
}

// Luminância relativa da WCAG 2.1.
function luminancia(cor) {
  const c = hexParaRgb(cor).map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

function contraste(a, b) {
  const x = luminancia(a), y = luminancia(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

function paraHsl(cor) {
  const [r, g, b] = hexParaRgb(cor).map(v => v / 255);
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
  let h = 0, s = 0;
  if (mx !== mn) {
    const d = mx - mn;
    s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    h = mx === r ? ((g - b) / d + (g < b ? 6 : 0)) : mx === g ? ((b - r) / d + 2) : ((r - g) / d + 4);
    h /= 6;
  }
  return [h, s, l];
}

function deHsl(h, s, l) {
  if (s === 0) { const v = l * 255; return rgbParaHex([v, v, v]); }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const f = t => {
    t = (t + 1) % 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return rgbParaHex([f(h + 1 / 3) * 255, f(h) * 255, f(h - 1 / 3) * 255]);
}

// Versão do destaque que serve de TEXTO sobre os fundos deste tema.
// Mantém matiz e saturação e move só a luminosidade, em passos de 0,5%, até
// alcançar 4,5:1 sobre bg e surface e 3:1 sobre soft (onde só há ícone).
// Se a cor da paleta já passa, ela volta intacta.
function destaqueLegivel(accent, bg, surface, soft) {
  const passa = c => contraste(c, bg) >= 4.5 && contraste(c, surface) >= 4.5 && contraste(c, soft) >= 3;
  if (passa(accent)) return accent;
  const [h, s, l0] = paraHsl(accent);
  const temaClaro = luminancia(bg) > 0.35;
  for (let i = 1; i <= 200; i++) {
    const l = temaClaro ? l0 - i / 200 : l0 + i / 200;
    if (l < 0 || l > 1) break;
    const c = deHsl(h, s, l);
    if (passa(c)) return c;
  }
  return temaClaro ? '#000000' : '#FFFFFF';
}

// Cor do texto EM CIMA do destaque preenchido (botão, ladrilho da marca,
// filtro ativo). Respeita a escolha da paleta quando ela alcança 4,5:1; se não,
// vai para o extremo que tiver mais contraste.
function sobreDestaque(accent, preferida) {
  if (preferida && contraste(preferida, accent) >= 4.5) return preferida;
  const claro = '#FFFFFF', escuro = '#0B0B0C';
  return contraste(escuro, accent) >= contraste(claro, accent) ? escuro : claro;
}

const SVG_NS = 'http://www.w3.org/2000/svg';

function svgEl(atributos, filhos) {
  const el = document.createElementNS(SVG_NS, 'svg');
  const padrao = {
    xmlns: SVG_NS, width: '18', height: '18', viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', 'stroke-width': '2',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true'
  };
  Object.entries(Object.assign({}, padrao, atributos || {})).forEach(([k, v]) => el.setAttribute(k, v));
  (filhos || []).forEach(([tag, attrs]) => {
    const f = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([k, v]) => f.setAttribute(k, v));
    el.appendChild(f);
  });
  return el;
}

function glifoTexto(conteudo, familia, tamanho) {
  const span = document.createElement('span');
  span.textContent = conteudo;
  span.style.fontFamily = familia;
  span.style.fontSize = tamanho;
  span.style.lineHeight = '1';
  span.style.fontWeight = familia.indexOf('mono') > -1 ? '600' : '400';
  span.style.letterSpacing = '.01em';
  return span;
}

const GLIFOS = {
  monograma: () => glifoTexto('MF', "'Instrument Serif', Georgia, serif", '18px'),
  codigo:    () => glifoTexto('</>', 'ui-monospace, SFMono-Regular, Menlo, monospace', '12px'),
  faisca:    () => svgEl(null, [['path', { d: 'M12 3c.6 4.4 4.6 8.4 9 9-4.4.6-8.4 4.6-9 9-.6-4.4-4.6-8.4-9-9 4.4-.6 8.4-4.6 9-9Z' }]]),
  asterisco: () => svgEl(null, [['path', { d: 'M12 4v16' }], ['path', { d: 'M4.5 8 19.5 16' }], ['path', { d: 'M19.5 8 4.5 16' }]]),
  anel:      () => svgEl(null, [['circle', { cx: 12, cy: 12, r: 8.5 }], ['circle', { cx: 12, cy: 12, r: 3, fill: 'currentColor', stroke: 'none' }]]),
  hexagono:  () => svgEl(null, [['polygon', { points: '12 2.5 20.5 7.25 20.5 16.75 12 21.5 3.5 16.75 3.5 7.25' }]]),
  losango:   () => svgEl(null, [['path', { d: 'M12 3 21 12 12 21 3 12Z' }]]),
  ponto:     () => svgEl(null, [['circle', { cx: 12, cy: 12, r: 6, fill: 'currentColor', stroke: 'none' }]])
};

const ICONES_CONTATO = {
  email:    () => svgEl(null, [['rect', { width: 20, height: 16, x: 2, y: 4, rx: 2 }], ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' }]]),
  linkedin: () => svgEl(null, [['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z' }], ['rect', { width: 4, height: 12, x: 2, y: 9 }], ['circle', { cx: 4, cy: 4, r: 2 }]]),
  github:   () => svgEl(null, [['path', { d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' }], ['path', { d: 'M9 18c-4.51 2-5-2-7-2' }]]),
  download: () => svgEl(null, [['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }], ['polyline', { points: '7 10 12 15 17 10' }], ['line', { x1: 12, x2: 12, y1: 15, y2: 3 }]])
};

const CONTATOS = [
  { rotulo: 'E-mail',    valor: 'mariafernandamaneira@hotmail.com', href: 'mailto:mariafernandamaneira@hotmail.com', icone: 'email' },
  { rotulo: 'LinkedIn',  valor: 'maria-fernanda-maneira',           href: 'https://www.linkedin.com/in/maria-fernanda-maneira', icone: 'linkedin' },
  { rotulo: 'GitHub',    valor: 'github.com/imyourmafe',            href: 'https://github.com/imyourmafe', icone: 'github' },
  { rotulo: 'Currículo', valor: 'Baixar PDF',                       href: 'https://canva.link/curriculo-mfmaneira', icone: 'download' }
];

const CHIPS = ['HTML', 'CSS', 'JAVASCRIPT', 'FIGMA', 'CANVA', 'CAPCUT'];

const CHAVE = 'mf-portfolio-tema';

// localStorage pode lançar (navegação privada, cookies bloqueados): o site
// continua funcionando, só não guarda a escolha entre visitas.
const armazenamento = {
  ler() {
    try { return JSON.parse(localStorage.getItem(CHAVE) || 'null'); } catch { return null; }
  },
  gravar(valor) {
    try { localStorage.setItem(CHAVE, JSON.stringify(valor)); } catch { /* sem persistência */ }
  }
};

// Objeto literal herda Object.prototype, então um `if (MAPA[chave])` aceita
// "constructor", "valueOf", "__proto__" e "hasOwnProperty" — e o valor herdado
// quebra adiante. Medido antes desta guarda: com {"icone":"valueOf"} gravado, o
// throw em aplicarIcone() derrubava o IIFE iniciar() inteiro e a página ficava
// em branco. Só chave própria conta.
function temChave(mapa, chave) {
  return typeof chave === 'string' && Object.hasOwn(mapa, chave);
}

// O primeiro glifo declarado é o padrão. Derivado em vez de escrito à mão, para
// renomear ou reordenar GLIFOS não virar página quebrada.
const ICONE_PADRAO = Object.keys(GLIFOS)[0];

const estado = { base: 'claro', destaque: 0, icone: ICONE_PADRAO, filtro: 'todos' };

function temaAtual() {
  const b = BASES[estado.base] || BASES.claro;
  const d = DESTAQUES[estado.destaque] || DESTAQUES[0];
  const cabecalhosEscuros = { escuro: 'rgba(17,17,18,.82)', azul: 'rgba(1,10,36,.82)' };
  const accent = d.cor || b.accent;
  return Object.assign({}, b, {
    accent: accent,
    accentTexto: destaqueLegivel(accent, b.bg, b.surface, b.soft),
    onAccent: sobreDestaque(accent, d.onAccent || b.onAccent),
    headerBg: cabecalhosEscuros[estado.base] || 'rgba(255,255,255,.72)'
  });
}

function aplicarTema() {
  const t = temaAtual();
  const raiz = document.documentElement;
  raiz.style.setProperty('--bg', t.bg);
  raiz.style.setProperty('--surface', t.surface);
  raiz.style.setProperty('--ink', t.ink);
  raiz.style.setProperty('--muted', t.muted);
  raiz.style.setProperty('--soft', t.soft);
  raiz.style.setProperty('--hairline', t.hairline);
  raiz.style.setProperty('--strong-line', t.strongLine);
  raiz.style.setProperty('--accent', t.accent);
  raiz.style.setProperty('--accent-text', t.accentTexto);
  raiz.style.setProperty('--on-accent', t.onAccent);
  raiz.style.setProperty('--header-bg', t.headerBg);
  raiz.dataset.tema = estado.base;
}

// A troca de tema precisa atravessar TODOS os elementos ao mesmo tempo, não só
// o fundo da página. Uma classe curta em <html> liga a transição para tudo
// enquanto os tokens mudam e sai logo depois, para que hover e foco continuem
// respondendo na hora no resto do tempo.
const DURACAO_TROCA = 350;
let fimDaTroca = null;

function animarTroca() {
  const raiz = document.documentElement;
  raiz.classList.add('trocando-tema');
  clearTimeout(fimDaTroca);
  fimDaTroca = setTimeout(() => raiz.classList.remove('trocando-tema'), DURACAO_TROCA);
}

function salvar(patch) {
  Object.assign(estado, patch);
  animarTroca();
  aplicarTema();
  armazenamento.gravar({ base: estado.base, destaque: estado.destaque, icone: estado.icone });
}

function aplicarIcone() {
  const alvo = document.getElementById('marcaIcone');
  if (!alvo) return;
  const fabrica = temChave(GLIFOS, estado.icone) ? GLIFOS[estado.icone] : GLIFOS[ICONE_PADRAO];
  alvo.replaceChildren(fabrica());
}

// ---------- Utilidades ----------
function resumir(texto) {
  const corte = texto.indexOf('. ');
  const frase = corte > 40 ? texto.slice(0, corte + 1) : texto;
  return frase.length > 170 ? frase.slice(0, 167).trim() + '…' : frase;
}

function saudacaoAgora() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia — bem-vindo(a)';
  if (h < 18) return 'Boa tarde — bem-vindo(a)';
  return 'Boa noite — bem-vindo(a)';
}

// ---------- Itens da grade ----------
function todosOsItens() {
  const repos = typeof REPOS !== 'undefined' ? REPOS : [];
  const projetos = typeof PROJETOS !== 'undefined' ? PROJETOS : [];
  return repos.concat(projetos);
}

function combinaFiltro(item, filtro) {
  if (filtro === 'todos') return true;
  if (item.categorias.includes(filtro)) return true;
  return filtro === 'programacao' && item.categorias.includes('codigo');
}

function montarCard(item) {
  const ehCodigo = item.tipo === 'codigo';

  const card = document.createElement('article');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Ver detalhes de ' + item.titulo);

  if (ehCodigo) {
    const faixa = document.createElement('div');
    faixa.className = 'card-repo';
    const marcaGit = ICONES_CONTATO.github();
    marcaGit.setAttribute('width', '17');
    marcaGit.setAttribute('height', '17');
    faixa.append(marcaGit, Object.assign(document.createElement('span'), { textContent: item.repo }));
    card.appendChild(faixa);
  } else {
    const moldura = document.createElement('div');
    moldura.className = 'card-imagem';
    const img = document.createElement('img');
    img.src = item.imagem;
    img.alt = item.alt || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    if (item.largura) img.width = item.largura;
    if (item.altura) img.height = item.altura;
    moldura.appendChild(img);
    card.appendChild(moldura);
  }

  const corpo = document.createElement('div');
  corpo.className = 'card-corpo';

  const categoria = document.createElement('span');
  categoria.className = 'card-categoria';
  categoria.textContent = NOMES_CAT[item.categorias[0]] || '';

  const titulo = document.createElement('h3');
  titulo.className = 'card-titulo';
  titulo.textContent = item.titulo;

  const resumo = document.createElement('p');
  resumo.className = 'card-resumo';
  resumo.textContent = resumir(item.descricao);

  const stack = document.createElement('ul');
  stack.className = 'stack';
  (item.stack || []).forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    stack.appendChild(li);
  });

  const ver = document.createElement('span');
  ver.className = 'card-ver';
  ver.append('Ver detalhes', svgEl({ width: '14', height: '14', 'stroke-width': '2.5' }, [['path', { d: 'M5 12h14' }], ['path', { d: 'm12 5 7 7-7 7' }]]));

  corpo.append(categoria, titulo, resumo, stack, ver);
  card.appendChild(corpo);

  const abrir = () => abrirModal(item);
  card.addEventListener('click', abrir);
  card.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      abrir();
    }
  });

  return card;
}

function renderGrade() {
  const grade = document.getElementById('gradeProjetos');
  if (!grade) return;
  const itens = todosOsItens().filter(i => combinaFiltro(i, estado.filtro));
  grade.replaceChildren(...itens.map(montarCard));
}

// ---------- Modal ----------
let ultimoFocado = null;

function abrirModal(item) {
  const modal = document.getElementById('modalProjeto');
  if (!modal) return;
  ultimoFocado = document.activeElement;

  const capa = document.getElementById('modalCapa');
  const ehCodigo = item.tipo === 'codigo';
  if (!ehCodigo && item.imagem) {
    capa.hidden = false;
    capa.style.backgroundImage = 'url("' + encodeURI(item.imagem) + '")';
    capa.setAttribute('aria-label', item.alt || item.titulo);
  } else {
    capa.hidden = true;
    capa.style.backgroundImage = '';
    capa.removeAttribute('aria-label');
  }

  document.getElementById('modalCategoria').textContent = NOMES_CAT[item.categorias[0]] || '';
  document.getElementById('modalTitulo').textContent = item.titulo;
  document.getElementById('modalDescricao').textContent = item.descricao;

  const stack = document.getElementById('modalStack');
  stack.replaceChildren(...(item.stack || []).map(s => {
    const li = document.createElement('li');
    li.textContent = s;
    return li;
  }));

  // target/rel só existem junto com href — sem isso o HTML estático fica
  // inválido, porque o <a> nasce sem destino.
  const link = document.getElementById('modalLink');
  if (item.url) {
    link.hidden = false;
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.hidden = true;
    link.removeAttribute('href');
    link.removeAttribute('target');
    link.removeAttribute('rel');
  }

  modal.classList.add('aberto');
  modal.inert = false;
  // O resto da página vira inert: sem isso o Tab escapa do modal e alcança
  // o cabeçalho e os cards por trás do fundo escurecido.
  document.querySelectorAll('body > *:not(#modalProjeto)').forEach(el => { el.inert = true; });
  document.body.classList.add('modal-aberto');
  modal.querySelector('.modal-fechar').focus();
}

function fecharModal() {
  const modal = document.getElementById('modalProjeto');
  if (!modal || !modal.classList.contains('aberto')) return;
  modal.classList.remove('aberto');
  modal.inert = true;
  document.querySelectorAll('body > *:not(#modalProjeto)').forEach(el => { el.inert = false; });
  document.body.classList.remove('modal-aberto');
  if (ultimoFocado) {
    ultimoFocado.focus();
    ultimoFocado = null;
  }
}

// ---------- Painel de personalização ----------
function opcaoRadio(grupo, id, marcado, aoEscolher, montarRotulo) {
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = grupo;
  input.id = grupo + '-' + id;
  input.checked = marcado;
  input.addEventListener('change', aoEscolher);

  const label = document.createElement('label');
  label.setAttribute('for', input.id);
  montarRotulo(label);

  return [input, label];
}

// O painel não é reconstruído a cada escolha: recriar os <input> apagava o foco
// do teclado no meio da navegação por setas. Os radios nativos já cuidam do
// :checked, então só a amostra do destaque "Padrão do tema" precisa acompanhar
// o tema base.
function atualizarAmostraPadrao() {
  const el = document.getElementById('amostraPadrao');
  if (!el) return;
  const b = BASES[estado.base] || BASES.claro;
  el.style.background = 'repeating-linear-gradient(45deg, ' + b.soft + ' 0 5px, ' + b.accent + ' 5px 10px)';
}

function renderPainel() {
  const grupoTema = document.getElementById('opcoesTema');
  const grupoDestaque = document.getElementById('opcoesDestaque');
  const grupoIcone = document.getElementById('opcoesIcone');
  if (!grupoTema || !grupoDestaque || !grupoIcone) return;

  grupoTema.replaceChildren(...Object.keys(BASES).flatMap(k => opcaoRadio(
    'tema', k, estado.base === k,
    () => { salvar({ base: k }); atualizarAmostraPadrao(); },
    (label) => {
      label.className = 'opcao-tema';
      const amostra = document.createElement('span');
      amostra.className = 'opcao-tema-amostra';
      amostra.setAttribute('aria-hidden', 'true');
      amostra.style.background = 'linear-gradient(135deg, ' + BASES[k].bg + ' 0 50%, ' + BASES[k].accent + ' 50% 100%)';
      label.append(amostra, document.createTextNode(BASES[k].rotulo));
    }
  )));

  grupoDestaque.replaceChildren(...DESTAQUES.flatMap((d, i) => opcaoRadio(
    'destaque', String(i), estado.destaque === i,
    () => { salvar({ destaque: i }); },
    (label) => {
      label.className = 'opcao-destaque';
      label.title = d.nome;
      if (d.cor) {
        label.style.background = d.cor;
      } else {
        label.id = 'amostraPadrao';
      }
      const nome = document.createElement('span');
      nome.className = 'sr-only';
      nome.textContent = d.nome;
      label.appendChild(nome);
    }
  )));

  grupoIcone.replaceChildren(...Object.keys(GLIFOS).flatMap(k => opcaoRadio(
    'icone', k, estado.icone === k,
    () => { salvar({ icone: k }); aplicarIcone(); },
    (label) => {
      label.className = 'opcao-icone';
      label.title = k;
      const nome = document.createElement('span');
      nome.className = 'sr-only';
      nome.textContent = k;
      label.append(GLIFOS[k](), nome);
    }
  )));
}

function renderFiltros() {
  const caixa = document.getElementById('filtros');
  if (!caixa) return;
  caixa.replaceChildren(...FILTROS.map(f => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filtro';
    btn.textContent = f.rotulo;
    btn.setAttribute('aria-pressed', String(estado.filtro === f.id));
    btn.addEventListener('click', () => {
      estado.filtro = f.id;
      renderFiltros();
      renderGrade();
    });
    return btn;
  }));
}

function renderChips() {
  const lista = document.getElementById('listaChips');
  if (!lista) return;
  lista.replaceChildren(...CHIPS.map(c => {
    const li = document.createElement('li');
    li.textContent = c;
    return li;
  }));
}

function renderContatos() {
  const lista = document.getElementById('listaContatos');
  if (!lista) return;
  lista.replaceChildren(...CONTATOS.map(c => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = c.href;
    if (c.href.startsWith('http')) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }

    const icone = document.createElement('span');
    icone.className = 'contato-icone';
    icone.setAttribute('aria-hidden', 'true');
    icone.appendChild(ICONES_CONTATO[c.icone]());

    const textos = document.createElement('span');
    textos.className = 'contato-textos';
    const rotulo = document.createElement('span');
    rotulo.className = 'contato-rotulo';
    rotulo.textContent = c.rotulo;
    const valor = document.createElement('span');
    valor.className = 'contato-valor';
    valor.textContent = c.valor;
    textos.append(rotulo, valor);

    a.append(icone, textos);
    li.appendChild(a);
    return li;
  }));
}

// ---------- Formulário ----------
// O protótipo só simulava o envio; aqui o formulário continua postando no
// Formspree, como no site publicado.
function ligarFormulario() {
  const form = document.getElementById('formContato');
  const botao = document.getElementById('btnEnviar');
  const retorno = document.getElementById('formRetorno');
  if (!form || !botao || !retorno) return;

  const mostrar = (texto, tipo) => {
    retorno.textContent = texto;
    retorno.className = 'form-retorno ' + tipo;
  };

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    botao.disabled = true;
    botao.textContent = 'Enviando…';
    retorno.textContent = '';
    retorno.className = 'form-retorno';

    try {
      const resposta = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (resposta.ok) {
        form.reset();
        botao.textContent = 'Enviado';
        mostrar('Mensagem enviada com sucesso.', 'sucesso');
      } else {
        botao.textContent = 'Enviar mensagem';
        mostrar('Não foi possível enviar. Tente novamente.', 'erro');
      }
    } catch {
      botao.textContent = 'Enviar mensagem';
      mostrar('Erro de conexão. Verifique sua internet e tente novamente.', 'erro');
    } finally {
      botao.disabled = false;
    }
  });
}

// ---------- Início ----------
(function iniciar() {
  const salvo = armazenamento.ler();
  if (salvo) {
    if (temChave(BASES, salvo.base)) estado.base = salvo.base;
    if (Number.isInteger(salvo.destaque) && salvo.destaque >= 0 && salvo.destaque < DESTAQUES.length) {
      estado.destaque = salvo.destaque;
    }
    if (temChave(GLIFOS, salvo.icone)) estado.icone = salvo.icone;
  }

  aplicarTema();
  aplicarIcone();
  renderChips();
  renderContatos();
  renderFiltros();
  renderGrade();
  renderPainel();
  atualizarAmostraPadrao();
  ligarFormulario();

  const saudacao = document.getElementById('saudacao');
  if (saudacao) saudacao.textContent = saudacaoAgora();

  const btnPainel = document.getElementById('btnPersonalizar');
  const painel = document.getElementById('painelPersonalizar');
  if (btnPainel && painel) {
    btnPainel.addEventListener('click', () => {
      const abrindo = painel.hidden;
      painel.hidden = !abrindo;
      btnPainel.setAttribute('aria-expanded', String(abrindo));
    });
  }

  document.querySelectorAll('[data-fechar-modal]').forEach(el => {
    el.addEventListener('click', fecharModal);
  });

  document.addEventListener('keydown', (ev) => {
    if (ev.key !== 'Escape') return;
    fecharModal();
    if (painel && !painel.hidden) {
      painel.hidden = true;
      btnPainel.setAttribute('aria-expanded', 'false');
      btnPainel.focus();
    }
  });
})();

// ---------- Conferência de contraste ----------
// Roda as 72 combinações e devolve o que reprova. Não é chamada no
// carregamento: serve para conferir no console depois de mexer na paleta.
//   verificarContraste()            -> só as falhas
//   verificarContraste(true)        -> a tabela inteira
function verificarContraste(detalhado) {
  const linhas = [];
  Object.entries(BASES).forEach(([id, b]) => {
    DESTAQUES.forEach((d, i) => {
      const accent = d.cor || b.accent;
      const texto = destaqueLegivel(accent, b.bg, b.surface, b.soft);
      const sobre = sobreDestaque(accent, d.onAccent || b.onAccent);
      [
        ['destaque como texto / bg',      texto,   b.bg,      4.5],
        ['destaque como texto / surface', texto,   b.surface, 4.5],
        ['ícone de destaque / soft',      texto,   b.soft,    3],
        ['texto sobre o destaque',        sobre,   accent,    4.5],
        ['texto secundário / bg',         b.muted, b.bg,      4.5],
        ['texto secundário / surface',    b.muted, b.surface, 4.5],
        ['texto secundário / soft',       b.muted, b.soft,    4.5],
        ['texto principal / bg',          b.ink,   b.bg,      4.5],
        ['texto principal / surface',     b.ink,   b.surface, 4.5],
        ['texto principal / soft',        b.ink,   b.soft,    4.5]
      ].forEach(([par, fg, bg, min]) => {
        const r = contraste(fg, bg);
        if (detalhado || r < min) {
          linhas.push({ tema: b.rotulo, destaque: d.nome, par: par,
                        razao: Number(r.toFixed(2)), minimo: min,
                        passa: r >= min, frente: fg, fundo: bg });
        }
      });
    });
  });
  const falhas = linhas.filter(l => !l.passa).length;
  console.log(falhas ? falhas + ' combinação(ões) reprovada(s)' : '72 combinações, nenhuma reprovação');
  if (linhas.length) console.table(linhas);
  return linhas;
}
