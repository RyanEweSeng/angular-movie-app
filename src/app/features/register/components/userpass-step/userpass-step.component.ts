import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-userpass-step',
  templateUrl: './userpass-step.component.html',
  styleUrls: ['./userpass-step.component.scss']
})
export class UserpassStepComponent {
  @Input() parentFormGroup!: FormGroup;

  readonly usernameMinLength: number = 4;
  readonly passwordMinLength: number = 8;

  constructor() { }

  getFloatValue(controlName: string): FloatLabelType {
    return this.parentFormGroup.get(controlName)?.value || 'auto';
  }
}
