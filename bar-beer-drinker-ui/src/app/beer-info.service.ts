import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface TopSellers{
  bar:string;
  bills:number;
}

export interface BigConsumers{
  drinker:string;
  bills:number;
}

export interface TimeDist{
  hours:number;
  BeerSoldByHour:number;
}

@Injectable({
  providedIn: 'root'
})
export class BeerInfoService {

  constructor(
    public http: HttpClient
  ) { }

getTopSellers(beerName: string){
  return this.http.get<TopSellers[]>('/api/beer/top_sellers/' + beerName)
}

getBiggestConsumers(beerName: string){
  return this.http.get<BigConsumers[]>('/api/beer/biggest_consumers/' + beerName)
}

getTimeDist(beerName: string){
  return this.http.get<TimeDist[]>('/api/beer/time_distribution/' + beerName)
}

}
