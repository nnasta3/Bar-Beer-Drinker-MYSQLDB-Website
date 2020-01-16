import { Component, OnInit } from '@angular/core';
import { BeersService, Beers } from '../beers.service';
import { ActivatedRoute} from '@angular/router';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-beers-details',
  templateUrl: './beers-details.component.html',
  styleUrls: ['./beers-details.component.css']
})
export class BeersDetailsComponent implements OnInit {

  beers:Beers[];

  constructor(
    public beersService : BeersService,
  ) { 
    
  }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(){
    this.beersService.getBeers().subscribe(
      data =>{
        this.beers=data;
      },
      error => {
        alert("Could not retrieve a list of beers")
      }
    );
  }

  
}
