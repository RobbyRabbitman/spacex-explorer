import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Launch } from '@spacex/shared/types/launch';
import { LaunchState, LaunchStateModel } from '@spacex/launch/data/data-launch';
import { SharedSelectors } from '@spacex/shared/data/data-common';
import { sortByKey } from '@spacex/shared/util/util-data';
import { isNonNull } from '@spacex/shared/util/util-ts';
import { SetActiveYear } from './launch-timeline.actions';

export interface LaunchTimelineStateModel {
  activeYear: number;
}

export const launchTimeline_state = 'launchTimeline_state';

@State({ name: launchTimeline_state })
@Injectable()
export class LaunchTimelineState {
  @Selector([SharedSelectors.getEntities<Launch>(LaunchState)])
  public static launchesPerYear(
    _: LaunchStateModel,
    launches: Launch[]
  ): Map<number, Launch[]> | undefined {
    return isNonNull(launches)
      ? sortByKey(launches, 'date_unix', (a, b) => b - a).reduce(
          (launchMap, launch) => {
            const year = Number(new Date(launch.date_utc).getUTCFullYear());
            launchMap.has(year)
              ? launchMap.get(year)?.push(launch)
              : launchMap.set(year, [launch]);
            return launchMap;
          },
          new Map<number, Array<Launch>>()
        )
      : undefined;
  }

  @Selector([LaunchTimelineState.launchesPerYear])
  public static launchYears(
    _: LaunchTimelineStateModel,
    launchesPerYear: Map<number, Launch[]> | undefined
  ): Array<number> | undefined {
    return isNonNull(launchesPerYear)
      ? Array.from(launchesPerYear.keys())
      : undefined;
  }

  @Selector()
  public static activeYear(state: LaunchTimelineStateModel): number {
    return state.activeYear;
  }

  @Action(SetActiveYear)
  public setActiveYear(
    ctx: StateContext<LaunchTimelineStateModel>,
    { year }: SetActiveYear
  ): void {
    ctx.patchState({ activeYear: year });
  }
}
