import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie-data/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver {
  constructor(private movieService: MovieService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const movieId = parseInt(route.paramMap.get('id') || '0', 10);
    return this.movieService.getDetails(movieId);
  }
}
