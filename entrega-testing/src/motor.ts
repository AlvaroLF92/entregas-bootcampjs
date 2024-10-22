import { cardSource, game, referenceHtml } from "./model";

// Función que devuelve un número aleatorio;

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

// Función que ajusta el número si es mayor que 7 sumando +2;

export const adjustNumber = (num: number): number => {
  return num > 7 ? num + 2 : num;
};

// Funcion que devuelve la url de la carta elegida;

export const getCardUrl = (): string => {
  const randomNumber = getRandomNumber();
  const adjustedNumber = adjustNumber(randomNumber);

  const card = cardSource.find((card) => {
    const regex = new RegExp(`/${adjustedNumber}_`);
    return regex.test(card.url);
  });

  if (card) {
    game.selectedCard = card;
    return card.url;
  }
  throw new Error("No se encontró la carta");
};

// Funcion que calcula el valor de la carta seleccionada;

export const selectedCardValue = (): number => {
  return game.selectedCard.value;
};

// Funcion que suma el valor de las cartas;

export const sumCardValue = (): number => {
  return game.userScore + selectedCardValue();
};

// Función que comprueba si hemos ganado o no la partida;

export const checkGameStatus = (): void => {
  if (game.userScore === 7.5 && referenceHtml.gameMessage != null) {
    referenceHtml.gameMessage.textContent = "!Has ganado¡";
    toggleButtons(true);
  } else if (game.userScore > 7.5 && referenceHtml.gameMessage != null) {
    referenceHtml.gameMessage.textContent = "!Has perdido¡";
    toggleButtons(true);
  }
};

// Función que habilita o deshabilita los botones;

export const toggleButtons = (disable: boolean): void => {
  if (
    referenceHtml.getCardButton instanceof HTMLButtonElement &&
    referenceHtml.standButton instanceof HTMLButtonElement &&
    referenceHtml.newGameButton instanceof HTMLButtonElement
  ) {
    referenceHtml.getCardButton.disabled = disable;
    referenceHtml.standButton.disabled = disable;
    referenceHtml.newGameButton.disabled = !disable;
    referenceHtml.newGameButton.style.display = disable
      ? "inline-block"
      : "none";
  }
};

// Funcion que determina el mensaje basado en el puntaje simulado

export const determineOutComeMessage = (simulatedScore: number): string => {
  if (simulatedScore === 7.5) {
    return "!Habrías ganado¡";
  } else if (simulatedScore > 7.5) {
    return `!Te habrías pasado con ${simulatedScore} puntos¡`;
  } else {
    return `!Te habrías quedado con ${simulatedScore} puntos¡`;
  }
};
