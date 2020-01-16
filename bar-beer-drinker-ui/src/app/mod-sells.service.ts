import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Sell{
  bar:string;
  beer:string;
  price:number;
}


@Injectable({
  providedIn: 'root'
})
export class ModSellsService {

  constructor(
    public http: HttpClient
  ) { }

  modSells(){
    return this.http.post<Sell>('/api/modSells',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modSellsUp(){
    return this.http.put<Sell>('/api/modSellsUp',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modSellsDel(){
    return this.http.delete<Sell>('/api/modSellsDel',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

}
