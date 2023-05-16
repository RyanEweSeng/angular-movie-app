import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/share/services/auth/auth.service';
import { emailValidator } from 'src/app/share/validators/email-exist.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [emailValidator(this.authService)]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) this.authService.loginUser(this.loginForm.value);
  }
}
