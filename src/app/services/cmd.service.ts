import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CmdService {

  constructor(private http: HttpClient) { }

  public getCmd(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/commande/cmd/"+ id);
  }

  public getCmdPdt(num: String): Observable<any> {
    return this.http.get("http://localhost:8080/commande/pdtCmds/"+ num);
  }

  public getCmdList(): Observable<any> {
    return this.http.get("http://localhost:8080/commande/cmds");
  }
  public getCtrlPdt(cmd: string): Observable<any> {
    return this.http.get("http://localhost:8080/commande/pdtCmds/"+cmd);
  }
  addCmd(cmd): Observable<any> {
    return this.http.post("http://localhost:8080/commande/add", {
      num_cmd: cmd.num_cmd,
      date_cmd:cmd.date_cmd,
      libelle_cmd:cmd.libelle_cmd,
      email: cmd.email,
      phone: cmd.phone,
     //....
        }, httpOptions);
  }
}
