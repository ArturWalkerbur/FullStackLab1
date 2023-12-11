import { Component } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {ICar} from "../../models/car";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Go anywhere, anytime – your freedom on wheels!';

  constructor(private carsService: CarsService, private router: Router) { }


  cars: ICar[] = [];

  ngOnInit(): void {

    this.carsService.getCarsData().subscribe((cars) => {
        this.cars = cars;
      }
    );
  }

  goToCarInfo(id: number) {
    this.router.navigate(['/carInfo', id]);
  }

}
