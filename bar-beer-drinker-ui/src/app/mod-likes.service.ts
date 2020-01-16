import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Like{
  drinker:string;
  beer:string;
}

@Injectable({
  providedIn: 'root'
})
export class ModLikesService {

  constructor(
    public http: HttpClient
  ) { }

  modLikes(){
    return this.http.post<Like>('/api/modLikes',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modLikesUp(){
    return this.http.put<Like>('/api/modLikes',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  modLikesDel(){
    return this.http.delete<Like>('/api/modLikes',{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
