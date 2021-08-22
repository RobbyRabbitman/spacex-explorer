import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Unit } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';
import { SetUnit, UnitState } from '@spacex/shared/data/data-unit';

@Component({
  selector: 'spacex-select-unit',
  templateUrl: './select-unit.component.html',
  styleUrls: ['./select-unit.component.scss'],
})
export class SelectUnitComponent implements OnInit {
  private _unit$: Observable<Unit> | undefined;
  public get unit$(): Observable<Unit> | undefined {
    return this._unit$;
  }
  private _units$: Observable<Array<Unit>> | undefined;
  public get units$(): Observable<Array<Unit>> | undefined {
    return this._units$;
  }

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this._unit$ = this.store.select(UnitState.unit);
    this._units$ = this.store.select(UnitState.allUnits);
  }

  public setUnit(unit: Unit): void {
    this.store.dispatch(new SetUnit(unit));
  }
}
