import { SpacexStateModel } from '@spacex/shared/data/data-common';
import { Rocket } from '@spacex/shared/types/rocket';

export class RocketStateModel implements SpacexStateModel<Rocket> {
  entities: Rocket[] | undefined;
  fetchedAllEntities: boolean | undefined;
}
