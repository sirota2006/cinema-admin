import { Component, OnInit, Input } from '@angular/core';
import IMovie from 'src/app/interfaces/IMovie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: IMovie;

  constructor(private moviesService: MoviesService) { };

  ngOnInit() { }

  onSelectMovie() {
    this.moviesService.selectMovie(this.movie);
  };

}
