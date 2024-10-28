import { Pacientes } from "./pacientes";

/** APARTADO 2 
 * 
 * Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:

 */

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
  
    for (let i = 0; i < pacientes.length; i++) {
        if ( pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
            activarProctolo = true
        }
        
    }
  
    return activarProctolo;
  };


// Para comprobar que funciona vamos a crear un array de pacientes modificado en el que alguno cumpla la condicion y verificar que el protocolo se activa. Esto soy consciente que lo adecuado es comprobarlo haciendo testing, pero no creo que sea necesario implementar pruebas unitarias en este laboratorio.


export const pacientes2: Pacientes[] = [
    {
      id: 1,
      nombre: "John",
      apellidos: "Doe",
      sexo: "Male",
      temperatura: 39.8,
      frecuenciaCardiaca: 120,
      especialidad: "Medico de familia",
      edad: 44,
    },
    {
      id: 2,
      nombre: "Jane",
      apellidos: "Doe",
      sexo: "Female",
      temperatura: 36.8,
      frecuenciaCardiaca: 70,
      especialidad: "Medico de familia",
      edad: 43,
    },
    {
      id: 3,
      nombre: "Junior",
      apellidos: "Doe",
      sexo: "Male",
      temperatura: 36.8,
      frecuenciaCardiaca: 90,
      especialidad: "Pediatra",
      edad: 8,
    },
    {
      id: 4,
      nombre: "Mary",
      apellidos: "Wien",
      sexo: "Female",
      temperatura: 39.8,
      frecuenciaCardiaca: 120,
      especialidad: "Medico de familia",
      edad: 20,
    },
    {
      id: 5,
      nombre: "Scarlett",
      apellidos: "Somez",
      sexo: "Female",
      temperatura: 36.8,
      frecuenciaCardiaca: 110,
      especialidad: "Cardiólogo",
      edad: 30,
    },
    {
      id: 6,
      nombre: "Brian",
      apellidos: "Kid",
      sexo: "Male",
      temperatura: 39.8,
      frecuenciaCardiaca: 80,
      especialidad: "Pediatra",
      edad: 11,
    },
  ];
