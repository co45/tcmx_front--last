import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controle-produit',
  templateUrl: './controle-produit.component.html',
  styleUrls: ['./controle-produit.component.css']
})
export class ControleProduitComponent implements OnInit {

  lpc:any[]
  route: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.lpc = this.route.snapshot.params['lpofcmd'];
    console.log(this.lpc);
  }

  
}
