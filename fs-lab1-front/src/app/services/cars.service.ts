import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ICar } from '../models/car';
import { ICarWithoutId } from '../models/car';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {AuthService} from "./auth.service";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'form-data'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private carsSubject = new BehaviorSubject<ICar[]>([]);

  refreshCars() {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<ICar[]>('http://localhost:8082/car-server/getAllCars', { headers }).subscribe(
      (newCars) => {
        this.carsSubject.next(newCars);
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
  }

  getCarsData() {
    this.refreshCars();
    return this.carsSubject.asObservable();
  }

  addNewCarData(carData: ICar){

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: carData.id, carname: carData.carname, model: carData.model, year: carData.year, volume: carData.volume};
    console.log(body);
    this.http.post<ICar>('http://localhost:8082/car-server/addNewCar', body, { headers }).subscribe(
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

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.delete('http://localhost:8082/car-server/deleteCar/'+id, { headers }).subscribe(
      (response) => {
        console.log('Машина успешно удалена:', response);
      },
      (error) => {
        this.refreshCars();
        console.error('Произошла ошибка при удалении машины:', error);
      }
    );

  }

  editCarData(carData: ICar){

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: carData.id, carname: carData.carname, model: carData.model, year: carData.year, volume: carData.volume};
    console.log(body);
    this.http.post<ICar>('http://localhost:8082/car-server/editCar', body, { headers }).subscribe(
      (response) => {
        console.log('Новые данные успешно обновлены:', response);
      },
      (error) => {
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );


  }

  getSelectedCar(id: number): Observable<any> {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get('http://localhost:8082/car-server/getCar/'+id, { headers });
  }

  test(data: number){
    let params = new HttpParams().set('number', data);
    let url = `http://localhost:8000/test?${params.toString()}`;
    const body = {"number": data};
    console.log(body);
    return this.http.post(url, body, httpOptions);
  }

}
