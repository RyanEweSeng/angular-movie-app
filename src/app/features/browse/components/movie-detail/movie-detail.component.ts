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
  trailerKey!: string;
  trailerFlag: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movieId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || "0", 10);
    this.getDetails();
    this.getTrailerKey();
  }

  getDetails() {
    this.movieService.getDetails(this.movieId).subscribe(res => {
      this.movieDetails = res;
      this.movieGenres = this.movieDetails.genres.map(genre => genre.name);
    });
  }

  getTrailerKey() {
    this.movieService.getOfficialTrailer(this.movieId).subscribe(res => {
      this.trailerKey = res.results.filter((item: { name: string; }) => item.name === "Official Trailer")[0].key;
      console.log(this.trailerKey);
    });
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
