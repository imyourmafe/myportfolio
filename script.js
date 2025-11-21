//Controle do tema claro/escuro
(function tema(){
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

//Navegação entre seções
function ativarTelaAtual(){
  const destino = location.hash || "#sobre";
  document.querySelectorAll(".tela").forEach(sec => {
    sec.classList.remove("tela--ativa");
  });
  const alvo = document.querySelector(destino);
  if (alvo) {
    alvo.classList.add("tela--ativa");
    alvo.scrollIntoView({behavior: "smooth", block: "start"});
  }
}
function setActiveSection(id) {
  document.querySelectorAll('.tela').forEach(sec => sec.classList.remove('tela--ativa'));
  const el = document.querySelector(id);
  if (el) el.classList.add('tela--ativa');
}

// Inicializa e reage às mudanças
document.addEventListener("DOMContentLoaded", ativarTelaAtual);
window.addEventListener("hashchange", ativarTelaAtual);

//Sanfona — gira o chevron quando abre/fecha
document.addEventListener('toggle', (ev) => {
  if (ev.target.matches('details.projeto-accordion')) {
    const chevron = ev.target.querySelector('.chevron');
    if (chevron) chevron.classList.toggle('aberto', ev.target.open);
  }
}, true);

// Scroll suave entre seções
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
  document.querySelectorAll('a').forEach(link => {
    const destino = link.getAttribute('href');
    if (!destino || destino.startsWith('http') || destino.startsWith('#') || destino.startsWith('mailto:')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.remove('fade-in');
      setTimeout(() => {
        window.location.href = destino;
      }, 300);
    });
  });
});

/* Mensagem de boas-vindas*/
function saudacaoAgora() {
  const h = new Date().getHours();
  if (h < 12) return {msg: "Que sono, hein? Bom dia!", emoji: "☀️"};
  if (h < 18) return {msg: "Boa tarde, hora de almoçar.", emoji: "🌤️"};
  return {msg: "Tá tarde, né...boa noite!", emoji: "🌙"};
}

function renderSaudacao() {
  const el = document.getElementById("boasVindas");
  if (!el) return;
  const { msg, emoji } = saudacaoAgora();
  el.textContent = `${emoji} ${msg}`;
}

document.addEventListener("DOMContentLoaded", renderSaudacao);
setInterval(renderSaudacao, 60 * 1000);

// Abrir o formulário ao clicar no link de e-mail
document.addEventListener('DOMContentLoaded', () => {
  const emailLinks = document.querySelectorAll('.lista-contatos a[href^="mailto:"]');
  const modal = document.getElementById('formEmail');
  const form = document.getElementById('emailForm');
  const fecharBtns = modal ? modal.querySelectorAll('[data-fechar]') : [];
  const confirmacao = document.getElementById('mensagemConfirmacao');

  if (!modal || !form || emailLinks.length === 0) return;

  const abrirModal = () => {
    modal.classList.add('aberta');
    document.body.classList.add('modal-aberta');
    const nome = form.querySelector('#nome');
    setTimeout(() => nome && nome.focus(), 50);
  };
  const fecharModal = () => {
    modal.classList.remove('aberta');
    document.body.classList.remove('modal-aberta');
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
  // Envio com confirmação temporária
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmacao.style.display = 'block';
    setTimeout(() => {
      confirmacao.style.display = 'none';
      fecharModal();
      form.reset();
    }, 1800);
  });
});

// Filtro
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
          proj.style.display = 'block';
          proj.style.animation = 'fadeInProj 0.4s ease forwards';
        } else {
          proj.style.display = 'none';
        }
      });
    });
  });
});

const estiloAnimacao = document.createElement('style');
estiloAnimacao.textContent = `
@keyframes fadeInProj {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}`;
document.head.appendChild(estiloAnimacao);
