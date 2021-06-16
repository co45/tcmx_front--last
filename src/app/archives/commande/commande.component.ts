import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cmd } from 'src/app/modals/cmd';
import { CmdService } from 'src/app/services/cmd.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  Cmds: cmd[];
  c:String;
  numc:String;
  filterTerm: string;
  selectedFiles: FileList;
  currentFile: File;
  message = '';
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private cs : CmdService,private http : HttpClient, private router: Router,private uploadService:UploadFileService) { }

  ngOnInit(): void {
    this.getCmds();

  }
  CommandePdt(cmd: String){
    this.router.navigate(['/pdt-cmd', cmd]);
  }
  getCmds(){
    this.cs.getCmdList().subscribe(data => {
      this.Cmds = data;
      console.log(data);
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  succes(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStoragecmd(this.currentFileUpload).subscribe(event => {
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

}
