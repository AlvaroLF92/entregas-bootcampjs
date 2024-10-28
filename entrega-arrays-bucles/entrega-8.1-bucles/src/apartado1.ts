import {  Pacientes } from "./pacientes";

/** APARTADO 1
 *
 * a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
 *
 *
 *  */

export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesDePediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatria = [...pacientesDePediatria, pacientes[i]];
    }
  }

  return pacientesDePediatria;
};

// Soy conciente de que estamos creando un array nuevo en cada iteración pero, puesto que no tengo permitido usar arrayMethods no puedo utilizar .push() para evitar esto, lo cual sería poco eficiente en un array con una gran cantidad de pacientes a filtrar.

// Quería lograr una funcion que aportase la misma funcionalidad que la anterior pero sin crear un nuevo array en cada iteración, para esta funcion tuve que googlear en stackOverFlow y la idea del índice vino de ahí. La implementación con el material del curso fué la primera.

/*
  
  const obtenPacientesAsignadosAPediatriaEficiente = (
      pacientes: Pacientes[]
    ): Pacientes[] => {
      let pacientesDePediatria: Pacientes[] = [];
      let index : number = 0;
  
      for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesDePediatria[index] = pacientes[i];
            index++
        }
      }
    
      return pacientesDePediatria;
    };
  
    console.log(obtenPacientesAsignadosAPediatriaEficiente(pacientes));
    
    */
