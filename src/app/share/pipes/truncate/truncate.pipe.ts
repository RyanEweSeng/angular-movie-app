import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, threshold: number): unknown {
    if (value.length > threshold) {
      return value.substring(0, threshold) + '...';
    } else {
      return value;
    }
  }
}
