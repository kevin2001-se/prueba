import { Pais } from "./pais.model";

export class Marca {
  idMarca?:Number;
	nombre?:string;
	estado?:string;
	fechaRegistro?:string;
	fechaVigencia?:string;
	certificado?:string;
	pais?:Pais;
}
