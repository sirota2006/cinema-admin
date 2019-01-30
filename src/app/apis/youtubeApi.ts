import axios from "axios"

export default axios.create({
  baseURL: 'https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=',
});