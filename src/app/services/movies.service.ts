import { Injectable } from '@angular/core';
import { NgRedux } from "@angular-redux/store";
import ombapi from "../apis/ombapi";
import { IAppState } from '../store';
import IMovie from '../interfaces/IMovie';
import Movie from '../classes/movie';
import { MovieAction } from "../actions/movies.action";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private ngRedux: NgRedux<IAppState>, private movieAction: MovieAction) { }

  async fetchMovies(titles: string[]) {
    const requests: Array<Promise<IMovie>> = titles.map(title => this.fetchMovie(title));
    const movies: Array<IMovie> = await Promise.all(requests);

    this.ngRedux.dispatch(this.movieAction.setMoviesAction(movies));
    this.selectMovie(movies[0]);
  };

  async fetchMovie(title: string): Promise<IMovie> {
    try {
      const { data } = await ombapi.get(title);
      const genre: Array<string> = data.Genre.split(",").map(gen => gen.replace(/[^a-zA-Z0-9]/g, ""));
      const paresdTitle: string = data.Title.replace(/[^a-zA-Z0-9]/g, " ");
      const movie: IMovie = new Movie(
        data.imdbID,
        paresdTitle,
        data.Year,
        data.Runtime,
        genre,
        data.Director,
        data.Poster,
        data.Plot,
        data.imdbRating
      );

      return movie;
    } catch (err) {
      console.log(err);
    }
  }

  addMovie(movie: IMovie) {
    this.ngRedux.dispatch(this.movieAction.addMovieAction(movie));
  };

  editMovie(movie: IMovie) {
    this.ngRedux.dispatch(this.movieAction.editMovieAction(movie));
    this.selectMovie(movie);
  }

  deleteMovie() {
    const { selectedMovie, movies } = this.ngRedux.getState();
    // find movie to delete index in movie array 
    const index = movies.findIndex(movie => movie.id === selectedMovie.id);
    this.ngRedux.dispatch(this.movieAction.removeMovieAction(selectedMovie.id));
    // check if next or prev movie exist if not select null
    if (movies[index + 1]) {
      this.selectMovie(movies[index + 1])
    } else if (movies[index - 1]) {
      this.selectMovie(movies[index - 1])
    } else {
      this.selectMovie(null)
    }
  }

  selectMovie(movie: IMovie) {
    this.ngRedux.dispatch(this.movieAction.selectMovieAction(movie));
  }
}
