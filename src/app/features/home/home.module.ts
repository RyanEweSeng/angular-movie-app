import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { TitleContentComponent } from './components/title-content/title-content.component';

@NgModule({
  declarations: [
    HomeComponent,
    TitleContentComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
