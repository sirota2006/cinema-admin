import { MovieAction } from "../actions/movies.action";

const { ADD_MOVIE, SET_MOVIES, REMOVE_MOVIE, EDIT_MOVIE } = MovieAction

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;
    case ADD_MOVIE:
      return [...state, action.payload]
    case REMOVE_MOVIE:
      return state.filter(movie => movie.id != action.payload);
    case EDIT_MOVIE:
      const updatedMovies = state.map(movie => {
        if (movie.id === action.payload.id) {
          return { ...movie, ...action.payload }
        }
        return movie
      })
      return updatedMovies;
    default:
      return state;
  }
}