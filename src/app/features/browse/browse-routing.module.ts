import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailResolver } from 'src/app/share/resolvers/movie-detail/movie-detail.resolver';
import { TrailerResolver } from 'src/app/share/resolvers/trailer/trailer.resolver';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: [
      { path: '', component: MovieListComponent },
      { path: ':id', component: MovieDetailComponent, resolve: { movieDetails: MovieDetailResolver, trailer: TrailerResolver } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
