import { game, referenceHtml } from "./model";
import {
  getCardUrl,
  sumCardValue,
  selectedCardValue,
  determineOutComeMessage,
  toggleButtons,
} from "./motor";

// Funcionalidad botón nueva partida

export const newGame = () => {
  game.userScore = 0;
  updateScoreDisplay();
  toggleButtons(false);
  if (referenceHtml.currentCard instanceof HTMLImageElement) {
    referenceHtml.currentCard.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  if (referenceHtml.standButton) {
    referenceHtml.standButton.style.display = "inline-block";
  }

  if (referenceHtml.knowOutComeButton) {
    referenceHtml.knowOutComeButton.style.display = "none";
  }

  if (referenceHtml.gameMessage) {
    referenceHtml.gameMessage.textContent = "Comienza a Jugar";
  }
};

// Funcionalidad botón plantarse

export const stand = () => {
  if (referenceHtml.gameMessage) {
    referenceHtml.gameMessage.textContent = `Te has plantado con ${game.userScore} puntos`;
    if (referenceHtml.standButton) {
      referenceHtml.standButton.style.display = "none";
    }
  }
  toggleButtons(true);
  if (referenceHtml.knowOutComeButton) {
    referenceHtml.knowOutComeButton.style.display = "inline-block";
  }
};

// Funcionalidad botón que habría pasado

export const knowOutCome = () => {
  let simulatedScore = game.userScore;

  if (simulatedScore < 7.5) {
    displayCard();

    simulatedScore = updateSimulatedScore(simulatedScore);
  }

  const outComeMessage = determineOutComeMessage(simulatedScore);

  if (referenceHtml.gameMessage) {
    referenceHtml.gameMessage.textContent = outComeMessage;
  }

  if (referenceHtml.knowOutComeButton) {
    referenceHtml.knowOutComeButton.style.display = "none";
  }
};

// Funcion que muestra la puntuación total en el HTML;

export const updateScoreDisplay = (): void => {
  if (referenceHtml.showCard instanceof HTMLElement) {
    referenceHtml.showCard.textContent = `Score: ${game.userScore}`;
  }
};

// Funcion que muestra la carta seleccionada en el HTML;

export const displayCard = (): void => {
  const cardUrl = getCardUrl();
  if (referenceHtml.currentCard instanceof HTMLImageElement) {
    referenceHtml.currentCard.src = cardUrl;
  }
};

// Funcion que actualiza userScore;

export const updateUserScore = () => {
  game.userScore = sumCardValue();
  updateScoreDisplay();
};

// Función que actualiza el puntaje simulado

export const updateSimulatedScore = (simuatedScore: number): number => {
  simuatedScore += selectedCardValue();
  updateScoreDisplay();

  return simuatedScore;
};
