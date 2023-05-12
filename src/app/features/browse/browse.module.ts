import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowseRoutingModule } from './browse-routing.module';

import { BrowseComponent } from './browse.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [
    BrowseComponent,
    MovieItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowseRoutingModule,
  ]
})
export class BrowseModule { }
