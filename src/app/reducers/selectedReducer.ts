import IMovie from '../interfaces/IMovie';
import { MovieAction } from "../actions/movies.action";

const { SELECT_MOVE } = MovieAction;

export default function selectedReducer(state: IMovie = null, action) {
  switch (action.type) {
    case SELECT_MOVE:
      if (!action.payload) {
        return null
      };

      return action.payload;
    default:
      return state;
  }
}