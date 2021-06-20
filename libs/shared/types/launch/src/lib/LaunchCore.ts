import { UUID } from '@spacex/shared/types/common';

export interface LaunchCore {
  core: UUID;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: UUID;
}
