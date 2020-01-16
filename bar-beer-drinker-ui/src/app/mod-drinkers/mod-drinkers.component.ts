import { Component, OnInit } from '@angular/core';
import { ModDrinkersService, Drinker } from '../mod-drinkers.service';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@Component({
  selector: 'app-mod-drinkers',
  templateUrl: './mod-drinkers.component.html',
  styleUrls: ['./mod-drinkers.component.css']
})


export class ModDrinkersComponent implements OnInit {

myForm: FormGroup;
name:FormControl;
state:FormControl;
phone:FormControl;
addr:FormControl;

drinker:Drinker;



  constructor(
    public modDrinkersServ:ModDrinkersService,
  ) { }

  ngOnInit() {
  }
  doPOST(){
    console.log("POST");
    return this.modDrinkersServ.modDrinkerInsert();
  }
  doPUT(){
    console.log("POST");
    return this.modDrinkersServ.modDrinkerUp();
  }
  doDELETE(){
    console.log("POST");
    return this.modDrinkersServ.modDrinkerDel();
  }
}
