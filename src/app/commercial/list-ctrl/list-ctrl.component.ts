import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CtrlTech } from 'src/app/modals/CtrlTech';
import { ControleTechniqueService } from 'src/app/services/controle-technique.service';
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
  constructor(private cts : ControleTechniqueService,private router : Router) { }

  ngOnInit(): void {
    this.getcs();
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
