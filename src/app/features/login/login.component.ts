import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/share/services/auth/auth.service';
import { emailUnavailableValidator } from 'src/app/share/validators/email-unavailable.validator';

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
      email: ['', [Validators.required, Validators.email], [emailUnavailableValidator(this.authService)]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }
}
