import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Currency } from '../../models/currency';
import { CurrencyService } from '../../services/currency.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.css']
})
export class CurrencyDisplayComponent implements OnInit {

  @Input() currency : Currency;
	@Output() borrarLugar = new EventEmitter<Currency>();
	@Output() editarLugar = new EventEmitter<Currency>();
	@Output() isEditingOut= new EventEmitter();
	public isDeleting = false;
	public isEditing = false;
	public islogged = false;

	constructor(private currencyService:CurrencyService, private authService:AuthService) { }

	ngOnInit() {
		this.refrescar();
	}

		refrescar(){
  		this.islogged=false;
  		if(this.authService.islogged==true){
  		this.islogged=true;
  		}
  	}

	borrar(){
		this.isDeleting = true;
		this.borrarLugar.emit(this.currency);
		console.log(this.currency);
	}


	editar(){
		this.editarLugar.emit(this.currency);
	}

}