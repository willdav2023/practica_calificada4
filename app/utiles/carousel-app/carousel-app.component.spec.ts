import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAppComponent } from './carousel-app.component';

describe('CarouselAppComponent', () => {
  let component: CarouselAppComponent;
  let fixture: ComponentFixture<CarouselAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
