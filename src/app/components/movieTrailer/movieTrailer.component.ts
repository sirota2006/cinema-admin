import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import IMovie from 'src/app/interfaces/IMovie';

@Component({
  selector: 'movie-trailer',
  templateUrl: './movieTrailer.component.html',
  styleUrls: ['./movieTrailer.component.css']
})
export class MovieTrailer implements OnInit {
  @select('selectedMovie') selectedMovie$: Observable<IMovie>;
  public videoId: string;

  constructor(private youtubeService: YoutubeService) {
  }

  ngOnInit() {
    // on movie select set movie id
    this.selectedMovie$.subscribe(movie => this.setTailer(movie.title));
  }

  async setTailer(title) {
    this.videoId = "";
    this.videoId = await this.youtubeService.fetchTrailer(title);
  }


}
