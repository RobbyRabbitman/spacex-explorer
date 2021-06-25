import { UUID } from '@spacex/shared/types/common';

export class GetLaunch {
  static readonly type = '[Launch] Get Launch';
  constructor(public readonly id: UUID) {}
}

export class GetLaunches {
  static readonly type = '[Launch] Get Launches';
}
