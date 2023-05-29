import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    MaterialModule
  ]
})
export class ShareModule { }
