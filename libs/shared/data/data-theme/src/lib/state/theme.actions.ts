import { Theme } from '@spacex/shared/types/common';

export class SetTheme {
  static readonly type = '[Theme] Set Theme';
  constructor(public readonly theme: Theme) {}
}
