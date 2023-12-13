import {ChangeDetectorRef, Component} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {ICar} from "../../models/car";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Go anywhere, anytime – your freedom on wheels!';

  constructor(private carsService: CarsService, private router: Router, private userService: UserService, private cdr: ChangeDetectorRef) { }


  cars: ICar[] = [];

  ngOnInit(): void {

    this.carsService.getCarsData().subscribe((cars) => {
        this.cars = cars;
      }
    );
  }

  bookSuccess = false;
  partnerSuccess = false;

  bookCar() {
    this.bookSuccess = this.userService.carBooking();
    this.cdr.detectChanges();
  }

  onClick() {
    this.partnerSuccess = this.userService.becamePartner();
    this.cdr.detectChanges();
  }


}
