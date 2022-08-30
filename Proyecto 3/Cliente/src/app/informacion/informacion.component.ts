import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InformacionService } from '../servicios/informacion.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  infomascota:any;
  id:string ="";
  constructor(private informacion:InformacionService,private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params:Params)=>{
      this.id=params['id2'];
    })

    this.informacion.getOne(this.id).subscribe(data =>{
      this.infomascota=data
      console.log(data)
    })
  }
}
