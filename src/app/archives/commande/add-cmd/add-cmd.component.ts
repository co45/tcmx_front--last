import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmdService } from 'src/app/services/cmd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cmd',
  templateUrl: './add-cmd.component.html',
  styleUrls: ['./add-cmd.component.css']
})
export class AddCmdComponent implements OnInit {

  form: any = {};
  isSuccessful= false;
  isaddFailed=false;
  errorMessage='';

  constructor(private router:Router,private cs:CmdService) { }

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
  this.cs.addCmd(this.form).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isaddFailed = false;
      this.succes();
      this.goToUserList();

    },
    err => {
      this.errorMessage = err.error.message;
      this.isaddFailed = true;
    }
  );
}
goToUserList(){
  this.router.navigate(['/commande']);
  
}

}
