import { Component, OnInit } from '@angular/core';
import { travelInterface } from '../interfaces/busqueda-travel.interface';
import { TravelService } from '../services/service-travel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'travel-form-app',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent implements OnInit {
	travelForm: FormGroup;
	idItem = 'new';
	item: travelInterface = {
		id: '',
		typeName: '',
		description: '',
		distance: '',
		price: '',
		timeTravel: '',
		status: '',
		rate: '',
		opinion: []
	};
  
  constructor(private cartService: TravelService, private router: Router, private route: ActivatedRoute) {
    this.travelForm = new FormGroup({
		id: new FormControl((this.item.id != '') ? this.item.id : ''),
		typeName: new FormControl((this.item.typeName != '') ? this.item.typeName : '', [Validators.required]),
		description: new FormControl((this.item.description != '') ? this.item.description : '', [Validators.required]),
		distance: new FormControl((this.item.distance != '') ? this.item.distance : '', [Validators.required]),
		price: new FormControl((this.item.price != '') ? this.item.price : '', [Validators.required]),
		timeTravel: new FormControl((this.item.timeTravel != '') ? this.item.timeTravel : '', [Validators.required]),
		status: new FormControl((this.item.status != '') ? this.item.status : '', [Validators.required]),
	});
  }
  
  // Init the component
  ngOnInit() {
	this.idItem = this.route.snapshot.params['id'];
	if (this.idItem != 'new') {
		this.item = this.cartService.getItemById(this.idItem);
	}
    this.travelForm = new FormGroup({
		id: new FormControl((this.item.id != '') ? this.item.id : ''),
		typeName: new FormControl((this.item.typeName != '') ? this.item.typeName : '', [Validators.required]),
		description: new FormControl((this.item.description != '') ? this.item.description : '', [Validators.required]),
		distance: new FormControl((this.item.distance != '') ? this.item.distance : '', [Validators.required]),
		price: new FormControl((this.item.price != '') ? this.item.price : '', [Validators.required]),
		timeTravel: new FormControl((this.item.timeTravel != '') ? this.item.timeTravel : '', [Validators.required]),
		status: new FormControl((this.item.status != '') ? this.item.status : '', [Validators.required]),
	});
  }
  
  saveTravel() {
	if (this.travelForm.valid) {
		this.travelForm.value['id'] = parseInt(this.cartService.getLastId()) + 1;
		console.log(this.travelForm.value);
		if (this.travelForm.value.id) {
			if (this.idItem == 'new') {
				this.travelForm.value['opinion'] = [];
				this.cartService.addTravel(this.travelForm.value);
			} else {
				this.cartService.editTravel(this.travelForm.value);
			}
			setTimeout(() => {
				this.travelForm.reset();
				this.router.navigate(['/', 'viajes']);
			}, 400);
		}
	}
  }
  
}
