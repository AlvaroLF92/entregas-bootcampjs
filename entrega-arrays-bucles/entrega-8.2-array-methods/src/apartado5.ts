import { Pacientes } from "./pacientes";

// APARTADO 5

// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

// Funcion original mia

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
      numeroDepacientesEspecialidad.cardiologia ++;
    } else if (paciente.especialidad === "Medico de familia") {
      numeroDepacientesEspecialidad.medicoDeFamilia ++;
    } else if (paciente.especialidad === "Pediatra")
      numeroDepacientesEspecialidad.pediatria ++;
  });

  return numeroDepacientesEspecialidad;
};


// Funciones picadas por un amigo, son muy interesantes y he decidido dejarlas comentadas pues es código de alto nivel.

/*
export const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): any => {
  let numeroDepacientesEspecialidad: any = {};

  pacientes.forEach((paciente) => {

    let especialidadDelPaciente: string = paciente.especialidad.toLowerCase().replaceAll(' ', '');

    if(numeroDepacientesEspecialidad[especialidadDelPaciente]) {
        numeroDepacientesEspecialidad[especialidadDelPaciente]++;
    } else {
        numeroDepacientesEspecialidad[especialidadDelPaciente] = 1;
    }

  });

  return numeroDepacientesEspecialidad;
};
*/

/*
interface keyValue {
  key: string;
  value: number;
}

export const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): keyValue[] => {

  let numeroDepacientesEspecialidad: keyValue[] = [];

  pacientes.forEach((paciente) => {

    let especialidadDelPaciente: keyValue | undefined =
      numeroDepacientesEspecialidad.filter(
        (especialidad) => paciente.especialidad === especialidad.key
      )[0] ?? undefined; 

    if (!especialidadDelPaciente) {

      numeroDepacientesEspecialidad.push({
        key: paciente.especialidad,
        value: 1
        
      });

    } else {
      numeroDepacientesEspecialidad.map((especialidad) => {

        if (especialidad.key === especialidadDelPaciente.key)
          especialidad.value++;

      });
    }
  });

  return numeroDepacientesEspecialidad;
};
*/