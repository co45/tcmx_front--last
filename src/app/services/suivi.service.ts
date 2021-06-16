import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuiviComponent } from '../commercial/suivi/suivi.component';


@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  constructor(private http: HttpClient) { }
  create(data: any): Observable<any> {
    return this.http.post("http://localhost:8080/suivi/add/", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put("http://localhost:8080/suivi/update/"+ id, data);
  }


  public getSuivi(id: number): Observable<any> {
    console.log("id : "+ id)
    return this.http.get("http://localhost:8080/suivi/get/"+ id);
  }


  public getSuiviList(): Observable<any> {
    return this.http.get("http://localhost:8080/suivi/suivis");
  }

  public deleteSuivi(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/suivi/delete/"+id, { responseType: 'text' });
  }

}
