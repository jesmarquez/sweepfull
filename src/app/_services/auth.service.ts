import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const AUTH_API = 'http://localhost:8081/api/auth/';
const httpOptions = {
  headers: new HttpHeaders ({ 'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {

  }

  login (username: string, password: string) : Observable <any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
  
  register(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    const username = email;
    return this.http.post(
      AUTH_API + 'signup',
      {
        firstname,
        lastname,
        email,
        password,
        username
      },
      httpOptions
    );
  }
}