import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SharedSelectors } from '@spacex/shared/data/data-common';
import { GetRockets, RocketState } from '@spacex/rocket/data/data-rocket';
import { Observable } from 'rxjs';
import { Rocket } from '@spacex/shared/types/rocket';

@Component({
  selector: 'rockets-rockets-overview',
  templateUrl: './rockets-overview.component.html',
  styleUrls: ['./rockets-overview.component.scss'],
})
export class RocketsOverviewComponent implements OnInit {
  private _rockets$: Observable<Array<Rocket> | undefined> | undefined;

  constructor(private readonly store: Store) {}

  public get rockets$(): Observable<Array<Rocket> | undefined> | undefined {
    return this._rockets$;
  }

  ngOnInit(): void {
    this.store
      .selectOnce(SharedSelectors.fetchedAllEntities(RocketState))
      .subscribe({
        next: (fetched) =>
          fetched ? undefined : this.store.dispatch(GetRockets),
      });
    this._rockets$ = this.store.select(
      SharedSelectors.getEntities(RocketState)
    );
  }
}
