import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { NgRedux, select } from '@angular-redux/store';
import IMovie from 'src/app/interfaces/IMovie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @select('movies') movies$: Observable<IMovie[]>;

  constructor(private moviesService: MoviesService) { }

  private titles: string[] = [
    "DeadPool",
    "Iron Man",
    "BlackList",
    "Red",
    "Spider Man",
    "Ant Man",
    "The Avengers",
    "jump street",
    "fire",
    "star wars"
  ];

  async ngOnInit() {
    await this.moviesService.fetchMovies(this.titles);
  }

}
