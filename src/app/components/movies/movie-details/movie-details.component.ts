import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import IMovie from 'src/app/interfaces/IMovie';
import { Subject } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @select('selectedMovie') movie$: Subject<IMovie>;
  public movie: IMovie;
  private deleteModal: boolean = false;

  constructor(private moviesService: MoviesService, private modalService: ModalService) { }

  ngOnInit() {
    this.movie$.subscribe(movie => this.movie = movie);
  }

  onDelete() {
    this.modalService.setModalState('delete');
  }

  onEdit() {
    this.modalService.editMovie(this.movie);
  }

}
