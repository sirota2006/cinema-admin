import { SELECT_MOVE, RESET_SELECTED_MOVIE } from "../actions/index";
import IMovie from '../interfaces/IMovie';

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