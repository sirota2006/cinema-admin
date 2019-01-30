import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  private html: string;

  transform(rating: number): any {
    this.html = "";

    for (let i = 1; i < rating; i++) {
      this.html += '<i class="material-icons">star<i>';
    };

    return this.html;
  }

}
