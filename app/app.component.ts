import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAppComponent } from './utiles/header-app/header-app.component';
import { FooterAppComponent } from './utiles/footer-app/footer-app.component';
import { CursosComponent } from './gestion/cursos/cursos.component';
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderAppComponent,FooterAppComponent,CursosComponent,AlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'academiajava-app';
}
