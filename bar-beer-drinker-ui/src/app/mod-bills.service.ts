import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Bill{
  id:number;
  items: string;
  price:number;
  tip:number;
  bar:string;
  time:string;
  date:string;
}

@Injectable({
  providedIn: 'root'
})
export class ModBillsService {

  constructor(
    public http: HttpClient
  ) { }

  modBills(){
    return this.http.post<Bill>('/api/modBills',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBillsUp(){
    return this.http.put<Bill>('/api/modBillsUp',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modBillsDel(){
    return this.http.delete<Bill>('/api/modBillsDel',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
