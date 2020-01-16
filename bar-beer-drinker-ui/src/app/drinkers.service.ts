import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



export interface Drinkers{
  name:string;
  state:string;
  phoneNumber:string;
  address:string;
}


@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(
    public http: HttpClient
  ) { }

  getAllDrinkers(){
    return this.http.get<Drinkers[]>('/api/drinkers');
  }
}
