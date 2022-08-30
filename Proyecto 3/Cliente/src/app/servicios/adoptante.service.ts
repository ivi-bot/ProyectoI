import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdoptanteService {
//INFORMACION DEL USUARIO
  constructor(private http: HttpClient) { }
  //cambiar comportamiento
  getAll():Observable<any>{
    return this.http.get<any>(`http://localhost:3000/adoptante/2`);
  }
}
