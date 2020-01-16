import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Bar{
  name:string;
  state:string;
  phoneNumber:string;
  address:string;
  opens:string;
  closes:string;
  license:string;
}


@Injectable({
  providedIn: 'root'
})
export class ModBarsService {

  constructor(
    public http: HttpClient
  ) { }

  modBars(){
    return this.http.post<Bar>('/api/modBars',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBarsUp(){
    return this.http.put<Bar>('/api/modBarsUp',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBarsDel(){
    return this.http.delete<Bar>('/api/modBarsDel',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  
}
