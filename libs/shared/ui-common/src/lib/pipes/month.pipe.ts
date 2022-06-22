import { formatDate } from '@angular/common';
import { inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month',
})
export class MonthPipe implements PipeTransform {
  protected readonly locale = inject(LOCALE_ID);

  transform(value: number, format = 'MMMM'): unknown {
    const tmp = new Date();
    tmp.setUTCMonth(value);
    return formatDate(tmp, format, this.locale);
  }
}
