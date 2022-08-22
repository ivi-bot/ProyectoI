import { Component, OnInit } from '@angular/core';
interface ciudad {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  ciudad: ciudad[] = [
    {value: 'Guayaquil', viewValue: 'Guayaquil'},
    {value: 'Quito', viewValue: 'Quito'},
    {value: 'Cuenca', viewValue: 'Cuenca'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
