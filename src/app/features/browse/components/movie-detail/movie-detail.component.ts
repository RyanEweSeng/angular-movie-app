import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieDetails } from 'src/app/core/interfaces/movie-details';
import { MovieService } from 'src/app/core/services/movie-data/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId!: number;
  movieDetails!: MovieDetails;
  movieGenres!: Array<Object>;
  trailerKey!: string;
  trailerFlag: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movieId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0', 10);
    this.getDetails();
    this.getTrailerKey();
  }

  getDetails() {
    this.movieDetails = this.activatedRoute.snapshot.data['movieDetails'];
    this.movieGenres = this.movieDetails.genres.map(genre => genre.name);
  }

  getTrailerKey() {
    this.trailerKey = this.activatedRoute.snapshot.data['trailer'].results.filter((item: { name: string }) => item.name === 'Official Trailer')[0].key;
  }

  showTrailer() {
    this.trailerFlag = true;
  }

  closeTrailer() {
    this.trailerFlag = false;
  }

  goToMovieList() {
    this.router.navigate(['/browse']);
  }
}
