import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import {CarsComponent} from "./components/cars/cars.component";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Add_new_carComponent} from "./components/addNewCar/add_new_car.component";
import {FormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    Add_new_carComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
