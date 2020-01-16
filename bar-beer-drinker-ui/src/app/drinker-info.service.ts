import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface Bills{
  id:number;
  items: string;
  price:number;
  tip:number;
  bar:string;
  time:string;
  date:string;
}
export interface TopBeersOrd{
  beer:string;
  numBeers:number;
}

export interface SumPrice{
  bar:string;
  total:number;
}

export interface TimeSpending{
  total:number;
  mon:number;
}
export interface TimeSpendingYear{
  total:number;
  yr:number;
}
@Injectable({
  providedIn: 'root'
})
export class DrinkerInfoService {

  constructor(
    public http: HttpClient
  ) { }

  getBills(drinkerName: string){
    return this.http.get<Bills[]>('/api/drinker/' + drinkerName)
  }

  getTopBeersOrd(drinkerName:string){
    return this.http.get<TopBeersOrd[]>('/api/drinker/topOrd/' + drinkerName)
  }

  getSumPrice(drinkerName:string){
    return this.http.get<SumPrice[]>('/api/drinker/sum/' + drinkerName)
  }

  getTimeSpending(drinkerName:string){
    return this.http.get<TimeSpending[]>('/api/drinker/spending/' + drinkerName)
  }
  getTimeSpendingYear(drinkerName:string){
    return this.http.get<TimeSpendingYear[]>('/api/drinker/spending/year/' + drinkerName)
  }
}
