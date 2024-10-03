import "./style.css";
import { cardSource } from "./cards";

// Variables

let userScore: number = 0;

// Enlaces a elementos HTML

const gameMessage = document.getElementById("gameStatus") as HTMLElement;
const getCardButton = document.getElementById("getCard") as HTMLButtonElement;
const standButton = document.getElementById('stand') as HTMLButtonElement;
const newGameButton = document.getElementById("newGame") as HTMLButtonElement;
const showCard = document.getElementById("gameScore") as HTMLElement;
const currentCard = document.getElementById("currentCard") as HTMLImageElement;

// Desactivamos y ocultamos el botón de "New Game"

newGameButton.disabled = true;
newGameButton.style.display = "none";

// Funcion "giveCard" para recibir carta y actualizar puntuación de jugador.

const giveCard = () => {

  const randomCard = Math.floor(Math.random() * cardSource.length);

  const selectedCard = cardSource[randomCard];
  currentCard.src = selectedCard.url;

  userScore += selectedCard.value;

  if ( showCard ) {
    showCard.textContent = `Puntuación: ${userScore}`;
  };

  checkScore(userScore);
};


// Función para comprobar la puntuación y terminar el juego.

const checkScore = (score:number):void => {
  if ( score === 7.5 ) {
    gameMessage.textContent = "¡Lo has conseguido! !Felicidades¡";
    endGame();
  } else if ( score > 7.5) {
    gameMessage.textContent = "Game Over";
    endGame();
  }
};

// Función para terminar el juego

const endGame = () => {
  getCardButton.disabled = true;
  newGameButton.disabled = false;
  standButton.disabled = true;
  newGameButton.style.display = "block";
};

// Funcion New Game

const newGame = () => {
  userScore = 0;
  currentCard.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  gameMessage.textContent = "Comienza a Jugar";

  if ( showCard ) showCard.textContent = `Puntuación: ${0}`;

  getCardButton.disabled = false;
  standButton.disabled = false;
  newGameButton.disabled = true;
  newGameButton.style.display = "none";
};

// Función para plantarse

const stand = () => {
  gameMessage.textContent = `Te has plantado con ${userScore} puntos.`;
  endGame();
};

getCardButton?.addEventListener("click", giveCard);
newGameButton?.addEventListener("click",newGame);
standButton?.addEventListener("click", stand);