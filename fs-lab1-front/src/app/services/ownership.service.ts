import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {Owner} from "../models/client";
import {Ownership, OwnershipWhithObjects} from "../models/ownership-rental";
import {ICar} from "../models/car";
import {AuthService} from "./auth.service";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'form-data'
  })
};

@Injectable({
  providedIn: 'root'
})


export class OwnershipService{

  private ownershipSubject = new BehaviorSubject<OwnershipWhithObjects[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) { }

  refreshOwnerships() {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<OwnershipWhithObjects[]>('http://localhost:8082/owners-server/getAllOwnerships', {headers}).subscribe(
      (newOwnerships) => {
        this.ownershipSubject.next(newOwnerships);
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
  }

  getOwnershipsData() {
    this.refreshOwnerships();
    return this.ownershipSubject.asObservable();
  }


  addNewOwnershipData(ownershipData: Ownership){

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: ownershipData.id, car_id: ownershipData.car, owner_id: ownershipData.owner, ownershipStartDate: (ownershipData.ownershipStartDate.toString()), ownershipEndDate: (ownershipData.ownershipEndDate.toString())};
    console.log(body);
    this.http.post<Ownership>('http://localhost:8082/owners-server/addNewOwnership', body, {headers}).subscribe(
      (response) => {
        console.log('Новые данные успешно добавлены:', response);
      },
      (error) => {
        this.refreshOwnerships();
        console.error('Произошла ошибка при добавлении данных:', error);
      }
    );
  }

  deleteSelectedOwnership(id: number) {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.delete('http://localhost:8082/owners-server/deleteOwnership/'+id, {headers}).subscribe(
      (response) => {
        console.log('Данные успешно удалены:', response);
      },
      (error) => {
        this.refreshOwnerships();
        console.error('Произошла ошибка при удалении данных:', error);
      }
    );

  }

  editOwnershipData(ownershipData: OwnershipWhithObjects){

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {id: ownershipData.id, car_id: ownershipData.car_id, owner: ownershipData.owner, ownershipStartDate: (ownershipData.ownershipStartDate.toString()), ownershipEndDate: (ownershipData.ownershipEndDate.toString())};
    console.log(body);
    this.http.post<Ownership>('http://localhost:8082/owners-server/editOwnership', body, {headers}).subscribe(
      (response) => {
        console.log('Новые данные успешно обновлены:', response);
      },
      (error) => {
        this.refreshOwnerships();
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );
  }

  getSelectedOwnership(id: number): Observable<any> {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get('http://localhost:8082/owners-server/getOwnership/'+id, {headers});
  }

  getCarList(): Observable<any> {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<ICar[]>('http://localhost:8082/car-server/getAllCars', {headers});
  }

  getOwnerList(): Observable<any> {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Owner[]>('http://localhost:8082/owners-server/getAllOwners', {headers});
  }

}
