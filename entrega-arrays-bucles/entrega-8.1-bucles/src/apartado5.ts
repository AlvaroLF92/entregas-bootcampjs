import { Pacientes } from "./pacientes";


/** APARTADO 5
 * 
 * Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
 */

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numeroPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Cardiólogo") {
      numeroPacientes.cardiologia += 1;
    } else if (pacientes[i].especialidad === "Medico de familia") {
      numeroPacientes.medicoDeFamilia += 1;
    } else if (pacientes[i].especialidad === "Pediatra") numeroPacientes.pediatria += 1;
  }

  return numeroPacientes;
};
