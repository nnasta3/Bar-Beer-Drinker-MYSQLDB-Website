import { Component, OnInit } from '@angular/core';
import { ModBordService } from '../mod-bord.service';

@Component({
  selector: 'app-mod-bord',
  templateUrl: './mod-bord.component.html',
  styleUrls: ['./mod-bord.component.css']
})
export class ModBordComponent implements OnInit {

  constructor(
    public modBordServ:ModBordService,
  ) { }

  ngOnInit() {
  }
  doPOST(){
    console.log("POST");
    return this.modBordServ.modBord();
  }
  doPUT(){
    console.log("POST");
    return this.modBordServ.modBordUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modBordServ.modBordDel();
  }
}
