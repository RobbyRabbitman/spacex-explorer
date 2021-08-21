import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Unit } from '@spacex/shared/types/common';
import { SetUnit } from './unit.actions';

export type UnitStateModel = Unit;
export const UNITSTATE_NAME = 'unit';
@State<UnitStateModel>({ name: UNITSTATE_NAME, defaults: Unit.METRIC })
@Injectable()
export class UnitState {
  @Selector()
  public static unit(state: UnitStateModel): Unit {
    return state;
  }
  @Action(SetUnit)
  public setUnit(ctx: StateContext<UnitStateModel>, { unit }: SetUnit): void {
    ctx.patchState(unit);
  }
}
