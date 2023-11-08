import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {ICar} from "../models/car";
import {Rental, RentalWhithObjects} from "../models/ownership-rental";
import {Renter} from "../models/client";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'form-data'
  })
};

@Injectable({
  providedIn: 'root'
})


export class RentalService{

  private rentalSubject = new BehaviorSubject<RentalWhithObjects[]>([]);

  constructor(private http: HttpClient) { }

  refreshRentals() {
    this.http.get<RentalWhithObjects[]>('http://localhost:8000/getAllRentals').subscribe(
      (newRentals) => {
        this.rentalSubject.next(newRentals);
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
  }

  getRentalsData() {
    this.refreshRentals();
    return this.rentalSubject.asObservable();
  }


  addNewRentalData(rentalData: Rental){
    const body = {id: rentalData.id, car_id: rentalData.car, renter_id: rentalData.renter, rentalStartDate: (rentalData.rentalStartDate.toString()), rentalEndDate: (rentalData.rentalEndDate.toString())};
    console.log(body);
    this.http.post<Rental>('http://localhost:8000/addNewRental', body).subscribe(
      (response) => {
        console.log('Новые данные успешно добавлены:', response);
      },
      (error) => {
        this.refreshRentals();
        console.error('Произошла ошибка при добавлении данных:', error);
      }
    );
  }

  deleteSelectedRental(id: number) {
    this.http.delete('http://localhost:8000/deleteRental/'+id).subscribe(
      (response) => {
        console.log('Данные успешно удалены:', response);
      },
      (error) => {
        this.refreshRentals();
        console.error('Произошла ошибка при удалении данных:', error);
      }
    );

  }

  editRentalData(rentalData: RentalWhithObjects){
    const body = {id: rentalData.id, car: rentalData.car, renter: rentalData.renter, rentalStartDate: (rentalData.rentalStartDate.toString()), rentalEndDate: (rentalData.rentalEndDate.toString())};
    console.log(body);
    this.http.post<Rental>('http://localhost:8000/editRental', body).subscribe(
      (response) => {
        console.log('Новые данные успешно обновлены:', response);
      },
      (error) => {
        this.refreshRentals();
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );
  }

  getSelectedRental(id: number): Observable<any> {
    return this.http.get('http://localhost:8000/getRental/'+id);
  }

  getCarList(): Observable<any> {
    return this.http.get<ICar[]>('http://localhost:8000/getAllCars');
  }

  getRenterList(): Observable<any> {
    return this.http.get<Renter[]>('http://localhost:8000/getAllRenters');
  }

}
