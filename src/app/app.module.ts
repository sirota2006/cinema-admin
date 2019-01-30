import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { IAppState } from "./store";
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { store } from "./store";
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.service';
import { YoutubeService } from './services/youtube.service';
import { MovieItemComponent } from './components/movies/movie-item/movie-item.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieTrailer } from './components/movieTrailer/movieTrailer.component';
import { SafePipe } from './pipes/safe.pipe';
import { RatingPipe } from './pipes/rating.pipe';
import { GenrePipe } from './pipes/genre.pipe';
import { YearPipe } from './pipes/year.pipe';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { ValidationService } from './services/validation.service';
import { TitlePipe } from './pipes/title.pipe';
import { MovieAction } from "./actions/movies.action";
import { ScrollTopDirective } from './directives/scroll-top.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieTrailer,
    SafePipe,
    RatingPipe,
    GenrePipe,
    YearPipe,
    MovieFormComponent,
    ValidationMessageComponent,
    TitlePipe,
    ScrollTopDirective
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgReduxModule
  ],
  providers: [MoviesService, YoutubeService, ValidationService, MovieAction],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
