# Portfólio — Maria Fernanda de Almeida Maneira

Portfólio pessoal, escrito à mão em HTML, CSS e JavaScript. Sem framework, sem
etapa de build, sem dependência: é só abrir o `index.html`.

**Ao vivo:** https://imyourmafe.github.io/myportfolio/

## O que tem de diferente
O botão de personalizar, no canto do cabeçalho, abre **8 temas × 9 cores de
destaque × 8 ícones de marca**, livremente combináveis. Cada escolha é aplicada
e gravada no instante do clique — não há botão de salvar — e volta na próxima
visita.

A parte interessante é o contraste. Uma cor só não consegue ser legível como
texto em tema claro e escuro ao mesmo tempo: para passar sobre o card do tema
Rosa a luminância precisa ficar abaixo de 0,125, e para passar sobre o card do
tema Escuro precisa ficar acima de 0,225 — não existe interseção. Então o
destaque tem dois papéis separados:

## Acessibilidade
- Navegação inteira por teclado, com foco sempre visível.
- O modal de projeto prende o foco marcando o resto da página como `inert`;
  `Escape` fecha e o foco volta para o card de origem.
- As opções do painel são nativos, então funcionam com
  leitor de tela sem nenhum ARIA extra.
- Sem JavaScript a página continua com título, bio, contatos e formulário
  legíveis.
- `prefers-reduced-motion` desliga as transições, inclusive a troca de tema.

## Estrutura
| Arquivo | O que é |
| --- | --- |
| `index.html` | página única, com todas as seções |
| `style.css` | estilo e os tokens de tema |
| `script.js` | temas, contraste, cards, modal, filtros, formulário |
| `projects.js` | os projetos, um objeto por card |
| `repos.js` | repositórios de código exibidos na mesma grade |
| `images/` | capas dos projetos e ícones do site |

## Contato
- E-mail: mariafernandamaneira@hotmail.com
- LinkedIn: https://www.linkedin.com/in/maria-fernanda-maneira
