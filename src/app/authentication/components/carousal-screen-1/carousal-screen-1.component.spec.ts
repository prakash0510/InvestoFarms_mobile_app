import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalScreen1Component } from './carousal-screen-1.component';

describe('CarousalScreen1Component', () => {
  let component: CarousalScreen1Component;
  let fixture: ComponentFixture<CarousalScreen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarousalScreen1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousalScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
