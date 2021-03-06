import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './travels/travel.component';
import { AppComponent } from './app.component';
import { TravelFormComponent } from './travel/travel-form.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
	{ path: '',   redirectTo: '/travels', pathMatch: 'full' },
	{ path: 'travels', component: TravelComponent },
	{ path: 'travel-form/:id', component: TravelFormComponent },
	{ path: 'cart', component: CarritoComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'registration/:id', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
