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
  private _unit$!: Observable<Unit>;
  private _units$!: Observable<Array<Unit>>;

  public get unit$(): Observable<Unit> {
    return this._unit$;
  }

  public get units$(): Observable<Array<Unit>> {
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
