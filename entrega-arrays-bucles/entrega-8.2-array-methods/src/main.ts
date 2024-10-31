import "./style.css";
import { pacientes } from "./pacientes";
import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
} from "./apartado1";
import { activarProtocoloUrgencia, pacientes2 } from "./apartado2";
import { reasignaPacientesAMedicoFamilia } from "./apartado3";
import { HayPacientesDePediatria } from "./apartado4";
import { cuentaPacientesPorEspecialidad } from "./apartado5";

// APARTADO 1

// A

console.log(
  "APARTADO-1-A-Los pacientes asignados a pediatría son: ",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// B

console.log(
  "APARTADO-1-B-Los pacientes asignados a pediatría menores de 10 años son: ",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// APARTADO 2

console.log(
  "APARTADO-2-El protocolo de emergencia debe activarse: ",
  activarProtocoloUrgencia(pacientes)
);

// Simulamos el caso en el que debería activarse con el archivo modificado "pacientes2" para el apartado2

console.log(
  "APARTADO-2-El protocolo de emergencia debe activarse: ",
  activarProtocoloUrgencia(pacientes2)
);

// APARTADO 3

console.log(
  "APARTADO-3-Lista con los pacientes de Pediatría reasignados a Médico de familia: ",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// APARTADO 4

console.log(
  "APARTADO-4-Hay pacientes de pediatría: ",
  HayPacientesDePediatria(pacientes)
);

// Vamos a reutilizar la funcion de reasignacion de pediatría para ver si funciona nuestro checkeo del apartado 4 y devuelve "false" puesto que en la lista modificada no hay pacientes de pediatría.

const listaSinPacientesPediatra = reasignaPacientesAMedicoFamilia(pacientes);

console.log(
  "APARTADO-4-Hay pacientes de pediatría: ",
  HayPacientesDePediatria(listaSinPacientesPediatra)
);

// APARTADO 5

console.log(
  "APARTADO-5-Los pacientes asignados a cada especialidad son: ",
  cuentaPacientesPorEspecialidad(pacientes)
);
