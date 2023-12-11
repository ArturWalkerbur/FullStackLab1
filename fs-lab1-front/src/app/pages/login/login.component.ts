import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {LoginService} from "../../services/login.service";
import {ICar} from "../../models/car";
import {UserLogin, UserRegistration} from "../../models/users";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userData: UserLogin= {
    email: "",
    password: ""
  };

  userData2: UserRegistration= {
    email: "",
    password: "",
    username: "",
    rePassword: ""
  };

  constructor(private loginService: LoginService, private rout: ActivatedRoute) { }

  onSubmit() {
    this.loginService.login(this.userData);
  }

  onSubmit2() {
    this.loginService.registration(this.userData2);
  }

  registrationSuccess = false;

  ngOnInit() {
    this.rout.queryParams.subscribe(params => {
      this.registrationSuccess = params['registration_success'] === 'true';
    });
  }


}
