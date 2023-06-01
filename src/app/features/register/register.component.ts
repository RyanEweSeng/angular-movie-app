import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { emailAvailableValidator } from 'src/app/core/validators/email-available.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  currentStep: number = 0;

  readonly usernameMinLength: number = 4;
  readonly passwordMinLength: number = 8;
  readonly apiKeyMinLength: number = 15;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], emailAvailableValidator(this.authService)],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
      username: ['', [Validators.required, Validators.minLength(this.usernameMinLength)]],
      role: ['', Validators.required],
      tmdb_key: ['', [Validators.required, Validators.minLength(this.apiKeyMinLength)]]
    })
  }

  nextRegisterStep(): void {
    this.currentStep++;
  }

  prevRegisterStep(): void {
    this.currentStep--;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.registerUser(this.registerForm.value).subscribe();
      this.router.navigate(['/']);
    }
  }
}
