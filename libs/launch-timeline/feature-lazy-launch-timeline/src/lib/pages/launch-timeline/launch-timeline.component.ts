import { Component, QueryList, ViewChildren } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  LaunchesAll,
  LaunchesLatest,
  LaunchesState,
} from '@spacex/launches/data-launches';
import { LaunchCardComponent } from '@spacex/launches/ui-launches';
import { SpacexState } from '@spacex/shared/data-common';
import { map, mergeMapTo, shareReplay } from 'rxjs';

@Component({
  selector: 'launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent {
  @ViewChildren(LaunchCardComponent)
  public launchCards?: QueryList<LaunchCardComponent>;

  public readonly launches$ = this.store
    .dispatch([LaunchesAll, LaunchesLatest])
    .pipe(
      mergeMapTo(this.store.select(SpacexState.all(LaunchesState))),
      map((launches) =>
        [...launches].sort((a, b) => b.date_unix - a.date_unix)
      ),
      shareReplay(1)
    );

  public years$ = this.launches$.pipe(
    map(
      (launches) =>
        new Set(launches.map((l) => new Date(l.date_utc).getUTCFullYear()))
    ),
    shareReplay(1)
  );

  public constructor(protected readonly store: Store) {}

  public scrollToYear(year: number) {
    this.launchCards
      ?.find(
        (card) =>
          !!card.launch &&
          new Date(card.launch.date_utc).getUTCFullYear() === year
      )
      ?.elementRef.nativeElement.scrollIntoView();
  }
}
