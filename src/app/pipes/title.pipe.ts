import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(title: string): string {
    return title.toLowerCase().replace(/(?<=(\s|^))[a-z]/g, c => c.toUpperCase());
  }

}
