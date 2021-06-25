import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Launch } from '@spacex/shared/types/launch';
import { LaunchApiService } from '../api/launch-api.service';
import { GetLaunches, GetLaunch } from './launch.actions';
import { SpacexState, SpacexStateModel } from '@spacex/shared/data/data-common';

export class LaunchStateModel implements SpacexStateModel<Launch> {
  entities: Launch[] | undefined;
}
export const launch_state = 'launch';
@State<LaunchStateModel>({
  name: launch_state,
  defaults: { entities: undefined },
})
@Injectable()
export class LaunchState extends SpacexState<LaunchStateModel> {
  constructor(api: LaunchApiService) {
    super(api);
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
}
