import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaFormComponent } from './matricula-form.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


describe('MatriculaFormComponent', () => {
  let component: MatriculaFormComponent;
  let fixture: ComponentFixture<MatriculaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatriculaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
