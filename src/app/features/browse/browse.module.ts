import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowseRoutingModule } from './browse-routing.module';

import { BrowseComponent } from './browse.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TruncatePipe } from 'src/app/share/pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    BrowseComponent,
    MovieItemComponent,
    MovieDetailComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowseRoutingModule,
  ]
})
export class BrowseModule { }
