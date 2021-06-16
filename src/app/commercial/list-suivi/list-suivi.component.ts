import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { suivi } from 'src/app/modals/suivi';
import { SuiviService } from 'src/app/services/suivi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-suivi',
  templateUrl: './list-suivi.component.html',
  styleUrls: ['./list-suivi.component.css']
})
export class ListSuiviComponent implements OnInit {
  id: number;
  Suivis: suivi[];
  suivi: suivi;
  s:suivi;
  filterTerm: string;  
  constructor(private service: SuiviService, private http : HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.getSuivis();
  }

  getSuivis(){
    this.service.getSuiviList().subscribe(data => {
      this.Suivis = data;
      console.log(data);
    });
  }

  updateSuivi(id: number){
    this.router.navigate(['suivi-update', id]);
  }

  deleteSuivi(id: number){
    this.service.deleteSuivi(id).subscribe( data => {
      console.log(data);
      this.getSuivis();
    })
  }

  alertConfirmation(id: number){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ce suivi d"importation ?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.deleteSuivi(id);
        Swal.fire(
          'Done!',
          'Supprimé avec success.',
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
