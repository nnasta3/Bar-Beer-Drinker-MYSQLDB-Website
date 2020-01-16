import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


export interface Beer{
  name:string;
  manf:string;
}


@Injectable({
  providedIn: 'root'
})


export class ModBeersService {

  constructor(
    public http: HttpClient
  ) { }


  modBeers(){
    return this.http.post<Beer>('/api/modBeers',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBeersUp(){
    return this.http.put<Beer>('/api/modBeersUp',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBeersDel(){
    return this.http.delete<Beer>('/api/modBeersDel',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
