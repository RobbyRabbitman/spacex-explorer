import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { SpacexState, SpacexStateModel } from '@spacex/shared/data-common';
import { Identifiable, Launch } from '@spacex/shared/types-common';
import { Observable } from 'rxjs';
import { LaunchesApi } from '../api/launches-api.service';
import { LaunchesAll, LaunchesOne } from './launches.actions';

export const LAUNCHES_STATE = new StateToken<LaunchesStateModel>('launches');

export type LaunchesStateModel = SpacexStateModel<Launch>;

@State({ name: LAUNCHES_STATE })
@Injectable()
export class LaunchesState extends SpacexState<Launch> {
  protected readonly api = inject(LaunchesApi);

  @Action(LaunchesAll)
  protected override all(
    ctx: StateContext<SpacexStateModel<Launch>>
  ): Observable<SpacexStateModel<Launch>> {
    return super.all(ctx);
  }

  @Action(LaunchesOne)
  protected override one(
    ctx: StateContext<SpacexStateModel<Launch>>,
    identifiable: Identifiable
  ): Observable<SpacexStateModel<Launch>> {
    return super.one(ctx, identifiable);
  }
}
