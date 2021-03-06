import { Component, OnInit } from '@angular/core';
import { userInterface } from '../interfaces/busqueda-travel.interface';
import { TravelService } from '../services/service-travel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
	userForm: FormGroup;
	idItem = 'login';
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
  
  loginValid() {
	if (this.userForm.valid) {
		if (this.userForm.value['pass'] == this.userForm.value['confirm']) {
			let validLogin = this.cartService.validLogin(this.userForm.value['email'] , this.userForm.value['pass']);
			if (validLogin) {
				localStorage.setItem('userId', validLogin.id);
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
