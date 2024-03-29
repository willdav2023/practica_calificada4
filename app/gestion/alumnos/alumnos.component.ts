import { Component } from '@angular/core';
import { Alumno } from './alumno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  //creando un arreglo de la clase curso
  alumnos: Alumno[] = [
    { id: '1', nombre: 'William', apellido:'Pozo', promedio: 18, estado:true},
    { id: '2', nombre: 'Juan', apellido:'Quispe', promedio: 17, estado:true},
    { id: '3', nombre: 'Pedro', apellido:'Soto', promedio: 16, estado:true},
    { id: '4', nombre: 'Carlos', apellido:'Muñoz', promedio: 10, estado:false},
  ];
}