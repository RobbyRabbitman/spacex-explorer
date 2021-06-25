import { DatePrecision, Entity, UUID } from '@spacex/shared/types/common';
import { LaunchCore } from './LaunchCore';
import { LaunchFailure } from './LaunchFailure';
import { LaunchFairing } from './LaunchFairing';
import { LaunchLinks } from './LaunchLinks';

/**
 * https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/launches/schema.md
 */
export interface Launch extends Entity {
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: DatePrecision;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: UUID;
  success: boolean;
  failures: Array<LaunchFailure>;
  upcoming: boolean;
  details: string;
  fairings: LaunchFairing;
  crew: Array<UUID>;
  ships: Array<UUID>;
  capsules: Array<UUID>;
  payloads: Array<UUID>;
  launchpad: UUID;
  cores: Array<LaunchCore>;
  links: LaunchLinks;
  auto_update: boolean;
}
