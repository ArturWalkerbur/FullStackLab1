import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ICar} from "../models/car";
import {Message, PasswordChange} from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  getUserDetail(): Observable<any> {

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get('http://localhost:8082/auth-server/api/user/getUser', { headers });
  }

  updatePassword(passwordChange: PasswordChange){

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {password: passwordChange.password, newPassword: passwordChange.newPassword, reNewPassword: passwordChange.reNewPassword};
    console.log(body);
    this.http.post<String>('http://localhost:8082/auth-server/api/user/update-password', body, { headers }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );


  }

  carBooking(): boolean{

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<String>('http://localhost:8082/auth-server/api/user/carBooking', { headers }).subscribe(
      (response) => {
        console.log(response);
        return true;
      },
      (error) => {
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );
    return false;

  }

  becamePartner(): boolean{

    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<String>('http://localhost:8082/auth-server/api/user/becomeLandlord', { headers }).subscribe(
      (response) => {
        console.log(response);
        return true;
      },
      (error) => {
        console.error('Произошла ошибка при обновлении данных:', error);
      }
    );
    return false;

  }


  private msgSubject = new BehaviorSubject<Message[]>([]);

  getMessages(): BehaviorSubject<Message[]> {
    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Message[]>('http://localhost:8082/auth-server/api/user/getAllMessages', { headers }).subscribe(
      (msg) => {
        this.msgSubject.next(msg);
        return this.msgSubject.asObservable();
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
    return this.msgSubject;

  }



}
