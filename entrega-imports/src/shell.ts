import "./style.css";
import { referenceHtml } from "./model";
import { checkGameStatus, toggleButtons } from "./motor";
import {
  displayCard,
  updateUserScore,
  knowOutCome,
  stand,
  newGame,
} from "./ui";

//Evento cuando el jugador pulsa "Pedir carta"

referenceHtml.getCardButton?.addEventListener("click", () => {
  displayCard();
  updateUserScore();
  checkGameStatus();
});

//Evento cuando el jugador pulsa "Plantarse"

referenceHtml.standButton?.addEventListener("click", stand);

//Evento para saber que habría pasado.

referenceHtml.knowOutComeButton?.addEventListener("click", knowOutCome);

// Evento cuando el jugador pulsa "New Game"

referenceHtml.newGameButton?.addEventListener("click", newGame);

// Inicializacion del juego

toggleButtons(false);
if (referenceHtml.newGameButton instanceof HTMLButtonElement) {
  referenceHtml.newGameButton.style.display = "none";
}
