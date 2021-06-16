import { Component, OnInit } from '@angular/core';
import { cmd } from 'src/app/modals/cmd';
import { ActivatedRoute } from '@angular/router';
import { CmdService } from 'src/app/services/cmd.service';

@Component({
  selector: 'app-pdt-cmd',
  templateUrl: './pdt-cmd.component.html',
  styleUrls: ['./pdt-cmd.component.css']
})
export class PdtCmdComponent implements OnInit {

  pdts: cmd[];
  c: String;
  cmd: cmd;

  constructor(private route: ActivatedRoute,private service: CmdService) { }

  ngOnInit(): void {
    this.c = this.route.snapshot.params['cmd'];

    this.service.getCmdPdt('CV01-2021').subscribe( data => {
      this.pdts = data;
      console.log(data);
    });
  }

}
