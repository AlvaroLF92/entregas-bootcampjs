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
  return Math.floor(Math.random() * 12) + 1;
};

// Función que ajusta el número si es mayor que 7 sumando +2;

const adjustNumber = (num: number): number => {
  return num > 7 && num < 10 ? num + 2 : num;
};

// Funcion que muestra la puntuación total en el HTML;

const updateScoreDisplay = (): void => {
  if (showCard instanceof HTMLElement) {
    showCard.textContent = `Score: ${userScore}`;
  }
};

// Funcion que devuelve la url de la carta elegida;

const getCardUrl = (): string => {
  const randomNumber = getRandomNumber();
  const adjustedNumber = adjustNumber(randomNumber);

  const card = cardSource.find((card) => {
    const regex = new RegExp(`/${adjustedNumber}_`);
    return regex.test(card.url);
  });

  if (card) {
    selectedCard = card;
    return card.url;
  }
  throw new Error("No se encontró la carta");
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

// Funcionalidad botón plantarse
const stand = () => {
  if (gameMessage) {
    gameMessage.textContent = `Te has plantado con ${userScore} puntos`;
    if (standButton) standButton.style.display = "none";
  }
  toggleButtons(true);
  if (knowOutComeButton) {
    knowOutComeButton.style.display = "inline-block";
  }
};
// Evento cuando el jugador pulsa "Plantarse"

standButton?.addEventListener("click", stand);

// Funcionalidad botón saber que habría pasado

const knowOutCome = () => {
  let simulatedScore = userScore;
  let outComeMessage = "";

  const updateSimulatedUserScore = () => {
    simulatedScore = sumCardValue();
    updateScoreDisplay();
  };

  if (simulatedScore < 7.5) {
    displayCard();
    simulatedScore += selectedCardValue();
    updateSimulatedUserScore();

    if (simulatedScore === 7.5) {
      outComeMessage = "!Habrías ganado¡";
    }

    if (simulatedScore > 7.5) {
      outComeMessage = `!Te habrías pasado con ${simulatedScore} puntos¡`;
    }
  }

  if (!outComeMessage) {
    outComeMessage = `!Te habrías quedado con ${simulatedScore} puntos¡`;
  }

  if (gameMessage) {
    gameMessage.textContent = outComeMessage;
  }

  if (knowOutComeButton) {
    knowOutComeButton.style.display = "none";
  }
};

// Evento botón Saber que habría pasado.

knowOutComeButton?.addEventListener("click", knowOutCome);

// Funcionalidad botón nueva partida

const newGame = () => {
  userScore = 0;
  updateScoreDisplay();
  toggleButtons(false);
  if (currentCard instanceof HTMLImageElement) {
    currentCard.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  if (standButton) {
    standButton.style.display = "inline-block";
  }

  if (knowOutComeButton) {
    knowOutComeButton.style.display = "none";
  }

  if (gameMessage) {
    gameMessage.textContent = "Comienza a Jugar";
  }
};

// Evento cuando el jugador pulsa "New Game"

newGameButton?.addEventListener("click", newGame);

// Inicializacion del juego

toggleButtons(false);
if (newGameButton instanceof HTMLButtonElement) {
  newGameButton.style.display = "none";
}
