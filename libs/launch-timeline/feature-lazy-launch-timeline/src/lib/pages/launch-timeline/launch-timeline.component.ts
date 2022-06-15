import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LaunchesState } from '@spacex/launches/data-launches';
import { SpacexState } from '@spacex/shared/data-common';
import { Launch } from '@spacex/shared/types-common';
import { LaunchesAll } from 'libs/launches/data-launches/src/lib/state/launches.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit {
  @Select(SpacexState.all(LaunchesState))
  public launches$!: Observable<Launch[]>;

  public constructor(protected readonly store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(LaunchesAll);
  }
}
