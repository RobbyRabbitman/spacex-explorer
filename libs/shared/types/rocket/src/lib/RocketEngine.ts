import { Force } from '@spacex/shared/types/common';
import { RocketIsp } from './RocketIsp';

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
