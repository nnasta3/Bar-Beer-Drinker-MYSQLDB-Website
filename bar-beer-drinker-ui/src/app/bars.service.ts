import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface Bar{
  name:string;
  state:string;
  phoneNumber:string;
  address:string;
  opens:string;
  closes:string;
  license:string;
}

export interface BarMenu{
  beer:string;
  price:number;
}

export interface Top3Beers{
  beer:string;
  total:number;
}

export interface BigSpenders{
  drinker:string;
  total:number;
}

export interface TopManf{
  manf:string;
  total:number;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor( 
    public http: HttpClient  
  )  { }

  getBars() {
    return this.http.get<Bar[]>('/api/bars');
  }

  getBar(bar: string) {
    return this.http.get<BarMenu[]>('/api/bar/sells/' + bar);
  }

  getTop3Beers(bar:string){
    return this.http.get<Top3Beers[]>('/api/bar/most_popular/' + bar);
  }

  getLargestSpenders(bar:string){
    return this.http.get<BigSpenders[]>('/api/bar/largest_spenders/' + bar);
  }

  getMostSoldManf(bar:string){
    return this.http.get<TopManf[]>('/api/bar/produce_most/' + bar);
  }


}
 