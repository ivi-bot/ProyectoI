import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecursomascotaUsuarioService {

  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>('http://localhost:3000/mascota/1');
  }

}
