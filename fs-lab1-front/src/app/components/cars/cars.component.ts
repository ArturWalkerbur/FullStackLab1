import {Component, Input, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {ICar} from "../../models/car";
import { Button, initTE } from "tw-elements";
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
initTE({ Button });

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit{
  title = 'Cars Base';

  constructor(private carsService: CarsService, private router: Router) { }

  deleteSelectedCar(id: number) {
    this.carsService.deleteSelectedCar(id);
  }

  cars: ICar[] = [];

  ngOnInit(): void {

    this.carsService.getCarsData().subscribe((cars) => {
        this.cars = cars;
      }
    );
  }

  goToCarDetail(id: number) {
    this.router.navigate(['/details', id]);
  }

}
