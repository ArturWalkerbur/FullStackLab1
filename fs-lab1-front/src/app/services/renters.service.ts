import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {Renter} from "../models/client";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'form-data'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RentersService {

  private renterSubject = new BehaviorSubject<Renter[]>([]);

  constructor(private http: HttpClient) { }

  refreshRenters() {
    this.http.get<Renter[]>('http://localhost:8000/getAllRenters').subscribe(
      (newRenters) => {
        this.renterSubject.next(newRenters);
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
  }

  getRentersData() {
    this.refreshRenters();
    return this.renterSubject.asObservable();
  }

  addNewRenterData(renterData: Renter){
    const body = {id: renterData.id, renterName: renterData.renterName, dateOfBirth: renterData.dateOfBrith, address: renterData.address, cellNumber: renterData.cellNumber, trustedCellNumber: renterData.trustedCellNumber, iin: renterData.iin};
    console.log(body);
    this.http.post<Renter>('http://localhost:8000/addNewRenter', body).subscribe(
      (response) => {
        console.log('Новые данные успешно добавлены:', response);
      },
      (error) => {
        this.refreshRenters();
        console.error('Произошла ошибка при добавлении данных:', error);
      }
    );

  }

  deleteSelectedRenter(id: number) {
    this.http.delete('http://localhost:8000/deleteRenter/'+id).subscribe(
      (response) => {
        console.log('Пользователь успешно удален:', response);
      },
      (error) => {
        this.refreshRenters();
        console.error('Произошла ошибка при удалении пользователя:', error);
      }
    );

  }

  editRenterData(renterData: Renter){
    const body = {id: renterData.id, renterName: renterData.renterName, dateOfBrith: renterData.dateOfBrith, address: renterData.address, cellNumber: renterData.cellNumber, trustedCellNumber: renterData.trustedCellNumber, iin: renterData.iin};
    console.log(body);
    this.http.post<Renter>('http://localhost:8000/editRenter', body).subscribe(
      (response) => {
        console.log('Новые данные успешно обновлены:', response);
      },
      (error) => {
        this.refreshRenters();
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );

  }

  getSelectedRenter(id: number): Observable<any> {
    return this.http.get('http://localhost:8000/getRenter/'+id);
  }



}
