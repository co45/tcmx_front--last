import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }

  public getCmdList(): Observable<any> {
    return this.http.get("http://localhost:8080/facture/all");
  }
}
