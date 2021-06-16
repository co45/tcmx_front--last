import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pdt } from 'src/app/modals/pdt';
import { PdtService } from 'src/app/services/pdt.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  id: number;
  Pdts : pdt[];
  filterTerm: string;
  selectedFiles: FileList;
  currentFile: File;
  pdt:pdt;
  message = '';
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private ps : PdtService,private uploadService:UploadFileService ,private router:Router) { }

  ngOnInit(): void {
    this.getPdts();

  }
  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  getPdts(){
    this.ps.getPdtList().subscribe(data => {
      this.Pdts = data;
      console.log(data);
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStoragepdt(this.currentFileUpload).subscribe(event => {
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

  
  updateUser(id: number){
    this.router.navigate(['produit-update', id]);
  }

  deleteUser(id: number){
    this.ps.deletePdt(id).subscribe( data => {
      this.getPdts();
    })
  }

  alertConfirmation(id: number){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer le produit ?',
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
          'Success.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Annulé',
          'error'
        )
      }
    })
  }


}
