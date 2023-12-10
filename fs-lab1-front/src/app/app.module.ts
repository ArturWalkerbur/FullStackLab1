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
import { RentersComponent } from './pages/renters/renters.component';
import {Add_new_ownerComponent} from "./components/addNewOwner/add_new_owner.component";
import {Add_new_renterComponent} from "./components/addNewRnter/add_new_renter.component";
import {OwnerDetailsComponent} from "./pages/owner-details/owner-details.component";
import {RenterDetailsComponent} from "./pages/renter-details/renter-details.component";
import { OwnershipComponent } from './pages/ownership/ownership.component';
import { RentalComponent } from './pages/rental/rental.component';
import {Add_new_ownershipComponent} from "./components/addNewOwnership/add_new_ownership.component";
import { OwnershipDetailsComponent } from './pages/ownership-details/ownership-details.component';
import { RentalDetailsComponent } from './pages/rental-details/rental-details.component';
import {Add_new_rentalComponent} from "./components/addNewRental/add_new_rental.component";
import { LoginComponent } from './pages/login/login.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    Add_new_carComponent,
    AboutComponent,
    CarDetailsComponent,
    NavbarComponent,
    OwnersComponent,
    RentersComponent,
    Add_new_ownerComponent,
    Add_new_renterComponent,
    OwnerDetailsComponent,
    RenterDetailsComponent,
    OwnershipComponent,
    RentalComponent,
    Add_new_ownershipComponent,
    OwnershipDetailsComponent,
    Add_new_rentalComponent,
    RentalDetailsComponent,
    LoginComponent,
    SingUpComponent
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
