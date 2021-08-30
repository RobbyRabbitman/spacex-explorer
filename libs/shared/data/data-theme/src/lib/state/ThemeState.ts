import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Theme } from '@spacex/shared/types/common';
import { SetTheme } from './theme.actions';

export type ThemeStateModel = Theme;
export const THEME_STATE_NAME = 'theme';
@State<ThemeStateModel>({ name: THEME_STATE_NAME, defaults: Theme.DARK })
@Injectable()
export class ThemeState {
  @Selector()
  public static theme(state: ThemeStateModel): Theme {
    return state;
  }
  @Selector()
  public static allThemes(): Array<Theme> {
    return Object.values(Theme);
  }
  @Action(SetTheme)
  public setTheme(
    ctx: StateContext<ThemeStateModel>,
    { theme }: SetTheme
  ): void {
    ctx.setState(theme);
  }
}
