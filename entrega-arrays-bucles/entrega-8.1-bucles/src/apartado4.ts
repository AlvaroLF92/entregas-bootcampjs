import { Pacientes } from "./pacientes";

/**APARTADO 4
 *
 * Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría.
 */

export const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pacientesDePediatria: boolean = false;

  for (let i = 0; i < pacientes.length; i++) {
    pacientes[i].especialidad === "Pediatra"
      ? (pacientesDePediatria = true)
      : (pacientesDePediatria = false);
  }

  return pacientesDePediatria
};
