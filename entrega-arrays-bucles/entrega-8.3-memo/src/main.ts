import "./style.css";
import { tablero } from "./model";
import {
  iniciaPartida,
  prepararPartida,
  voltearLaCarta,
  sePuedeVoltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
} from "./motor";

console.log(tablero);

// Referencias a elementos del DOM

const contendoresCartas = document.querySelectorAll(".card-container");
const botonIniciarPartida = document.getElementById("comenzar-partida");
const botonNuevaPartida = document.getElementById("nueva-partida");
const mensajeJugador = document.getElementById("mensajeJugador");

//Manejo de eventos de clicks

contendoresCartas.forEach((div: Element) => {
  // Añadir un evento a cada div
  div.addEventListener("click", () => {
    // Tomar la referencia del atributo data-index-id de cada contenedor y de cada atributo data-image-index de cada imagen dentro del div

    const indexDiv = div.getAttribute("data-index-id");

    const imageIndex = div
      .querySelector("img")
      ?.getAttribute("data-image-index");

    if (
      indexDiv && imageIndex 
    ) {
      const index = parseInt(indexDiv);
      const imagen = div.querySelector("img");
      const carta = tablero.cartas[parseInt(imageIndex)];
      // Comprobar si la carta ya está dada la vuelta , si lo está no pasa nada
      // Si la carta no está dada la vuelta, y ya hay dos cartas mostradas no se puede dar la vuelta

      const sePuedeVoltear = sePuedeVoltearLaCarta(tablero, index ,mensajeJugador!);

      // Si se puede dar la vuelta a la carta,comprobamos si es la primera o la segunda
      // Si es la primera , esperamos a que una segunda sea volteada
      if (imagen && sePuedeVoltear && mensajeJugador instanceof HTMLElement) {
        voltearLaCarta(tablero, index );
        imagen.src = carta.imagen;
        console.log(tablero.cartas[index]);
        // Si es la segunda , hacemos la comparacion con la primera , para ver si son o no pareja
        if (
          tablero.indiceCartaVolteadaA !== undefined &&
          tablero.indiceCartaVolteadaB !== undefined
        ) {
          const sonParejaResultado = sonPareja(
            tablero.indiceCartaVolteadaA,
            tablero?.indiceCartaVolteadaB,
            tablero
          );
          // Si son pareja, permanecen dadas la vuelta y se impide volver a interactuar con ellas hasta que finalice la partida
          if (sonParejaResultado) {
            console.log("Las cartas son pareja");
            parejaEncontrada(
              tablero,
              tablero.indiceCartaVolteadaA,
              tablero.indiceCartaVolteadaB
            );
          } else {
            // Si no son pareja, ambas se voltean de nuevo
            // Despues de comprobar si son pareja, volvemos a poder buscar parejas de nuevo
            parejaNoEncontrada(
              tablero,
              tablero.indiceCartaVolteadaA,
              tablero.indiceCartaVolteadaB
            );
            console.log("Las cartas no son pareja");
          }
        }
      }
    }
  });
});

// Evento que bloquea las cartas al inicializar la app esperando que el jugador pulse en "iniciar partida"

document.addEventListener("DOMContentLoaded", () => {
  prepararPartida(tablero, contendoresCartas, mensajeJugador!);
});

// Si pulsamos iniciar partida el estado cambia a "CeroCartasLevantadas" desbloqueando las cartas y esperando acciones del jugador

if (botonIniciarPartida && botonIniciarPartida instanceof HTMLButtonElement) {
  botonIniciarPartida.addEventListener("click", () => {
    tablero.estadoPartida = "CeroCartasLevantadas";

    console.log(tablero);
    console.log("Ha iniciado la partida");

    prepararPartida(tablero, contendoresCartas, mensajeJugador!);
    iniciaPartida(tablero, contendoresCartas, mensajeJugador!);
    botonIniciarPartida.disabled = true;
  });
}

// Iniciando una nueva partida

if (botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", () => {
    prepararPartida(tablero, contendoresCartas, mensajeJugador!);

    iniciaPartida(tablero, contendoresCartas, mensajeJugador!);
    if (botonIniciarPartida instanceof HTMLButtonElement) {
      botonIniciarPartida.disabled = false;
    }
  });
}
