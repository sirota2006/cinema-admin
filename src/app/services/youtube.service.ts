import { Injectable } from '@angular/core';
import youtubeApi from "../apis/youtubeApi";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_KEY = "AIzaSyBSG5PLBrmFjpV9RYv0CFN-1s47Fb_-K_Q";

  constructor() { }

  async fetchTrailer(title) {
    const { data } = await youtubeApi.get(title + 'trailer&key=AIzaSyBSG5PLBrmFjpV9RYv0CFN-1s47Fb_-K_Q');
    const videoId = data.items[0].id.videoId;
    return videoId;
  }
}
