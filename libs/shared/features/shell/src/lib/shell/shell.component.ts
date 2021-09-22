import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { NavigationEnd, NavigationStart, Router, Event } from '@angular/router';
import { asyncScheduler } from 'rxjs';
import { filter, observeOn, scan } from 'rxjs/operators';
import { ShellConfig } from '../ShellConfig';
import { SHELL_CONFIG } from '../ShellConfigToken';

interface ScrollPositionRestore {
  event: Event;
  positions: { [K: number]: number };
  trigger: 'imperative' | 'popstate' | 'hashchange' | undefined;
  idToRestore: number;
}

@Component({
  selector: 'spacex-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  @ViewChild(MatSidenavContent, { static: true })
  private _sidenavContent: MatSidenavContent | undefined;

  public get config(): ShellConfig {
    return this._config;
  }

  constructor(
    @Inject(SHELL_CONFIG)
    private _config: ShellConfig,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // from https://medium.com/angular-in-depth/reactive-scroll-position-restoration-with-rxjs-792577f842c
  public ngOnInit(): void {
    const scrollableContent =
      this._sidenavContent?.getElementRef().nativeElement ?? this.document.body;

    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart || event instanceof NavigationEnd
        ),
        scan<Event, ScrollPositionRestore>((acc, event) => ({
          event,
          positions: {
            ...acc.positions,
            ...(event instanceof NavigationStart
              ? {
                  [event.id]: scrollableContent.scrollTop,
                }
              : {}),
          },
          trigger:
            event instanceof NavigationStart
              ? event.navigationTrigger
              : acc.trigger,
          idToRestore:
            (event instanceof NavigationStart &&
              event.restoredState &&
              event.restoredState.navigationId + 1) ||
            acc.idToRestore,
        })),
        filter(
          ({ event, trigger }) => event instanceof NavigationEnd && !!trigger
        ),
        observeOn(asyncScheduler)
      )
      .subscribe(({ trigger, positions, idToRestore }) => {
        if (trigger === 'imperative') {
          scrollableContent.scrollTop = 0;
        }

        if (trigger === 'popstate') {
          scrollableContent.scrollTop = positions[idToRestore];
        }
      });
  }
}
