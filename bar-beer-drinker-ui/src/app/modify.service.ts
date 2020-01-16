import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ModifyService {

  constructor(
    public http: HttpClient 
  ) { }

}
