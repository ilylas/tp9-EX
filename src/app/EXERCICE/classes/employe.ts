import { Affiliation } from "./affiliation";

export class Employe {
    constructor(
        public id:number,
        public matricule:string,
        public nom:string,
        public affiliation: Affiliation){
        }
}
