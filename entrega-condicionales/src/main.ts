import "./style.css";

type Estado = "Has ganado" | "Has perdido" | "Seguir jugando";

// Variables;

let userScore: number = 0;

// Enlaces a elementos HTML;

const gameMessage = document.getElementById("gameStatus");
const getCardButton = document.getElementById("getCard");
const standButton = document.getElementById("stand");
const newGameButton = document.getElementById("newGame");
const score = document.getElementById("gameScore");
const currentCard = document.getElementById("currentCard");
const knowOutComeButton = document.getElementById("knowOutCome");

// Función que devuelve un número aleatorio;

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

// Función que ajusta el número si es mayor que 7 sumando +2;

const adjustNumber = (num: number): number => {
  return num > 7 ? num + 2 : num;
};

// Funcion que nos devuelve la url de la carta

const getCardUrl = (cardNumber: number): string => {
  console.log(cardNumber);

  switch (cardNumber) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "URL no disponible";
  }
};

// Función que muestra la carta en el html

const showCardUrl = (card: string) => {
  console.log(card);

  if (
    currentCard !== undefined &&
    currentCard !== null &&
    currentCard instanceof HTMLImageElement
  ) {
    currentCard.src = card;
  }
};

// Funcion que calcula el valor de la carta seleccionada;

const selectedCardValue = (num: number): number => {
  if (num > 7) {
    return (num = 0.5);
  } else return num;
};

// Función que suma los puntos
const sumPoints = (cardValue: number): number => {
  userScore += cardValue;
  return userScore;
};
// Funcion que muestra la puntuación total en el HTML;

const updateScoreDisplay = (totalPoints: number): void => {
  if (score !== null && score !== undefined && score instanceof HTMLElement) {
    score.innerHTML = `Puntuación: ${totalPoints}`;
  }
};

// Función que controla el estado de la partida

const checkGameState = (): Estado => {
  let state: Estado = "Seguir jugando";
  if (userScore === 7.5) state = "Has ganado";
  else if (userScore > 7.5) state = "Has perdido";
  return state;
};

// Función que comprueba si hemos ganado o no la partida;

const manageGameStatus = (state: string): void => {
  switch (state) {
    case "Has ganado":
      if (gameMessage !== undefined && gameMessage !== null) {
        gameMessage.innerHTML = `!Enhorabuena¡ Has ganado con ${userScore} puntos`;
      }
      toggleButtons(true);
      break;
    case "Has perdido":
      if (gameMessage !== undefined && gameMessage !== null) {
        gameMessage.innerHTML = `!Has perdido¡ Te has pasado con ${userScore} puntos`;
      }
      toggleButtons(true);
  }
};

// Funcion que controla el flujo del juego

const handleGame = (): void => {
  const randomNumber = getRandomNumber();
  const adjustedNumber = adjustNumber(randomNumber);
  const card = getCardUrl(adjustedNumber);
  const cardValue = selectedCardValue(adjustedNumber);
  const totalPoints = sumPoints(cardValue);
  showCardUrl(card);
  updateScoreDisplay(totalPoints);
  const gameState = checkGameState();
  manageGameStatus(gameState);
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

// Funcionalidad botón nueva partida

const newGame = () => {
  userScore = 0;
  updateScoreDisplay(0);
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

// Funcionalidad botón saber que habría pasado

const simulatedCardDrawing = (): { cardValue: number; cardUrl: string } => {
  const randomNumber: number = getRandomNumber();
  const adjustedNumber: number = adjustNumber(randomNumber);
  const cardValue = selectedCardValue(adjustedNumber);
  const cardUrl = getCardUrl(adjustedNumber);
  return { cardValue, cardUrl };
};

const knowOutCome = () => {
  const { cardValue, cardUrl } = simulatedCardDrawing();
  let simulatedScore: number = userScore + cardValue;

  const simulatedState: Estado =
    simulatedScore === 7.5
      ? "Has ganado"
      : simulatedScore > 7.5
      ? "Has perdido"
      : "Seguir jugando";

  switch (simulatedState) {
    case "Has ganado":
      if (gameMessage !== undefined && gameMessage !== null) {
        gameMessage.innerHTML = `Habrías ganado con ${simulatedScore} puntos`;
      }
    case "Has perdido":
      if (gameMessage !== undefined && gameMessage !== null) {
        gameMessage.innerHTML = `Habrías perdido con ${simulatedScore} puntos`;
      }
    case "Seguir jugando":
      if (gameMessage !== undefined && gameMessage !== null) {
        gameMessage.innerHTML = `Te habrías quedado con ${simulatedScore} puntos`;
      }
  }

  showCardUrl(cardUrl);
  if (knowOutComeButton) {
    knowOutComeButton.style.display = "none";
  }
};

// Eventos

// Cuando el jugador pulsa "Pedir carta"

getCardButton?.addEventListener("click", () => {
  handleGame();
});

// Evento cuando el jugador pulsa "Plantarse"

standButton?.addEventListener("click", stand);

// Evento botón Saber que habría pasado.

knowOutComeButton?.addEventListener("click", knowOutCome);

// Evento cuando el jugador pulsa "New Game"

newGameButton?.addEventListener("click", newGame);

// Inicializacion del juego

toggleButtons(false);
if (newGameButton instanceof HTMLButtonElement) {
  newGameButton.style.display = "none";
}
