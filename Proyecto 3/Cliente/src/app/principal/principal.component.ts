import { Component, OnInit } from '@angular/core';
import { RecursoFundacionesService } from '../servicios/recurso-fundaciones.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  fundaciones:any=[];
  constructor(private RecursoFundacionesService: RecursoFundacionesService) {
  }
  ngOnInit(): void {
    this.RecursoFundacionesService.getAll().subscribe(data =>{
      this.fundaciones=data;
    })
  }

}
