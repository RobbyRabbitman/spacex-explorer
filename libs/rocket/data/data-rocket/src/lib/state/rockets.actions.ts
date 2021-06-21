export class GetSingleRocket {
  static readonly type = '[Rocket] Get Single Rocket';
  constructor(public readonly id: string) {}
}

export class GetAllRockets {
  static readonly type = '[Rocket] Get All Rockets';
}
