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

// ===== Controle do tema claro/escuro =====
(function tema() {
  const root = document.documentElement;
  const btn = document.getElementById('toggleTema');
  const CHAVE = 'preferencia-tema';

  const atual = localStorage.getItem(CHAVE) || 'light';
  root.setAttribute('data-theme', atual);
  btn.setAttribute('aria-pressed', String(atual === 'dark'));

  btn.addEventListener('click', () => {
    const novo = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', novo);
    localStorage.setItem(CHAVE, novo);
    btn.setAttribute('aria-pressed', String(novo === 'dark'));
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

  if (!modal || !form || emailLinks.length === 0) return;

  const abrirModal = () => {
    modal.classList.add('aberta');
    modal.setAttribute('aria-hidden', 'false');
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
    modal.setAttribute('aria-hidden', 'true');
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
      abrirModal();
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