export default interface IMovie {
  id: string;
  title: string;
  year: number;
  runtime: string;
  genre: Array<string>;
  director: string;
  poster: string;
  plot: string;
  rating: number;
}