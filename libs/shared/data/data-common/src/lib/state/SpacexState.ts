import { StateContext } from '@ngxs/store';
import { Entity, UUID } from '@spacex/shared/types/common';
import { isNonNull } from '@spacex/shared/util/util-ts';
import { Observable, EMPTY } from 'rxjs';
import { switchMapTo, tap } from 'rxjs/operators';
import { SpacexResource } from '../SpacexResource';
import { SpacexStateModel } from './SpacexStateModel';

export abstract class SpacexState<
  E extends Entity,
  S extends SpacexStateModel<E>,
  R extends SpacexResource<E>
> {
  constructor(protected readonly resource: R) {}
  protected getEntities(ctx: StateContext<S>): Observable<never> {
    return this.resource.fetchEntities().pipe(
      tap((entities) =>
        ctx.patchState({ entities, fetchedAllEntities: true } as Partial<S>)
      ),
      switchMapTo(EMPTY)
    );
  }
  protected getEntity(ctx: StateContext<S>, id: UUID): Observable<never> {
    const entities = ctx.getState().entities;
    if (isNonNull(entities)) {
      const entity = entities.find((x) => x.id === id);
      if (isNonNull(entity)) return EMPTY;
      else {
        return this.resource.fetch(id).pipe(
          tap((entity) => {
            entities.push(entity);
            ctx.patchState({ entities } as Partial<S>);
          }),
          switchMapTo(EMPTY)
        );
      }
    } else
      return this.resource.fetch(id).pipe(
        tap((entity) => ctx.patchState({ entities: [entity] } as Partial<S>)),
        switchMapTo(EMPTY)
      );
  }
}
