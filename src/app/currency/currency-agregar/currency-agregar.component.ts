import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Currency } from '../../models/currency';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-agregar',
  templateUrl: './currency-agregar.component.html',
  styleUrls: ['./currency-agregar.component.css']
})
export class CurrencyAgregarComponent implements OnInit,OnChanges {

  @Output() agregarCurrency = new EventEmitter<any>();
	@Output() editarCurrency = new EventEmitter<any>();
	@Input() canAdd : boolean = true;
	@Input('selectedCurrency') currency : Currency = new Currency();
	submitted = false;
	requiredText : string = '';
	isEditing = false;

	onSubmit(currencyForm) {
		if(this.isEditing){
			this.editarCurrency.emit({
				'lugar':this.currency,
				'form':currencyForm
			});
			this.isEditing = false;
		} else {
			this.agregarCurrency.emit({
				'lugar':this.currency,
				'form':currencyForm
			});
		}
		this.submitted = true; 

	}

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.currency && changes.currency.currentValue._id){
			console.log('is editing');
			this.isEditing = true;
		}
	}

	newCurrency(){
		this.submitted = false; 
		this.isEditing = false;
		this.currency = new Currency();
	}

}

