import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './admin-layout/user-add/user-add.component';
import { UserDetailsComponent } from './admin-layout/user-details/user-details.component';
import { UserListComponent } from './admin-layout/user-list/user-list.component';
import { UserUpdateComponent } from './admin-layout/user-update/user-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './public-layout/login/login.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ControleTechniqueComponent } from './commercial/controle-technique/controle-technique.component';
import { ControleProduitComponent } from './commercial/controle-produit/controle-produit.component';
import { ProfileComponent } from './profile/profile.component';
import { ListCtrlComponent } from './commercial/list-ctrl/list-ctrl.component';
import { ArchiveComponent } from './archives/archive/archive.component';
import { CommandeComponent } from './archives/commande/commande.component';
import { FournisseurComponent } from './archives/fournisseur/fournisseur.component';
import { ProduitComponent } from './archives/produit/produit.component';
import { SuiviComponent } from './commercial/suivi/suivi.component';
import { PdtCmdComponent } from './archives/commande/pdt-cmd/pdt-cmd.component';
import { AuthGuard } from './services/guard/auth.guard';
import { ProduitAddComponent } from './archives/produit/produit-add/produit-add.component';
import { FsrAddComponent } from './archives/fournisseur/fsr-add/fsr-add.component';
import { AddCmdComponent } from './archives/commande/add-cmd/add-cmd.component';
import { ListSuiviComponent } from './commercial/list-suivi/list-suivi.component';
import { titre } from './modals/titre';
import { TitreComponent } from './archives/titre/titre.component';
import { TitreAddComponent } from './archives/titre/titre-add/titre-add.component';
import { DashcommComponent } from './dashboards/commercial/dashcomm/dashcomm.component';

const routes: Routes = [
    {path: '',redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, canActivate:[AuthGuard] },
    /*{path: '**',component:NotFoundComponent},*/
    
  
  { path: '', component: SidebarComponent,children:[

    {path:'', redirectTo:'dashboard' , pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent},
    {path:'user-profile/:username', component:ProfileComponent},
    {path:'user-list', component: UserListComponent},
    {path:'user-details/:id', component: UserDetailsComponent},
    {path:'user-update/:id', component: UserUpdateComponent},
    {path:'user-add', component: UserAddComponent},
    {path:'controle-technique', component:ControleTechniqueComponent},
    {path:'controle-produit/:numcmd/:numfac/:facturen', component:ControleProduitComponent},
    {path:'suivi-import',component:SuiviComponent},
    {path:'list-suivi', component:ListSuiviComponent},
    {path:'list-ctrl', component:ListCtrlComponent},
    {path:'archive', component: ArchiveComponent},
    {path:'commande',component:CommandeComponent},
    {path:'cmd-add',component:AddCmdComponent},
    {path:'fournisseur',component:FournisseurComponent},
    {path:'fsr-add',component:FsrAddComponent},
    {path:'produit',component:ProduitComponent},
    {path:'pdt-cmd/:numcmd',component:PdtCmdComponent},
    {path:'produit-add',component:ProduitAddComponent},
    {path:'list-titre',component:TitreComponent},
    {path:'titre-add',component:TitreAddComponent},
    {path:'dashboardc',component:DashcommComponent}
    
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
