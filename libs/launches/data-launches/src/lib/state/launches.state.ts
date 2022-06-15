import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { SpacexState, SpacexStateModel } from '@spacex/shared/data-common';
import { Identifiable, Launch } from '@spacex/shared/types-common';
import { map, Observable } from 'rxjs';
import { LaunchesApi } from '../api/launches-api.service';
import { LaunchesAll, LaunchesLatest, LaunchesOne } from './launches.actions';

export const LAUNCHES_STATE = new StateToken<LaunchesStateModel>('launches');

export interface LaunchesStateModel extends SpacexStateModel<Launch> {
  latest?: Launch;
}

@State({ name: LAUNCHES_STATE })
@Injectable()
export class LaunchesState extends SpacexState<Launch> {
  protected readonly api = inject(LaunchesApi);

  @Action(LaunchesAll)
  protected override all(
    ctx: StateContext<LaunchesStateModel>
  ): Observable<LaunchesStateModel> {
    return super.all(ctx);
  }

  @Action(LaunchesOne)
  protected override one(
    ctx: StateContext<LaunchesStateModel>,
    identifiable: Identifiable
  ): Observable<LaunchesStateModel> {
    return super.one(ctx, identifiable);
  }

  @Action(LaunchesLatest)
  protected latest(
    ctx: StateContext<LaunchesStateModel>
  ): Observable<LaunchesStateModel> {
    return this.api.latest().pipe(map((latest) => ctx.patchState({ latest })));
  }
}
