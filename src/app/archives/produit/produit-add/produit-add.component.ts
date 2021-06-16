import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pdt } from 'src/app/modals/pdt';
import { PdtService } from 'src/app/services/pdt.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isAddFailed = false;
  errorMessage = '';
  constructor(private ps:PdtService,private router: Router) { }


  ngOnInit(): void {
  }
  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Produit Enregistré',
      showConfirmButton: false,
      timer: 1000
    })
  }
onSubmit() {
  this.ps.PdtAdd(this.form).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isAddFailed = false;
      this.succes();
      this.goToPdtList();

    },
    err => {
      this.errorMessage = err.error.message;
      this.isAddFailed = true;
    }
  );
}
goToPdtList(){
  this.router.navigate(['/produit']);
  
}

}
