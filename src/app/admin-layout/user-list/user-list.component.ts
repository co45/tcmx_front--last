import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../modals/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showModal = false;
  id: number;
  Users: User[];
  roles: any;
  user: User;
  u:User;
  filterTerm: string;  
  constructor(private userService: UserService, private http : HttpClient,
    private router: Router, private tok:TokenStorageService) {}

  ngOnInit() {
    this.getUsers();
  }

   getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.Users = data;
      console.log(data);
    });
  }

  getUserRole(n : String){
    this.userService.getUserRoles(n).subscribe( data => {
      this.roles = data;
      console.log(this.roles);
    });}


  userDetails(id: number){
    this.router.navigate(['user-details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['user-update', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

  toggleModalDetails(id: number){
    this.showModal = !this.showModal;
    this.u = new User();
    this.userService.getUser(this.id).subscribe( data => {
      this.u = data;
    });
    }

  alertConfirmation(id: number){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.deleteUser(id);
        Swal.fire(
          'Done!',
          'Action performed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Performed action record present in cloud and databstore.)',
          'error'
        )
      }
    })
  }
}