import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FsrService {

  constructor(private http: HttpClient) { }

  public getFsrList(): Observable<any> {
    return this.http.get('http://localhost:8080/fournisseur/all');
  }

  addfsr(fsr): Observable<any> {
    return this.http.post( 'http://localhost:8080/fournisseur/newfsr', {
      nom: fsr.nom,
      adresse_fsr:fsr.adresse,
      swift:fsr.swift,
      code_fsr: fsr.code,
      libelle_fsr: fsr.libelle
        }, httpOptions);
  }

  public deletefsr(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/fournisseur/fsr/"+id, { responseType: 'text' });
  }
}
