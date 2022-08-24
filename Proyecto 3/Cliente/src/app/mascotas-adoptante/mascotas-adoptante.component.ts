import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecursomascotaUsuarioService } from '../servicios/recursomascota-usuario.service';

@Component({
  selector: 'app-mascotas-adoptante',
  templateUrl: './mascotas-adoptante.component.html',
  styleUrls: ['./mascotas-adoptante.component.css']
})
export class MascotasAdoptanteComponent implements OnInit {
  mascota:any;
  constructor(private mascotas:RecursomascotaUsuarioService,private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.mascotas.getAll().subscribe(data =>{
      this.mascota=data;
    })
  }


}
