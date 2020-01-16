import { Component, OnInit } from '@angular/core';
import { ModBillsService } from '../mod-bills.service';

@Component({
  selector: 'app-mod-bills',
  templateUrl: './mod-bills.component.html',
  styleUrls: ['./mod-bills.component.css']
})
export class ModBillsComponent implements OnInit {

  constructor(
    public modBillServ:ModBillsService,
  ) { }

  ngOnInit() {
  }

  doPOST(){
    console.log("POST");
    return this.modBillServ.modBills();
  }
  doPUT(){
    console.log("POST");
    return this.modBillServ.modBillsUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modBillServ.modBillsDel();
  }

}
