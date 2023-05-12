import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/interfaces/movie';
import { MovieService } from 'src/app/share/services/movie/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  movieData!: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.movieService.getData().subscribe(res => {
      console.log(res.results);
      this.movieData = res.results.reduce((result: Movie[], curr: Movie) => {
        result.push({
          id: curr.id,
          poster_path: curr.poster_path,
          title: curr.title,
          overview: curr.overview,
          original_language: curr.original_language,
          release_date: curr.release_date,
          vote_average: curr.vote_average
        });

        return result;
      }, []);
    });
  }
}
