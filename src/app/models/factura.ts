import {Cliente} from "./cliente"
import { Empresa } from "./empresa";


export class Factura{
    public _id: string = undefined;
    public Clave : string='';
    public Consecutivo : string='';
    public FechaEmision : Date;
    public Emisor : Empresa;
    public Receptor : Cliente;
    public CondicionVenta :string='';
    public PlazoCredito : string='';
    public MedioPago :string[];

    constructor(){

    }
}