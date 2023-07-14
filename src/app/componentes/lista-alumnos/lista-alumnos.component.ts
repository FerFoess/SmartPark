import { Component } from '@angular/core';
import { AlumnosDataService } from 'src/app/servicios/alumnos-data.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  public alumnosData: any=null;

  constructor(private alumnosDataS:AlumnosDataService){
    this.alumnosData=alumnosDataS.getAlumnos();
    console.table(this.alumnosData);
  }

}
