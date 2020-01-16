import { Component, OnInit } from '@angular/core';
import { ModLikesService } from '../mod-likes.service';

@Component({
  selector: 'app-mod-likes',
  templateUrl: './mod-likes.component.html',
  styleUrls: ['./mod-likes.component.css']
})
export class ModLikesComponent implements OnInit {

  constructor(
    public modLikeServ:ModLikesService,
  ) { }

  ngOnInit() {
  }
  doPOST(){
    console.log("POST");
    return this.modLikeServ.modLikes();
  }
  doPUT(){
    console.log("POST");
    return this.modLikeServ.modLikesUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modLikeServ.modLikesDel();
  }
}
