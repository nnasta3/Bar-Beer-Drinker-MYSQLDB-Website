import { Component, OnInit } from '@angular/core';
import { ModBarsService } from '../mod-bars.service';

@Component({
  selector: 'app-mod-bars',
  templateUrl: './mod-bars.component.html',
  styleUrls: ['./mod-bars.component.css']
})
export class ModBarsComponent implements OnInit {

  constructor(
    public modbarsServ:ModBarsService,
  ) { }

  ngOnInit() {
  }
  doPOST(){
    console.log("POST");
    return this.modbarsServ.modBars();
  }
  doPUT(){
    console.log("POST");
    return this.modbarsServ.modBarsUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modbarsServ.modBarsDel();
  }
}
