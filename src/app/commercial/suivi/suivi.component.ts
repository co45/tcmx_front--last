import { Component, OnInit } from '@angular/core';
import { cmd } from 'src/app/modals/cmd';
import { fsr } from 'src/app/modals/fsr';
import { titre } from 'src/app/modals/titre';
import { CmdService } from 'src/app/services/cmd.service';
import { FsrService } from 'src/app/services/fsr.service';
import { TitreService } from 'src/app/services/titre.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {

  form: any = {};
  titres: titre[];
  Fsrs: fsr[];
  fsr: fsr;
  Cmds: cmd[];

  constructor(private fs: FsrService, private cmdService:CmdService,private titreService : TitreService) { }

  ngOnInit(): void {
    this.getFsrs();
    this.getCmds();
    this.getTitres();
  }

  getFsrs(){
    this.fs.getFsrList().subscribe(data => {
      this.Fsrs = data;
      console.log(data);
    });
    
  }
  getCmds(){
    this.cmdService.getCmdList().subscribe(data => {
      this.Cmds = data;
      console.log(data);
    });
    
  }

  getTitres(){
    this.titreService.getTitreList().subscribe(data => {
      this.titres = data;
      console.log(data);
    });
    
  }
  onSubmit(){}

}
