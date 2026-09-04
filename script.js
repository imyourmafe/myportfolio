// ===== Renderização dos cards de projeto a partir de PROJETOS (projects.js) =====
function renderProjetos() {
  const grid = document.getElementById('gridProjetos');
  if (!grid || typeof PROJETOS === 'undefined') return;

  const chevronSVG = '<svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  PROJETOS.forEach(projeto => {
    const article = document.createElement('article');
    article.className = 'projeto-card';
    article.dataset.categorias = projeto.categorias.join(',');

    const figure = document.createElement('figure');
    figure.className = 'projeto-thumb';
    const img = document.createElement('img');
    img.src = projeto.imagem;
    img.alt = projeto.alt;
    img.width = projeto.largura;
    img.height = projeto.altura;
    img.loading = 'lazy';
    img.decoding = 'async';
    figure.appendChild(img);

    const details = document.createElement('details');
    details.className = 'projeto-accordion';

    const summary = document.createElement('summary');
    summary.className = 'projeto-info';
    const h3 = document.createElement('h3');
    h3.className = 'projeto-titulo';
    h3.textContent = projeto.titulo;
    summary.appendChild(h3);
    summary.insertAdjacentHTML('beforeend', chevronSVG);

    const descDiv = document.createElement('div');
    descDiv.className = 'projeto-desc';
    const descP = document.createElement('p');
    descP.textContent = projeto.descricao;
    descDiv.appendChild(descP);

    details.appendChild(summary);
    details.appendChild(descDiv);

    article.appendChild(figure);
    article.appendChild(details);

    grid.appendChild(article);
  });
}

renderProjetos();

// ===== Personalização: tema e ícone do botão de início =====
// Cada escolha é aplicada e gravada na hora — não existe botão de "aplicar".
(function personalizacao() {
  const root = document.documentElement;
  const CHAVE_TEMA = 'tema';
  const CHAVE_ICONE = 'icone-inicio';
  const CHAVE_ANTIGA = 'preferencia-tema'; // esquema anterior: 'light' | 'dark'

  if (typeof TEMAS === 'undefined' || typeof ICONES_INICIO === 'undefined') return;

  // localStorage pode lançar (navegação privada, cookies bloqueados). Nesse
  // caso o site funciona normalmente, só não guarda a escolha entre visitas.
  const armazenamento = {
    ler(chave) {
      try { return localStorage.getItem(chave); } catch { return null; }
    },
    gravar(chave, valor) {
      try { localStorage.setItem(chave, valor); } catch { /* sem persistência */ }
    }
  };

  const temaPadrao = TEMAS[0];
  const iconePadrao = ICONES_INICIO[0];

  const acharTema = id => TEMAS.find(t => t.id === id);
  const acharIcone = id => ICONES_INICIO.find(i => i.id === id);

  function temaSalvo() {
    const direto = acharTema(armazenamento.ler(CHAVE_TEMA));
    if (direto) return direto;
    // Quem já tinha visitado o site no esquema claro/escuro mantém o
    // equivalente mais próximo em vez de voltar ao padrão.
    const antigo = armazenamento.ler(CHAVE_ANTIGA);
    if (antigo === 'dark') return acharTema('meianoite') || temaPadrao;
    if (antigo === 'light') return acharTema('rose') || temaPadrao;
    return temaPadrao;
  }

  function aplicarTema(tema) {
    root.setAttribute('data-tema', tema.id);
    root.setAttribute('data-lum', tema.lum);
    armazenamento.gravar(CHAVE_TEMA, tema.id);
  }

  function aplicarIcone(icone) {
    const svg = document.getElementById('iconeInicio');
    if (svg) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', icone.d);
      svg.replaceChildren(path);
    }
    armazenamento.gravar(CHAVE_ICONE, icone.id);
  }

  // --- estado inicial, antes de montar o painel ---
  let temaAtual = temaSalvo();
  let iconeAtual = acharIcone(armazenamento.ler(CHAVE_ICONE)) || iconePadrao;
  aplicarTema(temaAtual);
  aplicarIcone(iconeAtual);

  // --- botão de início ---
  const btnInicio = document.getElementById('btnInicio');
  if (btnInicio) {
    btnInicio.addEventListener('click', () => {
      if (location.hash && location.hash !== '#sobre') {
        location.hash = '#sobre';
      } else {
        navegarPara('#sobre');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- painel ---
  const btnPainel = document.getElementById('btnPersonalizar');
  const painel = document.getElementById('painelPersonalizar');
  const grupoTema = document.getElementById('opcoesTema');
  const grupoIcone = document.getElementById('opcoesIcone');
  if (!btnPainel || !painel || !grupoTema || !grupoIcone) return;

  TEMAS.forEach(tema => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'tema';
    input.id = `tema-${tema.id}`;
    input.value = tema.id;
    input.checked = tema.id === temaAtual.id;

    const label = document.createElement('label');
    label.className = 'opcao-tema';
    label.setAttribute('for', input.id);

    const amostra = document.createElement('span');
    amostra.className = 'amostra';
    amostra.setAttribute('aria-hidden', 'true');
    tema.amostra.forEach(cor => {
      const faixa = document.createElement('span');
      faixa.style.background = cor;
      amostra.appendChild(faixa);
    });

    const nome = document.createElement('span');
    nome.textContent = tema.nome;

    label.append(amostra, nome);
    input.addEventListener('change', () => {
      temaAtual = tema;
      aplicarTema(tema);
    });
    grupoTema.append(input, label);
  });

  ICONES_INICIO.forEach(icone => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'icone-inicio';
    input.id = `icone-${icone.id}`;
    input.value = icone.id;
    input.checked = icone.id === iconeAtual.id;

    const label = document.createElement('label');
    label.className = 'opcao-icone';
    label.setAttribute('for', input.id);
    label.title = icone.nome;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2.2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', icone.d);
    svg.appendChild(path);

    // O nome fica acessível a leitor de tela sem ocupar espaço no botão.
    const rotulo = document.createElement('span');
    rotulo.className = 'sr-only';
    rotulo.textContent = icone.nome;

    label.append(svg, rotulo);
    input.addEventListener('change', () => {
      iconeAtual = icone;
      aplicarIcone(icone);
    });
    grupoIcone.append(input, label);
  });

  const abrirPainel = () => {
    painel.hidden = false;
    btnPainel.setAttribute('aria-expanded', 'true');
  };
  const fecharPainel = ({ devolverFoco = false } = {}) => {
    painel.hidden = true;
    btnPainel.setAttribute('aria-expanded', 'false');
    if (devolverFoco) btnPainel.focus();
  };

  btnPainel.addEventListener('click', () => {
    painel.hidden ? abrirPainel() : fecharPainel();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !painel.hidden) fecharPainel({ devolverFoco: true });
  });

  document.addEventListener('click', (e) => {
    if (painel.hidden) return;
    if (!painel.contains(e.target) && !btnPainel.contains(e.target)) fecharPainel();
  });
})();

