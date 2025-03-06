import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressImageComponent } from './progress-image.component';

describe('ProgressImageComponent', () => {
  let component: ProgressImageComponent;
  let fixture: ComponentFixture<ProgressImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
