import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControleTechniqueService } from 'src/app/services/controle-technique.service';

@Component({
  selector: 'app-view-ctrl',
  templateUrl: './view-ctrl.component.html',
  styleUrls: ['./view-ctrl.component.css']
})
export class ViewCtrlComponent implements OnInit {

  id :any;
  ctrl: any;
  constructor(private route : ActivatedRoute, private cs: ControleTechniqueService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idctrl'];

  
    this.cs.getControle(this.id).subscribe( data => {
      this.ctrl = data;
      console.log(data);
    });
  }

}
