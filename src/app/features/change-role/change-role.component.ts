import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.scss']
})
export class ChangeRoleComponent implements OnInit {
  roleForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.roleForm = this.formBuilder.group({
      role: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      this.authService.updateRole(this.roleForm.value);
    }
  }
}
