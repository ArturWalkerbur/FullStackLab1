import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {Owner} from "../models/client";


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

  constructor(private http: HttpClient) { }

  refreshOwners() {
    this.http.get<Owner[]>('http://localhost:8000/getAllOwners').subscribe(
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
    const body = {id: ownerData.id, ownerName: ownerData.ownerName, dateOfBirth: (ownerData.dateOfBrith.toString()), address: ownerData.address, cellNumber: ownerData.cellNumber};
    console.log(body);
    this.http.post<Owner>('http://localhost:8000/addNewOwner', body).subscribe(
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
    this.http.delete('http://localhost:8000/deleteOwner/'+id).subscribe(
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
    const body = {id: ownerData.id, ownerName: ownerData.ownerName, dateOfBrith: ownerData.dateOfBrith, address: ownerData.address, cellNumber: ownerData.cellNumber};
    console.log(body);
    this.http.post<Owner>('http://localhost:8000/editOwner', body).subscribe(
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
    return this.http.get('http://localhost:8000/getOwner/'+id);
  }



}
