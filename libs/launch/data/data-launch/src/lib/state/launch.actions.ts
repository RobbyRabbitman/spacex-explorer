import { UUID } from '@spacex/shared/types/common';

export class GetLaunch {
  static readonly type = '[Launch] Get Launch';
  constructor(public readonly id: UUID) {}
}
export class GetLatestLaunch {
  static readonly type = '[Launch] Get Latest Launch';
  constructor(public readonly id: UUID) {}
}
export class GetNextLaunch {
  static readonly type = '[Launch] Get Next Launch';
  constructor(public readonly id: UUID) {}
}

export class GetLaunches {
  static readonly type = '[Launch] Get Launches';
}
