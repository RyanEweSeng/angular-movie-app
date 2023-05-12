import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/interfaces/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie!: Movie;

  constructor(private router: Router) { }

  goToDetails(id: number) {
    this.router.navigate(['/browse', id]);
  }
}
