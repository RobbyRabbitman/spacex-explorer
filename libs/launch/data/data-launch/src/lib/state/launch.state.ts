import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { switchMapTo, tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Launch } from '@spacex/shared/types/launch';
import { LaunchApiService } from '../api/launch-api.service';
import { isNonNull } from '@spacex/shared/util/util-ts';
import { GetAllLaunches, GetOneLaunch } from './launch.actions';

export type LaunchStateModel = Array<Launch> | null;
export const launch_state = 'launch';
@State<LaunchStateModel>({ name: launch_state, defaults: null })
@Injectable()
export class LaunchState {
  constructor(private readonly api: LaunchApiService) {}

  @Action(GetAllLaunches)
  public getAllLaunches(
    ctx: StateContext<LaunchStateModel>
  ): Observable<never> {
    return this.api.fetchAll().pipe(
      tap((launches) => ctx.setState(launches)),
      switchMapTo(EMPTY)
    );
  }

  @Action(GetOneLaunch)
  public getOneLaunch(
    ctx: StateContext<LaunchStateModel>,
    { name }: GetOneLaunch
  ): Observable<never> {
    const state = ctx.getState();
    if (state?.find((launch) => launch.name === name) == null)
      return this.api.fetchOne(name).pipe(
        tap((launch) =>
          isNonNull(state)
            ? ctx.setState([...state, launch])
            : ctx.setState([launch])
        ),
        switchMapTo(EMPTY)
      );
    else return EMPTY;
  }
}
