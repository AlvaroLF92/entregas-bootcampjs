import { Pacientes } from "./pacientes";

// APARTADO 4

// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría.

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientesDePediatria = false;

  if (pacientes.some((paciente) => paciente.especialidad === "Pediatra")) {
    hayPacientesDePediatria = true;
  }

  return hayPacientesDePediatria;
};
