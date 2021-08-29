import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UnitState, SetUnit } from '@spacex/shared/data/data-unit';
import { Unit } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'spacex-toggle-unit',
  templateUrl: './toggle-unit.component.html',
  styleUrls: ['./toggle-unit.component.scss'],
})
export class ToggleUnitComponent implements OnInit {
  private _unit$: Observable<Unit> | undefined;
  public get unit$(): Observable<Unit> | undefined {
    return this._unit$;
  }

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this._unit$ = this.store.select(UnitState.unit);
  }

  public setUnit(unit: Unit): void {
    this.store.dispatch(new SetUnit(unit));
  }
}
