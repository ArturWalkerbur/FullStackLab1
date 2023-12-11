import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {Renter} from "../models/client";
import {AuthService} from "./auth.service";


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

  constructor(private http: HttpClient, private authService: AuthService) { }

  refreshRenters() {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Renter[]>('http://localhost:8082/renter-server/getAllRenters', {headers}).subscribe(
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

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: renterData.id, renterName: renterData.renterName, dateOfBirth: renterData.dateOfBrith, address: renterData.address, cellNumber: renterData.cellNumber, trustedCellNumber: renterData.trustedCellNumber, iin: renterData.iin, user_id: renterData.user_id};
    console.log(body);
    this.http.post<Renter>('http://localhost:8082/renter-server/addNewRenter', body, {headers}).subscribe(
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

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.delete('http://localhost:8082/renter-server/deleteRenter/'+id, {headers}).subscribe(
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

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: renterData.id, renterName: renterData.renterName, dateOfBrith: renterData.dateOfBrith, address: renterData.address, cellNumber: renterData.cellNumber, trustedCellNumber: renterData.trustedCellNumber, iin: renterData.iin, user_id: renterData.user_id};
    console.log(body);
    this.http.post<Renter>('http://localhost:8082/renter-server/editRenter', body, {headers}).subscribe(
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

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get('http://localhost:8082/renter-server/getRenter/'+id, {headers});
  }



}
