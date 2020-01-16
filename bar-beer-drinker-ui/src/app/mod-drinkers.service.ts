import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

export interface Drinker{
  name:string;
  state:string;
  phoneNum:string;
  addr:string;
}



@Injectable({
  providedIn: 'root'
})
export class ModDrinkersService {

  constructor(
    public http: HttpClient
  ) { }


  modDrinkerInsert(){
    return this.http.post<Drinker>('/api/modDrinkers',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modDrinkerUp(){
    return this.http.put<Drinker>('/api/modDrinkersUp',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modDrinkerDel(){
    return this.http.delete<Drinker>('/api/modDrinkersDel',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
