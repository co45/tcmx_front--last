import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../modals/user';

const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  public getUser(id: number): Observable<any> {
    console.log("id : "+ id)
    return this.http.get("http://localhost:8080/user/user/"+ id);
  }

  public getUserinfo(username: string): Observable<any> {
    console.log("username : "+ username)
    return this.http.get("http://localhost:8080/user/usern/"+ username);
  }

  public getUserList(): Observable<any> {
    return this.http.get("http://localhost:8080/user/users");
  }
  public updateUser(id: number, user: User): Observable<Object> {
    return this.http.put("http://localhost:8080/user/update/"+id, user);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/user/delete/"+id, { responseType: 'text' });
  }
  
  public getUserRoles(un: String){
    return this.http.get("http://localhost:8080/user/role/"+ un);
  }
  public getUserAvatar(id: number){
    return this.http.get("http://localhost:8080/user/avatar/"+ id);
  }

}