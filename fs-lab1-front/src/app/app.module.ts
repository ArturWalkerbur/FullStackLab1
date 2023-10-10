import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CarsComponent} from "./pages/cars/cars.component";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Add_new_carComponent} from "./components/addNewCar/add_new_car.component";
import {FormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { OwnersComponent } from './pages/owners/owners.component';
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    Add_new_carComponent,
    AboutComponent,
    CarDetailsComponent,
    NavbarComponent,
    OwnersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
