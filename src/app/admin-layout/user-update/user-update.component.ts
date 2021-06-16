import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modals/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id: number;
  user: User = new User();
  constructor(private us: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.us.getUser(this.id).subscribe(data => {
      this.user = data;
      console.log(data);
    }, error => console.log(error));
  }
  succesalert(){
  Swal.fire(
    'DONE ! ',
    '',
    'success'
  )}
  onSubmit(){
    this.us.updateUser(this.id, this.user).subscribe( data =>{
      this.succesalert();
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/user-list']);
  }
}