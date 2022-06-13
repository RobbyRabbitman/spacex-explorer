import { Type } from '@angular/core';
import { createSelector, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { Identifiable } from '@spacex/shared/types-common';
import { map } from 'rxjs';
import { SpacexApi } from '../api/SpacexApi';

export interface SpacexStateModel<T extends Identifiable> {
  all: T[];
}

export abstract class SpacexState<T extends Identifiable> {
  protected abstract readonly api: SpacexApi<T>;

  public static all<T extends Identifiable>(stateClass: Type<SpacexState<T>>) {
    return createSelector([stateClass], ({ all }: SpacexStateModel<T>) => all);
  }

  public static one<T extends Identifiable>(
    stateClass: Type<SpacexState<T>>,
    id: string
  ) {
    return createSelector([stateClass], ({ all }: SpacexStateModel<T>) =>
      all.find((x) => x.id === id)
    );
  }

  protected all(ctx: StateContext<SpacexStateModel<T>>) {
    return this.api.all().pipe(map((all) => ctx.patchState({ all })));
  }

  protected one(ctx: StateContext<SpacexStateModel<T>>, { id }: Identifiable) {
    return this.api.one(id).pipe(
      map((obj) =>
        ctx.getState().all.length > 0
          ? ctx.setState(
              patch({
                all: updateItem<Identifiable>((x) => x?.id === id, obj),
              })
            )
          : ctx.patchState({ all: [obj] })
      )
    );
  }
}
