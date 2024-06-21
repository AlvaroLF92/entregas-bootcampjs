import "./style.css";

// Primero creamos una variable para almacenar el valor de nuestro contador de turnos.

let counter = 0;

// Seguidamente creamos otras variables donde guardaremos la referencia del H1 que va a mostrar el turno actual así como la de los botones que gatillarán las funciones :

const currentTurn = document.getElementById("numero-turno");

const botonAvance = document.getElementById("avanzar");

const botonRetroceso = document.getElementById("retroceder");

const botonReset = document.getElementById("reset");

const botonModificar = document.getElementById("cambia-turno");



// Ahora creamos 3 funciones que modifiquen el valor de "resultado" a través de la variable "counter" ,incrementando , decrementando o reseteando. Así como una función adicional para establecer el turno que quiera el usuario.



function modCounter () {
  
const userTurn = (document.getElementById( "modifica-turno" ) as HTMLInputElement).value;

const resultado = parseInt(userTurn);

if ( currentTurn !== null && currentTurn !== undefined ) {

  currentTurn.innerHTML = resultado.toString().padStart(2  , "0" );

 }
}  


function increaseCounter () {

  counter++;
  if ( currentTurn !== null && currentTurn !== undefined ) {

    currentTurn.innerHTML = counter.toString().padStart(2  , "0" );

  }
}

function decreaseCounter () {

  counter--;
  if ( currentTurn !== null && currentTurn !== undefined ) {

    currentTurn.innerHTML = counter.toString().padStart(2  , "0" );;

  }
}

function resetCounter () {

  counter = 0;
  if ( currentTurn !== null && currentTurn !== undefined ) {

    currentTurn.innerHTML = counter.toString().padStart(2  , "0" );
    
  }
}

// Ahora debemos asociar estas funcionas a un evento para cada botón.

if ( botonAvance !== null && botonAvance !== undefined ) {
  botonAvance.addEventListener("click", increaseCounter);
};

if ( botonRetroceso !== null && botonAvance !== undefined ) {
  botonRetroceso.addEventListener("click", decreaseCounter);
};

if ( botonReset !== null && botonAvance !== undefined ) {
    botonReset.addEventListener("click", resetCounter);
};

if ( botonModificar !== null && botonModificar !== undefined ) {
  botonModificar.addEventListener("click", modCounter);
};
