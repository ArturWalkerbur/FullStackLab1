import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {ICar} from "../models/car";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent {

  title = 'Update Car';

  carData: ICar= {
    id: 0,
    carname: '',
    model: '',
    year: 0,
    volume: 0
  };

  constructor(private carsService: CarsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id']; // Извлекаем id машины
      this.carsService.getSelectedCar(id).subscribe(
        (response) => {
          this.carData = response;
        },
        (error) => {
          console.error('Произошла ошибка при удалении машины:', error);
        }
      );
    });
  }

  onSubmit(){
    this.carsService.editCarData(this.carData);
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }

}
