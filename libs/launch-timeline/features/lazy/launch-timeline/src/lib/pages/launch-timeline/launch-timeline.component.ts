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
import { filter, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import {
  PAGE_LAUNCH_DETAIL,
  QUERY_PARAM_LAUNCH_DETAIL_ID,
} from '../../routes/routes';
import { isNonNull } from '@spacex/shared/util/util-ts';
import { ViewportScroller } from '@angular/common';
import { RouteHistoryState } from '@spacex/shared/data/data-route-history';
import { SetActiveYear } from '../../state/launch-timeline.actions';
import { LaunchTimelineState } from '../../state/launch-timeline.state';
import { IntersectionStatus } from '@spacex/shared/util/util-intersection-observer';

@Component({
  selector: 'launch-timeline-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit, AfterViewInit {
  private _launches$: Observable<Map<number, Array<Launch>>> | undefined;
  private _launchYears$: Observable<Array<number>> | undefined;
  private _activeYear$: Observable<number> | undefined;

  public constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly viewPortScroller: ViewportScroller
  ) {}

  public get launches$(): Observable<Map<number, Array<Launch>>> | undefined {
    return this._launches$;
  }
  public get launchYears$(): Observable<Array<number>> | undefined {
    return this._launchYears$;
  }

  public get activeYear$(): Observable<number> | undefined {
    return this._activeYear$;
  }

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
      .select(LaunchTimelineState.launchesPerYear)
      .pipe(filter(isNonNull), shareReplay(1));

    this._launchYears$ = this.store
      .select(LaunchTimelineState.launchYears)
      .pipe(filter(isNonNull), shareReplay(1));

    this._activeYear$ = this.store
      .select(LaunchTimelineState.activeYear)
      .pipe(filter(isNonNull), shareReplay(1));

    const id = this.store.selectSnapshot(RouteHistoryState.getRouterState(1))
      ?.root.queryParams[QUERY_PARAM_LAUNCH_DETAIL_ID];
    if (isNonNull(id)) {
      this.store
        .select(SharedSelectors.getEntities<Launch>(LaunchState))
        .pipe(filter(isNonNull), take(1))
        .subscribe({
          next: (launches) => {
            const launch = launches.find((launch) => launch.id === id);
            if (isNonNull(launch))
              this.store.dispatch(
                new SetActiveYear(new Date(launch.date_utc).getUTCFullYear())
              );
          },
        });
    }
  }

  public keyValuePipeKeepOrder = () => null;

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

  public visibilityChange(status: IntersectionStatus, year: number): void {
    if (status === IntersectionStatus.Visible) console.log(year);
  }

  public contentClicked(year: number | string) {
    this.store.dispatch(new SetActiveYear(Number(year)));
    this._scrollToYear(Number(year));
  }

  private checkIfLaunchesAreFetched(): void {
    if (
      !this.store.selectSnapshot(
        SharedSelectors.fetchedAllEntities(LaunchState)
      )
    )
      this.store
        .select(LaunchState.latestLaunch)
        .pipe(
          filter(isNonNull),
          take(1),
          switchMap((launch) =>
            this.store
              .dispatch(
                new SetActiveYear(new Date(launch.date_utc).getUTCFullYear())
              )
              .pipe(tap(() => this.scrollToLaunch(launch)))
          )
        )
        .subscribe();
  }

  private checkIfNavigatedFromDetail(): void {
    const id = this.store.selectSnapshot(RouteHistoryState.getRouterState(1))
      ?.root.queryParams[QUERY_PARAM_LAUNCH_DETAIL_ID];
    if (isNonNull(id)) {
      this.store
        .select(SharedSelectors.getEntities<Launch>(LaunchState))
        .pipe(filter(isNonNull), take(1))
        .subscribe({
          next: (launches) => {
            const launch = launches.find((launch) => launch.id === id);
            if (isNonNull(launch)) this.scrollToLaunch(launch);
          },
        });
    }
  }

  private _scrollToYear(year: number): void {
    this.viewPortScroller.scrollToAnchor(String(year));
  }

  private scrollToLaunch({ id }: Launch): void {
    this.viewPortScroller.scrollToAnchor(id);
  }
}
