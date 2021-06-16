import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TitreService {

  constructor(private http: HttpClient) { }

  public getTitreList(): Observable<any> {
    return this.http.get("http://localhost:8080/titre/titres");
  }

  addTitre(titre): Observable<any> {
    return this.http.post( 'http://localhost:8080/titre/add', {
      num_t: titre.num_t,
      code:titre.code,
      montant:titre.montant,
      date_t: titre.date,
      fsr: titre.fsr
        }, httpOptions);
  }
  public deleteTitre(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/titre/delete/"+id, { responseType: 'text' });
  }
}
