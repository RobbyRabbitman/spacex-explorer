import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GetLaunches, LaunchState } from '@spacex/launch/data/data-launch';
import { SharedSelectors } from '@spacex/shared/data/data-common';
import { Launch } from '@spacex/shared/types/launch';
import { from, Observable } from 'rxjs';
import {
  PAGE_LAUNCH_DETAIL,
  QUERY_PARAM_LAUNCH_DETAIL_ID,
} from '../../routes/routes';

@Component({
  selector: 'launch-timeline-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit {
  @Select(SharedSelectors.getEntities(LaunchState))
  public readonly launches$: Observable<Array<Launch>> | undefined;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetLaunches);
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
}
