export class GetOneLaunch {
  static readonly type = '[Launch] Get One Launch';
  constructor(public readonly name: string) {}
}

export class GetAllLaunches {
  static readonly type = '[Launch] Get All Launches';
}
