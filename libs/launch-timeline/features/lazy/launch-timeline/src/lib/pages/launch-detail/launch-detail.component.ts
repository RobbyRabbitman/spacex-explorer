import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetLaunch, LaunchState } from '@spacex/launch/data/data-launch';
import { SharedSelectors } from '@spacex/shared/data/data-common';
import { Launch } from '@spacex/shared/types/launch';
import { Observable } from 'rxjs';
import { mapTo, pluck, shareReplay, switchMap } from 'rxjs/operators';
import { QUERY_PARAM_LAUNCH_DETAIL_ID } from '../../routes/routes';

@Component({
  selector: 'launch-timeline-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit {
  private _launch$: Observable<Launch | undefined> | undefined;

  public get launch$(): Observable<Launch | undefined> | undefined {
    return this._launch$;
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this._launch$ = this.route.queryParams.pipe(
      pluck(QUERY_PARAM_LAUNCH_DETAIL_ID),
      switchMap((id) => this.store.dispatch(new GetLaunch(id)).pipe(mapTo(id))),
      switchMap((id) =>
        this.store.select(SharedSelectors.getEntity<Launch>(LaunchState, id))
      ),
      shareReplay(1)
    );
  }
}
