import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



export interface Beers{
  name:string;
  manf:string;
}



@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(
    public http: HttpClient 
  ) { }

  getBeers() {
    return this.http.get<Beers[]>('/api/beers');
  }



}

