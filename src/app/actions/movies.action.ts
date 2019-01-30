import IMovie from '../interfaces/IMovie';
import { AnyAction } from 'redux';

interface ISetMovieAction extends AnyAction {
  type: string;
  payload: Array<IMovie>;
}

interface IAddMovieAction extends AnyAction {
  type: string;
  payload: IMovie;
}

interface IRemoveMovieAction extends AnyAction {
  type: string;
  payload: string;
}

interface IEditMovieAction extends AnyAction {
  type: string;
  payload: IMovie;
}

interface ISelectMovieAction extends AnyAction {
  type: string;
  payload: IMovie;
}

export class MovieAction {
  public static readonly ADD_MOVIE = "ADD_MOVIE";
  public static readonly SET_MOVIES = "SET_MOVIES";
  public static readonly SELECT_MOVE = "SELECT_MOVE";
  public static readonly REMOVE_MOVIE = "REMOVE_MOVIE";
  public static readonly EDIT_MOVIE = "EDIT_MOVIE";

  constructor() {
  }

  setMoviesAction(movies: Array<IMovie>): ISetMovieAction {
    return {
      type: MovieAction.SET_MOVIES,
      payload: movies
    }
  }

  addMovieAction(movie: IMovie): IAddMovieAction {
    return {
      type: MovieAction.ADD_MOVIE,
      payload: movie
    }
  }

  removeMovieAction(movieId: string): IRemoveMovieAction {
    return {
      type: MovieAction.REMOVE_MOVIE,
      payload: movieId
    }
  }

  editMovieAction(movie: IMovie): IEditMovieAction {
    return {
      type: MovieAction.EDIT_MOVIE,
      payload: movie
    }
  }

  selectMovieAction(movie: IMovie): ISelectMovieAction {
    return {
      type: MovieAction.SELECT_MOVE,
      payload: movie
    }
  }

}