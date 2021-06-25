import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { isNonNull } from '@spacex/shared/util/util-ts';
import { GetRockets, GetRocket } from './rockets.actions';
import { switchMapTo, tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Rocket } from '@spacex/shared/types/rocket';
import { RocketApiService } from '../api/rocket-api.service';

export type RocketStateModel = Array<Rocket> | null;
export const rocket_state = 'rocket';
@State<RocketStateModel>({ name: rocket_state, defaults: null })
@Injectable()
export class RocketState {
  constructor(private readonly api: RocketApiService) {}

  @Action(GetRockets)
  public getAllRockets(ctx: StateContext<RocketStateModel>): Observable<never> {
    return this.api.fetchAll().pipe(
      tap((rockets) => ctx.setState(rockets)),
      switchMapTo(EMPTY)
    );
  }

  @Action(GetRocket)
  public getOneRocket(
    ctx: StateContext<RocketStateModel>,
    { id }: GetRocket
  ): Observable<never> {
    const state = ctx.getState();
    if (state?.find((rocket) => rocket.id === id) == null)
      return this.api.fetchOne(id).pipe(
        tap((rocket) =>
          isNonNull(state)
            ? ctx.setState([...state, rocket])
            : ctx.setState([rocket])
        ),
        switchMapTo(EMPTY)
      );
    else return EMPTY;
  }
}
