import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Length, Unit } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';
import { UNIT$ } from '../UnitToken';
import { UnitPipe } from './unit.pipe';

@Pipe({
  name: 'length',
})
export class LengthPipe extends UnitPipe<Length> implements PipeTransform {
  constructor(@Inject(UNIT$) unit$: Observable<Unit>) {
    super(unit$);
  }

  protected transformValue(value: Length, unit: Unit): string {
    return unit === Unit.METRIC ? value.meters + 'm' : value.feet + 'ft';
  }
}
