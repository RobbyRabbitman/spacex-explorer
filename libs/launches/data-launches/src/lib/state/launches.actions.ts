import { Identifiable, UUID } from '@spacex/shared/types-common';

export class LaunchesAll {
  public static readonly type = '[Launches] All';
}

export class LaunchesOne implements Identifiable {
  public static readonly type = '[Launches] One';
  public constructor(public readonly id: UUID) {}
}

export class LaunchesLatest {
  public static readonly type = '[Launches] Latest';
}
