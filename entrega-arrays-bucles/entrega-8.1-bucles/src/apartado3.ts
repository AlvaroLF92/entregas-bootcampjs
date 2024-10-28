import { Pacientes } from "./pacientes";

/** APARTADO 3
 * El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
 *
 */

export const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const pacienteReasignado: Pacientes = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };
      pacientesReasignados = [...pacientesReasignados, pacienteReasignado];
    } else {
      pacientesReasignados = [...pacientesReasignados, pacientes[i]];
    }
  }
  return pacientesReasignados;
};

// Investigando por internet encontré esta interesante forma de añadir valores a un array sin crear uno nuevo en cada iteracion: 

/*

      pacientesReasignados[pacientesReasignados.length] = pacienteReasignado;

    } else {
      
      pacientesReasignados[pacientesReasignados.length] = pacientes[i];
*/

// He decidido no implementarla porque puesto que es más eficiente no ha sido fruto de mi conocimiento que es lo que quiero poner en tela de juicio aquí, de haber podido usar array methods , de nuevo .push() nos solucionaba el problema de creacion excesiva de arrays nuevos con cada iteración.