import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Bord{
  id:number;
  bar:string;
  drinker:string;
  beerCount:number;
  beer:string;
  date:string;
  time:string;
}

@Injectable({
  providedIn: 'root'
})
export class ModBordService {

  constructor(
    public http: HttpClient
  ) { }

  modBord(){
    return this.http.post<Bord>('/api/modBord',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBordUp(){
    return this.http.put<Bord>('/api/modBordUp',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBordDel(){
    return this.http.delete<Bord>('/api/modBordDel',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
