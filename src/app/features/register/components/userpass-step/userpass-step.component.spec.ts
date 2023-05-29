import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpassStepComponent } from './userpass-step.component';

describe('UserpassStepComponent', () => {
  let component: UserpassStepComponent;
  let fixture: ComponentFixture<UserpassStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpassStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpassStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
