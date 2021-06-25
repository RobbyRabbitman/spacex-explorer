import { Observable } from 'rxjs';
import { Endpoint } from './Endpoint';
import { HttpClient } from '@angular/common/http';
import { UUID } from '@spacex/shared/types/common';
/**
 *  common resources pattern: GET /<route>, GET /<route>/:id, POST /<route>/query
 */
export abstract class SpacexResource<Entity> extends Endpoint {
  constructor(
    baseUrl: string,
    route: string,
    protected readonly http: HttpClient
  ) {
    super(baseUrl, route);
  }

  public fetchEntities(): Observable<Array<Entity>> {
    return this.http.get<Array<Entity>>(this.endpoint);
  }

  public fetch(id: UUID): Observable<Entity> {
    return this.http.get<Entity>(`${this.endpoint}/${id}`);
  }
}
