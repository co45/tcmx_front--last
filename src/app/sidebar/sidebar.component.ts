import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modals/user';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;
  private roles: string[]=[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showAchatBoard = false;
  userinfo:User;
  username?: string;
  email : String ;

   id : number;

  

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
   
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
logout() {
  this.token.signOut();
  this.router.navigate(['/login']);
  sessionStorage.clear();
}
}

