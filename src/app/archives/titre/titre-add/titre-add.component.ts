import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitreService } from 'src/app/services/titre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-titre-add',
  templateUrl: './titre-add.component.html',
  styleUrls: ['./titre-add.component.css']
})
export class TitreAddComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';

  constructor(private titre: TitreService, private router: Router) { }

  ngOnInit(): void {
  }

  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Enregistré avec success !',
      showConfirmButton: false,
      timer: 1500
    })
  }
onSubmit() {
  this.titre.addTitre(this.form).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isaddFailed = false;
      this.succes();
      this.goToTitreList();

    },
    err => {
      this.errorMessage = err.error.message;
      this.isaddFailed = true;
    }
  );
}
goToTitreList(){
  this.router.navigate(['/list-titre']);
  
}

}
