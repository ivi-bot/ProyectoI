import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {
//AQUI ESE UNO SIGNIFICA EL USUARIO, SI QUIERO CAMBIAR PUES ES AQUÍ
  
  constructor(private http: HttpClient) { }
  //cambiar comportamiento
  getOne(id:String):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/mascota/1/${id}`);
  }

  getOneUser(id:String):Observable<any>{
    return this.http.get<any>(`https://puppym-aad2b-default-rtdb.firebaseio.com/mascotas.json?orderBy=%22idmascota%22&equalTo=${id}`);
  }

  
}
