import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieDetails } from 'src/app/core/interfaces/movie-details';
import { MovieService } from 'src/app/share/services/movie-data/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId!: number;
  movieDetails!: MovieDetails;
  movieGenres!: Array<Object>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movieId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || "0", 10);
    this.getDetails();
  }

  getDetails() {
    this.movieService.getDetails(this.movieId).subscribe(res => {
      console.log(res);
      this.movieDetails = res;
      this.movieGenres = this.movieDetails.genres.map(genre => genre.name);
    });
  }

  goToMovieList() {
    this.router.navigate(['/browse']);
  }
}
