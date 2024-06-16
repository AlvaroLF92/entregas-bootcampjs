import "./style.css";

// Primero creamos unas variables para los géneros msicales.

const musGenre = {
  rock: "Rock n Roll 🎸",
  pop: "Pop Rock 🎵",
  hard: "Hard Rock 🤘",
  clasic: "Classic Music 🎼",
}

// Segundo nuestra plantilla para el tipado de los objetos que crearemos mas adelante.


interface Bands {
  name: string | null,
  foundationYear: number | null,
  active: boolean | null,
  musicalGenre:  string | null,
}

// Creamos tambien una variable para darle estilo a la propiedad nombre de nuestros objetos.

const nameStyles = "font-weight: 700; font-size: 16px; background-color: green";

// Tercero creamos los objetos con los datos de cada banda para usarlos más adelante.

const band1 : Bands = {
  name: "The Beatles",
  foundationYear: 1960,
  active: true,
  musicalGenre: musGenre.pop ,
}

const band2 : Bands = {
  name: "Queen",
  foundationYear: 1970,
  active: false,
  musicalGenre: musGenre.rock ,
}

const band3 : Bands = {
  name: "AC/DC",
  foundationYear: 1973,
  active: true,
  musicalGenre: musGenre.hard ,
}

const band4 : Bands = {
  name: "Ludwig van Beethoven",
  foundationYear: 1770,
  active: false,
  musicalGenre: musGenre.clasic,
}

const band5 : Bands = {
  name: "The Rolling Stones",
  foundationYear: 1962,
  active: true,
  musicalGenre: musGenre.rock,
} 

// Ahora creamos un log con las variables que querremos mostrar de cada grupo :


console.log(`%c${band1.name}`, nameStyles,  "/" , `${band1.foundationYear}`, "/" ,"Activo:",`${band1.active}`,  "/" , `${band1.musicalGenre}` );

// Por último copiamos y pegamos dicha estructura y cambiamos los numeros de cada propiedad del objeto band y lo tendríamos, esto se podría optimizar con un bucle, pero no lo logré hacer funcionar. 

console.log(`%c${band2.name}`, nameStyles,  "/" , `${band2.foundationYear}`, "/" ,"Activo:",`${band2.active}`,  "/" , `${band2.musicalGenre}` );

console.log(`%c${band3.name}`, nameStyles,  "/" , `${band3.foundationYear}`, "/" ,"Activo:",`${band3.active}`,  "/" , `${band3.musicalGenre}` );

console.log(`%c${band4.name}`, nameStyles,  "/" , `${band4.foundationYear}`, "/" ,"Activo:",`${band4.active}`,  "/" , `${band4.musicalGenre}` );

console.log(`%c${band5.name}`, nameStyles,  "/" , `${band5.foundationYear}`, "/" ,"Activo:",`${band5.active}`,  "/" , `${band5.musicalGenre}` );


