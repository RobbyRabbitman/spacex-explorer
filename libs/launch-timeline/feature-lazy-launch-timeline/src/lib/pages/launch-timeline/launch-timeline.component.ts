import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Store } from '@ngxs/store';
import {
  LaunchesAll,
  LaunchesLatest,
  LaunchesState,
  LAUNCHES_STATE,
} from '@spacex/launches/data-launches';
import { LaunchCardComponent } from '@spacex/launches/ui-launches';
import { SpacexState } from '@spacex/shared/data-common';
import {
  BehaviorSubject,
  debounceTime,
  defer,
  finalize,
  map,
  mergeMapTo,
  shareReplay,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss'],
})
export class LaunchTimelineComponent implements OnInit, OnDestroy {
  public readonly sm$ = inject(BreakpointObserver)
    .observe([Breakpoints.Handset])
    .pipe(
      map((state) => state.matches),
      shareReplay(1)
    );

  protected readonly destroy$ = new Subject<void>();
  protected observer?: IntersectionObserver;

  private _launchCards?: QueryList<LaunchCardComponent> | undefined;
  public get launchCards(): QueryList<LaunchCardComponent> | undefined {
    return this._launchCards;
  }

  @ViewChildren(LaunchCardComponent)
  public set launchCards(value: QueryList<LaunchCardComponent> | undefined) {
    if (value && value.length > 0) {
      if (this.observer == null) {
        value
          .find(
            (card) =>
              card.launch?.id ===
              this.store.selectSnapshot(LAUNCHES_STATE).latest?.id
          )
          ?.elementRef.nativeElement.scrollIntoView();
        // store elements visibility
        const cards = value.reduce(
          (map, c) => map.set(c.launch?.id ?? '', { visible: false, card: c }),
          new Map<string, { visible: boolean; card: LaunchCardComponent }>()
        );
        this.observer = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              cards.get(e.target.id)!.visible = e.isIntersecting;
            }

            const active = [...cards].filter(
              ([id, { visible, card }]) => visible
            )[0];
            if (active != null) {
              const activeDate = new Date(
                active[1].card.launch?.date_utc as unknown as string
              );

              this.activeYear$.next(activeDate.getUTCFullYear());
              this.activeMonth$.next(activeDate.getUTCMonth());
            }
          },
          { threshold: 1.0 }
        );
      }
      if (this._launchCards != null)
        for (const card of this._launchCards) {
          this.observer.unobserve(card.elementRef.nativeElement);
        }
      this._launchCards = value;

      for (const card of value) {
        this.observer.observe(card.elementRef.nativeElement);
      }
    }
  }

  public activeYear$ = new BehaviorSubject<number | undefined>(undefined);
  public activeMonth$ = new BehaviorSubject<number | undefined>(undefined);

  public readonly launches$ = this.store
    .dispatch([LaunchesAll, LaunchesLatest])
    .pipe(
      mergeMapTo(this.store.select(SpacexState.all(LaunchesState))),
      map((launches) =>
        [...launches].sort((a, b) => b.date_unix - a.date_unix)
      ),
      shareReplay(1)
    );

  public readonly nav$ = this.launches$.pipe(
    map((launches) =>
      launches
        .map((launch) => new Date(launch.date_utc))
        .reduce(
          (map, date) =>
            map.set(
              date.getUTCFullYear(),
              (map.get(date.getUTCFullYear()) ?? new Set<number>()).add(
                date.getUTCMonth()
              )
            ),
          new Map<number, Set<number>>()
        )
    ),
    shareReplay(1)
  );

  public readonly _navSort = (a: unknown, b: unknown): number => 0;

  public constructor(
    protected readonly store: Store,
    public readonly elementRef: ElementRef<HTMLElement>
  ) {}

  public ngOnInit(): void {
    defer(() => {
      const o = new ResizeObserver(([entry]) =>
        s.next(entry.contentRect.height)
      );
      o.observe(this.elementRef.nativeElement);
      const s = new Subject<number>();
      return s.pipe(
        debounceTime(300),
        shareReplay(1),
        finalize(() => o.unobserve(this.elementRef.nativeElement))
      );
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (heigth) => {
          const nav =
            this.elementRef.nativeElement.querySelector<HTMLElement>('div>nav');
          if (nav != null) nav.style.height = `${heigth}px`;
        },
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public scrollToLaunch(year: number, month?: number) {
    this.launchCards
      ?.find(
        (card) =>
          !!card.launch &&
          new Date(card.launch.date_utc).getUTCFullYear() === year &&
          (month == null ||
            new Date(card.launch.date_utc).getUTCMonth() === month)
      )
      ?.elementRef.nativeElement.scrollIntoView();
  }
}
