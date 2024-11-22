import { Departament } from "../departament/index.ts";

export class Worker {
  constructor(id:number, fullName: string, departament: Departament) {
    this.id = id
    this.fullName = fullName;
    this.departament = departament;
    this.roleType = "worker";
    this.roleName = "Работник";
  }
}
