import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalScreen2Component } from './carousal-screen-2.component';

describe('CarousalScreen2Component', () => {
  let component: CarousalScreen2Component;
  let fixture: ComponentFixture<CarousalScreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarousalScreen2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousalScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
