
import { Routes } from '@angular/router';
import { CarouselAppComponent } from './utiles/carousel-app/carousel-app.component';
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';
import { CursosComponent } from './gestion/cursos/cursos.component';
import { MatriculaFormComponent } from './matricula/matricula-form/matricula-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: CarouselAppComponent },
    { path: 'gestion/cursos', component: CursosComponent },
    { path:'gestion/alumnos', component:AlumnosComponent},
    { path:'matricula/matricula-form', component:MatriculaFormComponent}
];
