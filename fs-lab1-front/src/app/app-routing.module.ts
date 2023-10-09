import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import {AppComponent} from "./app.component";
import {CarsComponent} from "./components/cars/cars.component";

const routes: Routes = [
  {path: '', component: CarsComponent },
  { path: 'details/:id', component: CarDetailsComponent },
  { path: 'home', component: CarsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
