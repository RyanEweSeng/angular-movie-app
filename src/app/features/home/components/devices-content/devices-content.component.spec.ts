import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesContentComponent } from './devices-content.component';

describe('DevicesContentComponent', () => {
  let component: DevicesContentComponent;
  let fixture: ComponentFixture<DevicesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
