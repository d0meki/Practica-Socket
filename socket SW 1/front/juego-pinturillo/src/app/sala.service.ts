import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from './interfaces/responsesala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private apiUrl = 'http://localhost:4000/sala/';
  constructor(private http: HttpClient) { 
    
  }
  responseSala?:Sala
  getAllSalas():Observable<any>{
    return this.http.get(this.apiUrl + `list`);
  }

}
