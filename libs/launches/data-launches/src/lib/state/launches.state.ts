import { inject, Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { SpacexState, SpacexStateModel } from '@spacex/shared/data-common';
import { Launch } from '@spacex/shared/types-common';
import { LaunchesApi } from '../api/launches-api.service';

export const LAUNCHES_STATE = new StateToken<LaunchesStateModel>('launches');

export type LaunchesStateModel = SpacexStateModel<Launch>;

@State({ name: LAUNCHES_STATE })
@Injectable()
export class LaunchesState extends SpacexState<Launch> {
  protected readonly api = inject(LaunchesApi);
}
