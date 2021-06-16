import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { fsr } from 'src/app/modals/fsr';
import { FsrService } from 'src/app/services/fsr.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fsrs: fsr[];
  f:fsr;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  /** */
  selectedFiles: FileList;
  currentFile: File;
  progresss = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private fsrserv : FsrService,private http : HttpClient, private router: Router, private uploadService:UploadFileService) { }

  ngOnInit(): void {
    this.getFsrs();

  }
  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  getFsrs(){
    this.fsrserv.getFsrList().subscribe(data => {
      this.fsrs = data;
    });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStoragefsr(this.currentFileUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.succes();
        window.location.reload();
      }
    });

    this.selectedFiles = undefined;
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
        this.deletefsr(id);
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
  deletefsr(id: number){
    this.fsrserv.deletefsr(id).subscribe( data => {
      console.log(data);
      window.location.reload();
    })
  }
}


