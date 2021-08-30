import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetTheme, ThemeState } from '@spacex/shared/data/data-theme';
import { Theme } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'spacex-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  private _theme$: Observable<Theme> | undefined;
  public get theme$(): Observable<Theme> | undefined {
    return this._theme$;
  }
  constructor(private readonly store: Store) {}
  public ngOnInit(): void {
    this._theme$ = this.store.select(ThemeState.theme);
  }

  public setTheme(theme: Theme): void {
    this.store.dispatch(new SetTheme(theme));
  }
}
