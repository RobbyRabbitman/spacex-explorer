import { Unit } from '@spacex/shared/types/common';

export class SetUnit {
  static readonly type = '[Unit] Set Unit';
  constructor(public readonly unit: Unit) {}
}
