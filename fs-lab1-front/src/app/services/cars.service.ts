import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ICar } from '../models/car';
import { ICarWithoutId } from '../models/car';
import {BehaviorSubject} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'form-data'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  private carsSubject = new BehaviorSubject<ICar[]>([]);

  refreshCars() {
    this.http.get<ICar[]>('http://localhost:8000/getAllCars').subscribe(
      (newCars) => {
        this.carsSubject.next(newCars);
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
  }

  constructor(private http: HttpClient) { }

  getCarsData() {
    this.refreshCars();
    return this.carsSubject.asObservable();
  }

  addNewCarData(carData: ICar){
    const body = {id: carData.id, carname: carData.carname, model: carData.model, year: carData.year, volume: carData.volume};
    console.log(body);
    this.http.post<ICar>('http://localhost:8000/addNewCar', body).subscribe(
      (response) => {
        console.log('Новые данные успешно добавлены:', response);
      },
      (error) => {
        this.refreshCars();
        console.error('Произошла ошибка при добавлении данных:', error);
      }
    );


  }

  deleteSelectedCar(id: number) {
    this.http.delete('http://localhost:8000/deleteCar/'+id).subscribe(
      (response) => {
        console.log('Машина успешно удалена:', response);
      },
      (error) => {
        this.refreshCars();
        console.error('Произошла ошибка при удалении машины:', error);
      }
    );

  }

  test(data: number){
    let params = new HttpParams().set('number', data);
    let url = `http://localhost:8000/test?${params.toString()}`;
    const body = {"number": data};
    console.log(body);
    return this.http.post(url, body, httpOptions);
  }

}
