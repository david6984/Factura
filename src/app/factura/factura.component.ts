import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency';
import { AuthService } from '../services/auth.service';
import { CurrencyService } from '../services/currency.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  public currencies : Currency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.obtenerCurrencies();
  }

  public obtenerCurrencies(){
		this.currencyService.obtenerCurrency().subscribe((data) => {
				this.currencies = data.currency;
			},(error)=>{
				console.log('error',error);
			});
			// .then(data => {
			// 	this.productos = data.product;
			// })
			// .catch(error => {
			// 	console.log('error',error);
			// });
	}
  
}