import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(`http://localhost:3000/fundaciones`);
  }

  getMascotasfiltro(ciudad:String):Observable<any>{
    return this.http.get<any>(`https://puppym-aad2b-default-rtdb.firebaseio.com/mascotas.json?orderBy=%22ciudad%22&equalTo=%22${ciudad}%22`);
  }


}
