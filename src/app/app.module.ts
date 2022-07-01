import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travels/travel.component';
import { TravelFormComponent } from './travel/travel-form.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
	TravelComponent,
	TravelFormComponent,
	CarritoComponent,
	LoginComponent,
	RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
