import { SpacexStateModel } from '@spacex/shared/data/data-common';
import { Launch } from '@spacex/shared/types/launch';

export class LaunchStateModel implements SpacexStateModel<Launch> {
  entities: Launch[] | undefined;
  fetchedAllEntities: boolean | undefined;
  next: Launch | undefined;
  latest: Launch | undefined;
}
