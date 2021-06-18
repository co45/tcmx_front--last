import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuiviComponent } from '../commercial/suivi/suivi.component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  constructor(private http: HttpClient) { }

  public create(suivi: any): Observable<any> {
    return this.http.post("http://localhost:8080/suivi/add/", { 
      num_declaration:suivi.dec,
      observation:suivi.libelle_pdt,
      shipment:suivi.ship,
      nom_commercial:suivi.nom_commercial,
      Date_arrive_f_p:suivi.arrive,
      Date_declaration:suivi.datedec,
      Date_arrive_stock:suivi.arrives,
      facture:suivi.facture,
      montantfacture:suivi.montant,
      datereception:suivi.daterec,
      titre:suivi.titre,
      reception:suivi.rec

         }, httpOptions);
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
