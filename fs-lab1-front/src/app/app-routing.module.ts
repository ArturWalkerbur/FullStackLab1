import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import {AppComponent} from "./app.component";
import {CarsComponent} from "./pages/cars/cars.component";
import {OwnersComponent} from "./pages/owners/owners.component";
import {RentersComponent} from "./pages/renters/renters.component";
import {OwnerDetailsComponent} from "./pages/owner-details/owner-details.component";
import {RenterDetailsComponent} from "./pages/renter-details/renter-details.component";
import {OwnershipComponent} from "./pages/ownership/ownership.component";
import {OwnershipDetailsComponent} from "./pages/ownership-details/ownership-details.component";
import {RentalComponent} from "./pages/rental/rental.component";
import {RentalDetailsComponent} from "./pages/rental-details/rental-details.component";

const routes: Routes = [
  {path: '', component: CarsComponent },
  { path: 'details/:id', component: CarDetailsComponent },
  { path: 'home', component: CarsComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'renters', component:  RentersComponent},
  { path: 'owners/:id', component:  OwnerDetailsComponent},
  { path: 'renters/:id', component:  RenterDetailsComponent},
  { path: 'ownership', component:  OwnershipComponent},
  { path: 'ownership/:id', component:  OwnershipDetailsComponent},
  { path: 'rental', component:  RentalComponent},
  { path: 'rental/:id', component: RentalDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
