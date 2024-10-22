import { game, referenceHtml } from "./model";
import { getCardUrl, sumCardValue, selectedCardValue } from "./motor";

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
