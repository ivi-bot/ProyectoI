import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../servicios/filtro.service';
import { Router } from '@angular/router';
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
mostrar:boolean=false;
mostrar2:boolean=false;
mostrar3:boolean=false;
mascotasNosql:any=[]
mascotasFiltradas:any=[]
mascotasFinal:any=[]
constructor(private FiltroService: FiltroService,private ruta:Router) {
}
scrollToTop(el:any) {
  el.scrollTop = 0;
}
ngOnInit(): void {
  this.FiltroService.getAll().subscribe(data =>{
    this.ciudades=data;
  })
}

buscarMascota(evento:any){
  console.log(evento.value.tipo_usuario.direccion)
  let ciudad=evento.value.tipo_usuario.direccion;
  this.mostrar=true;
  this.FiltroService.getMascotasfiltro(ciudad).subscribe(data =>{
  this.mascotasNosql=data;
  console.log( Object.keys(this.mascotasNosql).length )
//Bien mismos datos
  })
}


buscarTipo(evento:any){
  this.mascotasFiltradas=[]
  let tipo=evento.value
  this.mostrar2=true
  for (const property in this.mascotasNosql) {
    if(this.mascotasNosql[property].tipo==tipo){
      this.mascotasFiltradas.push(this.mascotasNosql[property])
    }
  }
  console.log( Object.keys(this.mascotasFiltradas).length)


}
buscarGenero(evento:any){
  this.mascotasFinal=[]
  let genero=evento.value
  for (const property in this.mascotasFiltradas) {
    console.log(this.mascotasFiltradas[property].genero)
    if(this.mascotasFiltradas[property].genero==genero){
      this.mascotasFinal.push(this.mascotasFiltradas[property])
      
  }}
  this.mostrar3=true

  /*
  console.log("test")
  console.log(  Object.assign({}, this.mascotasFinal))
*/
}

goToinformacion(id:String){
  this.ruta.navigate(['/validate',id])
}


}
