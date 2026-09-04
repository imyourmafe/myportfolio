// ===== Dados de personalização: temas e ícones do botão de início =====
// Consumido por script.js para montar o painel "Personalizar".

// `lum` diz se o tema é claro ou escuro. As poucas regras de CSS que dependem
// disso (brilho de fundo, contorno do botão) usam data-lum, em vez de cada
// uma conhecer os cinco temas.
// `amostra` são as três cores que representam o tema no seletor.
const TEMAS = [
  {
    id: 'rose',
    nome: 'Rosé',
    lum: 'claro',
    amostra: ['#FFEEF2', '#e27d9f', '#972E48']
  },
  {
    id: 'matcha',
    nome: 'Matcha',
    lum: 'claro',
    amostra: ['#F2F4EA', '#A8C29C', '#3D5C41']
  },
  {
    id: 'lavanda',
    nome: 'Lavanda',
    lum: 'claro',
    amostra: ['#F4F0FB', '#B9A3E0', '#5B3E8E']
  },
  {
    id: 'meianoite',
    nome: 'Meia-noite',
    lum: 'escuro',
    amostra: ['#010A24', '#254279', '#9aa2bc']
  },
  {
    id: 'grafite',
    nome: 'Grafite',
    lum: 'escuro',
    amostra: ['#15171C', '#333842', '#E4634A']
  }
];

// Conjunto fechado de ícones para o botão de início. O `d` é o conteúdo do
// <path>; o SVG em volta é montado por script.js, então nada de markup vindo
// daqui — só dados.
const ICONES_INICIO = [
  {
    id: 'casa',
    nome: 'Casa',
    d: 'M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1V9.5Z'
  },
  {
    id: 'estrela',
    nome: 'Estrela',
    d: 'm12 3 2.7 5.8 6.3.8-4.6 4.4 1.2 6.2-5.6-3.1-5.6 3.1 1.2-6.2L3 9.6l6.3-.8L12 3Z'
  },
  {
    id: 'coracao',
    nome: 'Coração',
    d: 'M12 20s-7-4.4-7-9.2A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 2.8C19 15.6 12 20 12 20Z'
  },
  {
    id: 'faisca',
    nome: 'Faísca',
    d: 'M12 3v5M12 16v5M4.2 7.5l3.4 2M16.4 14.5l3.4 2M4.2 16.5l3.4-2M16.4 9.5l3.4-2M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z'
  },
  {
    id: 'flor',
    nome: 'Flor',
    d: 'M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM12 9.5V4M12 14.5V20M9.8 10.8 5 8M14.2 13.2 19 16M9.8 13.2 5 16M14.2 10.8 19 8'
  },
  {
    id: 'bussola',
    nome: 'Bússola',
    d: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 4.5-4.5 2 2-4.5 4.5-2Z'
  }
];
