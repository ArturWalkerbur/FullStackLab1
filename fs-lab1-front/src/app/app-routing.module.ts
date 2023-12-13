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
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./guards/authGuard";
import {AdminGuard} from "./guards/adminGuard";
import {LogoutComponent} from "./components/logout/logout.component";
import {UserGuard} from "./guards/userGuard";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {path: '', component: CarsComponent, canActivate: [AdminGuard]},
  { path: 'details/:id', component: CarDetailsComponent, canActivate: [AdminGuard] },
  { path: 'cars', component: CarsComponent, canActivate: [AdminGuard] },
  { path: 'owners', component: OwnersComponent, canActivate: [AdminGuard] },
  { path: 'renters', component:  RentersComponent, canActivate: [AdminGuard]},
  { path: 'owners/:id', component:  OwnerDetailsComponent, canActivate: [AdminGuard]},
  { path: 'renters/:id', component:  RenterDetailsComponent, canActivate: [AdminGuard]},
  { path: 'ownership', component:  OwnershipComponent, canActivate: [AdminGuard]},
  { path: 'ownership/:id', component:  OwnershipDetailsComponent, canActivate: [AdminGuard]},
  { path: 'rental', component:  RentalComponent, canActivate: [AdminGuard]},
  { path: 'rental/:id', component: RentalDetailsComponent, canActivate: [AdminGuard]},
  { path: 'login', component: LoginComponent, canActivate: [UserGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, AdminGuard, UserGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
