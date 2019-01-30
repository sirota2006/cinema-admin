import { Component, OnInit, Input } from '@angular/core';
import IMovie from 'src/app/interfaces/IMovie';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { SELECT_MOVE } from 'src/app/actions';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: IMovie;

  constructor(private ngRedux: NgRedux<IAppState>) { };

  ngOnInit() {
  };

  onSelectMovie() {
    this.ngRedux.dispatch({
      type: SELECT_MOVE,
      payload: this.movie
    });
  };
};
