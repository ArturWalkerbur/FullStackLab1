import {Component, OnInit} from '@angular/core';
import {ICar} from "./models/car";
import {HttpClient} from "@angular/common/http";
import {CarsService} from "./services/cars.service";
import {LoginService} from "./services/login.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private rout: ActivatedRoute) { }

  isUserLoggedIn: boolean = false;
  isUserAdmin: boolean = false;

  ngOnInit() {
    const userRole = this.authService.getUserRole();

    if (userRole && userRole === 'ADMIN') {
      this.isUserAdmin = true;
    } else if (this.authService.isAuthenticated()) {
      this.isUserLoggedIn = true;
      this.isUserAdmin = false;
    } else {
      this.isUserLoggedIn = false;
      this.isUserAdmin = false;
    }
  }

}
