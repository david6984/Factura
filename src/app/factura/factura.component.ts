import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency';
import { ProductosService } from '../services/productos.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  public currencies : Currency[];

  constructor() { }

  ngOnInit() {
  }
  
}