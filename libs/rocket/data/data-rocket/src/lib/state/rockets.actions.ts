import { UUID } from '@spacex/shared/types/common';

export class GetRocket {
  static readonly type = '[Rocket] Get Rocket';
  constructor(public readonly id: UUID) {}
}

export class GetRockets {
  static readonly type = '[Rocket] Get Rockets';
}
