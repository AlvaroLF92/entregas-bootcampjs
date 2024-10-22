Vamos a crear pruebas unitarias para la función "checkGameStatus" que determina si hemos ganado o no la partida en función de nuestra puntuación.

Comenzaremos por crear un archivo motor.spec.ts e importaremos las librerias y módulos necesarios para comenzar las pruebas.

Al iniciar las pruebas estamos teniendo problemas con el objeto document, para ello vamos a crear un Mock de document , puesto que sería la opcion mas sencilla que conocemos. Para ello vamos a utilizar beforeEach.

Hemos intentado esto :

beforeEach(() => {
vi.spyOn(document, 'getElementById').mockImplementation((id : string ) => {
if (id === "gameStatus") return {textContent: ""} as HTMLElement;
return { textContent: "" } as HTMLElement;
});

    referenceHtml.gameMessage = document.getElementById("gameStatus") as HTMLElement

});

Mal enfoque, puesto que , en una prueba unitaria no podemos tener el servidor de desarrollo corriendo y siempre vamos a tener el problema con el objeto "document" , asique vamos a utilizar createDOM para simular que tenemos disponible en el DOM "gameStatus" y realizar las pruebas de "checkGameStatus".

Despues de dar todas estas vueltas he encontrado la existencia de jsdom, "JSDOM es una implementación de DOM (Document Object Model) en JavaScript que simula un entorno de navegador en un entorno de ejecución como Node.js. Permite a los desarrolladores manipular el DOM, simular eventos y ejecutar código relacionado con la interacción con la página web, todo sin necesidad de un navegador real."

Asique he decidido utilizarlo para poder ejecutar las pruebas de manera sencilla y eficaz, puesto que lo que nos interesa es comprobar que la ejecucion y funcionalidad del juego es la correcta en los diversos casos.

Se han realizado las pruebas necesarias para las funciones encargadas de devolver la URL y valor de la carta .ç

También para getRandomNumber y adjustNumber , encargadas de generar un numero aleatorio entre 1 y 10 y ajustarlo para los casos 8,9,10 , dando lugar al rango 1,2,3,4,5,6,7,10,11,12 para contemplar todos los elementos en el array, evitando los valores no deseados ( 8,9,10 ).
