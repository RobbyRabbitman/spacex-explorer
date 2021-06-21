export abstract class Endpoint {
  protected readonly endpoint: string;
  constructor(
    protected readonly baseUrl: string,
    protected readonly route: string
  ) {
    this.endpoint = `${baseUrl}/${route}`;
  }
}
