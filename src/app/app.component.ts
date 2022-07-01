import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'putovanje-app';
  idUser: any;
  
  constructor() {
	this.idUser = localStorage.getItem('userId');
  }
  
  removeSession() {
	localStorage.removeItem('userId');
  }
  
}
