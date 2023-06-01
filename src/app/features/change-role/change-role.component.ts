import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.scss']
})
export class ChangeRoleComponent implements OnInit {
  roleForm!: FormGroup;
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.roleForm = this.formBuilder.group({
      role: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      if (localStorage.getItem('token')) {
        this.authService.changeRole(this.roleForm.value).subscribe();
        this.router.navigate(['/browse']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}
