import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material/material.module';
import { AuthService } from '../core/services/auth/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    MaterialModule
  ],
  providers: [
    AuthService
  ]
})
export class ShareModule { }
