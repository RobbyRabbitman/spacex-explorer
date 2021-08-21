import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Force, Unit } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';
import { UNIT$ } from '../UnitToken';
import { UnitPipe } from './unit.pipe';

@Pipe({
  name: 'force',
})
export class ForcePipe extends UnitPipe<Force> implements PipeTransform {
  constructor(@Inject(UNIT$) unit$: Observable<Unit>) {
    super(unit$);
  }

  protected transformValue(value: Force, unit: Unit): string {
    return unit === Unit.METRIC ? value.kN + 'kn' : value.lbf + 'lbf';
  }
}
