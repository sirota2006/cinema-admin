import axios from "axios"

const API_KEY = "AIzaSyBSG5PLBrmFjpV9RYv0CFN-1s47Fb_-K_Q";

export default function (title) {
  return axios.create({
    baseURL: "https://content.googleapis.com/youtube/v3/search",
    params: {
      part: 'snippet',
      maxResults: 1,
      q: title + "trailer",
      key: API_KEY,
    }
  });

} 
