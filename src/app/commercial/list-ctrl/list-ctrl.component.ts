import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modals/user';
// import { CtrlTech } from 'src/app/modals/CtrlTech';
import { ControleTechniqueService } from 'src/app/services/controle-technique.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-ctrl',
  templateUrl: './list-ctrl.component.html',
  styleUrls: ['./list-ctrl.component.css']
})
export class ListCtrlComponent implements OnInit {
  showModal = false;
  id: number;
  Ctrls: any[];
  ctrl: any;
  filterTerm: string;  
  id_ctrl:number;

  
  currentUser: any;
  private roles: string[]=[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showAchatBoard = false;
  userinfo:User;
  username?: string;
  constructor(private cts : ControleTechniqueService,private router : Router,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getcs();

    this.isLoggedIn = !!this.token.getToken();
    
    if (this.isLoggedIn) {
      this.currentUser = this.token.getUser();
      console.log(this.currentUser.username,this.currentUser.roles[0]);
      const user = this.token.getUser();
      this.roles = this.currentUser.roles[0];

      if(this.roles.includes('ROLE_ADMIN')){
        this.showAdminBoard = true;
      }else if(this.roles.includes('ROLE_achat')){
          this.showAchatBoard = true;
        }else{
          this.showUserBoard=true;
        }
      this.username = user.username;
      this.id = user.id;

  }
  }
  getcs(){
    this.cts.getControles().subscribe(data =>{
      this.Ctrls = data;
      console.log(data);
    });
  }
  ctrlDetails(idctrl: number){
    this.router.navigate(['ctrl-details', idctrl]);
   console.log(" shit : "+idctrl)
  }

  deleteCtrl(id: number){
    this.cts.deleteControle(id).subscribe( data => {
      console.log(data);
    })
  }
  alertConfirmation(id: number){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer le controle technique ?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.deleteCtrl(id);
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
