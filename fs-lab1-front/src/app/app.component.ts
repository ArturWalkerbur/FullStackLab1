import {Component, OnInit} from '@angular/core';
import {ICar} from "./models/car";
import {HttpClient} from "@angular/common/http";
import {CarsService} from "./services/cars.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Cars Base';

  cars: ICar[] = [];

  constructor(private carsService: CarsService) { }
  ngOnInit(): void {

    this.carsService.getCarsData().subscribe((cars) => {
        this.cars = cars;
      }
    );
  }



}
