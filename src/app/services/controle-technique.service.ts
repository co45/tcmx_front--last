import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cmd } from '../modals/cmd';
import { ControleTechniqueModel } from '../modals/CtrlTech';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class ControleTechniqueService {
  cmds: cmd[];

  constructor(private http: HttpClient) { }

  public getControle(id: number): Observable<any> {
    console.log("id : "+ id)
    return this.http.get("http://localhost:8080/controle/ctrl/"+ id);
  }

  public getControles(): Observable<any> {
    return this.http.get("http://localhost:8080/controle/all");
  }
  public updateControle(id: number, controle: ControleTechniqueModel): Observable<Object> {
    return this.http.put("http://localhost:8080/controle/update/"+id, controle);
  }

  public deleteControle(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/controle/delete/"+id, { responseType: 'text' });
  }
  // addControle(controle: CtrlTech): Observable<any> {
  //   return this.http.post("http://localhost:8080/controle/newsCtrl",{
  //     // Num_lot : controle.Num_lot,
  //     // Date_per : controle.Date_per,
  //     // Date_fac : controle.Date_fac,
  //     // num_fac : controle.num_fac,
  //     // Num_incm : controle.Num_incm,
  //     // Date_dep_incm : controle.Date_dep_incm,
  //     // Date_amc : controle.Date_amc,
  //     // Date_recup_ech : controle.Date_recup_ech,
  //     // Date_ape : controle.Date_ape,
  //     // Quantite : controle.Quantite,
  //     // Provenance : controle.Provenance,
  //     // Origine : controle.Origine,
  //       }, httpOptions);
  // }
  


}
