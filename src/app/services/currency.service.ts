import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';
import { DataService } from '../services/data.service';

@Injectable()
export class CurrencyService {

  constructor(private dataService:DataService) { }

  public obtenerCurrency(){
		return this.dataService.get('/api/currency');
	}

	public agregarCurrency(currency:Currency){
		return this.dataService.post('/api/currency',{'currency':currency});
	}

	public borrarCurrency(currency:Currency){
		try{
			console.log('currency service',currency._id);
			console.log('currency service',currency);
			console.log('currency serv return',this.dataService.delete('/api/currency/'+currency._id));
			return this.dataService.delete('/api/currency/'+currency._id);
		}catch(e){
			console.log(e);
		}
	}

	public editarCurrency(currency:Currency){
		return this.dataService.put('/api/currency/'+currency._id,{'currency':currency});
	}
}
