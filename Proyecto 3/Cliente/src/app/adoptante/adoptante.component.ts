import { Component, OnInit } from '@angular/core';
import { RecursomascotaUsuarioService } from '../servicios/recursomascota-usuario.service';
import { Fundaciones } from '../interfaz/fundaciones';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adoptante',
  templateUrl: './adoptante.component.html',
  styleUrls: ['./adoptante.component.css']
})
export class AdoptanteComponent implements OnInit {

  constructor(private RecursomascotaUsuarioService: RecursomascotaUsuarioService,private ruta:Router) {}

  ngOnInit(): void {
  } 
  goToMismascotas(){
    this.ruta.navigate(['/mascotasadoptante'])

  }

}
