import { Component, OnInit } from '@angular/core';
import { AdoptanteService } from '../servicios/adoptante.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adoptante',
  templateUrl: './adoptante.component.html',
  styleUrls: ['./adoptante.component.css']
})
export class AdoptanteComponent implements OnInit {
  adoptante:any;
  constructor(private adoptantes:AdoptanteService,private ruta:Router) { }

  ngOnInit(): void {
    this.adoptantes.getAll().subscribe(data =>{
      this.adoptante=data;
      console.log(data)
    })
  }

  goToMismascotas(id:String){
    this.ruta.navigate(['/mascotasadoptante',id])

  }

}
