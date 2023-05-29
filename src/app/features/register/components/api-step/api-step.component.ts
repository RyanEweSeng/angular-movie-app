import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FloatLabelType } from '@angular/material/form-field';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-api-step',
  templateUrl: './api-step.component.html',
  styleUrls: ['./api-step.component.scss']
})
export class ApiStepComponent {
  @Input() parentFormGroup!: FormGroup;

  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  readonly apiKeyMinLength: number = 15;

  constructor() { }

  getFloatValue(controlName: string): FloatLabelType {
    return this.parentFormGroup.get(controlName)?.value || 'auto';
  }
}
