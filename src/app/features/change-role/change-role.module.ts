import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeRoleRoutingModule } from './change-role-routing.module';

import { ChangeRoleComponent } from './change-role.component';

@NgModule({
  declarations: [
    ChangeRoleComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    ChangeRoleRoutingModule
  ]
})
export class ChangeRoleModule { }
