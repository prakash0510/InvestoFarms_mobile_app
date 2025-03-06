import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalScreen3Component } from './carousal-screen-3.component';

describe('CarousalScreen3Component', () => {
  let component: CarousalScreen3Component;
  let fixture: ComponentFixture<CarousalScreen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarousalScreen3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousalScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
