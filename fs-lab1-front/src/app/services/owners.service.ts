import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {Owner} from "../models/client";
import {AuthService} from "./auth.service";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'form-data'
  })
};

@Injectable({
  providedIn: 'root'
})

export class OwnersService {

  private ownerSubject = new BehaviorSubject<Owner[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) { }

  refreshOwners() {
    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Owner[]>('http://localhost:8082/owners-server/getAllOwners', {headers}).subscribe(
      (newOwners) => {
        this.ownerSubject.next(newOwners);
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
  }

  getOwnersData() {
    this.refreshOwners();
    return this.ownerSubject.asObservable();
  }


  addNewOwnerData(ownerData: Owner){

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: ownerData.id, ownerName: ownerData.ownerName, dateOfBirth: (ownerData.dateOfBrith.toString()), address: ownerData.address, cellNumber: ownerData.cellNumber, user_id: ownerData.user_id};
    console.log(body);
    this.http.post<Owner>('http://localhost:8082/owners-server/addNewOwner', body, {headers}).subscribe(
      (response) => {
        console.log('Новые данные успешно добавлены:', response);
      },
      (error) => {
        this.refreshOwners();
        console.error('Произошла ошибка при добавлении данных:', error);
      }
    );
  }

  deleteSelectedOwner(id: number) {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.delete('http://localhost:8082/owners-server/deleteOwner/'+id, {headers}).subscribe(
      (response) => {
        console.log('Пользователь успешно удален:', response);
      },
      (error) => {
        this.refreshOwners();
        console.error('Произошла ошибка при удалении пользователя:', error);
      }
    );

  }

  editOwnerData(ownerData: Owner){

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: ownerData.id, ownerName: ownerData.ownerName, dateOfBrith: ownerData.dateOfBrith, address: ownerData.address, cellNumber: ownerData.cellNumber, user_id: ownerData.user_id};
    console.log(body);
    this.http.post<Owner>('http://localhost:8082/owners-server/editOwner', body, {headers}).subscribe(
      (response) => {
        console.log('Новые данные успешно обновлены:', response);
      },
      (error) => {
        this.refreshOwners();
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );
  }

  getSelectedOwner(id: number): Observable<any> {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get('http://localhost:8082/owners-server/getOwner/'+id, {headers});
  }



}
