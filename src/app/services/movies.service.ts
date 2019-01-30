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
    this.ngRedux.dispatch(this.movieAction.selectMovieAction(movies[0]));
  };

  async fetchMovie(title: string) {
    try {
      const { data } = await ombapi.get(title);
      const genre = data.Genre.split(",").map(gen => gen.replace(/[^a-zA-Z0-9]/g, ""));
      const paresdTitle = data.Title.replace(/[^a-zA-Z0-9]/g, " ");
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
    this.ngRedux.dispatch(this.movieAction.selectMovieAction(movie));
  }

  deleteMovie() {
    const { selectedMovie, movies } = this.ngRedux.getState();
    const index = movies.findIndex(movie => movie.id === selectedMovie.id);
    this.ngRedux.dispatch(this.movieAction.removeMovieAction(selectedMovie.id));
    this.ngRedux.dispatch(this.movieAction.selectMovieAction(movies[index + 1]));

  }

  selectMovie(movie: IMovie) {
    this.ngRedux.dispatch(this.movieAction.selectMovieAction(movie));
  }
}
