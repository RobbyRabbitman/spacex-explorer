import { Force } from './Force';
import { Identifiable } from './Identifiable';
import { Length } from './Length';
import { Mass } from './Mass';

export interface Rocket extends Identifiable {
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

export interface RocketEngine {
  isp: RocketIsp;
  thrust_sea_level: Force;
  thrust_vacuum: Force;
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
}

export interface RocketFairing {
  height: Length;
  diameter: Length;
}

export interface RocketFirstStage extends RocketStage {
  thrust_sea_level: Force;
  thrust_vacuum: Force;
}

export interface RocketIsp {
  sea_level: number;
  vacuum: number;
}

export interface RocketLandingLegs {
  number: number;
  material: string;
}

export interface RocketPayload {
  composite_fairing: Rocket; //TODO
  option_1: string;
}

export interface RocketPayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface RocketSecondStage extends RocketStage {
  thrust: Force;
  payloads: RocketPayload;
}

export interface RocketStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}
