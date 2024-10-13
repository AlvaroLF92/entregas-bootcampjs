import "./style.css";
import { cardSource } from "./cards";

// Variables;

let userScore: number = 0;
let selectedCard: { url: string; value: number };

// Enlaces a elementos HTML;

const gameMessage = document.getElementById("gameStatus");
const getCardButton = document.getElementById("getCard");
const standButton = document.getElementById("stand");
const newGameButton = document.getElementById("newGame");
const showCard = document.getElementById("gameScore");
const currentCard = document.getElementById("currentCard");
const knowOutComeButton = document.getElementById("knowOutCome");

// Función que devuelve un número aleatorio;

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * cardSource.length);
};

// Función que ajusta el número si es mayor que 7 sumando +2;

/*const adjustNumber = (num: number): number => {
  return num > 7 ? num + 2 : num;
};*/

// Funcion que muestra la puntuación total en el HTML;

const updateScoreDisplay = (): void => {
  if (showCard instanceof HTMLElement) {
    showCard.textContent = `Score: ${userScore}`;
  }
};

// Funcion que devuelve la url de la carta elegida;

const getCardUrl = (): string => {
  const cardIndex = getRandomNumber();
  selectedCard = cardSource[cardIndex];
  return selectedCard.url;
};

// Funcion que muestra la carta seleccionada en el HTML;

const displayCard = (): void => {
  const cardUrl = getCardUrl();
  if (currentCard instanceof HTMLImageElement) {
    currentCard.src = cardUrl;
  }
};

// Funcion que calcula el valor de la carta seleccionada;

const selectedCardValue = (): number => {
  return selectedCard.value;
};

// Funcion que suma el valor de las cartas;

const sumCardValue = (): number => {
  return userScore + selectedCardValue();
};

// Funcion que actualiza userScore;

const updateUserScore = () => {
  userScore = sumCardValue();
  updateScoreDisplay();
};

// Función que comprueba si hemos ganado o no la partida;

const checkGameStatus = (): void => {
  if (userScore === 7.5 && gameMessage != null) {
    gameMessage.textContent = "!Has ganado¡";
    toggleButtons(true);
  } else if (userScore > 7.5 && gameMessage != null) {
    gameMessage.textContent = "!Has perdido¡";
    toggleButtons(true);
  }
};

// Función que habilita o deshabilita los botones;

const toggleButtons = (disable: boolean): void => {
  if (
    getCardButton instanceof HTMLButtonElement &&
    standButton instanceof HTMLButtonElement &&
    newGameButton instanceof HTMLButtonElement
  ) {
    getCardButton.disabled = disable;
    standButton.disabled = disable;
    newGameButton.disabled = !disable;
    newGameButton.style.display = disable ? "inline-block" : "none";
  }
};

// Eventos

// Cuando el jugador pulsa "Pedir carta"

getCardButton?.addEventListener("click", () => {
  displayCard();
  updateUserScore();
  checkGameStatus();
});

// Cuando el jugador pulsa "Plantarse"

standButton?.addEventListener("click", () => {
  if (gameMessage) {
    gameMessage.textContent = `Te has plantado con ${userScore} puntos`;
  }
  toggleButtons(true);
  if (knowOutComeButton) {
    knowOutComeButton.style.display = "inline-block";
  }
});

// Saber que habría pasado.
knowOutComeButton?.addEventListener("click", () => {
  let simulatedScore = userScore;
  let outComeMessage = "";

  while (simulatedScore < 7.5) {
    const cardUrl = getCardUrl();
    if (currentCard instanceof HTMLImageElement) {
      currentCard.src = cardUrl
    }
    simulatedScore += selectedCardValue();

    if (simulatedScore === 7.5) {
      outComeMessage = "!Habrías ganado¡";
      break;
    }

    if (simulatedScore > 7.5) {
      outComeMessage = `!Te habrías pasado con ${simulatedScore} puntos¡`;
      break;
    }
  }

  if (!outComeMessage) {
    outComeMessage = `!Te habrías quedado con ${simulatedScore} puntos¡`;
  }

  if (gameMessage) {
    gameMessage.textContent = outComeMessage;
  }

  if ( knowOutComeButton ) {
    knowOutComeButton.style.display = "none";
  }
});

// Cuando el jugador pulsa "New Game"

newGameButton?.addEventListener("click", () => {
  userScore = 0;
  updateScoreDisplay();
  toggleButtons(false);
  if (knowOutComeButton) {
    knowOutComeButton.style.display = "none";
  }

  if (gameMessage) {
    gameMessage.textContent = "Nuevo juego iniciado. !Saca una carta¡";
  }
});

// Inicializacion del juego

toggleButtons(false);
if (newGameButton instanceof HTMLButtonElement) {
  newGameButton.style.display = "none";
}
