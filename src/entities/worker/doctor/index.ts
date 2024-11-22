import { Worker } from "../index.ts";
import { Departament } from "../../departament/index.ts";

export class DoctorWorker extends Worker {
  constructor(id:number, fullName: string, departament: Departament) {
    super(id, fullName, departament);
    this.roleType = "doctor";
    this.roleName = "Врач";
  }
}
