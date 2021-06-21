import { Observable } from 'rxjs';
import { Endpoint } from './Endpoint';
import { HttpClient } from '@angular/common/http';
/**
 *  common resources pattern: GET /<route>, GET /<route>/:id, POST /<route>/query
 */
export abstract class SpacexResource<Resource> extends Endpoint {
  constructor(
    baseUrl: string,
    route: string,
    private readonly http: HttpClient
  ) {
    super(baseUrl, route);
  }

  public fetchAll(): Observable<Array<Resource>> {
    return this.http.get<Array<Resource>>(this.endpoint);
  }

  public fetchOne(id: string): Observable<Resource> {
    return this.http.get<Resource>(`${this.endpoint}/${id}`);
  }
}
