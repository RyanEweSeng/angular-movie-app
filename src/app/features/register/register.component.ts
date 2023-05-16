import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/share/services/auth/auth.service';
import { emailValidator } from 'src/app/share/validators/email-exist.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  currentStep: number = 0;
  passwordMinLength: number = 8;
  apiKeyMinLength: number = 15;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], emailValidator(this.authService)],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
      username: ['', Validators.required],
      role: ['', Validators.required],
      tmdb_key: ['', [Validators.required, Validators.minLength(this.apiKeyMinLength)]],
      plan_type: ['', Validators.required],
    })
  }

  nextRegisterStep(): void {
    this.currentStep++;
  }

  prevRegisterStep(): void {
    this.currentStep--;
  }

  onSubmit(): void {
    console.log(this.registerForm);
    if (this.registerForm.valid) this.authService.registerUser(this.registerForm.value);
  }
}
