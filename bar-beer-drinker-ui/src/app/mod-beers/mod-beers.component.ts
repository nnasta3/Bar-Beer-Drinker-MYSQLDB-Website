import { Component, OnInit } from '@angular/core';
import { ModBeersService } from '../mod-beers.service';

@Component({
  selector: 'app-mod-beers',
  templateUrl: './mod-beers.component.html',
  styleUrls: ['./mod-beers.component.css']
})
export class ModBeersComponent implements OnInit {

  constructor(
    public modBeersServ:ModBeersService,
  ) { }

  ngOnInit() {
  }
  doPOST(){
    console.log("POST");
    return this.modBeersServ.modBeers();
  }
  doPUT(){
    console.log("POST");
    return this.modBeersServ.modBeersUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modBeersServ.modBeersDel();
  }
}
