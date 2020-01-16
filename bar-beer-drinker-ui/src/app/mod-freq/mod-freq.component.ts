import { Component, OnInit } from '@angular/core';
import { ModFreqService } from '../mod-freq.service';

@Component({
  selector: 'app-mod-freq',
  templateUrl: './mod-freq.component.html',
  styleUrls: ['./mod-freq.component.css']
})
export class ModFreqComponent implements OnInit {

  constructor(
    public modFreqServ:ModFreqService,
  ) { }

  ngOnInit() {
  }
  doPOST(){
    console.log("POST");
    return this.modFreqServ.modFreq();
  }
  doPUT(){
    console.log("POST");
    return this.modFreqServ.modFreqUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modFreqServ.modFreqDel();
  }
}
