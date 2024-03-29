
import { Component } from '@angular/core';
import { Curso } from '../cursos/curso';
import {  } from '../gestion.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

    //creando un arreglo de la clase curso
    cursos: Curso[] = [
      { id: '1', nombre: 'html 5', creditos: 4 },
      { id: '2', nombre: 'javascript', creditos: 4 },
      { id: '3', nombre: 'css', creditos: 4 },
      { id: '4', nombre: 'Java', creditos: 5 }
    ];

}
