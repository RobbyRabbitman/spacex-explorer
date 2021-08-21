import { Injectable } from '@angular/core';
import {
  Action,
  Actions,
  createSelector,
  ofActionSuccessful,
  State,
  StateContext,
  Store,
} from '@ngxs/store';
import { RouterNavigation } from '@ngxs/router-plugin';

class StoreRoute {
  public static readonly type = '[Store Route] Store Route';
  constructor(public readonly action: RouterNavigation) {}
}

export interface RouteHistoryStateModel {
  history: Array<RouterNavigation>;
}

export const ROUTE_HISTORY_STATE_NAME = 'route_history';

@State({
  name: ROUTE_HISTORY_STATE_NAME,
  defaults: { history: [] },
})
@Injectable()
export class RouteHistoryState {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {
    this.actions$.pipe(ofActionSuccessful(RouterNavigation)).subscribe({
      next: (action) => this.store.dispatch(new StoreRoute(action)),
    });
  }

  /**
   *
   * @param index 0 = current, 1 = previous, ...
   * @returns the router state at the provided index
   */
  public static getRouterState(index: number = 0) {
    return createSelector(
      [RouteHistoryState],
      (state: RouteHistoryStateModel) =>
        state.history[state.history.length - (index + 1)].routerState
    );
  }

  @Action(StoreRoute)
  public storeRoute(
    ctx: StateContext<RouteHistoryStateModel>,
    { action }: StoreRoute
  ): void {
    ctx.patchState({
      history: [...ctx.getState().history, action],
    });
  }
}
