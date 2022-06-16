import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  LaunchesAll,
  LaunchesLatest,
  LaunchesState,
} from '@spacex/launches/data-launches';
import { LaunchCardComponent } from '@spacex/launches/ui-launches';
import { SpacexState } from '@spacex/shared/data-common';
import { map, mergeMapTo, shareReplay, Subject } from 'rxjs';

@Component({
  selector: 'launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent {
  private _launchCards?: QueryList<LaunchCardComponent> | undefined;
  public get launchCards(): QueryList<LaunchCardComponent> | undefined {
    return this._launchCards;
  }
  @ViewChildren(LaunchCardComponent)
  public set launchCards(value: QueryList<LaunchCardComponent> | undefined) {
    this._launchCards = value;

    if (this._launchCards) {
      const io = new IntersectionObserver(
        (entries) =>
          this.activeYear$.next(
            new Date(
              this.launchCards?.find(
                (card) =>
                  card.launch?.id ===
                  entries.sort(
                    (a, b) => b.intersectionRatio - a.intersectionRatio
                  )[0].target.id
              )?.launch?.date_utc as unknown as number
            )?.getUTCFullYear()
          ),
        { threshold: 1.0 }
      );

      for (const card of this._launchCards) {
        io.observe(card.elementRef.nativeElement);
      }
    }
  }

  public activeYear$ = new Subject<number>();

  public readonly launches$ = this.store
    .dispatch([LaunchesAll, LaunchesLatest])
    .pipe(
      mergeMapTo(this.store.select(SpacexState.all(LaunchesState))),
      map((launches) =>
        [...launches].sort((a, b) => b.date_unix - a.date_unix)
      ),
      shareReplay(1)
    );

  public years$ = this.launches$.pipe(
    map(
      (launches) =>
        new Set(launches.map((l) => new Date(l.date_utc).getUTCFullYear()))
    ),
    shareReplay(1)
  );

  public constructor(
    protected readonly store: Store,
    public readonly elementRef: ElementRef<HTMLElement>
  ) {}

  public scrollToYear(year: number) {
    this.launchCards
      ?.find(
        (card) =>
          !!card.launch &&
          new Date(card.launch.date_utc).getUTCFullYear() === year
      )
      ?.elementRef.nativeElement.scrollIntoView();
  }
}
