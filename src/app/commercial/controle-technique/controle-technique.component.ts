import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Key } from 'selenium-webdriver';
import { cmd } from 'src/app/modals/cmd';
import { pdt } from 'src/app/modals/pdt';
import { CmdService } from 'src/app/services/cmd.service';
import { ControleTechniqueService } from 'src/app/services/controle-technique.service';
import { PdtService } from 'src/app/services/pdt.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-controle-technique',
  templateUrl: './controle-technique.component.html',
  styleUrls: ['./controle-technique.component.css']
})
export class ControleTechniqueComponent implements OnInit {
  dynamicForm: FormGroup;
  Cmds: any[];
  pdtL: any[];
  id: number;
  c: any;
  datap: any;
  numcmd: any;
  selectedOption: String;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  numc: string;
  nn: string;

  dropdownList = [];
  dropdownSettings = {};
  cmdId:any;
  idcmd:any;
  lpofcmd:[];


  constructor(private pdts: PdtService, private cmdService: CmdService, private cs: ControleTechniqueService, private router: Router, private formBuilder: FormBuilder, public fb: FormBuilder) { }

  ngOnInit() {

    this.getCmds();

   //

    this.dropdownSettings = {
      singleSelection: false,
      // idField: 'reference',
      textField:'reference',
      data:this.lpofcmd,
      idField:'id_pdt',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
    };

  }

  // getPdts() {
  //   this.pdts.getPdtList().subscribe(data => {
  //     this.pdtL = data;
  //     for (let p in data) {
  //       this.dropdownList.push(data[p]);
  //     }
  //   });

  // }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  addCmd = this.fb.group({
    numcmd: [''],
    numfaccmd: [''],
    datefac: [''],
    datedepcmd: ['']

  })

  succes() {
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  updateUser(numc: string) {
    this.router.navigate(['controle-produit', numc]);
  }
  goToctrlList() {
    this.router.navigate(['/list-ctrl']);
  }

  cmdSelected(e){
    console.log(e.target.value);
    for(let r of this.Cmds){
      if(r.numero == e.target.value) {
        console.log("OK!!");
        this.idcmd=r.id_cmd
        console.log("id:"+this.idcmd);
      }
    }
    this.getPdtsCmd();

  }


  onSubmitctrl() {
    // this.cs.addControle(this.form).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     this.succes();
    //     this.goToctrlList();

    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }

  createCtrl(numcmd: String, numfac: String) {
    this.router.navigate(['ctrl-produit', numcmd, numfac,this.lpofcmd]);

  }


  change() {
    console.log(this.selectedOption);
    console.log(this.cmdService.getCmdPdt(this.selectedOption));


  }


getPdtsCmd() {
    this.pdts.getPdtListcmd(this.idcmd).subscribe(data => {
      this.Cmds = data;
      this.lpofcmd=data;
      console.log(this.lpofcmd);    });

  }
  getCmds() {
    this.cmdService.getCmdList().subscribe(data => {
      this.Cmds = data;
      console.log(data);    });

  }

  onSubmit() { 
    this.createCtrl;
    console.log("ddaqsq");}


}
