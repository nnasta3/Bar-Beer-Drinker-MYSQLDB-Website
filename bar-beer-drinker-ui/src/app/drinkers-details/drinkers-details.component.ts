import { Component, OnInit } from '@angular/core';
import { DrinkersService, Drinkers } from '../drinkers.service';

@Component({
  selector: 'app-drinkers-details',
  templateUrl: './drinkers-details.component.html',
  styleUrls: ['./drinkers-details.component.css']
})
export class DrinkersDetailsComponent implements OnInit {

  drinkers:Drinkers[]

  constructor(
    public drinkersService : DrinkersService
  ) { }

  ngOnInit() {
    this.getDrinkers();
  }
  getDrinkers(){
    this.drinkersService.getAllDrinkers().subscribe(
      data =>{
        this.drinkers=data;
        console.log(this.drinkers)
      },
      error => {
        alert("Could not retrieve a list of drinkers")
      }
    );
  }
}
