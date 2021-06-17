import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControleTechniqueModel } from 'src/app/modals/CtrlTech';
import { ControleTechniqueService } from 'src/app/services/controle-technique.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-controle-produit',
  templateUrl: './controle-produit.component.html',
  styleUrls: ['./controle-produit.component.css']
})
export class ControleProduitComponent implements OnInit {

  errorMessage = '';
  form: any = {};
  lpc:any[]
  idsFromView1: String;
  numFacFromView1: String;
  idCommandeFromView2: String;
  numFacFromView2: String;
  route: any;
  
  constructor(private router: Router, private cs: ControleTechniqueService,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("view 2 loaded");
    /*this.idsFromView1 = this.route.snapshot.params['numfac'];
    this.numFacFromView1 = this.route.snapshot.params['numcmd'];*/
    this.idsFromView1 = this.activatedRoute.snapshot.params['numcmd']
    this.idCommandeFromView2 = this.activatedRoute.snapshot.params['numfac']
    this.numFacFromView2 = this.activatedRoute.snapshot.params['facturen']


    console.log("from add view: "+this.idsFromView1 +" *** "+this.idCommandeFromView2+" *** "+this.numFacFromView2);
  }

  /*constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
  }*/

  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Enregistrement effectué avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  onSubmit() {
    /*this.cs.addControle(this.form).subscribe(
      data => {
        console.log(data);
        this.succes();
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );*/
  }
  enregistrerClick(){

    const model = new ControleTechniqueModel({facture: this.numFacFromView2, produit:this.idsFromView1});

    console.log("FACTURE : "+ model.facture+" IDs Commande : "+ model.produit)
    this.cs.addControle(this.form,model/*model*/).subscribe(
      data => {
        console.log(data);
        this.succes();
        

      },
      err => {
        this.errorMessage = err.error.message;
        
      }
    );

  }
}
