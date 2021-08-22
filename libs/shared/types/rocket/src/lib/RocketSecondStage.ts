import { Force } from '@spacex/shared/types/common';
import { RocketPayload } from './RocketPayload';
import { RocketStage } from './RocketStage';

export interface RocketSecondStage extends RocketStage {
  thrust: Force;
  payloads: RocketPayload;
}
