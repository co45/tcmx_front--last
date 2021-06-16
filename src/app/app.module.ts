import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public-layout/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './admin-layout/user-list/user-list.component';
import { UserDetailsComponent } from './admin-layout/user-details/user-details.component';
import { UserUpdateComponent } from './admin-layout/user-update/user-update.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserAddComponent } from './admin-layout/user-add/user-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalModule } from './_modal';
import { ControleTechniqueComponent } from './commercial/controle-technique/controle-technique.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControleProduitComponent } from './commercial/controle-produit/controle-produit.component';
import { SidebarModule } from 'ng-sidebar';
import { ProfileComponent } from './profile/profile.component';
import { ListCtrlComponent } from './commercial/list-ctrl/list-ctrl.component';
import { CommandeComponent } from './archives/commande/commande.component';
import { FournisseurComponent } from './archives/fournisseur/fournisseur.component';
import { ProduitComponent } from './archives/produit/produit.component';
import { SuiviComponent } from './commercial/suivi/suivi.component';
import { PdtCmdComponent } from './archives/commande/pdt-cmd/pdt-cmd.component';
import { ProduitAddComponent } from './archives/produit/produit-add/produit-add.component';
import { FsrAddComponent } from './archives/fournisseur/fsr-add/fsr-add.component';
import { AddCmdComponent } from './archives/commande/add-cmd/add-cmd.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListSuiviComponent } from './commercial/list-suivi/list-suivi.component';
import { TitreComponent } from './archives/titre/titre.component';
import { TitreAddComponent } from './archives/titre/titre-add/titre-add.component';
import { AuthGuard } from './services/guard/auth.guard';
import { AuthService } from './services/auth.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DashcommComponent } from './dashboards/commercial/dashcomm/dashcomm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    PublicLayoutComponent,
    DashboardComponent,
    UserListComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UserAddComponent,
    NotFoundComponent,
    ControleTechniqueComponent,
    ControleProduitComponent,
    ProfileComponent,
    ListCtrlComponent,
    CommandeComponent,
    FournisseurComponent,
    ProduitComponent,
    SuiviComponent,
    PdtCmdComponent,
    ProduitAddComponent,
    FsrAddComponent,
    AddCmdComponent,
    ListSuiviComponent,
    TitreComponent,
    TitreAddComponent,
    DashcommComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
