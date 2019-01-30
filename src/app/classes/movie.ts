import IMovie from '../interfaces/IMovie';

export default class Movie implements IMovie {
  constructor(
    public id: string,
    public title: string,
    public year: number,
    public runtime: string,
    public genre: Array<string>,
    public director: string,
    public poster: string,
    public plot: string,
    public rating: number,
  ) { }
}