import { Injectable } from '@angular/core';
import { Curso } from './cursos/curso'; // Asegúrate de importar la clase Curso

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  constructor() {}

  getCursos(): Curso[] {
    // Aquí podrías hacer una solicitud HTTP para obtener los cursos desde una API
    // Por ahora, solo retornaremos una lista fija de cursos
    return [
      { id: '1', nombre: 'html 5', creditos: 4 },
      { id: '2', nombre: 'javascript', creditos: 4 },
      { id: '3', nombre: 'css', creditos: 4 },
      { id: '4', nombre: 'Java', creditos: 5 }
    ];
  }
}
