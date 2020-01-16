import { Component, OnInit } from '@angular/core';
import { ModSellsService } from '../mod-sells.service';

@Component({
  selector: 'app-mod-sells',
  templateUrl: './mod-sells.component.html',
  styleUrls: ['./mod-sells.component.css']
})
export class ModSellsComponent implements OnInit {

  constructor(
    public modSellsServ:ModSellsService,
  ) { }

  ngOnInit() {
  }
  doPOST(){
    console.log("POST");
    return this.modSellsServ.modSells();
  }
  doPUT(){
    console.log("POST");
    return this.modSellsServ.modSellsUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modSellsServ.modSellsDel();
  }
}
