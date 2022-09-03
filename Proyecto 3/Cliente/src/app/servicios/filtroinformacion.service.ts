import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FiltroinformacionService {

  constructor(private http: HttpClient) { }
  
  getOne(id:String):Observable<any>{
    return this.http.get<any>(`https://puppym-aad2b-default-rtdb.firebaseio.com/mascotas.json?orderBy=%22idmascota%22&equalTo=${id}`);
  }
}
