import { UUID } from '@spacex/shared/types/common';

export interface LaunchFairing {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: Array<UUID>;
}
