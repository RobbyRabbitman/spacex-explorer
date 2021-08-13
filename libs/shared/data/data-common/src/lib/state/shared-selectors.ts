import { isNonNull } from '@spacex/shared/util/util-ts';
import { createSelector } from '@ngxs/store';
import { Entity, UUID } from '@spacex/shared/types/common';
import { SpacexStateModel } from './spacex-state-model';

export abstract class SharedSelectors {
  /*TODO why this doesnt work, when use this function? public static getEntity<S extends SpacexState<SpacexStateModel<Entity>>>(
    stateClass: Type<S>
    )*/
  public static getEntity<E extends Entity>(stateClass: unknown, id: UUID) {
    return createSelector([stateClass], (state: SpacexStateModel<E>) =>
      isNonNull(state.entities)
        ? state.entities.find((entity) => entity.id === id)
        : undefined
    );
  }
  /*TODO why this doesnt work, when use this function? public static getEntities<S extends SpacexState<SpacexStateModel<Entity>>>(
    stateClass: Type<S>
    )*/
  public static getEntities<E extends Entity>(stateClass: unknown) {
    return createSelector(
      [stateClass],
      (state: SpacexStateModel<E>) => state.entities
    );
  }

  public static fetchedAllEntities<E extends Entity>(stateClass: unknown) {
    return createSelector(
      [stateClass],
      (state: SpacexStateModel<E>) => state.fetchedAllEntities
    );
  }
}
