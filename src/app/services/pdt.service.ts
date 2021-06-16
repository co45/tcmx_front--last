import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PdtService {

  constructor(private http :HttpClient) { }

  public getPdtList(): Observable<any> {
    return this.http.get("http://localhost:8080/produit/pdts");
  }

  public getPdtListcmd(id:any): Observable<any> {
    return this.http.get("http://localhost:8080/produit/pdtss/" + id);
  }
  public PdtAdd(pdt): Observable<any> {
    return this.http.post("http://localhost:8080/produit/new", { 
     famille:pdt.famille,
     libelle_pdt:pdt.libelle_pdt,
     reference:pdt.reference,
     code_ngp:pdt.code_ngp,
     desg:pdt.desg,
     gamme:pdt.gamme,
     nom:pdt.nom_commercial,
     therapie:pdt.therapie
        }, httpOptions);
  }

  public deletePdt(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/produit/delete/"+id, { responseType: 'text' });
  }

}
