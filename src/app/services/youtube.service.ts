import { Injectable } from '@angular/core';
import youtubeApi from "../apis/youtubeApi";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor() { }

  async fetchTrailer(title) {
    const { data } = await youtubeApi(title).get("");
    const videoId = data.items[0].id.videoId;
    return videoId;
  }
}
