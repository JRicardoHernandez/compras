import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/service-travel.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'carrito-app',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  title = 'putovanje-app';
  travels:any[] = [];
  total = 0;
  deviceMovil: boolean = false;
  
  constructor(private cartService: TravelService, public mediaObserver:MediaObserver) {
	this.listCart();
  }
  
  ngOnInit() {
	this.mediaObserver.media$.subscribe((result: MediaChange) => {
		if (result.mqAlias == 'sm' || result.mqAlias == 'xs') {
			this.deviceMovil = true;
		} else {
			this.deviceMovil = false;
		}
	});
  }
  
  // Delete the item of the shopping cart with the id
  deleteCart(id: any) {
	this.cartService.deleteCart(id);
	setTimeout(() => {
		this.listCart();
	}, 400);
  }
  
  // Get the list of items in the shopping cart
  listCart() {
	var res = this.cartService.reviewCart();
	if (res) {
		this.travels = res;
		console.log(this.travels);
		this.total = 0;
		for (var i=0; this.travels.length > i; i++) {
			this.total = this.total + this.travels[i].price * this.travels[i].count;
		}
	}
  }
  
  // Finished the item of the shopping cart with the id
  finishedCart(id: any) {
	this.cartService.changeStatusCart(id, 'Zavrseno');
	setTimeout(() => {
		this.listCart();
	}, 400);
  }
  
  // Cancel the item of the shopping cart with the id
  cancelCart(id: any) {
	this.cartService.changeStatusCart(id, 'Otkazano');
	setTimeout(() => {
		this.listCart();
	}, 400);
  }
  
  // Add rate the item of the shopping cart with the id
  addRate(id: any, rate: any) {
	this.cartService.addRateCart(id, rate);
	setTimeout(() => {
		this.listCart();
	}, 400);
  }
  
}
