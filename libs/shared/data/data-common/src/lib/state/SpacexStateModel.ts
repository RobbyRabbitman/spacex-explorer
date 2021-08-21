import { Entity } from '@spacex/shared/types/common';

export interface SpacexStateModel<E extends Entity> {
  entities: Array<E> | undefined;
  fetchedAllEntities: boolean | undefined;
}
