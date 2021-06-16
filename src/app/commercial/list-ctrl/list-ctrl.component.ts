import { Component, OnInit } from '@angular/core';
// import { CtrlTech } from 'src/app/modals/CtrlTech';
import { ControleTechniqueService } from 'src/app/services/controle-technique.service';

@Component({
  selector: 'app-list-ctrl',
  templateUrl: './list-ctrl.component.html',
  styleUrls: ['./list-ctrl.component.css']
})
export class ListCtrlComponent implements OnInit {
  showModal = false;
  id: number;
  // Ctrls: CtrlTech[];
  // ctrl: CtrlTech;
  filterTerm: string;  
  constructor(private cts : ControleTechniqueService) { }

  ngOnInit(): void {
    this.getcs();
  }
  getcs(){
    // this.cts.getControles().subscribe(data =>{
    //   this.Ctrls = data;
    //   console.log(data);
    // });
  }

}
