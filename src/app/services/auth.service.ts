import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogin = false ;
  redirectUrl ='/dashboard';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password,
      islogin: true
    }, httpOptions);
    
  }
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      name:user.name,
      prenom:user.prenom,
      email: user.email,
      phone: user.phone,
      dateOfBirth: user.dateOfBirth,
      password: user.password,
      departement:user.departement,
      role:user.role
        }, httpOptions);
  }
}