# Portfólio — Maria Fernanda de Almeida Maneira

Portfólio pessoal, escrito à mão em HTML, CSS e JavaScript. Sem framework, sem
etapa de build, sem dependência: é só abrir o `index.html`.

**Ao vivo:** https://imyourmafe.github.io/myportfolio/

## O que tem de diferente
O botão de personalizar, no canto do cabeçalho, abre 10 temas e 8 ícones de marca. Cada tema é um pacote fechado de fundo, texto, 
linhas e cor de destaque saem juntos, e a escolha é aplicada e gravada no instante do clique, sem botão de salvar.

## Acessibilidade
- Navegação inteira por teclado, com foco sempre visível.
- O modal de projeto prende o foco marcando o resto da página como `inert`;
  `Escape` fecha e o foco volta para o card de origem.
- As opções do painel são nativos, então funcionam com leitor de tela sem nenhum ARIA extra.
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
| `curriculo/` | o currículo em PDF, servido pelo próprio site |

## Contato
- E-mail: mariafernandamaneira@hotmail.com
- LinkedIn: https://www.linkedin.com/in/maria-fernanda-maneira
