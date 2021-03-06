import { Component, OnInit } from '@angular/core';
import { userInterface } from '../interfaces/busqueda-travel.interface';
import { TravelService } from '../services/service-travel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'registration-app',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
	userForm: FormGroup;
	idItem = 'registration';
	login = true;
	edit = false;
	user: userInterface = {
		id: '',
		name: '',
		lastName: '',
		tel: '',
		email: '',
		pass: '',
		favorite: []
	};
  
  constructor(private cartService: TravelService, private router: Router, private route: ActivatedRoute) {
    this.userForm = new FormGroup({
		id: new FormControl(''),
		name: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl('', [Validators.required]),
		tel: new FormControl(''),
		pass: new FormControl('', [Validators.required]),
		confirm: new FormControl('', [Validators.required])
	});
  }
  
  // Init the component
  ngOnInit() {
	this.idItem = this.route.snapshot.params['id'];
	if (this.idItem == 'registration') {
		this.login = false;
	} else {
		this.edit = true;
		this.user = this.cartService.getItemByIdUser(this.idItem);
	}
    this.userForm = new FormGroup({
		id: new FormControl((this.user.id != '') ? this.user.id : ''),
		name: new FormControl((this.user.name != '') ? this.user.name : ''),
		lastName: new FormControl((this.user.lastName != '') ? this.user.lastName : ''),
		email: new FormControl((this.user.email != '') ? this.user.email : '', [Validators.required]),
		tel: new FormControl((this.user.tel != '') ? this.user.tel : ''),
		pass: new FormControl((this.user.pass != '') ? this.user.pass : '', [Validators.required]),
		confirm: new FormControl((this.user.confirm != '') ? this.user.confirm : '', [Validators.required])
	});
  }
  
  saveAccount() {
	if (this.userForm.valid) {
		if (this.userForm.value['pass'] == this.userForm.value['confirm']) {
			console.log(this.userForm.value);
			if (this.idItem == 'registration') {
				this.userForm.value['id'] = parseInt(this.cartService.getLastIdUser()) + 1;
				this.cartService.addUser(this.userForm.value);
				if (this.userForm.value['id']) {
					localStorage.setItem('userId', this.userForm.value['id']);
				}
			} else {
				if (this.edit) {
					this.cartService.editUser(this.userForm.value);
				}
			}
			setTimeout(() => {
				this.userForm.reset();
				this.router.navigate(['/', 'viajes']);
			}, 400);
		}
	}
	console.log(this.userForm.value);
  }
  
}
