import { Component } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class NavbarComponent2 {

  constructor(private authService: AuthService, private router: Router) { }

  userName = this.authService.getUserName();




}
