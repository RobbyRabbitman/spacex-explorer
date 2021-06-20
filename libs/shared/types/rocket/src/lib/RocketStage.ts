import { Force } from '@spacex/shared/types/common';

export interface RocketStage {
  thrust_sea_level: Force;
  thrust_vacuum: Force;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}
