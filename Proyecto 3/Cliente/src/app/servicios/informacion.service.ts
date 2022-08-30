import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  
  constructor(private http: HttpClient) { }
  //cambiar comportamiento
  getOne(id:String):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/mascota/1/${id}`);
  }

}
