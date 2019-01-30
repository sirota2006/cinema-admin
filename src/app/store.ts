import { Store, applyMiddleware, createStore, combineReducers } from "redux"
import thunk from "redux-thunk";

import IMovie from "../app/interfaces/IMovie";
import moviesReducer from './reducers/moviesReducer';
import selectedReducer from './reducers/selectedReducer';

export interface IAppState {
  movies: IMovie[];
  selectedMovie: IMovie;
}

const rootReducer = combineReducers<IAppState>({
  movies: moviesReducer,
  selectedMovie: selectedReducer
})

export const store: Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);