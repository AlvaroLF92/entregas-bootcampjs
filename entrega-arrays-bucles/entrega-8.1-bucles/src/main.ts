import { pacientes } from "./pacientes";
import { obtenPacientesAsignadosAPediatria } from "./apartado1";
import { activarProtocoloUrgencia, pacientes2 } from "./apartado2";
import { reasignaPacientesAMedicoFamilia } from "./apartado3";
import { hayPacientesDePediatria } from "./apartado4";
import {cuentaPacientesPorEspecialidad} from "./apartado5"
import "./style.css";

// Funcionalidad del apartado 1

console.log(
  "APARTADO-1: Los pacientes de pediatría son: ",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Funcionalidad del apartado 2

console.log(
  "APARTADO-2: Es necesario activar el protocolo de emergencia:",
  activarProtocoloUrgencia(pacientes)
);

console.log(
  "APARTADO-2-PRUEBA: Es necesario activar el protocolo de emergencia:",
  activarProtocoloUrgencia(pacientes2)
);

// Funcionalidad del apartado 3

console.log(
  "APARTADO-3: La lista con los pacientes reasignados de pediatría es la siguiente: ",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// Funcionalidad del apartado 4

console.log("APARTADO-4: Hay pacientes asignados a pediatria: ", hayPacientesDePediatria(pacientes));

// Vamos a reutilizar la funcion del anterior apartado para comprobar que nuestra funcion hayPacientesPediatria() funciona en ambos casos: 

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);

const hayPacientes = hayPacientesDePediatria(pacientesReasignados)

console.log("APARTADO-4-PRUEBA: Hay pacientes asignados a pediatria: ", hayPacientes);

// Funcionalidad del apartado 5

console.log("APARTADO-5 : Los pacientes de cada especialidad son: ", cuentaPacientesPorEspecialidad(pacientes));



