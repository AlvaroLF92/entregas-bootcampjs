import { Pacientes } from "./pacientes";

// APARTADO 1

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría.

export const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesPediatria = pacientes.filter((paciente)=> paciente.especialidad === "Pediatra")

    return pacientesPediatria
  };

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesPediatriaMenos10años = pacientes.filter((paciente)=> paciente.especialidad === "Pediatra" && paciente.edad < 10)

    return pacientesPediatriaMenos10años
  };