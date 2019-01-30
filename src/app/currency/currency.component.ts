import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency';
import { CurrencyService } from '../services/currency.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public currencies : Currency[];
	public selectedCurrency : Currency = new Currency;
	public loading : boolean = false;
	public islogged : boolean = false;

  constructor(private currencyService: CurrencyService, private authService:AuthService) { }

  ngOnInit() {
		this.obtenerCurrencies();
		this.refrescar();
	}

	refrescar(){
  		this.islogged=false;
  		if(this.authService.islogged==true){
  		this.islogged=true;
  		}
  	}

	public editarCurrency(currency){
		console.log('edit',currency);
		this.selectedCurrency = Object.assign({}, currency);
	}

	public editarCurrencySave(currency){
		this.currencyService.editarCurrency(currency.currency)
			.then(data => {
				this.obtenerCurrencies();
				currency.form.reset();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public borrarCurrency(currency){
		this.currencyService.borrarCurrency(currency)
			.then(data => {
				this.obtenerCurrencies();
			})
			.catch(error => {
				console.log('error',error);
			});
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

	public agregarLugar(currency:any){
		this.loading = true;
		this.currencyService.agregarCurrency(currency.currency)
			.then(data => {
				console.log('currency agregado');
				currency.form.reset();
				this.loading = false;
				this.obtenerCurrencies();
			})
			.catch(error => {
				console.log('error',error);
			});
	}
}