import { Force } from '@spacex/shared/types/common';
import { RocketStage } from './RocketStage';

export interface RocketFirstStage extends RocketStage {
  thrust_sea_level: Force;
  thrust_vacuum: Force;
}
