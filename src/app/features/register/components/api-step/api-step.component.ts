import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-api-step',
  templateUrl: './api-step.component.html',
  styleUrls: ['./api-step.component.scss']
})
export class ApiStepComponent {
  @Input() parentFormGroup!: FormGroup;

  readonly apiKeyMinLength: number = 15;

  constructor() { }

  getFloatValue(controlName: string): FloatLabelType {
    return this.parentFormGroup.get(controlName)?.value || 'auto';
  }
}
