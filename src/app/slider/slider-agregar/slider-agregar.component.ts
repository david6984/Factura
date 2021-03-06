import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../../shared/pattern-validator';
import {Slider} from '../../models/slider';

@Component({
  selector: 'app-slider-agregar',
  templateUrl: './slider-agregar.component.html',
  styleUrls: ['./slider-agregar.component.css']
})
export class SliderAgregarComponent implements OnInit {
	@Output() agregarSlider = new EventEmitter<any>();
	@Output() editarSlider = new EventEmitter<any>();
	public sliderForm: FormGroup;
	@Input() canAdd : boolean = true;
	@Input('selectedSlider') slider: Slider = new Slider();
	public submitted: boolean = false;
	public isEditing: boolean = false;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.sliderForm = this.formBuilder.group({
			_id: new FormControl(undefined),
			imagenUrl: new FormControl('', [Validators.required]),
			longText: new FormControl('', [
				Validators.minLength(1), 
				Validators.maxLength(50)
      ]),
			shortText: new FormControl('', [
						Validators.minLength(1), 
						Validators.maxLength(20)
					])
				});
	}

	onSubmit() {
		if(this.isEditing){
			this.editarSlider.emit({slider:this.sliderForm.value,form:this.sliderForm});
			this.isEditing = false;
		} else {
			console.log('entro al c/agregar/:', this.sliderForm.value);
			this.agregarSlider.emit({slider:this.sliderForm.value,form:this.sliderForm});
		}
		this.submitted = true; 
	}

	ngOnChanges(changes){
		console.log('changes',changes,'slider:',this.slider)
		if(changes.slider && changes.slider.currentValue._id){
			console.log('is editing');
			this.sliderForm.setValue(changes.slider.currentValue);
			this.isEditing = true;
			console.log('entro al onchanges al if: ',this.sliderForm);
		}
	}

	revert(){
		this.sliderForm.reset();
		this.submitted = false;
		this.isEditing = false;
	}

}
