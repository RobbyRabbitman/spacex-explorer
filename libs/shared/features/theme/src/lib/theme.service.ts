import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from '@spacex/shared/types/common';
import { SetTheme, ThemeState } from '@spacex/shared/data/data-theme';
import { Store } from '@ngxs/store';
import { Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(
    private readonly store: Store,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.store.dispatch(
      new SetTheme(
        document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches
          ? Theme.DARK
          : Theme.LIGHT
      )
    );
  }

  public toggleTheme(): Observable<void> {
    return this.store.select(ThemeState.theme).pipe(
      map((theme) => {
        this.document.body.classList.remove(...Object.values(Theme));
        this.document.body.classList.add(theme);
      })
    );
  }
}
