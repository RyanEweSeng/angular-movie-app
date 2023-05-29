import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStepComponent } from './api-step.component';

describe('ApiStepComponent', () => {
  let component: ApiStepComponent;
  let fixture: ComponentFixture<ApiStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
