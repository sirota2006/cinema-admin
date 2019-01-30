import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: any): any {
    value = value.replace(/[^\d.-]/g, '');
    return new Date(value).getFullYear();
  }

}
