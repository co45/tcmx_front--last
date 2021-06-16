import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { titre } from 'src/app/modals/titre';
import { TitreService } from 'src/app/services/titre.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {

  titres : titre[];
  filterTerm: string;
  selectedFiles: FileList;
  currentFile: File;
  message = '';
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private uploadService:UploadFileService, private ts: TitreService, private router:Router) { }

  ngOnInit(): void {
    this.getTitres();

  }
  getTitres(){
    this.ts.getTitreList().subscribe(data => {
      this.titres = data;
      console.log(data);
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Les données du fichier sont enregistré avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStoragetitre(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.succes();
        window.location.reload();

      }
    });

    this.selectedFiles = undefined;
  }

  updateTitre(id: number){
    this.router.navigate(['user-update', id]);
  }

  deleteTitre(id: number){
    this.ts.deleteTitre(id).subscribe( data => {
      console.log(data);
      this.getTitres();
    })
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
        this.deleteTitre(id);
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
