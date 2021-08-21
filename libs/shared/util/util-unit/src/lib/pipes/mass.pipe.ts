import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Mass, Unit } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';
import { UNIT$ } from '../UnitToken';
import { UnitPipe } from './unit.pipe';

@Pipe({
  name: 'mass',
})
export class MassPipe extends UnitPipe<Mass> implements PipeTransform {
  constructor(@Inject(UNIT$) unit$: Observable<Unit>) {
    super(unit$);
  }

  protected transformValue(value: Mass, unit: Unit): string {
    return unit === Unit.METRIC ? value.kg + 'kg' : value.lb + 'lb';
  }
}
