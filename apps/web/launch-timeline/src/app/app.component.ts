import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  GetAllLaunches,
  LaunchStateModel,
  launch_state,
} from '@spacex/launch/data/data-launch';
import { Observable } from 'rxjs';

@Component({
  selector: 'launch-timeline-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly launchState$: Observable<LaunchStateModel>;
  constructor(private readonly store: Store) {
    store.dispatch(GetAllLaunches);
    this.launchState$ = store.select<LaunchStateModel>(
      (state) => state[launch_state]
    );
  }
}
