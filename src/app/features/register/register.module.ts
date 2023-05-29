import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';
import { UserpassStepComponent } from './components/userpass-step/userpass-step.component';
import { ApiStepComponent } from './components/api-step/api-step.component';

@NgModule({
  declarations: [
    RegisterComponent,
    UserpassStepComponent,
    ApiStepComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
  ]
})
export class RegisterModule { }
