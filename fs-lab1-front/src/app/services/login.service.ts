import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {data} from "autoprefixer";
import {UserLogin, UserRegistration} from "../models/users";
import {JWTAuthResponse} from "../models/client";
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}


  login(userData: UserLogin){
    const body = { email: userData.email, password: userData.password};
    console.log(body);

    this.http.post<JWTAuthResponse>('http://localhost:8082/auth-server/api/auth/login', body).subscribe(
      (response) => {
        console.log('Аутентификация успешно завершена:', response);
        this.authService.setAuthToken(response.accessToken)
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Произошла ошибка при аутентификаций:', error);
      }
    );


  }

  registration(userData: UserRegistration){

    const body = { email: userData.email, password: userData.password, username: userData.username, rePassword: userData.rePassword};
    console.log(body);

    this.http.post<String>('http://localhost:8082/auth-server/api/auth/register', body).subscribe(
      (response) => {
        console.log('Авторизация успешно завершена:', response);
        this.router.navigate(['/login'], { queryParams: { registration_success: 'true' } });
      },
      (error) => {
        console.error('Произошла ошибка при авторизации:', error);
      }
    );

  }



}
