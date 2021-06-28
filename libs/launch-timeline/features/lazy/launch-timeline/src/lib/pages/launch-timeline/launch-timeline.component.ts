import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import {
  GetLatestLaunch,
  GetLaunches,
  LaunchState,
} from '@spacex/launch/data/data-launch';
import { SharedSelectors } from '@spacex/shared/data/data-common';
import { Launch } from '@spacex/shared/types/launch';
import { from, Observable } from 'rxjs';
import { filter, map, shareReplay, take } from 'rxjs/operators';
import {
  PAGE_LAUNCH_DETAIL,
  QUERY_PARAM_LAUNCH_DETAIL_ID,
} from '../../routes/routes';
import { sortByKey } from '@spacex/shared/util/util-data';
import { isNonNull } from '@spacex/shared/util/util-ts';
import { ViewportScroller } from '@angular/common';
import { RouteHistoryState } from '@spacex/shared/data/data-route-history';
@Component({
  selector: 'launch-timeline-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit, AfterViewInit {
  private _launches$: Observable<Array<Launch>> | undefined;
  public get launches$(): Observable<Array<Launch>> | undefined {
    return this._launches$;
  }

  public constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly viewPortScroller: ViewportScroller
  ) {}

  public ngOnInit(): void {
    if (
      !this.store.selectSnapshot(
        SharedSelectors.fetchedAllEntities(LaunchState)
      )
    )
      this.store
        .dispatch(GetLaunches)
        .subscribe({ complete: () => this.store.dispatch(GetLatestLaunch) });
    this._launches$ = this.store
      .select(SharedSelectors.getEntities<Launch>(LaunchState))
      .pipe(
        filter(isNonNull),
        map((launches) => sortByKey(launches, 'date_unix', (a, b) => b - a)),
        shareReplay(1)
      );
  }

  public ngAfterViewInit(): void {
    this.checkIfLaunchesAreFetched();
    this.checkIfNavigatedFromDetail();
  }

  public navigateToLaunchDetail({ id }: Launch): Observable<boolean> {
    return from(
      this.router.navigate([`../${PAGE_LAUNCH_DETAIL}`], {
        relativeTo: this.route,
        queryParams: {
          [QUERY_PARAM_LAUNCH_DETAIL_ID]: id,
        },
      })
    );
  }

  private checkIfLaunchesAreFetched(): void {
    if (
      !this.store.selectSnapshot(
        SharedSelectors.fetchedAllEntities(LaunchState)
      )
    )
      this.store
        .select(LaunchState.latestLaunch)
        .pipe(filter(isNonNull), take(1))
        .subscribe({
          next: (launch) => this.viewPortScroller.scrollToAnchor(launch.id),
        });
  }

  private checkIfNavigatedFromDetail(): void {
    const id = this.store.selectSnapshot(RouteHistoryState.getRouterState(1))
      ?.root.queryParams[QUERY_PARAM_LAUNCH_DETAIL_ID];
    if (isNonNull(id)) this.viewPortScroller.scrollToAnchor(id);
  }
}
