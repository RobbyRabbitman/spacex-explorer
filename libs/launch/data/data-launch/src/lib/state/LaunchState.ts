import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { EMPTY, Observable } from 'rxjs';
import { Launch } from '@spacex/shared/types/launch';
import { LaunchApiService } from '../api/launch-api.service';
import {
  GetLaunches,
  GetLaunch,
  GetLatestLaunch,
  GetNextLaunch,
} from './launch.actions';
import { SpacexState } from '@spacex/shared/data/data-common';
import { switchMapTo, tap } from 'rxjs/operators';
import { LaunchStateModel } from './LaunchStateModel';

export const LAUNCH_STATE_NAME = 'launch';
@State<LaunchStateModel>({
  name: LAUNCH_STATE_NAME,
  defaults: {
    fetchedAllEntities: false,
    entities: undefined,
    latest: undefined,
    next: undefined,
  },
})
@Injectable()
export class LaunchState extends SpacexState<
  Launch,
  LaunchStateModel,
  LaunchApiService
> {
  constructor(api: LaunchApiService) {
    super(api);
  }

  @Selector()
  static nextLaunch(state: LaunchStateModel): Launch | undefined {
    return state.next;
  }

  @Selector()
  static latestLaunch(state: LaunchStateModel): Launch | undefined {
    return state.latest;
  }

  @Action(GetLaunches)
  public getAllLaunches(
    ctx: StateContext<LaunchStateModel>
  ): Observable<never> {
    return super.getEntities(ctx);
  }

  @Action(GetLaunch)
  public getOneLaunch(
    ctx: StateContext<LaunchStateModel>,
    { id }: GetLaunch
  ): Observable<never> {
    return super.getEntity(ctx, id);
  }

  @Action(GetLatestLaunch)
  public getLatestLaunch(
    ctx: StateContext<LaunchStateModel>
  ): Observable<never> {
    return this.resource.fetchLatestLaunch().pipe(
      tap((launch) => ctx.patchState({ latest: launch })),
      switchMapTo(EMPTY)
    );
  }

  @Action(GetNextLaunch)
  public getNextLaunch(ctx: StateContext<LaunchStateModel>): Observable<never> {
    return this.resource.fetchNextLaunch().pipe(
      tap((launch) => ctx.patchState({ next: launch })),
      switchMapTo(EMPTY)
    );
  }
}
