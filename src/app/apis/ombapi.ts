import axios from "axios"

export default axios.create({
  baseURL: 'https://www.omdbapi.com/?i=tt3896198&apikey=61c5fbb7&t=',
});