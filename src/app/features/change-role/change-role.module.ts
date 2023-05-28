import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeRoleRoutingModule } from './change-role-routing.module';

import { ChangeRoleComponent } from './change-role.component';

@NgModule({
  declarations: [
    ChangeRoleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChangeRoleRoutingModule
  ]
})
export class ChangeRoleModule { }
