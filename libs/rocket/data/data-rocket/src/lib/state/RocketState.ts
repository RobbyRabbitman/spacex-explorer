import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetRockets, GetRocket } from './rockets.actions';
import { Observable } from 'rxjs';
import { Rocket } from '@spacex/shared/types/rocket';
import { RocketApiService } from '../api/rocket-api.service';
import { SpacexState } from '@spacex/shared/data/data-common';
import { RocketStateModel } from './RocketStateModel';

export const ROCKET_STATE_NAME = 'rocket';
@State<RocketStateModel>({
  name: ROCKET_STATE_NAME,
  defaults: { entities: undefined, fetchedAllEntities: false },
})
@Injectable()
export class RocketState extends SpacexState<
  Rocket,
  RocketStateModel,
  RocketApiService
> {
  constructor(api: RocketApiService) {
    super(api);
  }

  @Action(GetRockets)
  public getAllRockets(ctx: StateContext<RocketStateModel>): Observable<never> {
    return super.getEntities(ctx);
  }

  @Action(GetRocket)
  public getOneRocket(
    ctx: StateContext<RocketStateModel>,
    { id }: GetRocket
  ): Observable<never> {
    return super.getEntity(ctx, id);
  }
}