// ===== Navegação SPA (hash) =====
function navegarPara(hash) {
  const destino = hash || '#sobre';

  document.querySelectorAll('.tela').forEach(sec => {
    sec.classList.remove('tela--ativa');
  });

  const alvo = document.querySelector(destino);
  if (alvo) {
    alvo.classList.add('tela--ativa');
  }

  document.querySelectorAll('.menu-link').forEach(a => {
    a.classList.toggle('ativo', a.getAttribute('href') === destino);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
  navegarPara(location.hash || '#sobre');
});

window.addEventListener('hashchange', () => navegarPara(location.hash));

// ===== Sanfona — gira o chevron quando abre/fecha =====
document.addEventListener('toggle', (ev) => {
  if (ev.target.matches('details.projeto-accordion')) {
    const chevron = ev.target.querySelector('.chevron');
    if (chevron) chevron.classList.toggle('aberto', ev.target.open);
  }
}, true);

// ===== Mensagem de boas-vindas =====
function saudacaoAgora() {
  const h = new Date().getHours();
  if (h < 12) {
    return {
      msg: "Que sono, hein? Bom dia!",
      emoji: `<svg class="saudacao-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`
    };
  }
  if (h < 18) {
    return {
      msg: "Boa tarde, hora de almoçar.",
      emoji: `<svg class="saudacao-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41"/><path d="M15.9 10.6A4.5 4.5 0 0 0 17 18h-8.5A4.5 4.5 0 0 1 12 9c.9 0 1.7.3 2.4.9Z"/></svg>`
    };
  }
  return {
    msg: "Tá tarde, né...boa noite!",
    emoji: `<svg class="saudacao-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
  };
}

function renderSaudacao() {
  const el = document.getElementById('boasVindas');
  if (!el) return;
  const { msg, emoji } = saudacaoAgora();
  el.innerHTML = `${emoji} <span>${msg}</span>`;
}

document.addEventListener('DOMContentLoaded', renderSaudacao);
setInterval(renderSaudacao, 60 * 1000);

// ===== Formulário de e-mail (popup + Formspree) =====
document.addEventListener('DOMContentLoaded', () => {
  const emailLinks = document.querySelectorAll('.lista-contatos a[href^="mailto:"]');
  const modal = document.getElementById('formEmail');
  const form = document.getElementById('emailForm');
  const fecharBtns = modal ? modal.querySelectorAll('[data-fechar]') : [];
  const confirmacao = document.getElementById('mensagemConfirmacao');
  const btnEnviar = document.getElementById('btnEnviarMensagem');
  const siteHeader = document.querySelector('.site-header');
  const siteMain = document.querySelector('main.container');

  if (!modal || !form || emailLinks.length === 0) return;

  let ultimoElementoFocado = null;

  const abrirModal = (origem) => {
    ultimoElementoFocado = origem || document.activeElement;

    modal.classList.add('aberta');
    modal.inert = false;
    // O resto da página vira inert enquanto o modal está aberto: sem isso,
    // Tab escapava do modal e alcançava o cabeçalho/menu por trás do
    // backdrop, mesmo com aria-modal="true".
    if (siteHeader) siteHeader.inert = true;
    if (siteMain) siteMain.inert = true;
    document.body.classList.add('modal-aberta');

    if (confirmacao) {
      confirmacao.style.display = 'none';
      confirmacao.textContent = '';
      confirmacao.classList.remove('sucesso', 'erro');
    }

    const nome = form.querySelector('#nome');
    setTimeout(() => nome && nome.focus(), 50);
  };

  const fecharModal = () => {
    modal.classList.remove('aberta');
    modal.inert = true;
    if (siteHeader) siteHeader.inert = false;
    if (siteMain) siteMain.inert = false;
    document.body.classList.remove('modal-aberta');

    if (confirmacao) {
      confirmacao.style.display = 'none';
      confirmacao.textContent = '';
      confirmacao.classList.remove('sucesso', 'erro');
    }

    if (btnEnviar) {
      btnEnviar.disabled = false;
      btnEnviar.textContent = 'Enviar';
    }

    if (ultimoElementoFocado) {
      ultimoElementoFocado.focus();
      ultimoElementoFocado = null;
    }
  };

  const mostrarMensagem = (texto, tipo) => {
    if (!confirmacao) return;

    confirmacao.textContent = texto;
    confirmacao.classList.remove('sucesso', 'erro');
    confirmacao.classList.add(tipo);
    confirmacao.style.display = 'block';
  };

  emailLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      abrirModal(a);
    });
  });

  fecharBtns.forEach(btn => btn.addEventListener('click', fecharModal));

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-backdrop')) fecharModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('aberta')) fecharModal();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = new FormData(form);

    if (btnEnviar) {
      btnEnviar.disabled = true;
      btnEnviar.textContent = 'Enviando...';
    }

    if (confirmacao) {
      confirmacao.style.display = 'none';
      confirmacao.textContent = '';
      confirmacao.classList.remove('sucesso', 'erro');
    }

    try {
      const resposta = await fetch(form.action, {
        method: form.method,
        body: dados,
        headers: {
          Accept: 'application/json'
        }
      });

      if (resposta.ok) {
        mostrarMensagem('Mensagem enviada com sucesso!', 'sucesso');

        setTimeout(() => {
          form.reset();
          fecharModal();
        }, 1800);
      } else {
        mostrarMensagem('Não foi possível enviar a mensagem. Tente novamente.', 'erro');
      }
    } catch (erro) {
      mostrarMensagem('Erro de conexão. Verifique sua internet e tente novamente.', 'erro');
    } finally {
      if (btnEnviar) {
        btnEnviar.disabled = false;
        btnEnviar.textContent = 'Enviar';
      }
    }
  });
});

// ===== Filtros de projetos =====
document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.filtro');
  const projetos = document.querySelectorAll('.projeto-card');

  if (botoes.length === 0 || projetos.length === 0) return;

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const categoria = botao.dataset.filtro;
      botoes.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');
      projetos.forEach(proj => {
        const cats = proj.dataset.categorias.split(',');
        if (categoria === 'todos' || cats.includes(categoria)) {
          proj.style.display = '';
          proj.style.animation = 'fadeInProj 0.4s ease forwards';
        } else {
          proj.style.display = 'none';
        }
      });
    });
  });
});

// Injeta animação do filtro
const estiloAnimacao = document.createElement('style');
estiloAnimacao.textContent = `
@keyframes fadeInProj {
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
}`;
document.head.appendChild(estiloAnimacao);