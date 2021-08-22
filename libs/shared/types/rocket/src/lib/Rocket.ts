import { Entity, Length, Mass } from '@spacex/shared/types/common';
import { RocketEngine } from './RocketEngine';
import { RocketFirstStage } from './RocketFirstStage';
import { RocketLandingLegs } from './RocketLandingLegs';
import { RocketPayloadWeight } from './RocketPayloadWeight';
import { RocketSecondStage } from './RocketSecondStage';

/**
 * https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/rockets/schema.md
 */
export interface Rocket extends Entity {
  height: Length;
  diameter: Length;
  mass: Mass;
  first_stage: RocketFirstStage;
  second_stage: RocketSecondStage;
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
}
