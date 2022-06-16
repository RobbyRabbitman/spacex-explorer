import { Identifiable, UUID } from './Identifiable';

export interface Launch extends Identifiable {
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: UUID;
  success: boolean;
  failures: LaunchFailure[];
  upcoming: boolean;
  details: string;
  fairings: LaunchFairings;
  crew: LaunchCrew[];
  ships: UUID[];
  capsules: UUID[];
  payloads: UUID[];
  launchpad: UUID;
  cores: LaunchCore[];
  links: LaunchLinks;
  auto_update: boolean;
}

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

export interface LaunchLinks {
  patch: {
    small: string | null;
    large: string | null;
  };
  reddit: {
    campaign: string;
    launch: string;
    media: string;
    recovery: string;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface LaunchFailure {
  time: number;
  altitude: number;
  reason: string;
}

export interface LaunchFairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: UUID[];
}

export interface LaunchCrew {
  crew: UUID;
  role: string;
}
