import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { catchError, mapTo, pluck, switchMap } from 'rxjs/operators';
import { SharedSelectors } from '@spacex/shared/data/data-common';
import { GetRocket, RocketState } from '@spacex/rocket/data/data-rocket';
import { Rocket } from '@spacex/shared/types/rocket';
import { Observable } from 'rxjs';
import { Navigate } from '@ngxs/router-plugin';
import { QUERY_PARAM_ROCKET_ID } from '../../routes/routes';

@Component({
  selector: 'rockets-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.scss'],
})
export class RocketDetailComponent implements OnInit {
  private _rocket$: Observable<Rocket | undefined> | undefined;
  public get rocket$(): Observable<Rocket | undefined> | undefined {
    return this._rocket$;
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this._rocket$ = this.route.queryParams.pipe(
      pluck(QUERY_PARAM_ROCKET_ID),
      switchMap((id) =>
        this.store.dispatch(new GetRocket(id)).pipe(
          mapTo(id),
          catchError(() => this.store.dispatch(new Navigate(['/'])))
        )
      ),
      switchMap((id) =>
        this.store.select(SharedSelectors.getEntity<Rocket>(RocketState, id))
      )
    );
  }
}
