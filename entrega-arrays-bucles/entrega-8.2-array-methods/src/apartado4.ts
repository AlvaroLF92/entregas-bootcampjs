import { Pacientes } from "./pacientes";

// APARTADO 4

// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría.

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientesDePediatria = pacientes.some((paciente) => paciente.especialidad === "Pediatra")
  
  return hayPacientesDePediatria;
};

// En lugar de devolver la variable con un booleano,he aprovechado que .some devuelve un booleano para que el return del método sea lo que se devuelve como valor en la variable, creo que así cumple con lo esperado.