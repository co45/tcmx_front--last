import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cmd } from 'src/app/modals/cmd';
import { fsr } from 'src/app/modals/fsr';
import { suivi } from 'src/app/modals/suivi';
import { titre } from 'src/app/modals/titre';
import { CmdService } from 'src/app/services/cmd.service';
import { FactureService } from 'src/app/services/facture.service';
import { FsrService } from 'src/app/services/fsr.service';
import { SuiviService } from 'src/app/services/suivi.service';
import { TitreService } from 'src/app/services/titre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {

  form: any = {};
  titres: titre[];
  Fsrs: fsr[];
  fsr: fsr;
  Cmds: cmd[];
  factures : any[];
  fac :any;
  factureview:any;
  titreview:any;


  constructor(private router: Router,private fs: FsrService, private cmdService:CmdService,private titreService : TitreService ,private fas: FactureService,private ss: SuiviService) { }

  ngOnInit(): void {
    this.getFsrs();
    this.getCmds();
    this.getTitres();
    this.getFactures();
  }

  getFsrs(){
    this.fs.getFsrList().subscribe(data => {
      this.Fsrs = data;
      console.log(data);
    });  
  }
  getFactures(){
    this.fas.getCmdList().subscribe(data => {
      this.factures = data;
      console.log(data);
    });  
  }
  
  getCmds(){
    this.cmdService.getCmdList().subscribe(data => {
      this.Cmds = data;
      console.log(data);
    });
    
  }

  getTitres(){
    this.titreService.getTitreList().subscribe(data => {
      this.titres = data;
      console.log(data);
    });
    
  }

  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Produit Enregistré',
      showConfirmButton: false,
      timer: 800
    })
  }


  goToSuiviList(){
    this.router.navigate(['/produit']);
    
  }

  onSubmit(){
    const model = new suivi({facture: this.factureview, titre:this.titreview});



/********************* */
    this.ss.create(this.form,model).subscribe(
      data => {
        console.log(data);
        this.succes();
        this.goToSuiviList();
  
      },
      err => {
        console.log(err);
      }
    );
  }

}
