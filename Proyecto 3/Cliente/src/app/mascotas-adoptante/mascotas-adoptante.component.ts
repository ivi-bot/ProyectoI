import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecursomascotaUsuarioService } from '../servicios/recursomascota-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-adoptante',
  templateUrl: './mascotas-adoptante.component.html',
  styleUrls: ['./mascotas-adoptante.component.css']
})
export class MascotasAdoptanteComponent implements OnInit {
  mascota:any;
  constructor(private mascotas:RecursomascotaUsuarioService,private ruta:Router) { }

  ngOnInit(): void {
    this.mascotas.getAll().subscribe(data =>{
      this.mascota=data;
    })
  }

  goToinformacion(id:String){
    this.ruta.navigate(['/informacion/1',id])
  }
}
