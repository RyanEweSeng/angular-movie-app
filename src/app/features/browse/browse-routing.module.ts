import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailResolver } from 'src/app/core/resolvers/movie-detail/movie-detail.resolver';
import { TrailerResolver } from 'src/app/core/resolvers/trailer/trailer.resolver';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: [
      { path: '', component: MovieListComponent },
      { path: ':id', component: MovieDetailComponent, resolve: { movieDetails: MovieDetailResolver, trailer: TrailerResolver }, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
