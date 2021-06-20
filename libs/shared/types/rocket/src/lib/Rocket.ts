import { Length, Mass } from '@spacex/shared/types/common';
import { RocketEngine } from './RocketEngine';
import { RocketLandingLegs } from './RocketLandingLegs';
import { RocketPayloadWeight } from './RocketPayloadWeight';
import { RocketStage } from './RocketStage';

/**
 * https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/rockets/schema.md
 */
export interface Rocket {
  height: Length;
  diameter: Length;
  mass: Mass;
  first_stage: RocketStage;
  second_stage: RocketStage;
  engines: RocketEngine;
  landing_legs: RocketLandingLegs;
  payload_weights: RocketPayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}
