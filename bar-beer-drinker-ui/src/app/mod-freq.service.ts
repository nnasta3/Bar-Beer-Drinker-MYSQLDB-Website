import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Freq{
  drinker:string;
  bar:string;
}

@Injectable({
  providedIn: 'root'
})

export class ModFreqService {

  constructor(
    public http: HttpClient
  ) { }

  modFreq(){
    return this.http.post<Freq>('/api/modFreq',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modFreqUp(){
    return this.http.put<Freq>('/api/modFreqUp',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modFreqDel(){
    return this.http.delete<Freq>('/api/modFreqDel',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

}
