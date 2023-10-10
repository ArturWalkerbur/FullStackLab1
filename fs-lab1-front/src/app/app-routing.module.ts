import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import {AppComponent} from "./app.component";
import {CarsComponent} from "./pages/cars/cars.component";
import {OwnersComponent} from "./pages/owners/owners.component";

const routes: Routes = [
  {path: '', component: CarsComponent },
  { path: 'details/:id', component: CarDetailsComponent },
  { path: 'home', component: CarsComponent },
  { path: 'owners', component: OwnersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
