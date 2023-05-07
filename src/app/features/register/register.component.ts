import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  MIN_LENGTH: number;

  constructor(private formBuilder: FormBuilder) {
    this.MIN_LENGTH = 8;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.MIN_LENGTH)]]
    })
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
    }
  }
}
