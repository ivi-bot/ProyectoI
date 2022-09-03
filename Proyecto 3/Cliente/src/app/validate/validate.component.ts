import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FiltroinformacionService } from '../servicios/filtroinformacion.service';


@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
 infomascota:any = []
 idmascota:string ="";

 constructor(private FiltroinformacionService:FiltroinformacionService,private rutaActiva:ActivatedRoute) { }
 ngOnInit(): void {
  this.rutaActiva.params.subscribe((params:Params)=>{
    this.idmascota=params['id'];
  })
 
  this.FiltroinformacionService.getOne(this.idmascota).subscribe(data =>{
    this.infomascota=Object.values(data)    
    console.log(this.infomascota)
  })

}
}