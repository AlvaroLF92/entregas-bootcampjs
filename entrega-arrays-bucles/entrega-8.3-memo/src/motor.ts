import { Carta, Tablero } from "./model";

// Funcion preparar partida

export const prepararPartida = (
  tablero: Tablero,
  contendoresCartas: NodeListOf<Element>,
  mensaje: HTMLElement
): void => {
  tablero.estadoPartida = "PartidaNoIniciada";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.cartas = barajarCartas(tablero.cartas);
  tablero.cartas.forEach((carta) => {
    carta.encontrada = false;
    carta.estaVuelta = false;
  });
  contendoresCartas.forEach((div) => {
    div.classList.add("disable-cards");
  });
  mensaje.textContent = "Pulsa 'Iniciar Partida' para comenzar a jugar ";
  contendoresCartas.forEach((div) => {
    const imagen = div.querySelector("img");
    if (imagen) imagen.src = "./src/assets/pngs/0.png";
  });
};

//Iniciar partida

export const iniciaPartida = (
  tablero: Tablero,
  contendoresCartas: NodeListOf<Element>,
  mensaje: HTMLElement
): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  contendoresCartas.forEach((div) => {
    div.classList.remove("disable-cards");
  });
  mensaje.textContent = "!Buena suerte¡";
  setTimeout(() => {
    mensaje.textContent = " ";
  }, 1500);
};

// Funcion para barajar cartas

const barajarCartas = (array: Carta[]): Carta[] => {
  return array.sort(() => Math.random() - 0.5);
};

// Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number,
  mensaje: HTMLElement
): boolean => {
  if (tablero.cartas[indice].encontrada) {
    mensaje.textContent = "Esta carta ya forma parte de una pareja";
    setTimeout(() => {
      mensaje.textContent = " ";
    }, 1500);
    return false;
  } else if (
    !tablero.cartas[indice].estaVuelta &&
    !tablero.cartas[indice].encontrada &&
    tablero.estadoPartida != "DosCartasLevantadas"
  )
    return true;
  else return false;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = !tablero.cartas[indice].estaVuelta;

  comprobarCartas(tablero,indice)
};

const comprobarCartas = (tablero: Tablero , indice: number):void => {
  if (tablero.cartas[indice].encontrada || !tablero.cartas[indice].estaVuelta)
    return;

  switch (tablero.estadoPartida) {
    case "CeroCartasLevantadas":
      tablero.indiceCartaVolteadaA = indice;
      tablero.estadoPartida = "UnaCartaLevantada";
      break;
    case "UnaCartaLevantada":
      tablero.indiceCartaVolteadaB = indice;
      tablero.estadoPartida = "DosCartasLevantadas";
      break;
    default:
      break;
  }
}
/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  const cartaA = tablero.cartas[indiceA];
  const cartaB = tablero.cartas[indiceB];

  return cartaA.idFoto === cartaB.idFoto ? true : false;
  
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  const cartaA = tablero.cartas[indiceA];
  const cartaB = tablero.cartas[indiceB];

  cartaA.encontrada = true;
  cartaB.encontrada = true;

  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;

  if (esPartidaCompleta(tablero)) {
    console.log("Enhorabuena , has completado la partida");
    tablero.estadoPartida = "PartidaCompleta";
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  const cartaA = tablero.cartas[indiceA];
  const cartaB = tablero.cartas[indiceB];

  cartaA.estaVuelta = false;
  cartaB.estaVuelta = false;

  const divA = document.querySelector(
    `[data-index-id="${indiceA}"]`
  ) as HTMLElement;
  const divB = document.querySelector(
    `[data-index-id="${indiceB}"]`
  ) as HTMLElement;

  setTimeout(() => {
    const imagenA = divA?.querySelector("img");
    const imagenB = divB?.querySelector("img");
    if (imagenA && imagenB) {
      imagenA.src = "./src/assets/pngs/0.png";
      imagenB.src = "./src/assets/pngs/0.png";
    }

    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;

    tablero.estadoPartida = "CeroCartasLevantadas";
  }, 750);
};

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
const esPartidaCompleta = (tablero: Tablero): boolean => {
  const estaLaPartidaCompletada = tablero.cartas.every(
    (carta) => carta.encontrada
  );
  return estaLaPartidaCompletada;
};
