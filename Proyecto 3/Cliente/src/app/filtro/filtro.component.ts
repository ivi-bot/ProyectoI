import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../servicios/filtro.service';
/*
interface ciudad {
  value: string;
  viewValue: string;
}*/

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  /*
  ciudad: ciudad[] = [
    {value: 'Guayaquil', viewValue: 'Guayaquil'},
    {value: 'Quito', viewValue: 'Quito'},
    {value: 'Cuenca', viewValue: 'Cuenca'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
*/
ciudades:any=[];
selectedProfile:string ="";
constructor(private FiltroService: FiltroService) {
}
ngOnInit(): void {
  this.FiltroService.getAll().subscribe(data =>{
    this.ciudades=data;
    this.selectedProfile= "Seleccione una ciudad"; 
  })
}
buscarMascota(evento:any){
  console.log(evento.value.tipo_usuario.direccion)
}

}
