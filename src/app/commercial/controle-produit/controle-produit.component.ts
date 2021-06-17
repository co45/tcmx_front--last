import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  route: any;
  constructor(private router: Router, private cs: ControleTechniqueService) { }

  ngOnInit(): void {
    
    this.lpc = this.route.snapshot.params[''];
    console.log(this.lpc);
  }

  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Enregistrement effectué avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  onSubmit() {
    this.cs.addControle(this.form).subscribe(
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
