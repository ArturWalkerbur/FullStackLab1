import {Component, OnInit} from "@angular/core";
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})

export class LogoutComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {

    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
