import { Component, OnInit } from '@angular/core';
import { cmd } from '../modals/cmd';
// import { CtrlTech } from '../modals/CtrlTech';
import { fsr } from '../modals/fsr';
import { pdt } from '../modals/pdt';
import { suivi } from '../modals/suivi';
import { titre } from '../modals/titre';
import { CmdService } from '../services/cmd.service';
import { ControleTechniqueService } from '../services/controle-technique.service';
import { FactureService } from '../services/facture.service';
import { FsrService } from '../services/fsr.service';
import { PdtService } from '../services/pdt.service';
import { SuiviService } from '../services/suivi.service';
import { TitreService } from '../services/titre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Cmds: cmd[];
  fsrs: fsr[];
  f:fsr;
  Pdts : pdt[];
  pdt:pdt;
  titres : titre[];
  // Ctrls: CtrlTech[];
  // ctrl: CtrlTech;
  Suivis: suivi[];
  suivi: suivi;
  s:suivi;
  factures: any[];



  constructor(private service: SuiviService,private cts : ControleTechniqueService,private ts: TitreService,private ps : PdtService,private fsrserv : FsrService,private cs : CmdService, private fs:FactureService) { }

  ngOnInit(): void {
    this.getCmds();
    this.getFsrs();
    this.getPdts();
    this.getTitres();
    this.getcs();
    this.getSuivis();
    this.getfacs();
  }

  getSuivis(){
    this.service.getSuiviList().subscribe(data => {
      this.Suivis = data;
      console.log(data);
    });
  }
  
  getfacs(){
    this.fs.getFacList().subscribe(data => {
      this.factures = data;
      console.log("Factures : "+data);
    });
  }

  getCmds(){
    this.cs.getCmdList().subscribe(data => {
      this.Cmds = data;
      console.log(data);
    });
  }

  getcs(){
    // this.cts.getControles().subscribe(data =>{
    //   this.Ctrls = data;
    // });
  }

  getFsrs(){
    this.fsrserv.getFsrList().subscribe(data => {
      this.fsrs = data;
    });
  }

  getPdts(){
    this.ps.getPdtList().subscribe(data => {
      this.Pdts = data;
      console.log(data);
    });
  }
  getTitres(){
    this.ts.getTitreList().subscribe(data => {
      this.titres = data;
      console.log(data);
    });
  }

}
