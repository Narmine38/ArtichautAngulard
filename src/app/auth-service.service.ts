import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "./models/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:9090/api/v1/public/auth/registe';
  private loginUrl = 'http://localhost:9090/api/v1/public/auth/login';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user);
  }

  // register(user: User): Observable<User> {
  //   return this.http.post<User>("http://localhost:8080/api/v1/public/auth/register", user);
  // }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.loginUrl, user);
  }
}
