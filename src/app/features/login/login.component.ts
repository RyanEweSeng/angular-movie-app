import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { emailUnavailableValidator } from 'src/app/core/validators/email-unavailable.validator';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginSuccess: boolean = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [emailUnavailableValidator(this.authService)]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log('login response');
          console.log(res);
          this.authService.updateDetails(res);
          this.router.navigate(['/browse']);
        },
        error: (err) => {
          this.loginSuccess = false;
        }
      });
    }
  }

  getFloatValue(controlName: string): FloatLabelType {
    return this.loginForm.get(controlName)?.value || 'auto';
  }
}
