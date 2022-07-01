import { Injectable } from '@angular/core';
import { travelInterface, userInterface } from '../interfaces/busqueda-travel.interface';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
	listTravels: travelInterface[] = [
		{
			id: '1',
			typeName: 'avion',
			description: 'Iz Beograda za Egipat avionom sve ukljuceno',
			distance: '3300',
			price: '280',
			timeTravel: '6',
			destiny: 'Egipat',
			status: 'Predstojece',
			rate: '',
			opinion: []
		}, 
		{
			id: '2',
			typeName: 'voz',
			description: 'Iz Beograda za Beč vozom',
			distance: '614',
			price: '30',
			timeTravel: '7',
			destiny: 'Bec',
			status: 'Predstojece',
			rate: '',
			opinion: []
		},
		{
			id: '3',
			typeName: 'autobus',
			description: 'Iz Beograda za Maribor autobusom-sve ukljuceno',
			distance: '511',
			price: '40',
			timeTravel: '5',
			destiny: 'Maribor',
			status: 'Predstojece',
			rate: '',
			opinion: []
		},
		{
			id: '4',
			typeName: 'avion',
			description: 'iz Beograda za Kankun avionom i uzinom',
			distance: '9640',
			price: '340',
			timeTravel: '11',
			destiny: 'Kankun',
			status: 'Predstojece',
			rate: '',
			opinion: []
		},
		{
			id: '5',
			typeName: 'autobus',
			description: 'Iz Beograda za Istambul autobusom',
			distance: '948',
			price: '90',
			timeTravel: '10',
			destiny: 'Istambul',
			status: 'Predstojece',
			rate: '',
			opinion: []
		}, 
		{
			id: '6',
			typeName: 'avion',
			description: 'Iz Beograda za Pariz avionom',
			distance: '1445',
			price: '150',
			timeTravel: '6',
			destiny: 'Paiz',
			status: 'Predstojece',
			rate: '',
			opinion: []
		},
		{
			id: '7',
			typeName: 'autobus',
			description: 'Iz Beograda za Budvu autobusom',
			distance: '532',
			price: '30',
			timeTravel: '9',
			destiny: 'Budvu',
			status: 'Predstojece',
			rate: '',
			opinion: []
		},
		{
			id: '8',
			typeName: 'avion',
			description: 'Iz Beograda za Zanzibar avionom sve ukljuceno',
			distance: '5970',
			price: '850',
			timeTravel: '16',
			destiny: 'Zanzibar',
			status: 'Predstojece',
			rate: '',
			opinion: []
		},
		{
			id: '9',
			typeName: 'voz',
			description: 'Iz Beograda za Ljubljanu vozom',
			distance: '532',
			price: '30',
			timeTravel: '13',
			destiny: 'Ljubljanu',
			status: 'Predstojece',
			rate: '',
			opinion: []
		},
		{
			id: '10',
			typeName: 'autobus',
			description: 'Iz Beograda za Minhen autobusom',
			distance: '939',
			price: '80',
			timeTravel: '9',
			destiny: 'Minhen',
			status: 'Predstojece',
			rate: '',
			opinion: []
		}
	];
	
	listUser: userInterface[] = [
		{
			id: '1',
			name: 'Administrator',
			lastName: 'Admin',
			tel: '63632834',
			email: 'admin@travel.com',
			pass: '12345',
			favorite: []
		},
		{
			id: '2',
			name: 'Marija',
			lastName: 'Stevic',
			tel: '63878755',
			email: 'marija@gmail.com',
			pass: '12345',
			favorite: []
		}
	];
	
	constructor() { }
	
	// Add one user to the list
	addUser(data: any) {
		this.listUser.push(data);
		alert('Users added to the list of users correctly.');
	}
	
	// Edit one user from the list
	editUser(data: any) {
		let pos: any;
		for (var i=0; this.listUser.length > i; i++) {
			if (this.listUser[i].id == data.id) {
				pos = i;
			}
		}
		this.listUser[pos] = data;
	}
	
	// Get user by id
	validLogin(email: string, pass: string) {
		let user: any;
		for (var i=0; this.listUser.length > i; i++) {
			if (this.listUser[i].email == email && this.listUser[i].pass == pass) {
				user = this.listUser[i];
			}
		}
		return user;
	}
	
	// Get user by id
	getItemByIdUser(id: string) {
		let user: any;
		for (var i=0; this.listUser.length > i; i++) {
			if (this.listUser[i].id == id) {
				user = this.listUser[i];
			}
		}
		return user;
	}
	
	// Get the last id in the list of user
	getLastIdUser() {
		let res: any = '1';
		if (this.listUser.length > 0) {
			res = this.listUser[this.listUser.length-1].id;
		}
		return res;
	}
	
	// Add one travel to the list
	addTravel(data: any) {
		this.listTravels.push(data);
		alert('Travel added to the list correctly.');
	}
	
	// Add comment for a travel
	addComent(id: any, comment: any) {
		if (!localStorage.getItem('userId')) {
			this.messageErrorSesion();
			return;
		}
		for (var i=0; this.listTravels.length > i; i++) {
			if (this.listTravels[i].id == id) {
				this.listTravels[i].opinion.push(comment);
			}
		}
		alert('Comment added to the travel correctly.');
	}
	
	// Get the last id in the list of travel
	getLastIdComment(id: any) {
		let res: any = '1';
		for (var i=0; this.listTravels.length > i; i++) {
			if (this.listTravels[i].id == id) {
				if (this.listTravels[i].opinion.length) {
					res = this.listTravels[i].opinion[this.listTravels[i].opinion.length-1].id;
				}
			}
		}
		return res;
	}
	
	// Edit one travel from the list
	editTravel(data: any) {
		if (!localStorage.getItem('userId')) {
			this.messageErrorSesion();
			return;
		}
		let pos: any;
		for (var i=0; this.listTravels.length > i; i++) {
			if (this.listTravels[i].id == data.id) {
				pos = i;
			}
		}
		this.listTravels[pos] = data;
		alert('Travel edit correctly.');
	}
	
	// Get the last id in the list of travel
	getLastId() {
		let res: any = '1';
		if (this.listTravels.length > 0) {
			res = this.listTravels[this.listTravels.length-1].id;
		}
		return res;
	}
	
	// Get item by id
	getItemById(id: string) {
		let item: any;
		for (var i=0; this.listTravels.length > i; i++) {
			if (this.listTravels[i].id == id) {
				item = this.listTravels[i];
			}
		}
		return item;
	}
	
	// Delete one travel
	delTravel(id: string) {
		let pos;
		for (var i=0; this.listTravels.length > i; i++) {
			if (this.listTravels[i].id == id) {
				pos = i;
			}
		}
		if (pos || pos == 0) {
			this.listTravels.splice(pos, 1);
		}
	}

	// Add the list of cart shop
	addCart(data: any) {
		if (!localStorage.getItem('userId')) {
			this.messageErrorSesion();
			return;
		}
		var arrayCart = this.reviewCart(data);
		if (arrayCart[0]) {
			if (!arrayCart[0].ins) {
				data['count'] = 1;
				arrayCart.push(data);
			} else {
				arrayCart = arrayCart[0].dt;
			}
		} else {
			if (arrayCart.length == 0) {
				data['count'] = 1;
				arrayCart.push(data);
			}
		}
		localStorage.setItem("listCart", JSON.stringify(arrayCart));
		alert('Travel added to the cart correctly.');
	}

	deleteCart(id: any) {
		var stringCart = localStorage.getItem('listCart');
		if(stringCart) {
			var cart = JSON.parse(stringCart);
			if (cart) {
				var arrayCart = [];
				for (var i=0; cart.length > i; i++) {
					if (typeof cart[i] === 'object' && cart[i] !== null) {
						var object = cart[i];
					} else {
						var object = JSON.parse(cart[i]);
					}
					if (object.id == id && id != null) {
						if (object.count > 1) {
							var countPlus = object.count - 1;
							object.count = countPlus;
						}
					} else {
						arrayCart.push(object);
					}
				}
				console.log(arrayCart);
				if (arrayCart.length == 0) {
					localStorage.removeItem("listCart");
				} else {
					localStorage.setItem("listCart", JSON.stringify(arrayCart));	
				}
			}
		}
		alert('Travel delete correctly.');
	}
	
	// Change the status for the travel on the shopping cart
	changeStatusCart(id: any, status: string) {
		var stringCart = localStorage.getItem('listCart');
		if(stringCart) {
			var cart = JSON.parse(stringCart);
			if (cart) {
				var arrayCart = [];
				for (var i=0; cart.length > i; i++) {
					if (typeof cart[i] === 'object' && cart[i] !== null) {
						var object = cart[i];
					} else {
						var object = JSON.parse(cart[i]);
					}
					if (object.id == id && id != null) {
						object.status = status;
						arrayCart.push(object);
					} else {
						arrayCart.push(object);
					}
				}
				localStorage.setItem("listCart", JSON.stringify(arrayCart));
			}
		}
	}
	
	// Add rate to the travel on the shopping cart
	addRateCart(id: any, rate: string) {
		var stringCart = localStorage.getItem('listCart');
		if(stringCart) {
			var cart = JSON.parse(stringCart);
			if (cart) {
				var arrayCart = [];
				for (var i=0; cart.length > i; i++) {
					if (typeof cart[i] === 'object' && cart[i] !== null) {
						var object = cart[i];
					} else {
						var object = JSON.parse(cart[i]);
					}
					if (object.id == id && id != null) {
						object.rate = rate;
						arrayCart.push(object);
					} else {
						arrayCart.push(object);
					}
				}
				localStorage.setItem("listCart", JSON.stringify(arrayCart));
			}
		}
	}
	
	// Review the list of cart shop
	reviewCart(data: any = null) {
		var dataCart = localStorage.getItem('listCart');
		if (dataCart) {
			var cart = JSON.parse(dataCart);
			if (cart) {
				var arrayCart = [];
				var insert = false;
				for (var i=0; cart.length > i; i++) {
					if (typeof cart[i] === 'object' && cart[i] !== null) {
						var object = cart[i];
					} else {
						var object = JSON.parse(cart[i]);
					}
					if (data != null) {
						if (object.id == data.id) {
							var actualPosition = object.count + 1;
							object.count = actualPosition;
							insert = true;
							console.log(object);
							arrayCart[i] = object;
						} else {
							arrayCart.push(object);
						}
					} else {
						arrayCart.push(object);
					}
				}
				console.log(arrayCart);
				if (insert) {
					return [{ ins: insert, dt: arrayCart}];
				} else {
					return arrayCart;
				}
			} else {
				return [];
			}
		} else {
			return [];
		}
	}
	
	// Message of error
	messageErrorSesion() {
		alert('Need sesion for this action. Login or Registration.');
	}

}