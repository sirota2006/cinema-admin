import { Component, OnInit } from '@angular/core';
import { ValidationService } from "../../services/validation.service";
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from "@angular/forms";
import IMovie from 'src/app/interfaces/IMovie';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ModalService, ModalMode } from 'src/app/services/modal.service';
import Movie from 'src/app/classes/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  @select('movies') movies$: Observable<IMovie[]>;
  private movieTitles: Array<string> = [];
  private editMode = false;
  private movieForm: FormGroup;
  private genres: Array<string> = ["Action", "Drama", "Comedy", "Adventure", "Crime", "SciFi", "Mystery", "Thriller", "Fantasy"];
  private genreControls: Array<FormControl>;
  private movie: IMovie = new Movie("", "", new Date().getFullYear(), "", [], "", "", "", 0);;

  constructor(private fb: FormBuilder, public modalService: ModalService, private moviesService: MoviesService) {
  }

  ngOnInit() {
    // initialze movie titles 
    this.movies$.subscribe(movies => this.movieTitles = movies.map(movie => movie.title.toLowerCase()));
    // on edit mode set selected movie for movie form
    this.modalService.editMovie$.subscribe(movie => this.initEditMode(movie));
    // initialize genre controls 
    this.genreControls = this.genres.map(() => new FormControl(false));
    this.setForm();
  }

  initEditMode(movie: IMovie) {
    this.movie = movie;
    // set edit mode
    this.editMode = true;
    // get selected movie genres controls array
    this.genreControls = this.genres.map(genre => this.movie.genre.includes(genre) ? new FormControl(true) : new FormControl(false));
    this.setForm();
  }

  setForm() {
    // initialize movie form
    this.movieForm = this.fb.group({
      "title": [this.movie.title, [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/), control => ValidationService.titleValidator(control, this.movieTitles)]],
      "year": [this.movie.year, [Validators.required, ValidationService.yearValidator]],
      "runtime": [this.movie.runtime, [Validators.required]],
      "genres": new FormArray(this.genreControls),
      "director": [this.movie.director, [Validators.required]],
      "poster": [this.movie.poster, [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:img|png|jpg|jpeg))/i)]],
      "rating": [this.movie.rating, [Validators.required, Validators.max(10)]],
    });
  }

  onSubmit() {
    this.markAsTouched();
    // check if form valid 
    if (this.movieForm.status == "INVALID") {
      return;
    }
    // create new Movie Object
    const { value } = this.movieForm;
    // get all checked genres from movie  form
    const genre: Array<string> = this.getGenres(value.genres);
    // add min to run time if needed
    const runtime: string = value.runtime.indexOf("min") > -1 ? value.runtime : value.runtime += "min";
    // check if already movie has id else create a new id
    const id = this.movie.id == "" ? new Date().getTime().toString() : this.movie.id;
    // (temp hard descripiton as plot)
    const plot = "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge."
    // create new Movie 
    const movie: IMovie = new Movie(id, value.title, value.year, runtime, genre, value.director, value.poster, plot, value.rating);
    // check if edit mode else add movie
    this.editMode ? this.moviesService.editMovie(movie) : this.moviesService.addMovie(movie);
    this.onClose()
  }

  markAsTouched() {
    // mark all from controls as touched
    Object.keys(this.movieForm.controls).forEach(control => this.movieForm.controls[control].markAsTouched());
  }


  // parse genre from from value
  getGenres(genres: Array<boolean>): Array<string> {
    const genre: Array<string> = [];
    genres.forEach((val: boolean, index: number) => {
      if (val) {
        genre.push(this.genres[index]);
      };
    });

    return genre;
  }

  onClose() {
    // turn off modal
    this.modalService.modalState = false;
    // turn of edit mode if needed
    if (this.editMode) {
      this.editMode = false;
    };
    // initialze form values 
    this.movie = new Movie("", "", new Date().getFullYear(), "", [], "", "", "", 0);
    this.genreControls = this.genres.map(() => new FormControl(false));
    this.setForm();
  }

  deleteMovie() {
    this.moviesService.deleteMovie();
    this.onClose();
  }
}
