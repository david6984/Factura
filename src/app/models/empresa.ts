import { Identificacion } from "./identificacion";
import { Ubicacion } from "./ubicacion";
import { Telefono } from "./telefono";

export class Empresa {
	public _id: string = undefined;
	public Nombre : string = '';
    public Identificacion : Identificacion;
    public IdentificacionExtranjero : string ='';
    public NombreComercial : string='';
    public Ubicacion : Ubicacion;
    public Telefono : Telefono;
    public Fax : Telefono;
    public CorreoElectronico : string='';
    
	constructor(){
	}
}
