import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursoFundacionesService {
  constructor(private http: HttpClient) { }
  

  getAll():Observable<any>{
    return this.http.get<any>('http://localhost:3000/fundacion');
  }

  getOne(id:string):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/fundacion/${id}`);
  }
}
