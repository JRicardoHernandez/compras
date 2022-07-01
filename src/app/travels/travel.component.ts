import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/service-travel.service';
import { userInterface } from '../interfaces/busqueda-travel.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'travel-app',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  commentForm: FormGroup;
  title = 'putovanje-app';
  public travels: any[] = [];
  public users: userInterface[] = [];
  idUser: any;
  rate: any = "";
  
  constructor(private cartService: TravelService) {
    this.commentForm = new FormGroup({
		id: new FormControl(''),
		text: new FormControl('', [Validators.required]),
		user: new FormControl('')
	});
  }
  
  ngOnInit() {
	this.idUser = localStorage.getItem('userId');
	this.getListTravel();
    this.commentForm = new FormGroup({
		id: new FormControl(''),
		text: new FormControl(''),
		user: new FormControl(''),
		rate: new FormControl('')
	});
  }
  
  // Add item to the list of travels
  addComment(id: any) {
  console.log(this.commentForm.valid, this.rate)
	if (this.commentForm.valid && this.rate != "") {
		this.commentForm.value['id'] = this.cartService.getLastIdComment(id);
		this.commentForm.value['user'] = localStorage.getItem('userId');
		this.commentForm.value['rate'] = this.rate;
		this.cartService.addComent(id, this.commentForm.value);
		this.commentForm.reset();
		this.cartService.addRateCart(id, this.rate);
		this.rate = "";
	}
  }
  
  // Add rate the item of the shopping cart with the id
  addRate(rate: any) {
	this.rate = rate;
  }
  
  // Remove item from the list of travels
  deleteCart(id: any) {
	this.cartService.delTravel(id);
	setTimeout(() => {
		this.getListTravel();
	}, 400);
  }
  
  // Add item to the list of travels
  addCart(data: any) {
	this.cartService.addCart(data);
  }
  
  // Get the list of the travels
  getListTravel() {
	this.travels = this.cartService.listTravels;
	this.users = this.cartService.listUser;
	console.log(this.users);
  }
  
  // Order the array by 
  orderBy(field: any, fieldType: any) {
	if (fieldType != 'number') {
		this.travels.sort((a, b) => {
		  if(a[field] > b[field]) {
			return 1;
		  } else if(a[field] < b[field]) {
			return -1;
		  } else {
			return 0;
		  }
		});
	} else {
		this.travels.sort((a, b) => {
		  return a[field] - b[field];
		});
	}
	console.log(this.travels);
  }
  
}
