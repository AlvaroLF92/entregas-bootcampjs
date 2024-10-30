import { Pacientes } from "./pacientes";

// APARTADO 5

// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numeroDepacientesEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Cardiólogo") {
      numeroDepacientesEspecialidad.cardiologia += 1;
    } else if (paciente.especialidad === "Medico de familia") {
      numeroDepacientesEspecialidad.medicoDeFamilia += 1;
    } else if (paciente.especialidad === "Pediatra")
      numeroDepacientesEspecialidad.pediatria += 1;
  });

  return numeroDepacientesEspecialidad;
};
