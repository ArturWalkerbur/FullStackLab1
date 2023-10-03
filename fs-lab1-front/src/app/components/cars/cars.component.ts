import {Component, Input, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {ICar} from "../../models/car";
import { Button, initTE } from "tw-elements";
import {CarsService} from "../../services/cars.service";
initTE({ Button });

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent  {
  @Input() cars: ICar[]

  constructor(private carsService: CarsService) { }

  deleteSelectedCar(id: number) {
    this.carsService.deleteSelectedCar(id);
  }

}
