import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetLaunches, LaunchState } from '@spacex/launch/data/data-launch';
import { SharedSelectors } from '@spacex/shared/data/data-common';
import { Launch } from '@spacex/shared/types/launch';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  PAGE_LAUNCH_DETAIL,
  QUERY_PARAM_LAUNCH_DETAIL_ID,
} from '../../routes/routes';
import { sortByKey } from '@spacex/shared/util/util-data';
import { isNonNull } from '@spacex/shared/util/util-ts';
@Component({
  selector: 'launch-timeline-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit {
  private _launches$: Observable<Array<Launch>> | undefined;
  public get launches$(): Observable<Array<Launch>> | undefined {
    return this._launches$;
  }

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetLaunches);
    this._launches$ = this.store
      .select(SharedSelectors.getEntities<Launch>(LaunchState))
      .pipe(
        filter(isNonNull),
        map((launches) => sortByKey(launches, 'date_unix', (a, b) => b - a))
      );
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
