import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionService } from '../../gestion/gestion.service';
import { Curso } from '../../gestion/cursos/curso';


@Component({
  selector: 'app-matricula-form',
  standalone: true,
  imports: [],
  templateUrl: './matricula-form.component.html',
  styleUrl: './matricula-form.component.css'
})
export class MatriculaFormComponent  {
  formularioMatricula!: FormGroup;
  cursos!: Curso[];

  constructor(private formBuilder: FormBuilder, private gestionService: GestionService) {}


  ngOnInit(): void {
    this.formularioMatricula = this.formBuilder.group({
      alumnoId: ['', Validators.required],
      cursoIds: [[], Validators.required]
    });

    this.cargarCursos();
  }

  cargarCursos() {
    this.cursos = this.gestionService.getCursos();
  }

  onSubmit() {
    if (this.formularioMatricula.valid) {
      console.log(this.formularioMatricula.value);
      this.formularioMatricula.reset();
    } else {
      this.formularioMatricula.markAllAsTouched();
    }
  }
}
