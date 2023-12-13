import { Component } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {PasswordChange, User} from "../../models/users";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  constructor(private userService: UserService, private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) { }

  UserDate: User = {
    id: 0,
    email: "",
    password: "",
    username: ""
  }

  PasswordData: PasswordChange = {
    password: "",
    newPassword: "",
    reNewPassword: ""
  }


  ngOnInit(): void {
    this.userService.getUserDetail().subscribe((user) => {
        this.UserDate = user;
      }
    );
  }

  userName = this.authService.getUserName();
  updateSuccess = false;

  onSubmit() {
    this.userService.updatePassword(this.PasswordData);
    this.updateSuccess = true;
    this.cdr.detectChanges();
  }





}
