import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  GetAllLaunches,
  LaunchStateModel,
  launch_state,
} from '@spacex/launch/data/data-launch';
import { Observable } from 'rxjs';

@Component({
  selector: 'launch-timeline-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit {
  @Select(launch_state)
  public readonly launchState$: Observable<LaunchStateModel> | undefined;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(GetAllLaunches);
  }
}
