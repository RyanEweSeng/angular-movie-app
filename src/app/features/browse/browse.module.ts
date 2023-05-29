import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowseRoutingModule } from './browse-routing.module';

import { TruncatePipe } from 'src/app/core/pipes/truncate/truncate.pipe';

import { BrowseComponent } from './browse.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { TrailerComponent } from './components/trailer/trailer.component';

@NgModule({
  declarations: [
    BrowseComponent,
    MovieItemComponent,
    MovieDetailComponent,
    TruncatePipe,
    MovieListComponent,
    TrailerComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    HttpClientModule,
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
