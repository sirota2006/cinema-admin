import { Pipe, PipeTransform } from '@angular/core';

const color = {
  Action: "red",
  Drama: "blue",
  Comedy: "Yellow",
  Adventure: "green",
  Crime: "indigo",
  SciFi: "pink",
  Mystery: "orange",
  Thriller: "brown",
  Fantasy: "cyan"

}

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  html: string = "";

  transform(genres: Array<string>) {
    this.html = "";
    genres.forEach(genre => {
      genre = genre.replace(/[^a-zA-Z]/g, "");
      this.html += `<span class="new badge ${color[genre]}">${genre}</span>`
    })

    return this.html;
  }



}
