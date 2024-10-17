import "./style.css";
import { game, referenceHtml } from "./model";
import {
  checkGameStatus,
  toggleButtons,
  determineOutComeMessage,
} from "./motor";
import {
  displayCard,
  updateSimulatedScore,
  updateUserScore,
  updateScoreDisplay,
} from "./ui";

//Evento cuando el jugador pulsa "Pedir carta"

referenceHtml.getCardButton?.addEventListener("click", () => {
  displayCard();
  updateUserScore();
  checkGameStatus();
});

//Evento cuando el jugador pulsa "Plantarse"

referenceHtml.standButton?.addEventListener("click", () => {
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
});

//Evento para saber que habría pasado.

referenceHtml.knowOutComeButton?.addEventListener("click", () => {
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
});

// Evento cuando el jugador pulsa "New Game"

referenceHtml.newGameButton?.addEventListener("click", () => {
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
});

// Inicializacion del juego

toggleButtons(false);
if (referenceHtml.newGameButton instanceof HTMLButtonElement) {
  referenceHtml.newGameButton.style.display = "none";
}
