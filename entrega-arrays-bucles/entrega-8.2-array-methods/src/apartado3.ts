import { Pacientes } from "./pacientes";

// APARTADO 3

// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

export const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados : Pacientes[] = pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia",
      };
    }
    return paciente;
  });

  return pacientesReasignados;
};
