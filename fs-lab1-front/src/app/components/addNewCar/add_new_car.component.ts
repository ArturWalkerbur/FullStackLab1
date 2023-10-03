import { Component } from '@angular/core';
import {ICar, ICarWithoutId} from '../../models/car';
import {CarsComponent} from "../cars/cars.component";
import {CarsService} from "../../services/cars.service";
@Component({
  selector: 'app-addnewcar',
  templateUrl: './add_new_car.component.html',
})


export class Add_new_carComponent {
  carData: ICar= {
    id: 0,
    carname: '',
    model: '',
    year: 0,
    volume: 0
  };

  constructor(private carsService: CarsService) { }

  onSubmit() {
    this.carsService.addNewCarData(this.carData);
  }

  /*onSubmit() {
    this.carsService.test(3).subscribe(
      (response) => {
        console.log('Новые данные успешно добавлены:', response);
      },
      (error) => {
        console.error('Произошла ошибка при добавлении данных:', error);
      }
    );
  }*/
}
