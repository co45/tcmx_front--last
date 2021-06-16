import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FsrService } from 'src/app/services/fsr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fsr-add',
  templateUrl: './fsr-add.component.html',
  styleUrls: ['./fsr-add.component.css']
})
export class FsrAddComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';
  constructor(private fsr: FsrService, private router: Router) { }

  ngOnInit(): void {

  }

  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
onSubmit() {
  this.fsr.addfsr(this.form).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isaddFailed = false;
      this.succes();
      this.goToFsrList();

    },
    err => {
      this.errorMessage = err.error.message;
      this.isaddFailed = true;
    }
  );
}
goToFsrList(){
  this.router.navigate(['/fournisseur']);
  
}

}
