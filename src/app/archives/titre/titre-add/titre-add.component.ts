import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fsr } from 'src/app/modals/fsr';
import { FsrService } from 'src/app/services/fsr.service';
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
  Fsrs: fsr[];
  fsr: fsr;

  constructor(private fs: FsrService,private titre: TitreService, private router: Router) { }

  ngOnInit(): void {
    this.getFsrs();
  }

  getFsrs(){
    this.fs.getFsrList().subscribe(data => {
      this.Fsrs = data;
      console.log(data);
    });  
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
