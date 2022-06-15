import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LaunchesAll, LaunchesState } from '@spacex/launches/data-launches';
import { SpacexState } from '@spacex/shared/data-common';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit {
  public launches$ = this.store.select(SpacexState.all(LaunchesState)).pipe(
    map((launches) => [...launches].sort((a, b) => b.date_unix - a.date_unix)),
    shareReplay(1)
  );

  public constructor(protected readonly store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(LaunchesAll);
  }
}
