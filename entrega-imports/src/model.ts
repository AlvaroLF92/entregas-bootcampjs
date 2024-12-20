interface Card {
  url: string;
  value: number;
}

interface Game {
  userScore: number;
  selectedCard: {
    url: string;
    value: number;
  };
}

export const game: Game = {
  userScore: 0,
  selectedCard: {
    url: "",
    value: 0,
  },
};

export const referenceHtml = {
  gameMessage: document.getElementById("gameStatus"),
  getCardButton: document.getElementById("getCard"),
  standButton: document.getElementById("stand"),
  newGameButton: document.getElementById("newGame"),
  showCard: document.getElementById("gameScore"),
  currentCard: document.getElementById("currentCard"),
  knowOutComeButton: document.getElementById("knowOutCome"),
};

export const cardSource: Card[] = [
  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
    value: 1,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
    value: 2,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
    value: 3,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
    value: 4,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
    value: 5,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
    value: 6,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
    value: 7,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
    value: 0.5,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
    value: 0.5,
  },

  {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
    value: 0.5,
  },
];
