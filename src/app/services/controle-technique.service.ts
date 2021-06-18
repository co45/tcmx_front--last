import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cmd } from '../modals/cmd';
import { ControleTechniqueModel } from '../modals/CtrlTech';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ControleTechniqueService {
  cmds: cmd[];

  constructor(private http: HttpClient) { }

  public newControle(ids: any,fac : any): Observable<any> {
    console.log("ids produits : "+ ids+" facture: " + fac);
    return this.http.get("http://localhost:8080/produit/createctrl/"+ids+"/{numfac}/"+ fac);
    
  }
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


  public addControle(controle: ControleTechniqueModel, modelCtrl: ControleTechniqueModel): Observable<any> {

    return this.http.post("http://localhost:8080/controle/newsCtrl/",{
      
      numLot : controle.numLot,
      numApe : controle.numApe,
      datePeremption : controle.datePeremption,
      facture : modelCtrl.facture,
      numIncm : controle.numIncm,
      dateIncm : controle.dateIncm,
      dateAmc : controle.dateAmc,
      dateRecEch : controle.dateRecEch,
      dateApe : controle.dateApe,
      quantite : controle.quantite,
      provenance : controle.provenance,
      origine : controle.origine,
      produit : modelCtrl.produit
      /*controle*/
      
      
        }, httpOptions );
  }
}
