import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  LaunchesAll,
  LaunchesLatest,
  LaunchesState,
} from '@spacex/launches/data-launches';
import { SpacexState } from '@spacex/shared/data-common';
import { map, mergeMapTo, shareReplay } from 'rxjs';

@Component({
  selector: 'launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent {
  public readonly launches$ = this.store
    .dispatch([LaunchesAll, LaunchesLatest])
    .pipe(
      mergeMapTo(this.store.select(SpacexState.all(LaunchesState))),
      map((launches) =>
        [...launches].sort((a, b) => b.date_unix - a.date_unix)
      ),
      shareReplay(1)
    );

  public constructor(protected readonly store: Store) {}
}
