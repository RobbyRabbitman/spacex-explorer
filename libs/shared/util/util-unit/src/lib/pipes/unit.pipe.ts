import { PipeTransform } from '@angular/core';
import { Unit } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class UnitPipe<U> implements PipeTransform {
  constructor(private readonly unit$: Observable<Unit>) {}

  protected abstract transformValue(value: U, unit: Unit): string;

  public transform(value: U): Observable<string> {
    return this.unit$.pipe(map((unit) => this.transformValue(value, unit)));
  }
}
