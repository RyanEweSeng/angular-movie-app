import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { TitleContentComponent } from './components/title-content/title-content.component';
import { DevicesContentComponent } from './components/devices-content/devices-content.component';
import { BrowseContentComponent } from './components/browse-content/browse-content.component';
import { FaqContentComponent } from './components/faq-content/faq-content.component';
import { RegisterContentComponent } from './components/register-content/register-content.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [
    HomeComponent,
    TitleContentComponent,
    DevicesContentComponent,
    BrowseContentComponent,
    FaqContentComponent,
    RegisterContentComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
